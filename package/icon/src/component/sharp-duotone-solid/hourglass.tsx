
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-duotone-solid hourglass}
 * @preview ![hourglass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGwzMiAwIDMyIDAgMTkyIDAgMzIgMCAzMiAwIDAgNjQgMCAxMy4zLTkuNCA5LjRMMjM3LjMgMjU2IDM0Mi42IDM2MS40bDkuNCA5LjQgMCAxMy4zIDAgNjQtMzIgMC0zMiAwTDk2IDQ0OGwtMzIgMC0zMiAwIDAtNjQgMC0xMy4zIDkuNC05LjRMMTQ2LjcgMjU2IDQxLjQgMTUwLjYgMzIgMTQxLjMgMzIgMTI4bDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAwTDAgMCAwIDY0bDMyIDAgMzIwIDAgMzIgMCAwLTY0TDM1MiAwIDMyIDB6bTAgNDQ4TDAgNDQ4bDAgNjQgMzIgMCAzMjAgMCAzMiAwIDAtNjQtMzIgMEwzMiA0NDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l32 0 32 0 192 0 32 0 32 0 0 64 0 13.3-9.4 9.4L237.3 256 342.6 361.4l9.4 9.4 0 13.3 0 64-32 0-32 0L96 448l-32 0-32 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64z" />
            <path d="M32 0L0 0 0 64l32 0 320 0 32 0 0-64L352 0 32 0zm0 448L0 448l0 64 32 0 320 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Hourglass;