
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rotate-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=duotone rotate-left}
 * @preview ![rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk4IDc1Ljc5NkMxNDEuNzg1IDM3LjI2MiAxOTcuMjY0IDE2LjAwMSAyNTYuMTA3IDE2LjAwMUMzMjAuMjAzIDE2LjAwMSAzODAuNDg3IDQwLjk2OSA0MjUuODAyIDg2LjMxM0M0NzEuMTQ4IDEzMS42MjYgNDk2LjExNyAxOTEuOTA3IDQ5Ni4xMTcgMjU2LjAwMVM0NzEuMTQ4IDM4MC4zNzYgNDI1LjgwMiA0MjUuNjg4QzM4MC40ODcgNDcxLjAzMiAzMjAuMjAzIDQ5Ni4wMDEgMjU2LjEwNyA0OTYuMDAxQzIxMS45NjYgNDk2LjAwMSAxNjkuNjM0IDQ4NC4xNTkgMTMyLjc1NCA0NjEuOTc3QzEwNi40NDUgNDQ2LjE1NCAxMDIuOTg5IDQwOS4xMTEgMTI0LjY5OCAzODcuNDAzTDEyNC42OTkgMzg3LjQwM0MxMzkuODQyIDM3Mi4yNiAxNjMuNTMyIDM2OC4zNzkgMTgxLjg2MyAzNzkuNDUzQzIwNC4wNDEgMzkyLjg1MiAyMjkuNTIyIDQwMC4wMDEgMjU2LjEwNyA0MDAuMDAxQzI5NC41NzcgNDAwLjAwMSAzMzAuNzM1IDM4NS4wMzIgMzU3LjkyNCAzNTcuODEzQzM4NS4xNDQgMzMwLjYyNiA0MDAuMTEzIDI5NC40NjkgNDAwLjExMyAyNTYuMDAxUzM4NS4xNDQgMTgxLjM3NiAzNTcuOTI0IDE1NC4xODhDMzMwLjczNSAxMjYuOTY5IDI5NC41NzcgMTEyLjAwMSAyNTYuMTA3IDExMi4wMDFDMjIyLjkzNSAxMTIuMDAxIDE5MS44NiAxMjMuNzE1IDE2Ni4zOTQgMTQ0LjIzMUw5OCA3NS43OTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYyLjA3IDM5Ljk2MkwyMDAuMDI4IDE3OC4wMDNDMjE3LjAzNCAxOTUuMDIgMjA0Ljk4MSAyMjQuMTA0IDE4MC45MjEgMjI0LjEwNEgzNS4xNzVDMjQuNTg0IDIyNC4xMDQgMTYgMjE1LjUyIDE2IDIwNC45M1Y1OS4wMzZDMTYgMzQuOTkxIDQ1LjA3NCAyMi45NTYgNjIuMDcgMzkuOTYyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RotateLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M98 75.796C141.785 37.262 197.264 16.001 256.107 16.001C320.203 16.001 380.487 40.969 425.802 86.313C471.148 131.626 496.117 191.907 496.117 256.001S471.148 380.376 425.802 425.688C380.487 471.032 320.203 496.001 256.107 496.001C211.966 496.001 169.634 484.159 132.754 461.977C106.445 446.154 102.989 409.111 124.698 387.403L124.699 387.403C139.842 372.26 163.532 368.379 181.863 379.453C204.041 392.852 229.522 400.001 256.107 400.001C294.577 400.001 330.735 385.032 357.924 357.813C385.144 330.626 400.113 294.469 400.113 256.001S385.144 181.376 357.924 154.188C330.735 126.969 294.577 112.001 256.107 112.001C222.935 112.001 191.86 123.715 166.394 144.231L98 75.796Z" />
            <path d="M62.07 39.962L200.028 178.003C217.034 195.02 204.981 224.104 180.921 224.104H35.175C24.584 224.104 16 215.52 16 204.93V59.036C16 34.991 45.074 22.956 62.07 39.962Z" />
        </Icon>
    </>
}