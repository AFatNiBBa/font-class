
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=duotone chart-line-down}
 * @preview ![chart-line-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDAwYzAgNDQuMiAzNS44IDgwIDgwIDgwbDQwMCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDgwIDQxNmMtOC44IDAtMTYtNy4yLTE2LTE2TDY0IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzAgNDYuMyAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzI2LjYgMTIxLjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwTDIwOCAxOTQuN2wtNTcuNC01Ny40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHMtMTIuNSAzMi44IDAgNDUuM2w4MCA4MGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMEwzMDQgMTg5LjNsNTcuNCA1Ny40TDMyOSAyNzljLTE1LjEgMTUuMS00LjQgNDEgMTcgNDFMNDU2IDMyMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTExMC4xYzAtMjEuNC0yNS45LTMyLjEtNDEtMTdsLTMyLjQgMzIuNC04MC04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
            <path d="M326.6 121.4c-12.5-12.5-32.8-12.5-45.3 0L208 194.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0L304 189.3l57.4 57.4L329 279c-15.1 15.1-4.4 41 17 41L456 320c13.3 0 24-10.7 24-24l0-110.1c0-21.4-25.9-32.1-41-17l-32.4 32.4-80-80z" />
    </Icon>
);

export default ChartLineDown;