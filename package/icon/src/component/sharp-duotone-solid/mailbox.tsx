
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=sharp-duotone-solid mailbox}
 * @preview ![mailbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgNjRjNzkuNSAwIDE0NCA2NC41IDE0NCAxNDRsMCAyNDAgMjg4IDAgMC0yNDBjMC03OS41LTY0LjUtMTQ0LTE0NC0xNDRMMTQ0IDY0ek0zODQgMTkybDE2IDAgNjQgMCAzMiAwIDE2IDAgMCAxNiAwIDY0IDAgMTYtMTYgMC0zMiAwLTE2IDAgMC0xNiAwLTQ4LTQ4IDAtMTYgMCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyMDhDMCAxMjguNSA2NC41IDY0IDE0NCA2NHMxNDQgNjQuNSAxNDQgMTQ0bDAgMjQwTDAgNDQ4IDAgMjA4em02NC0xNmwwIDMyIDE2IDAgMTI4IDAgMTYgMCAwLTMyLTE2IDBMODAgMTkybC0xNiAwem0zMzYgMGw2NCAwIDMyIDAgMTYgMCAwIDE2IDAgNjQgMCAxNi0xNiAwLTMyIDAtMTYgMCAwLTE2IDAtNDgtNDggMC0xNiAwIDAtMzIgMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 64c79.5 0 144 64.5 144 144l0 240 288 0 0-240c0-79.5-64.5-144-144-144L144 64zM384 192l16 0 64 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-48-48 0-16 0 0-32z" />
            <path d="M0 208C0 128.5 64.5 64 144 64s144 64.5 144 144l0 240L0 448 0 208zm64-16l0 32 16 0 128 0 16 0 0-32-16 0L80 192l-16 0zm336 0l64 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-48-48 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Mailbox;