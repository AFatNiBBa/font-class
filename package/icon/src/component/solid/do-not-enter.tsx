
import { Icon } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=solid do-not-enter}
 * @preview ![do-not-enter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTk2IDIwOGwzMjAgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCA2NGMwIDguOC03LjIgMTYtMTYgMTZMOTYgMzA0Yy04LjggMC0xNi03LjItMTYtMTZsMC02NGMwLTguOCA3LjItMTYgMTYtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96 208l320 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L96 304c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default DoNotEnter;