
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `h2` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=duotone h2}
 * @preview ![h2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAxMDRWNDA4QzMyMCA0MzAuMDk0IDMwMi4wOTQgNDQ4IDI4MCA0NDhTMjQwIDQzMC4wOTQgMjQwIDQwOFYyOTZIODBWNDA4QzgwIDQzMC4wOTQgNjIuMDk0IDQ0OCA0MCA0NDhTMCA0MzAuMDk0IDAgNDA4VjEwNEMwIDgxLjkwNiAxNy45MDYgNjQgNDAgNjRTODAgODEuOTA2IDgwIDEwNFYyMTZIMjQwVjEwNEMyNDAgODEuOTA2IDI1Ny45MDYgNjQgMjgwIDY0UzMyMCA4MS45MDYgMzIwIDEwNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjAwLjAwMSA0NDhINDA4LjAwNUMzOTEuNjkzIDQ0OCAzNzcuMDIxIDQzOC4wOTQgMzcwLjkxMiA0MjIuOTdDMzY0LjgwMyA0MDcuODQ1IDM2OC40OSAzOTAuNTM0IDM4MC4yNCAzNzkuMjIyTDUyNy4zMzEgMjM3LjM1MkM1NDguMTQzIDIxNy44ODQgNTUwLjUwMiAxODQuMjYxIDUzMy4wNDkgMTYxLjk4QzUyNC44MzEgMTUxLjQ1IDUxMy40NzIgMTQ1LjEwNiA1MDEuMDk3IDE0NC4xMzdDNDg5LjA4MSAxNDMuMiA0NzcuMyAxNDcuNDUgNDY3Ljk4OCAxNTYuMTY4TDQ0NS45ODkgMTc2LjY2N0M0MjkuODE3IDE5MS43MjkgNDA0LjQ5IDE5MC44MjMgMzg5LjQ1OSAxNzQuNjk5QzM3NC4zODEgMTU4LjU0MyAzNzUuMjcxIDEzMy4yMzIgMzkxLjQyNyAxMTguMTdMNDEzLjQxMSA5Ny42N0M0MzkuMzE3IDczLjQ4NCA0NzIuNTUxIDYxLjY0MSA1MDcuMzQ3IDY0LjM5MUM1NDEuODYyIDY3LjEwOSA1NzQuMTg5IDg0LjcwMiA1OTYuMDc5IDExMi43MDFDNjM5LjEyNSAxNjcuNzMgNjMzLjEyNSAyNDcuOTc3IDU4Mi40MDggMjk1LjM1TDUwNy4wOTcgMzY4LjAwM0g2MDAuMDAxQzYyMi4wOTQgMzY4LjAwMyA2NDAgMzg1LjkwOSA2NDAgNDA4LjAwMlM2MjIuMDk0IDQ0OCA2MDAuMDAxIDQ0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function H2(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M320 104V408C320 430.094 302.094 448 280 448S240 430.094 240 408V296H80V408C80 430.094 62.094 448 40 448S0 430.094 0 408V104C0 81.906 17.906 64 40 64S80 81.906 80 104V216H240V104C240 81.906 257.906 64 280 64S320 81.906 320 104Z" />
            <path d="M600.001 448H408.005C391.693 448 377.021 438.094 370.912 422.97C364.803 407.845 368.49 390.534 380.24 379.222L527.331 237.352C548.143 217.884 550.502 184.261 533.049 161.98C524.831 151.45 513.472 145.106 501.097 144.137C489.081 143.2 477.3 147.45 467.988 156.168L445.989 176.667C429.817 191.729 404.49 190.823 389.459 174.699C374.381 158.543 375.271 133.232 391.427 118.17L413.411 97.67C439.317 73.484 472.551 61.641 507.347 64.391C541.862 67.109 574.189 84.702 596.079 112.701C639.125 167.73 633.125 247.977 582.408 295.35L507.097 368.003H600.001C622.094 368.003 640 385.909 640 408.002S622.094 448 600.001 448Z" />
        </Icon>
    </>
}