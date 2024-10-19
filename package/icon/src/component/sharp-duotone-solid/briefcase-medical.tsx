
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-medical?s=sharp-duotone-solid briefcase-medical}
 * @preview ![briefcase-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwyNCAwTDM2MCAwbDI0IDAgMCAyNCAwIDcyLTQ4IDAgMC00OEwxNzYgNDhsMCA0OC00OCAwIDAtNzIgMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiA5NkwwIDk2IDAgNDgwbDUxMiAwIDAtMzg0ek0yMjQgMTkybDY0IDAgMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0LTY0IDAgMC02NC02NCAwIDAtNjQgNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BriefcaseMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l24 0L360 0l24 0 0 24 0 72-48 0 0-48L176 48l0 48-48 0 0-72 0-24z" />
            <path d="M512 96L0 96 0 480l512 0 0-384zM224 192l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default BriefcaseMedical;