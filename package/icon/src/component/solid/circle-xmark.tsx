
import { Icon } from "../../index";

/**
 * A component that renders the `circle-xmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-xmark?s=solid circle-xmark}
 * @preview ![circle-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTE3NSAxNzVjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsNDcgNDcgNDctNDdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS40IDI0LjYgMCAzMy45bC00NyA0NyA0NyA0N2M5LjQgOS40IDkuNCAyNC42IDAgMzMuOXMtMjQuNiA5LjQtMzMuOSAwbC00Ny00Ny00NyA0N2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBzLTkuNC0yNC42IDAtMzMuOWw0Ny00Ny00Ny00N2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default CircleXmark;