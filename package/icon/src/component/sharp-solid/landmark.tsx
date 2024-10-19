
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-solid landmark}
 * @preview ![landmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNDRsMCA0OCA1MTIgMCAwLTQ4TDI1NiAwIDAgMTQ0em0xMjggODBsLTY0IDAgMCAxOTJMMCA0NjRsMCA0OCA1MTIgMCAwLTQ4LTY0LTQ4IDAtMTkyLTY0IDAgMCAxOTItNDAgMCAwLTE5Mi02NCAwIDAgMTkyLTQ4IDAgMC0xOTItNjQgMCAwIDE5Mi00MCAwIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 144l0 48 512 0 0-48L256 0 0 144zm128 80l-64 0 0 192L0 464l0 48 512 0 0-48-64-48 0-192-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192z" />
    </Icon>
);

export default Landmark;