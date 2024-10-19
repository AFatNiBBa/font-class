
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `music-note` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=duotone music-note}
 * @preview ![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNDguMDg4VjE3LjU0N0wzMTEgMS4zMjJDMzIwLjYyNSAtMS41NTMgMzMxLjEyNSAwLjMyMiAzMzkuMTI1IDYuMzI0QzM0Ny4yNSAxMi4zMjQgMzUyIDIxLjgyNCAzNTIgMzEuOTUxVjk1Ljk1N0MzNTIgMTEwLjIwOSAzNDIuNjI1IDEyMi43MTEgMzI5IDEyNi43MTFMMjU2IDE0OC4wODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiA0MzEuOTkyQzI1NiA0NzYuMTIxIDIwNS44NzUgNTEyIDE0NCA1MTJTMzIgNDc2LjEyMSAzMiA0MzEuOTkyUzgyLjEyNSAzNTEuOTg0IDE0NCAzNTEuOTg0QzE2MC4zNzUgMzUxLjk4NCAxNzYuNSAzNTQuNzM0IDE5MiAzNTkuOTg0VjYwLjMyOEMxOTIgNDYuMzI4IDIwMS4xMjUgMzMuOTUxIDIxNC4zNzUgMjkuODI2TDI1NiAxNy41NDdWNDMxLjk5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function MusicNote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M256 148.088V17.547L311 1.322C320.625 -1.553 331.125 0.322 339.125 6.324C347.25 12.324 352 21.824 352 31.951V95.957C352 110.209 342.625 122.711 329 126.711L256 148.088Z" />
            <path d="M256 431.992C256 476.121 205.875 512 144 512S32 476.121 32 431.992S82.125 351.984 144 351.984C160.375 351.984 176.5 354.734 192 359.984V60.328C192 46.328 201.125 33.951 214.375 29.826L256 17.547V431.992Z" />
        </Icon>
    </>
}