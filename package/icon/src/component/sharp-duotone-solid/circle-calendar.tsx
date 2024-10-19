
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=sharp-duotone-solid circle-calendar}
 * @preview ![circle-calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOCAxMjhsNjQgMCAwLTMyIDMyIDAgMCAzMiA2NCAwIDAtMzIgMzIgMCAwIDMyIDY0IDAgMCA5NiAwIDE2MC0yNTYgMCAwLTE2MCAwLTk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDk2bDMyIDAgMCAzMiA2NCAwIDAtMzIgMzIgMCAwIDMyIDY0IDAgMCA5Ni0yNTYgMCAwLTk2IDY0IDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 128l64 0 0-32 32 0 0 32 64 0 0-32 32 0 0 32 64 0 0 96 0 160-256 0 0-160 0-96z" />
            <path d="M192 96l32 0 0 32 64 0 0-32 32 0 0 32 64 0 0 96-256 0 0-96 64 0 0-32z" />
    </Icon>
);

export default CircleCalendar;