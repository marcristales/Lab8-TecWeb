import Timer from "./Timer"

export default {
    title: "Labyrinth/Timer",
    component: Timer,
    tags: ["autodocs"],
}

export const Kitchen = {
    args: {
        theme: "kitchen",
        time: 300,
    }
}

export const Cave = {
    args: {
        theme: "cave",
        time: 10,
    }
}

export const Castle = {
    args: {
        theme: "castle",
        time: 60,
    }
}