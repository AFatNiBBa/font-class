
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-gear` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-gear?s=regular user-gear}
 * @preview ![user-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTAuNTQ5IDM3My4yNUM2MTMuMTc1IDM1OS4yNSA2MTMuMTc1IDM0NC43NSA2MTAuNTQ5IDMzMC43NUw2MzYuMzAyIDMxNS43NUM2MzkuMzAyIDMxNC4xMjUgNjQwLjY3NyAzMTAuNjI1IDYzOS42NzcgMzA3LjI1QzYzMi45MjYgMjg1Ljc1IDYyMS40MjUgMjY2LjEyNSA2MDYuNDI0IDI0OS44NzVDNjA0LjE3NCAyNDcuMzc1IDYwMC40MjQgMjQ2Ljc1IDU5Ny40MjMgMjQ4LjVMNTcxLjY3MSAyNjMuMzc1QzU2MC43OTUgMjU0LjEyNSA1NDguMjk0IDI0Ni44NzUgNTM0Ljc5MyAyNDIuMTI1VjIxMi4yNUM1MzQuNzkzIDIwOC44NzUgNTMyLjI5MyAyMDUuODc1IDUyOS4wNDMgMjA1LjI1QzUwNi43OTEgMjAwLjI1IDQ4NC4wMzkgMjAwLjM3NSA0NjIuNzg3IDIwNS4yNUM0NTkuNTM3IDIwNS44NzUgNDU3LjE2MiAyMDguODc1IDQ1Ny4xNjIgMjEyLjI1VjI0Mi4xMjVDNDQzLjY2MSAyNDYuODc1IDQzMS4xNiAyNTQuMTI1IDQyMC4yODQgMjYzLjM3NUwzOTQuNDA3IDI0OC41QzM5MS41MzIgMjQ2Ljc1IDM4Ny43ODEgMjQ3LjM3NSAzODUuNDA2IDI0OS44NzVDMzcwLjQwNSAyNjYuMTI1IDM1OC45MDQgMjg1Ljc1IDM1Mi4yNzkgMzA3LjI1QzM1MS4yNzggMzEwLjYyNSAzNTIuNjU0IDMxNC4xMjUgMzU1LjUyOSAzMTUuNzVMMzgxLjI4MSAzMzAuNzVDMzc4Ljc4MSAzNDQuNzUgMzc4Ljc4MSAzNTkuMjUgMzgxLjI4MSAzNzMuMjVMMzU1LjUyOSAzODguMjVDMzUyLjUyOSAzODkuODc1IDM1MS4yNzggMzkzLjM3NSAzNTIuMjc5IDM5Ni43NUMzNTguOTA0IDQxOC4yNSAzNzAuNDA1IDQzNy43NSAzODUuNDA2IDQ1NC4xMjVDMzg3Ljc4MSA0NTYuNjI1IDM5MS40MDcgNDU3LjI1IDM5NC40MDcgNDU1LjVMNDIwLjI4NCA0NDAuNjI1QzQzMS4xNiA0NDkuODc1IDQ0My42NjEgNDU3LjEyNSA0NTcuMTYyIDQ2MS44NzVWNDkxLjc1QzQ1Ny4xNjIgNDk1LjEyNSA0NTkuNTM3IDQ5OC4xMjUgNDYyLjc4NyA0OTguNzVDNDg1LjE2NCA1MDMuNzUgNTA3Ljc5MSA1MDMuNjI1IDUyOS4wNDMgNDk4Ljc1QzUzMi4yOTMgNDk4LjEyNSA1MzQuNzkzIDQ5NS4xMjUgNTM0Ljc5MyA0OTEuNzVWNDYxLjg3NUM1NDguMjk0IDQ1Ny4xMjUgNTYwLjc5NSA0NDkuODc1IDU3MS42NzEgNDQwLjYyNUw1OTcuNDIzIDQ1NS41QzYwMC4yOTkgNDU3LjI1IDYwNC4xNzQgNDU2LjYyNSA2MDYuNDI0IDQ1NC4xMjVDNjIxLjQyNSA0MzcuODc1IDYzMi45MjYgNDE4LjI1IDYzOS42NzcgMzk2Ljc1QzY0MC42NzcgMzkzLjM3NSA2MzkuMzAyIDM4OS44NzUgNjM2LjMwMiAzODguMjVMNjEwLjU0OSAzNzMuMjVaTTQ5Ni4wNCA0MDAuNUM0NjkuMjg4IDQwMC41IDQ0Ny41MzYgMzc4Ljc1IDQ0Ny41MzYgMzUyUzQ2OS4yODggMzAzLjUgNDk2LjA0IDMwMy41UzU0NC41NDQgMzI1LjI1IDU0NC41NDQgMzUyUzUyMi43OTIgNDAwLjUgNDk2LjA0IDQwMC41Wk00MjUuMTU5IDQ5MS43NUM0MjUuMTU5IDQ5Ny44OTggNDI3LjAwMyA1MDMuNTIxIDQyOS41NyA1MDguNzU4QzQyNS40MjcgNTEwLjcxNyA0MjAuOTIxIDUxMiA0MTYuMDM0IDUxMkgzMi4wMDNDMTQuMzI3IDUxMiAwIDQ5Ny42NzIgMCA0ODBDMCAzODIuNzk3IDc4LjgwMyAzMDQgMTc2LjAxNCAzMDRIMjcyLjAyMkMyODguNzA3IDMwNCAzMDQuNzg2IDMwNi40NzMgMzIwLjA4MSAzMTAuODExQzMyMC41MDYgMzI0LjMxNCAzMjcuNjU1IDMzNi43NTQgMzM5Ljc4MyAzNDMuNjA3TDM0Ny40NCAzNDguMDY4QzM0Ny4zNzIgMzUwLjY4NyAzNDcuMzcyIDM1My4zMDkgMzQ3LjQ0IDM1NS45MjhMMzM5LjQyIDM2MC42QzMzNi4yOTUgMzYyLjI4OSAzMzMuNzM4IDM2NC42NTggMzMxLjI5IDM2Ny4xMDVDMzEzLjUwMiAzNTcuNzI1IDI5My40OTMgMzUyIDI3Mi4wMjIgMzUySDE3Ni4wMTRDMTEwLjg0OSAzNTIgNTYuODk5IDQwMC45NDUgNDguOTk4IDQ2NEgzNTIuMTg1QzM1NS4yODcgNDY3Ljk5OCAzNTguMzg0IDQ3Mi4wMDIgMzYxLjgwOSA0NzUuNzRDMzY5LjY1MSA0ODQgMzgwLjA2NiA0ODguNDk0IDM5MC43ODIgNDg4LjQ5NEMzOTcuNjk4IDQ4OC40OTQgNDA0LjUyOSA0ODYuNjQzIDQxMC41MzMgNDgzLjE0MUw0MTguMzUgNDc4LjY0NkM0MjAuNTg3IDQ4MC4wMTggNDIyLjg1NyA0ODEuMzI4IDQyNS4xNTkgNDgyLjU3OFY0OTEuNzVaTTIyNC4wMTggMjU2QzI5NC43MTcgMjU2IDM1Mi4wMjkgMTk4LjY5MSAzNTIuMDI5IDEyOEMzNTIuMDI5IDU3LjMwNyAyOTQuNzE3IDAgMjI0LjAxOCAwUzk2LjAwOCA1Ny4zMDcgOTYuMDA4IDEyOEM5Ni4wMDggMTk4LjY5MSAxNTMuMzE5IDI1NiAyMjQuMDE4IDI1NlpNMjI0LjAxOCA0OEMyNjguMTMzIDQ4IDMwNC4wMjUgODMuODg3IDMwNC4wMjUgMTI4QzMwNC4wMjUgMTcyLjExMSAyNjguMTMzIDIwOCAyMjQuMDE4IDIwOFMxNDQuMDEyIDE3Mi4xMTEgMTQ0LjAxMiAxMjhDMTQ0LjAxMiA4My44ODcgMTc5LjkwMyA0OCAyMjQuMDE4IDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserGear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M610.549 373.25C613.175 359.25 613.175 344.75 610.549 330.75L636.302 315.75C639.302 314.125 640.677 310.625 639.677 307.25C632.926 285.75 621.425 266.125 606.424 249.875C604.174 247.375 600.424 246.75 597.423 248.5L571.671 263.375C560.795 254.125 548.294 246.875 534.793 242.125V212.25C534.793 208.875 532.293 205.875 529.043 205.25C506.791 200.25 484.039 200.375 462.787 205.25C459.537 205.875 457.162 208.875 457.162 212.25V242.125C443.661 246.875 431.16 254.125 420.284 263.375L394.407 248.5C391.532 246.75 387.781 247.375 385.406 249.875C370.405 266.125 358.904 285.75 352.279 307.25C351.278 310.625 352.654 314.125 355.529 315.75L381.281 330.75C378.781 344.75 378.781 359.25 381.281 373.25L355.529 388.25C352.529 389.875 351.278 393.375 352.279 396.75C358.904 418.25 370.405 437.75 385.406 454.125C387.781 456.625 391.407 457.25 394.407 455.5L420.284 440.625C431.16 449.875 443.661 457.125 457.162 461.875V491.75C457.162 495.125 459.537 498.125 462.787 498.75C485.164 503.75 507.791 503.625 529.043 498.75C532.293 498.125 534.793 495.125 534.793 491.75V461.875C548.294 457.125 560.795 449.875 571.671 440.625L597.423 455.5C600.299 457.25 604.174 456.625 606.424 454.125C621.425 437.875 632.926 418.25 639.677 396.75C640.677 393.375 639.302 389.875 636.302 388.25L610.549 373.25ZM496.04 400.5C469.288 400.5 447.536 378.75 447.536 352S469.288 303.5 496.04 303.5S544.544 325.25 544.544 352S522.792 400.5 496.04 400.5ZM425.159 491.75C425.159 497.898 427.003 503.521 429.57 508.758C425.427 510.717 420.921 512 416.034 512H32.003C14.327 512 0 497.672 0 480C0 382.797 78.803 304 176.014 304H272.022C288.707 304 304.786 306.473 320.081 310.811C320.506 324.314 327.655 336.754 339.783 343.607L347.44 348.068C347.372 350.687 347.372 353.309 347.44 355.928L339.42 360.6C336.295 362.289 333.738 364.658 331.29 367.105C313.502 357.725 293.493 352 272.022 352H176.014C110.849 352 56.899 400.945 48.998 464H352.185C355.287 467.998 358.384 472.002 361.809 475.74C369.651 484 380.066 488.494 390.782 488.494C397.698 488.494 404.529 486.643 410.533 483.141L418.35 478.646C420.587 480.018 422.857 481.328 425.159 482.578V491.75ZM224.018 256C294.717 256 352.029 198.691 352.029 128C352.029 57.307 294.717 0 224.018 0S96.008 57.307 96.008 128C96.008 198.691 153.319 256 224.018 256ZM224.018 48C268.133 48 304.025 83.887 304.025 128C304.025 172.111 268.133 208 224.018 208S144.012 172.111 144.012 128C144.012 83.887 179.903 48 224.018 48Z" />
        </Icon>
    </>
}