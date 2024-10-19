
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-middle-finger` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-middle-finger?s=duotone hand-middle-finger}
 * @preview ![hand-middle-finger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAyNDBDMzkwLjg0OCAyNDAgMzgyLjM4NSAyNDIuNjk3IDM3NS4xMDcgMjQ3LjEzOUMzNzAuOTQzIDIyNC44NjkgMzUxLjQ4IDIwOCAzMjggMjA4QzMxMS4yODEgMjA4IDI5Ni41OTQgMjE2LjU2MSAyODggMjI5LjUyVjQwQzI4OCAxNy45MDYgMjcwLjA5NCAwIDI0OCAwUzIwOCAxNy45MDYgMjA4IDQwVjI0MEMyMDggMjEzLjQ4NCAxODYuNTE2IDE5MiAxNjAgMTkyUzExMiAyMTMuNDg0IDExMiAyNDBWMzM2QzExMiAzNDQuODM2IDEwNC44MzYgMzUyIDk2IDM1MlM4MCAzNDQuODM2IDgwIDMzNlYyOTAuNTI3TDUwLjAxNiAzMTQuNTE2QzM4LjYyOSAzMjMuNjI2IDMyIDMzNy40MTggMzIgMzUyVjQwMC4wMjVDMzIgNDEwLjQwMSAzNS4zNjYgNDIwLjQ5NyA0MS41OTQgNDI4Ljc5N0w1Ni4wMjEgNDQ4LjAyNUM4Ni4yMzkgNDg4LjI5OSAxMzMuNjUyIDUxMiAxODQuMDAyIDUxMkgzMjBDMzkwLjY5MiA1MTIgNDQ4IDQ1NC42OTIgNDQ4IDM4NFYyODhDNDQ4IDI2MS40ODQgNDI2LjUxNiAyNDAgNDAwIDI0MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandMiddleFinger(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M400 240C390.848 240 382.385 242.697 375.107 247.139C370.943 224.869 351.48 208 328 208C311.281 208 296.594 216.561 288 229.52V40C288 17.906 270.094 0 248 0S208 17.906 208 40V240C208 213.484 186.516 192 160 192S112 213.484 112 240V336C112 344.836 104.836 352 96 352S80 344.836 80 336V290.527L50.016 314.516C38.629 323.626 32 337.418 32 352V400.025C32 410.401 35.366 420.497 41.594 428.797L56.021 448.025C86.239 488.299 133.652 512 184.002 512H320C390.692 512 448 454.692 448 384V288C448 261.484 426.516 240 400 240Z" />
        </Icon>
    </>
}