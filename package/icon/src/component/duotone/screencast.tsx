
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=duotone screencast}
 * @preview ![screencast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5Ni40NjEgMzJIODAuOTEyQzM2LjgzNiAzMiAxIDY3LjgyNCAxIDExMS44OTFWMTc3Ljg0QzExLjUwMiAxNzYuNjA1IDIyLjEzMSAxNzUuNzk3IDMyLjk2NSAxNzUuNzk3UzU0LjQyOCAxNzYuNjA1IDY0LjkzIDE3Ny44NFYxMTEuODkxQzY0LjkzIDEwMy4wODYgNzIuMTA5IDk1LjkxIDgwLjkxMiA5NS45MUg0OTYuNDYxQzUwNS4yNjYgOTUuOTEgNTEyLjQ0NSAxMDMuMDg2IDUxMi40NDUgMTExLjg5MVYzOTkuNDg0QzUxMi40NDUgNDA4LjI4OSA1MDUuMjY2IDQxNS40NjUgNDk2LjQ2MSA0MTUuNDY1SDMwMi42MjlDMzAzLjg2MSA0MjUuOTY1IDMwNC42NyA0MzYuNTk0IDMwNC42NyA0NDcuNDIyUzMwMy44NjEgNDY4Ljg3NSAzMDIuNjI5IDQ3OS4zNzVINDk2LjQ2MUM1NDAuNTM5IDQ3OS4zNzUgNTc2LjM3NSA0NDMuNTUxIDU3Ni4zNzUgMzk5LjQ4NFYxMTEuODkxQzU3Ni4zNzUgNjcuODI0IDU0MC41MzkgMzIgNDk2LjQ2MSAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzIuNTkgNDE1LjQ2NUMxNC45MzYgNDE1LjQ2NSAwLjYyNSA0MjkuNzczIDAuNjI1IDQ0Ny40MjJTMTQuOTM2IDQ3OS4zNzUgMzIuNTkgNDc5LjM3NVM2NC41NTUgNDY1LjA3IDY0LjU1NSA0NDcuNDIyUzUwLjI0NCA0MTUuNDY1IDMyLjU5IDQxNS40NjVaTTMyLjU5IDIyMy43MzRDMTQuOTIyIDIyMy43MzQgMC42MjUgMjM4LjAyMyAwLjYyNSAyNTUuNjg4UzE0LjkyMiAyODcuNjQxIDMyLjU5IDI4Ny42NDFDMTIwLjcxMyAyODcuNjQxIDE5Mi40MTYgMzU5LjMyNCAxOTIuNDE2IDQ0Ny40MjJDMTkyLjQxNiA0NjUuMDgyIDIwNi43MTMgNDc5LjM3NSAyMjQuMzgxIDQ3OS4zNzVDMjQyLjA1MSA0NzkuMzc1IDI1Ni4zNDggNDY1LjA4MiAyNTYuMzQ4IDQ0Ny40MjJDMjU2LjM0OCAzMjQuMDk0IDE1NS45NTUgMjIzLjczNCAzMi41OSAyMjMuNzM0Wk0zMS45NjUgMzIwLjIyM0MxNC4yOTcgMzIwLjIyMyAwIDMzNC41MTYgMCAzNTIuMThDMCAzNjkuODQgMTQuMjk3IDM4NC4xMzMgMzEuOTY1IDM4NC4xMzNDNjcuMjA5IDM4NC4xMzMgOTUuODk2IDQxMi44MTIgOTUuODk2IDQ0OC4wNDdDOTUuODk2IDQ2NS43MDcgMTEwLjE5MyA0ODAgMTI3Ljg2MSA0ODBTMTU5LjgyNiA0NjUuNzA3IDE1OS44MjYgNDQ4LjA0N0MxNTkuODI2IDM3Ny41NDcgMTAyLjQ4MiAzMjAuMjIzIDMxLjk2NSAzMjAuMjIzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Screencast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M496.461 32H80.912C36.836 32 1 67.824 1 111.891V177.84C11.502 176.605 22.131 175.797 32.965 175.797S54.428 176.605 64.93 177.84V111.891C64.93 103.086 72.109 95.91 80.912 95.91H496.461C505.266 95.91 512.445 103.086 512.445 111.891V399.484C512.445 408.289 505.266 415.465 496.461 415.465H302.629C303.861 425.965 304.67 436.594 304.67 447.422S303.861 468.875 302.629 479.375H496.461C540.539 479.375 576.375 443.551 576.375 399.484V111.891C576.375 67.824 540.539 32 496.461 32Z" />
            <path d="M32.59 415.465C14.936 415.465 0.625 429.773 0.625 447.422S14.936 479.375 32.59 479.375S64.555 465.07 64.555 447.422S50.244 415.465 32.59 415.465ZM32.59 223.734C14.922 223.734 0.625 238.023 0.625 255.688S14.922 287.641 32.59 287.641C120.713 287.641 192.416 359.324 192.416 447.422C192.416 465.082 206.713 479.375 224.381 479.375C242.051 479.375 256.348 465.082 256.348 447.422C256.348 324.094 155.955 223.734 32.59 223.734ZM31.965 320.223C14.297 320.223 0 334.516 0 352.18C0 369.84 14.297 384.133 31.965 384.133C67.209 384.133 95.896 412.812 95.896 448.047C95.896 465.707 110.193 480 127.861 480S159.826 465.707 159.826 448.047C159.826 377.547 102.482 320.223 31.965 320.223Z" />
        </Icon>
    </>
}