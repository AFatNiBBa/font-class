
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-from-square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=solid arrow-up-from-square}
 * @preview ![arrow-up-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzUuODQgMTU5LjcyNUMxNDQuNzM1IDE1OS43MjUgMTUzLjQ2NiAxNTYuMDE1IDE1OS41OTYgMTQ5LjMzMkwxOTIgMTEzLjkzOFYzMjBDMTkyIDMzNy43MDMgMjA2LjMyOCAzNTIuMDMxIDIyNCAzNTIuMDMxUzI1NiAzMzcuNzAzIDI1NiAzMjBWMTEzLjkzOEwyODguNDA0IDE0OS4zMzJDMjk0LjcyNSAxNTYuMjEzIDMwMy4zNjYgMTU5LjcwOCAzMTIuMDMxIDE1OS43MDhDMzI5LjY3NiAxNTkuNzA4IDM0NCAxNDUuNDAxIDM0NCAxMjcuNjgyQzM0NCAxMTkuOTQ5IDM0MS4yMiAxMTIuMTkxIDMzNS41OTIgMTA2LjAzOUwyNDcuNTk0IDkuOTQ1QzI0MS41MzEgMy4zMTQgMjMyLjc2NiAtMC4wMDEgMjI0IC0wLjAwMVMyMDYuNDY5IDMuMzE0IDIwMC40MDYgOS45NDVMMTEyLjQwOCAxMDYuMDM5QzEwNi43OCAxMTIuMTkxIDEwNCAxMTkuOTQ5IDEwNCAxMjcuNjgyQzEwNCAxNDUuMzcgMTE4LjM0NiAxNTkuNzI1IDEzNS44NCAxNTkuNzI1Wk0zODQgMTkySDMwNFYyNTZIMzg0VjQ0OEg2NFYyNTZIMTQ0VjE5Mkg2NEMyOC43MTkgMTkyIDAgMjIwLjcxOSAwIDI1NlY0NDhDMCA0ODMuMjgxIDI4LjcxOSA1MTIgNjQgNTEySDM4NEM0MTkuMjgxIDUxMiA0NDggNDgzLjI4MSA0NDggNDQ4VjI1NkM0NDggMjIwLjcxOSA0MTkuMjgxIDE5MiAzODQgMTkyWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUpFromSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M135.84 159.725C144.735 159.725 153.466 156.015 159.596 149.332L192 113.938V320C192 337.703 206.328 352.031 224 352.031S256 337.703 256 320V113.938L288.404 149.332C294.725 156.213 303.366 159.708 312.031 159.708C329.676 159.708 344 145.401 344 127.682C344 119.949 341.22 112.191 335.592 106.039L247.594 9.945C241.531 3.314 232.766 -0.001 224 -0.001S206.469 3.314 200.406 9.945L112.408 106.039C106.78 112.191 104 119.949 104 127.682C104 145.37 118.346 159.725 135.84 159.725ZM384 192H304V256H384V448H64V256H144V192H64C28.719 192 0 220.719 0 256V448C0 483.281 28.719 512 64 512H384C419.281 512 448 483.281 448 448V256C448 220.719 419.281 192 384 192Z " />
        </Icon>
    </>
}