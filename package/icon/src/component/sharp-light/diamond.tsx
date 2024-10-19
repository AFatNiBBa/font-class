
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-light diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZsMjIuNiAyMi42TDIzMy40IDQ4OS40IDI1NiA1MTJsMjIuNi0yMi42TDQ4OS40IDI3OC42IDUxMiAyNTZsLTIyLjYtMjIuNkwyNzguNiAyMi42IDI1NiAwIDIzMy40IDIyLjYgMjIuNiAyMzMuNCAwIDI1NnpNMjU2IDQ2Ni43TDQ1LjMgMjU2IDI1NiA0NS4zIDQ2Ni43IDI1NiAyNTYgNDY2Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l22.6 22.6L233.4 489.4 256 512l22.6-22.6L489.4 278.6 512 256l-22.6-22.6L278.6 22.6 256 0 233.4 22.6 22.6 233.4 0 256zM256 466.7L45.3 256 256 45.3 466.7 256 256 466.7z" />
    </Icon>
);

export default Diamond;