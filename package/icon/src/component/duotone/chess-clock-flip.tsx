
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-clock-flip` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=duotone chess-clock-flip}
 * @preview ![chess-clock-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2Ny44NzUgMjI0LjEyNUg0NTkuODc1QzQ1My4yNSAyMjQuMTI1IDQ0Ny44NzUgMjI5LjUgNDQ3Ljg3NSAyMzYuMTI1VjMwOC4xMjVDNDQ3Ljg3NSAzMTQuNzUgNDUzLjI1IDMyMC4xMjUgNDU5Ljg3NSAzMjAuMTI1SDQ2Ny44NzVDNDc0LjUgMzIwLjEyNSA0NzkuODc1IDMxNC43NSA0NzkuODc1IDMwOC4xMjVWMjM2LjEyNUM0NzkuODc1IDIzMyA0NzguNjI1IDIyOS44NzUgNDc2LjI1IDIyNy42MjVDNDczLjk5OSAyMjUuMzc1IDQ3MSAyMjQuMTI1IDQ2Ny44NzUgMjI0LjEyNVpNMjMxLjEyNSAyNDNDMjI4Ljg3NSAyNDAuNzUgMjI1Ljc1IDIzOS41IDIyMi42MjUgMjM5LjVDMjE5LjM3NSAyMzkuNSAyMTYuMzc1IDI0MC43NSAyMTQuMTI1IDI0M0wxNjMuMjUgMjkzLjg3NUMxNjEgMjk2LjEyNSAxNTkuNzUgMjk5LjI1IDE1OS43NSAzMDIuMzc1QzE1OS43NSAzMDUuNjI1IDE2MSAzMDguNjI1IDE2My4yNSAzMTAuODc1TDE2OC44NzUgMzE2LjVDMTcxLjEyNSAzMTguNzUgMTc0LjI1IDMyMC4xMjUgMTc3LjM3NSAzMjAuMTI1QzE4MC42MjUgMzIwLjEyNSAxODMuNjI1IDMxOC43NSAxODUuODc1IDMxNi41TDIzNi43NSAyNjUuNjI1QzIzOSAyNjMuMzc1IDI0MC4yNSAyNjAuMzc1IDI0MC4yNSAyNTcuMTI1QzI0MC4yNSAyNTQgMjM5IDI1MC44NzUgMjM2Ljc1IDI0OC42MjVMMjMxLjEyNSAyNDNaTTUyNy44NzUgMzJIMzk5Ljg3NUMzOTEgMzIgMzgzLjg3NSAzOS4xMjUgMzgzLjg3NSA0OFY2NEMzODMuODc1IDcyLjc1IDM5MSA4MCAzOTkuODc1IDgwSDQzOS43NVYxMjhINDg3Ljc1VjgwSDUyNy44NzVDNTM2Ljc1IDgwIDU0My44NzUgNzIuNzUgNTQzLjg3NSA2NFY0OEM1NDMuODc1IDM5LjEyNSA1MzYuNzUgMzIgNTI3Ljg3NSAzMlpNMjQwIDk2SDExMkMxMDMuMTI1IDk2IDk2IDEwMy4xMjUgOTYgMTEyVjEyOEgyNTZWMTEyQzI1NiAxMDMuMTI1IDI0OC43NSA5NiAyNDAgOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYwMCAxMjhINDBDMTcuODc1IDEyOC4xMjUgMCAxNDYgMCAxNjguMTI1VjQ0MEMwIDQ2Mi4xMjUgMTcuODc1IDQ4MCA0MCA0ODBINjAwQzYyMi4xMjUgNDgwIDY0MCA0NjIuMTI1IDY0MCA0NDBWMTY4LjEyNUM2NDAgMTQ2IDYyMi4xMjUgMTI4LjEyNSA2MDAgMTI4Wk0xNzUuODc1IDQxNkMxMTQuMTI1IDQxNiA2My44NzUgMzY1Ljg3NSA2My44NzUgMzA0QzY0IDI0Mi4xMjUgMTE0LjEyNSAxOTIgMTc2IDE5MkMyMzcuODc1IDE5Mi4xMjUgMjg4IDI0Mi4yNSAyODcuODc1IDMwNC4xMjVDMjg3Ljg3NSAzNjYgMjM3Ljc1IDQxNiAxNzUuODc1IDQxNlpNNDYzLjg3NSA0MTZDNDAxLjk5OSA0MTYgMzUxLjc1IDM2NS44NzUgMzUxLjg3NSAzMDRDMzUxLjg3NSAyNDIuMTI1IDQwMS45OTkgMTkyIDQ2My44NzUgMTkyQzUyNS43NSAxOTIuMTI1IDU3NS44NzUgMjQyLjI1IDU3NS44NzUgMzA0LjEyNUM1NzUuNzUgMzY2IDUyNS42MjUgNDE2IDQ2My44NzUgNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessClockFlip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M467.875 224.125H459.875C453.25 224.125 447.875 229.5 447.875 236.125V308.125C447.875 314.75 453.25 320.125 459.875 320.125H467.875C474.5 320.125 479.875 314.75 479.875 308.125V236.125C479.875 233 478.625 229.875 476.25 227.625C473.999 225.375 471 224.125 467.875 224.125ZM231.125 243C228.875 240.75 225.75 239.5 222.625 239.5C219.375 239.5 216.375 240.75 214.125 243L163.25 293.875C161 296.125 159.75 299.25 159.75 302.375C159.75 305.625 161 308.625 163.25 310.875L168.875 316.5C171.125 318.75 174.25 320.125 177.375 320.125C180.625 320.125 183.625 318.75 185.875 316.5L236.75 265.625C239 263.375 240.25 260.375 240.25 257.125C240.25 254 239 250.875 236.75 248.625L231.125 243ZM527.875 32H399.875C391 32 383.875 39.125 383.875 48V64C383.875 72.75 391 80 399.875 80H439.75V128H487.75V80H527.875C536.75 80 543.875 72.75 543.875 64V48C543.875 39.125 536.75 32 527.875 32ZM240 96H112C103.125 96 96 103.125 96 112V128H256V112C256 103.125 248.75 96 240 96Z" />
            <path d="M600 128H40C17.875 128.125 0 146 0 168.125V440C0 462.125 17.875 480 40 480H600C622.125 480 640 462.125 640 440V168.125C640 146 622.125 128.125 600 128ZM175.875 416C114.125 416 63.875 365.875 63.875 304C64 242.125 114.125 192 176 192C237.875 192.125 288 242.25 287.875 304.125C287.875 366 237.75 416 175.875 416ZM463.875 416C401.999 416 351.75 365.875 351.875 304C351.875 242.125 401.999 192 463.875 192C525.75 192.125 575.875 242.25 575.875 304.125C575.75 366 525.625 416 463.875 416Z" />
        </Icon>
    </>
}