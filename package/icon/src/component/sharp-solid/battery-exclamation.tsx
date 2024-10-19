
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-solid battery-exclamation}
 * @preview ![battery-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDk2bDAgNjRMNjQgMTYwbDAgMTkyIDEyOCAwIDAgNjRMNjQgNDE2IDAgNDE2bDAtNjRMMCAxNjAgMCA5Nmw2NCAwIDE0NCAwem0xMjggNjRsMC02NCAxNDQgMCA2NCAwIDAgNjQgMCAzMiAzMiAwIDAgMTI4LTMyIDAgMCAzMiAwIDY0LTY0IDAtMTI4IDAgMC02NCAxMjggMCAwLTE5Mi0xNDQgMHpNMjk2IDk2bDAgMjQgMCAxNzYgMCAyNC00OCAwIDAtMjQgMC0xNzYgMC0yNCA0OCAwem04IDI1NmwwIDY0LTY0IDAgMC02NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 96l0 64L64 160l0 192 128 0 0 64L64 416 0 416l0-64L0 160 0 96l64 0 144 0zm128 64l0-64 144 0 64 0 0 64 0 32 32 0 0 128-32 0 0 32 0 64-64 0-128 0 0-64 128 0 0-192-144 0zM296 96l0 24 0 176 0 24-48 0 0-24 0-176 0-24 48 0zm8 256l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default BatteryExclamation;