function playVideo() {
    // Hide the thumbnail and play button
    document.getElementById('videoThumbnail').style.display = 'none';
    document.getElementById('playButton').style.display = 'none';

    // Create and insert YouTube iframe with autoplay enabled
    let videoFrame = document.getElementById('videoFrame');
    videoFrame.style.display = 'block';
    videoFrame.innerHTML = `
        <iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/XmfuFoMBW6w?autoplay=1&rel=0&showinfo=0&modestbranding=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>`;
}