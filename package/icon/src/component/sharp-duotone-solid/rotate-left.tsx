
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=sharp-duotone-solid rotate-left}
 * @preview ![rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05Ny42IDk3LjZjODcuNS04Ny41IDIyOS4zLTg3LjUgMzE2LjggMEM0NTguMSAxNDEuMyA0ODAgMTk4LjcgNDgwIDI1NnMtMjEuOSAxMTQuNy02NS42IDE1OC40Yy04Ny41IDg3LjUtMjI5LjMgODcuNS0zMTYuOCAwbDQ1LjMtNDUuM2M2Mi41IDYyLjUgMTYzLjggNjIuNSAyMjYuMyAwczYyLjUtMTYzLjggMC0yMjYuM3MtMTYzLjgtNjIuNS0yMjYuMyAwTDk3LjYgOTcuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAyMjRsMjQtMjRMNDAgNDAgMTYgNjRsMCAxNjBIMTc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M97.6 97.6c87.5-87.5 229.3-87.5 316.8 0C458.1 141.3 480 198.7 480 256s-21.9 114.7-65.6 158.4c-87.5 87.5-229.3 87.5-316.8 0l45.3-45.3c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L97.6 97.6z" />
            <path d="M176 224l24-24L40 40 16 64l0 160H176z" />
    </Icon>
);

export default RotateLeft;