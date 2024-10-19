
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kit-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kit-medical?s=sharp-duotone-solid kit-medical}
 * @preview ![kit-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwzMiAwIDAgNDQ4LTMyIDBMOTYgMzJ6bTM1MiAwbDMyIDAgMCA0NDgtMzIgMCAwLTQ0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzJMMCA0ODBsOTYgMEw5NiAzMiAwIDMyem0xMjggMGwwIDQ0OCAzMjAgMCAwLTQ0OEwxMjggMzJ6TTU3NiA0ODBsMC00NDgtOTYgMCAwIDQ0OCA5NiAwek0yNTYgMTYwbDY0IDAgMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0LTY0IDAgMC02NC02NCAwIDAtNjQgNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const KitMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l32 0 0 448-32 0L96 32zm352 0l32 0 0 448-32 0 0-448z" />
            <path d="M0 32L0 480l96 0L96 32 0 32zm128 0l0 448 320 0 0-448L128 32zM576 480l0-448-96 0 0 448 96 0zM256 160l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default KitMedical;