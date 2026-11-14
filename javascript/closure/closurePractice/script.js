
function counter() {
    let count = 0;

    function increment() {
        count++;
        document.getElementById("count").textContent = count;
    }

    function decrement() {
        count--;
        document.getElementById("count").textContent = count;
    }

    return {
        increment: increment,
        decrement: decrement
    };
}

const result = counter();

document.getElementById("increment").addEventListener("click", result.increment);

document.getElementById("decrement").addEventListener("click", result.decrement);
