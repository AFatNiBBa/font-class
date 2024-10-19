
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-quote?s=sharp-duotone-solid message-quote}
 * @preview ![message-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTI4IDExMmwwIDExMiA2NCAwIDAgMzItMjQgMC0yNCAwIDAgNDggMjQgMCA0OCAwIDI0IDAgMC0yNCAwLTU2IDAtNDggMC0yNCAwLTQwLTExMiAwem0xNDQgMGwwIDExMiA2NCAwIDAgMzItMjQgMC0yNCAwIDAgNDggMjQgMCA0OCAwIDI0IDAgMC0yNCAwLTU2IDAtNDggMC0yNCAwLTQwLTExMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDExMmwxMTIgMCAwIDQwIDAgMjQgMCA0OCAwIDU2IDAgMjQtMjQgMC00OCAwLTI0IDAgMC00OCAyNCAwIDI0IDAgMC0zMi02NCAwIDAtMTEyem0xNDQgMGwxMTIgMCAwIDQwIDAgMjQgMCA0OCAwIDU2IDAgMjQtMjQgMC00OCAwLTI0IDAgMC00OCAyNCAwIDI0IDAgMC0zMi02NCAwIDAtMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageQuote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM128 112l0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40-112 0zm144 0l0 112 64 0 0 32-24 0-24 0 0 48 24 0 48 0 24 0 0-24 0-56 0-48 0-24 0-40-112 0z" />
            <path d="M128 112l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112zm144 0l112 0 0 40 0 24 0 48 0 56 0 24-24 0-48 0-24 0 0-48 24 0 24 0 0-32-64 0 0-112z" />
    </Icon>
);

export default MessageQuote;