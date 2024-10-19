
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ufo` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ufo?s=thin ufo}
 * @preview ![ufo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzUyLjAwOEM1MjAuODM0IDM1Mi4wMDggNTI4IDM0NC44NDIgNTI4IDMzNi4wMDlDNTI4IDMyNy4xNzYgNTIwLjgzNCAzMjAuMDEgNTEyIDMyMC4wMVM0OTYgMzI3LjE3NiA0OTYgMzM2LjAwOUM0OTYgMzQ0Ljg0MiA1MDMuMTY2IDM1Mi4wMDggNTEyIDM1Mi4wMDhaTTE1NC4yMDUgMjUzLjIzN0MxNTQuOTAyIDI1OC4zNzMgMTU4LjA0NyAyNjIuODU1IDE2Mi42NDMgMjY1LjI1N0MyMTEuMDU3IDI5MC41OTEgMjY1LjQ3MSAzMDMuOTggMzIwIDMwMy45OEMzNzQuNTMxIDMwMy45OCA0MjguOTQ1IDI5MC41OTEgNDc3LjM1OSAyNjUuMjU3QzQ4MS45NTMgMjYyLjg1NSA0ODUuMDk4IDI1OC4zNzMgNDg1Ljc5NSAyNTMuMjM3TDQ4Ni4zMTIgMjQ5LjU4NUM0ODcuMTA0IDI0NC4xMTQgNDg4IDIzNy45MTQgNDg4IDIzMS4yODVDNDg4IDEzOS4wNDMgNDEyLjYzNyA2NCAzMjAgNjRDMjI3LjM2NSA2NCAxNTIgMTM5LjA0MyAxNTIgMjMxLjI4NUMxNTIgMjM3LjkxNCAxNTIuODk2IDI0NC4xMTQgMTUzLjY4OCAyNDkuNTg1TDE1NC4yMDUgMjUzLjIzN1pNMzIwIDc5Ljk5OUM0MDMuODczIDc5Ljk5OSA0NzIgMTQ3LjY2MyA0NzIgMjMxLjI4NUM0NzIgMjM4LjA4MiA0NzAuODI0IDI0NC41ODMgNDY5Ljk0MSAyNTEuMDgyQzQyMi45MjggMjc1LjY4MiAzNzEuNDY1IDI4Ny45ODIgMzIwIDI4Ny45ODJDMjY4LjUzNyAyODcuOTgyIDIxNy4wNzIgMjc1LjY4MiAxNzAuMDYxIDI1MS4wODJDMTY5LjE3OCAyNDQuNTgzIDE2OCAyMzguMDgyIDE2OCAyMzEuMjg1QzE2OCAxNDcuNjYzIDIzNi4xMjkgNzkuOTk5IDMyMCA3OS45OTlaTTMwNCAzNjguMDA2QzMwNCAzNzYuODQgMzExLjE2NiAzODQuMDA1IDMyMCAzODQuMDA1UzMzNiAzNzYuODQgMzM2IDM2OC4wMDZDMzM2IDM1OS4xNzMgMzI4LjgzNCAzNTIuMDA4IDMyMCAzNTIuMDA4UzMwNCAzNTkuMTczIDMwNCAzNjguMDA2Wk0xMTIgMzM2LjAwOUMxMTIgMzQ0Ljg0MiAxMTkuMTY2IDM1Mi4wMDggMTI4IDM1Mi4wMDhTMTQ0IDM0NC44NDIgMTQ0IDMzNi4wMDlDMTQ0IDMyNy4xNzYgMTM2LjgzNCAzMjAuMDEgMTI4IDMyMC4wMVMxMTIgMzI3LjE3NiAxMTIgMzM2LjAwOVpNNTMwLjYwOSAyMjMuMDE4QzUyNi4zNTkgMjIxLjQ1NiA1MjEuODc1IDIyMy44IDUyMC40MzggMjI3Ljk4N0M1MTkgMjMyLjE0MyA1MjEuMjE5IDIzNi43MDUgNTI1LjM5MSAyMzguMTQyQzU4OC4wNjIgMjU5LjcwMyA2MjQgMjg5LjU0NCA2MjQgMzIwLjAxQzYyNCAzODAuNzI0IDQ4NC43ODEgNDMyLjAwMSAzMjAgNDMyLjAwMVMxNiAzODAuNzI0IDE2IDMyMC4wMUMxNiAyODkuNTQ0IDUxLjkzOCAyNTkuNzAzIDExNC42MDkgMjM4LjE0MkMxMTguNzgxIDIzNi43MDUgMTIxIDIzMi4xNDMgMTE5LjU2MiAyMjcuOTg3QzExOC4xMjUgMjIzLjggMTEzLjYwOSAyMjEuNDU2IDEwOS4zOTEgMjIzLjAxOEMzOC44NDQgMjQ3LjI5OCAwIDI4MS43MzIgMCAzMjAuMDFDMCAzOTEuNzg2IDE0MC41NjIgNDQ4IDMyMCA0NDhTNjQwIDM5MS43ODYgNjQwIDMyMC4wMUM2NDAgMjgxLjczMiA2MDEuMTU2IDI0Ny4yOTggNTMwLjYwOSAyMjMuMDE4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ufo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M512 352.008C520.834 352.008 528 344.842 528 336.009C528 327.176 520.834 320.01 512 320.01S496 327.176 496 336.009C496 344.842 503.166 352.008 512 352.008ZM154.205 253.237C154.902 258.373 158.047 262.855 162.643 265.257C211.057 290.591 265.471 303.98 320 303.98C374.531 303.98 428.945 290.591 477.359 265.257C481.953 262.855 485.098 258.373 485.795 253.237L486.312 249.585C487.104 244.114 488 237.914 488 231.285C488 139.043 412.637 64 320 64C227.365 64 152 139.043 152 231.285C152 237.914 152.896 244.114 153.688 249.585L154.205 253.237ZM320 79.999C403.873 79.999 472 147.663 472 231.285C472 238.082 470.824 244.583 469.941 251.082C422.928 275.682 371.465 287.982 320 287.982C268.537 287.982 217.072 275.682 170.061 251.082C169.178 244.583 168 238.082 168 231.285C168 147.663 236.129 79.999 320 79.999ZM304 368.006C304 376.84 311.166 384.005 320 384.005S336 376.84 336 368.006C336 359.173 328.834 352.008 320 352.008S304 359.173 304 368.006ZM112 336.009C112 344.842 119.166 352.008 128 352.008S144 344.842 144 336.009C144 327.176 136.834 320.01 128 320.01S112 327.176 112 336.009ZM530.609 223.018C526.359 221.456 521.875 223.8 520.438 227.987C519 232.143 521.219 236.705 525.391 238.142C588.062 259.703 624 289.544 624 320.01C624 380.724 484.781 432.001 320 432.001S16 380.724 16 320.01C16 289.544 51.938 259.703 114.609 238.142C118.781 236.705 121 232.143 119.562 227.987C118.125 223.8 113.609 221.456 109.391 223.018C38.844 247.298 0 281.732 0 320.01C0 391.786 140.562 448 320 448S640 391.786 640 320.01C640 281.732 601.156 247.298 530.609 223.018Z" />
        </Icon>
    </>
}