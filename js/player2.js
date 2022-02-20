function setPlayerStyle(player) {
  player.style.border = "1px solid red";
  player.style.borderRadius = "40px";
  player.style.margin = "10px";
  player.style.padding = "10px";
}

const players = document.getElementsByClassName("player");
for (const player of players) {
  setPlayerStyle(player);
  //   player.addEventListener("click", function () {
  //     player.style.backgroundColor = "green";
  //   });
}
function addPlayer() {
  const playersContainer = document.getElementById("players");
  const player = document.createElement("div");
  player.classList.add("player");
  player.innerHTML = `
  <h4 class="player-name">New Player</h4>
          <p>
            Ratione unde vitae sint voluptatum expedita reiciendis sed quis
            alias repellendus accusamus, id necessitatibus ea aspernatur. Nemo,
            quas hic fugit, qui obcaecati possimus quis nisi tempora velit
            asperiores reiciendis recusandae! Optio maiores voluptate
            reprehenderit in quasi consequuntur culpa est, delectus, fugiat ab
            atque iste nesciunt praesentium, ipsam alias voluptates harum
            molestias! Delectus natus aut debitis iusto mollitia maxime, animi
            illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque repudiandae facere quidem quas at accusantium ipsa
            quibusdam obcaecati nesciunt et. Optio maiores voluptate
            reprehenderit in quasi consequuntur culpa est, delectus, fugiat ab
            atque iste nesciunt praesentium, ipsam alias voluptates harum
            molestias! Delectus natus aut debitis iusto mollitia maxime, animi
            illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque repudiandae facere quidem quas at accusantium ipsa
            quibusdam obcaecati nesciunt et.
          </p>
  `;
  playersContainer.appendChild(player);
  setPlayerStyle(player);

  //bangla way to add bgcolor on every player

  //   player.addEventListener("click", function () {
  //     player.style.backgroundColor = "green";
  //   });
}

//With Bubble
document.getElementById("players").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "green";
  } else {
    event.target.parentNode.style.backgroundColor = "green";
  }
});

// document.getElementsByClassName("player")[2].style.backgroundColor = "red";
