const storyData = {
    start: {
        text: "Вы стоите на перекрёстке. Куда пойдёте?",
        choices: [
            { text: "Налево", next: "left" },
            { text: "Направо", next: "right" },
            { text: "Прямо", next: "forward" }
        ]
    },
    left: {
        text: "Вы попали в лес. Что вы будете делать?",
        choices: [
            { text: "Искать путь дальше", next: "deepForest" },
            { text: "Разжечь костёр", next: "campfire" },
            { text: "Вернуться", next: "start" }
        ]
    },
    right: {
        text: "Вы подошли к реке. Что будете делать?",
        choices: [
            { text: "Перейти реку", next: "crossRiver" },
            { text: "Идти вдоль реки", next: "walkRiver" },
            { text: "Вернуться", next: "start" }
        ]
    },
    forward: {
        text: "Вы подошли к горе. Что делать?",
        choices: [
            { text: "Подняться на гору", next: "climb" },
            { text: "Искать обходной путь", next: "bypass" },
            { text: "Вернуться", next: "start" }
        ]
    },
    deepForest: {
        text: "Вы углубились в лес и нашли старый дом. Что вы сделаете?",
        choices: [
            { text: "Зайти внутрь", next: "enterHouse" },
            { text: "Обойти дом", next: "aroundHouse" },
            { text: "Уйти прочь", next: "lostInForest" }
        ]
    },
    campfire: {
        text: "Вы разожгли костёр. Ночью вы услышали шум. Что вы сделаете?",
        choices: [
            { text: "Проверить шум", next: "checkNoise" },
            { text: "Остаться у костра", next: "stayByFire" },
            { text: "Потушить костёр и спрятаться", next: "hideInDark" }
        ]
    },
    crossRiver: {
        text: "Вы переправились через реку и нашли деревню. Что делать дальше?",
        choices: [
            { text: "Зайти в деревню", next: "village" },
            { text: "Идти дальше", next: "forestPath" },
            { text: "Вернуться назад", next: "start" }
        ]
    },
    walkRiver: {
        text: "Вы идёте вдоль реки и находите лодку. Что сделать?",
        choices: [
            { text: "Сесть в лодку", next: "boatRide" },
            { text: "Продолжить пешком", next: "riverCave" },
            { text: "Вернуться назад", next: "start" }
        ]
    },
    climb: {
        text: "Вы поднялись на вершину и нашли странный амулет. Что делать?",
        choices: [
            { text: "Взять амулет", next: "amulet" },
            { text: "Оставить его", next: "summitRest" },
            { text: "Спуститься вниз", next: "start" }
        ]
    },
    bypass: {
        text: "Вы обошли гору и попали в долину. Здесь растёт странный цветок. Что делать?",
        choices: [
            { text: "Сорвать цветок", next: "flower" },
            { text: "Обойти цветок", next: "valleyPath" },
            { text: "Вернуться назад", next: "start" }
        ]
    },
    enterHouse: { text: "В доме было пусто, но вы нашли сундук с сокровищами. Конец.", choices: [] },
    aroundHouse: { text: "Обходя дом, вы нашли тайный ход в подвал. Конец.", choices: [] },
    lostInForest: { text: "Вы заблудились в лесу и не смогли найти выход. Конец.", choices: [] },
    checkNoise: { text: "Вы проверили шум и нашли раненого волка. Конец.", choices: [] },
    stayByFire: { text: "Оставаясь у костра, вы заснули. Утром путь стал яснее. Конец.", choices: [] },
    hideInDark: { text: "Вы спрятались и переждали ночь. Конец.", choices: [] },
    village: { text: "Вы вошли в деревню и встретили местных жителей. Конец.", choices: [] },
    forestPath: { text: "Продолжая путь, вы нашли заброшенный храм. Конец.", choices: [] },
    boatRide: { text: "На лодке вы приплыли в загадочный город. Конец.", choices: [] },
    riverCave: { text: "Продолжая вдоль реки, вы нашли пещеру с кристаллами. Конец.", choices: [] },
    amulet: { text: "Амулет загорелся в ваших руках, открыв портал в другое измерение. Конец.", choices: [] },
    summitRest: { text: "Вы наслаждались видом с вершины. Конец.", choices: [] },
    flower: { text: "Сорвав цветок, вы почувствовали невероятную силу. Конец.", choices: [] },
    valleyPath: { text: "Пройдя через долину, вы нашли мирный город. Конец.", choices: [] }
};
