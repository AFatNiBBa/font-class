
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `engine-warning` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/engine-warning?s=duotone engine-warning}
 * @preview ![engine-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5MiA2NEgyMTZDMjAyLjc0NiA2NCAxOTIgNzQuNzQ0IDE5MiA4OEMxOTIgMTAxLjI1NCAyMDIuNzQ2IDExMiAyMTYgMTEySDI4MFYxNDRIMzI4VjExMkgzOTJDNDA1LjI1NCAxMTIgNDE2IDEwMS4yNTQgNDE2IDg4QzQxNiA3NC43NDQgNDA1LjI1NCA2NCAzOTIgNjRaTTQ4IDE2OEM0OCAxNTQuNzQ0IDM3LjI1NCAxNDQgMjQgMTQ0UzAgMTU0Ljc0NCAwIDE2OFYzNjBDMCAzNzMuMjU0IDEwLjc0NiAzODQgMjQgMzg0UzQ4IDM3My4yNTQgNDggMzYwVjI4OEg4MFYyNDBINDhWMTY4Wk02MDggMTkySDU3NkM1NTguMzI2IDE5MiA1NDQgMjA2LjMyNiA1NDQgMjI0VjQxNkM1NDQgNDMzLjY3MiA1NTguMzI2IDQ0OCA1NzYgNDQ4SDYwOEM2MjUuNjc0IDQ0OCA2NDAgNDMzLjY3MiA2NDAgNDE2VjIyNEM2NDAgMjA2LjMyNiA2MjUuNjc0IDE5MiA2MDggMTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MDUuOTk5IDIxMS41TDQzNC43MjMgMTU0LjQ5OEM0MjYuMjIzIDE0Ny43MDMgNDE1LjY2NCAxNDQgNDA0Ljc4MSAxNDRIMTI4QzEwMS40OSAxNDQgODAgMTY1LjQ5IDgwIDE5MlYzMzZDODAgMzYyLjUxIDEwMS40OSAzODQgMTI4IDM4NEgxNjkuMzc1TDIxOS4zMiA0MzMuOTQ1QzIyOC4zMiA0NDIuOTQzIDI0MC41MjMgNDQ4IDI1My4yNSA0NDhINDY0QzQ5MC41MSA0NDggNTEyIDQyNi41MSA1MTIgNDAwVjIyMy45OEM1MTIgMjE5LjEyNSA1MDkuNzkzIDIxNC41MzEgNTA1Ljk5OSAyMTEuNVpNMjgxLjg0NiAyMDYuMTU0QzI4MS44NDYgMTkzLjkyMiAyOTEuNzcgMTg0IDMwNCAxODRTMzI2LjE1NCAxOTMuOTIyIDMyNi4xNTQgMjA2LjE1NFYyOTcuODQ2QzMyNi4xNTQgMzEwLjA3NiAzMTYuMjMgMzIwIDMwNCAzMjBTMjgxLjg0NiAzMTAuMDc2IDI4MS44NDYgMjk3Ljg0NlYyMDYuMTU0Wk0zMDQgMzk3LjUzOUMyODcuNjg4IDM5Ny41MzkgMjc0LjQ2MSAzODQuMzEyIDI3NC40NjEgMzY4QzI3NC40NjEgMzUxLjY4NiAyODcuNjg4IDMzOC40NjEgMzA0IDMzOC40NjFTMzMzLjUzOSAzNTEuNjg2IDMzMy41MzkgMzY4QzMzMy41MzkgMzg0LjMxMiAzMjAuMzEyIDM5Ny41MzkgMzA0IDM5Ny41MzlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EngineWarning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M392 64H216C202.746 64 192 74.744 192 88C192 101.254 202.746 112 216 112H280V144H328V112H392C405.254 112 416 101.254 416 88C416 74.744 405.254 64 392 64ZM48 168C48 154.744 37.254 144 24 144S0 154.744 0 168V360C0 373.254 10.746 384 24 384S48 373.254 48 360V288H80V240H48V168ZM608 192H576C558.326 192 544 206.326 544 224V416C544 433.672 558.326 448 576 448H608C625.674 448 640 433.672 640 416V224C640 206.326 625.674 192 608 192Z" />
            <path d="M505.999 211.5L434.723 154.498C426.223 147.703 415.664 144 404.781 144H128C101.49 144 80 165.49 80 192V336C80 362.51 101.49 384 128 384H169.375L219.32 433.945C228.32 442.943 240.523 448 253.25 448H464C490.51 448 512 426.51 512 400V223.98C512 219.125 509.793 214.531 505.999 211.5ZM281.846 206.154C281.846 193.922 291.77 184 304 184S326.154 193.922 326.154 206.154V297.846C326.154 310.076 316.23 320 304 320S281.846 310.076 281.846 297.846V206.154ZM304 397.539C287.688 397.539 274.461 384.312 274.461 368C274.461 351.686 287.688 338.461 304 338.461S333.539 351.686 333.539 368C333.539 384.312 320.312 397.539 304 397.539Z" />
        </Icon>
    </>
}