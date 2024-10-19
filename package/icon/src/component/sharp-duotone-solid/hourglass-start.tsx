
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=sharp-duotone-solid hourglass-start}
 * @preview ![hourglass-start](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGMyMS4zIDAgNDIuNyAwIDY0IDBjNjQgMCAxMjggMCAxOTIgMGw2NCAwIDAgNjQgMCAxMy4zLTkuNCA5LjRMMjM3LjMgMjU2IDM0Mi42IDM2MS40bDkuNCA5LjQgMCAxMy4zIDAgNjQtNjQgMCAwLTUwLjctOTYtOTYtOTYgOTZMOTYgNDQ4bC02NCAwIDAtNjQgMC0xMy4zIDkuNC05LjRMMTQ2LjcgMjU2IDQxLjQgMTUwLjYgMzIgMTQxLjMgMzIgMTI4bDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiA1MTJMMCA1MTJsMC02NCAzMiAwIDMyMCAwIDMyIDAgMCA2NC0zMiAwTDMyIDUxMnpNMzIgNjRMMCA2NCAwIDAgMzIgMCAzNTIgMGwzMiAwIDAgNjQtMzIgMEwzMiA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64c21.3 0 42.7 0 64 0c64 0 128 0 192 0l64 0 0 64 0 13.3-9.4 9.4L237.3 256 342.6 361.4l9.4 9.4 0 13.3 0 64-64 0 0-50.7-96-96-96 96L96 448l-64 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64z" />
            <path d="M32 512L0 512l0-64 32 0 320 0 32 0 0 64-32 0L32 512zM32 64L0 64 0 0 32 0 352 0l32 0 0 64-32 0L32 64z" />
    </Icon>
);

export default HourglassStart;