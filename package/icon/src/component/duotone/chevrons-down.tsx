
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=duotone chevrons-down}
 * @preview ![chevrons-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGMwIDguMiAzLjEgMTYuNCA5LjQgMjIuNmwxOTIgMTkyYzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDE5Mi0xOTJjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMjU2IDIxMC43IDg2LjYgNDEuNEM4MC40IDM1LjEgNzIuMiAzMiA2NCAzMnMtMTYuNCAzLjEtMjIuNiA5LjRTMzIgNTUuOCAzMiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3OC42IDQ3MC42Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMGwtMTkyLTE5MmMtMTIuNS0xMi41LTEyLjUtMzIuOCAwLTQ1LjNzMzIuOC0xMi41IDQ1LjMgMEwyNTYgNDAyLjcgNDI1LjQgMjMzLjRjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBzMTIuNSAzMi44IDAgNDUuM2wtMTkyIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64c0 8.2 3.1 16.4 9.4 22.6l192 192c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 210.7 86.6 41.4C80.4 35.1 72.2 32 64 32s-16.4 3.1-22.6 9.4S32 55.8 32 64z" />
            <path d="M278.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-192-192c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L256 402.7 425.4 233.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-192 192z" />
    </Icon>
);

export default ChevronsDown;