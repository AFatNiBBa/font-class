
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=sharp-duotone-solid chart-pyramid}
 * @preview ![chart-pyramid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03My4xIDM1MmMzMC41LTUzLjMgNjEtMTA2LjcgOTEuNC0xNjBsMTgyLjkgMCA5MS40IDE2MEw3My4xIDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTczLjEgMzUyTDAgNDgwbDUxMiAwTDQzOC45IDM1MiA3My4xIDM1MnptOTEuNC0xNjBsMTgyLjkgMEwyNTYgMzIgMTY0LjYgMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M73.1 352c30.5-53.3 61-106.7 91.4-160l182.9 0 91.4 160L73.1 352z" />
            <path d="M73.1 352L0 480l512 0L438.9 352 73.1 352zm91.4-160l182.9 0L256 32 164.6 192z" />
    </Icon>
);

export default ChartPyramid;