
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eye-dropper-half` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper-half?s=light eye-dropper-half}
 * @preview ![eye-dropper-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuMDEyIDMwLjEwNUM0NDEuMDA2IC0xMC4wMzUgMzcxLjExOSAtMTAuMDM1IDMzMS4xMTQgMzAuMTA1TDIxNi40MDMgMTQ1LjAxNEwyMDMuMzQ2IDEzMS45MzRDMTk3LjA5NCAxMjUuNjcgMTg2Ljk2NyAxMjUuNjcgMTgwLjcxNyAxMzEuOTM0QzE3NC40NjUgMTM4LjE5NSAxNzQuNDY1IDE0OC4zNCAxODAuNzE3IDE1NC42MDRMMzU2Ljc0MiAzMzAuOTUzQzM1OS44NjcgMzM0LjA4NCAzNjMuOTYzIDMzNS42NSAzNjguMDU3IDMzNS42NVMzNzYuMjQ2IDMzNC4wODQgMzc5LjM3MSAzMzAuOTUzQzM4NS42MjEgMzI0LjY5MSAzODUuNjIxIDMxNC41NDUgMzc5LjM3MSAzMDguMjgzTDM2Ni4zMDcgMjk1LjE5NUw0ODEuMDEyIDE4MC4yNzlDNTIyLjMzIDEzOC44ODUgNTIyLjMzIDcxLjUgNDgxLjAxMiAzMC4xMDVaTTQ1OC4zODMgMTU3LjYwOUwzNDMuNjc4IDI3Mi41MjVMMjM5LjAzIDE2Ny42ODRMMzUzLjc0MiA1Mi43NzVDMzgxLjY4NCAyNC43NTIgNDMwLjQ0MiAyNC43NTIgNDU4LjM4MyA1Mi43NzVDNDg3LjIzMSA4MS42NzggNDg3LjIzMSAxMjguNzA3IDQ1OC4zODMgMTU3LjYwOVpNMjk0LjA4NiAzMjBIOTQuMjZMMTg3LjM0MiAyMjYuNzQ2QzE5My41OTQgMjIwLjQ4NCAxOTMuNTk0IDIxMC4zMzggMTg3LjM0MiAyMDQuMDc2QzE4MS4wOTIgMTk3LjgxNCAxNzAuOTY1IDE5Ny44MTQgMTY0LjcxNSAyMDQuMDc2TDUzLjk3OSAzMTUuMDE2QzM5LjYzMyAzMjkuMzg3IDMxLjcyNyAzNDguNTA0IDMxLjcyNyAzNjguODRWNDA3LjExOUwyLjMxNSA0NTUuODg5Qy0xLjQ5OCA0NjIuMjEzIC0wLjUyOSA0NzAuMzA3IDQuNjkyIDQ3NS41MjFMMzYuNDE0IDUwNy4zMDNDMzkuNTA4IDUxMC40MDIgNDMuNjA0IDUxMiA0Ny43MjkgNTEyQzUwLjU3MyA1MTIgNTMuNDQ4IDUxMS4yNDggNTYuMDEgNTA5LjY4MkwxMDQuNzA1IDQ4MC4yMTdIMTQyLjg5OUMxNjMuMTg0IDQ4MC4yMTcgMTgyLjI4IDQ3Mi4yOTUgMTk2LjYyNSA0NTcuOTI0TDMwNy4zNiAzNDYuOTg0QzMxMy42MTIgMzQwLjcyMyAzMTMuNjEyIDMzMC41NzYgMzA3LjM2IDMyNC4zMTRDMzAzLjcyNyAzMjAuNjc0IDI5OC44MTcgMzE5LjQwOCAyOTQuMDg2IDMyMFpNMTczLjk5NiA0MzUuMjU0QzE2NS42ODQgNDQzLjU2NiAxNTQuNjUxIDQ0OC4xNTQgMTQyLjg5OSA0NDguMTU0SDEwMC4yMzdDOTcuMzMgNDQ4LjE1NCA5NC40NTMgNDQ4Ljk1MyA5MS45NTMgNDUwLjQ3MUw1MC4xNjYgNDc1Ljc1NkwzNi4xOTYgNDYxLjcyOUw2MS40MTggNDE5Ljg3OUM2Mi45MTggNDE3LjM3NSA2My43MzEgNDE0LjUxIDYzLjczMSA0MTEuNTgyVjM2OC44NEM2My43MzEgMzYyLjk2NSA2NC44NzEgMzU3LjI2OCA2Ny4wNDMgMzUySDI1Ny4wOThMMTczLjk5NiA0MzUuMjU0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EyeDropperHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.012 30.105C441.006 -10.035 371.119 -10.035 331.114 30.105L216.403 145.014L203.346 131.934C197.094 125.67 186.967 125.67 180.717 131.934C174.465 138.195 174.465 148.34 180.717 154.604L356.742 330.953C359.867 334.084 363.963 335.65 368.057 335.65S376.246 334.084 379.371 330.953C385.621 324.691 385.621 314.545 379.371 308.283L366.307 295.195L481.012 180.279C522.33 138.885 522.33 71.5 481.012 30.105ZM458.383 157.609L343.678 272.525L239.03 167.684L353.742 52.775C381.684 24.752 430.442 24.752 458.383 52.775C487.231 81.678 487.231 128.707 458.383 157.609ZM294.086 320H94.26L187.342 226.746C193.594 220.484 193.594 210.338 187.342 204.076C181.092 197.814 170.965 197.814 164.715 204.076L53.979 315.016C39.633 329.387 31.727 348.504 31.727 368.84V407.119L2.315 455.889C-1.498 462.213 -0.529 470.307 4.692 475.521L36.414 507.303C39.508 510.402 43.604 512 47.729 512C50.573 512 53.448 511.248 56.01 509.682L104.705 480.217H142.899C163.184 480.217 182.28 472.295 196.625 457.924L307.36 346.984C313.612 340.723 313.612 330.576 307.36 324.314C303.727 320.674 298.817 319.408 294.086 320ZM173.996 435.254C165.684 443.566 154.651 448.154 142.899 448.154H100.237C97.33 448.154 94.453 448.953 91.953 450.471L50.166 475.756L36.196 461.729L61.418 419.879C62.918 417.375 63.731 414.51 63.731 411.582V368.84C63.731 362.965 64.871 357.268 67.043 352H257.098L173.996 435.254Z" />
        </Icon>
    </>
}