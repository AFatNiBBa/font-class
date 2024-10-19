
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-u` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=sharp-duotone-solid circle-u}
 * @preview ![circle-u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTE0NCAxNDRsNDggMCAwIDI0IDAgMTIwYzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjRsMC0xMjAgMC0yNCA0OCAwIDAgMjQgMCAxMjBjMCA2MS45LTUwLjEgMTEyLTExMiAxMTJzLTExMi01MC4xLTExMi0xMTJsMC0xMjAgMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNDRsMCAyNCAwIDEyMGMwIDM1LjMgMjguNyA2NCA2NCA2NHM2NC0yOC43IDY0LTY0bDAtMTIwIDAtMjQgNDggMCAwIDI0IDAgMTIwYzAgNjEuOS01MC4xIDExMi0xMTIgMTEycy0xMTItNTAuMS0xMTItMTEybDAtMTIwIDAtMjQgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleU: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 144l48 0 0 24 0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120 0-24z" />
            <path d="M192 144l0 24 0 120c0 35.3 28.7 64 64 64s64-28.7 64-64l0-120 0-24 48 0 0 24 0 120c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-120 0-24 48 0z" />
    </Icon>
);

export default CircleU;