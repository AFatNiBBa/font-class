
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-solid up-down}
 * @preview ![up-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxMjhMMTI4IDAgMjU2IDEyOGwwIDMyLTgwIDAgMCAxOTIgODAgMCAwIDMyTDEyOCA1MTIgMCAzODRsMC0zMiA4MCAwIDAtMTkyTDAgMTYwbDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M0 128L128 0 256 128l0 32-80 0 0 192 80 0 0 32L128 512 0 384l0-32 80 0 0-192L0 160l0-32z" />
    </Icon>
);

export default UpDown;