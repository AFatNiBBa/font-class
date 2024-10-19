
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turn-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=duotone turn-down}
 * @preview ![turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MiAzNTJWODBINDBDMTcuOTA2IDgwIDAgNjIuMDk0IDAgNDBTMTcuOTA2IDAgNDAgMEgxOTJDMjE0LjA5NCAwIDIzMiAxNy45MDYgMjMyIDQwVjM1MkgxNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTg3Ljk5OSAzNTJIMjk2LjAwMUMzMDUuNTQ4IDM1MiAzMTQuMTg5IDM1Ny42NTYgMzE4LjAwMSAzNjYuNDA2QzMyMS44MTQgMzc1LjE1NyAzMjAuMDc5IDM4NS4zNDQgMzEzLjU5NSAzOTIuMzI5TDIwOS41OTQgNTA0LjMzQzIwMC4wOTQgNTE0LjU1NyAxODMuOTA0IDUxNC41NTcgMTc0LjQwNiA1MDQuMzNMNzAuNDA1IDM5Mi4zMjlDNjMuOTIxIDM4NS4zNDQgNjIuMTg2IDM3NS4xNTcgNjUuOTk5IDM2Ni40MDZDNjkuODExIDM1Ny42NTYgNzguNDUyIDM1MiA4Ny45OTkgMzUyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TurnDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M152 352V80H40C17.906 80 0 62.094 0 40S17.906 0 40 0H192C214.094 0 232 17.906 232 40V352H152Z" />
            <path d="M87.999 352H296.001C305.548 352 314.189 357.656 318.001 366.406C321.814 375.157 320.079 385.344 313.595 392.329L209.594 504.33C200.094 514.557 183.904 514.557 174.406 504.33L70.405 392.329C63.921 385.344 62.186 375.157 65.999 366.406C69.811 357.656 78.452 352 87.999 352Z" />
        </Icon>
    </>
}