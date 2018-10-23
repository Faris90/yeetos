// Game variables
var lastRender = 0;
var players = [];

const draw = () => {

}

/**
 * 
 * @param {number} timestamp The time that the loop was called
 */
const loop = (timestamp) => {

    let dt = timestamp - lastRender;

    update(dt);
    draw();

    window.requestAnimationFrame(loop);
}

/**
 * @param {number} dt Change in time (Delta Time)
 */
const update = (dt) => {

};

window.requestAnimationFrame(loop);