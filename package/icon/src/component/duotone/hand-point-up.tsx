
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-point-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-up?s=duotone hand-point-up}
 * @preview ![hand-point-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyNDBWMzJDMTI4IDE0LjMyOCAxMTMuNjg4IDAgOTYgMFM2NCAxNC4zMjggNjQgMzJWMjQwLjgwN0M2Ni42NiAyNDAuNTA4IDY5LjI2IDI0MCA3MiAyNDBIMTI4Wk0zMjMuODI2IDMwOS4wMzFDMzEzLjYwMiAzMTUuOTUzIDMwMS4yNzUgMzIwIDI4OCAzMjBDMjgyLjIzNCAzMjAgMjc2Ljc2MiAzMTguOTIgMjcxLjQ0NyAzMTcuNDlDMjY4LjU5NCAzNTQuNjQ2IDIzNy44NjkgMzg0IDIwMCAzODRIMTI4QzExOS4xNjMgMzg0IDExMiAzNzYuODM3IDExMiAzNjhWMzY4QzExMiAzNTkuMTYzIDExOS4xNjMgMzUyIDEyOCAzNTJMMTk3LjcyNCAzNTJDMjEzLjIzOSAzNTIgMjQwIDM0MC43MTEgMjQwIDMxMkMyNDAgMjg5LjkwNiAyMjIuMDk0IDI3MiAyMDAgMjcySDcyQzQ5LjkwOSAyNzIgMzIgMjg5LjkwOSAzMiAzMTJWMzc1LjQwNkMzMiA0MDguNTMxIDQ4IDQzOS45NjkgNzQuODEyIDQ1OS41MzFMMTExLjIxOSA0ODUuOTg0QzEzNC40ODkgNTAyLjg5MyAxNjIuNTE2IDUxMiAxOTEuMjgxIDUxMkgyODBDMzU1LjExMSA1MTIgNDE2IDQ1MS4xMTEgNDE2IDM3NlYzNDMuMTIxQzQwNi41NTMgMzQ4LjYxOSAzOTUuNzE3IDM1MiAzODQgMzUyQzM1Ni4wNjYgMzUyIDMzMi41NTkgMzMzLjk4NiAzMjMuODI2IDMwOS4wMzFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI4OCAxNjBDMjcwLjMxMiAxNjAgMjU2IDE3NC4zMjggMjU2IDE5MlYyNTZDMjU2IDI3My42NzIgMjcwLjMxMiAyODggMjg4IDI4OFMzMjAgMjczLjY3MiAzMjAgMjU2VjE5MkMzMjAgMTc0LjMyOCAzMDUuNjg4IDE2MCAyODggMTYwWk0xOTIgMTI4QzE3NC4zMTIgMTI4IDE2MCAxNDIuMzI4IDE2MCAxNjBWMjQwSDIwMEMyMDguNDU5IDI0MCAyMTYuNDU5IDI0MS43MjkgMjI0IDI0NC40MVYxNjBDMjI0IDE0Mi4zMjggMjA5LjY4OCAxMjggMTkyIDEyOFpNMzg0IDE5MkMzNjYuMzEyIDE5MiAzNTIgMjA2LjMyOCAzNTIgMjI0VjI4OEMzNTIgMzA1LjY3MiAzNjYuMzEyIDMyMCAzODQgMzIwUzQxNiAzMDUuNjcyIDQxNiAyODhWMjI0QzQxNiAyMDYuMzI4IDQwMS42ODggMTkyIDM4NCAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandPointUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M128 240V32C128 14.328 113.688 0 96 0S64 14.328 64 32V240.807C66.66 240.508 69.26 240 72 240H128ZM323.826 309.031C313.602 315.953 301.275 320 288 320C282.234 320 276.762 318.92 271.447 317.49C268.594 354.646 237.869 384 200 384H128C119.163 384 112 376.837 112 368V368C112 359.163 119.163 352 128 352L197.724 352C213.239 352 240 340.711 240 312C240 289.906 222.094 272 200 272H72C49.909 272 32 289.909 32 312V375.406C32 408.531 48 439.969 74.812 459.531L111.219 485.984C134.489 502.893 162.516 512 191.281 512H280C355.111 512 416 451.111 416 376V343.121C406.553 348.619 395.717 352 384 352C356.066 352 332.559 333.986 323.826 309.031Z" />
            <path d="M288 160C270.312 160 256 174.328 256 192V256C256 273.672 270.312 288 288 288S320 273.672 320 256V192C320 174.328 305.688 160 288 160ZM192 128C174.312 128 160 142.328 160 160V240H200C208.459 240 216.459 241.729 224 244.41V160C224 142.328 209.688 128 192 128ZM384 192C366.312 192 352 206.328 352 224V288C352 305.672 366.312 320 384 320S416 305.672 416 288V224C416 206.328 401.688 192 384 192Z" />
        </Icon>
    </>
}