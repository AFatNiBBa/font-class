
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `handshake-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-slash?s=solid handshake-slash}
 * @preview ![handshake-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDMuOTk3IDEyOC4yMzJWMzUyLjAzNEM1NDMuOTk3IDM2OS42NTEgNTU4LjI0NyAzODQuMDI1IDU3NS45OTcgMzg0LjAyNUg2MzkuOTk3VjEyOC4yMzJINTQzLjk5N1pNNTkxLjk5NyAzNTIuMDM0QzU4My4yNDcgMzUyLjAzNCA1NzUuOTk3IDM0NC43ODQgNTc1Ljk5NyAzMzYuMDQyQzU3NS45OTcgMzI3LjE2NyA1ODMuMjQ3IDMyMC4wNDYgNTkxLjk5NyAzMjAuMDQ2UzYwNy45OTcgMzI3LjE2NyA2MDcuOTk3IDMzNi4wNDJDNjA3Ljk5NyAzNDQuNzg0IDYwMC43NDcgMzUyLjAzNCA1OTEuOTk3IDM1Mi4wMzRaTTAgMTI4LjIzMlYzODMuOUg2NEM4MS43NSAzODMuOSA5NiAzNjkuNjUxIDk2IDM1MS45MDlWMTcxLjkxNUw0MC4yNjUgMTI4LjIzMkgwWk02NCAzMzYuMDQyQzY0IDM0NC43ODQgNTYuNzUgMzUyLjAzNCA0OCAzNTIuMDM0UzMyIDM0NC43ODQgMzIgMzM2LjA0MkMzMiAzMjcuMTY3IDM5LjI1IDMyMC4wNDYgNDggMzIwLjA0NlM2NCAzMjcuMTY3IDY0IDMzNi4wNDJaTTEyNy45OTkgMzUxLjc4NEgxNDYuMjQ5TDIzNi43NDkgNDMzLjYzNEMyNjQuMjQ5IDQ1Ni4wMDEgMzA0LjQ5OCA0NTEuNzUxIDMyNi43NDggNDI0LjM4NEwzMjYuOTk4IDQyNC4xMzRMMzQ0Ljg3MyA0MzkuNjNDMzYwLjc0OCA0NTIuNjI2IDM4NC4yNDggNDUwLjEyNiAzOTcuMjQ4IDQzNC4yNTlMNDEwLjI2OSA0MTguMjMyTDEyNy45OTkgMTk2Ljk5NVYzNTEuNzg0Wk00OTUuMjIyIDM2Mi44M0M0OTUuMDM1IDM1My43MjkgNDkxLjM5OCAzNDQuNzc2IDQ4My43NzkgMzM4LjU4OUwzMzQuNjIzIDIxNy40NTRMMzIzLjE1MyAyMjcuOTY1TDI5Ny41NDIgMjA3Ljg5M0wzNjIuODczIDE0OC4xMDNDMzY5LjM3MyAxNDIuMjMyIDM3OS42MjMgMTQyLjYwNyAzODUuNDk4IDE0OS4xMDNDMzkxLjQ5OCAxNTUuNTk5IDM5MC45OTggMTY1LjcyNCAzODQuNDk4IDE3MS43MkwzNTguMzczIDE5NS41ODdMNTAzLjk5OCAzMTMuNjc1QzUwNi44NzMgMzE2LjE3MSA1MDkuNDk3IDMxOC42NzEgNTExLjg3MiAzMjEuNDE3VjEyNy45ODJDNDcwLjg5NCA4Ny4wMjIgNDE1LjMxNiA2NC4wMDcgMzU3LjM2MyA2NC4wMDdIMzQ4Ljc0OEMzNDAuODA3IDY0LjAwNyAzMzMuMTUzIDY2Ljk3NiAzMjcuMjkzIDcyLjMzNUwyMzMuNzQ3IDE1Ny44OTJMMjA4LjI3IDEzNy45MjRMMjg5LjEyNCA2NC4wMDdIMjgyLjUwOEMyMzkuMDQyIDY0LjAwNyAxOTcuMzQ5IDc3LjY2NyAxNjEuNzIgMTAxLjQ0TDM4LjgxNCA1LjEwOUMzNC40MDggMS42NzIgMjkuMTg5IDAgMjQuMDMzIDBDMTYuOTA4IDAgOS44NDYgMy4xNTYgNS4xMjcgOS4xODdDLTMuMDYxIDE5LjYyNSAtMS4yNDggMzQuNzE4IDkuMTg5IDQyLjg5TDYwMS4xODYgNTA2Ljg4M0M2MTEuNjg2IDUxNS4wODYgNjI2Ljc0OSA1MTMuMjExIDYzNC44NzQgNTAyLjgwNUM2NDMuMDYxIDQ5Mi4zNjcgNjQxLjI0OSA0NzcuMjc0IDYzMC44MTEgNDY5LjEwMkw0OTUuMjIyIDM2Mi44M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandshakeSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M543.997 128.232V352.034C543.997 369.651 558.247 384.025 575.997 384.025H639.997V128.232H543.997ZM591.997 352.034C583.247 352.034 575.997 344.784 575.997 336.042C575.997 327.167 583.247 320.046 591.997 320.046S607.997 327.167 607.997 336.042C607.997 344.784 600.747 352.034 591.997 352.034ZM0 128.232V383.9H64C81.75 383.9 96 369.651 96 351.909V171.915L40.265 128.232H0ZM64 336.042C64 344.784 56.75 352.034 48 352.034S32 344.784 32 336.042C32 327.167 39.25 320.046 48 320.046S64 327.167 64 336.042ZM127.999 351.784H146.249L236.749 433.634C264.249 456.001 304.498 451.751 326.748 424.384L326.998 424.134L344.873 439.63C360.748 452.626 384.248 450.126 397.248 434.259L410.269 418.232L127.999 196.995V351.784ZM495.222 362.83C495.035 353.729 491.398 344.776 483.779 338.589L334.623 217.454L323.153 227.965L297.542 207.893L362.873 148.103C369.373 142.232 379.623 142.607 385.498 149.103C391.498 155.599 390.998 165.724 384.498 171.72L358.373 195.587L503.998 313.675C506.873 316.171 509.497 318.671 511.872 321.417V127.982C470.894 87.022 415.316 64.007 357.363 64.007H348.748C340.807 64.007 333.153 66.976 327.293 72.335L233.747 157.892L208.27 137.924L289.124 64.007H282.508C239.042 64.007 197.349 77.667 161.72 101.44L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.187C-3.061 19.625 -1.248 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102L495.222 362.83Z" />
        </Icon>
    </>
}