
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-gear` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-gear?s=duotone user-gear}
 * @preview ![user-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAyNTZDMjk0LjY5NSAyNTYgMzUyIDE5OC42OTEgMzUyIDEyOFMyOTQuNjk1IDAgMjI0IDBDMTUzLjMxMiAwIDk2IDU3LjMwOSA5NiAxMjhTMTUzLjMxMiAyNTYgMjI0IDI1NlpNNDI1LjEyNSA0OTEuNzVWNDgyLjU3OEM0MjIuODIyIDQ4MS4zMjggNDIwLjU1MyA0ODAuMDIgNDE4LjMxNiA0NzguNjQ4TDQxMC40OTggNDgzLjE0MUM0MDQuNDk2IDQ4Ni42NDUgMzk3LjY2NiA0ODguNDkyIDM5MC43NDggNDg4LjQ5MkMzODAuMDMzIDQ4OC40OTIgMzY5LjYxOSA0ODQgMzYxLjc3OSA0NzUuNzM4QzM0My4zNzEgNDU1LjY0NSAzMjkuNSA0MzEuNTkgMzIxLjU2OCA0MDUuODRDMzE2LjIxNyAzODcuNzc3IDMyMy45MDIgMzY4Ljk3MyAzMzkuMzkzIDM2MC41OThMMzQ3LjQxIDM1NS45M0MzNDcuMzQ0IDM1My4zMDkgMzQ3LjM0NCAzNTAuNjg3IDM0Ny40MSAzNDguMDdMMzM5Ljc1NiAzNDMuNjA5QzMyNy40NTUgMzM2LjY1NiAzMjAuMzYzIDMyMy45NTMgMzIwLjEyNyAzMTAuMjI3QzMwNS42MTUgMzA2LjI4OSAyOTAuNDI0IDMwNCAyNzQuNjY0IDMwNEgxNzMuMzM2Qzc3LjYwOSAzMDQgMCAzODEuNjAyIDAgNDc3LjMzMkMwIDQ5Ni40NzcgMTUuNTIzIDUxMiAzNC42NjQgNTEySDQxMy4zMzZDNDE5LjA2MiA1MTIgNDI0LjIzNCA1MTAuMjczIDQyOC45OTYgNTA3LjgxMkM0MjYuNzI1IDUwMi44MjggNDI1LjEyNSA0OTcuNTE2IDQyNS4xMjUgNDkxLjc1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MTAuNTg5IDM3My4yNUM2MTMuMjE0IDM1OS4yNSA2MTMuMjE0IDM0NC43NSA2MTAuNTg5IDMzMC43NUw2MzYuMzM5IDMxNS43NUM2MzkuMzM5IDMxNC4xMjUgNjQwLjcxNCAzMTAuNjI1IDYzOS43MTQgMzA3LjI1QzYzMi45NjQgMjg1Ljc1IDYyMS40NjQgMjY2LjEyNSA2MDYuNDY0IDI0OS44NzVDNjA0LjIxNCAyNDcuMzc1IDYwMC40NjQgMjQ2Ljc1IDU5Ny40NjQgMjQ4LjVMNTcxLjcxNCAyNjMuMzc1QzU2MC44MzkgMjU0LjEyNSA1NDguMzM5IDI0Ni44NzUgNTM0LjgzOSAyNDIuMTI1VjIxMi4yNUM1MzQuODM5IDIwOC44NzUgNTMyLjMzOSAyMDUuODc1IDUyOS4wODkgMjA1LjI1QzUwNi44MzkgMjAwLjI1IDQ4NC4wODkgMjAwLjM3NSA0NjIuODM5IDIwNS4yNUM0NTkuNTg5IDIwNS44NzUgNDU3LjIxNCAyMDguODc1IDQ1Ny4yMTQgMjEyLjI1VjI0Mi4xMjVDNDQzLjcxNCAyNDYuODc1IDQzMS4yMTQgMjU0LjEyNSA0MjAuMzM5IDI2My4zNzVMMzk0LjQ2NCAyNDguNUMzOTEuNTg5IDI0Ni43NSAzODcuODM5IDI0Ny4zNzUgMzg1LjQ2NCAyNDkuODc1QzM3MC40NjQgMjY2LjEyNSAzNTguOTY0IDI4NS43NSAzNTIuMzM5IDMwNy4yNUMzNTEuMzM5IDMxMC42MjUgMzUyLjcxNCAzMTQuMTI1IDM1NS41ODkgMzE1Ljc1TDM4MS4zMzkgMzMwLjc1QzM3OC44MzkgMzQ0Ljc1IDM3OC44MzkgMzU5LjI1IDM4MS4zMzkgMzczLjI1TDM1NS41ODkgMzg4LjI1QzM1Mi41ODkgMzg5Ljg3NSAzNTEuMzM5IDM5My4zNzUgMzUyLjMzOSAzOTYuNzVDMzU4Ljk2NCA0MTguMjUgMzcwLjQ2NCA0MzcuNzUgMzg1LjQ2NCA0NTQuMTI1QzM4Ny44MzkgNDU2LjYyNSAzOTEuNDY0IDQ1Ny4yNSAzOTQuNDY0IDQ1NS41TDQyMC4zMzkgNDQwLjYyNUM0MzEuMjE0IDQ0OS44NzUgNDQzLjcxNCA0NTcuMTI1IDQ1Ny4yMTQgNDYxLjg3NVY0OTEuNzVDNDU3LjIxNCA0OTUuMTI1IDQ1OS41ODkgNDk4LjEyNSA0NjIuODM5IDQ5OC43NUM0ODUuMjE0IDUwMy43NSA1MDcuODM5IDUwMy42MjUgNTI5LjA4OSA0OTguNzVDNTMyLjMzOSA0OTguMTI1IDUzNC44MzkgNDk1LjEyNSA1MzQuODM5IDQ5MS43NVY0NjEuODc1QzU0OC4zMzkgNDU3LjEyNSA1NjAuODM5IDQ0OS44NzUgNTcxLjcxNCA0NDAuNjI1TDU5Ny40NjQgNDU1LjVDNjAwLjMzOSA0NTcuMjUgNjA0LjIxNCA0NTYuNjI1IDYwNi40NjQgNDU0LjEyNUM2MjEuNDY0IDQzNy44NzUgNjMyLjk2NCA0MTguMjUgNjM5LjcxNCAzOTYuNzVDNjQwLjcxNCAzOTMuMzc1IDYzOS4zMzkgMzg5Ljg3NSA2MzYuMzM5IDM4OC4yNUw2MTAuNTg5IDM3My4yNVpNNDk2LjA4OSA0MDAuNUM0NjkuMzM5IDQwMC41IDQ0Ny41ODkgMzc4Ljc1IDQ0Ny41ODkgMzUyUzQ2OS4zMzkgMzAzLjUgNDk2LjA4OSAzMDMuNVM1NDQuNTg5IDMyNS4yNSA1NDQuNTg5IDM1MlM1MjIuODM5IDQwMC41IDQ5Ni4wODkgNDAwLjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserGear: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM425.125 491.75V482.578C422.822 481.328 420.553 480.02 418.316 478.648L410.498 483.141C404.496 486.645 397.666 488.492 390.748 488.492C380.033 488.492 369.619 484 361.779 475.738C343.371 455.645 329.5 431.59 321.568 405.84C316.217 387.777 323.902 368.973 339.393 360.598L347.41 355.93C347.344 353.309 347.344 350.687 347.41 348.07L339.756 343.609C327.455 336.656 320.363 323.953 320.127 310.227C305.615 306.289 290.424 304 274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C419.062 512 424.234 510.273 428.996 507.812C426.725 502.828 425.125 497.516 425.125 491.75Z" />
            <path d="M610.589 373.25C613.214 359.25 613.214 344.75 610.589 330.75L636.339 315.75C639.339 314.125 640.714 310.625 639.714 307.25C632.964 285.75 621.464 266.125 606.464 249.875C604.214 247.375 600.464 246.75 597.464 248.5L571.714 263.375C560.839 254.125 548.339 246.875 534.839 242.125V212.25C534.839 208.875 532.339 205.875 529.089 205.25C506.839 200.25 484.089 200.375 462.839 205.25C459.589 205.875 457.214 208.875 457.214 212.25V242.125C443.714 246.875 431.214 254.125 420.339 263.375L394.464 248.5C391.589 246.75 387.839 247.375 385.464 249.875C370.464 266.125 358.964 285.75 352.339 307.25C351.339 310.625 352.714 314.125 355.589 315.75L381.339 330.75C378.839 344.75 378.839 359.25 381.339 373.25L355.589 388.25C352.589 389.875 351.339 393.375 352.339 396.75C358.964 418.25 370.464 437.75 385.464 454.125C387.839 456.625 391.464 457.25 394.464 455.5L420.339 440.625C431.214 449.875 443.714 457.125 457.214 461.875V491.75C457.214 495.125 459.589 498.125 462.839 498.75C485.214 503.75 507.839 503.625 529.089 498.75C532.339 498.125 534.839 495.125 534.839 491.75V461.875C548.339 457.125 560.839 449.875 571.714 440.625L597.464 455.5C600.339 457.25 604.214 456.625 606.464 454.125C621.464 437.875 632.964 418.25 639.714 396.75C640.714 393.375 639.339 389.875 636.339 388.25L610.589 373.25ZM496.089 400.5C469.339 400.5 447.589 378.75 447.589 352S469.339 303.5 496.089 303.5S544.589 325.25 544.589 352S522.839 400.5 496.089 400.5Z" />
    </Icon>
);

export default UserGear;