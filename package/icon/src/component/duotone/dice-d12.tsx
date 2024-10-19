
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d12` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d12?s=duotone dice-d12}
 * @preview ![dice-d12](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTggMTc2LjkwNkwxMzEuNjI1IDMwMC41MzFMMjQwLjQ2OSAyNDYuMTI1VjEzOS4yNUw1OS40MzcgNzQuMDYyTDggMTc2LjkwNlpNMzMzLjk2OSA2Ljc1QzMyNi41MzEgMy4wMzEgMzEzLjcxOSAwIDMwNS4zNzUgMEgyMDcuNTYyQzE5Ny42MjUgMCAxODcuODQ0IDIuMzEyIDE3OC45MzcgNi43NUw5MC4xODcgNTEuMTI1TDI1Ni40NjkgMTExTDQyMi43NSA1MS4xMjVMMzMzLjk2OSA2Ljc1Wk00NTMuNSA3NC4wNjJMMjcyLjQ2OSAxMzkuMjVWMjQ2LjEyNUwzODEuMzEyIDMwMC41MzFMNTA0LjkzNyAxNzYuOTA2TDQ1My41IDc0LjA2MlogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PHBhdGggZD0iTTExMy45MzggMzI4LjU2MkwxNjguOTY5IDUwMC40NjlMODMuMDk0IDQ1Ny41MzFDNzIuNTYyIDQ1Mi4yNSA1OS43MTkgNDM5LjQzNyA1NC40NjkgNDI4LjkwNkw2Ljc1IDMzMy41QzIuMzEyIDMyNC42MjUgMCAzMTQuODQ0IDAgMzA0Ljg3NVYyMTQuNjI1TDExMy45MzggMzI4LjU2MlpNMzY0LjU5NCAzMjguMTg4TDMwNS43NSA1MTJIMjA2LjIxOUwxNDcuNDA2IDMyOC4xODhMMjU2IDI3My44NzVMMzY0LjU5NCAzMjguMTg4Wk01MTIgMjE0LjYyNVYzMDQuOTA2QzUxMiAzMTMuMjUgNTA4Ljk2OSAzMjYuMDYyIDUwNS4yNSAzMzMuNTMxTDQ1Ny41MzEgNDI4LjkwNkM0NTIuMjgxIDQzOS40MzggNDM5LjQzOCA0NTIuMjgxIDQyOC45MDYgNDU3LjUzMUwzNDMuMDMxIDUwMC40NjlMMzk4LjA2MyAzMjguNTYyTDUxMiAyMTQuNjI1WiAiIGNsYXNzPSJmYS1wcmltYXJ5Ij48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function DiceD12(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M8 176.906L131.625 300.531L240.469 246.125V139.25L59.437 74.062L8 176.906ZM333.969 6.75C326.531 3.031 313.719 0 305.375 0H207.562C197.625 0 187.844 2.312 178.937 6.75L90.187 51.125L256.469 111L422.75 51.125L333.969 6.75ZM453.5 74.062L272.469 139.25V246.125L381.312 300.531L504.937 176.906L453.5 74.062Z " />
            <path d="M113.938 328.562L168.969 500.469L83.094 457.531C72.562 452.25 59.719 439.437 54.469 428.906L6.75 333.5C2.312 324.625 0 314.844 0 304.875V214.625L113.938 328.562ZM364.594 328.188L305.75 512H206.219L147.406 328.188L256 273.875L364.594 328.188ZM512 214.625V304.906C512 313.25 508.969 326.062 505.25 333.531L457.531 428.906C452.281 439.438 439.438 452.281 428.906 457.531L343.031 500.469L398.063 328.562L512 214.625Z " />
        </Icon>
    </>
}