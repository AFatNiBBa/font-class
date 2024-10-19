
import { Icon } from "../../index";

/**
 * A component that renders the `unicorn` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unicorn?s=solid unicorn}
 * @preview ![unicorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIuMDIxIDMySDUzMS43NjhDNTM3LjY0MyAyNS44NzUgNTQyLjE0MyAxOC4zNzUgNTQzLjg5MyA5LjYyNUM1NDQuODkzIDQuNjI1IDU0MS4wMTggMCA1MzYuMDE4IDBINDE2LjAxNEMzNDUuMjYyIDAgMjg4LjAxIDU3LjI1IDI4OC4wMSAxMjhIMTYwLjAwNUMxMzEuMTI5IDEyOCAxMDUuNjI5IDE0MSA4OC4wMDMgMTYxLjEyNVYxNjBDMzkuNTAxIDE2MCAwIDE5OS41IDAgMjQ4VjMwNEMwIDMxMi44NzUgNy4xMjUgMzIwIDE2LjAwMSAzMjBIMzIuMDAxQzQwLjg3NiAzMjAgNDguMDAyIDMxMi44NzUgNDguMDAyIDMwNFYyNDhDNDguMDAyIDIzNC43NSA1NC44NzcgMjIzLjYyNSA2NC43NTIgMjE2LjM3NUM2NC42MjcgMjE4Ljg3NSA2NC4wMDIgMjIxLjM3NSA2NC4wMDIgMjI0QzY0LjAwMiAyNTEuNjI1IDc1Ljg3OCAyNzYuMzc1IDk0LjUwMyAyOTMuODc1TDY4LjczOSAzNjIuODcyQzY0LjI0MyAzNzQuOTEyIDYzLjUwNiAzODguMDMzIDY2LjYyNyA0MDAuNUw4OC40NzMgNDg3Ljc3MUM5Mi4wMzggNTAyLjAxMSAxMDQuODM1IDUxMiAxMTkuNTE1IDUxMkgxNTIuNTAyQzE3My4zMTMgNTEyIDE4OC41ODcgNDkyLjQ0OCAxODMuNTUxIDQ3Mi4yNTZMMTYyLjI1NSAzODYuODc1TDE4Ni4wMDYgMzIzLjI1TDI4OC4xMzUgMzQ1LjYyNVY0ODBDMjg4LjEzNSA0OTcuNjczIDMwMi40NjIgNTEyIDMyMC4xMzUgNTEySDM1Mi4xMzhDMzY5LjczOCA1MTIgMzg0LjEzOCA0OTcuNiAzODQuMTM4IDQ4MFYzMTguMjVDNDAzLjc2NCAyOTggNDE2LjEzOSAyNzAuNSA0MTYuMTM5IDI0MEM0MTYuMTM5IDIzOS43NSA0MTYuMDE0IDIzOS42MjUgNDE2LjAxNCAyMzkuMzc1VjEzNi44NzVMNDMyLjAxNCAxNDRMNDUwLjg5IDE4MS43NUM0NTguMzQ1IDE5Ni42NTkgNDc2LjAwMyAyMDMuMzM5IDQ5MS40NTkgMTk3LjA5OEw1MjMuODkzIDE4NEM1MzYuMDU1IDE3OS4wODggNTQ0LjAxOCAxNjcuMjg1IDU0NC4wMTggMTU0LjE2OFY4My4yNUw2MzYuMzk2IDQ2LjYyNUM2NDMuMDIyIDQyLjI1IDYzOS44OTYgMzIgNjMyLjAyMSAzMlpNNDgwLjAxNiA5NkM0NzEuMTQxIDk2IDQ2NC4wMTYgODguODc1IDQ2NC4wMTYgODBTNDcxLjE0MSA2NCA0ODAuMDE2IDY0QzQ4OC44OTEgNjQgNDk2LjAxNyA3MS4xMjUgNDk2LjAxNyA4MFM0ODguODkxIDk2IDQ4MC4wMTYgOTZaIi8+PC9zdmc+|width=32|height=32)
 */
const Unicorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M632.021 32H531.768C537.643 25.875 542.143 18.375 543.893 9.625C544.893 4.625 541.018 0 536.018 0H416.014C345.262 0 288.01 57.25 288.01 128H160.005C131.129 128 105.629 141 88.003 161.125V160C39.501 160 0 199.5 0 248V304C0 312.875 7.125 320 16.001 320H32.001C40.876 320 48.002 312.875 48.002 304V248C48.002 234.75 54.877 223.625 64.752 216.375C64.627 218.875 64.002 221.375 64.002 224C64.002 251.625 75.878 276.375 94.503 293.875L68.739 362.872C64.243 374.912 63.506 388.033 66.627 400.5L88.473 487.771C92.038 502.011 104.835 512 119.515 512H152.502C173.313 512 188.587 492.448 183.551 472.256L162.255 386.875L186.006 323.25L288.135 345.625V480C288.135 497.673 302.462 512 320.135 512H352.138C369.738 512 384.138 497.6 384.138 480V318.25C403.764 298 416.139 270.5 416.139 240C416.139 239.75 416.014 239.625 416.014 239.375V136.875L432.014 144L450.89 181.75C458.345 196.659 476.003 203.339 491.459 197.098L523.893 184C536.055 179.088 544.018 167.285 544.018 154.168V83.25L636.396 46.625C643.022 42.25 639.896 32 632.021 32ZM480.016 96C471.141 96 464.016 88.875 464.016 80S471.141 64 480.016 64C488.891 64 496.017 71.125 496.017 80S488.891 96 480.016 96Z" />
    </Icon>
);

export default Unicorn;