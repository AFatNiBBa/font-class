
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-medical?s=sharp-duotone-solid message-medical}
 * @preview ![message-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTYwIDE3NmwwIDY0IDY0IDAgMCA2NCA2NCAwIDAtNjQgNjQgMCAwLTY0LTY0IDAgMC02NC02NCAwIDAgNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAxMTJsLTY0IDAgMCA2NC02NCAwIDAgNjQgNjQgMCAwIDY0IDY0IDAgMC02NCA2NCAwIDAtNjQtNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM160 176l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
            <path d="M288 112l-64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64z" />
    </Icon>
);

export default MessageMedical;