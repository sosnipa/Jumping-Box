const character = document.getElementById(`character`);
const block = document.getElementById(`block`);
const highscore = document.getElementById(`highscore`);

let jumpScore = 0;

function jump() {
  jumpScore++;
  document.getElementById("highscore").innerHTML = jumpScore;
  if (character.classList != `animate`) {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove(`animate`);
  }, 500);
}

const checkDead = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue(`top`)
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue(`left`)
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = `none`;
    block.style.display = `none`;
    alert(`you LOSE😂😂`);
    document.getElementById(`highscore`).innerHTML = jumpScore;
    window.location.reload();
  }
}, 10);
