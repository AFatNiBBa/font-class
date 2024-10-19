
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-sign?s=solid person-sign}
 * @preview ![person-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDMuOTk1IDk2QzE3MC40OTUgOTYgMTkxLjk5NSA3NC41IDE5MS45OTUgNDhTMTcwLjM3IDAgMTQzLjk5NSAwUzk1Ljk5NyAyMS41IDk1Ljk5NyA0OFMxMTcuNDk1IDk2IDE0My45OTUgOTZaTTUwMS40ODkgNjYuNjI1TDQzMy43NDEgNDIuMDAxTDQzOS4yMzkgMjdDNDQyLjIzOSAxOC43NSA0MzcuOTg5IDkuNSA0MjkuNzQxIDYuNUw0MTQuNzQxIDFDNDA2LjM2NiAtMS45OTkgMzk3LjI0MSAyLjI1IDM5NC4yNDEgMTAuNjI1TDM4OC43NDEgMjUuNjI1TDMyMS4xMTggMUMzMTIuNzQzIC0xLjk5OSAzMDMuNjE4IDIuMjUgMzAwLjYxOCAxMC42MjVMMjU2Ljc0MyAxMzAuODc1QzI1My43NDMgMTM5LjI1IDI1OC4xMTggMTQ4LjM3NSAyNjYuMzY4IDE1MS4zNzVMMzMzLjk5MSAxNzZMMzIwLjk5MyAyMTJMMjczLjI0MyAxOTZMMjIzLjg2OCAxNDYuNzVDMjExLjc0MyAxMzQuNjI1IDE5NS43NDUgMTI3Ljg3NSAxNzguNzQ1IDEyNy44NzVIMTE1Ljc0NUM5MS4zNzIgMTI3Ljg3NSA2OS40OTcgMTQxLjUgNTguNjIyIDE2My4yNUwzLjM3MiAyNzMuNzVDLTQuNTAzIDI4OS41IDEuODcyIDMwOC43NSAxNy43NDcgMzE2LjYyNUMyMi4yNDcgMzE4Ljg3NSAyNy4yNDcgMzIwIDMxLjk5NyAzMjBDNDMuNzQ3IDMyMCA1NC45OTcgMzEzLjUgNjAuNjIyIDMwMi4yNUw3OS45OTcgMjYzLjYyNVYzMTguMzc1TDY0LjEyMiA0NzYuNzVDNjIuMzcyIDQ5NC4zNzUgNzUuMjQ3IDUxMC4xMjUgOTIuNzQ3IDUxMS43NUM5My43NDcgNTExLjg3NSA5NC44NzIgNTEyIDk1Ljg3MiA1MTJDMTEyLjEyIDUxMiAxMjUuOTk1IDQ5OS43NSAxMjcuNzQ1IDQ4My4yNUwxNDAuODcgMzUySDE1Ni4yNDVMMTkxLjk5NSA0MjMuNVY0ODBDMTkxLjk5NSA0OTcuNzUgMjA2LjI0NSA1MTIgMjIzLjk5MyA1MTJDMjQxLjc0MyA1MTIgMjU1Ljk5MyA0OTcuNzUgMjU1Ljk5MyA0ODBWNDIzLjVDMjU1Ljk5MyA0MTMuNjI1IDI1My43NDMgNDAzLjc1IDI0OS4yNDMgMzk0Ljg3NUwyMDguMTIgMzEyLjM3NVYyMjEuMjVMMjI4LjExOCAyNDEuMjVDMjM1LjExOCAyNDguMjUgMjQzLjc0MyAyNTMuNSAyNTMuMTE4IDI1Ni43NUwyOTkuMjQzIDI3Mi4xMjVMMjg3Ljk5MyAzMDIuODc1QzI4NC45OTMgMzExLjI1IDI4OS4yNDMgMzIwLjM3NSAyOTcuNjE4IDMyMy4zNzVMMzEyLjYxOCAzMjguODc1QzMyMC44NjggMzMxLjg3NSAzMzAuMTE2IDMyNy42MjUgMzMzLjExNiAzMTkuMjVMMzc5LjI0MSAxOTIuMzc1TDQ0Ni44NjQgMjE3QzQ1NS4yMzkgMjIwIDQ2NC4zNjQgMjE1Ljc1IDQ2Ny4zNjQgMjA3LjM3NUw1MTAuOTg5IDg3LjEyNUM1MTQuMTE0IDc4Ljc1IDUwOS43MzkgNjkuNzUgNTAxLjQ4OSA2Ni42MjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PersonSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M143.995 96C170.495 96 191.995 74.5 191.995 48S170.37 0 143.995 0S95.997 21.5 95.997 48S117.495 96 143.995 96ZM501.489 66.625L433.741 42.001L439.239 27C442.239 18.75 437.989 9.5 429.741 6.5L414.741 1C406.366 -1.999 397.241 2.25 394.241 10.625L388.741 25.625L321.118 1C312.743 -1.999 303.618 2.25 300.618 10.625L256.743 130.875C253.743 139.25 258.118 148.375 266.368 151.375L333.991 176L320.993 212L273.243 196L223.868 146.75C211.743 134.625 195.745 127.875 178.745 127.875H115.745C91.372 127.875 69.497 141.5 58.622 163.25L3.372 273.75C-4.503 289.5 1.872 308.75 17.747 316.625C22.247 318.875 27.247 320 31.997 320C43.747 320 54.997 313.5 60.622 302.25L79.997 263.625V318.375L64.122 476.75C62.372 494.375 75.247 510.125 92.747 511.75C93.747 511.875 94.872 512 95.872 512C112.12 512 125.995 499.75 127.745 483.25L140.87 352H156.245L191.995 423.5V480C191.995 497.75 206.245 512 223.993 512C241.743 512 255.993 497.75 255.993 480V423.5C255.993 413.625 253.743 403.75 249.243 394.875L208.12 312.375V221.25L228.118 241.25C235.118 248.25 243.743 253.5 253.118 256.75L299.243 272.125L287.993 302.875C284.993 311.25 289.243 320.375 297.618 323.375L312.618 328.875C320.868 331.875 330.116 327.625 333.116 319.25L379.241 192.375L446.864 217C455.239 220 464.364 215.75 467.364 207.375L510.989 87.125C514.114 78.75 509.739 69.75 501.489 66.625Z" />
        </Icon>
    </>
}