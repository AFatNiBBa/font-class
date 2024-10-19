
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=duotone object-exclude}
 * @preview ![object-exclude](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTYwYy0zNS4zIDAtNjQgMjguNy02NCA2NGwwIDEyOCAxMjggMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTEyOC0xMjggMHptODAgNDhsMCA5Ni05NiAwIDAtOTYgOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDBDMjguNyAwIDAgMjguNyAwIDY0TDAgMjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDk2IDAgMCA5NmMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMjQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTIyNGMwLTM1LjMtMjguNy02NC02NC02NGwtOTYgMCAwLTk2YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDB6TTM1MiAxNjBsMCAxMjhjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTEyOCAwIDAtMTI4YzAtMzUuMyAyOC43LTY0IDY0LTY0bDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160c-35.3 0-64 28.7-64 64l0 128 128 0c35.3 0 64-28.7 64-64l0-128-128 0zm80 48l0 96-96 0 0-96 96 0z" />
            <path d="M64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l96 0 0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-96c0-35.3-28.7-64-64-64L64 0zM352 160l0 128c0 35.3-28.7 64-64 64l-128 0 0-128c0-35.3 28.7-64 64-64l128 0z" />
    </Icon>
);

export default ObjectExclude;