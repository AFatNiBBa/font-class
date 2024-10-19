
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=duotone arrow-up}
 * @preview ![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAxMjcuMTg4TDI2NCAxNjUuMThWNDQwQzI2NCA0NjIuMDk0IDI0Ni4wOTQgNDgwIDIyNCA0ODBTMTg0IDQ2Mi4wOTQgMTg0IDQ0MFYxNjUuMThMMjI0IDEyNy4xODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1MS41NDcgNDNMNDExLjU0NyAxOTVDNDI3LjU2MiAyMTAuMjE5IDQyOC4yMTggMjM1LjUzMSA0MTMgMjUxLjU2MkMzOTcuNzgxIDI2Ny41MzEgMzcyLjQzNyAyNjguMTg3IDM1Ni40NTMgMjUzTDIyNCAxMjcuMTg4TDkxLjU0NyAyNTNDNzUuNTc4IDI2OC4xODggNTAuMjM0IDI2Ny41IDM1IDI1MS41NjJDMTkuNzgxIDIzNS41MzEgMjAuNDM3IDIxMC4yMTkgMzYuNDUzIDE5NUwxOTYuNDUzIDQzQzIwNC4xNzIgMzUuNjU2IDIxNC4wNzggMzIgMjI0IDMyUzI0My44MjggMzUuNjU2IDI1MS41NDcgNDNaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M224 127.188L264 165.18V440C264 462.094 246.094 480 224 480S184 462.094 184 440V165.18L224 127.188Z" />
            <path d="M251.547 43L411.547 195C427.562 210.219 428.218 235.531 413 251.562C397.781 267.531 372.437 268.187 356.453 253L224 127.188L91.547 253C75.578 268.188 50.234 267.5 35 251.562C19.781 235.531 20.437 210.219 36.453 195L196.453 43C204.172 35.656 214.078 32 224 32S243.828 35.656 251.547 43Z" />
        </Icon>
    </>
}