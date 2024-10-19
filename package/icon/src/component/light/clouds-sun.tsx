
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `clouds-sun` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-sun?s=light clouds-sun}
 * @preview ![clouds-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzguMzI5IDMxNC4yTDkyLjYyNSAzMjMuMjVMMTA1LjEyNSAyNjBDMTA2LjI1IDI1My43NSAxMDMuNzUgMjQ3LjI1IDk4LjI1IDI0My41TDQ0Ljc1IDIwNy43NUw5OC4yNSAxNzEuODc1QzEwMy43NSAxNjguMjUgMTA2LjI1IDE2MS43NSAxMDUuMTI1IDE1NS4zNzVMOTIuNjI1IDkyLjI1TDE1NS43NSAxMDQuNzVDMTYyLjI1IDEwNiAxNjguNjI1IDEwMy4yNSAxNzIuMjUgOTcuODc1TDIwOCA0NC4zNzVMMjQzLjc1IDk4QzI0Ny4zNzUgMTAzLjI1IDI1My43NSAxMDYuMTI1IDI2MC4yNSAxMDQuNzVMMzIzLjM3NSA5Mi4yNUwzMTYuMTE4IDEyOC45MDhDMzEzLjg5OCAxNDAuMTIxIDMyNC4zNDkgMTQ5LjcgMzM1LjMyNyAxNDYuNTE2TDMzNS4zMjcgMTQ2LjUxNkMzNDAuNjc1IDE0NC45NjQgMzQ0Ljc1MyAxNDAuNjIxIDM0NS45NjQgMTM1LjE4NkwzNTkuMzc1IDc1QzM2MC4zNzUgNjkuNzUgMzU4Ljc1IDY0LjM3NSAzNTUgNjAuNjI1QzM1MS4yNSA1Ni43NSAzNDYgNTUuMTI1IDM0MC42MjUgNTYuMjVMMjY0LjM3NSA3MS4yNUwyMjEuMjUgNi43NUMyMTUuMjUgLTIuMjUgMjAwLjc1IC0yLjI1IDE5NC43NSA2Ljc1TDE1MS41IDcxLjI1TDc1LjI1IDU2LjEyNUM3MCA1NSA2NC43NSA1Ni43NSA2MC44NzUgNjAuNUM1Ny4xMjUgNjQuMjUgNTUuNSA2OS43NSA1Ni41IDc0Ljg3NUw3MS42MjUgMTUxLjI1TDcuMTI1IDE5NC4zNzVDMi43NSAxOTcuMzc1IDAgMjAyLjM3NSAwIDIwNy43NUMwIDIxMyAyLjc1IDIxOCA3LjEyNSAyMjFMNzEuNjI1IDI2NC4yNUw1Ni41IDM0MC4zNzVDNTUuNSAzNDUuNzUgNTcuMTI1IDM1MS4xMjUgNjAuODc1IDM1NC43NUM2NC43NSAzNTguNSA3MC4xMjUgMzYwLjI1IDc1LjI1IDM1OS4yNUwxNDQuNDg4IDM0Ni43OTFDMTUzLjE4IDM0NS4yMjcgMTU5LjEyMSAzMzcuMTI2IDE1OC4wMDIgMzI4LjM2NlYzMjguMzY2QzE1Ni43ODQgMzE4LjgzOCAxNDcuNzUyIDMxMi4zMzQgMTM4LjMyOSAzMTQuMlpNMjA4IDE0OS43NUMyMzYuNzUgMTQ5Ljc1IDI2MC41IDE3MSAyNjQuODc1IDE5OC42MjVDMjY3LjI1IDE5Ny43NSAyNjkuNzUgMTk2Ljc1IDI3Mi4yNSAxOTYuMjVDMjc3LjI1IDE4Ny4yNSAyODMuMzc1IDE3OS4xMjUgMjkwLjI1IDE3MS43NUMyNzYuMjUgMTQwIDI0NC43NSAxMTcuNzUgMjA4IDExNy43NUMxNTguNSAxMTcuNzUgMTE4LjI1IDE1OC4xMjUgMTE4LjI1IDIwNy43NUMxMTguMjUgMjQ3LjI1IDE0My44NzUgMjgwLjM3NSAxNzkuMjUgMjkyLjVDMTc5LjMxOSAyOTIuMTk0IDE4My4wMDggMjc2LjQ4NCAxODkuODc1IDI2Mi4zNzVDMTY2Ljg3NSAyNTQuNzUgMTUwLjEyNSAyMzMuMjUgMTUwLjEyNSAyMDcuNzVDMTUwLjI1IDE3NS43NSAxNzYuMTI1IDE0OS43NSAyMDggMTQ5Ljc1Wk01NTAuMzc1IDE2NC43NUg1NDkuODc1QzUzMy4yNSAxMjQuMTI1IDQ5NC42MjUgOTUuNjI1IDQ1MC41IDk1LjYyNUM0MDQuMTI1IDk1LjYyNSAzNjQuMjUgMTI1Ljc1IDM0OSAxNjkuNzVDMzM1LjUzMyAxNzQuNDg0IDMyMy43NCAxODIuNjI1IDMxNC4wNTcgMTkyLjk2MUMzMjguMDY2IDE5NC4wNzggMzQxLjY3MiAxOTcuMjM0IDM1NC40MDggMjAyLjc1QzM1Ni41MzggMjAxLjcyMyAzNTguNzE1IDIwMC43ODYgMzYwLjk0NiAxOTkuOTc4QzM2OS4zOTYgMTk2LjkxOCAzNzUuOTIxIDE5MC4wODggMzc4Ljc5MiAxODEuNTcyQzM4OS4zOTUgMTUwLjEyNiA0MTcuMzE3IDEyNy42MjUgNDUwLjM3NSAxMjcuNjI1QzQ4Mi4zNTggMTI3LjYyNSA1MDkuMzk5IDE0OC40ODkgNTIwLjc1IDE3OC4xNjNDNTI1LjI5NiAxOTAuMDQ4IDUzNy4yNjcgMTk2LjgyOCA1NDkuOTkxIDE5Ni43NTFDNTUwLjA3OCAxOTYuNzUgNTUwLjE2NCAxOTYuNzUgNTUwLjI1IDE5Ni43NUM1ODIuMTI1IDE5Ni43NSA2MDcuODc1IDIyNC4yNSA2MDcuODc1IDI1OC4yNUM2MDcuOTg0IDI4OC4wMjMgNTg4LjI1NiAzMTIuODA1IDU2MS45NDUgMzE4LjUwOEM1NzAuODY3IDMyNi4wNTkgNTc4Ljc4NyAzMzQuNjQ4IDU4NS4zODMgMzQ0LjI4OUM2MTcuNDM5IDMzMC4wNTUgNjQwIDI5Ni45MzggNjQwIDI1OC4yNUM2NDAgMjA2Ljc1IDU5OS43NSAxNjQuNzUgNTUwLjM3NSAxNjQuNzVaTTQ5NC42MTcgMzIxLjE2NEM0ODcuNjI3IDI4NC4xMjUgNDU1LjAzNyAyNTYuMDIgNDE2LjAwNiAyNTYuMDJDNDAzLjk4NCAyNTYuMDIgMzkyLjM2NyAyNTguNzAzIDM4MS42OTkgMjYzLjg4M0MzNjMuODQ2IDIzOS4xODggMzM1LjAxIDIyNCAzMDQuMTM1IDIyNEMyNTEuMjAxIDIyNCAyMDguMTM3IDI2Ny4wODIgMjA4LjEzNyAzMjAuMDM1QzIwOC4xMzcgMzIxLjg0NCAyMDguMjAxIDMyMy42OCAyMDguMzMgMzI1LjU0N0MxNzAuNDE4IDMzOC43MDMgMTQ0LjE0MSAzNzQuNjE3IDE0NC4xNDEgNDE1Ljk2NUMxNDQuMTQxIDQ2OC45MTggMTg3LjIwNSA1MTIgMjQwLjEzNyA1MTJINDgwLjEyOUM1MzIuOTkyIDUxMiA1NzYgNDY4Ljk3NyA1NzYgNDE2LjA5QzU3NiAzNjguMTA1IDU0MC42MzcgMzI4LjIzIDQ5NC42MTcgMzIxLjE2NFpNNDgwLjEyOSA0ODBMMjQyLjQzNyA0ODBDMjA5LjU0OSA0ODAgMTgwLjM0MSA0NTYuMTYyIDE3Ni41NzUgNDIzLjQ4OUMxNzIuNjM0IDM4OS4zMDEgMTk1Ljk0OSAzNTguOTg5IDIyOC44ODcgMzUzLjE4QzIzOS45NjkgMzUxLjE2MiAyNDQuMDI3IDM0My44NTggMjQyLjQwNCAzMzYuMzIxQzI0MS4yNTQgMzMwLjk3OCAyNDAuMTM3IDMyNi4wODIgMjQwLjEzNyAzMjAuMDM1QzI0MC4xMzcgMjg0LjY0MSAyNjguODg3IDI1NiAzMDQuMTM1IDI1NkMzMjguNzU4IDI1NiAzNTEuMzgzIDI3MC41MDggMzYxLjg4MyAyOTMuMDJDMzY3LjIxNSAzMDQuNTUzIDM3Ni4yNzMgMzA2LjY3MiAzODYuMjU2IDI5OC42NDhDMzk5LjE0MyAyODguMzMzIDQxNS41NTUgMjg1LjM0NyA0MzEuMDk5IDI5MC40NzdDNDUxLjE4MSAyOTcuMTA0IDQ2NC4wMDQgMzE2Ljg2NSA0NjQuMDA0IDMzOC4wMTJWMzM4LjMyOEM0NjQuMDA0IDM0NS45MDkgNDcwLjE1IDM1Mi4wNTUgNDc3LjczMSAzNTIuMDU1SDQ3Ny43MzFDNTA5Ljg5NSAzNTIuMDU1IDUzOC43NDggMzc0LjgwMiA1NDMuMzIgNDA2LjY0QzU0OC45ODYgNDQ2LjA5NyA1MTguNDc5IDQ4MCA0ODAuMTI5IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudsSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M138.329 314.2L92.625 323.25L105.125 260C106.25 253.75 103.75 247.25 98.25 243.5L44.75 207.75L98.25 171.875C103.75 168.25 106.25 161.75 105.125 155.375L92.625 92.25L155.75 104.75C162.25 106 168.625 103.25 172.25 97.875L208 44.375L243.75 98C247.375 103.25 253.75 106.125 260.25 104.75L323.375 92.25L316.118 128.908C313.898 140.121 324.349 149.7 335.327 146.516L335.327 146.516C340.675 144.964 344.753 140.621 345.964 135.186L359.375 75C360.375 69.75 358.75 64.375 355 60.625C351.25 56.75 346 55.125 340.625 56.25L264.375 71.25L221.25 6.75C215.25 -2.25 200.75 -2.25 194.75 6.75L151.5 71.25L75.25 56.125C70 55 64.75 56.75 60.875 60.5C57.125 64.25 55.5 69.75 56.5 74.875L71.625 151.25L7.125 194.375C2.75 197.375 0 202.375 0 207.75C0 213 2.75 218 7.125 221L71.625 264.25L56.5 340.375C55.5 345.75 57.125 351.125 60.875 354.75C64.75 358.5 70.125 360.25 75.25 359.25L144.488 346.791C153.18 345.227 159.121 337.126 158.002 328.366V328.366C156.784 318.838 147.752 312.334 138.329 314.2ZM208 149.75C236.75 149.75 260.5 171 264.875 198.625C267.25 197.75 269.75 196.75 272.25 196.25C277.25 187.25 283.375 179.125 290.25 171.75C276.25 140 244.75 117.75 208 117.75C158.5 117.75 118.25 158.125 118.25 207.75C118.25 247.25 143.875 280.375 179.25 292.5C179.319 292.194 183.008 276.484 189.875 262.375C166.875 254.75 150.125 233.25 150.125 207.75C150.25 175.75 176.125 149.75 208 149.75ZM550.375 164.75H549.875C533.25 124.125 494.625 95.625 450.5 95.625C404.125 95.625 364.25 125.75 349 169.75C335.533 174.484 323.74 182.625 314.057 192.961C328.066 194.078 341.672 197.234 354.408 202.75C356.538 201.723 358.715 200.786 360.946 199.978C369.396 196.918 375.921 190.088 378.792 181.572C389.395 150.126 417.317 127.625 450.375 127.625C482.358 127.625 509.399 148.489 520.75 178.163C525.296 190.048 537.267 196.828 549.991 196.751C550.078 196.75 550.164 196.75 550.25 196.75C582.125 196.75 607.875 224.25 607.875 258.25C607.984 288.023 588.256 312.805 561.945 318.508C570.867 326.059 578.787 334.648 585.383 344.289C617.439 330.055 640 296.938 640 258.25C640 206.75 599.75 164.75 550.375 164.75ZM494.617 321.164C487.627 284.125 455.037 256.02 416.006 256.02C403.984 256.02 392.367 258.703 381.699 263.883C363.846 239.188 335.01 224 304.135 224C251.201 224 208.137 267.082 208.137 320.035C208.137 321.844 208.201 323.68 208.33 325.547C170.418 338.703 144.141 374.617 144.141 415.965C144.141 468.918 187.205 512 240.137 512H480.129C532.992 512 576 468.977 576 416.09C576 368.105 540.637 328.23 494.617 321.164ZM480.129 480L242.437 480C209.549 480 180.341 456.162 176.575 423.489C172.634 389.301 195.949 358.989 228.887 353.18C239.969 351.162 244.027 343.858 242.404 336.321C241.254 330.978 240.137 326.082 240.137 320.035C240.137 284.641 268.887 256 304.135 256C328.758 256 351.383 270.508 361.883 293.02C367.215 304.553 376.273 306.672 386.256 298.648C399.143 288.333 415.555 285.347 431.099 290.477C451.181 297.104 464.004 316.865 464.004 338.012V338.328C464.004 345.909 470.15 352.055 477.731 352.055H477.731C509.895 352.055 538.748 374.802 543.32 406.64C548.986 446.097 518.479 480 480.129 480Z" />
        </Icon>
    </>
}