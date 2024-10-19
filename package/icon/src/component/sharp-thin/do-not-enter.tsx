
import { Icon } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=sharp-thin do-not-enter}
 * @preview ![do-not-enter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTgwLTQ4bDE2IDAgMzIwIDAgMTYgMCAwIDE2IDAgNjQgMCAxNi0xNiAwTDk2IDMwNGwtMTYgMCAwLTE2IDAtNjQgMC0xNnptMTYgMTZsMCA2NCAzMjAgMCAwLTY0TDk2IDIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm80-48l16 0 320 0 16 0 0 16 0 64 0 16-16 0L96 304l-16 0 0-16 0-64 0-16zm16 16l0 64 320 0 0-64L96 224z" />
    </Icon>
);

export default DoNotEnter;