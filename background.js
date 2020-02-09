const utils = require("./utils.js");

const personality = {
    one: {
        description: "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example."
    },
    two: {
        description: "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace."
    },
    three: {
        description: "I see omens in every event and action. The gods try to speak to us, we just need to listen."
    },
    four: {
        description: "Nothing can shake my optimistic attitude."
    },
    five: {
        description: "I quote (or misquote) sacred texts and proverbs in almost every situation."
    },
    six: {
        description: "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods."
    },
    seven: {
        description: "I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me."
    },
    eight: {
        description: "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."
    }
}, 

const ideal = {
    one: {
        description: "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)"
    },
    two: {
        description: "	Charity. I always try to help those in need, no matter what the personal cost. (Good)"
    },
    three: {
        description: "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)"
    },
    four: {
        description: "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)"
    },
    five: {
        description: "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)"
    },
    six: {
        description: "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings"
    },
}, 

const bond = {
    one: {
        description: "I would die to recover an ancient relic of my faith that was lost long ago."
    },
    two: {
        description: "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic."
    },
    three: {
        description: "I owe my life to the priest who took me in when my parents died."
    },
    four: {
        description: "Everything I do is for the common people."
    },
    five: {
        description: "I will do anything to protect the temple where I served."
    },
    six: {
        description: "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy"
    },
}, 

const flaw = {
    one: {
        description: "I judge others harshly, and myself even more severely."
    },
    two: {
        description: "I put too much trust in those who wield power within my temple’s hierarchy."
    },
    three: {
        description: "My piety sometimes leads me to blindly trust those that profess faith in my god."
    },
    four: {
        description: "I am inflexible in my thinking."
    },
    five: {
        description: "I am suspicious of strangers and expect the worst of them."
    },
    six: {
        description: "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
    },
}, 