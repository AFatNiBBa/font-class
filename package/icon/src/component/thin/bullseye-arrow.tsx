
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-arrow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-arrow?s=thin bullseye-arrow}
 * @preview ![bullseye-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuMzE4IDEwNC4zNDNMNDMwLjQ0MiA4MS41NzdMNDA3LjY2IDUuNzAyQzQwNi44NDggMi45OTkgNDA0LjY5MiAwLjkzNyA0MDEuOTczIDAuMjQ5QzM5OS4yMjMgLTAuNDU0IDM5Ni4zNDggMC4zNTggMzk0LjM0OCAyLjM0M0wzMjIuMzQ3IDc0LjM0M0MzMjAuNTAzIDc2LjIwMiAzMTkuNjYgNzguODQzIDMyMC4xMjggODEuNDM3TDMzNS4zNzggMTY1LjMxMkwyNTAuMzQ2IDI1MC4zNDNDMjQ3LjIyMSAyNTMuNDY4IDI0Ny4yMjEgMjU4LjUzIDI1MC4zNDYgMjYxLjY1NUMyNTEuOTA5IDI2My4yMTggMjUzLjk0IDI2My45OTkgMjU2LjAwMyAyNjMuOTk5QzI1OC4wNjUgMjYzLjk5OSAyNjAuMDk2IDI2My4yMTggMjYxLjY1OSAyNjEuNjU1TDM0Ni42OTEgMTc2LjYyNEw0MzAuNTY3IDE5MS44NzRDNDMxLjAzNiAxOTEuOTUyIDQzMS41MzYgMTkxLjk5OSA0MzIuMDA0IDE5MS45OTlDNDM0LjA5OCAxOTEuOTk5IDQzNi4xNjEgMTkxLjE3MSA0MzcuNjYxIDE4OS42NTVMNTA5LjY2MiAxMTcuNjU1QzUxMS42NjIgMTE1LjY3MSA1MTIuNDQzIDExMi43OCA1MTEuNzU1IDExMC4wNDZDNTExLjA2OCAxMDcuMzEyIDUwOS4wMDUgMTA1LjE0IDUwNi4zMTggMTA0LjM0M1pNMzM2LjYyOCA4Mi42ODdMMzk2LjE5MiAyMy4xMjRMNDE0Ljk3MyA4NS43MThMMzQ5LjE0IDE1MS41NUwzMzYuNjI4IDgyLjY4N1pNNDI5LjMxNyAxNzUuMzc0TDM2MC40NTMgMTYyLjg2Mkw0MjYuMjg2IDk3LjAzMkw0ODguODggMTE1LjgxMkw0MjkuMzE3IDE3NS4zNzRaTTI0OC45MDkgMTkyLjc2NUMyNTMuMjg0IDE5Mi4yNjUgMjU2LjQ0IDE4OC4zMTIgMjU1Ljk0IDE4My45MjFDMjU1LjQ3MSAxNzkuNTMgMjUxLjg3OCAxNzYuMzU4IDI0Ny4wOTYgMTc2Ljg1OEMyMDYuNTY1IDE4MS40MDUgMTc2LjAwMiAyMTUuNDM3IDE3Ni4wMDIgMjU1Ljk5OUMxNzYuMDAyIDMwMC4xMDggMjExLjg3NyAzMzUuOTk5IDI1Ni4wMDMgMzM1Ljk5OUMyOTYuNTY2IDMzNS45OTkgMzMwLjU5NyAzMDUuNDM3IDMzNS4xMjggMjY0Ljg5QzMzNS42MjggMjYwLjQ5OSAzMzIuNDcyIDI1Ni41NDYgMzI4LjA5NyAyNTYuMDQ2QzMyMy4yNTMgMjU1LjM5IDMxOS43MjIgMjU4LjczMyAzMTkuMjUzIDI2My4xMDhDMzE1LjU5NyAyOTUuNTQ2IDI4OC40MDkgMzE5Ljk5OSAyNTYuMDAzIDMxOS45OTlDMjIwLjcyMSAzMTkuOTk5IDE5Mi4wMDIgMjkxLjI5NiAxOTIuMDAyIDI1NS45OTlDMTkyLjAwMiAyMjMuNTkzIDIxNi40NzEgMTk2LjQwNSAyNDguOTA5IDE5Mi43NjVaTTI3MC43ODQgMTEzLjM5TDI3NC43ODQgMTEzLjkzN0MyNzkuMDAzIDExNC40MDUgMjgzLjE5IDExMS40MjEgMjgzLjc1MyAxMDcuMDNDMjg0LjMxNSAxMDIuNjU1IDI4MS4yMjIgOTguNjQgMjc2Ljg0NyA5OC4wNjJMMjczLjAwMyA5Ny41NDZDMjY3LjQwOSA5Ni43NDkgMjYxLjgxNSA5NS45OTkgMjU2LjAwMyA5NS45OTlDMTY3Ljc4MyA5NS45OTkgOTYuMDAxIDE2Ny43OCA5Ni4wMDEgMjU1Ljk5OVMxNjcuNzgzIDQxNS45OTkgMjU2LjAwMyA0MTUuOTk5UzQxNi4wMDQgMzQ0LjIxOCA0MTYuMDA0IDI1NS45OTlDNDE2LjAwNCAyNTAuMDc3IDQxNS4yMjMgMjQ0LjM5IDQxNC40MTEgMjM4LjY4N0w0MTMuOTQyIDIzNS4xMjRDNDEzLjM3OSAyMzAuNzQ5IDQwOS41MzUgMjI3LjcwMiA0MDQuOTQyIDIyOC4yNDlDNDAwLjU2NyAyMjguODQzIDM5Ny41MDQgMjMyLjg1OCAzOTguMDY3IDIzNy4yNDlMMzk4LjU2NyAyNDAuOTA1QzM5OS4yODUgMjQ1Ljg5IDQwMC4wMDQgMjUwLjg0MyA0MDAuMDA0IDI1NS45OTlDNDAwLjAwNCAzMzUuNDA1IDMzNS40MSAzOTkuOTk5IDI1Ni4wMDMgMzk5Ljk5OVMxMTIuMDAxIDMzNS40MDUgMTEyLjAwMSAyNTUuOTk5UzE3Ni41OTUgMTExLjk5OSAyNTYuMDAzIDExMS45OTlDMjYxLjA2NSAxMTEuOTk5IDI2NS45MDkgMTEyLjcwMiAyNzAuNzg0IDExMy4zOVpNNDgyLjA5OSAyMDMuNzE4QzQ3Ny43NTUgMjA0LjU2MiA0NzQuOTQyIDIwOC43NjUgNDc1Ljc4NiAyMTMuMDkzQzQ3OC41NjggMjI3LjQ1MiA0ODAuMDA1IDI0MS44NzQgNDgwLjAwNSAyNTUuOTk5QzQ4MC4wMDUgMzc5LjUxNSAzNzkuNTA0IDQ3OS45OTkgMjU2LjAwMyA0NzkuOTk5UzMyIDM3OS41MTUgMzIgMjU1Ljk5OVMxMzIuNTAxIDMxLjk5OSAyNTYuMDAzIDMxLjk5OUMyNzAuMDk2IDMxLjk5OSAyODQuNTM0IDMzLjQyMSAyOTguOTA5IDM2LjIxOEMzMDMuMzc4IDM2LjkyMSAzMDcuNDQxIDM0LjIwMiAzMDguMjg0IDI5Ljg5QzMwOS4xMjggMjUuNTQ2IDMwNi4zMTYgMjEuMzQzIDMwMS45NzIgMjAuNDk5QzI4Ni41OTcgMTcuNTE1IDI3MS4xMjggMTUuOTk5IDI1Ni4wMDMgMTUuOTk5QzEyMy42NTcgMTUuOTk5IDE2IDEyMy42NTUgMTYgMjU1Ljk5OVMxMjMuNjU3IDQ5NS45OTkgMjU2LjAwMyA0OTUuOTk5UzQ5Ni4wMDUgMzg4LjM0MyA0OTYuMDA1IDI1NS45OTlDNDk2LjAwNSAyNDAuODU4IDQ5NC40NzQgMjI1LjM5IDQ5MS40NzQgMjEwLjAzQzQ5MC42MyAyMDUuNjg3IDQ4Ni4yODYgMjAyLjgyNyA0ODIuMDk5IDIwMy43MThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BullseyeArrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.318 104.343L430.442 81.577L407.66 5.702C406.848 2.999 404.692 0.937 401.973 0.249C399.223 -0.454 396.348 0.358 394.348 2.343L322.347 74.343C320.503 76.202 319.66 78.843 320.128 81.437L335.378 165.312L250.346 250.343C247.221 253.468 247.221 258.53 250.346 261.655C251.909 263.218 253.94 263.999 256.003 263.999C258.065 263.999 260.096 263.218 261.659 261.655L346.691 176.624L430.567 191.874C431.036 191.952 431.536 191.999 432.004 191.999C434.098 191.999 436.161 191.171 437.661 189.655L509.662 117.655C511.662 115.671 512.443 112.78 511.755 110.046C511.068 107.312 509.005 105.14 506.318 104.343ZM336.628 82.687L396.192 23.124L414.973 85.718L349.14 151.55L336.628 82.687ZM429.317 175.374L360.453 162.862L426.286 97.032L488.88 115.812L429.317 175.374ZM248.909 192.765C253.284 192.265 256.44 188.312 255.94 183.921C255.471 179.53 251.878 176.358 247.096 176.858C206.565 181.405 176.002 215.437 176.002 255.999C176.002 300.108 211.877 335.999 256.003 335.999C296.566 335.999 330.597 305.437 335.128 264.89C335.628 260.499 332.472 256.546 328.097 256.046C323.253 255.39 319.722 258.733 319.253 263.108C315.597 295.546 288.409 319.999 256.003 319.999C220.721 319.999 192.002 291.296 192.002 255.999C192.002 223.593 216.471 196.405 248.909 192.765ZM270.784 113.39L274.784 113.937C279.003 114.405 283.19 111.421 283.753 107.03C284.315 102.655 281.222 98.64 276.847 98.062L273.003 97.546C267.409 96.749 261.815 95.999 256.003 95.999C167.783 95.999 96.001 167.78 96.001 255.999S167.783 415.999 256.003 415.999S416.004 344.218 416.004 255.999C416.004 250.077 415.223 244.39 414.411 238.687L413.942 235.124C413.379 230.749 409.535 227.702 404.942 228.249C400.567 228.843 397.504 232.858 398.067 237.249L398.567 240.905C399.285 245.89 400.004 250.843 400.004 255.999C400.004 335.405 335.41 399.999 256.003 399.999S112.001 335.405 112.001 255.999S176.595 111.999 256.003 111.999C261.065 111.999 265.909 112.702 270.784 113.39ZM482.099 203.718C477.755 204.562 474.942 208.765 475.786 213.093C478.568 227.452 480.005 241.874 480.005 255.999C480.005 379.515 379.504 479.999 256.003 479.999S32 379.515 32 255.999S132.501 31.999 256.003 31.999C270.096 31.999 284.534 33.421 298.909 36.218C303.378 36.921 307.441 34.202 308.284 29.89C309.128 25.546 306.316 21.343 301.972 20.499C286.597 17.515 271.128 15.999 256.003 15.999C123.657 15.999 16 123.655 16 255.999S123.657 495.999 256.003 495.999S496.005 388.343 496.005 255.999C496.005 240.858 494.474 225.39 491.474 210.03C490.63 205.687 486.286 202.827 482.099 203.718Z" />
        </Icon>
    </>
}