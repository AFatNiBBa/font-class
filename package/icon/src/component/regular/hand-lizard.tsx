
import { Icon } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=regular hand-lizard}
 * @preview ![hand-lizard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzMxLjgyOFY0MjRDNTEyIDQzNy4yNSA1MDEuMjUgNDQ4IDQ4OCA0NDhDNDc0Ljc1IDQ0OCA0NjQgNDM3LjI1IDQ2NCA0MjRWMzMxLjgyOEM0NjQgMzIxLjczNCA0NjAuOTY4IDMxMi4wMzEgNDU1LjIzNCAzMDMuNzVMMzM2LjYwOCAxMzMuMjk3QzMyNy4zNTggMTE5Ljk1MyAzMTIuMTg2IDExMiAyOTUuOTk5IDExMkg1My4zMjVDNTAuODI1IDExMiA0OC4wNzUgMTE0LjQ1MyA0OC4wMTIgMTE2LjE3MkM0Ny43MTYgMTI1LjY3MiA1MS4xNjkgMTM0LjY0MSA1Ny43NjIgMTQxLjQ1M0M2NC4zNTYgMTQ4LjI1IDczLjIgMTUyIDgyLjY2OSAxNTJIMjQ0LjYzOUMyNjEuNzMzIDE1MiAyNzcuOTA1IDE2MC4yODEgMjg3LjkwNSAxNzQuMTQxQzI5Ny44ODkgMTg4LjAxNiAzMDAuNjM5IDIwNS45NjkgMjk1LjIzMyAyMjIuMTg3TDI4NS40NTIgMjUxLjUzMUMyNzguMTcgMjczLjM0NCAyNTcuODQyIDI4OCAyMzQuODU3IDI4OEgxMzguNjY5QzEyOS4yIDI4OCAxMjAuMzU3IDI5MS43NSAxMTMuNzYzIDI5OC41NDdDMTA3LjE2OSAzMDUuMzU5IDEwMy43MTYgMzE0LjMyOCAxMDQuMDEzIDMyMy44MjhDMTA0LjA3NSAzMjUuNTQ3IDEwNi44MjUgMzI4IDEwOS4zMjUgMzI4SDI2NS43OEMyNzAuOTY3IDMyOCAyNzYuMDMgMzI5LjY4OCAyODAuMTg2IDMzMi43OTdMMzU4LjQwNSAzOTEuNDY5QzM2NC40MzYgMzk2IDM2Ny45OTkgNDAzLjEyNSAzNjcuOTk5IDQxMC42NzJWNDI0QzM2Ny45OTkgNDM3LjI1IDM1Ny4yNDkgNDQ4IDM0My45OTkgNDQ4UzMxOS45OTkgNDM3LjI1IDMxOS45OTkgNDI0VjQyMi42NzJMMjU3Ljc3OSAzNzZIMTA5LjMyNUM4MC44NDEgMzc2IDU2LjkzNCAzNTMuMjgxIDU2LjA0NCAzMjUuMzU5QzU1LjMyNSAzMDIuNzUgNjMuNTc1IDI4MS4zNzUgNzkuMjc4IDI2NS4xNTZDOTQuOTk3IDI0OC45MzggMTE2LjA5MSAyNDAgMTM4LjY2OSAyNDBIMjM0Ljg1N0MyMzcuMTU0IDI0MCAyMzkuMTg2IDIzOC41MzEgMjM5LjkyIDIzNi4zNDRMMjQ5LjcwMSAyMDcuMDE2QzI1MC40MDQgMjA0Ljg3NSAyNDkuNjg2IDIwMy4yMTkgMjQ4Ljk2NyAyMDIuMjE5QzI0OC4yMzMgMjAxLjIwMyAyNDYuODg5IDIwMCAyNDQuNjM5IDIwMEg4Mi42NjlDNjAuMDkxIDIwMCAzOC45OTcgMTkxLjA2MiAyMy4yNzggMTc0Ljg0NEM3LjU3NSAxNTguNjI1IC0wLjY3NSAxMzcuMjUgMC4wNDMgMTE0LjY0MUMwLjkzNCA4Ni43MTkgMjQuODQgNjQgNTMuMzI1IDY0SDI5NS45OTlDMzI3LjkzNiA2NCAzNTcuODU4IDc5LjY3MiAzNzYuMDQ2IDEwNS45MjJMNDk0LjY1NiAyNzYuMzc1QzUwNi4wMTYgMjkyLjc2NiA1MTIgMzExLjkyMiA1MTIgMzMxLjgyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
const HandLizard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 331.828V424C512 437.25 501.25 448 488 448C474.75 448 464 437.25 464 424V331.828C464 321.734 460.968 312.031 455.234 303.75L336.608 133.297C327.358 119.953 312.186 112 295.999 112H53.325C50.825 112 48.075 114.453 48.012 116.172C47.716 125.672 51.169 134.641 57.762 141.453C64.356 148.25 73.2 152 82.669 152H244.639C261.733 152 277.905 160.281 287.905 174.141C297.889 188.016 300.639 205.969 295.233 222.187L285.452 251.531C278.17 273.344 257.842 288 234.857 288H138.669C129.2 288 120.357 291.75 113.763 298.547C107.169 305.359 103.716 314.328 104.013 323.828C104.075 325.547 106.825 328 109.325 328H265.78C270.967 328 276.03 329.688 280.186 332.797L358.405 391.469C364.436 396 367.999 403.125 367.999 410.672V424C367.999 437.25 357.249 448 343.999 448S319.999 437.25 319.999 424V422.672L257.779 376H109.325C80.841 376 56.934 353.281 56.044 325.359C55.325 302.75 63.575 281.375 79.278 265.156C94.997 248.938 116.091 240 138.669 240H234.857C237.154 240 239.186 238.531 239.92 236.344L249.701 207.016C250.404 204.875 249.686 203.219 248.967 202.219C248.233 201.203 246.889 200 244.639 200H82.669C60.091 200 38.997 191.062 23.278 174.844C7.575 158.625 -0.675 137.25 0.043 114.641C0.934 86.719 24.84 64 53.325 64H295.999C327.936 64 357.858 79.672 376.046 105.922L494.656 276.375C506.016 292.766 512 311.922 512 331.828Z" />
    </Icon>
);

export default HandLizard;