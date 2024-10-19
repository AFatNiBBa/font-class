
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=sharp-duotone-solid ethernet}
 * @preview ![ethernet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw2NCAwIDAtNjQgNjQgMCAwLTY0IDI1NiAwIDAgNjQgNjQgMCAwIDY0IDY0IDAgMCAyNTYtOTYgMCAwLTExMiAwLTE2LTMyIDAgMCAxNiAwIDExMi02NCAwIDAtMTEyIDAtMTYtMzIgMCAwIDE2IDAgMTEyLTY0IDAgMC0xMTIgMC0xNi0zMiAwIDAgMTYgMCAxMTItNjQgMCAwLTExMiAwLTE2LTMyIDAgMCAxNiAwIDExMkwwIDQ0OCAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAzMjBsMCAxNiAwIDExMi0zMiAwIDAtMTEyIDAtMTYgMzIgMHptOTYgMGwwIDE2IDAgMTEyLTMyIDAgMC0xMTIgMC0xNiAzMiAwem05NiAwbDAgMTYgMCAxMTItMzIgMCAwLTExMiAwLTE2IDMyIDB6bTk2IDBsMCAxNiAwIDExMi0zMiAwIDAtMTEyIDAtMTYgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l64 0 0-64 64 0 0-64 256 0 0 64 64 0 0 64 64 0 0 256-96 0 0-112 0-16-32 0 0 16 0 112-64 0 0-112 0-16-32 0 0 16 0 112-64 0 0-112 0-16-32 0 0 16 0 112-64 0 0-112 0-16-32 0 0 16 0 112L0 448 0 192z" />
            <path d="M128 320l0 16 0 112-32 0 0-112 0-16 32 0zm96 0l0 16 0 112-32 0 0-112 0-16 32 0zm96 0l0 16 0 112-32 0 0-112 0-16 32 0zm96 0l0 16 0 112-32 0 0-112 0-16 32 0z" />
    </Icon>
);

export default Ethernet;