
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-progress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=sharp-duotone-solid bars-progress}
 * @preview ![bars-progress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjg4bDAgNjQgMjU2IDAgMCAzMi0yNTYgMCAwIDY0IDI1NiAwIDY0IDAgMC02NCAwLTMyIDAtNjQtNjQgMC0yNTYgMHpNMzIwIDY0bDAgNjQgMTI4IDAgMCAzMi0xMjggMCAwIDY0IDEyOCAwIDY0IDAgMC02NCAwLTMyIDAtNjQtNjQgMEwzMjAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDY0SDMyMFYyMjRIMFY2NHpNMCAyODhIMTkyVjQ0OEgwVjI4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 288l0 64 256 0 0 32-256 0 0 64 256 0 64 0 0-64 0-32 0-64-64 0-256 0zM320 64l0 64 128 0 0 32-128 0 0 64 128 0 64 0 0-64 0-32 0-64-64 0L320 64z" />
            <path d="M0 64H320V224H0V64zM0 288H192V448H0V288z" />
    </Icon>
);

export default BarsProgress;