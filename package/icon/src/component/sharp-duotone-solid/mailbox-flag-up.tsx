
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mailbox-flag-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox-flag-up?s=sharp-duotone-solid mailbox-flag-up}
 * @preview ![mailbox-flag-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgNjRjNzkuNSAwIDE0NCA2NC41IDE0NCAxNDRsMCAyNDAgMjg4IDAgMC0yNDBjMC01Ni41LTMyLjYtMTA1LjUtODAtMTI5bDAgMTcgMCAxNi0xNiAwLTY0IDAgMCA5NiAwIDE2LTMyIDAgMC0xNiAwLTExMiAwLTMyTDE0NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAyMjRsMC0xNiAwLTExMiAwLTQ4IDAtMTYgMTYgMCA4MCAwIDE2IDAgMCAxNiAwIDQ4IDAgMTYtMTYgMC02NCAwIDAgOTYgMCAxNi0zMiAwek0wIDIwOEMwIDEyOC41IDY0LjUgNjQgMTQ0IDY0czE0NCA2NC41IDE0NCAxNDRsMCAyNDBMMCA0NDggMCAyMDh6bTY0LTE2bDAgMzIgMTYgMCAxMjggMCAxNiAwIDAtMzItMTYgMEw4MCAxOTJsLTE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MailboxFlagUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 64c79.5 0 144 64.5 144 144l0 240 288 0 0-240c0-56.5-32.6-105.5-80-129l0 17 0 16-16 0-64 0 0 96 0 16-32 0 0-16 0-112 0-32L144 64z" />
            <path d="M384 224l0-16 0-112 0-48 0-16 16 0 80 0 16 0 0 16 0 48 0 16-16 0-64 0 0 96 0 16-32 0zM0 208C0 128.5 64.5 64 144 64s144 64.5 144 144l0 240L0 448 0 208zm64-16l0 32 16 0 128 0 16 0 0-32-16 0L80 192l-16 0z" />
    </Icon>
);

export default MailboxFlagUp;