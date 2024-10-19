
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=sharp-duotone-solid screen-users}
 * @preview ![screen-users](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAwTDY0IDAgNTc2IDBsMzIgMCAwIDMyIDAgMjE2LjRjLTE3LTE1LjItMzkuNC0yNC40LTY0LTI0LjRsMC0xNjBMOTYgNjRsMCAxNjBjLTI0LjYgMC00NyA5LjItNjQgMjQuNEwzMiAzMiAzMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMzg0YTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4em0yMjQgMGE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHptMjg4LTY0YTY0IDY0IDAgMSAwIC0xMjggMCA2NCA2NCAwIDEgMCAxMjggMHpNNDE2IDUxMmwtMzItOTYtMTI4IDAtMzIgOTYgMTkyIDB6TTMyIDQxNkwwIDUxMmwxOTIgMC0zMi05NkwzMiA0MTZ6bTYwOCA5NmwtMzItOTYtMTI4IDAtMzIgOTYgMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 0L64 0 576 0l32 0 0 32 0 216.4c-17-15.2-39.4-24.4-64-24.4l0-160L96 64l0 160c-24.6 0-47 9.2-64 24.4L32 32 32 0z" />
            <path d="M96 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm224 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm288-64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM416 512l-32-96-128 0-32 96 192 0zM32 416L0 512l192 0-32-96L32 416zm608 96l-32-96-128 0-32 96 192 0z" />
    </Icon>
);

export default ScreenUsers;