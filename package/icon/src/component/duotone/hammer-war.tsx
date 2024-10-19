
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hammer-war` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=duotone hammer-war}
 * @preview ![hammer-war](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAyNjcuMDc0VjQ5NkMyMjQgNTA0LjgzNiAyMTYuODM2IDUxMiAyMDggNTEySDE3NkMxNjcuMTY0IDUxMiAxNjAgNTA0LjgzNiAxNjAgNDk2VjI2Ny4wNzRMMTkyIDI2MS43NUwyMjQgMjY3LjA3NFpNMTkyIDU4LjI1TDIyNCA1Mi45MjZWMTZDMjI0IDcuMTY0IDIxNi44MzYgMCAyMDggMEgxNzZDMTY3LjE2NCAwIDE2MCA3LjE2NCAxNjAgMTZWNTIuOTI2TDE5MiA1OC4yNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDY0VjI1NkMzODQgMjc1Ljc1IDM2Ni4yNSAyOTAuNzUgMzQ2Ljc1IDI4Ny41TDE5MiAyNjEuNzVMMzcuMjUgMjg3LjVDMTcuNzUgMjkwLjc1IDAgMjc1Ljc1IDAgMjU2VjY0QzAgNDQuMjUgMTcuNzUgMjkuMjUgMzcuMjUgMzIuNUwxOTIgNTguMjVMMzQ2Ljc1IDMyLjVDMzY2LjI1IDI5LjI1IDM4NCA0NC4yNSAzODQgNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HammerWar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M224 267.074V496C224 504.836 216.836 512 208 512H176C167.164 512 160 504.836 160 496V267.074L192 261.75L224 267.074ZM192 58.25L224 52.926V16C224 7.164 216.836 0 208 0H176C167.164 0 160 7.164 160 16V52.926L192 58.25Z" />
            <path d="M384 64V256C384 275.75 366.25 290.75 346.75 287.5L192 261.75L37.25 287.5C17.75 290.75 0 275.75 0 256V64C0 44.25 17.75 29.25 37.25 32.5L192 58.25L346.75 32.5C366.25 29.25 384 44.25 384 64Z" />
        </Icon>
    </>
}