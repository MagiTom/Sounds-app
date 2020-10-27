window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const pad6 = document.querySelector('.pad6');
    const visual = document.querySelector(".visual");
    const header = document.querySelector("header");
    let changeColor;
    let speed = 0;

    const colors = [
        "#707072",
        "#6860d3",
        "#9660d3",
        "#609bd3",
        "#d360b0",
        "#c23447",
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            clearInterval(changeColor);
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubles(index);
            if (pad === pads[5]) {
                changeColor = setInterval(() => {
                    ++speed
                    if (speed % 2 === 0) {

                        header.style.backgroundColor = 'lightblue'
                    } else {

                        header.style.backgroundColor = 'red';
                    }
                }, 500);

            } else {


                header.style.backgroundColor = colors[index];
            }
        });
    });

    const createBubles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        if (index === 0) {
            bubble.classList.add('bat');
            bubble.style.animation = "jump2 3s ease";
        } else {
            bubble.style.backgroundColor = colors[index];
            bubble.style.animation = "jump 1s ease";
        }


        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        })
    };



});