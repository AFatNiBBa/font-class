
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-plus?s=sharp-duotone-solid message-plus}
 * @preview ![message-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTQ0IDE4NGwwIDQ4IDI0IDAgNjQgMCAwIDY0IDAgMjQgNDggMCAwLTI0IDAtNjQgNjQgMCAyNCAwIDAtNDgtMjQgMC02NCAwIDAtNjQgMC0yNC00OCAwIDAgMjQgMCA2NC02NCAwLTI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzIgMjk2bDAgMjQgNDggMCAwLTI0IDAtNjQgNjQgMCAyNCAwIDAtNDgtMjQgMC02NCAwIDAtNjQgMC0yNC00OCAwIDAgMjQgMCA2NC02NCAwLTI0IDAgMCA0OCAyNCAwIDY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MessagePlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM144 184l0 48 24 0 64 0 0 64 0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0z" />
            <path d="M232 296l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default MessagePlus;