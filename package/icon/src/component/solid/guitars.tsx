
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `guitars` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guitars?s=solid guitars}
 * @preview ![guitars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjkuMjQ4IDMwMC4yNUMyMzQuNzQ4IDI4OS42MjUgMjM3LjYyMyAyNzcuODc1IDIzNy43NDggMjY2QzIzNy43NDggMjM2Ljg3NSAyMjAuNzQ4IDIxMS4xMjUgMTk0LjQ5OSAxOTQuODc1QzE4MS43NDkgMTg2Ljg3NSAxNjYuOTk5IDE4Mi44NzUgMTUxLjk5OSAxODFWMTI2Ljc1TDE2OC42MjQgOTMuNUMxNzAuNjI0IDg5LjUgMTcxLjYyNCA4NSAxNzEuNjI0IDgwLjVWMjYuMzc1QzE3MS42MjQgMTEuODc1IDE1OS44NzQgMCAxNDUuMjQ5IDBIMTEwLjc1Qzk2LjEyNSAwIDg0LjI1IDExLjg3NSA4NC4yNSAyNi4zNzVWODAuNUM4NC4yNSA4NSA4NS4zNzUgODkuNSA4Ny4zNzUgOTMuNUwxMDQgMTI2Ljc1VjE4MUM4OSAxODIuODc1IDc0LjI1IDE4Ni44NzUgNjEuMzc2IDE5NC44NzVDNTQuNjI2IDE5OSA0OC41MDEgMjAzLjg3NSA0Mi44NzYgMjA5LjVDMjcuNTAxIDIyNC44NzUgMTguMjUxIDI0NC41IDE4LjI1MSAyNjYuMTI1QzE4LjI1MSAyNzggMjEuMTI2IDI4OS43NSAyNi42MjYgMzAwLjI1QzM0LjYyNiAzMTUuODc1IDMyLjYyNiAzMzUuODc1IDIxLjc1MSAzNDlDOC4xMjYgMzY1LjUgLTAuMTI0IDM4NS4zNzUgMC4wMDEgNDA3Qy0wLjEyNCA0NjUgNTcuMzc2IDUxMiAxMjggNTEyQzE2Ny44NzQgNTEyIDIwMy40OTggNDk3IDIyNi45OTggNDczLjVDMjI4LjI0OCA0NzIuMjUgMjI5LjI0OCA0NzAuNzUgMjMwLjM3MyA0NjkuNUMyMjEuMTIzIDQ0My4zNzUgMjIxLjk5OCA0MTQuNzUgMjMyLjc0OCAzODkuMTI1TDI0Mi45OTggMzYxLjM3NUMyNDAuMzczIDM1Ny4xMjUgMjM3LjM3MyAzNTIuODc1IDIzNC4yNDggMzQ5QzIyMy4yNDggMzM1Ljg3NSAyMjEuMjQ4IDMxNS44NzUgMjI5LjI0OCAzMDAuMjVaTTE1Ni4yNDkgMzMyLjI1QzE0MC42MjQgMzQ3Ljg3NSAxMTUuMzc1IDM0Ny44NzUgOTkuNzUgMzMyLjI1Qzg0LjEyNSAzMTYuNjI1IDg0LjEyNSAyOTEuMzc1IDk5Ljc1IDI3NS43NUMxMTUuMzc1IDI2MC4xMjUgMTQwLjYyNCAyNjAuMTI1IDE1Ni4yNDkgMjc1Ljc1QzE3MS44NzQgMjkxLjM3NSAxNzEuODc0IDMxNi42MjUgMTU2LjI0OSAzMzIuMjVaTTUwNS40OTQgNDAwLjg3NUw0NzguNDk1IDMyNy4zNzVDNDcxLjg3IDMwOS4xMjUgNDcyLjc0NSAyODkuMTI1IDQ4MS4xMiAyNzEuNjI1QzQ4NS43NDQgMjYxLjg3NSA0ODguMTE5IDI1MS4zNzUgNDg4LjExOSAyNDAuNjI1VjIxMi4zNzVDNDg4LjExOSAyMDMuNzUgNDgyLjI0NSAxOTYuMzc1IDQ3My45OTUgMTk0LjM3NUM0NjUuNzQ1IDE5Mi4zNzUgNDU3LjEyIDE5Ni4yNSA0NTMuMjQ1IDIwMy44NzVMNDQyLjYyIDIyNC4zNzVDNDM3LjI0NSAyMzQuNzUgNDI3LjI0NSAyNDEuMzc1IDQxNS45OTUgMjQzLjM3NUw0MDcuOTk2IDI0My4yNVY3My4zNzVDNDA5Ljc0NiA3Mi4yNSA0MTEuNDk2IDcxIDQxMy4xMjEgNjkuNjI1QzQyNy44NyA1NC43NSA0MjkuMTIgMzEuMTI1IDQxNS43NDYgMTQuODc1QzQwMi40OTYgLTEuMjUgMzc5LjEyMSAtNC43NSAzNjEuNjIxIDYuODc1QzM0NS4yNDYgMTggMzQ3LjYyMSAyMC4xMjUgMzI5Ljc0NyAxMDMuMTI1QzMyNy44NzIgMTEyLjEyNSAzMzAuNjIyIDEyMS41IDMzNy4xMjIgMTI4LjEyNUwzNTkuOTk2IDE1MVYyNDIuNjI1TDM1MS45OTYgMjQyLjVDMzQwLjc0NyAyMzkuNSAzMzEuMTIyIDIzMS41IDMyNi45OTcgMjIwLjEyNUwzMTMuOTk3IDE4NC4zNzVDMzExLjEyMiAxNzYuNSAzMDIuODcyIDE3MS43NSAyOTQuNDk3IDE3My4yNUMyODYuMTIyIDE3NC42MjUgMjgwLjEyMiAxODEuODc1IDI4MC4xMjIgMTkwLjM3NVYyNDAuNzVDMjgwLjEyMiAyNTEuNSAyODIuNDk3IDI2MiAyODcuMTIyIDI3MS42MjVDMjk1LjM3MiAyODkuMTI1IDI5Ni4yNDcgMzA5LjI1IDI4OS42MjIgMzI3LjVMMjYyLjYyMyA0MDFDMjM5Ljk5OCA0NTMuNSAyNzguNDk3IDUxMiAzMzUuNzQ3IDUxMkg0MzIuMTJDNDg5LjM2OSA1MTIgNTI3Ljk5NCA0NTMuMzc1IDUwNS40OTQgNDAwLjg3NVpNNDMxLjk5NSAzOTJDNDMxLjk5NSAzOTYuMzc1IDQyOC4zNyA0MDAgNDIzLjk5NSA0MDBIMzQzLjk5NkMzMzkuNjIyIDQwMCAzMzUuOTk3IDM5Ni4zNzUgMzM1Ljk5NyAzOTJWMzc2QzMzNS45OTcgMzcxLjYyNSAzMzkuNjIyIDM2OCAzNDMuOTk2IDM2OEg0MjMuOTk1QzQyOC4zNyAzNjggNDMxLjk5NSAzNzEuNjI1IDQzMS45OTUgMzc2VjM5MlpNNDMxLjk5NSAzMjcuODc1QzQzMS45OTUgMzMyLjI1IDQyOC4zNyAzMzUuODc1IDQyMy45OTUgMzM1Ljg3NUgzNDMuOTk2QzMzOS42MjIgMzM1Ljg3NSAzMzUuOTk3IDMzMi4yNSAzMzUuOTk3IDMyNy44NzVWMzExLjg3NUMzMzUuOTk3IDMwNy41IDMzOS42MjIgMzAzLjg3NSAzNDMuOTk2IDMwMy44NzVINDIzLjk5NUM0MjguMzcgMzAzLjg3NSA0MzEuOTk1IDMwNy41IDQzMS45OTUgMzExLjg3NVYzMjcuODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Guitars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M229.248 300.25C234.748 289.625 237.623 277.875 237.748 266C237.748 236.875 220.748 211.125 194.499 194.875C181.749 186.875 166.999 182.875 151.999 181V126.75L168.624 93.5C170.624 89.5 171.624 85 171.624 80.5V26.375C171.624 11.875 159.874 0 145.249 0H110.75C96.125 0 84.25 11.875 84.25 26.375V80.5C84.25 85 85.375 89.5 87.375 93.5L104 126.75V181C89 182.875 74.25 186.875 61.376 194.875C54.626 199 48.501 203.875 42.876 209.5C27.501 224.875 18.251 244.5 18.251 266.125C18.251 278 21.126 289.75 26.626 300.25C34.626 315.875 32.626 335.875 21.751 349C8.126 365.5 -0.124 385.375 0.001 407C-0.124 465 57.376 512 128 512C167.874 512 203.498 497 226.998 473.5C228.248 472.25 229.248 470.75 230.373 469.5C221.123 443.375 221.998 414.75 232.748 389.125L242.998 361.375C240.373 357.125 237.373 352.875 234.248 349C223.248 335.875 221.248 315.875 229.248 300.25ZM156.249 332.25C140.624 347.875 115.375 347.875 99.75 332.25C84.125 316.625 84.125 291.375 99.75 275.75C115.375 260.125 140.624 260.125 156.249 275.75C171.874 291.375 171.874 316.625 156.249 332.25ZM505.494 400.875L478.495 327.375C471.87 309.125 472.745 289.125 481.12 271.625C485.744 261.875 488.119 251.375 488.119 240.625V212.375C488.119 203.75 482.245 196.375 473.995 194.375C465.745 192.375 457.12 196.25 453.245 203.875L442.62 224.375C437.245 234.75 427.245 241.375 415.995 243.375L407.996 243.25V73.375C409.746 72.25 411.496 71 413.121 69.625C427.87 54.75 429.12 31.125 415.746 14.875C402.496 -1.25 379.121 -4.75 361.621 6.875C345.246 18 347.621 20.125 329.747 103.125C327.872 112.125 330.622 121.5 337.122 128.125L359.996 151V242.625L351.996 242.5C340.747 239.5 331.122 231.5 326.997 220.125L313.997 184.375C311.122 176.5 302.872 171.75 294.497 173.25C286.122 174.625 280.122 181.875 280.122 190.375V240.75C280.122 251.5 282.497 262 287.122 271.625C295.372 289.125 296.247 309.25 289.622 327.5L262.623 401C239.998 453.5 278.497 512 335.747 512H432.12C489.369 512 527.994 453.375 505.494 400.875ZM431.995 392C431.995 396.375 428.37 400 423.995 400H343.996C339.622 400 335.997 396.375 335.997 392V376C335.997 371.625 339.622 368 343.996 368H423.995C428.37 368 431.995 371.625 431.995 376V392ZM431.995 327.875C431.995 332.25 428.37 335.875 423.995 335.875H343.996C339.622 335.875 335.997 332.25 335.997 327.875V311.875C335.997 307.5 339.622 303.875 343.996 303.875H423.995C428.37 303.875 431.995 307.5 431.995 311.875V327.875Z" />
        </Icon>
    </>
}