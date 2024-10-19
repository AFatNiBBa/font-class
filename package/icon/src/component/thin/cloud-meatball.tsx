
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-meatball` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-meatball?s=thin cloud-meatball}
 * @preview ![cloud-meatball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAzNTJDNTMuNSAzNTIgMzIgMzczLjUgMzIgNDAwUzUzLjUgNDQ4IDgwIDQ0OFMxMjggNDI2LjUgMTI4IDQwMFMxMDYuNSAzNTIgODAgMzUyWk04MCA0MzJDNjIuMzU2IDQzMiA0OCA0MTcuNjQ1IDQ4IDQwMFM2Mi4zNTYgMzY4IDgwIDM2OFMxMTIgMzgyLjM1NSAxMTIgNDAwUzk3LjY0NSA0MzIgODAgNDMyWk00OTYgMzUyQzQ2OS41IDM1MiA0NDggMzczLjUgNDQ4IDQwMFM0NjkuNSA0NDggNDk2IDQ0OFM1NDQgNDI2LjUgNTQ0IDQwMFM1MjIuNSAzNTIgNDk2IDM1MlpNNDk2IDQzMkM0NzguMzU2IDQzMiA0NjQgNDE3LjY0NSA0NjQgNDAwUzQ3OC4zNTYgMzY4IDQ5NiAzNjhTNTI4IDM4Mi4zNTUgNTI4IDQwMFM1MTMuNjQ1IDQzMiA0OTYgNDMyWk0zNzcgMzYzLjEyNUMzODEuNjI1IDM0OC42MjUgMzc4LjYyNSAzMzIuMjUgMzY3LjI1IDMyMC43NUMzNTkuMTcyIDMxMi42NzIgMzQ4LjY5IDMwOC44NSAzMzguMTQxIDMwOC44NUMzMzMuNjcgMzA4Ljg1IDMyOS4xOSAzMDkuNTM1IDMyNC44NzUgMzEwLjg3NUMzMTcuODc1IDI5Ny4zNzUgMzA0LjI1IDI4Ny44NzUgMjg4IDI4Ny44NzVTMjU4LjEyNSAyOTcuMzc1IDI1MS4xMjUgMzEwLjg3NUMyNDYuODAxIDMwOS40OTYgMjQyLjMxMSAzMDguNzk1IDIzNy44MzQgMzA4Ljc5NUMyMjcuMjkzIDMwOC43OTUgMjE2LjgyMiAzMTIuNjc4IDIwOC43NSAzMjAuNzVDMTk3LjI1IDMzMi4yNSAxOTQuMzc1IDM0OC42MjUgMTk4Ljg3NSAzNjMuMTI1QzE4NS4zNzUgMzcwLjEyNSAxNzUuODc1IDM4My43NSAxNzUuODc1IDQwMFMxODUuMzc1IDQyOS44NzUgMTk4Ljg3NSA0MzYuODc1QzE5NC4yNSA0NTEuMzc1IDE5Ny4yNSA0NjcuNzUgMjA4Ljc1IDQ3OS4yNUMyMTcgNDg3LjM3NSAyMjcuNzUgNDkxLjUgMjM4LjUgNDkxLjVDMjQyLjc1IDQ5MS41IDI0NyA0OTAuMzc1IDI1MS4xMjUgNDg5QzI1OC4xMjUgNTAyLjUgMjcxLjc1IDUxMiAyODggNTEyUzMxNy44NzUgNTAyLjUgMzI0Ljg3NSA0ODlDMzI5IDQ5MC4yNSAzMzMuMjUgNDkxLjUgMzM3LjUgNDkxLjVDMzQ4LjI1IDQ5MS41IDM1OSA0ODcuMzc1IDM2Ny4yNSA0NzkuMjVDMzc4Ljc1IDQ2Ny43NSAzODEuNjI1IDQ1MS4zNzUgMzc3IDQzNi44NzVDMzkwLjUgNDI5Ljg3NSA0MDAgNDE2LjI1IDQwMCA0MDBTMzkwLjUgMzcwLjEyNSAzNzcgMzYzLjEyNVpNMzY5LjYzNSA0MjIuNjdDMzYyLjcxNSA0MjYuMjU4IDM1OS4zODkgNDM0LjMxMSAzNjEuNzU2IDQ0MS43MzZDMzY0Ljg0MiA0NTEuNDEyIDM2Mi42NjYgNDYxLjIwNSAzNTYuMDI0IDQ2Ny44NUMzNDIuNjk5IDQ4MC45NzEgMzMwLjg2NSA0NzIuOTk4IDMyNC44NzUgNDcyLjk5OEMzMTkuMDI4IDQ3Mi45OTggMzEzLjQ3OSA0NzYuMjE5IDMxMC42NzIgNDgxLjYzNUMzMDYuMDA4IDQ5MC42MjkgMjk3LjUzMSA0OTYgMjg4IDQ5NlMyNjkuOTk0IDQ5MC42MjkgMjY1LjMzIDQ4MS42MzVDMjYyLjUxNiA0NzYuMjA3IDI1Ni45NjMgNDcyLjk5NiAyNTEuMTIzIDQ3Mi45OTZDMjQ1LjYwMiA0NzIuOTk2IDIzMy4yNDQgNDgwLjkxNiAyMjAuMDY1IDQ2Ny45MzZDMjEzLjM3NSA0NjEuMjQ4IDIxMS4wOTggNDUxLjIwOSAyMTQuMTE5IDQ0MS43MzZDMjE2LjQ4NyA0MzQuMzExIDIxMy4xNiA0MjYuMjU4IDIwNi4yNCA0MjIuNjdDMTk3LjI0NiA0MTguMDA2IDE5MS44NzUgNDA5LjUzMSAxOTEuODc1IDQwMEMxOTEuODc1IDM5MC40NjcgMTk3LjI0NiAzODEuOTkyIDIwNi4yNCAzNzcuMzI4QzIxMy4xMTcgMzczLjc2MiAyMTYuNDUzIDM2NS43ODEgMjE0LjE1NiAzNTguMzgzQzIxMS4xMjkgMzQ4LjYyOSAyMTMuMzM4IDMzOC43ODkgMjIwLjA2NSAzMzIuMDYyQzIzMi4zNjQgMzE5Ljc2MiAyNDYuNzAzIDMyNi44NzcgMjUxLjEyNSAzMjYuODc3QzI1Ni45NjcgMzI2Ljg3NyAyNjIuNTE4IDMyMy42NiAyNjUuMzMgMzE4LjI0QzI2OS45OTQgMzA5LjI0NCAyNzguNDY5IDMwMy44NzUgMjg4IDMwMy44NzVTMzA2LjAwOCAzMDkuMjQ0IDMxMC42NzIgMzE4LjI0QzMxMy40ODEgMzIzLjY1OCAzMTkuMDMgMzI2Ljg3NyAzMjQuODc1IDMyNi44NzdDMzI5LjEyMyAzMjYuODc3IDM0My44MTMgMzE5LjkzOCAzNTUuODc1IDMzMi4wMDJDMzYyLjUyNiAzMzguNzI1IDM2NC43OCAzNDguNzg3IDM2MS43NTYgMzU4LjI2MkMzNTkuMzg5IDM2NS42ODggMzYyLjcxNSAzNzMuNzQgMzY5LjYzNSAzNzcuMzI4QzM3OC42MjkgMzgxLjk5MiAzODQgMzkwLjQ2NyAzODQgNDAwQzM4NCA0MDkuNTMxIDM3OC42MjkgNDE4LjAwNiAzNjkuNjM1IDQyMi42N1pNNTQzLjk4MyAyMjUuODQyQzU0NC45OTIgMTcyIDUwMS42MTQgMTI4IDQ0OCAxMjhDNDQ3LjM3NSAxMjggNDQ2Ljg3NSAxMjguMjUgNDQ2LjM3NSAxMjguMjVDNDQ3LjUgMTIzLjAwMiA0NDggMTE3LjYyOSA0NDggMTEyLjAwNkM0NDguMDAyIDc3LjAwOCA0MjYuMjQgNDUuNjk5IDM5Mi43MDMgMzUuNjk5QzM1OC4wODIgMjUuMzc3IDMyNi41MiAzNy41OSAzMDcgNjAuNzVDMjg2LjA1MyAyMC4yNiAyNDEuNzAxIC02IDE5MS41NTUgMS4xODJDMTQwLjAwNCA4LjU2MyAxMDAuMDUzIDUyLjMzMiA5Ni4yODEgMTA0LjI3MUM5NS41NTEgMTE0LjM0MiA5Ni4yNjggMTIzLjc5NSA5OC4xMjUgMTMzLjI1QzU4Ljg3NyAxNDYuMDMzIDMwLjc0NCAxODMuMTM3IDMyLjA0MyAyMjYuOTFDMzMuNiAyNzkuMzA3IDc4LjY4NCAzMjAgMTMxLjEwNCAzMjBIMTUyQzE1Ni40MTggMzIwIDE2MCAzMTYuNDE4IDE2MCAzMTJTMTU2LjQxOCAzMDQgMTUyIDMwNEgxMzAuNDI4QzkxLjU2OSAzMDQgNTYuNTc2IDI3Ny4zMDUgNDkuNDE0IDIzOS4xMTFDNDEuODQyIDE5OC43MTUgNjUuMzg1IDE2MC43NCAxMDMuMDggMTQ4LjQ2M0wxMTYuNTU3IDE0NC4wNzJMMTEzLjgyNCAxMzAuMTY2QzExMi41OTggMTIzLjkxNCAxMTIgMTE3Ljk3MSAxMTIgMTEyQzExMiA3MS42NDMgMTM2LjY1MyAzNS4zNzkgMTc0LjY3NCAyMS44NDhDMjIyLjI3NiA0LjkwOCAyNzEuMDY3IDI2LjExNyAyOTIuNzg5IDY4LjEwMkwzMDMuNzk3IDg5LjM3N0wzMTkuMjM1IDcxLjA2MUMzMzMuOTY1IDUzLjU4NiAzNTUuMzAxIDQ1LjMzNiAzNzguMDY1IDQ4Ljc2MkM0MTEuNDgxIDUzLjc4OSA0MzQuMzEzIDgzLjUyMiA0MzEuODE1IDExNy4yMjFDNDMxLjYxNSAxMTkuOTA0IDQzMS4yNTYgMTIyLjQ0NSA0MzAuNzMxIDEyNC44OTdMNDI2LjU4MiAxNDQuMjVINDQ2LjM3NUM0NDcuNDc5IDE0NC4yNSA0NDguNDQ0IDE0NC4xNDYgNDQ5LjI3OCAxNDQuMDFDNDk0Ljc1OCAxNDQuNzI5IDUzMS4xNDkgMTgzLjU5IDUyNy43ODMgMjI5LjkzOEM1MjQuNzE1IDI3Mi4yMTEgNDg3LjYwOCAzMDQgNDQ1LjIyMyAzMDRINDI0QzQxOS41ODIgMzA0IDQxNiAzMDcuNTgyIDQxNiAzMTJTNDE5LjU4MiAzMjAgNDI0IDMyMEg0NDQuODAzQzQ5Ny42NDcgMzIwIDU0Mi45OSAyNzguNjc2IDU0My45ODMgMjI1Ljg0MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudMeatball(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M80 352C53.5 352 32 373.5 32 400S53.5 448 80 448S128 426.5 128 400S106.5 352 80 352ZM80 432C62.356 432 48 417.645 48 400S62.356 368 80 368S112 382.355 112 400S97.645 432 80 432ZM496 352C469.5 352 448 373.5 448 400S469.5 448 496 448S544 426.5 544 400S522.5 352 496 352ZM496 432C478.356 432 464 417.645 464 400S478.356 368 496 368S528 382.355 528 400S513.645 432 496 432ZM377 363.125C381.625 348.625 378.625 332.25 367.25 320.75C359.172 312.672 348.69 308.85 338.141 308.85C333.67 308.85 329.19 309.535 324.875 310.875C317.875 297.375 304.25 287.875 288 287.875S258.125 297.375 251.125 310.875C246.801 309.496 242.311 308.795 237.834 308.795C227.293 308.795 216.822 312.678 208.75 320.75C197.25 332.25 194.375 348.625 198.875 363.125C185.375 370.125 175.875 383.75 175.875 400S185.375 429.875 198.875 436.875C194.25 451.375 197.25 467.75 208.75 479.25C217 487.375 227.75 491.5 238.5 491.5C242.75 491.5 247 490.375 251.125 489C258.125 502.5 271.75 512 288 512S317.875 502.5 324.875 489C329 490.25 333.25 491.5 337.5 491.5C348.25 491.5 359 487.375 367.25 479.25C378.75 467.75 381.625 451.375 377 436.875C390.5 429.875 400 416.25 400 400S390.5 370.125 377 363.125ZM369.635 422.67C362.715 426.258 359.389 434.311 361.756 441.736C364.842 451.412 362.666 461.205 356.024 467.85C342.699 480.971 330.865 472.998 324.875 472.998C319.028 472.998 313.479 476.219 310.672 481.635C306.008 490.629 297.531 496 288 496S269.994 490.629 265.33 481.635C262.516 476.207 256.963 472.996 251.123 472.996C245.602 472.996 233.244 480.916 220.065 467.936C213.375 461.248 211.098 451.209 214.119 441.736C216.487 434.311 213.16 426.258 206.24 422.67C197.246 418.006 191.875 409.531 191.875 400C191.875 390.467 197.246 381.992 206.24 377.328C213.117 373.762 216.453 365.781 214.156 358.383C211.129 348.629 213.338 338.789 220.065 332.062C232.364 319.762 246.703 326.877 251.125 326.877C256.967 326.877 262.518 323.66 265.33 318.24C269.994 309.244 278.469 303.875 288 303.875S306.008 309.244 310.672 318.24C313.481 323.658 319.03 326.877 324.875 326.877C329.123 326.877 343.813 319.938 355.875 332.002C362.526 338.725 364.78 348.787 361.756 358.262C359.389 365.688 362.715 373.74 369.635 377.328C378.629 381.992 384 390.467 384 400C384 409.531 378.629 418.006 369.635 422.67ZM543.983 225.842C544.992 172 501.614 128 448 128C447.375 128 446.875 128.25 446.375 128.25C447.5 123.002 448 117.629 448 112.006C448.002 77.008 426.24 45.699 392.703 35.699C358.082 25.377 326.52 37.59 307 60.75C286.053 20.26 241.701 -6 191.555 1.182C140.004 8.563 100.053 52.332 96.281 104.271C95.551 114.342 96.268 123.795 98.125 133.25C58.877 146.033 30.744 183.137 32.043 226.91C33.6 279.307 78.684 320 131.104 320H152C156.418 320 160 316.418 160 312S156.418 304 152 304H130.428C91.569 304 56.576 277.305 49.414 239.111C41.842 198.715 65.385 160.74 103.08 148.463L116.557 144.072L113.824 130.166C112.598 123.914 112 117.971 112 112C112 71.643 136.653 35.379 174.674 21.848C222.276 4.908 271.067 26.117 292.789 68.102L303.797 89.377L319.235 71.061C333.965 53.586 355.301 45.336 378.065 48.762C411.481 53.789 434.313 83.522 431.815 117.221C431.615 119.904 431.256 122.445 430.731 124.897L426.582 144.25H446.375C447.479 144.25 448.444 144.146 449.278 144.01C494.758 144.729 531.149 183.59 527.783 229.938C524.715 272.211 487.608 304 445.223 304H424C419.582 304 416 307.582 416 312S419.582 320 424 320H444.803C497.647 320 542.99 278.676 543.983 225.842Z" />
        </Icon>
    </>
}