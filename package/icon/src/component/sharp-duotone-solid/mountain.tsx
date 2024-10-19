
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=sharp-duotone-solid mountain}
 * @preview ![mountain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDMuMSAyMDEuNGMyMS42IDI4LjkgNDMuMyA1Ny43IDY0LjkgODYuNmMxNi0yMS4zIDMyLTQyLjcgNDgtNjRjNDIuNyAwIDg1LjMgMCAxMjggMEMzNDEuMyAxNjAgMjk4LjcgOTYgMjU2IDMyYy0zNy42IDU2LjUtNzUuMyAxMTIuOS0xMTIuOSAxNjkuNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAyMjRsLTEyOCAwLTQ4IDY0LTY0LjktODYuNkwwIDQxNmwwIDY0IDUxMiAwIDAtNjRMMzg0IDIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M143.1 201.4c21.6 28.9 43.3 57.7 64.9 86.6c16-21.3 32-42.7 48-64c42.7 0 85.3 0 128 0C341.3 160 298.7 96 256 32c-37.6 56.5-75.3 112.9-112.9 169.4z" />
            <path d="M384 224l-128 0-48 64-64.9-86.6L0 416l0 64 512 0 0-64L384 224z" />
    </Icon>
);

export default Mountain;