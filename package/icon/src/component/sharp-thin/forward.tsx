
import { Icon } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-thin forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk3LjYgMjY1LjZMNTEyIDI1NmwtMTQuNC05LjZMMjQwIDc0LjcgMjI0IDY0bDAgMTkuMiAwIDExNS4yTDE2IDczLjYgMCA2NCAwIDgyLjcgMCA0MjkuMyAwIDQ0OGwxNi05LjZMMjI0IDMxMy42bDAgMTE1LjIgMCAxOS4yIDE2LTEwLjdMNDk3LjYgMjY1LjZ6TTIyNCAyOTQuOUwxNiA0MTkuNyAxNiA5Mi4zIDIyNCAyMTcuMWwwIDc3Ljl6bTE2IDEyMy4ybDAtMzI0LjJMNDgzLjIgMjU2IDI0MCA0MTguMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M497.6 265.6L512 256l-14.4-9.6L240 74.7 224 64l0 19.2 0 115.2L16 73.6 0 64 0 82.7 0 429.3 0 448l16-9.6L224 313.6l0 115.2 0 19.2 16-10.7L497.6 265.6zM224 294.9L16 419.7 16 92.3 224 217.1l0 77.9zm16 123.2l0-324.2L483.2 256 240 418.1z" />
    </Icon>
);

export default Forward;