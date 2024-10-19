
import { Icon } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=thin up-down-left-right}
 * @preview ![up-down-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuNjA0IDI0MC4yOTdMNDIxLjI3NyAxNTQuNTQ3QzQxNi44MyAxNTAuMDIzIDQxMS4zNTkgMTQ4IDQwNS45OTQgMTQ4QzM5NC43NjggMTQ4IDM4NCAxNTYuODU5IDM4NCAxNzAuMjVWMjQ4SDI2NFYxMjhIMzQxLjc1MkMzNjEuNTM1IDEyOCAzNzEuNDM5IDEwNC40NzcgMzU3LjQ1MSA5MC43MjNMMjcxLjcwMSA2LjM5OEMyNjcuMzYzIDIuMTMzIDI2MS42ODQgMCAyNTYgMFMyNDQuNjM3IDIuMTMzIDI0MC4yOTkgNi4zOThMMTU0LjU0OSA5MC43MjNDMTQwLjU2MSAxMDQuNDc3IDE1MC40NjUgMTI4IDE3MC4yNDggMTI4SDI0OFYyNDhIMTI4VjE3MC4yNUMxMjggMTU2Ljg2MyAxMTcuMjMyIDE0OCAxMDYuMDA4IDE0OEMxMDAuNjQxIDE0OCA5NS4xNzIgMTUwLjAyMyA5MC43MjMgMTU0LjU0N0w2LjM5NiAyNDAuMjk3QzIuMTMzIDI0NC42MzcgMCAyNTAuMzE2IDAgMjU2UzIuMTMzIDI2Ny4zNjMgNi4zOTYgMjcxLjcwM0w5MC43MjMgMzU3LjQ1M0M5NS4xNzIgMzYxLjk3NyAxMDAuNjQzIDM2NCAxMDYuMDA4IDM2NEMxMTcuMjM0IDM2NCAxMjggMzU1LjEzNyAxMjggMzQxLjc1VjI2NEgyNDhWMzg0SDE3MC4yNDhDMTUwLjQ2NSAzODQgMTQwLjU2MSA0MDcuNTIzIDE1NC41NDkgNDIxLjI3N0wyNDAuMjk5IDUwNS42MDJDMjQ0LjYzNyA1MDkuODY3IDI1MC4zMTYgNTEyIDI1NiA1MTJTMjY3LjM2MyA1MDkuODY3IDI3MS43MDEgNTA1LjYwMkwzNTcuNDUxIDQyMS4yNzdDMzcxLjQzOSA0MDcuNTIzIDM2MS41MzUgMzg0IDM0MS43NTIgMzg0SDI2NFYyNjRIMzg0VjM0MS43NUMzODQgMzU1LjEzNyAzOTQuNzcgMzY0IDQwNS45OTQgMzY0QzQxMS4zNTkgMzY0IDQxNi44MjggMzYxLjk3NyA0MjEuMjc3IDM1Ny40NTNMNTA1LjYwNCAyNzEuNzAzQzUwOS44NjcgMjY3LjM2MyA1MTIgMjYxLjY4NCA1MTIgMjU2UzUwOS44NjcgMjQ0LjYzNyA1MDUuNjA0IDI0MC4yOTdaTTE3MC4yNDggMTEyQzE2Ni41NDMgMTEyIDE2NS4wMjkgMTA5LjY0OCAxNjQuNDU1IDEwOC4yNUMxNjMuODEyIDEwNi42OCAxNjMuNTIgMTA0LjM0NCAxNjUuNzY4IDEwMi4xMzNMMjUxLjUxNiAxNy44MDVDMjUzLjExNSAxNi4yMzQgMjU1LjAxMiAxNiAyNTYgMTZTMjU4Ljg4NyAxNi4yMzQgMjYwLjQ4MiAxNy44MDVMMzQ2LjIzMiAxMDIuMTMzQzM0OC40ODIgMTA0LjM0NCAzNDguMTg4IDEwNi42OCAzNDcuNTQ1IDEwOC4yNUMzNDYuOTczIDEwOS42NDggMzQ1LjQ1NyAxMTIgMzQxLjc1MiAxMTJIMTcwLjI0OFpNMTEyIDM0MS43NUMxMTIgMzQ2LjMwNSAxMDguMzI0IDM0OCAxMDYuMDA4IDM0OEMxMDQuNTY4IDM0OCAxMDMuMzAxIDM0Ny40MjIgMTAyLjEzMSAzNDYuMjM0TDE3LjgwOSAyNjAuNDg0QzE2LjIzNiAyNTguODgzIDE2IDI1Ni45ODggMTYgMjU2UzE2LjIzNiAyNTMuMTE3IDE3LjgwNSAyNTEuNTE2TDEwMi4xMzEgMTY1Ljc2NkMxMDMuMzAxIDE2NC41NzggMTA0LjU2OCAxNjQgMTA2LjAwNiAxNjRDMTA4LjMyNCAxNjQgMTEyIDE2NS42OTUgMTEyIDE3MC4yNVYzNDEuNzVaTTM0MS43NTIgNDAwQzM0NS40NTcgNDAwIDM0Ni45NzMgNDAyLjM1MiAzNDcuNTQ1IDQwMy43NUMzNDguMTg4IDQwNS4zMiAzNDguNDgyIDQwNy42NTYgMzQ2LjIzMiA0MDkuODY3TDI2MC40ODYgNDk0LjE5NUMyNTguODg3IDQ5NS43NjYgMjU2Ljk4OCA0OTYgMjU2IDQ5NlMyNTMuMTE1IDQ5NS43NjYgMjUxLjUxOCA0OTQuMTk1TDE2NS43NjggNDA5Ljg2N0MxNjMuNTIgNDA3LjY1NiAxNjMuODEyIDQwNS4zMiAxNjQuNDU1IDQwMy43NUMxNjUuMDI5IDQwMi4zNTIgMTY2LjU0MyA0MDAgMTcwLjI0OCA0MDBIMzQxLjc1MlpNNDk0LjE5NSAyNjAuNDg0TDQwOS44NjkgMzQ2LjIzNEM0MDguNzAxIDM0Ny40MjIgNDA3LjQzMiAzNDggNDA1Ljk5NCAzNDhDNDAzLjY3NiAzNDggNDAwIDM0Ni4zMDUgNDAwIDM0MS43NVYxNzAuMjVDNDAwIDE2NS42OTUgNDAzLjY3NiAxNjQgNDA1Ljk5NCAxNjRDNDA3LjQzMiAxNjQgNDA4LjcwMSAxNjQuNTc4IDQwOS44NjkgMTY1Ljc2Nkw0OTQuMTkzIDI1MS41MTZDNDk1Ljc2NiAyNTMuMTE3IDQ5NiAyNTUuMDEyIDQ5NiAyNTZTNDk1Ljc2NiAyNTguODgzIDQ5NC4xOTUgMjYwLjQ4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505.604 240.297L421.277 154.547C416.83 150.023 411.359 148 405.994 148C394.768 148 384 156.859 384 170.25V248H264V128H341.752C361.535 128 371.439 104.477 357.451 90.723L271.701 6.398C267.363 2.133 261.684 0 256 0S244.637 2.133 240.299 6.398L154.549 90.723C140.561 104.477 150.465 128 170.248 128H248V248H128V170.25C128 156.863 117.232 148 106.008 148C100.641 148 95.172 150.023 90.723 154.547L6.396 240.297C2.133 244.637 0 250.316 0 256S2.133 267.363 6.396 271.703L90.723 357.453C95.172 361.977 100.643 364 106.008 364C117.234 364 128 355.137 128 341.75V264H248V384H170.248C150.465 384 140.561 407.523 154.549 421.277L240.299 505.602C244.637 509.867 250.316 512 256 512S267.363 509.867 271.701 505.602L357.451 421.277C371.439 407.523 361.535 384 341.752 384H264V264H384V341.75C384 355.137 394.77 364 405.994 364C411.359 364 416.828 361.977 421.277 357.453L505.604 271.703C509.867 267.363 512 261.684 512 256S509.867 244.637 505.604 240.297ZM170.248 112C166.543 112 165.029 109.648 164.455 108.25C163.812 106.68 163.52 104.344 165.768 102.133L251.516 17.805C253.115 16.234 255.012 16 256 16S258.887 16.234 260.482 17.805L346.232 102.133C348.482 104.344 348.188 106.68 347.545 108.25C346.973 109.648 345.457 112 341.752 112H170.248ZM112 341.75C112 346.305 108.324 348 106.008 348C104.568 348 103.301 347.422 102.131 346.234L17.809 260.484C16.236 258.883 16 256.988 16 256S16.236 253.117 17.805 251.516L102.131 165.766C103.301 164.578 104.568 164 106.006 164C108.324 164 112 165.695 112 170.25V341.75ZM341.752 400C345.457 400 346.973 402.352 347.545 403.75C348.188 405.32 348.482 407.656 346.232 409.867L260.486 494.195C258.887 495.766 256.988 496 256 496S253.115 495.766 251.518 494.195L165.768 409.867C163.52 407.656 163.812 405.32 164.455 403.75C165.029 402.352 166.543 400 170.248 400H341.752ZM494.195 260.484L409.869 346.234C408.701 347.422 407.432 348 405.994 348C403.676 348 400 346.305 400 341.75V170.25C400 165.695 403.676 164 405.994 164C407.432 164 408.701 164.578 409.869 165.766L494.193 251.516C495.766 253.117 496 255.012 496 256S495.766 258.883 494.195 260.484Z" />
    </Icon>
);

export default UpDownLeftRight;