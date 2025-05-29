document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const spacer = document.querySelector('.spacer');
    let videoDuration = 0;
    let videoReady = false;

    // Wait for video metadata to load before setting up scroll handler
    video.addEventListener('loadedmetadata', () => {
        videoDuration = video.duration;
        videoReady = true;
        
        // Adjust spacer height based on video duration (1vh = 1% of viewport height)
        // This creates enough scroll space for the video duration
        spacer.style.height = `${videoDuration * 100}vh`;
        
        console.log(`Video loaded: ${videoDuration} seconds`);
    });

    // Handle scroll events to control video playback
    window.addEventListener('scroll', () => {
        if (!videoReady) return;
        
        // Calculate scroll position as a percentage
        const scrollPosition = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPosition / docHeight;
        
        // Set video current time based on scroll percentage
        const newTime = videoDuration * scrollPercentage;
        
        // Only update if needed to prevent constant seeking
        if (Math.abs(video.currentTime - newTime) > 0.01) {
            video.currentTime = newTime;
        }
    });

    // Pause the video by default (will be controlled by scroll)
    video.pause();
}); 