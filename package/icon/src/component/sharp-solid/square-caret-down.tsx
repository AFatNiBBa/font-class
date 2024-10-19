
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=sharp-solid square-caret-down}
 * @preview ![square-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0ODBsNDQ4IDAgMC00NDhMMCAzMiAwIDQ4MHpNMzUyIDIyNEwyMjQgMzUyIDk2IDIyNGwwLTMyIDI1NiAwIDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l448 0 0-448L0 32 0 480zM352 224L224 352 96 224l0-32 256 0 0 32z" />
    </Icon>
);

export default SquareCaretDown;