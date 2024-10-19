
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-predecessor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-predecessor?s=duotone diagram-predecessor}
 * @preview ![diagram-predecessor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDM4NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtNjRjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMjg4Yy0zNS4zIDAtNjQgMjguNy02NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAyMjRjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC02NCA4MCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDE2LTM4LjEgMGMtMjEuNCAwLTMyLjEgMjUuOS0xNyA0MUwzOTkgMjM5YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwTDUwMyAxNjljMTUuMS0xNS4xIDQuNC00MS0xNy00MUw0NDggMTI4bDAtMTZjMC00NC4yLTM1LjgtODAtODAtODBMMjI0IDMybC0xNiAwTDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZsMCA2NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramPredecessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64z" />
            <path d="M224 224c35.3 0 64-28.7 64-64l0-64 80 0c8.8 0 16 7.2 16 16l0 16-38.1 0c-21.4 0-32.1 25.9-17 41L399 239c9.4 9.4 24.6 9.4 33.9 0L503 169c15.1-15.1 4.4-41-17-41L448 128l0-16c0-44.2-35.8-80-80-80L224 32l-16 0L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l160 0z" />
    </Icon>
);

export default DiagramPredecessor;