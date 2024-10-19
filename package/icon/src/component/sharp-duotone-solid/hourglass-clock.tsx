
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=sharp-duotone-solid hourglass-clock}
 * @preview ![hourglass-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzIgMCAzNTIgMGwzMiAwIDAgNjQtMzIgMCAwIDY0IDAgMTMuMy05LjQgOS40TDIzNy4zIDI1NmwzNiAzNmMtMTAuNyAyMi4yLTE2LjggNDcuMS0xNy4yIDczLjNsLTY0LTY0LTk2IDk2TDk2IDQ0OGwxNzkuMiAwYzEzLjEgMjUuNiAzMi4yIDQ3LjYgNTUuNiA2NEwzMiA1MTIgMCA1MTJsMC02NCAzMiAwIDAtNjQgMC0xMy4zIDkuNC05LjRMMTQ2LjcgMjU2IDQxLjQgMTUwLjYgMzIgMTQxLjMgMzIgMTI4bDAtNjRMMCA2NCAwIDB6TTk2IDY0bDAgNTAuNyA5NiA5NiA5Ni05NkwyODggNjQgOTYgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MzIgNTEyYTE0NCAxNDQgMCAxIDAgMC0yODggMTQ0IDE0NCAwIDEgMCAwIDI4OHptMTYtMjA4bDAgNDggMzIgMCAxNiAwIDAgMzItMTYgMC00OCAwLTE2IDAgMC0xNiAwLTY0IDAtMTYgMzIgMCAwIDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L32 0 352 0l32 0 0 64-32 0 0 64 0 13.3-9.4 9.4L237.3 256l36 36c-10.7 22.2-16.8 47.1-17.2 73.3l-64-64-96 96L96 448l179.2 0c13.1 25.6 32.2 47.6 55.6 64L32 512 0 512l0-64 32 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64L0 64 0 0zM96 64l0 50.7 96 96 96-96L288 64 96 64z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default HourglassClock;