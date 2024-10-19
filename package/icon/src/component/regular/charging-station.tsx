
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `charging-station` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=regular charging-station}
 * @preview ![charging-station](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgMTI4SDU0NFY4MEM1NDQgNzEuMTI1IDUzNi44NzUgNjQgNTI4IDY0UzUxMiA3MS4xMjUgNTEyIDgwVjEyOEg0ODBWODBDNDgwIDcxLjEyNSA0NzIuODc1IDY0IDQ2NCA2NFM0NDggNzEuMTI1IDQ0OCA4MFYxMjhINDMyQzQyMy4xNjQgMTI4IDQxNiAxMzUuMTYyIDQxNiAxNDRWMTkyQzQxNiAyMjcuNzUgNDM5LjYyNSAyNTcuNzUgNDcyIDI2Ny44NzVWMzcwLjYwOUM0NzIgMzg0LjU1MSA0NjIuNDI2IDM5Ny40MjggNDQ4LjY1OCAzOTkuNjI3QzQzMS4wODQgNDAyLjQzMiA0MTYgMzg5LjAyNSA0MTYgMzcyVjM0NEM0MTYgMjk1LjYgMzc2LjQgMjU2IDMyOCAyNTZIMzIwVjY0QzMyMCAyOC42NTIgMjkxLjM0NiAwIDI1NiAwSDk2QzYwLjY1NCAwIDMyIDI4LjY1MiAzMiA2NFY0NjRIMjRDMTAuODAxIDQ2NCAwIDQ3NC43OTkgMCA0ODhDMCA1MDEuMTk5IDEwLjgwMSA1MTIgMjQgNTEySDMyOEMzNDEuMTk5IDUxMiAzNTIgNTAxLjE5OSAzNTIgNDg4QzM1MiA0NzQuNzk5IDM0MS4xOTkgNDY0IDMyOCA0NjRIMzIwVjMwNEgzMjhDMzUwIDMwNCAzNjggMzIyIDM2OCAzNDRWMzY3Ljk2OUMzNjggNDA3Ljk2NSAzOTcuMDk0IDQ0NC4wNDMgNDM2LjkyNCA0NDcuNjc2QzQ4MS45NjEgNDUxLjc4MyA1MjAgNDE2LjIxMSA1MjAgMzcyVjI2Ny44NzVDNTUyLjM3NSAyNTcuNzUgNTc2IDIyNy43NSA1NzYgMTkyVjE0NEM1NzYgMTM1LjE2MiA1NjguODM2IDEyOCA1NjAgMTI4Wk0yNzIgNDY0SDgwVjY0QzgwIDU1LjE2MiA4Ny4xNjQgNDggOTYgNDhIMjU2QzI2NC44MzYgNDggMjcyIDU1LjE2MiAyNzIgNjRWNDY0Wk01MjggMTkyQzUyOCAyMDkuNjI1IDUxMy42MjUgMjI0IDQ5NiAyMjRTNDY0IDIwOS42MjUgNDY0IDE5MlYxNzZINTI4VjE5MlpNMjEzLjcxOSAxNzZIMTcwLjk4NEwxODYuMzEyIDEyNy4xODhDMTkwLjI5NyAxMTQuNTQ3IDE4My4yNjYgMTAxLjA3OCAxNzAuNjI1IDk3LjEwOUMxNTcuODQ0IDkzLjA2MiAxNDQuNDg0IDEwMC4xNDEgMTQwLjUzMSAxMTIuODEyTDExNS4zOTEgMTkyLjgxMkMxMTMuMDk0IDIwMC4wOTQgMTE0LjQwNiAyMDguMDQ3IDExOC45MzggMjE0LjIwM0MxMjMuNDUzIDIyMC4zNTkgMTMwLjY0MSAyMjQgMTM4LjI4MSAyMjRIMTc0LjA0N0wxNDIuMTU2IDI4NC44NTlDMTM2LjAxNiAyOTYuNjA5IDE0MC41NDcgMzExLjEwOSAxNTIuMjgxIDMxNy4yNjZDMTU1Ljg0NCAzMTkuMTI1IDE1OS42NDEgMzIwIDE2My40MDYgMzIwQzE3Mi4wNDcgMzIwIDE4MC4zOTEgMzE1LjMyOCAxODQuNjg4IDMwNy4xNDFMMjM0Ljk4NCAyMTEuMTQxQzIzOC44NzUgMjAzLjcwMyAyMzguNTk0IDE5NC43NjYgMjM0LjI1IDE4Ny41NzhTMjIyLjEyNSAxNzYgMjEzLjcxOSAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChargingStation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560 128H544V80C544 71.125 536.875 64 528 64S512 71.125 512 80V128H480V80C480 71.125 472.875 64 464 64S448 71.125 448 80V128H432C423.164 128 416 135.162 416 144V192C416 227.75 439.625 257.75 472 267.875V370.609C472 384.551 462.426 397.428 448.658 399.627C431.084 402.432 416 389.025 416 372V344C416 295.6 376.4 256 328 256H320V64C320 28.652 291.346 0 256 0H96C60.654 0 32 28.652 32 64V464H24C10.801 464 0 474.799 0 488C0 501.199 10.801 512 24 512H328C341.199 512 352 501.199 352 488C352 474.799 341.199 464 328 464H320V304H328C350 304 368 322 368 344V367.969C368 407.965 397.094 444.043 436.924 447.676C481.961 451.783 520 416.211 520 372V267.875C552.375 257.75 576 227.75 576 192V144C576 135.162 568.836 128 560 128ZM272 464H80V64C80 55.162 87.164 48 96 48H256C264.836 48 272 55.162 272 64V464ZM528 192C528 209.625 513.625 224 496 224S464 209.625 464 192V176H528V192ZM213.719 176H170.984L186.312 127.188C190.297 114.547 183.266 101.078 170.625 97.109C157.844 93.062 144.484 100.141 140.531 112.812L115.391 192.812C113.094 200.094 114.406 208.047 118.938 214.203C123.453 220.359 130.641 224 138.281 224H174.047L142.156 284.859C136.016 296.609 140.547 311.109 152.281 317.266C155.844 319.125 159.641 320 163.406 320C172.047 320 180.391 315.328 184.688 307.141L234.984 211.141C238.875 203.703 238.594 194.766 234.25 187.578S222.125 176 213.719 176Z" />
        </Icon>
    </>
}