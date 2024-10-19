
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-regular window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgNDY0bDE1MiAwIDAtMTkyTDgwIDI3MmwwIDE5MnptLTQ4IDBMMzIgNDggMzIgMCA4MCAwIDQzMiAwbDQ4IDAgMCA0OCAwIDQxNiA4IDAgMjQgMCAwIDQ4LTI0IDAtOCAwLTQ4IDBMODAgNTEybC00OCAwLTggMEwwIDUxMmwwLTQ4IDI0IDAgOCAwem00MDAgMGwwLTE5Mi0xNTIgMCAwIDE5MiAxNTIgMHpNODAgMjI0bDE1MiAwIDAtMTc2TDgwIDQ4bDAgMTc2em0yMDAgMGwxNTIgMCAwLTE3NkwyODAgNDhsMCAxNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 464l152 0 0-192L80 272l0 192zm-48 0L32 48 32 0 80 0 432 0l48 0 0 48 0 416 8 0 24 0 0 48-24 0-8 0-48 0L80 512l-48 0-8 0L0 512l0-48 24 0 8 0zm400 0l0-192-152 0 0 192 152 0zM80 224l152 0 0-176L80 48l0 176zm200 0l152 0 0-176L280 48l0 176z" />
    </Icon>
);

export default WindowFrame;