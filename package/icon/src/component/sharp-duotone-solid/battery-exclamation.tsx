
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-duotone-solid battery-exclamation}
 * @preview ![battery-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgNjRMMCAzNTJsMCA2NCA2NCAwIDEyOCAwIDAtNjRMNjQgMzUybDAtMTkyIDE0NCAwIDAtNjRMNjQgOTYgMCA5NnptMzM2IDBsMCA2NCAxNDQgMCAwIDE5Mi0xMjggMCAwIDY0IDEyOCAwIDY0IDAgMC02NCAwLTMyIDMyIDAgMC0xMjgtMzIgMCAwLTMyIDAtNjQtNjQgMEwzMzYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOTYgMTIwbDAtMjQtNDggMCAwIDI0IDAgMTc2IDAgMjQgNDggMCAwLTI0IDAtMTc2em04IDIzMmwtNjQgMCAwIDY0IDY0IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64L0 352l0 64 64 0 128 0 0-64L64 352l0-192 144 0 0-64L64 96 0 96zm336 0l0 64 144 0 0 192-128 0 0 64 128 0 64 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L336 96z" />
            <path d="M296 120l0-24-48 0 0 24 0 176 0 24 48 0 0-24 0-176zm8 232l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default BatteryExclamation;