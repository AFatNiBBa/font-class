
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=sharp-regular circle-half-stroke}
 * @preview ![circle-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NmMwLTExNC45LTkzLjEtMjA4LTIwOC0yMDhsMCA0MTZjMTE0LjkgMCAyMDgtOTMuMSAyMDgtMjA4ek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-114.9-93.1-208-208-208l0 416c114.9 0 208-93.1 208-208zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleHalfStroke;