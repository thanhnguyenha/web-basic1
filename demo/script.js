const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
let count = 0;

btn?.addEventListener("click", () => {
  count += 1;
  msg.textContent = `Bạn đã bấm ${count} lần`;
});
