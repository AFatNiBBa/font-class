
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=sharp-solid asterisk}
 * @preview ![asterisk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDMybDAgMzIgMCAxMzUuNSA5NS41LTU3LjNMMzQ3IDEyNS43bDMyLjkgNTQuOUwzNTIuNSAxOTdsLTk4LjMgNTkgOTguMyA1OSAyNy40IDE2LjVMMzQ3IDM4Ni4zbC0yNy40LTE2LjVMMjI0IDMxMi41IDIyNCA0NDhsMCAzMi02NCAwIDAtMzIgMC0xMzUuNUw2NC41IDM2OS44IDM3IDM4Ni4zIDQuMSAzMzEuNCAzMS41IDMxNWw5OC4zLTU5TDMxLjUgMTk3IDQuMSAxODAuNiAzNyAxMjUuN2wyNy40IDE2LjVMMTYwIDE5OS41IDE2MCA2NGwwLTMyIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32l0 32 0 135.5 95.5-57.3L347 125.7l32.9 54.9L352.5 197l-98.3 59 98.3 59 27.4 16.5L347 386.3l-27.4-16.5L224 312.5 224 448l0 32-64 0 0-32 0-135.5L64.5 369.8 37 386.3 4.1 331.4 31.5 315l98.3-59L31.5 197 4.1 180.6 37 125.7l27.4 16.5L160 199.5 160 64l0-32 64 0z" />
    </Icon>
);

export default Asterisk;