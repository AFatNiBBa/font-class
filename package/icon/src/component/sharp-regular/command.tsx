
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=sharp-regular command}
 * @preview ![command](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDI0IDAgMTYwIDBsMjQgMCAwIDI0IDAgMTEyIDE0NCAwIDAtMTEyIDAtMjQgMjQgMEw0ODggMGwyNCAwIDAgMjQgMCAxNDQgMCAyNC0yNCAwLTExMiAwIDAgMTI4IDExMiAwIDI0IDAgMCAyNCAwIDE0NCAwIDI0LTI0IDAtMTM2IDAtMjQgMCAwLTI0IDAtMTEyLTE0NCAwIDAgMTEyIDAgMjQtMjQgMEwyNCA1MTIgMCA1MTJsMC0yNEwwIDM0NGwwLTI0IDI0IDAgMTEyIDAgMC0xMjhMMjQgMTkyIDAgMTkybDAtMjRMMCAyNCAwIDB6TTEzNiAxNDRsMC04IDAtODhMNDggNDhsMCA5NiA4OCAwem00OCAxNzZsMCA4IDE0NCAwIDAtOCAwLTEyOCAwLTgtMTQ0IDAgMCA4IDAgMTI4em0tNDggNDhsLTg4IDAgMCA5NiA4OCAwIDAtODggMC04em0yNDAgOGwwIDg4IDg4IDAgMC05Ni04OCAwIDAgOHptMC0yMzJsODggMCAwLTk2LTg4IDAgMCA4OCAwIDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L24 0 160 0l24 0 0 24 0 112 144 0 0-112 0-24 24 0L488 0l24 0 0 24 0 144 0 24-24 0-112 0 0 128 112 0 24 0 0 24 0 144 0 24-24 0-136 0-24 0 0-24 0-112-144 0 0 112 0 24-24 0L24 512 0 512l0-24L0 344l0-24 24 0 112 0 0-128L24 192 0 192l0-24L0 24 0 0zM136 144l0-8 0-88L48 48l0 96 88 0zm48 176l0 8 144 0 0-8 0-128 0-8-144 0 0 8 0 128zm-48 48l-88 0 0 96 88 0 0-88 0-8zm240 8l0 88 88 0 0-96-88 0 0 8zm0-232l88 0 0-96-88 0 0 88 0 8z" />
    </Icon>
);

export default Command;