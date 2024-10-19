
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=sharp-thin dash}
 * @preview ![dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNDhsOCAwIDQ5NiAwIDggMCAwIDE2LTggMEw4IDI2NGwtOCAwIDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 248l8 0 496 0 8 0 0 16-8 0L8 264l-8 0 0-16z" />
    </Icon>
);

export default Dash;