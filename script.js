document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.querySelector('#audioPlayer');
    const playBtn = document.querySelector('#playBtn');
    const pauseBtn = document.querySelector('#pauseBtn');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const video_block = document.querySelector(".video_block");
    const player_video = document.querySelector(".player_video");

    const musicArr = [
        { id: 1, name: "Qez es Varder Berem", src: "music/musicSix.mp3" },
        { id: 2, name: "background Music One", src: "music/musicOne.mp3" },
        { id: 3, name: "background Music Two", src: "music/musicTwo.mp3" },
        { id: 4, name: "background Music Three", src: "music/musicThree.mp3" },
        { id: 5, name: "background Music Four", src: "music/musicFour.mp3" },
        { id: 6, name: "background Music Five", src: "music/musicFive.mp3" }
    ];

    let currentTrackIndex = 0;
    let trackElements = [];

    
    musicArr.forEach((res, index) => {
        const trackElement = document.createElement('div');
        trackElement.innerHTML = `
            <h1>Music ${res.id}</h1>
            <p>${res.name}</p>
        `;
        video_block.appendChild(trackElement);
        trackElements.push(trackElement);

        
        trackElement.addEventListener('click', () => {
            loadTrack(index);
            audioPlayer.play();
        });
    });

    function loadTrack(index) {
        
        trackElements[currentTrackIndex].classList.remove('current_track');
        
        
        currentTrackIndex = index;
        
        
        audioPlayer.innerHTML = `<source src="${musicArr[index].src}">`;
        audioPlayer.load();
        
        
        trackElements[index].classList.add('current_track');
        
        
        player_video.innerHTML = `<h2>${musicArr[index].name}</h2>`;
    }

    playBtn.addEventListener('click', () => {
        loadTrack(currentTrackIndex);
        audioPlayer.play();
    });

    pauseBtn.addEventListener('click', () => {
        audioPlayer.pause();
    });

    prevBtn.addEventListener('click', () => {
        if (currentTrackIndex > 0) {
            loadTrack(currentTrackIndex - 1);
            audioPlayer.play();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentTrackIndex < musicArr.length - 1) {
            loadTrack(currentTrackIndex + 1);
            audioPlayer.play();
        }
    });
});
