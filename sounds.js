//Sound Effects

//enderman
const hoverElementEnderman = document.getElementById('enderman-trigger');
const triggerSoundEnderman = document.getElementById('enderman-noise');

hoverElementEnderman.addEventListener('mouseenter', () => {
    hoverElementEnderman.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundEnderman.currentTime = 0;
    triggerSoundEnderman.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementEnderman.addEventListener('mouseleave', () => {
    hoverElementEnderman.style.transform = 'scale(1.0)';
    triggerSoundEnderman.pause();
});


//villager
const hoverElementVillager = document.getElementById('villager-trigger');
const triggerSoundVillager = document.getElementById('villager-noise');

hoverElementVillager.addEventListener('mouseenter', () => {
    hoverElementVillager.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundVillager.currentTime = 0;
    triggerSoundVillager.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementVillager.addEventListener('mouseleave', () => {
    hoverElementVillager.style.transform = 'scale(1.0)';
    triggerSoundVillager.pause();
});

//steve

//witch
const hoverElementWitch = document.getElementById('witch-trigger');
const triggerSoundWitch = document.getElementById('witch-noise');

hoverElementWitch.addEventListener('mouseenter', () => {
    hoverElementWitch.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundWitch.currentTime = 0;
    triggerSoundWitch.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementWitch.addEventListener('mouseleave', () => {
    hoverElementWitch.style.transform = 'scale(1.0)';
    triggerSoundWitch.pause();
});

//skeletor

//creeper

