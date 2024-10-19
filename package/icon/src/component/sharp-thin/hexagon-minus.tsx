
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-thin hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTguNCAyNTZMMTM3LjMgNDhsMjM3LjQgMEw0OTMuNiAyNTYgMzc0LjcgNDY0bC0yMzcuNCAwTDE4LjQgMjU2ek0xMjggMzJMMCAyNTYgMTI4IDQ4MGwyNTYgMEw1MTIgMjU2IDM4NCAzMiAxMjggMzJ6bTI0IDIzMmwyMDggMCAwLTE2LTIwOCAwIDAgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm24 232l208 0 0-16-208 0 0 16z" />
    </Icon>
);

export default HexagonMinus;