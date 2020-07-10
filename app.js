const correctAnswers = ["B", "B", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    // check Answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show result on page
    // result.querySelector("span").textContent = `${score}%`;
    result.classList.remove("d-none");

    // score animation
    let output = 0;
    const scoreTimer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval(scoreTimer);
        } else {
            output++;
        }
    }, 10);

    // window object (global object)

    // window.setTimeout(() => {
    //     alert("hi");
    // }, 3000);

    window.scrollTo(0,0);
});