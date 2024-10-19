
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=sharp-duotone-solid up-down-left-right}
 * @preview ![up-down-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgOTZsMCAzMiA2NCAwIDAgOTYgNjQgMCAwLTk2IDY0IDAgMC0zMkwyNTYgMCAxNjAgOTZ6bTAgMjg4bDAgMzIgOTYgOTYgOTYtOTYgMC0zMi02NCAwIDAtOTYtNjQgMCAwIDk2LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzNTJMMCAyNTZsOTYtOTYgMzIgMCAwIDY0IDI1NiAwIDAtNjQgMzIgMCA5NiA5Ni05NiA5Ni0zMiAwIDAtNjQtMjU2IDAgMCA2NC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96l0 32 64 0 0 96 64 0 0-96 64 0 0-32L256 0 160 96zm0 288l0 32 96 96 96-96 0-32-64 0 0-96-64 0 0 96-64 0z" />
            <path d="M96 352L0 256l96-96 32 0 0 64 256 0 0-64 32 0 96 96-96 96-32 0 0-64-256 0 0 64-32 0z" />
    </Icon>
);

export default UpDownLeftRight;