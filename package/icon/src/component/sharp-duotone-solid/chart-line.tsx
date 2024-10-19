
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=sharp-duotone-solid chart-line}
 * @preview ![chart-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCA0NDhsMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC02NC0zMiAwTDY0IDQxNiA2NCA2NGwwLTMyTDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NzAuNiAxNTAuNmwtMTI4IDEyOEwzMjAgMzAxLjNsLTIyLjYtMjIuNkwyNDAgMjIxLjNsLTg5LjQgODkuNC00NS4zLTQ1LjMgMTEyLTExMkwyNDAgMTMwLjdsMjIuNiAyMi42TDMyMCAyMTAuNyA0MjUuNCAxMDUuNGw0NS4zIDQ1LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
            <path d="M470.6 150.6l-128 128L320 301.3l-22.6-22.6L240 221.3l-89.4 89.4-45.3-45.3 112-112L240 130.7l22.6 22.6L320 210.7 425.4 105.4l45.3 45.3z" />
    </Icon>
);

export default ChartLine;