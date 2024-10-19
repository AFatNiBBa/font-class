
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `teeth` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/teeth?s=thin teeth}
 * @preview ![teeth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzJIOTZDNDIuOTggMzIgMCA3NC45OCAwIDEyOFYzODRDMCA0MzcuMDIgNDIuOTggNDgwIDk2IDQ4MEg0ODBDNTMzLjAyIDQ4MCA1NzYgNDM3LjAyIDU3NiAzODRWMTI4QzU3NiA3NC45OCA1MzMuMDIgMzIgNDgwIDMyWk01NjAgMzg0QzU2MCA0MjguMTExIDUyNC4xMTEgNDY0IDQ4MCA0NjRIOTZDNTEuODg5IDQ2NCAxNiA0MjguMTExIDE2IDM4NFYxMjhDMTYgODMuODg3IDUxLjg4OSA0OCA5NiA0OEg0ODBDNTI0LjExMSA0OCA1NjAgODMuODg3IDU2MCAxMjhWMzg0Wk00NzIgMTc2SDQ1NkM0NDAuMTY4IDE3NiA0MjUuOTIgMTgyLjY2OCA0MTUuNzI1IDE5My4yNjhDNDE0LjI1NCAxNTcuMDU3IDM4NC41NjQgMTI4IDM0OCAxMjhDMzIxLjg1NCAxMjggMjk5LjM3NSAxNDIuOTkgMjg4IDE2NC42OEMyNzYuNjI1IDE0Mi45OSAyNTQuMTQ2IDEyOCAyMjggMTI4QzE5MS40MzYgMTI4IDE2MS43NDggMTU3LjA1NyAxNjAuMjc3IDE5My4yNjhDMTUwLjA4MiAxODIuNjY4IDEzNS44MzIgMTc2IDEyMCAxNzZIMTA0QzczLjEyNSAxNzYgNDggMjAxLjEyNSA0OCAyMzJWMjU2QzQ4IDI2OS40MjggNTUuMDc0IDI4MC43NDIgNjUuMjUgMjg4QzU1LjA3NCAyOTUuMjU4IDQ4IDMwNi41NzIgNDggMzIwVjMzNkM0OCAzNjYuODc1IDczLjEyNSAzOTIgMTA0IDM5MkgxMjBDMTQwLjQ3NSAzOTIgMTU4LjIzNCAzODAuODMgMTY4IDM2NC4zODNDMTc3Ljc2NiAzODAuODMgMTk1LjUyNSAzOTIgMjE2IDM5MkgyNDBDMjYwLjQ3NSAzOTIgMjc4LjIzNCAzODAuODMgMjg4IDM2NC4zODNDMjk3Ljc2NiAzODAuODMgMzE1LjUyNSAzOTIgMzM2IDM5MkgzNjBDMzgwLjQ3NSAzOTIgMzk4LjIzNCAzODAuODMgNDA4IDM2NC4zODNDNDE3Ljc2NiAzODAuODMgNDM1LjUyNSAzOTIgNDU2IDM5Mkg0NzJDNTAyLjg3NSAzOTIgNTI4IDM2Ni44NzUgNTI4IDMzNlYzMjBDNTI4IDMwNi41NzIgNTIwLjkyNiAyOTUuMjU4IDUxMC43NSAyODhDNTIwLjkyNiAyODAuNzQyIDUyOCAyNjkuNDI4IDUyOCAyNTZWMjMyQzUyOCAyMDEuMTI1IDUwMi44NzUgMTc2IDQ3MiAxNzZaTTI5NiAxOTZDMjk2IDE2Ny4zMjggMzE5LjMxMiAxNDQgMzQ4IDE0NFM0MDAgMTY3LjMyOCA0MDAgMTk2VjI1NkM0MDAgMjY5LjIzNCAzODkuMjE5IDI4MCAzNzYgMjgwSDMyMEMzMDYuNzgxIDI4MCAyOTYgMjY5LjIzNCAyOTYgMjU2VjE5NlpNMTc2IDE5NkMxNzYgMTY3LjMyOCAxOTkuMzEyIDE0NCAyMjggMTQ0UzI4MCAxNjcuMzI4IDI4MCAxOTZWMjU2QzI4MCAyNjkuMjM0IDI2OS4yMTkgMjgwIDI1NiAyODBIMjAwQzE4Ni43ODEgMjgwIDE3NiAyNjkuMjM0IDE3NiAyNTZWMTk2Wk02NCAyNTZWMjMyQzY0IDIwOS45MzggODEuOTM4IDE5MiAxMDQgMTkySDEyMEMxNDIuMDYyIDE5MiAxNjAgMjA5LjkzOCAxNjAgMjMyVjI1NkMxNjAgMjY5LjIzNCAxNDkuMjE5IDI4MCAxMzYgMjgwSDg4Qzc0Ljc4MSAyODAgNjQgMjY5LjIzNCA2NCAyNTZaTTE2MCAzMzZDMTYwIDM1OC4wNjIgMTQyLjA2MiAzNzYgMTIwIDM3NkgxMDRDODEuOTM4IDM3NiA2NCAzNTguMDYyIDY0IDMzNlYzMjBDNjQgMzA2Ljc2NiA3NC43ODEgMjk2IDg4IDI5NkgxMzZDMTQ5LjIxOSAyOTYgMTYwIDMwNi43NjYgMTYwIDMyMFYzMzZaTTE1OC43NSAyODhDMTYyLjM4MyAyODUuNDEgMTY1LjQxIDI4Mi4zODMgMTY4IDI3OC43NUMxNzAuNTkgMjgyLjM4MyAxNzMuNjE3IDI4NS40MSAxNzcuMjUgMjg4QzE3My42MTcgMjkwLjU5IDE3MC41OSAyOTMuNjE3IDE2OCAyOTcuMjVDMTY1LjQxIDI5My42MTcgMTYyLjM4MyAyOTAuNTkgMTU4Ljc1IDI4OFpNMjgwIDMzNkMyODAgMzU4LjA2MiAyNjIuMDYyIDM3NiAyNDAgMzc2SDIxNkMxOTMuOTM4IDM3NiAxNzYgMzU4LjA2MiAxNzYgMzM2VjMyMEMxNzYgMzA2Ljc2NiAxODYuNzgxIDI5NiAyMDAgMjk2SDI1NkMyNjkuMjE5IDI5NiAyODAgMzA2Ljc2NiAyODAgMzIwVjMzNlpNMjc4Ljc1IDI4OEMyODIuMzgzIDI4NS40MSAyODUuNDEgMjgyLjM4MyAyODggMjc4Ljc1QzI5MC41OSAyODIuMzgzIDI5My42MTcgMjg1LjQxIDI5Ny4yNSAyODhDMjkzLjYxNyAyOTAuNTkgMjkwLjU5IDI5My42MTcgMjg4IDI5Ny4yNUMyODUuNDEgMjkzLjYxNyAyODIuMzgzIDI5MC41OSAyNzguNzUgMjg4Wk00MDAgMzM2QzQwMCAzNTguMDYyIDM4Mi4wNjIgMzc2IDM2MCAzNzZIMzM2QzMxMy45MzggMzc2IDI5NiAzNTguMDYyIDI5NiAzMzZWMzIwQzI5NiAzMDYuNzY2IDMwNi43ODEgMjk2IDMyMCAyOTZIMzc2QzM4OS4yMTkgMjk2IDQwMCAzMDYuNzY2IDQwMCAzMjBWMzM2Wk0zOTguNzUgMjg4QzQwMi4zODMgMjg1LjQxIDQwNS40MSAyODIuMzgzIDQwOCAyNzguNzVDNDEwLjU5IDI4Mi4zODMgNDEzLjYxNyAyODUuNDEgNDE3LjI1IDI4OEM0MTMuNjE3IDI5MC41OSA0MTAuNTkgMjkzLjYxNyA0MDggMjk3LjI1QzQwNS40MSAyOTMuNjE3IDQwMi4zODMgMjkwLjU5IDM5OC43NSAyODhaTTUxMiAzMjBWMzM2QzUxMiAzNTguMDYyIDQ5NC4wNjIgMzc2IDQ3MiAzNzZINDU2QzQzMy45MzggMzc2IDQxNiAzNTguMDYyIDQxNiAzMzZWMzIwQzQxNiAzMDYuNzY2IDQyNi43ODEgMjk2IDQ0MCAyOTZINDg4QzUwMS4yMTkgMjk2IDUxMiAzMDYuNzY2IDUxMiAzMjBaTTUxMiAyNTZDNTEyIDI2OS4yMzQgNTAxLjIxOSAyODAgNDg4IDI4MEg0NDBDNDI2Ljc4MSAyODAgNDE2IDI2OS4yMzQgNDE2IDI1NlYyMzJDNDE2IDIwOS45MzggNDMzLjkzOCAxOTIgNDU2IDE5Mkg0NzJDNDk0LjA2MiAxOTIgNTEyIDIwOS45MzggNTEyIDIzMlYyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Teeth(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 32H96C42.98 32 0 74.98 0 128V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V128C576 74.98 533.02 32 480 32ZM560 384C560 428.111 524.111 464 480 464H96C51.889 464 16 428.111 16 384V128C16 83.887 51.889 48 96 48H480C524.111 48 560 83.887 560 128V384ZM472 176H456C440.168 176 425.92 182.668 415.725 193.268C414.254 157.057 384.564 128 348 128C321.854 128 299.375 142.99 288 164.68C276.625 142.99 254.146 128 228 128C191.436 128 161.748 157.057 160.277 193.268C150.082 182.668 135.832 176 120 176H104C73.125 176 48 201.125 48 232V256C48 269.428 55.074 280.742 65.25 288C55.074 295.258 48 306.572 48 320V336C48 366.875 73.125 392 104 392H120C140.475 392 158.234 380.83 168 364.383C177.766 380.83 195.525 392 216 392H240C260.475 392 278.234 380.83 288 364.383C297.766 380.83 315.525 392 336 392H360C380.475 392 398.234 380.83 408 364.383C417.766 380.83 435.525 392 456 392H472C502.875 392 528 366.875 528 336V320C528 306.572 520.926 295.258 510.75 288C520.926 280.742 528 269.428 528 256V232C528 201.125 502.875 176 472 176ZM296 196C296 167.328 319.312 144 348 144S400 167.328 400 196V256C400 269.234 389.219 280 376 280H320C306.781 280 296 269.234 296 256V196ZM176 196C176 167.328 199.312 144 228 144S280 167.328 280 196V256C280 269.234 269.219 280 256 280H200C186.781 280 176 269.234 176 256V196ZM64 256V232C64 209.938 81.938 192 104 192H120C142.062 192 160 209.938 160 232V256C160 269.234 149.219 280 136 280H88C74.781 280 64 269.234 64 256ZM160 336C160 358.062 142.062 376 120 376H104C81.938 376 64 358.062 64 336V320C64 306.766 74.781 296 88 296H136C149.219 296 160 306.766 160 320V336ZM158.75 288C162.383 285.41 165.41 282.383 168 278.75C170.59 282.383 173.617 285.41 177.25 288C173.617 290.59 170.59 293.617 168 297.25C165.41 293.617 162.383 290.59 158.75 288ZM280 336C280 358.062 262.062 376 240 376H216C193.938 376 176 358.062 176 336V320C176 306.766 186.781 296 200 296H256C269.219 296 280 306.766 280 320V336ZM278.75 288C282.383 285.41 285.41 282.383 288 278.75C290.59 282.383 293.617 285.41 297.25 288C293.617 290.59 290.59 293.617 288 297.25C285.41 293.617 282.383 290.59 278.75 288ZM400 336C400 358.062 382.062 376 360 376H336C313.938 376 296 358.062 296 336V320C296 306.766 306.781 296 320 296H376C389.219 296 400 306.766 400 320V336ZM398.75 288C402.383 285.41 405.41 282.383 408 278.75C410.59 282.383 413.617 285.41 417.25 288C413.617 290.59 410.59 293.617 408 297.25C405.41 293.617 402.383 290.59 398.75 288ZM512 320V336C512 358.062 494.062 376 472 376H456C433.938 376 416 358.062 416 336V320C416 306.766 426.781 296 440 296H488C501.219 296 512 306.766 512 320ZM512 256C512 269.234 501.219 280 488 280H440C426.781 280 416 269.234 416 256V232C416 209.938 433.938 192 456 192H472C494.062 192 512 209.938 512 232V256Z" />
        </Icon>
    </>
}