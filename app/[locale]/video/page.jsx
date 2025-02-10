import Header from '@components/Header.js';
import VideoPlayer from '@components/VideoPlayer.js';

export default async function VideoPage(){
    return (
            <div className='background'>
                <Header/>
                <div className="bodyContainer">
                    <VideoPlayer />

                </div>
            </div>
    );
}