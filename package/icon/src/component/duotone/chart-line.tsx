
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=duotone chart-line}
 * @preview ![chart-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDAwYzAgNDQuMiAzNS44IDgwIDgwIDgwbDQwMCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDgwIDQxNmMtOC44IDAtMTYtNy4yLTE2LTE2TDY0IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzAgNDYuMyAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDcwLjYgMTA1LjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNsLTEyOCAxMjhjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwTDI0MCAyMjEuM2wtODkuNCA4OS40Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM2wxMTItMTEyYzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwTDMyMCAyMTAuNyA0MjUuNCAxMDUuNGMxMi41LTEyLjUgMzIuOC0xMi41IDQ1LjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
            <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0L240 221.3l-89.4 89.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l112-112c12.5-12.5 32.8-12.5 45.3 0L320 210.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ChartLine;