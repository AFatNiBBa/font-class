
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line-up-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up-down?s=sharp-duotone-solid chart-line-up-down}
 * @preview ![chart-line-up-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCA0NDhsMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC02NC0zMiAwTDY0IDQxNiA2NCA2NGwwLTMyTDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgNjRsMTI4IDAgMCAxMjgtMTYgMTYtNDEuNC00MS40LTExMiAxMTJMMjg4IDMwMS4zbC0yMi42LTIyLjZMMjA4IDIyMS4zbC02NS40IDY1LjRMOTcuNCAyNDEuNGw4OC04OEwyMDggMTMwLjdsMjIuNiAyMi42TDI4OCAyMTAuN2w4OS40LTg5LjRMMzM2IDgwbDE2LTE2em0wIDMyMGwtMTYtMTYgNDEuNC00MS40LTM0LjctMzQuNyA0NS4zLTQ1LjMgMzQuNyAzNC43TDQ2NCAyNDBsMTYgMTYgMCAxMjgtMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartLineUpDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64l0-32L0 32z" />
            <path d="M352 64l128 0 0 128-16 16-41.4-41.4-112 112L288 301.3l-22.6-22.6L208 221.3l-65.4 65.4L97.4 241.4l88-88L208 130.7l22.6 22.6L288 210.7l89.4-89.4L336 80l16-16zm0 320l-16-16 41.4-41.4-34.7-34.7 45.3-45.3 34.7 34.7L464 240l16 16 0 128-128 0z" />
    </Icon>
);

export default ChartLineUpDown;