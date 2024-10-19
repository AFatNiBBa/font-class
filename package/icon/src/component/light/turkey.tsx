
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `turkey` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turkey?s=light turkey}
 * @preview ![turkey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzkuNzQ2IDc1LjUyN0M1ODUuMjQ2IDQyLjQwNCA1NTkuOTk2IDQuNjU3IDUyMC44NzIgMC40MDdDNDc0Ljc0NyAtNC43MTggNDM3LjYyMiAzOS40MDUgNDQ5Ljc0NyA4NC4yNzdDNDUyLjYyMiA5NS4yNzYgNDUwLjI0NyAxMDUuMjc1IDQ0My4yNDcgMTExLjAyNUM0MzEuMzcyIDEyMC43NzUgNDI4LjI0NyAxMjMuNzc0IDQxMy43NDcgMTMyLjY0OUMzNzUuODczIDExMC4xNSAzMzMuNDk4IDk2LjAyNiAyODguNDk4IDk2LjAyNkMxMjkuNzQ5IDk2LjAyNiAwIDI2OS4xNCAwIDM4NC4wMDhTMTI5Ljc0OSA1MTIgMjg4LjQ5OCA1MTJDNDQ3LjM3MiA1MTIgNTc2LjEyMSA0OTguODc2IDU3Ni4xMjEgMzg0LjAwOEM1NzYuMTIxIDMzMS4yNjEgNTQ4Ljc0NyAyNjYuMzkgNTAzLjk5NyAyMTEuNTE5QzUwNy45OTcgMjA3Ljg5NCA1MDUuNjIyIDIwOS4yNjkgNTEzLjk5NiAyMDIuMjY5QzUyNC43NDcgMTkzLjM5NSA1MzguMzcyIDE5OS42NDUgNTQyLjM3MiAyMDEuNzY5QzU0OS44NzIgMjA1Ljg5NCA1NTguMTIyIDIwOC41MTkgNTY2LjYyMSAyMDkuMzk0QzYwMi42MjEgMjEzLjUxOSA2MzUuNzQ2IDE4Ny4wMiA2MzkuNjIxIDE0OS42NDhDNjQzLjM3MSAxMTQuMjc1IDYxOC45OTYgNzkuOTAyIDU3OS43NDYgNzUuNTI3Wk01NDQuMTIyIDM4NC4wMDhDNTQ0LjEyMiA0NTQuODc5IDQ3Ny4yNDcgNDgwLjAwMiAyODguNjIzIDQ4MC4wMDJDOTkuODc0IDQ4MC4wMDIgMzIgNDU0Ljg3OSAzMiAzODQuMDA4QzMyIDI4NS4yNjQgMTQ5Ljk5OSAxMjguMDI0IDI4OC42MjMgMTI4LjAyNEMzMTkuNzQ4IDEyOC4wMjQgMzQ5Ljc0OCAxMzYuMjc0IDM3Ny42MjMgMTQ5Ljc3M0MzNTQuNDk4IDE1Ny42NDcgMzM4Ljc0OCAxNTkuMjcyIDMxOC43NDggMTU5Ljg5N0MyNjEuODczIDE2MS43NzIgMjExLjk5OSAxOTkuODk1IDE5Ny40OTkgMjUyLjUxNkMxODUuNDk5IDI5Ni4xMzkgMTk2LjI0OSAzNDEuNzYxIDIyNi4xMjQgMzc0Ljc1OUMyNTAuMTIzIDQwMS4xMzIgMjg0LjEyMyA0MTYuMTMxIDMxOS43NDggNDE2LjAwNkMzOTcuNjIyIDQxNi4wMDYgNDMyLjk5NyAzNTIuNTEgNDQyLjM3MiAzMTQuMDEyQzQ0OS40OTcgMjg1LjAxNCA0NjMuMzcyIDI1OC4xNDEgNDgxLjc0NyAyMzUuMTQyQzUyMC4zNzIgMjgzLjUxNCA1NDQuMTIyIDMzOS42MzYgNTQ0LjEyMiAzODQuMDA4Wk01NTcuNjIyIDE3My43NzFDNDgwLjYyMiAxMzEuNjQ5IDQxOS40OTcgMjczLjUxNSA0MTAuOTk3IDMwNy44ODhDNDAxLjM3MiAzNDcuMDEgMzcyLjM3MyAzNzYuMjU5IDMzNi45OTggMzgyLjM4M0MzMDMuNzQ4IDM4OC4zODMgMjcxLjg3MyAzNzcuNjMzIDI0OS43NDggMzUzLjI2QzIyNy4yNDkgMzI4LjM4NyAyMTkuMjQ5IDI5NC4wMTQgMjI4LjM3NCAyNjEuMTQxQzIzMi4zNzQgMjQ2LjY0MiAyNTEuNzQ4IDE5NC4xNDUgMzI3LjI0OCAxOTEuNjQ1QzM3NC40OTggMTkwLjAyIDUwMC40OTcgMTUxLjUyMyA0ODAuNjIyIDc2LjAyN0M0NzcuMTIyIDYyLjY1MyA0ODEuNzQ3IDQ4LjQwNCA0OTIuNDk3IDM5LjY1NUM1MTUuNjIyIDIwLjkwNiA1NTEuNDk3IDM5LjAzIDU0OC4xMjIgNzEuMDI4QzU0Ny40OTcgNzYuNDAyIDU0NS43NDcgODEuNTI3IDU0Mi43NDcgODYuMDI3QzUzOS4xMjIgOTEuOTAxIDUzOS42MjIgOTkuMjc2IDU0My45OTcgMTA0LjY1QzU0OC4yNDcgMTA5LjkgNTU1LjQ5NyAxMTEuOSA1NjEuODcxIDEwOS41MjVDNTY2Ljc0NiAxMDcuNjUgNTcxLjk5NiAxMDYuOSA1NzcuMjQ2IDEwNy40QzU5Ni4xMjEgMTA5LjQgNjA5Ljg3MSAxMjYuODk5IDYwNy44NzEgMTQ2LjI3M0M2MDUuMjQ2IDE3MS42NDYgNTc4LjI0NiAxODUuMDIgNTU3LjYyMiAxNzMuNzcxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Turkey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M579.746 75.527C585.246 42.404 559.996 4.657 520.872 0.407C474.747 -4.718 437.622 39.405 449.747 84.277C452.622 95.276 450.247 105.275 443.247 111.025C431.372 120.775 428.247 123.774 413.747 132.649C375.873 110.15 333.498 96.026 288.498 96.026C129.749 96.026 0 269.14 0 384.008S129.749 512 288.498 512C447.372 512 576.121 498.876 576.121 384.008C576.121 331.261 548.747 266.39 503.997 211.519C507.997 207.894 505.622 209.269 513.996 202.269C524.747 193.395 538.372 199.645 542.372 201.769C549.872 205.894 558.122 208.519 566.621 209.394C602.621 213.519 635.746 187.02 639.621 149.648C643.371 114.275 618.996 79.902 579.746 75.527ZM544.122 384.008C544.122 454.879 477.247 480.002 288.623 480.002C99.874 480.002 32 454.879 32 384.008C32 285.264 149.999 128.024 288.623 128.024C319.748 128.024 349.748 136.274 377.623 149.773C354.498 157.647 338.748 159.272 318.748 159.897C261.873 161.772 211.999 199.895 197.499 252.516C185.499 296.139 196.249 341.761 226.124 374.759C250.123 401.132 284.123 416.131 319.748 416.006C397.622 416.006 432.997 352.51 442.372 314.012C449.497 285.014 463.372 258.141 481.747 235.142C520.372 283.514 544.122 339.636 544.122 384.008ZM557.622 173.771C480.622 131.649 419.497 273.515 410.997 307.888C401.372 347.01 372.373 376.259 336.998 382.383C303.748 388.383 271.873 377.633 249.748 353.26C227.249 328.387 219.249 294.014 228.374 261.141C232.374 246.642 251.748 194.145 327.248 191.645C374.498 190.02 500.497 151.523 480.622 76.027C477.122 62.653 481.747 48.404 492.497 39.655C515.622 20.906 551.497 39.03 548.122 71.028C547.497 76.402 545.747 81.527 542.747 86.027C539.122 91.901 539.622 99.276 543.997 104.65C548.247 109.9 555.497 111.9 561.871 109.525C566.746 107.65 571.996 106.9 577.246 107.4C596.121 109.4 609.871 126.899 607.871 146.273C605.246 171.646 578.246 185.02 557.622 173.771Z" />
        </Icon>
    </>
}