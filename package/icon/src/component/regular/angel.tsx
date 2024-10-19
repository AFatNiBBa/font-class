
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angel` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angel?s=regular angel}
 * @preview ![angel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzEuNzQ3IDQ1My4xMjVMNTMzLjQ5OCAzNzQuNUM1MjYuODczIDM2MSA1MjYuODczIDM0NC44NzUgNTMzLjQ5OCAzMzEuMzc1QzU0OS43NDcgMjk4IDU1OS44NzIgMjkzLjg3NSA1NTkuODcyIDI1Ni4xMjVDNTU5Ljg3MiAyMDUgNTEyLjk5OCAxNjAuMTI1IDQ1OS40OTkgMTYwLjEyNUM0MzQuMzc1IDE2MC4xMjUgNDEwLjc1IDE3MC4xMjUgMzkzLjI1MSAxODguMjVMMzIwLjUwMiAyNjEuNjI1QzMxMC4yNTMgMjU4LjI1IDI5OS4yNTMgMjU2LjI1IDI4OC4wMDMgMjU2LjI1UzI2NS44NzkgMjU4LjI1IDI1NS42MjkgMjYxLjYyNUwxODIuODgxIDE4OC4yNUMxNjUuMjU2IDE3MC4yNSAxNDEuNzU2IDE2MC4yNSAxMTYuNjMyIDE2MC4yNUM2My4xMzMgMTYwLjI1IDE2LjI1OSAyMDUuMTI1IDE2LjI1OSAyNTYuMjVDMTYuMjU5IDI5NC4xMjUgMjYuMzg0IDI5OC4yNSA0Mi42MzQgMzMxLjVDNDkuMjU4IDM0NSA0OS4yNTggMzYxLjEyNSA0Mi42MzQgMzc0LjYyNUw0LjM4NCA0NTMuMTI1Qy0xMC4xMTUgNDgyLjg3NSAxMy43NTkgNTEyIDQwLjc1OSA1MTJINTM1LjM3M0M1NjIuOTk3IDUxMiA1ODUuNzQ3IDQ4Mi4xMjUgNTcxLjc0NyA0NTMuMTI1Wk01Mi4zODMgNDY0TDg1Ljc1OCAzOTUuMzc1Qzk4Ljc1NyAzNjguNzUgOTguNzU3IDMzNi44NzUgODUuNzU4IDMxMC4yNUM4MC4zODMgMjk5LjEyNSA3NS44ODMgMjkxLjM3NSA3Mi4yNTggMjg1LjI1QzY1LjEzMyAyNzIuNzUgNjQuMjU4IDI3MS4yNSA2NC4yNTggMjU2QzY0LjI1OCAyMzEuMjUgODkuNzU4IDIwOCAxMTYuNjMyIDIwOEMxMjguNzU3IDIwOCAxNDAuMTMxIDIxMi44NzUgMTQ4Ljc1NiAyMjEuNzVMMjEzLjg4IDI4Ny41QzIwNi42MyAyOTUgMjAwLjI1NSAzMDMuNjI1IDE5NS41MDUgMzEzLjI1TDEyMC4xMzIgNDY0SDUyLjM4M1pNMTczLjc1NiA0NjRMMjM4LjM3OSAzMzQuNzVDMjQ3Ljg3OSAzMTUuNzUgMjY2Ljg3OSAzMDQgMjg4LjEyOCAzMDRDMzA5LjI1MyAzMDQgMzI4LjI1MiAzMTUuNzUgMzM3Ljc1MiAzMzQuNzVMNDAyLjI1MSA0NjRIMTczLjc1NlpNNDU1Ljg3NCA0NjRMMzgwLjYyNiAzMTMuMjVDMzc1Ljc1MSAzMDMuNSAzNjkuNTAxIDI5NSAzNjIuMjUxIDI4Ny41TDQyNy4zNzUgMjIxLjc1QzQzNiAyMTIuNzUgNDQ3LjM3NSAyMDggNDU5LjQ5OSAyMDhDNDg2LjQ5OSAyMDggNTExLjg3MyAyMzEuMjUgNTExLjg3MyAyNTZDNTExLjg3MyAyNzEuMjUgNTEwLjk5OCAyNzIuNzUgNTAzLjc0OCAyODUuMjVDNTAwLjI0OCAyOTEuMzc1IDQ5NS43NDkgMjk5LjEyNSA0OTAuMjQ5IDMxMC4yNUM0NzcuMzc0IDMzNi44NzUgNDc3LjM3NCAzNjguNzUgNDkwLjI0OSAzOTUuMzc1TDUyMy43NDggNDY0SDQ1NS44NzRaTTIwOC4wMDUgMTQ0QzIwOC4wMDUgMTg4LjI1IDI0My43NTQgMjI0IDI4OC4wMDMgMjI0UzM2OC4wMDEgMTg4LjI1IDM2OC4wMDEgMTQ0UzMzMi4yNTIgNjQgMjg4LjAwMyA2NFMyMDguMDA1IDk5Ljc1IDIwOC4wMDUgMTQ0Wk0zMjAuMDAyIDE0NEMzMjAuMDAyIDE2MS42MjUgMzA1LjYyOCAxNzYgMjg4LjAwMyAxNzZTMjU2LjAwNCAxNjEuNjI1IDI1Ni4wMDQgMTQ0UzI3MC4zNzkgMTEyIDI4OC4wMDMgMTEyUzMyMC4wMDIgMTI2LjM3NSAzMjAuMDAyIDE0NFpNMTc2Ljc1NiAxMzcuMjVIMTc2Ljg4MUMxNzcuNzU2IDEyNC4yNSAxODAuNzU2IDExMiAxODUuNzU1IDEwMC42MjVDMTc0Ljc1NiA5NC42MjUgMTY4LjEzMSA4Ny42MjUgMTY4LjEzMSA4MEMxNjguMTMxIDU3Ljg3NSAyMjEuNzU1IDQwIDI4OC4xMjggNDBDMzU0LjM3NyA0MCA0MDguMTI2IDU3Ljg3NSA0MDguMTI2IDgwQzQwOC4xMjYgODcuNjI1IDQwMS4zNzYgOTQuNjI1IDM5MC41MDEgMTAwLjYyNUMzOTUuMzc2IDExMiAzOTguNTAxIDEyNC4yNSAzOTkuMjUxIDEzNy4yNUgzOTkuNTAxQzQyOS4yNSAxMjIuNzUgNDQ4IDEwMi41IDQ0OCA4MEM0NDggMzUuNzUgMzc2LjM3NiAwIDI4OC4wMDMgMFMxMjguMDA3IDM1Ljc1IDEyOC4wMDcgODBDMTI4LjAwNyAxMDIuNSAxNDYuNzU2IDEyMi43NSAxNzYuNzU2IDEzNy4yNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Angel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M571.747 453.125L533.498 374.5C526.873 361 526.873 344.875 533.498 331.375C549.747 298 559.872 293.875 559.872 256.125C559.872 205 512.998 160.125 459.499 160.125C434.375 160.125 410.75 170.125 393.251 188.25L320.502 261.625C310.253 258.25 299.253 256.25 288.003 256.25S265.879 258.25 255.629 261.625L182.881 188.25C165.256 170.25 141.756 160.25 116.632 160.25C63.133 160.25 16.259 205.125 16.259 256.25C16.259 294.125 26.384 298.25 42.634 331.5C49.258 345 49.258 361.125 42.634 374.625L4.384 453.125C-10.115 482.875 13.759 512 40.759 512H535.373C562.997 512 585.747 482.125 571.747 453.125ZM52.383 464L85.758 395.375C98.757 368.75 98.757 336.875 85.758 310.25C80.383 299.125 75.883 291.375 72.258 285.25C65.133 272.75 64.258 271.25 64.258 256C64.258 231.25 89.758 208 116.632 208C128.757 208 140.131 212.875 148.756 221.75L213.88 287.5C206.63 295 200.255 303.625 195.505 313.25L120.132 464H52.383ZM173.756 464L238.379 334.75C247.879 315.75 266.879 304 288.128 304C309.253 304 328.252 315.75 337.752 334.75L402.251 464H173.756ZM455.874 464L380.626 313.25C375.751 303.5 369.501 295 362.251 287.5L427.375 221.75C436 212.75 447.375 208 459.499 208C486.499 208 511.873 231.25 511.873 256C511.873 271.25 510.998 272.75 503.748 285.25C500.248 291.375 495.749 299.125 490.249 310.25C477.374 336.875 477.374 368.75 490.249 395.375L523.748 464H455.874ZM208.005 144C208.005 188.25 243.754 224 288.003 224S368.001 188.25 368.001 144S332.252 64 288.003 64S208.005 99.75 208.005 144ZM320.002 144C320.002 161.625 305.628 176 288.003 176S256.004 161.625 256.004 144S270.379 112 288.003 112S320.002 126.375 320.002 144ZM176.756 137.25H176.881C177.756 124.25 180.756 112 185.755 100.625C174.756 94.625 168.131 87.625 168.131 80C168.131 57.875 221.755 40 288.128 40C354.377 40 408.126 57.875 408.126 80C408.126 87.625 401.376 94.625 390.501 100.625C395.376 112 398.501 124.25 399.251 137.25H399.501C429.25 122.75 448 102.5 448 80C448 35.75 376.376 0 288.003 0S128.007 35.75 128.007 80C128.007 102.5 146.756 122.75 176.756 137.25Z" />
        </Icon>
    </>
}