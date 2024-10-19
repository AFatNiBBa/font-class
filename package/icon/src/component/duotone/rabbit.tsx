
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rabbit` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit?s=duotone rabbit}
 * @preview ![rabbit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3Ny41NjkgNDg3LjUyTDM4NC4wMDcgMzM3Ljg1VjI3MS45OTlIMzkxLjM1N0M0MjIuNjQ1IDI3Mi4wMTQgNDQ4LjAyIDI0Ni42NjIgNDQ4LjAzNCAyMTUuMzc1QzQ0OC4wNDMgMTk3LjA3IDQzOS4yMDUgMTc5Ljg4OCA0MjQuMzA4IDE2OS4yNDlMMzc1LjY1NyAxMzQuNDk5QzM3NC41NTcgMTMzLjk1OSAzNzMuMzg3IDEzMy43NTkgMzcyLjI3NyAxMzMuMjg5QzM4MC4wNzcgMTIwLjc5OSAzODcuNDg3IDEwMy41MjkgMzkyLjgxNyA4My42MjlDNDA0LjEzOCA0MS4zODkgNDAxLjg5OCA0LjA3OSAzODcuODE3IDAuMzA5UzM1My4xNDYgMjcuNzE5IDM0MS44MTYgNjkuOTk5QzMzOS4yMzEgNzkuNTY1IDMzNy4yOSA4OS4yOTQgMzM2LjAwNiA5OS4xMTlDMzM0LjczMyA4OS4yOTUgMzMyLjgwOSA3OS41NjcgMzMwLjI0NiA2OS45OTlDMzE4LjkxNSAyNy43MTkgMjk4LjMyNSAtMy40NjEgMjg0LjI0NSAwLjMwOUMyNzAuMTY0IDQuMDc5IDI2Ny45MjQgNDEuMzg5IDI3OS4yNDQgODMuNjI5QzI4Ni4xODUgMTA5LjUyOSAyOTYuNjE1IDEzMS4xNjkgMzA2Ljg4NSAxNDMuMjQ5QzI5Ny43NzUgMTUxLjE3OSAyOTAuOTg1IDE2MS43NDkgMjg4Ljg4NSAxNzQuNzk5QzI4OC4zMTcgMTc4LjE3IDI4OC4wMjIgMTgxLjU4MSAyODguMDA1IDE4NC45OTlWMjU1Ljk5OUgyNzQuMDA0QzE3NS42OTUgMjU1Ljk5OSA5NiAzMzUuNjkzIDk2IDQzNFY0NDZDOTYgNDgyLjQ1MSAxMjUuNTUgNTEyIDE2Mi4wMDIgNTEySDMwNC4wMDVDMzEyLjg0MiA1MTIgMzIwLjAwNiA1MDQuODM3IDMyMC4wMDYgNDk2VjQ4MEMzMjAuMDA2IDQ2Mi4zMjcgMzA1LjY3OCA0NDggMjg4LjAwNSA0NDhIMjY1LjQzNEwzMzkuNzg2IDM4Ny44Mkw0MTIuNjk4IDUwNC40OEM0MTUuNjIyIDUwOS4xNTkgNDIwLjc1MSA1MTIuMDAxIDQyNi4yNjggNTEySDQ2NC4wMDlDNDcyLjg0NiA1MTEuOTg1IDQ3OS45OTcgNTA0LjgwOSA0NzkuOTgxIDQ5NS45NzJDNDc5Ljk3NiA0OTIuOTgzIDQ3OS4xMzQgNDkwLjA1NSA0NzcuNTQ5IDQ4Ny41Mkg0NzcuNTY5Wk0zNjguMDA3IDIwNy45OTlDMzU5LjE3IDIwNy45OTkgMzUyLjAwNiAyMDAuODM2IDM1Mi4wMDYgMTkxLjk5OVMzNTkuMTcgMTc1Ljk5OSAzNjguMDA3IDE3NS45OTlTMzg0LjAwNyAxODMuMTYzIDM4NC4wMDcgMTkxLjk5OVMzNzYuODQzIDIwNy45OTkgMzY4LjAwNyAyMDcuOTk5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik05Ni4wMTkgNDM0Qzk2LjAwNyA0MTguODgyIDk3LjkxOSA0MDMuODI1IDEwMS43MDkgMzg5LjE5Qzc4LjA2MSAzNzcuMjA3IDQ5LjE3NyAzODYuNjYzIDM3LjE5NCA0MTAuMzFDMjUuMjExIDQzMy45NTcgMzQuNjY3IDQ2Mi44NCA1OC4zMTQgNDc0LjgyM0M3Mi4yMTYgNDgxLjg2NyA4OC42NzIgNDgxLjcyNCAxMDIuNDQ5IDQ3NC40NEM5OC4xOTggNDY1LjU2MyA5NiA0NTUuODQyIDk2LjAxOSA0NDZWNDM0Wk0zNjguMDI1IDE3NS45OTlDMzU5LjE4OCAxNzUuOTk5IDM1Mi4wMjUgMTgzLjE2MyAzNTIuMDI1IDE5MS45OTlTMzU5LjE4OCAyMDcuOTk5IDM2OC4wMjUgMjA3Ljk5OVMzODQuMDI2IDIwMC44MzYgMzg0LjAyNiAxOTEuOTk5UzM3Ni44NjIgMTc1Ljk5OSAzNjguMDI1IDE3NS45OTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rabbit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M477.569 487.52L384.007 337.85V271.999H391.357C422.645 272.014 448.02 246.662 448.034 215.375C448.043 197.07 439.205 179.888 424.308 169.249L375.657 134.499C374.557 133.959 373.387 133.759 372.277 133.289C380.077 120.799 387.487 103.529 392.817 83.629C404.138 41.389 401.898 4.079 387.817 0.309S353.146 27.719 341.816 69.999C339.231 79.565 337.29 89.294 336.006 99.119C334.733 89.295 332.809 79.567 330.246 69.999C318.915 27.719 298.325 -3.461 284.245 0.309C270.164 4.079 267.924 41.389 279.244 83.629C286.185 109.529 296.615 131.169 306.885 143.249C297.775 151.179 290.985 161.749 288.885 174.799C288.317 178.17 288.022 181.581 288.005 184.999V255.999H274.004C175.695 255.999 96 335.693 96 434V446C96 482.451 125.55 512 162.002 512H304.005C312.842 512 320.006 504.837 320.006 496V480C320.006 462.327 305.678 448 288.005 448H265.434L339.786 387.82L412.698 504.48C415.622 509.159 420.751 512.001 426.268 512H464.009C472.846 511.985 479.997 504.809 479.981 495.972C479.976 492.983 479.134 490.055 477.549 487.52H477.569ZM368.007 207.999C359.17 207.999 352.006 200.836 352.006 191.999S359.17 175.999 368.007 175.999S384.007 183.163 384.007 191.999S376.843 207.999 368.007 207.999Z" />
            <path d="M96.019 434C96.007 418.882 97.919 403.825 101.709 389.19C78.061 377.207 49.177 386.663 37.194 410.31C25.211 433.957 34.667 462.84 58.314 474.823C72.216 481.867 88.672 481.724 102.449 474.44C98.198 465.563 96 455.842 96.019 446V434ZM368.025 175.999C359.188 175.999 352.025 183.163 352.025 191.999S359.188 207.999 368.025 207.999S384.026 200.836 384.026 191.999S376.862 175.999 368.025 175.999Z" />
        </Icon>
    </>
}