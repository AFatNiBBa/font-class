
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=sharp-duotone-solid object-intersect}
 * @preview ![object-intersect](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGwyMjQgMCAwIDk2IDY0IDAgMCA2NCA5NiAwIDAgMjI0LTIyNCAwIDAtOTYtNjQgMCAwLTY0LTk2IDBMNjQgNjR6bTk2IDI4OGwwIDk2IDAgNjQgNjQgMCAyMjQgMCA2NCAwIDAtNjQgMC0yMjQgMC02NC02NCAwLTk2IDAgMC05NiAwLTY0TDI4OCAwIDY0IDAgMCAwIDAgNjQgMCAyODhsMCA2NCA2NCAwIDk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMTYwSDM1MlYzNTJIMTYwVjE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l224 0 0 96 64 0 0 64 96 0 0 224-224 0 0-96-64 0 0-64-96 0L64 64zm96 288l0 96 0 64 64 0 224 0 64 0 0-64 0-224 0-64-64 0-96 0 0-96 0-64L288 0 64 0 0 0 0 64 0 288l0 64 64 0 96 0z" />
            <path d="M160 160H352V352H160V160z" />
    </Icon>
);

export default ObjectIntersect;