
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=sharp-duotone-solid inbox-in}
 * @preview ![inbox-in](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEwwIDUxMmw1MTIgMCAwLTE5Mi0xNDQgMC0zMiA2NC0xNjAgMC0zMi02NEwwIDMyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAwbDAgMzIgMCAxNzguNyA0MS40LTQxLjRMMzUyIDE0Ni43IDM5Ny4zIDE5MmwtMjIuNiAyMi42LTk2IDk2TDI1NiAzMzMuM2wtMjIuNi0yMi42LTk2LTk2TDExNC43IDE5MiAxNjAgMTQ2LjdsMjIuNiAyMi42TDIyNCAyMTAuNyAyMjQgMzJsMC0zMiA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320L0 512l512 0 0-192-144 0-32 64-160 0-32-64L0 320z" />
            <path d="M288 0l0 32 0 178.7 41.4-41.4L352 146.7 397.3 192l-22.6 22.6-96 96L256 333.3l-22.6-22.6-96-96L114.7 192 160 146.7l22.6 22.6L224 210.7 224 32l0-32 64 0z" />
    </Icon>
);

export default InboxIn;