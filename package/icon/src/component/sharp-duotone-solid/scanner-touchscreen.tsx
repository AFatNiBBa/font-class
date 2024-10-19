
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-touchscreen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-touchscreen?s=sharp-duotone-solid scanner-touchscreen}
 * @preview ![scanner-touchscreen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNTEybDM1MiAwIDAtNDE2TDAgOTZ6bTY0IDY0bDIyNCAwIDAgMjg4TDY0IDQ0OGwwLTI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAwTDEyOCAwbDAgNjQgNjQgMCAwLTY0ek0zNTIgMEwyODggMGwwIDY0IDY0IDAgMC02NHpNMjI0IDBsMCA2NCAzMiAwIDAtNjRMMjI0IDB6TTQxNiAwTDM4NCAwbDAgMjg4IDMyIDBMNDE2IDB6bTMyIDBsMCAyODggNjQgMEw1MTIgMCA0NDggMHpNMjg4IDE2MEw2NCAxNjBsMCAyODggMjI0IDAgMC0yODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ScannerTouchscreen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 512l352 0 0-416L0 96zm64 64l224 0 0 288L64 448l0-288z" />
            <path d="M192 0L128 0l0 64 64 0 0-64zM352 0L288 0l0 64 64 0 0-64zM224 0l0 64 32 0 0-64L224 0zM416 0L384 0l0 288 32 0L416 0zm32 0l0 288 64 0L512 0 448 0zM288 160L64 160l0 288 224 0 0-288z" />
    </Icon>
);

export default ScannerTouchscreen;