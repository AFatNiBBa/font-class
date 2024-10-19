
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-light hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzYuOSAyNTZMMTQ2LjYgNjRsMjE4LjkgMEw0NzUuMSAyNTYgMzY1LjQgNDQ4bC0yMTguOSAwTDM2LjkgMjU2ek0xMjggMzJMMCAyNTYgMTI4IDQ4MGwyNTYgMEw1MTIgMjU2IDM4NCAzMiAxMjggMzJ6bTMyIDIwOGwtMTYgMCAwIDMyIDE2IDAgMTkyIDAgMTYgMCAwLTMyLTE2IDAtMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.9 256L146.6 64l218.9 0L475.1 256 365.4 448l-218.9 0L36.9 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm32 208l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0z" />
    </Icon>
);

export default HexagonMinus;