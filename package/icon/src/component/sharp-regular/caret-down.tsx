
import { Icon } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-regular caret-down}
 * @preview ![caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDE5Mmw0OCAwIDAgNDhMMTYwIDM4NCAwIDI0MGwwLTQ4IDQ4IDAgMjI0IDB6TTcxLjggMjQwTDE2MCAzMTkuNCAyNDguMiAyNDAgNzEuOCAyNDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 192l48 0 0 48L160 384 0 240l0-48 48 0 224 0zM71.8 240L160 319.4 248.2 240 71.8 240z" />
    </Icon>
);

export default CaretDown;