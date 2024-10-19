
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=sharp-duotone-solid circle-v}
 * @preview ![circle-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOC4xIDE0NGw1Mi40IDBMMjU2IDMxNi4yIDMzMS41IDE0NGw1Mi40IDBMMjc4IDM4NS42IDI3MS43IDQwMGwtMzEuNCAwYy0yLjEtNC44LTQuMi05LjYtNi4zLTE0LjRDMTk4LjcgMzA1LjEgMTYzLjQgMjI0LjUgMTI4LjEgMTQ0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzMxLjUgMTQ0bDUyLjQgMEwyNzggMzg1LjYgMjcxLjcgNDAwbC0zMS40IDBMMjM0IDM4NS42IDEyOC4xIDE0NGw1Mi40IDBMMjU2IDMxNi4yIDMzMS41IDE0NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128.1 144l52.4 0L256 316.2 331.5 144l52.4 0L278 385.6 271.7 400l-31.4 0c-2.1-4.8-4.2-9.6-6.3-14.4C198.7 305.1 163.4 224.5 128.1 144z" />
            <path d="M331.5 144l52.4 0L278 385.6 271.7 400l-31.4 0L234 385.6 128.1 144l52.4 0L256 316.2 331.5 144z" />
    </Icon>
);

export default CircleV;