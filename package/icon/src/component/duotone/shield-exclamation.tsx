
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shield-exclamation` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-exclamation?s=duotone shield-exclamation}
 * @preview ![shield-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2Ni41IDgzLjY4TDI3NC41IDMuNjcyQzI2OS42MjUgMS42NDEgMjYxLjM0NCAwIDI1Ni4wNjIgMEMyNTAuNzUgMCAyNDIuNSAxLjY0MSAyMzcuNTk0IDMuNjcyTDQ1LjU5NCA4My42OEMyNy42ODggOTEuMDcgMTYgMTA4LjU3NCAxNiAxMjcuOTg0QzE2IDM4NS4xNTcgMjA1LjE2NCA1MTIgMjU1Ljk1MyA1MTJDMzA3Ljk3NSA1MTIgNDk2IDM4My44MTMgNDk2IDEyNy45ODRDNDk2IDEwOC41NzQgNDg0LjMxMiA5MS4wNyA0NjYuNSA4My42OFpNMjMyIDE1MkMyMzIgMTM4Ljc1IDI0Mi43NSAxMjggMjU2IDEyOFMyODAgMTM4Ljc1IDI4MCAxNTJWMjY0QzI4MCAyNzcuMjUgMjY5LjI1IDI4OCAyNTYgMjg4UzIzMiAyNzcuMjUgMjMyIDI2NFYxNTJaTTI1NiAzODRDMjM4LjMyNiAzODQgMjI0IDM2OS42NzIgMjI0IDM1MlMyMzguMzI2IDMyMCAyNTYgMzIwUzI4OCAzMzQuMzI4IDI4OCAzNTJTMjczLjY3NCAzODQgMjU2IDM4NFogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTI1NiAyODhDMjY5LjI1IDI4OCAyODAgMjc3LjI1IDI4MCAyNjRWMTUyQzI4MCAxMzguNzUgMjY5LjI1IDEyOCAyNTYgMTI4UzIzMiAxMzguNzUgMjMyIDE1MlYyNjRDMjMyIDI3Ny4yNSAyNDIuNzUgMjg4IDI1NiAyODhaTTI1NiAzMjBDMjM4LjMyNiAzMjAgMjI0IDMzNC4zMjggMjI0IDM1MlMyMzguMzI2IDM4NCAyNTYgMzg0UzI4OCAzNjkuNjcyIDI4OCAzNTJTMjczLjY3NCAzMjAgMjU2IDMyMFogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShieldExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.984C16 385.157 205.164 512 255.953 512C307.975 512 496 383.813 496 127.984C496 108.574 484.312 91.07 466.5 83.68ZM232 152C232 138.75 242.75 128 256 128S280 138.75 280 152V264C280 277.25 269.25 288 256 288S232 277.25 232 264V152ZM256 384C238.326 384 224 369.672 224 352S238.326 320 256 320S288 334.328 288 352S273.674 384 256 384Z " />
            <path d="M256 288C269.25 288 280 277.25 280 264V152C280 138.75 269.25 128 256 128S232 138.75 232 152V264C232 277.25 242.75 288 256 288ZM256 320C238.326 320 224 334.328 224 352S238.326 384 256 384S288 369.672 288 352S273.674 320 256 320Z " />
        </Icon>
    </>
}