
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-keyboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-keyboard?s=sharp-duotone-solid scanner-keyboard}
 * @preview ![scanner-keyboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNTEybDM1MiAwIDAtNDE2TDAgOTZ6bTY0IDY0bDIyNCAwIDAgNjRMNjQgMjI0bDAtNjR6bTAgMTI4bDk2IDAgMCA2NC05NiAwIDAtNjR6bTAgOTZsOTYgMCAwIDY0LTk2IDAgMC02NHptMTI4LTk2bDk2IDAgMCA2NC05NiAwIDAtNjR6bTAgOTZsOTYgMCAwIDY0LTk2IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAwbDAgNjQtNjQgMCAwLTY0IDY0IDB6TTM1MiAwbDAgNjQtNjQgMCAwLTY0IDY0IDB6TTIyNCAwbDMyIDAgMCA2NC0zMiAwIDAtNjR6TTQxNiAwbDAgMjg4LTMyIDBMMzg0IDBsMzIgMHptMzIgMGw2NCAwIDAgMjg4LTY0IDBMNDQ4IDB6TTI4OCAxNjBsMCA2NEw2NCAyMjRsMC02NCAyMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ScannerKeyboard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 512l352 0 0-416L0 96zm64 64l224 0 0 64L64 224l0-64zm0 128l96 0 0 64-96 0 0-64zm0 96l96 0 0 64-96 0 0-64zm128-96l96 0 0 64-96 0 0-64zm0 96l96 0 0 64-96 0 0-64z" />
            <path d="M192 0l0 64-64 0 0-64 64 0zM352 0l0 64-64 0 0-64 64 0zM224 0l32 0 0 64-32 0 0-64zM416 0l0 288-32 0L384 0l32 0zm32 0l64 0 0 288-64 0L448 0zM288 160l0 64L64 224l0-64 224 0z" />
    </Icon>
);

export default ScannerKeyboard;