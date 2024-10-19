
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-nurse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse?s=sharp-duotone-solid user-nurse}
 * @preview ![user-nurse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNjBsMjU2IDBjMCA3MC43LTU3LjMgMTI4LTEyOCAxMjhzLTEyOC01Ny4zLTEyOC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiA5NmwwLTQ4TDIyNCAwIDM1MiA0OGwwIDQ4IDAgMzIgMCAzMkw5NiAxNjBsMC0zMiAwLTMyem0zMC4xIDIyNEwyMjQgNDI0bDk3LjktMTA0IDYyLjEgMCA2NCAxOTJMMCA1MTIgNjQgMzIwbDYyLjEgMHpNMjA4IDY0bC0yNCAwIDAgMzIgMjQgMCAwIDI0IDMyIDAgMC0yNCAyNCAwIDAtMzItMjQgMCAwLTI0LTMyIDAgMCAyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserNurse: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 160l256 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
            <path d="M96 96l0-48L224 0 352 48l0 48 0 32 0 32L96 160l0-32 0-32zm30.1 224L224 424l97.9-104 62.1 0 64 192L0 512 64 320l62.1 0zM208 64l-24 0 0 32 24 0 0 24 32 0 0-24 24 0 0-32-24 0 0-24-32 0 0 24z" />
    </Icon>
);

export default UserNurse;