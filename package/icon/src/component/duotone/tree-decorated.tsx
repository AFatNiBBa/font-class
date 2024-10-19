
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree-decorated` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=duotone tree-decorated}
 * @preview ![tree-decorated](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3MS42MzcgNDU1LjYyNkwzODEuNzY5IDM1Mi4wMDFINDE3Ljc2NkM0NDMuMzg5IDM1Mi4wMDEgNDU3LjI2MyAzMjIuNzUxIDQ0MS4wMTQgMzAzLjUwMUwzNDYuMTQ3IDE5Mi4wMDFIMzkwLjg5M0M0MTIuMjY3IDE5Mi4wMDEgNDIzLjc2NiAxNjkuNTAxIDQxMC4yNjcgMTU0Ljc1MUwyNzUuMjc4IDguMjUxQzI2NS4yNzkgLTIuNzQ5IDI0Ni43OCAtMi43NDkgMjM2Ljc4MSA4LjI1MUwxMDEuOTE3IDE1NC43NTFDODguMjkzIDE2OS41MDEgOTkuOTE3IDE5Mi4wMDEgMTIxLjI5IDE5Mi4wMDFIMTY2LjAzN0w3MS4wNDQgMzAzLjUwMUM1NC43OTYgMzIyLjc1MSA2OC42NyAzNTIuMDAxIDk0LjI5MyAzNTIuMDAxSDEzMC4yOUw0MC40MjIgNDU1LjYyNkMyMS40MjMgNDc3LjUwMSAzNi42NzIgNTEyLjAwMSA2NS4xNyA1MTIuMDAxSDQ0Ni43NjRDNDc1LjM4NyA1MTIuMDAxIDQ5MC41MSA0NzcuMzc2IDQ3MS42MzcgNDU1LjYyNlpNMTkyIDMxMi4wMDFDMTc4Ljc1MSAzMTIuMDAxIDE2OC4wMDIgMzAxLjI1MSAxNjguMDAyIDI4OC4wMDFTMTc4Ljc1MSAyNjQuMDAxIDE5MiAyNjQuMDAxQzIwNS4yNDkgMjY0LjAwMSAyMTUuOTk4IDI3NC43NTEgMjE1Ljk5OCAyODguMDAxUzIwNS4yNDkgMzEyLjAwMSAxOTIgMzEyLjAwMVpNMjY0LjAwMiAxNjAuMDAxQzI2NC4wMDIgMTQ2Ljc1MSAyNzQuNzUxIDEzNi4wMDEgMjg4IDEzNi4wMDFTMzExLjk5OCAxNDYuNzUxIDMxMS45OTggMTYwLjAwMVMzMDEuMjQ5IDE4NC4wMDEgMjg4IDE4NC4wMDFTMjY0LjAwMiAxNzMuMjUxIDI2NC4wMDIgMTYwLjAwMVpNMzIwIDQ0MC4wMDFDMzA2Ljc1MSA0NDAuMDAxIDI5Ni4wMDIgNDI5LjI1MSAyOTYuMDAyIDQxNi4wMDFTMzA2Ljc1MSAzOTIuMDAxIDMyMCAzOTIuMDAxUzM0My45OTggNDAyLjc1MSAzNDMuOTk4IDQxNi4wMDFTMzMzLjI0OSA0NDAuMDAxIDMyMCA0NDAuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTEuOTk2IDE2MEMzMTEuOTk2IDE0Ni43NSAzMDEuMjQ2IDEzNiAyODcuOTk4IDEzNlMyNjQgMTQ2Ljc1IDI2NCAxNjBTMjc0Ljc1IDE4NCAyODcuOTk4IDE4NFMzMTEuOTk2IDE3My4yNSAzMTEuOTk2IDE2MFpNMzE5Ljk5OCAzOTJDMzA2Ljc1IDM5MiAyOTYgNDAyLjc1IDI5NiA0MTZTMzA2Ljc1IDQ0MCAzMTkuOTk4IDQ0MFMzNDMuOTk2IDQyOS4yNSAzNDMuOTk2IDQxNlMzMzMuMjQ2IDM5MiAzMTkuOTk4IDM5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TreeDecorated(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M471.637 455.626L381.769 352.001H417.766C443.389 352.001 457.263 322.751 441.014 303.501L346.147 192.001H390.893C412.267 192.001 423.766 169.501 410.267 154.751L275.278 8.251C265.279 -2.749 246.78 -2.749 236.781 8.251L101.917 154.751C88.293 169.501 99.917 192.001 121.29 192.001H166.037L71.044 303.501C54.796 322.751 68.67 352.001 94.293 352.001H130.29L40.422 455.626C21.423 477.501 36.672 512.001 65.17 512.001H446.764C475.387 512.001 490.51 477.376 471.637 455.626ZM192 312.001C178.751 312.001 168.002 301.251 168.002 288.001S178.751 264.001 192 264.001C205.249 264.001 215.998 274.751 215.998 288.001S205.249 312.001 192 312.001ZM264.002 160.001C264.002 146.751 274.751 136.001 288 136.001S311.998 146.751 311.998 160.001S301.249 184.001 288 184.001S264.002 173.251 264.002 160.001ZM320 440.001C306.751 440.001 296.002 429.251 296.002 416.001S306.751 392.001 320 392.001S343.998 402.751 343.998 416.001S333.249 440.001 320 440.001Z" />
            <path d="M311.996 160C311.996 146.75 301.246 136 287.998 136S264 146.75 264 160S274.75 184 287.998 184S311.996 173.25 311.996 160ZM319.998 392C306.75 392 296 402.75 296 416S306.75 440 319.998 440S343.996 429.25 343.996 416S333.246 392 319.998 392Z" />
        </Icon>
    </>
}