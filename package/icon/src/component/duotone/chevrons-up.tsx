
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=duotone chevrons-up}
 * @preview ![chevrons-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0NDhjMCA4LjIgMy4xIDE2LjQgOS40IDIyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBMMjU2IDMwMS4zIDQyNS40IDQ3MC42YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwYzYuMi02LjIgOS40LTE0LjQgOS40LTIyLjZzLTMuMS0xNi40LTkuNC0yMi42bC0xOTItMTkyYy02LjItNi4yLTE0LjQtOS40LTIyLjYtOS40cy0xNi40IDMuMS0yMi42IDkuNGwtMTkyIDE5MkMzNS4xIDQzMS42IDMyIDQzOS44IDMyIDQ0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzMy40IDQxLjRjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBsMTkyIDE5MmMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM3MtMzIuOCAxMi41LTQ1LjMgMEwyNTYgMTA5LjMgODYuNiAyNzguNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBzLTEyLjUtMzIuOCAwLTQ1LjNsMTkyLTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0L256 301.3 425.4 470.6c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-192-192c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4l-192 192C35.1 431.6 32 439.8 32 448z" />
            <path d="M233.4 41.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3 86.6 278.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </Icon>
);

export default ChevronsUp;