
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=thin ruler-triangle}
 * @preview ![ruler-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuODQ2IDQzMC4wNTlMODEuOTQxIDE0LjE1NEM3Mi4xNjQgNC4zNzcgNjAuMTQxIDAgNDguMzQ4IDBDMjMuNjcgMCAwIDE5LjE2IDAgNDguMDk2VjQ2NEMwIDQ5MC41MSAyMS40OSA1MTIgNDggNTEySDQ2My45MDRDNTA2LjY2OCA1MTIgNTI4LjA4NCA0NjAuMjk3IDQ5Ny44NDYgNDMwLjA1OVpNNDkzLjQ2OSA0NzYuMjQ2QzQ4OC4zNDQgNDg4LjYxNSA0NzcuMjkzIDQ5NiA0NjMuOTA0IDQ5Nkg0OEMzMC4zNTUgNDk2IDE2IDQ4MS42NDUgMTYgNDY0VjQ4LjA5NkMxNiAyOC4wMDYgMzIuNDQ3IDE2IDQ4LjM0OCAxNkM1NC4xOTEgMTYgNjIuODAzIDE3LjY0MyA3MC42MjkgMjUuNDY5TDExMi45MjQgNjcuNzY0TDgyLjM0NCA5OC4zNDRDNzkuMjE5IDEwMS40NjkgNzkuMjE5IDEwNi41MzEgODIuMzQ0IDEwOS42NTZDODMuOTA2IDExMS4yMTkgODUuOTUzIDExMiA4OCAxMTJTOTIuMDk0IDExMS4yMTkgOTMuNjU2IDEwOS42NTZMMTI0LjIzNiA3OS4wNzZMMTkyLjkyNCAxNDcuNzY0TDE2Mi4zNDQgMTc4LjM0NEMxNTkuMjE5IDE4MS40NjkgMTU5LjIxOSAxODYuNTMxIDE2Mi4zNDQgMTg5LjY1NkMxNjMuOTA2IDE5MS4yMTkgMTY1Ljk1MyAxOTIgMTY4IDE5MlMxNzIuMDk0IDE5MS4yMTkgMTczLjY1NiAxODkuNjU2TDIwNC4yMzYgMTU5LjA3NkwyNzIuOTI0IDIyNy43NjRMMjQyLjM0NCAyNTguMzQ0QzIzOS4yMTkgMjYxLjQ2OSAyMzkuMjE5IDI2Ni41MzEgMjQyLjM0NCAyNjkuNjU2QzI0My45MDYgMjcxLjIxOSAyNDUuOTUzIDI3MiAyNDggMjcyUzI1Mi4wOTQgMjcxLjIxOSAyNTMuNjU2IDI2OS42NTZMMjg0LjIzNiAyMzkuMDc2TDM1Mi45MjQgMzA3Ljc2NEwzMjIuMzQ0IDMzOC4zNDRDMzE5LjIxOSAzNDEuNDY5IDMxOS4yMTkgMzQ2LjUzMSAzMjIuMzQ0IDM0OS42NTZDMzIzLjkwNiAzNTEuMjE5IDMyNS45NTMgMzUyIDMyOCAzNTJTMzMyLjA5NCAzNTEuMjE5IDMzMy42NTYgMzQ5LjY1NkwzNjQuMjM2IDMxOS4wNzZMNDMyLjkyNCAzODcuNzY0TDQwMi4zNDQgNDE4LjM0NEMzOTkuMjE5IDQyMS40NjkgMzk5LjIxOSA0MjYuNTMxIDQwMi4zNDQgNDI5LjY1NkM0MDMuOTA2IDQzMS4yMTkgNDA1Ljk1MyA0MzIgNDA4IDQzMlM0MTIuMDk0IDQzMS4yMTkgNDEzLjY1NiA0MjkuNjU2TDQ0NC4yMzYgMzk5LjA3Nkw0ODYuNTMxIDQ0MS4zNzFDNDk1Ljk5OCA0NTAuODM4IDQ5OC41OTIgNDYzLjg3NSA0OTMuNDY5IDQ3Ni4yNDZaTTEzMy42NTYgMjUwLjM0NEMxMzEuMzU5IDI0OC4wNjIgMTI3LjkzOCAyNDcuMzc1IDEyNC45MzggMjQ4LjU5NEMxMjEuOTUzIDI0OS44NDQgMTIwIDI1Mi43NSAxMjAgMjU2VjM4NEMxMjAgMzg4LjQwNiAxMjMuNTc4IDM5MiAxMjggMzkySDI1NkMyNTkuMjM0IDM5MiAyNjIuMTU2IDM5MC4wNjIgMjYzLjM5MSAzODcuMDYyUzI2My45MzcgMzgwLjYyNSAyNjEuNjU2IDM3OC4zNDRMMTMzLjY1NiAyNTAuMzQ0Wk0xMzYgMzc2VjI3NS4zMTJMMjM2LjY4OCAzNzZIMTM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RulerTriangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.846 430.059L81.941 14.154C72.164 4.377 60.141 0 48.348 0C23.67 0 0 19.16 0 48.096V464C0 490.51 21.49 512 48 512H463.904C506.668 512 528.084 460.297 497.846 430.059ZM493.469 476.246C488.344 488.615 477.293 496 463.904 496H48C30.355 496 16 481.645 16 464V48.096C16 28.006 32.447 16 48.348 16C54.191 16 62.803 17.643 70.629 25.469L112.924 67.764L82.344 98.344C79.219 101.469 79.219 106.531 82.344 109.656C83.906 111.219 85.953 112 88 112S92.094 111.219 93.656 109.656L124.236 79.076L192.924 147.764L162.344 178.344C159.219 181.469 159.219 186.531 162.344 189.656C163.906 191.219 165.953 192 168 192S172.094 191.219 173.656 189.656L204.236 159.076L272.924 227.764L242.344 258.344C239.219 261.469 239.219 266.531 242.344 269.656C243.906 271.219 245.953 272 248 272S252.094 271.219 253.656 269.656L284.236 239.076L352.924 307.764L322.344 338.344C319.219 341.469 319.219 346.531 322.344 349.656C323.906 351.219 325.953 352 328 352S332.094 351.219 333.656 349.656L364.236 319.076L432.924 387.764L402.344 418.344C399.219 421.469 399.219 426.531 402.344 429.656C403.906 431.219 405.953 432 408 432S412.094 431.219 413.656 429.656L444.236 399.076L486.531 441.371C495.998 450.838 498.592 463.875 493.469 476.246ZM133.656 250.344C131.359 248.062 127.938 247.375 124.938 248.594C121.953 249.844 120 252.75 120 256V384C120 388.406 123.578 392 128 392H256C259.234 392 262.156 390.062 263.391 387.062S263.937 380.625 261.656 378.344L133.656 250.344ZM136 376V275.312L236.688 376H136Z" />
        </Icon>
    </>
}