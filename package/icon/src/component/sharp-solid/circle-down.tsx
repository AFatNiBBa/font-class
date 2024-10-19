
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-solid circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAxIDI1NiAwYTI1NiAyNTYgMCAxIDEgMCA1MTJ6TTM4NCAyNTZsLTgwIDAgMC0xMjgtOTYgMCAwIDEyOC04MCAwIDAgMTZMMjU2IDQwMCAzODQgMjcybDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM384 256l-80 0 0-128-96 0 0 128-80 0 0 16L256 400 384 272l0-16z" />
    </Icon>
);

export default CircleDown;