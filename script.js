let btn = document.getElementById("btn");

btn.addEventListener("click", fun);

function fun() {
  let output = document.getElementById("output"); // ✅ fixed
  let input = document.getElementById("ip");
  let num = Number(input.value);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 2000);
  });

  promise
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num * 2), 2000); // ✅ must return new Promise
      });
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num - 3), 1000); // ✅ same fix
      });
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num / 2), 1000);
      });
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(num + 10), 1000);
      });
    })
    .then((num) => {
      output.textContent = `Final Result: ${num}`;
    });
}
