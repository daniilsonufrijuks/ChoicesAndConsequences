
document.addEventListener("DOMContentLoaded", () => {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");

    // Отображение истории
    function displayStory(storyKey) {
        const story = storyData[storyKey];
        storyElement.textContent = story.text;
        choicesElement.innerHTML = "";

        if (story.choices.length === 0) {
            const endMessage = document.createElement("div");
            endMessage.classList.add("end-message");
            endMessage.textContent = "Конец истории.";
            choicesElement.appendChild(endMessage);
            return;
        }

        story.choices.forEach((choice, index) => {
            const card = document.createElement("div");
            card.textContent = choice.text;
            card.classList.add("card");
            card.style.animationDelay = `${index * 0.1}s`; // Задержка для последовательной анимации
            card.addEventListener("click", () => displayStory(choice.next));
            choicesElement.appendChild(card);
        });
    }

    // Начать игру
    displayStory("start");
});
