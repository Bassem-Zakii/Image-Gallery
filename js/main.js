const popupImgBox = document.querySelector(".popup-img-box");
const gallery = document.querySelector(".gallery");
const popupImg = popupImgBox.querySelector("img");
const pupupImgClose = popupImgBox.querySelector(".close-img");

const generateImg = ([h, v]) => {
  return `
    <div class="itm h${h} v${v}">
      <img src="img/${randomNum(12)}.jpg" />
      <div class="itm__popup">
        <button>View &#8594;</button>
      </div>
    </div>
  `;
};

const randomNum = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};

const handleClick = (e) => {
  const src = e.currentTarget.querySelector("img").src;
  popupImg.src = src;
  popupImgBox.classList.add("open");
};

const close = () => {
  popupImgBox.classList.remove("open");
};

const digits = Array.from({ length: 50 }, () => [
  randomNum(4),
  randomNum(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

const html = digits.map(generateImg).join("");

gallery.innerHTML = html;

const itms = document.querySelectorAll(".gallery .itm");

itms.forEach((itm) => itm.addEventListener("click", handleClick));

pupupImgClose.addEventListener("click", close);


console.log(pupupImgClose)