
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plane-departure` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plane-departure?s=regular plane-departure}
 * @preview ![plane-departure](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTUuOTg5IDQ2NC4wMDFIMjQuMDIzQzEwLjc2OSA0NjQuMDAxIDAuMDI0IDQ3NC43NDYgMC4wMjQgNDg4LjAwMVY0ODguMDAxQzAuMDI0IDUwMS4yNTUgMTAuNzY5IDUxMiAyNC4wMjMgNTEySDYxNS45ODlDNjI5LjI0MyA1MTIgNjM5Ljk4NyA1MDEuMjU1IDYzOS45ODcgNDg4LjAwMVY0ODguMDAxQzYzOS45ODcgNDc0Ljc0NiA2MjkuMjQzIDQ2NC4wMDEgNjE1Ljk4OSA0NjQuMDAxWk03NC42NDUgMzY3Ljc1M0M4My43NjkgMzc4LjEyOCA5Ni44OTQgMzg0LjAwMyAxMTAuNjQzIDM4NC4wMDNIMTEwLjg5M0wyMzUuMTM2IDM4My41MDNDMjQ3LjEzNSAzODMuNTAzIDI1OS4yNTkgMzgwLjM3OCAyNzAuMjU5IDM3NC42MjhMNTUwLjQ5MyAyMjYuNzU2QzU4MC40OTEgMjEwLjg4MiA2MDQuODY1IDE4OC42MzIgNjIwLjk4OSAxNjIuNjMzQzY0MC40ODcgMTMxLjEzNCA2NDQuOTg3IDEwNC4xMzQgNjM0LjQ4OCA4Mi4xMzVDNjI0LjExMyA2MC4zODUgNjAwLjk5IDQ4LjEzNiA1NjUuNzQyIDQ1Ljc2MUM1NjIuNDkyIDQ1LjUxMSA1NTkuMjQyIDQ1LjM4NiA1NTUuOTkyIDQ1LjM4NkM1MjkuMjQ0IDQ1LjM4NiA1MDEuODcgNTIuNjM1IDQ3NC44NzIgNjYuODg1TDM4Ni4yNTIgMTEzLjc1OUwzODUuODc3IDExMy44ODRMMzg1LjUwMiAxMTMuNzU5TDE4NC41MTQgMzUuMjYxQzE3MS41MTQgMzAuMjYxIDE1Ny4wMTUgMzEuMDExIDE0NC42NDEgMzcuNTExTDEwOC43NjggNTYuNTFDOTMuNjQ0IDY0LjUxIDg0LjAxOSA3OS43NiA4My4xNDQgOTYuNzU5QzgyLjM5NCAxMTMuNzU5IDkwLjY0NCAxMjkuODg0IDEwNC44OTMgMTM5LjEzM0wyMDguNzYyIDIwNy4wMDdMMjA5LjEzNyAyMDcuMjU3TDIwOC43NjIgMjA3LjM4MkwxNDEuODkxIDI0Mi42MzFMMTQxLjUxNiAyNDIuODgxTDE0MS4xNDEgMjQyLjYzMUw4Ni41MTkgMjE0LjAwN0M3OS42NDUgMjEwLjM4MiA3MS44OTUgMjA4LjUwNyA2NC4xNDUgMjA4LjUwN0M1Ni41MjEgMjA4LjUwNyA0OC43NzEgMjEwLjM4MiA0MS43NzIgMjE0LjEzMkwyNS42NDggMjIyLjYzMkMxMi42NDggMjI5LjUwNiAzLjM5OSAyNDIuMDA2IDAuNzc0IDI1Ni4zODFDLTEuODUxIDI3MC44OCAyLjI3NCAyODUuNzU1IDEyLjAyMyAyOTYuODhMNzQuNjQ1IDM2Ny43NTNaTTY0LjE0NSAyNTYuNTA2TDE0MS42NDEgMjk3LjEzTDMwMy42MzIgMjExLjYzMkwxMzEuMTQyIDk5LjAwOUwxNjcuMDE1IDgwLjAxTDM4OC44NzcgMTY2LjYzM0w0OTcuMzcxIDEwOS4zODRDNTE3LjM3IDk4Ljc1OSA1MzcuMTE4IDkzLjM4NCA1NTUuOTkyIDkzLjM4NEM1NTguMTE3IDkzLjM4NCA1NjAuMzY3IDkzLjUwOSA1NjIuNDkyIDkzLjYzNEM1NzcuNDkxIDk0LjYzNCA1ODguOTkgOTguMjU5IDU5MS4yNCAxMDIuODg0QzU5My4yNCAxMDcuMjU5IDU5MS42MTUgMTE4Ljg4NCA1ODAuMjQxIDEzNy4zODNDNTY4LjYxNyAxNTYuMTMzIDU1MC40OTMgMTcyLjM4MyA1MjcuOTk0IDE4NC4yNTdMMjQ3Ljc2IDMzMi4yNTRDMjQzLjc2IDMzNC4zNzkgMjM5LjI2IDMzNS41MDQgMjM0Ljg4NiAzMzUuNTA0TDExMC42NDMgMzM2LjAwNEw0OC4wMjEgMjY1LjAwNkw2NC4xNDUgMjU2LjUwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PlaneDeparture(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M615.989 464.001H24.023C10.769 464.001 0.024 474.746 0.024 488.001V488.001C0.024 501.255 10.769 512 24.023 512H615.989C629.243 512 639.987 501.255 639.987 488.001V488.001C639.987 474.746 629.243 464.001 615.989 464.001ZM74.645 367.753C83.769 378.128 96.894 384.003 110.643 384.003H110.893L235.136 383.503C247.135 383.503 259.259 380.378 270.259 374.628L550.493 226.756C580.491 210.882 604.865 188.632 620.989 162.633C640.487 131.134 644.987 104.134 634.488 82.135C624.113 60.385 600.99 48.136 565.742 45.761C562.492 45.511 559.242 45.386 555.992 45.386C529.244 45.386 501.87 52.635 474.872 66.885L386.252 113.759L385.877 113.884L385.502 113.759L184.514 35.261C171.514 30.261 157.015 31.011 144.641 37.511L108.768 56.51C93.644 64.51 84.019 79.76 83.144 96.759C82.394 113.759 90.644 129.884 104.893 139.133L208.762 207.007L209.137 207.257L208.762 207.382L141.891 242.631L141.516 242.881L141.141 242.631L86.519 214.007C79.645 210.382 71.895 208.507 64.145 208.507C56.521 208.507 48.771 210.382 41.772 214.132L25.648 222.632C12.648 229.506 3.399 242.006 0.774 256.381C-1.851 270.88 2.274 285.755 12.023 296.88L74.645 367.753ZM64.145 256.506L141.641 297.13L303.632 211.632L131.142 99.009L167.015 80.01L388.877 166.633L497.371 109.384C517.37 98.759 537.118 93.384 555.992 93.384C558.117 93.384 560.367 93.509 562.492 93.634C577.491 94.634 588.99 98.259 591.24 102.884C593.24 107.259 591.615 118.884 580.241 137.383C568.617 156.133 550.493 172.383 527.994 184.257L247.76 332.254C243.76 334.379 239.26 335.504 234.886 335.504L110.643 336.004L48.021 265.006L64.145 256.506Z" />
        </Icon>
    </>
}