
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-exclamation?s=sharp-duotone-solid message-exclamation}
 * @preview ![message-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMjMyIDgwbDAgMjQgMCAxMTIgMCAyNCA0OCAwIDAtMjQgMC0xMTIgMC0yNC00OCAwem0wIDE5MmwwIDQ4IDQ4IDAgMC00OC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjgwIDEwNGwwLTI0LTQ4IDAgMCAyNCAwIDExMiAwIDI0IDQ4IDAgMC0yNCAwLTExMnptMCAxNjhsLTQ4IDAgMCA0OCA0OCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM232 80l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0zm0 192l0 48 48 0 0-48-48 0z" />
            <path d="M280 104l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default MessageExclamation;