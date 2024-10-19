
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car-crash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-crash?s=duotone car-crash}
 * @preview ![car-crash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MC4yMzUgMTY4LjEwNEwxNTEuMTMxIDI2Mi41MDZMOTYuODQyIDMxMy4xMDlDOTIuMDcyIDMxNy41NTcgODQuMzY5IDMxMy44MTQgODQuODQyIDMwNy4yODFMOTAuNjE1IDIyNy40MjZDOTAuODg3IDIyMy42NjYgODguMjQ4IDIyMC4zMyA4NC41NTUgMjE5Ljc2TDYuMDg0IDIwNy42NjhDLTAuMzM2IDIwNi42NzggLTIuMjM4IDE5OC4yNzEgMy4xMjEgMTk0LjU3TDY4LjYxOSAxNDkuMzM0QzcxLjcwMSAxNDcuMjA1IDcyLjY0MyAxNDMuMDQzIDcwLjc4MSAxMzkuNzc1TDMxLjIyOSA3MC4zNTVDMjcuOTkyIDY0LjY3NCAzMy4zMjQgNTcuOTMyIDM5LjUzMyA1OS44NUwxMTUuNDM0IDgzLjI5N0MxMTkuMDA2IDg0LjQgMTIyLjgxOSA4Mi41NDkgMTI0LjE5MiA3OS4wNDNMMTUzLjM0IDQuNTdDMTU1LjcyNSAtMS41MjMgMTY0LjI3NiAtMS41MjMgMTY2LjY2IDQuNTdMMTk1LjgwOSA3OS4wNDNDMTk3LjE4MiA4Mi41NDkgMjAwLjk5NCA4NC40IDIwNC41NjcgODMuMjk3TDI4MC40NjcgNTkuODVDMjg2LjY3NiA1Ny45MzIgMjkyLjAwOCA2NC42NzQgMjg4Ljc3MiA3MC4zNTVMMjc0LjE3NCA5NS45NzVMMjU3LjgwNSAxMTQuODUyQzIyNy43NzkgMTE5LjYgMjAyLjEwMiAxMzkuNDUzIDE5MC4yMzUgMTY4LjEwNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjIyLjMxNCAyOTAuMzI2TDYyOC44MDcgMTk5LjA1MUM2MzEuMzgzIDE2Mi44MDcgNjEwLjQ3OCAxMjguOTg0IDU3Ni45MSAxMTUuMDhMNDI5LjM2OSA1My45NjdDMzk1Ljc5OSA0MC4wNjIgMzU3LjA5OCA0OS4xOTkgMzMzLjI4OSA3Ni42NUwyNzMuMzQyIDE0NS43NzdDMjUwLjY5OSAxNDUuMTU4IDIyOC45OCAxNTguMTggMjE5Ljc5NyAxODAuMzVMMTYyLjY0NCAzMTguMzI4QzE1NS4zMjYgMzM1Ljk5NiAxNjMuNzE5IDM1Ni4yNTYgMTgxLjM4NyAzNjMuNTc2TDE5Ny4zODUgMzcwLjIwMUMyMTUuMDUzIDM3Ny41MiAyMzUuMzEyIDM2OS4xMjkgMjQyLjYzMSAzNTEuNDU5TDI1Ni4yOTkgMzE4LjQ2NUw1MTIuMjU2IDQyNC40ODZMNDk4LjU5IDQ1Ny40OEM0OTEuMjcxIDQ3NS4xNSA0OTkuNjYyIDQ5NS40MSA1MTcuMzMyIDUwMi43MjlMNTMzLjMzIDUwOS4zNTVDNTUwLjk5OCA1MTYuNjc0IDU3MS4yNTggNTA4LjI4MSA1NzguNTc2IDQ5MC42MTNMNjM1LjcyOCAzNTIuNjM1QzY0NC45MTIgMzMwLjQ2NSA2MzguNzYyIDMwNS44OTggNjIyLjMxNCAyOTAuMzI2Wk0zMTMuMDEyIDI0OS40MThDMzA3LjUyMyAyNjIuNjcgMjkyLjMyOCAyNjguOTYzIDI3OS4wNzYgMjYzLjQ3NUMyNjUuODI0IDI1Ny45ODQgMjU5LjUzMSAyNDIuNzkxIDI2NS4wMTkgMjI5LjUzOUMyNzAuNTEgMjE2LjI4NSAyODUuNzAzIDIwOS45OTIgMjk4Ljk1NSAyMTUuNDgyQzMxMi4yMDcgMjIwLjk3MSAzMTguNTAyIDIzNi4xNjQgMzEzLjAxMiAyNDkuNDE4Wk0zNDQuOTQxIDE2OC45MzJMMzg1LjYxMyAxMjIuMDI5QzM4OS44OTYgMTE3LjA5MiAzOTYuODI4IDExNS40NTcgNDAyLjg2MyAxMTcuOTU1TDU1MC40MDQgMTc5LjA3QzU1Ni40MzkgMTgxLjU3IDU2MC4xODIgMTg3LjYyNSA1NTkuNzE3IDE5NC4xMzdMNTU1LjMxMiAyNTYuMDdMMzQ0Ljk0MSAxNjguOTMyWk01NjguOTcxIDM1NS40MzlDNTYzLjQ4IDM2OC42OTEgNTQ4LjI4NyAzNzQuOTg0IDUzNS4wMzUgMzY5LjQ5NkM1MjEuNzgzIDM2NC4wMDYgNTE1LjQ4OCAzNDguODExIDUyMC45NzggMzM1LjU2MUM1MjYuNDY5IDMyMi4zMDcgNTQxLjY2MiAzMTYuMDE0IDU1NC45MTQgMzIxLjUwNEM1NjguMTY2IDMyNi45OTIgNTc0LjQ2MSAzNDIuMTg2IDU2OC45NzEgMzU1LjQzOVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CarCrash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M190.235 168.104L151.131 262.506L96.842 313.109C92.072 317.557 84.369 313.814 84.842 307.281L90.615 227.426C90.887 223.666 88.248 220.33 84.555 219.76L6.084 207.668C-0.336 206.678 -2.238 198.271 3.121 194.57L68.619 149.334C71.701 147.205 72.643 143.043 70.781 139.775L31.229 70.355C27.992 64.674 33.324 57.932 39.533 59.85L115.434 83.297C119.006 84.4 122.819 82.549 124.192 79.043L153.34 4.57C155.725 -1.523 164.276 -1.523 166.66 4.57L195.809 79.043C197.182 82.549 200.994 84.4 204.567 83.297L280.467 59.85C286.676 57.932 292.008 64.674 288.772 70.355L274.174 95.975L257.805 114.852C227.779 119.6 202.102 139.453 190.235 168.104Z" />
            <path d="M622.314 290.326L628.807 199.051C631.383 162.807 610.478 128.984 576.91 115.08L429.369 53.967C395.799 40.062 357.098 49.199 333.289 76.65L273.342 145.777C250.699 145.158 228.98 158.18 219.797 180.35L162.644 318.328C155.326 335.996 163.719 356.256 181.387 363.576L197.385 370.201C215.053 377.52 235.312 369.129 242.631 351.459L256.299 318.465L512.256 424.486L498.59 457.48C491.271 475.15 499.662 495.41 517.332 502.729L533.33 509.355C550.998 516.674 571.258 508.281 578.576 490.613L635.728 352.635C644.912 330.465 638.762 305.898 622.314 290.326ZM313.012 249.418C307.523 262.67 292.328 268.963 279.076 263.475C265.824 257.984 259.531 242.791 265.019 229.539C270.51 216.285 285.703 209.992 298.955 215.482C312.207 220.971 318.502 236.164 313.012 249.418ZM344.941 168.932L385.613 122.029C389.896 117.092 396.828 115.457 402.863 117.955L550.404 179.07C556.439 181.57 560.182 187.625 559.717 194.137L555.312 256.07L344.941 168.932ZM568.971 355.439C563.48 368.691 548.287 374.984 535.035 369.496C521.783 364.006 515.488 348.811 520.978 335.561C526.469 322.307 541.662 316.014 554.914 321.504C568.166 326.992 574.461 342.186 568.971 355.439Z" />
        </Icon>
    </>
}