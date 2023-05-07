import Wall from "./Wall";

export default {
    title: "Labyrinth/Wall",
    component: Wall,
    tags: ["autodocs"],
    argTypes: {},
}

export const Cave = {
    args: {
        type: 'cave',
    },
}
export const Kitchen = {
    args: {
        type: 'kitchen',
    },
}
export const Castle = {
    args: {
        type: 'castle',
    },
}