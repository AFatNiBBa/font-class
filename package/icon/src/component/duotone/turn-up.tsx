
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=duotone turn-up}
 * @preview ![turn-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIzMiAxNjBWNDcyQzIzMiA0OTQuMDk0IDIxNC4wOTQgNTEyIDE5MiA1MTJINDBDMTcuOTA2IDUxMiAwIDQ5NC4wOTQgMCA0NzJTMTcuOTA2IDQzMiA0MCA0MzJIMTUyVjE2MEgyMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTY1Ljk5OSAxNDUuNTk0QzYyLjE4NiAxMzYuODQzIDYzLjkyMSAxMjYuNjU2IDcwLjQwNSAxMTkuNjcxTDE3NC40MDYgNy42N0MxODMuOTA0IC0yLjU1NyAyMDAuMDk0IC0yLjU1NyAyMDkuNTk0IDcuNjdMMzEzLjU5NSAxMTkuNjcxQzMyMC4wNzkgMTI2LjY1NiAzMjEuODEzIDEzNi44NDMgMzE4LjAwMSAxNDUuNTk0UzMwNS41NDggMTYwIDI5Ni4wMDEgMTYwSDg3Ljk5OUM3OC40NTIgMTYwIDY5LjgxMSAxNTQuMzQ0IDY1Ljk5OSAxNDUuNTk0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TurnUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M232 160V472C232 494.094 214.094 512 192 512H40C17.906 512 0 494.094 0 472S17.906 432 40 432H152V160H232Z" />
            <path d="M65.999 145.594C62.186 136.843 63.921 126.656 70.405 119.671L174.406 7.67C183.904 -2.557 200.094 -2.557 209.594 7.67L313.595 119.671C320.079 126.656 321.813 136.843 318.001 145.594S305.548 160 296.001 160H87.999C78.452 160 69.811 154.344 65.999 145.594Z" />
        </Icon>
    </>
}