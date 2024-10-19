
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=sharp-duotone-solid inboxes}
 * @preview ![inboxes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwxNDQgMCAzMiA2NCAxNjAgMCAzMi02NCAxNDQgMCAwIDE2MEwwIDUxMiAwIDM1MnpNNzkuMyAxNjBjMTIuOC0zMiAyNS42LTY0IDM4LjQtOTZsMjc2LjcgMCAzOC40IDk2TDM2OCAxNjBsLTMyIDY0LTE2MCAwYy0xMC43LTIxLjMtMjEuMy00Mi43LTMyLTY0bC02NC43IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwTDc0LjMgMGwtOCAyMC4xLTY0IDE2MEwwIDE4NS44IDAgMTkybDAgOTYgMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC0zMiAwLTk2IDAtNi4yLTIuMy01LjctNjQtMTYwTDQzNy43IDAgNDE2IDAgOTYgMHpNNzkuMyAxNjBsMzguNC05NiAyNzYuNyAwIDM4LjQgOTZMMzY4IDE2MGwtMzIgNjQtMTYwIDAtMzItNjQtNjQuNyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l144 0 32 64 160 0 32-64 144 0 0 160L0 512 0 352zM79.3 160c12.8-32 25.6-64 38.4-96l276.7 0 38.4 96L368 160l-32 64-160 0c-10.7-21.3-21.3-42.7-32-64l-64.7 0z" />
            <path d="M96 0L74.3 0l-8 20.1-64 160L0 185.8 0 192l0 96 0 32 32 0 448 0 32 0 0-32 0-96 0-6.2-2.3-5.7-64-160L437.7 0 416 0 96 0zM79.3 160l38.4-96 276.7 0 38.4 96L368 160l-32 64-160 0-32-64-64.7 0z" />
    </Icon>
);

export default Inboxes;