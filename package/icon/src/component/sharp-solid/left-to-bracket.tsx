
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=sharp-solid left-to-bracket}
 * @preview ![left-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDk2TDE2MCAyNTYgMzIwIDQxNmwzMiAwIDAtOTYgMTYwIDAgMC0xMjgtMTYwIDAgMC05Ni0zMiAwek0xNjAgNDE2bC05NiAwTDY0IDk2bDk2IDAgMzIgMCAwLTY0LTMyIDBMMzIgMzIgMCAzMiAwIDY0IDAgNDQ4bDAgMzIgMzIgMCAxMjggMCAzMiAwIDAtNjQtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 96L160 256 320 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0zM160 416l-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32 0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0z" />
    </Icon>
);

export default LeftToBracket;