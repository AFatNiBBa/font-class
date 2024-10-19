
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-light caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDEyOGwwIDI1Ni0xLjcgMEw0MyAyNTYgMTU4LjIgMTI4bDEuNyAwem0zMiAwbDAtMzItMzIgMC0xNiAwTDAgMjU2IDE0NCA0MTZsMTYgMCAzMiAwIDAtMzIgMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M160 128l0 256-1.7 0L43 256 158.2 128l1.7 0zm32 0l0-32-32 0-16 0L0 256 144 416l16 0 32 0 0-32 0-256z" />
    </Icon>
);

export default CaretLeft;