import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27018/voicesByTracy";
const client = new MongoClient(uri);

const seedData = [
	{
		title: "Warm Female Voice – Commercial Read",
		description: "Friendly and inviting voice perfect for TV and radio commercials.",
		type: "audio",
		tags: ["commercial", "female", "warm"],
		categories: ["advertising"],
		duration: 32,
		url: "https://example.com/audio/commercial-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/commercial-01.jpg",
		transcript: "Welcome to a better way of doing business...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Corporate Explainer – Professional Tone",
		description: "Clear and confident narration for corporate explainers.",
		type: "video",
		tags: ["corporate", "professional"],
		categories: ["corporate"],
		duration: 58,
		url: "https://example.com/video/explainer-01.mp4",
		thumbnailUrl: "https://example.com/thumbs/explainer-01.jpg",
		transcript: "At our company, clarity and trust come first...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Calm Meditation Voice – Guided Session",
		description: "Soft, calming voice ideal for guided meditation and wellness apps.",
		type: "audio",
		tags: ["meditation", "calm", "soothing"],
		categories: ["wellness"],
		duration: 420,
		url: "https://example.com/audio/meditation-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/meditation-01.jpg",
		transcript: "Take a deep breath and let your thoughts settle...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "E-Learning Narration – Friendly Instructor",
		description: "Approachable voice for online learning and tutorials.",
		type: "video",
		tags: ["elearning", "instructional", "friendly"],
		categories: ["education"],
		duration: 145,
		url: "https://example.com/video/elearning-01.mp4",
		thumbnailUrl: "https://example.com/thumbs/elearning-01.jpg",
		transcript: "In this lesson, we’ll explore the basics...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Luxury Brand Commercial – Smooth Delivery",
		description: "Elegant voice with a premium feel for luxury branding.",
		type: "audio",
		tags: ["luxury", "branding", "smooth"],
		categories: ["advertising"],
		duration: 40,
		url: "https://example.com/audio/luxury-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/luxury-01.jpg",
		transcript: "Experience refinement at every moment...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Podcast Intro – Confident and Modern",
		description: "Short intro voice for modern podcasts.",
		type: "audio",
		tags: ["podcast", "intro", "modern"],
		categories: ["podcasting"],
		duration: 18,
		url: "https://example.com/audio/podcast-intro-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/podcast-intro-01.jpg",
		transcript: "Welcome to the show where ideas come alive...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Documentary Narration – Thoughtful Pace",
		description: "Measured and reflective narration for documentaries.",
		type: "video",
		tags: ["documentary", "narration", "thoughtful"],
		categories: ["film"],
		duration: 210,
		url: "https://example.com/video/documentary-01.mp4",
		thumbnailUrl: "https://example.com/thumbs/documentary-01.jpg",
		transcript: "For centuries, this land has told a story...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Mobile App Onboarding – Friendly Guide",
		description: "Helpful onboarding voice for mobile apps.",
		type: "audio",
		tags: ["app", "onboarding", "friendly"],
		categories: ["technology"],
		duration: 25,
		url: "https://example.com/audio/onboarding-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/onboarding-01.jpg",
		transcript: "Let’s get you set up in just a few steps...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "IVR Phone System – Clear Instructions",
		description: "Professional IVR voice for phone systems.",
		type: "audio",
		tags: ["ivr", "phone", "clear"],
		categories: ["corporate"],
		duration: 12,
		url: "https://example.com/audio/ivr-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/ivr-01.jpg",
		transcript: "Press one for sales, two for support...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "YouTube Ad – Energetic Delivery",
		description: "High-energy voice ideal for short online ads.",
		type: "video",
		tags: ["youtube", "ad", "energetic"],
		categories: ["advertising"],
		duration: 20,
		url: "https://example.com/video/youtube-ad-01.mp4",
		thumbnailUrl: "https://example.com/thumbs/youtube-ad-01.jpg",
		transcript: "Don’t miss out on this limited-time offer!",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Audiobook Fiction – Expressive Character",
		description: "Expressive narration for fiction audiobooks.",
		type: "audio",
		tags: ["audiobook", "fiction", "expressive"],
		categories: ["audiobooks"],
		duration: 600,
		url: "https://example.com/audio/audiobook-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/audiobook-01.jpg",
		transcript: "The night was quiet, but something felt wrong...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Startup Pitch – Confident and Clear",
		description: "Voiceover for startup pitch decks and demos.",
		type: "video",
		tags: ["startup", "pitch", "confident"],
		categories: ["business"],
		duration: 75,
		url: "https://example.com/video/pitch-01.mp4",
		thumbnailUrl: "https://example.com/thumbs/pitch-01.jpg",
		transcript: "Our platform solves a real problem...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Children’s Story – Playful Tone",
		description: "Bright and playful voice for kids’ stories.",
		type: "audio",
		tags: ["children", "playful", "story"],
		categories: ["kids"],
		duration: 180,
		url: "https://example.com/audio/kids-story-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/kids-story-01.jpg",
		transcript: "Once upon a time, in a colorful forest...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Product Demo – Clear Explanation",
		description: "Straightforward demo voice for product walkthroughs.",
		type: "video",
		tags: ["product", "demo", "clear"],
		categories: ["technology"],
		duration: 95,
		url: "https://example.com/video/demo-01.mp4",
		thumbnailUrl: "https://example.com/thumbs/demo-01.jpg",
		transcript: "Let’s take a look at how this works...",
		uploadedAt: new Date(),
		published: true
	},
	{
		title: "Public Service Announcement – Reassuring",
		description: "Calm and reassuring voice for public messaging.",
		type: "audio",
		tags: ["psa", "reassuring", "calm"],
		categories: ["public"],
		duration: 28,
		url: "https://example.com/audio/psa-01.mp3",
		thumbnailUrl: "https://example.com/thumbs/psa-01.jpg",
		transcript: "Your safety is our top priority...",
		uploadedAt: new Date(),
		published: true
	}
];


async function seed() {
	try {
		await client.connect();
		const db = client.db();
		const collection = db.collection("media");

		console.log("Clearing existing media...");
		await collection.deleteMany({});

		console.log("Inserting seed data...");
		await collection.insertMany(seedData);

		console.log("Media collection seeded successfully");
	} catch (err) {
		console.error("Seeding failed:", err);
	} finally {
		await client.close();
		process.exit(0);
	}
}

seed();
