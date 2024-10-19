
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `disease` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/disease?s=thin disease}
 * @preview ![disease](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIuMjM0IDE5NS45MDJMNDA1LjIzNCAxNzIuOTA2QzM4NS45ODQgMTY2LjI4MyAzNzEuNzM0IDE1Mi4wMzUgMzY3LjEwOSAxMzQuNjY0TDM1MS4xMDkgNzQuMTc2QzM0My45OTQgNDcuMzk4IDMxNi44NzEgMzIgMjg5LjI0OCAzMkMyNzEuNzUgMzIgMjU0LjA1MyAzOC4xNzggMjQxLjEwOSA1MS41NTVMMTk0Ljk4NCA5OS4yOTVDMTgyLjk4IDExMS43NSAxNjUuMjI2IDExOC43NyAxNDYuNTY0IDExOC43N0MxNDQuNjI5IDExOC43NyAxNDIuNjg1IDExOC42OTMgMTQwLjczNCAxMTguNTQxTDY4Ljg1OSAxMTIuOTE4QzY2Ljg1MSAxMTIuNzY0IDY0Ljg2NSAxMTIuNjg4IDYyLjkxIDExMi42ODhDMTQuMjU4IDExMi42ODggLTE2LjkzOCAxNTkuMzczIDkuODU5IDE5NS43NzdMNDguNDg0IDI0OC4yNjhDNTkuNDg0IDI2My4yNjQgNjEuMjM0IDI4Mi4wMTIgNTMuMTA5IDI5OC4zODNMMjQuNjA5IDM1NS4zNzFDNi4xODMgMzkyLjIxNSAzOC45MzkgNDMwLjk1NyA4Mi4yMjggNDMwLjk1N0M4Ny4zOTYgNDMwLjk1NyA5Mi43MTEgNDMwLjQwNCA5OC4xMDkgNDI5LjIzMkwxNjguMTA5IDQxMy45ODZDMTczLjI3OSA0MTIuODMgMTc4LjUyNSA0MTIuMjY4IDE4My43MjYgNDEyLjI2OEMxOTguNzgxIDQxMi4yNjggMjEzLjQ5OCA0MTYuOTcxIDIyNS4xMDkgNDI1LjYwOUwyNzkuNDg0IDQ2Ni40NzdDMjkxLjg2NyA0NzUuNzkxIDMwNi40NDkgNDgwIDMyMC43MyA0ODBDMzUxLjg2OSA0ODAgMzgxLjU4NiA0NTkuOTkgMzgzLjk4NCA0MjkuMjMyTDM4OC42MDkgMzY3LjM2OUMzODkuOTg0IDM0OS42MjMgNDAxLjQ4NCAzMzMuNTAyIDQxOS4yMzQgMzI0LjM3N0w0ODEuMjM0IDI5Mi43NkM1MjYuMTA5IDI2OS43NjQgNTIwLjg1OSAyMTIuNTIzIDQ3Mi4yMzQgMTk1LjkwMlpNNDczLjk2NyAyNzguNTA2TDQxMS45MiAzMTAuMTQ2QzM4OS4xNDQgMzIxLjg1NSAzNzQuNDY3IDM0Mi43ODUgMzcyLjY1NCAzNjYuMTc2TDM2OC4wMzMgNDI3Ljk4OEMzNjYuMjc1IDQ1MC41MjkgMzQyLjYwMSA0NjQgMzIwLjczIDQ2NEMzMDkuMDA2IDQ2NCAyOTguMDcgNDYwLjQzNiAyODkuMDk4IDQ1My42ODZMMjM0LjY2IDQxMi43NzFDMjIwLjM1MyA0MDIuMTI5IDIwMi4yNjQgMzk2LjI2OCAxODMuNzI2IDM5Ni4yNjhDMTc3LjI4OSAzOTYuMjY4IDE3MC44NjEgMzk2Ljk3NyAxNjQuNzA1IDM5OC4zNTRMOTQuNzEzIDQxMy41OThDOTAuNTYgNDE0LjUgODYuMzU5IDQxNC45NTcgODIuMjI4IDQxNC45NTdDNjQuODI4IDQxNC45NTcgNDguMzY3IDQwNi41MTIgNDAuMjg5IDM5My40NDFDMzYuMDQ3IDM4Ni41NzYgMzIuMzYzIDM3NS42MzkgMzguOTIgMzYyLjUyN0w2Ny40NDEgMzA1LjQ5NkM3OC4yNzMgMjgzLjY3MiA3Ni4wMSAyNTguNzQgNjEuMzcxIDIzOC43ODVMMjIuNzQ2IDE4Ni4yOTNDMTIuMzM0IDE3Mi4xNSAxNi4yNjQgMTU5LjE5MSAxOS41MzMgMTUyLjcyN0MyNi45MTggMTM4LjEyMyA0My45NDMgMTI4LjY4OCA2Mi45MSAxMjguNjg4QzY0LjQ2MyAxMjguNjg4IDY2LjAzNyAxMjguNzQ4IDY3LjYxMSAxMjguODY5TDEzOS40ODYgMTM0LjQ5MkMxNDEuODUzIDEzNC42NzggMTQ0LjIxMyAxMzQuNzcgMTQ2LjU2NCAxMzQuNzdDMTY5LjczIDEzNC43NyAxOTEuNTc4IDEyNS44ODcgMjA2LjQ5MiAxMTAuNDEyTDI1Mi42MDcgNjIuNjhDMjYxLjc2NyA1My4yMTMgMjc0Ljc4MSA0OCAyODkuMjQ4IDQ4QzMwNy43MTkgNDggMzMwLjExNyA1Ny40NzcgMzM1LjY0MiA3OC4yNjhMMzUxLjY0OCAxMzguNzgxQzM1Ny42MzMgMTYxLjI1OCAzNzUuNzE5IDE3OS42NzIgNDAwLjA0MSAxODguMDM5TDQ2Ny4wNiAyMTEuMDQzQzQ4NC4wNTcgMjE2Ljg1MiA0OTQuODQ2IDIyOS4xOTMgNDk1LjkxOCAyNDQuMDUzQzQ5Ni45MyAyNTguMDY0IDQ4OC43MTMgMjcwLjk0OSA0NzMuOTY3IDI3OC41MDZaTTE1OS45ODQgMTg0LjA2MkMxMzcuOTIyIDE4NC4wNjIgMTE5Ljk4NCAyMDIgMTE5Ljk4NCAyMjQuMDYyQzExOS45ODQgMjQ2LjEyNSAxMzcuOTIyIDI2NC4wNjIgMTU5Ljk4NCAyNjQuMDYyUzE5OS45ODQgMjQ2LjEyNSAxOTkuOTg0IDIyNC4wNjJDMTk5Ljk4NCAyMDIgMTgyLjA0NyAxODQuMDYyIDE1OS45ODQgMTg0LjA2MlpNMTU5Ljk4NCAyNDguMDYyQzE0Ni43NSAyNDguMDYyIDEzNS45ODQgMjM3LjI4MSAxMzUuOTg0IDIyNC4wNjJTMTQ2Ljc1IDIwMC4wNjIgMTU5Ljk4NCAyMDAuMDYyUzE4My45ODQgMjEwLjg0NCAxODMuOTg0IDIyNC4wNjJTMTczLjIxOSAyNDguMDYyIDE1OS45ODQgMjQ4LjA2MlpNMjg3Ljk4NCAyODAuMDYyQzI2NS45MjIgMjgwLjA2MiAyNDcuOTg0IDI5OCAyNDcuOTg0IDMyMC4wNjJDMjQ3Ljk4NCAzNDIuMTI1IDI2NS45MjIgMzYwLjA2MiAyODcuOTg0IDM2MC4wNjJTMzI3Ljk4NCAzNDIuMTI1IDMyNy45ODQgMzIwLjA2MkMzMjcuOTg0IDI5OCAzMTAuMDQ3IDI4MC4wNjIgMjg3Ljk4NCAyODAuMDYyWk0yODcuOTg0IDM0NC4wNjJDMjc0Ljc1IDM0NC4wNjIgMjYzLjk4NCAzMzMuMjgxIDI2My45ODQgMzIwLjA2MlMyNzQuNzUgMjk2LjA2MiAyODcuOTg0IDI5Ni4wNjJTMzExLjk4NCAzMDYuODQ0IDMxMS45ODQgMzIwLjA2MlMzMDEuMjE5IDM0NC4wNjIgMjg3Ljk4NCAzNDQuMDYyWk0zMDMuOTg0IDIyNC4wNTlDMzEyLjg1OSAyMjQuMDU5IDMxOS45ODQgMjE2LjkzNCAzMTkuOTg0IDIwOC4wNTlTMzEyLjg1OSAxOTIuMDU5IDMwMy45ODQgMTkyLjA1OVMyODcuOTg0IDE5OS4xODQgMjg3Ljk4NCAyMDguMDU5UzI5NS4xMDkgMjI0LjA1OSAzMDMuOTg0IDIyNC4wNTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Disease(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472.234 195.902L405.234 172.906C385.984 166.283 371.734 152.035 367.109 134.664L351.109 74.176C343.994 47.398 316.871 32 289.248 32C271.75 32 254.053 38.178 241.109 51.555L194.984 99.295C182.98 111.75 165.226 118.77 146.564 118.77C144.629 118.77 142.685 118.693 140.734 118.541L68.859 112.918C66.851 112.764 64.865 112.688 62.91 112.688C14.258 112.688 -16.938 159.373 9.859 195.777L48.484 248.268C59.484 263.264 61.234 282.012 53.109 298.383L24.609 355.371C6.183 392.215 38.939 430.957 82.228 430.957C87.396 430.957 92.711 430.404 98.109 429.232L168.109 413.986C173.279 412.83 178.525 412.268 183.726 412.268C198.781 412.268 213.498 416.971 225.109 425.609L279.484 466.477C291.867 475.791 306.449 480 320.73 480C351.869 480 381.586 459.99 383.984 429.232L388.609 367.369C389.984 349.623 401.484 333.502 419.234 324.377L481.234 292.76C526.109 269.764 520.859 212.523 472.234 195.902ZM473.967 278.506L411.92 310.146C389.144 321.855 374.467 342.785 372.654 366.176L368.033 427.988C366.275 450.529 342.601 464 320.73 464C309.006 464 298.07 460.436 289.098 453.686L234.66 412.771C220.353 402.129 202.264 396.268 183.726 396.268C177.289 396.268 170.861 396.977 164.705 398.354L94.713 413.598C90.56 414.5 86.359 414.957 82.228 414.957C64.828 414.957 48.367 406.512 40.289 393.441C36.047 386.576 32.363 375.639 38.92 362.527L67.441 305.496C78.273 283.672 76.01 258.74 61.371 238.785L22.746 186.293C12.334 172.15 16.264 159.191 19.533 152.727C26.918 138.123 43.943 128.688 62.91 128.688C64.463 128.688 66.037 128.748 67.611 128.869L139.486 134.492C141.853 134.678 144.213 134.77 146.564 134.77C169.73 134.77 191.578 125.887 206.492 110.412L252.607 62.68C261.767 53.213 274.781 48 289.248 48C307.719 48 330.117 57.477 335.642 78.268L351.648 138.781C357.633 161.258 375.719 179.672 400.041 188.039L467.06 211.043C484.057 216.852 494.846 229.193 495.918 244.053C496.93 258.064 488.713 270.949 473.967 278.506ZM159.984 184.062C137.922 184.062 119.984 202 119.984 224.062C119.984 246.125 137.922 264.062 159.984 264.062S199.984 246.125 199.984 224.062C199.984 202 182.047 184.062 159.984 184.062ZM159.984 248.062C146.75 248.062 135.984 237.281 135.984 224.062S146.75 200.062 159.984 200.062S183.984 210.844 183.984 224.062S173.219 248.062 159.984 248.062ZM287.984 280.062C265.922 280.062 247.984 298 247.984 320.062C247.984 342.125 265.922 360.062 287.984 360.062S327.984 342.125 327.984 320.062C327.984 298 310.047 280.062 287.984 280.062ZM287.984 344.062C274.75 344.062 263.984 333.281 263.984 320.062S274.75 296.062 287.984 296.062S311.984 306.844 311.984 320.062S301.219 344.062 287.984 344.062ZM303.984 224.059C312.859 224.059 319.984 216.934 319.984 208.059S312.859 192.059 303.984 192.059S287.984 199.184 287.984 208.059S295.109 224.059 303.984 224.059Z" />
        </Icon>
    </>
}