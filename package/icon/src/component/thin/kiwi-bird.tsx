
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `kiwi-bird` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=thin kiwi-bird}
 * @preview ![kiwi-bird](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMTkyQzQ0Ni4zMjYgMTkyIDQzMiAyMDYuMzI4IDQzMiAyMjRTNDQ2LjMyNiAyNTYgNDY0IDI1NlM0OTYgMjQxLjY3MiA0OTYgMjI0UzQ4MS42NzQgMTkyIDQ2NCAxOTJaTTQ2NCAyNDBDNDU1LjE3OCAyNDAgNDQ4IDIzMi44MjQgNDQ4IDIyNFM0NTUuMTc4IDIwOCA0NjQgMjA4UzQ4MCAyMTUuMTc2IDQ4MCAyMjRTNDcyLjgyMiAyNDAgNDY0IDI0MFpNNTc1LjgxMyAyMTZINTc1LjQxQzU3MS4xNjIgMTU2LjQzIDUxNy41MzUgMTEyLjAyNyA0NTcuNjA5IDExMi4wMjdINDQ4LjIzNEMzOTUuNDg2IDExMi4wMjcgMzQzLjk4OCA5NS43NzcgMzAwLjQ5IDY1Ljc4MUMyNjkuNjIzIDQ0LjQ2OSAyMzIuMjY4IDMyIDE5MS45MTIgMzEuOTk2QzE3Ny4zNTcgMzEuOTk2IDE2Mi40MiAzMy42MTcgMTQ3LjI0NCAzNy4wMzFDMTI5LjI0NiA0MS4xNTYgLTAuMTEzIDc4LjI3MyAwIDIyNEMtMC4wODIgMzI5LjY0MSA2Ny43NSAzNzguMDU1IDExMiAzOTguMzUyVjQ3MkMxMTIgNDc2LjQwNiAxMTUuNTc4IDQ4MCAxMjAgNDgwUzEyOCA0NzYuNDA2IDEyOCA0NzJWNDA1LjAzMUMxMzcuMDYxIDQwOC4zNTkgMTQ0LjAwMiA0MTAuMjI3IDE0Ny4yNDQgNDEwLjk2OUMxNjIuNDE2IDQxNC4zNzkgMTc3LjM1OSA0MTYuMDA0IDE5MS45MTIgNDE2LjAwNEMyMDIuODc1IDQxNi4wMDQgMjEzLjU1MyA0MTQuOTE4IDIyNCA0MTMuMTQ4VjQ3MkMyMjQgNDc2LjQwNiAyMjcuNTc4IDQ4MCAyMzIgNDgwUzI0MCA0NzYuNDA2IDI0MCA0NzJWNDA5LjM5OEMyNjEuODYzIDQwMy43MTEgMjgyLjM4NSAzOTQuNzE5IDMwMC40OSAzODIuMjE5QzM0My45ODggMzUyLjIxOSAzOTUuNDg2IDMzNS45NjkgNDQ4LjIzNCAzMzUuOTY5SDQ1Ny42MDlDNDY0LjgxNiAzMzUuOTY5IDQ3MS45MTQgMzM1LjIzNCA0NzguODY5IDMzNEw1NjEuMDc4IDQ3NkM1NjIuNTMxIDQ3OC41MzEgNTY1LjIwMyA0ODAgNTY4IDQ4MEM1NjguNjg4IDQ4MCA1NjkuMzkxIDQ3OS45MDYgNTcwLjA3OCA0NzkuNzE5QzU3My41NzggNDc4Ljc4MSA1NzYgNDc1LjYyNSA1NzYgNDcyTDU3NS44MTMgMjE2Wk00NTcuNjA5IDMxOS45NjlINDQ4LjIzNEMzOTIuMTkgMzE5Ljk2OSAzMzcuOTYxIDMzNi45NDEgMjkxLjM5OSAzNjkuMDUxQzI2Mi4wNzYgMzg5LjMwMSAyMjcuNjc0IDQwMCAxOTEuOTEyIDQwMEMxNzguMzAxIDQwMCAxNjQuNDU1IDM5OC40NDEgMTUwLjgxOCAzOTUuMzc1QzE0Ny43NDQgMzk0LjY3MiAxMzkuMTg4IDM5Mi40MjIgMTI4IDM4OC4wNDdWMzI4QzEyOCAzMjMuNTk0IDEyNC40MjIgMzIwIDEyMCAzMjBTMTEyIDMyMy41OTQgMTEyIDMyOFYzODAuOTc3QzcxLjgyNiAzNjEuMDg2IDE1LjkyOCAzMTYuNzg5IDE2IDIyMy45ODhDMTUuODk1IDg3LjQ5MiAxMzcuMDA4IDU1Ljc5MyAxNTAuNzU0IDUyLjY0MUMxNjQuNDU3IDQ5LjU1OSAxNzguMzA1IDQ3Ljk5NiAxOTEuOTEyIDQ4QzIyNy42NzYgNDggMjYyLjA3OCA1OC43MDMgMjkxLjQwNiA3OC45NTNDMzM3Ljk2MyAxMTEuMDU5IDM5Mi4xOTMgMTI4LjAyNyA0NDguMjM0IDEyOC4wMjdINDU3LjYwOUM1MTEuMzUgMTI4LjAyNyA1NTcuMTcgMTY4Ljc2NiA1NTkuNzQ4IDIxOC43NjJMNTU5LjgwOSAyMjMuODgzTDU1OS43NTIgMjI5LjE1MkM1NTcuMTcgMjc5LjIzIDUxMS4zNSAzMTkuOTY5IDQ1Ny42MDkgMzE5Ljk2OVpNNDk0Ljg2MyAzMjkuNzE1QzUyMi4xMDkgMzIwLjk3NyA1NDUuMzI2IDMwMy4xMDIgNTU5Ljg2MSAyNzkuMzUyTDU1OS45ODQgNDQyLjE4OEw0OTQuODYzIDMyOS43MTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function KiwiBird(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M464 192C446.326 192 432 206.328 432 224S446.326 256 464 256S496 241.672 496 224S481.674 192 464 192ZM464 240C455.178 240 448 232.824 448 224S455.178 208 464 208S480 215.176 480 224S472.822 240 464 240ZM575.813 216H575.41C571.162 156.43 517.535 112.027 457.609 112.027H448.234C395.486 112.027 343.988 95.777 300.49 65.781C269.623 44.469 232.268 32 191.912 31.996C177.357 31.996 162.42 33.617 147.244 37.031C129.246 41.156 -0.113 78.273 0 224C-0.082 329.641 67.75 378.055 112 398.352V472C112 476.406 115.578 480 120 480S128 476.406 128 472V405.031C137.061 408.359 144.002 410.227 147.244 410.969C162.416 414.379 177.359 416.004 191.912 416.004C202.875 416.004 213.553 414.918 224 413.148V472C224 476.406 227.578 480 232 480S240 476.406 240 472V409.398C261.863 403.711 282.385 394.719 300.49 382.219C343.988 352.219 395.486 335.969 448.234 335.969H457.609C464.816 335.969 471.914 335.234 478.869 334L561.078 476C562.531 478.531 565.203 480 568 480C568.688 480 569.391 479.906 570.078 479.719C573.578 478.781 576 475.625 576 472L575.813 216ZM457.609 319.969H448.234C392.19 319.969 337.961 336.941 291.399 369.051C262.076 389.301 227.674 400 191.912 400C178.301 400 164.455 398.441 150.818 395.375C147.744 394.672 139.188 392.422 128 388.047V328C128 323.594 124.422 320 120 320S112 323.594 112 328V380.977C71.826 361.086 15.928 316.789 16 223.988C15.895 87.492 137.008 55.793 150.754 52.641C164.457 49.559 178.305 47.996 191.912 48C227.676 48 262.078 58.703 291.406 78.953C337.963 111.059 392.193 128.027 448.234 128.027H457.609C511.35 128.027 557.17 168.766 559.748 218.762L559.809 223.883L559.752 229.152C557.17 279.23 511.35 319.969 457.609 319.969ZM494.863 329.715C522.109 320.977 545.326 303.102 559.861 279.352L559.984 442.188L494.863 329.715Z" />
        </Icon>
    </>
}