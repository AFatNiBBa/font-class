
import { Icon } from "../../index";

/**
 * A component that renders the `timer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=sharp-light timer}
 * @preview ![timer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBMMjQwIDBsMCAxNiAwIDk2IDAgMTYgMzIgMCAwLTE2IDAtNzkuNEMzODguMiA0MC44IDQ4MCAxMzcuNyA0ODAgMjU2YzAgMTIzLjctMTAwLjMgMjI0LTIyNCAyMjRTMzIgMzc5LjcgMzIgMjU2YzAtNjEuOSAyNS4xLTExNy44IDY1LjYtMTU4LjRMNzUgNzVDMjguNyAxMjEuMyAwIDE4NS4zIDAgMjU2QzAgMzk3LjQgMTE0LjYgNTEyIDI1NiA1MTJzMjU2LTExNC42IDI1Ni0yNTZTMzk3LjQgMCAyNTYgMHpNMTcxLjMgMTQ4LjdMMTYwIDEzNy40IDEzNy40IDE2MGwxMS4zIDExLjMgOTYgOTZMMjU2IDI3OC42IDI3OC42IDI1NmwtMTEuMy0xMS4zLTk2LTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L240 0l0 16 0 96 0 16 32 0 0-16 0-79.4C388.2 40.8 480 137.7 480 256c0 123.7-100.3 224-224 224S32 379.7 32 256c0-61.9 25.1-117.8 65.6-158.4L75 75C28.7 121.3 0 185.3 0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM171.3 148.7L160 137.4 137.4 160l11.3 11.3 96 96L256 278.6 278.6 256l-11.3-11.3-96-96z" />
    </Icon>
);

export default Timer;