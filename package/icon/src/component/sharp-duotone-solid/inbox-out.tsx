
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=sharp-duotone-solid inbox-out}
 * @preview ![inbox-out](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEwwIDUxMmw1MTIgMCAwLTE5Mi0xNDQgMC0zMiA2NC0xNjAgMC0zMi02NEwwIDMyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzMzMuM2wwLTMyIDAtMTc4LjcgNDEuNCA0MS40TDM1MiAxODYuNWw0NS4zLTQ1LjMtMjIuNi0yMi42LTk2LTk2TDI1NiAwIDIzMy40IDIyLjZsLTk2IDk2LTIyLjYgMjIuNkwxNjAgMTg2LjVsMjIuNi0yMi42TDIyNCAxMjIuNWwwIDE3OC43IDAgMzIgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320L0 512l512 0 0-192-144 0-32 64-160 0-32-64L0 320z" />
            <path d="M288 333.3l0-32 0-178.7 41.4 41.4L352 186.5l45.3-45.3-22.6-22.6-96-96L256 0 233.4 22.6l-96 96-22.6 22.6L160 186.5l22.6-22.6L224 122.5l0 178.7 0 32 64 0z" />
    </Icon>
);

export default InboxOut;