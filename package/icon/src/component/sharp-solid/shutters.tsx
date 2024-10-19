
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-solid shutters}
 * @preview ![shutters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJMMCAzMiAwIDk2bDMyIDAgNDQ4IDAgMzIgMCAwLTY0LTMyIDBMMzIgMzJ6TTAgMjI0bDUxMiAwLTI0LTk2TDI0IDEyOCAwIDIyNHpNNTEyIDM1MmwtMjQtOTZMMjQgMjU2IDAgMzUybDUxMiAwek0wIDQ4MGw1MTIgMC0yNC05NkwyNCAzODQgMCA0ODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32L0 32 0 96l32 0 448 0 32 0 0-64-32 0L32 32zM0 224l512 0-24-96L24 128 0 224zM512 352l-24-96L24 256 0 352l512 0zM0 480l512 0-24-96L24 384 0 480z" />
    </Icon>
);

export default Shutters;