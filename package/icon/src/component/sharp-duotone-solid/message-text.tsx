
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=sharp-duotone-solid message-text}
 * @preview ![message-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTQ0IDExMmwwIDQ4IDI0IDAgNjQgMCAwIDEzNiAwIDI0IDQ4IDAgMC0yNCAwLTEzNiA2NCAwIDI0IDAgMC00OC0yNCAwLTg4IDAtODggMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDExMmwyNCAwIDg4IDAgODggMCAyNCAwIDAgNDgtMjQgMC02NCAwIDAgMTM2IDAgMjQtNDggMCAwLTI0IDAtMTM2LTY0IDAtMjQgMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM144 112l0 48 24 0 64 0 0 136 0 24 48 0 0-24 0-136 64 0 24 0 0-48-24 0-88 0-88 0-24 0z" />
            <path d="M144 112l24 0 88 0 88 0 24 0 0 48-24 0-64 0 0 136 0 24-48 0 0-24 0-136-64 0-24 0 0-48z" />
    </Icon>
);

export default MessageText;