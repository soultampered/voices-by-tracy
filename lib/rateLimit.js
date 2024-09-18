let requests = {}; // Store requests

export const rateLimit = (limit, duration) => {
    return async (req) => {
        const ip = req.headers['x-forwarded-for'] || 'unknown';

        if (!requests[ip]) {
            requests[ip] = { count: 1, firstRequestTime: Date.now() };
        } else {
            requests[ip].count++;
        }

        const now = Date.now();

        if (requests[ip].count > limit && now - requests[ip].firstRequestTime < duration) {
            return new Response(JSON.stringify({ message: "Too many requests" }), {
                status: 429,
            });
        }

        if (now - requests[ip].firstRequestTime > duration) {
            requests[ip] = { count: 1, firstRequestTime: now };
        }

        // Continue with the request
        return null; // Indicates no rate limit issue
    };
};
