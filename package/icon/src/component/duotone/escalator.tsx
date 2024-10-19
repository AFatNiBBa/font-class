
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=duotone escalator}
 * @preview ![escalator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCAxMjhINDQ4QzQyOC42MjUgMTI4IDQwOS45MDYgMTM1LjAzMSAzOTUuMzEyIDE0Ny43OTdMMTYxLjkzOCAzNTJIODBDMzUuODEyIDM1MiAwIDM4Ny44MTIgMCA0MzJTMzUuODEyIDUxMiA4MCA1MTJIMTkyQzIxMS4zNzUgNTEyIDIzMC4wOTQgNTA0Ljk2OSAyNDQuNjg4IDQ5Mi4yMDNMNDc4LjA2MiAyODhINTYwQzYwNC4xODggMjg4IDY0MCAyNTIuMTg4IDY0MCAyMDhTNjA0LjE4OCAxMjggNTYwIDEyOFpNMjQwIDk2QzI2Ni41MjUgOTUuOSAyODggNzQuNDU1IDI4OCA0OEMyODggMjEuNTQzIDI2Ni41MjUgMC4xIDI0MCAwQzIxMy40NzUgMC4xIDE5MiAyMS41NDMgMTkyIDQ4QzE5MiA3NC40NTUgMjEzLjQ3NSA5NS45IDI0MCA5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjQwIDEyOEMyMDQuNjU0IDEyOCAxNzYgMTU2LjY1MiAxNzYgMTkyVjI5Ny4xNzRMMzAzLjM2NyAxODUuNzI5QzMwMC4xNzIgMTUzLjM2OSAyNzMuMTk3IDEyOCAyNDAgMTI4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Escalator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M560 128H448C428.625 128 409.906 135.031 395.312 147.797L161.938 352H80C35.812 352 0 387.812 0 432S35.812 512 80 512H192C211.375 512 230.094 504.969 244.688 492.203L478.062 288H560C604.188 288 640 252.188 640 208S604.188 128 560 128ZM240 96C266.525 95.9 288 74.455 288 48C288 21.543 266.525 0.1 240 0C213.475 0.1 192 21.543 192 48C192 74.455 213.475 95.9 240 96Z" />
            <path d="M240 128C204.654 128 176 156.652 176 192V297.174L303.367 185.729C300.172 153.369 273.197 128 240 128Z" />
        </Icon>
    </>
}