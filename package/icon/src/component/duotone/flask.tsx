
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=duotone flask}
 * @preview ![flask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzNy4yMyA0MDMuNUwzMTkuOTkyIDIxNVY2NEgzMjcuOTkyQzM0MS4yMzggNjQgMzUxLjk4OCA1My4yNSAzNTEuOTg4IDQwVjI0QzM1MS45ODggMTAuNzUgMzQxLjIzOCAwIDMyNy45OTIgMEgxMjAuMDA3QzEwNi43NjEgMCA5Ni4wMTEgMTAuNzUgOTYuMDExIDI0VjQwQzk2LjAxMSA1My4yNSAxMDYuNzYxIDY0IDEyMC4wMDcgNjRIMTI4LjAwN1YyMTVMMTAuNzY5IDQwMy41Qy0xOC40ODEgNDUwLjYyNSAxNS4yNjkgNTEyIDcwLjg4NiA1MTJIMzc3LjExM0M0MzIuNzMgNTEyIDQ2Ni40OCA0NTAuNSA0MzcuMjMgNDAzLjVaTTM3Ny4xMTMgNDQ4SDcwLjg4NkM2NS4zNTEgNDQ4IDYyLjMyMSA0NDEuODEzIDY1LjExNyA0MzcuMzAxTDE5Mi4wMDcgMjMzLjI3N1Y2NEgyNTUuOTkyVjIzMy4yNzdMMzgyLjg5NCA0MzcuMzE2QzM4NS42ODkgNDQxLjgxOCAzODIuNTYyIDQ0OCAzNzcuMTEzIDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTM4LjAxMSAzMjBIMzA5Ljg3MUwzODIuODM1IDQzNy4zMTZDMzg1LjYyOCA0NDEuODE2IDM4Mi41MDMgNDQ4IDM3Ny4wNTQgNDQ4SDcwLjgyOEM2NS4yOTIgNDQ4IDYyLjI2MSA0NDEuODEyIDY1LjA1OCA0MzcuMzAxTDEzOC4wMTEgMzIwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Flask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M437.23 403.5L319.992 215V64H327.992C341.238 64 351.988 53.25 351.988 40V24C351.988 10.75 341.238 0 327.992 0H120.007C106.761 0 96.011 10.75 96.011 24V40C96.011 53.25 106.761 64 120.007 64H128.007V215L10.769 403.5C-18.481 450.625 15.269 512 70.886 512H377.113C432.73 512 466.48 450.5 437.23 403.5ZM377.113 448H70.886C65.351 448 62.321 441.813 65.117 437.301L192.007 233.277V64H255.992V233.277L382.894 437.316C385.689 441.818 382.562 448 377.113 448Z" />
            <path d="M138.011 320H309.871L382.835 437.316C385.628 441.816 382.503 448 377.054 448H70.828C65.292 448 62.261 441.812 65.058 437.301L138.011 320Z" />
        </Icon>
    </>
}