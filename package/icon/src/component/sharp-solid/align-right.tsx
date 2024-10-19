
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-solid align-right}
 * @preview ![align-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMybDAgNjRMMTYwIDk2bDAtNjQgMjg4IDB6bTAgMjU2bDAgNjQtMjg4IDAgMC02NCAyODggMHpNMCAxNjBsNDQ4IDAgMCA2NEwwIDIyNGwwLTY0ek00NDggNDE2bDAgNjRMMCA0ODBsMC02NCA0NDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32l0 64L160 96l0-64 288 0zm0 256l0 64-288 0 0-64 288 0zM0 160l448 0 0 64L0 224l0-64zM448 416l0 64L0 480l0-64 448 0z" />
    </Icon>
);

export default AlignRight;