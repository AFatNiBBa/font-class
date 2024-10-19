
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=duotone diagram-cells}
 * @preview ![diagram-cells](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtNjRjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMjg4Yy0zNS4zIDAtNjQgMjguNy02NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAyMjRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWOTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NmwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64z" />
            <path d="M448 224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0z" />
    </Icon>
);

export default DiagramCells;