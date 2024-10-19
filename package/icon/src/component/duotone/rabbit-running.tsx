
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rabbit-running` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit-running?s=duotone rabbit-running}
 * @preview ![rabbit-running](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2Ny4wMzcgNDEyLjY3OEMxNjIuMzY0IDQxNS42MDcgMTU5LjUyOSA0MjAuNzM1IDE1OS41MzQgNDI2LjI0OFY0NjMuOTk4QzE1OS41MzMgNDcyLjgzNSAxNjYuNjk5IDQ3OS45OTkgMTc1LjUzOSA0ODBDMTc4LjU0IDQ4MCAxODEuNDggNDc5LjE1OCAxODQuMDI1IDQ3Ny41NjhMMjUwLjc0NCA0MzcuNjk4TDIwMi44ODMgMzg5Ljg0OEwxNjcuMDM3IDQxMi42NzhaTTU4My45OSAyMTcuMjU4TDUyNy41NDYgMTgyLjYzOUM1MjcuNDg2IDE2OC42ODkgNTI1LjI1NSAxNTEuODY5IDUyMC40NjIgMTMzLjk2OUM1MDkuMTQ3IDkxLjcyOSA0ODguNTQ4IDYwLjUzOSA0NzQuNDQyIDY0LjMwOUM0NjAuMzM2IDY4LjA3OSA0NTguMTA1IDEwNS4zODkgNDY5LjQ0IDE0Ny42MjlDNDcwLjA5IDE1MC4wNjkgNDcwLjg4MSAxNTIuMzI5IDQ3MS41OTEgMTU0LjY4OUM0NjYuNDg2IDE0OC4yOSA0NjEuMDM2IDE0Mi4xNzQgNDU1LjI2NCAxMzYuMzY5QzQyNC4zNSAxMDUuNDQ5IDM5MC45MDYgODguNzI5IDM4MC42MzEgOTguOTk5UzM4Ny4wNDQgMTQyLjcyOSA0MTcuOTc3IDE3My42NTlDNDI5LjIwOSAxODUuMDU4IDQ0MS43NzkgMTk1LjA1NyA0NTUuNDE0IDIwMy40MzhDNDUyLjAzMSAyMDkuNDM3IDQ0OS43MDIgMjE1Ljk3MiA0NDguNTMxIDIyMi43NThDNDQ4LjA1MSAyMjUuODM5IDQ0Ny44IDIyOC45NTEgNDQ3Ljc4MSAyMzIuMDY4QzM5Ni4xNzggMTk1LjExOCAyOTMuMTgzIDEyNy45OTkgMjIzLjU2MiAxMjcuOTk5QzE3NS4wMSAxMjcuOTk5IDEzMS4xMjkgMTU2LjkyMSAxMTIuMDAzIDIwMS41MjlDMTAyLjA0MiAyMjQuNzYgMTA3LjIzMiAyNTEuNzEzIDEyNS4xMDkgMjY5LjU4OEwyOTEuMDAyIDQzNS40MDhDMjk5LjA2OSA0NDMuNDY5IDMxMC4wMDggNDQ3Ljk5OCAzMjEuNDE1IDQ0Ny45OThINDYzLjY2N0M0NzIuNTA4IDQ0Ny45OTggNDc5LjY3NSA0NDAuODM1IDQ3OS42NzUgNDMxLjk5OFY0MTUuOTk4QzQ3OS42NzUgMzk4LjMyNSA0NjUuMzQxIDM4My45OTggNDQ3LjY2IDM4My45OThIMzUxLjYxOFYzMjguNDE4QzM1MS41MTUgMjkyLjc0NCAzMjcuODc5IDI2MS40MTUgMjkzLjU5MyAyNTEuNTA4TDI1MS4xNzQgMjM5LjM5OEMyNDIuNjcxIDIzNi45NzQgMjM3Ljc0NCAyMjguMTE4IDI0MC4xNjkgMjE5LjYxOEMyNDIuNTk1IDIxMS4xMTkgMjUxLjQ1NSAyMDYuMTk0IDI1OS45NTggMjA4LjYxOEwzMDIuMzY3IDIyMC43MjhDMzUwLjM3NyAyMzQuNiAzODMuNDc4IDI3OC40NjUgMzgzLjYzMiAzMjguNDE4VjM1MS45OThMNDQ3LjY2IDMxOS45OThINTUxLjAzNkM1ODIuMzQyIDMxOS45OSA2MDcuNzE0IDI5NC42MTUgNjA3LjcwNSAyNjMuMzIzQzYwNy43IDI0NS4wNCA1OTguODY5IDIyNy44ODMgNTgzLjk5IDIxNy4yNDhWMjE3LjI1OFpNNTI3LjY5NiAyNTUuOTk4QzUxOC44NTUgMjU1Ljk5OCA1MTEuNjg5IDI0OC44MzUgNTExLjY4OSAyMzkuOTk4UzUxOC44NTUgMjIzLjk5OCA1MjcuNjk2IDIyMy45OThDNTM2LjUzNiAyMjMuOTk4IDU0My43MDMgMjMxLjE2MiA1NDMuNzAzIDIzOS45OThTNTM2LjUzNiAyNTUuOTk4IDUyNy42OTYgMjU1Ljk5OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDkuMjQgMTcwLjkzOUMyOC44ODQgMTg3LjkzMSAyNi4xNjQgMjE4LjIwMSA0My4xNjQgMjM4LjU0OEM2MC4wMTcgMjU4LjcxOCA4OS45NjIgMjYxLjU5MyAxMTAuMzQ3IDI0NC45OThDMTA1LjY5NCAyMzAuNzQyIDEwNi4zODcgMjE1LjI4MSAxMTIuMjk4IDIwMS40OTlDMTE0Ljg4OCAxOTUuNDc4IDExNy45NTkgMTg5LjY3NiAxMjEuNDgyIDE4NC4xNDlDMTIwLjEyMyAxODEuNzc3IDExOC41NiAxNzkuNTI4IDExNi44MSAxNzcuNDI5Qzk5LjkzOCAxNTYuOTk3IDY5LjY5NiAxNTQuMDkzIDQ5LjI0IDE3MC45MzlWMTcwLjkzOVpNNTI3Ljk5IDIyMy45OThDNTE5LjE1IDIyMy45OTggNTExLjk4MyAyMzEuMTYyIDUxMS45ODMgMjM5Ljk5OFM1MTkuMTUgMjU1Ljk5OCA1MjcuOTkgMjU1Ljk5OEM1MzYuODMxIDI1NS45OTggNTQzLjk5NyAyNDguODM1IDU0My45OTcgMjM5Ljk5OFM1MzYuODMxIDIyMy45OTggNTI3Ljk5IDIyMy45OThaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RabbitRunning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M167.037 412.678C162.364 415.607 159.529 420.735 159.534 426.248V463.998C159.533 472.835 166.699 479.999 175.539 480C178.54 480 181.48 479.158 184.025 477.568L250.744 437.698L202.883 389.848L167.037 412.678ZM583.99 217.258L527.546 182.639C527.486 168.689 525.255 151.869 520.462 133.969C509.147 91.729 488.548 60.539 474.442 64.309C460.336 68.079 458.105 105.389 469.44 147.629C470.09 150.069 470.881 152.329 471.591 154.689C466.486 148.29 461.036 142.174 455.264 136.369C424.35 105.449 390.906 88.729 380.631 98.999S387.044 142.729 417.977 173.659C429.209 185.058 441.779 195.057 455.414 203.438C452.031 209.437 449.702 215.972 448.531 222.758C448.051 225.839 447.8 228.951 447.781 232.068C396.178 195.118 293.183 127.999 223.562 127.999C175.01 127.999 131.129 156.921 112.003 201.529C102.042 224.76 107.232 251.713 125.109 269.588L291.002 435.408C299.069 443.469 310.008 447.998 321.415 447.998H463.667C472.508 447.998 479.675 440.835 479.675 431.998V415.998C479.675 398.325 465.341 383.998 447.66 383.998H351.618V328.418C351.515 292.744 327.879 261.415 293.593 251.508L251.174 239.398C242.671 236.974 237.744 228.118 240.169 219.618C242.595 211.119 251.455 206.194 259.958 208.618L302.367 220.728C350.377 234.6 383.478 278.465 383.632 328.418V351.998L447.66 319.998H551.036C582.342 319.99 607.714 294.615 607.705 263.323C607.7 245.04 598.869 227.883 583.99 217.248V217.258ZM527.696 255.998C518.855 255.998 511.689 248.835 511.689 239.998S518.855 223.998 527.696 223.998C536.536 223.998 543.703 231.162 543.703 239.998S536.536 255.998 527.696 255.998Z" />
            <path d="M49.24 170.939C28.884 187.931 26.164 218.201 43.164 238.548C60.017 258.718 89.962 261.593 110.347 244.998C105.694 230.742 106.387 215.281 112.298 201.499C114.888 195.478 117.959 189.676 121.482 184.149C120.123 181.777 118.56 179.528 116.81 177.429C99.938 156.997 69.696 154.093 49.24 170.939V170.939ZM527.99 223.998C519.15 223.998 511.983 231.162 511.983 239.998S519.15 255.998 527.99 255.998C536.831 255.998 543.997 248.835 543.997 239.998S536.831 223.998 527.99 223.998Z" />
        </Icon>
    </>
}