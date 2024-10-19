
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-shakespeare` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=duotone user-shakespeare}
 * @preview ![user-shakespeare](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4Mi43NjQgMzA1LjA4OEMyNjkuNjM3IDMxMS45MjggMjU1LjMwMyAzMTYuNDU1IDI0MCAzMTguMzg3VjM4NC45NDdDMjkwLjAwMiAzODkuNDY1IDMyNi43NiA0MTMuMDc0IDMyNy4xNTYgNDEzLjMyOEMzMjkuODEyIDQxNS4wOTQgMzMyLjkwNiA0MTUuOTg0IDMzNiA0MTUuOTg0QzMzOC41OTQgNDE1Ljk4NCAzNDEuMTg4IDQxNS4zNTkgMzQzLjU2MiA0MTQuMDc4QzM0OC43NSA0MTEuMjk3IDM1MiA0MDUuODkxIDM1MiA0MDBWMzg0QzM1MiAzNDMuNTc2IDMyMS43NjIgMzEwLjQwOCAyODIuNzY0IDMwNS4wODhaTTk2IDM4NFY0MDBDOTYgNDA1Ljg5MSA5OS4yNSA0MTEuMjk3IDEwNC40MzggNDE0LjA3OEMxMDkuNjI1IDQxNi44NzUgMTE1Ljk2OSA0MTYuNTk0IDEyMC44NDQgNDEzLjMyOEMxMjEuMjQgNDEzLjA3NCAxNTcuOTk4IDM4OS40NjUgMjA4IDM4NC45NDdWMzE4LjM4N0MxOTIuNjk3IDMxNi40NTUgMTc4LjM2MyAzMTEuOTI4IDE2NS4yMzYgMzA1LjA4OEMxMjYuMjM4IDMxMC40MDggOTYgMzQzLjU3NiA5NiAzODRaTTMyMCAxNjhWOTZDMzIwIDQyLjk4IDI3Ny4wMiAwIDIyNCAwUzEyOCA0Mi45OCAxMjggOTZWMTY4QzEyOCAyMTYuOTA4IDE2NC43MTEgMjU2LjgyNCAyMTIgMjYyLjc4OVYyNDBDMjEyIDIzMy4zNzUgMjE3LjM3NSAyMjggMjI0IDIyOFMyMzYgMjMzLjM3NSAyMzYgMjQwVjI2Mi43ODlDMjgzLjI4OSAyNTYuODI0IDMyMCAyMTYuOTA4IDMyMCAxNjhaTTI2NCAxMTJDMjcyLjgzNiAxMTIgMjgwIDExOS4xNjIgMjgwIDEyOEMyODAgMTM2LjgzNiAyNzIuODM2IDE0NCAyNjQgMTQ0UzI0OCAxMzYuODM2IDI0OCAxMjhDMjQ4IDExOS4xNjIgMjU1LjE2NCAxMTIgMjY0IDExMlpNMTY4IDEyOEMxNjggMTE5LjE2MiAxNzUuMTY0IDExMiAxODQgMTEyUzIwMCAxMTkuMTYyIDIwMCAxMjhDMjAwIDEzNi44MzYgMTkyLjgzNiAxNDQgMTg0IDE0NFMxNjggMTM2LjgzNiAxNjggMTI4Wk0yMjQgMTkxLjA4OEMyMTUuNzgxIDE5Ni42ODQgMjAyLjM0NCAyMDQgMTg4IDIwNEMxODEuMzc1IDIwNCAxNzYgMTk4LjYyMyAxNzYgMTkxLjk5NEMxNzYgMTg1LjM2NyAxODEuMzc1IDE3OS45OSAxODggMTc5Ljk5QzE5OC45MDYgMTc5Ljk5IDIxMS45MzggMTcwLjYxMSAyMTYuMDYyIDE2N0MyMjAuNTYyIDE2MyAyMjcuNDM4IDE2MyAyMzEuOTM4IDE2N0MyMzYuMDYyIDE3MC42MTEgMjQ5LjA5NCAxNzkuOTkgMjYwIDE3OS45OUMyNjYuNjI1IDE3OS45OSAyNzIgMTg1LjM2NyAyNzIgMTkxLjk5NEMyNzIgMTk4LjYyMyAyNjYuNjI1IDIwNCAyNjAgMjA0QzI0NS42NTYgMjA0IDIzMi4yMTkgMTk2LjY4NCAyMjQgMTkxLjA4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzIyLjc0NiAyNTZDMzQ3LjczOCAyNTYgMzY4IDIzNS43NDIgMzY4IDIxMC43NDZDMzY4IDE5OC43NDIgMzYzLjIzMiAxODcuMjM0IDM1NC43NDYgMTc4Ljc0NkMzNDIuNzQyIDE2Ni43NDIgMzM2IDE1MC40NjUgMzM2IDEzMy40OTJWMTEyQzMzNiAxMDMuMTYyIDMyOC44MzYgOTYgMzIwIDk2VjE2OEMzMjAgMjA3LjQyNCAyOTYuMTg5IDI0MS4yMjEgMjYyLjIwNSAyNTZIMzIyLjc0NlpNMTI1LjI1NCAyNTZIMTg1Ljc5NUMxNTEuODExIDI0MS4yMjEgMTI4IDIwNy40MjQgMTI4IDE2OFY5NkMxMTkuMTY0IDk2IDExMiAxMDMuMTYyIDExMiAxMTJWMTMzLjQ5MkMxMTIgMTUwLjQ2NSAxMDUuMjU4IDE2Ni43NDIgOTMuMjU0IDE3OC43NDZDODQuNzY4IDE4Ny4yMzQgODAgMTk4Ljc0MiA4MCAyMTAuNzQ2QzgwIDIzNS43NDIgMTAwLjI2MiAyNTYgMTI1LjI1NCAyNTZaTTMyMy41NTkgMzIzLjM0MkMzNDAuODA5IDMzOC4wMjcgMzUyIDM1OS42MjMgMzUyIDM4NFY0MDBDMzUyIDQwNS44OTEgMzQ4Ljc1IDQxMS4yOTcgMzQzLjU2MiA0MTQuMDc4QzM0MS4xODggNDE1LjM1OSAzMzguNTk0IDQxNS45ODQgMzM2IDQxNS45ODRDMzMyLjkwNiA0MTUuOTg0IDMyOS44MTIgNDE1LjA5NCAzMjcuMTU2IDQxMy4zMjhDMzI2LjcxOSA0MTMuMDQ3IDI4Mi4wNjIgMzg0IDIyNCAzODRTMTIxLjI4MSA0MTMuMDQ3IDEyMC44NDQgNDEzLjMyOEMxMTUuOTY5IDQxNi41OTQgMTA5LjYyNSA0MTYuODc1IDEwNC40MzggNDE0LjA3OEM5OS4yNSA0MTEuMjk3IDk2IDQwNS44OTEgOTYgNDAwVjM4NEM5NiAzNTkuNjIzIDEwNy4xOTEgMzM4LjAyNyAxMjQuNDQxIDMyMy4zNDJDNTMuMjUgMzM5LjU1NSAwIDQwMi45NTkgMCA0NzkuMDYyQzAgNDk2LjczNCAxNC4zMjYgNTExLjA2MiAzMiA1MTEuMDYySDIwOC4xODlDMjA4LjcwMSA1MDIuNjg2IDIxNS40OTYgNDk2IDIyNCA0OTZTMjM5LjI5OSA1MDIuNjg2IDIzOS44MTEgNTExLjA2Mkg0MTZDNDMzLjY3NCA1MTEuMDYyIDQ0OCA0OTYuNzM0IDQ0OCA0NzkuMDYyQzQ0OCA0MDIuOTU5IDM5NC43NSAzMzkuNTU1IDMyMy41NTkgMzIzLjM0MlpNMjI0IDQ2My4wNjFDMjE1LjE2NCA0NjMuMDYxIDIwOCA0NTUuODk2IDIwOCA0NDcuMDYxUzIxNS4xNjQgNDMxLjA2MSAyMjQgNDMxLjA2MVMyNDAgNDM4LjIyNSAyNDAgNDQ3LjA2MVMyMzIuODM2IDQ2My4wNjEgMjI0IDQ2My4wNjFaTTI2NCAxNDRDMjcyLjgzNiAxNDQgMjgwIDEzNi44MzYgMjgwIDEyOEMyODAgMTE5LjE2MiAyNzIuODM2IDExMiAyNjQgMTEyUzI0OCAxMTkuMTYyIDI0OCAxMjhDMjQ4IDEzNi44MzYgMjU1LjE2NCAxNDQgMjY0IDE0NFpNMjEyIDI0MFYyNzJDMjEyIDI3OC42MjUgMjE3LjM3NSAyODQgMjI0IDI4NFMyMzYgMjc4LjYyNSAyMzYgMjcyVjI0MEMyMzYgMjMzLjM3NSAyMzAuNjI1IDIyOCAyMjQgMjI4UzIxMiAyMzMuMzc1IDIxMiAyNDBaTTE4NCAxNDRDMTkyLjgzNiAxNDQgMjAwIDEzNi44MzYgMjAwIDEyOEMyMDAgMTE5LjE2MiAxOTIuODM2IDExMiAxODQgMTEyUzE2OCAxMTkuMTYyIDE2OCAxMjhDMTY4IDEzNi44MzYgMTc1LjE2NCAxNDQgMTg0IDE0NFpNMTc2IDE5MS45OTRDMTc2IDE5OC42MjMgMTgxLjM3NSAyMDQgMTg4IDIwNEMyMDIuMzQ0IDIwNCAyMTUuNzgxIDE5Ni42ODQgMjI0IDE5MS4wODhDMjMyLjIxOSAxOTYuNjg0IDI0NS42NTYgMjA0IDI2MCAyMDRDMjY2LjYyNSAyMDQgMjcyIDE5OC42MjMgMjcyIDE5MS45OTRDMjcyIDE4NS4zNjcgMjY2LjYyNSAxNzkuOTkgMjYwIDE3OS45OUMyNDkuMDk0IDE3OS45OSAyMzYuMDYyIDE3MC42MTEgMjMxLjkzOCAxNjdDMjI3LjQzOCAxNjMgMjIwLjU2MiAxNjMgMjE2LjA2MiAxNjdDMjExLjkzOCAxNzAuNjExIDE5OC45MDYgMTc5Ljk5IDE4OCAxNzkuOTlDMTgxLjM3NSAxNzkuOTkgMTc2IDE4NS4zNjcgMTc2IDE5MS45OTRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserShakespeare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M282.764 305.088C269.637 311.928 255.303 316.455 240 318.387V384.947C290.002 389.465 326.76 413.074 327.156 413.328C329.812 415.094 332.906 415.984 336 415.984C338.594 415.984 341.188 415.359 343.562 414.078C348.75 411.297 352 405.891 352 400V384C352 343.576 321.762 310.408 282.764 305.088ZM96 384V400C96 405.891 99.25 411.297 104.438 414.078C109.625 416.875 115.969 416.594 120.844 413.328C121.24 413.074 157.998 389.465 208 384.947V318.387C192.697 316.455 178.363 311.928 165.236 305.088C126.238 310.408 96 343.576 96 384ZM320 168V96C320 42.98 277.02 0 224 0S128 42.98 128 96V168C128 216.908 164.711 256.824 212 262.789V240C212 233.375 217.375 228 224 228S236 233.375 236 240V262.789C283.289 256.824 320 216.908 320 168ZM264 112C272.836 112 280 119.162 280 128C280 136.836 272.836 144 264 144S248 136.836 248 128C248 119.162 255.164 112 264 112ZM168 128C168 119.162 175.164 112 184 112S200 119.162 200 128C200 136.836 192.836 144 184 144S168 136.836 168 128ZM224 191.088C215.781 196.684 202.344 204 188 204C181.375 204 176 198.623 176 191.994C176 185.367 181.375 179.99 188 179.99C198.906 179.99 211.938 170.611 216.062 167C220.562 163 227.438 163 231.938 167C236.062 170.611 249.094 179.99 260 179.99C266.625 179.99 272 185.367 272 191.994C272 198.623 266.625 204 260 204C245.656 204 232.219 196.684 224 191.088Z" />
            <path d="M322.746 256C347.738 256 368 235.742 368 210.746C368 198.742 363.232 187.234 354.746 178.746C342.742 166.742 336 150.465 336 133.492V112C336 103.162 328.836 96 320 96V168C320 207.424 296.189 241.221 262.205 256H322.746ZM125.254 256H185.795C151.811 241.221 128 207.424 128 168V96C119.164 96 112 103.162 112 112V133.492C112 150.465 105.258 166.742 93.254 178.746C84.768 187.234 80 198.742 80 210.746C80 235.742 100.262 256 125.254 256ZM323.559 323.342C340.809 338.027 352 359.623 352 384V400C352 405.891 348.75 411.297 343.562 414.078C341.188 415.359 338.594 415.984 336 415.984C332.906 415.984 329.812 415.094 327.156 413.328C326.719 413.047 282.062 384 224 384S121.281 413.047 120.844 413.328C115.969 416.594 109.625 416.875 104.438 414.078C99.25 411.297 96 405.891 96 400V384C96 359.623 107.191 338.027 124.441 323.342C53.25 339.555 0 402.959 0 479.062C0 496.734 14.326 511.062 32 511.062H208.189C208.701 502.686 215.496 496 224 496S239.299 502.686 239.811 511.062H416C433.674 511.062 448 496.734 448 479.062C448 402.959 394.75 339.555 323.559 323.342ZM224 463.061C215.164 463.061 208 455.896 208 447.061S215.164 431.061 224 431.061S240 438.225 240 447.061S232.836 463.061 224 463.061ZM264 144C272.836 144 280 136.836 280 128C280 119.162 272.836 112 264 112S248 119.162 248 128C248 136.836 255.164 144 264 144ZM212 240V272C212 278.625 217.375 284 224 284S236 278.625 236 272V240C236 233.375 230.625 228 224 228S212 233.375 212 240ZM184 144C192.836 144 200 136.836 200 128C200 119.162 192.836 112 184 112S168 119.162 168 128C168 136.836 175.164 144 184 144ZM176 191.994C176 198.623 181.375 204 188 204C202.344 204 215.781 196.684 224 191.088C232.219 196.684 245.656 204 260 204C266.625 204 272 198.623 272 191.994C272 185.367 266.625 179.99 260 179.99C249.094 179.99 236.062 170.611 231.938 167C227.438 163 220.562 163 216.062 167C211.938 170.611 198.906 179.99 188 179.99C181.375 179.99 176 185.367 176 191.994Z" />
        </Icon>
    </>
}