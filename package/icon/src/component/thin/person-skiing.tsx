
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-skiing` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-skiing?s=thin person-skiing}
 * @preview ![person-skiing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuMDQ1IDk2LjAxOEM0NTguNTUzIDk2LjAxOCA0ODAuMDU3IDc0LjUxNCA0ODAuMDU3IDQ4LjAwOFM0NTguNTUzIDAgNDMyLjA0NSAwQzQwNS41MzkgMCAzODQuMDM1IDIxLjUwMiAzODQuMDM1IDQ4LjAwOFM0MDUuNTM5IDk2LjAxOCA0MzIuMDQ1IDk2LjAxOFpNNDMyLjA0NSAxNkM0NDkuNjk3IDE2IDQ2NC4wNTcgMzAuMzU3IDQ2NC4wNTcgNDguMDA4UzQ0OS42OTcgODAuMDE4IDQzMi4wNDUgODAuMDE4QzQxNC4zOTQgODAuMDE4IDQwMC4wMzUgNjUuNjU4IDQwMC4wMzUgNDguMDA4UzQxNC4zOTQgMTYgNDMyLjA0NSAxNlpNMjUwLjA5IDM1OC44MjJDMjUyLjQ2NSAzNjguMDM5IDI1OC42MjEgMzc1LjgyIDI2Ni45NjUgMzgwLjE5NUMyODguNDMyIDM5MS40MDYgMzA1LjE5MyAzNzYuMzAzIDMwOS45MDIgMzY5LjEzM0wzNDQuMjc5IDMyMC44MjRDMzU2LjQzNSAzMDIuMzg5IDM1NC4wMjkgMjc3Ljc2NCAzMzguNTkyIDI2Mi4zMjhMMzA2LjcxNSAyMjkuODNDMzAzLjYyMSAyMjYuNjc0IDI5OC41NTggMjI2LjYxMSAyOTUuNDAyIDIyOS43MDVTMjkyLjE4MyAyMzcuODYxIDI5NS4yNzcgMjQxLjAxNkwzMjcuMjE3IDI3My41NzZDMzM3LjM3MyAyODMuNzMyIDMzOC45MzUgMjk5Ljg4OSAzMzEuMDYgMzExLjc5M0wyOTYuNjgzIDM2MC4xMzVDMjgzLjY4MiAzNzkuODg3IDI1NS40NTkgMzU5LjM4MSAyNjcuNzE1IDM0MC42OTdMMjk2LjIxNSAzMDEuNTE0QzI5OC42MjEgMjk4LjIwMSAyOTguMTUyIDI5My42MzkgMjk1LjE1MiAyOTAuODg5TDIxMi4yNDYgMjE0Ljc5OUMyMDIuODA4IDIwNS4yMDcgMTk4LjQ5NiAxOTEuNzcgMjAwLjQzMyAxNzcuOTU3QzIwMS4wNTggMTczLjU4NCAxOTguMDI3IDE2OS41MjEgMTkzLjY1IDE2OC45MjhDMTg5LjMzOCAxNjguMDUzIDE4NS4yMTMgMTcxLjMzNCAxODQuNjE5IDE3NS43MDlDMTgxLjk2MyAxOTQuNDg4IDE4Ny44NjkgMjEyLjgzIDIwMS4xNTIgMjI2LjMzTDI3OS4wOSAyOTcuODU3TDI1NC41NTggMzMxLjYwNUMyNDkuMzA4IDMzOS42MDQgMjQ3LjY4MyAzNDkuNTQxIDI1MC4wOSAzNTguODIyWk0xMjUuMDYgOTEuOTg4TDExMi44MzggMTE2LjQzQzExMC44NjkgMTIwLjM2NyAxMTIuNDYzIDEyNS4xOCAxMTYuNDMyIDEyNy4xNDhDMTIxLjIzNCAxMjkuNTQ5IDEyNS42NTIgMTI2LjU0OSAxMjcuMTUgMTIzLjU1NUwxMzkuMjQ0IDk5LjM3MUw0MzMuNzk1IDI1Mi42N0M0MzguNDA2IDI1NC45NTcgNDQzLjI5MSAyNTYuMDQzIDQ0OC4wOTQgMjU2LjA0M0M0NTkuODM2IDI1Ni4wNDMgNDcxLjA5MiAyNDkuNTYxIDQ3Ni42ODIgMjM4LjI5NUM0ODQuNTU3IDIyMi41NDEgNDc4LjE4MiAyMDMuMjg3IDQ2Mi4zMDMgMTk1LjQxTDQxMC4yOTEgMTY5LjI4MUwzOTMuMTYyIDExOC4xNDZDMzg2LjYzOSA5OC42NzYgMzY0LjI0MiA3My45NjkgMzMzLjA5MiA3My45NjlDMzI1LjQzNSA3My45NjkgMzE3LjI1IDc1LjQ2MSAzMDguNjQyIDc4Ljg5MUwyNjAuNzM4IDk4LjA1MUMyNDQuOTY1IDEwNC4zNTkgMjMwLjEwOSAxMTIuNTcgMjE1Ljc2OSAxMjEuNjI3TDE0Ni4zNCA4NS4xOEwxNTkuMTUgNTkuNTU5QzE2MS4xMTkgNTUuNjIxIDE1OS41MjUgNTAuODA5IDE1NS41NTcgNDguODRDMTUxLjcxMyA0Ni45MzYgMTQ2LjgwNyA0OC40NjUgMTQ0LjgzOCA1Mi40MzRMMTMyLjE4MiA3Ny43NDhMMTA3LjcxMyA2NC45MDJDMTAzLjgwNyA2Mi44NzEgOTguOTYzIDY0LjM3MSA5Ni45IDY4LjI3N0M5NC44NjkgNzIuMTg0IDk2LjM2OSA3Ny4wMjcgMTAwLjI3NSA3OS4wOUwxMjUuMDYgOTEuOTg4Wk0yNjYuNjgyIDExMi45MDRMMzE0LjU2MiA5My43NTJDMzIwLjg2NyA5MS4yNCAzMjcuMTAzIDg5Ljk2NyAzMzMuMDkgODkuOTY3QzM1Ni4zNzMgODkuOTY3IDM3My4zNjMgMTA5LjQyIDM3Ny45OSAxMjMuMjI5TDM5NS4xMTkgMTc0LjM2M0MzOTYuNDYxIDE3OC4zNjcgMzk5LjMzMiAxODEuNjggNDAzLjEwNyAxODMuNTc2TDQ1NS4xOTMgMjA5Ljc0MkM0NjMuMDU1IDIxMy42NDEgNDY2LjM0IDIyMy4yMDEgNDYyLjM0OCAyMzEuMTg0QzQ1Ni43NTggMjQyLjQ1MyA0NDUuMTM5IDI0MC40MzQgNDQxLjA0MSAyMzguNDA4TDM1OS40MDQgMTk2Ljk0MUwzNDMuNDM1IDE1Ny4wMjFDMzQxLjgxIDE1Mi45MjggMzM3LjA2IDE1MC45OSAzMzMuMDI5IDE1Mi41NTNDMzI4LjkzNSAxNTQuMjA5IDMyNi45MzUgMTU4Ljg2NSAzMjguNTYgMTYyLjk1OUwzMzcuNjE1IDE4NS41OTJMMjMxLjg5NiAxMzAuMDk0QzI0My4wNzQgMTIzLjU2NiAyNTQuNjUgMTE3LjcxNyAyNjYuNjgyIDExMi45MDRaTTUwOS42NTYgNDc5LjkwOEM1MDYuNTMxIDQ3Ni43ODMgNTAxLjQ2OSA0NzYuNzgzIDQ5OC4zNDQgNDc5LjkwOEM0ODEuNjI1IDQ5Ni42NTYgNDU2LjE1NiA1MDAuNzgxIDQzNS4yMTcgNDkwLjI1MkwxMS42OCAyNzAuNDg0QzcuODA1IDI2OC40NTMgMi45MyAyNjkuOTUzIDAuODk4IDI3My44ODlDLTEuMTMzIDI3Ny44MjYgMC4zOTggMjgyLjYzOSA0LjMwNSAyODQuNjdMNDI3LjkzNSA1MDQuNUM0MzguMDI5IDUwOS41MzEgNDQ4Ljg0MiA1MTIgNDU5LjU5NCA1MTJDNDc3LjkzNyA1MTIgNDk2LjAzMSA1MDQuODQ0IDUwOS42NTYgNDkxLjIyMUM1MTIuNzgxIDQ4OC4wOTYgNTEyLjc4MSA0ODMuMDMzIDUwOS42NTYgNDc5LjkwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonSkiing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M432.045 96.018C458.553 96.018 480.057 74.514 480.057 48.008S458.553 0 432.045 0C405.539 0 384.035 21.502 384.035 48.008S405.539 96.018 432.045 96.018ZM432.045 16C449.697 16 464.057 30.357 464.057 48.008S449.697 80.018 432.045 80.018C414.394 80.018 400.035 65.658 400.035 48.008S414.394 16 432.045 16ZM250.09 358.822C252.465 368.039 258.621 375.82 266.965 380.195C288.432 391.406 305.193 376.303 309.902 369.133L344.279 320.824C356.435 302.389 354.029 277.764 338.592 262.328L306.715 229.83C303.621 226.674 298.558 226.611 295.402 229.705S292.183 237.861 295.277 241.016L327.217 273.576C337.373 283.732 338.935 299.889 331.06 311.793L296.683 360.135C283.682 379.887 255.459 359.381 267.715 340.697L296.215 301.514C298.621 298.201 298.152 293.639 295.152 290.889L212.246 214.799C202.808 205.207 198.496 191.77 200.433 177.957C201.058 173.584 198.027 169.521 193.65 168.928C189.338 168.053 185.213 171.334 184.619 175.709C181.963 194.488 187.869 212.83 201.152 226.33L279.09 297.857L254.558 331.605C249.308 339.604 247.683 349.541 250.09 358.822ZM125.06 91.988L112.838 116.43C110.869 120.367 112.463 125.18 116.432 127.148C121.234 129.549 125.652 126.549 127.15 123.555L139.244 99.371L433.795 252.67C438.406 254.957 443.291 256.043 448.094 256.043C459.836 256.043 471.092 249.561 476.682 238.295C484.557 222.541 478.182 203.287 462.303 195.41L410.291 169.281L393.162 118.146C386.639 98.676 364.242 73.969 333.092 73.969C325.435 73.969 317.25 75.461 308.642 78.891L260.738 98.051C244.965 104.359 230.109 112.57 215.769 121.627L146.34 85.18L159.15 59.559C161.119 55.621 159.525 50.809 155.557 48.84C151.713 46.936 146.807 48.465 144.838 52.434L132.182 77.748L107.713 64.902C103.807 62.871 98.963 64.371 96.9 68.277C94.869 72.184 96.369 77.027 100.275 79.09L125.06 91.988ZM266.682 112.904L314.562 93.752C320.867 91.24 327.103 89.967 333.09 89.967C356.373 89.967 373.363 109.42 377.99 123.229L395.119 174.363C396.461 178.367 399.332 181.68 403.107 183.576L455.193 209.742C463.055 213.641 466.34 223.201 462.348 231.184C456.758 242.453 445.139 240.434 441.041 238.408L359.404 196.941L343.435 157.021C341.81 152.928 337.06 150.99 333.029 152.553C328.935 154.209 326.935 158.865 328.56 162.959L337.615 185.592L231.896 130.094C243.074 123.566 254.65 117.717 266.682 112.904ZM509.656 479.908C506.531 476.783 501.469 476.783 498.344 479.908C481.625 496.656 456.156 500.781 435.217 490.252L11.68 270.484C7.805 268.453 2.93 269.953 0.898 273.889C-1.133 277.826 0.398 282.639 4.305 284.67L427.935 504.5C438.029 509.531 448.842 512 459.594 512C477.937 512 496.031 504.844 509.656 491.221C512.781 488.096 512.781 483.033 509.656 479.908Z" />
        </Icon>
    </>
}