
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ring` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=duotone ring}
 * @preview ![ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDIwOEM2NCAxNjMuODIgMTUwIDEyOCAyNTYgMTI4QzM2MiAxMjggNDQ4IDE2My44MiA0NDggMjA4QzQ0OCAyMjkuODEgNDI3LjA1IDI0OS41NyAzOTMuMSAyNjRDMzU4LjI1IDI0OS4xOSAzMDkuNzEgMjQwIDI1NiAyNDBTMTUzLjc1IDI0OS4xOSAxMTguOSAyNjRDODUgMjQ5LjU3IDY0IDIyOS44MSA2NCAyMDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiA2NEMxMTAuMDYxIDY0IDAgMTI1LjkxIDAgMjA4VjMwNi4xMzFDMCAzODQuNDggMTE0LjYyMSA0NDggMjU2IDQ0OEMzOTcuMzgxIDQ0OCA1MTIgMzg0LjQ4IDUxMiAzMDYuMTMxVjIwOEM1MTIgMTI1LjkxIDQwMS45NDEgNjQgMjU2IDY0Wk0yNTYgMjg4QzE1MCAyODggNjQgMjUyLjE4IDY0IDIwOFMxNTAgMTI4IDI1NiAxMjhDMzYyIDEyOCA0NDggMTYzLjgyIDQ0OCAyMDhTMzYyIDI4OCAyNTYgMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Ring: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 208C64 163.82 150 128 256 128C362 128 448 163.82 448 208C448 229.81 427.05 249.57 393.1 264C358.25 249.19 309.71 240 256 240S153.75 249.19 118.9 264C85 249.57 64 229.81 64 208Z" />
            <path d="M256 64C110.061 64 0 125.91 0 208V306.131C0 384.48 114.621 448 256 448C397.381 448 512 384.48 512 306.131V208C512 125.91 401.941 64 256 64ZM256 288C150 288 64 252.18 64 208S150 128 256 128C362 128 448 163.82 448 208S362 288 256 288Z" />
    </Icon>
);

export default Ring;