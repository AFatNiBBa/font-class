
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wheat` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheat?s=solid wheat}
 * @preview ![wheat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuNzM0IDExMy41MjFDNTA3LjEwOSA4Ni4xNDcgNTE0LjEwNyA0MS41MjYgNTExLjQ4NCAwLjUzQzQ4Mi40ODQgLTEuMzQ1IDQzMS4yMzYgMC4yOCAzOTguODYxIDMwLjQwMUMzNjEuNzM4IDY3Ljc3MiAzNjcuODYzIDEzNC43NzEgMzY5LjExMyAxNDMuMzk2QzQxMC43MzYgMTQ2LjI3MSA0NTQuMTA5IDEzOS4yNzEgNDgxLjczNCAxMTMuNTIxWk00MzguMjM2IDE2OS41MTdDMzk1LjM1NyAxNzkuODIxIDM2NS45MTkgMTc1LjMyIDM0MS4xMTMgMTczLjY0MkMzNDAuMTYxIDE2Ni44ODEgMzI5Ljc2NSAxMjEuNTc2IDM0Mi4xMTMgNzIuMDIyQzMyOS4yNCA0MC4xNTEgMzAxLjExNSAxNi42NTUgMjk2LjM2NSAxMy4wM0MyNjguNDkyIDM3LjQwMSAyNDUuNDkyIDY5LjAyMiAyNDQuMzY3IDEwMi41MjFDMjQ1LjQ5MiAxMzEuMDIxIDI2Mi45OTIgMTU5LjAxNyAyODUuMjQgMTgxLjUxN0wyNDMuNzQyIDIyMy4wMTJDMjQ1LjM2NyAyMTcuMDEzIDI0Ni42MTcgMjEwLjg4OCAyNDYuODY3IDIwNC41MTNDMjQ2Ljc0MiAxNTcuNzY3IDIwMC43NDQgMTE5LjUyMSAxOTQuNDk0IDExNC44OTZDMTY2LjYxOSAxMzkuMjcxIDE0My43NDYgMTcwLjg5MiAxNDIuNDk2IDIwNC4zODhDMTQzLjYyMSAyMzIuODg3IDE2MS4yNDQgMjYwLjc2MiAxODMuNDk0IDI4My4yNjJMMTQxLjk5NiAzMjQuNzU0QzE0My42MjEgMzE4Ljc1OCAxNDQuNzQ2IDMxMi43NTggMTQ0Ljk5NiAzMDYuMzgzQzE0NC44NzEgMjU5LjUxMiA5OC44NzEgMjIxLjM4OCA5Mi42MjEgMjE2LjYzOEM2NC43NDggMjQxLjAxMiA0MS44NzMgMjcyLjYzNyA0MC43NDggMzA2LjEzM0M0MS43NDggMzM0LjYyOSA1OS4zNzMgMzYyLjUwMyA4MS42MjMgMzg1LjEyOEw5LjM3NSA0NTcuMzdDLTMuMTI1IDQ2OS44NyAtMy4xMjUgNDkwLjExOSA5LjM3NSA1MDIuNjE5QzIxLjg4MyA1MTUuMTI3IDQyLjExNiA1MTUuMTI3IDU0LjYyMyA1MDIuNjE5TDEyNi44NzEgNDMwLjM3NEMxNDkuNjIxIDQ1My4xMjQgMTc3LjI0NCA0NzAuNDk1IDIwNi4yNDQgNDcxLjQ5NUMyMzkuNDkyIDQ3MC4yNDUgMjcxLjk5IDQ0Ni42MjQgMjk1Ljk5IDQxOS4yNTNDMjc4Ljk5IDM5OS43NTMgMjQ1Ljc0MiAzNjguNjI4IDIwNi40OTQgMzY3LjI1M0MxOTkuODY5IDM2Ny4yNTMgMTkzLjQ5NCAzNjguMzc4IDE4Ny4yNDQgMzcwLjAwM0wyMjguNzQyIDMyOC41MDRDMjUxLjM2NyAzNTEuMzc5IDI3OC45OSAzNjguNzUzIDMwOC4xMTUgMzY5Ljc1M0MzNDEuMjM4IDM2OC41MDMgMzczLjczOCAzNDQuODc5IDM5Ny44NjEgMzE3LjM4M0MzODAuODYzIDI5OC4wMDggMzQ3LjQ4OCAyNjYuNzYyIDMwOC4yNCAyNjUuNTEyQzMwMS42MTUgMjY1LjUxMiAyOTUuMjQgMjY2LjUxMiAyODkuMTE1IDI2OC4xMzdMMzMwLjQ5IDIyNi43NjJDMzUzLjIzOCAyNDkuNTEyIDM4MC44NjMgMjY2Ljg4NyA0MDkuODYxIDI2Ny44ODdDNDQzLjExMSAyNjYuNjM3IDQ3NS42MDkgMjQzLjAxMiA0OTkuNjA5IDIxNS42MzhDNDg2Ljg1OSAyMDEuMDEzIDQ2NC45ODQgMTc5Ljc2NyA0MzguMjM2IDE2OS41MTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Wheat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.734 113.521C507.109 86.147 514.107 41.526 511.484 0.53C482.484 -1.345 431.236 0.28 398.861 30.401C361.738 67.772 367.863 134.771 369.113 143.396C410.736 146.271 454.109 139.271 481.734 113.521ZM438.236 169.517C395.357 179.821 365.919 175.32 341.113 173.642C340.161 166.881 329.765 121.576 342.113 72.022C329.24 40.151 301.115 16.655 296.365 13.03C268.492 37.401 245.492 69.022 244.367 102.521C245.492 131.021 262.992 159.017 285.24 181.517L243.742 223.012C245.367 217.013 246.617 210.888 246.867 204.513C246.742 157.767 200.744 119.521 194.494 114.896C166.619 139.271 143.746 170.892 142.496 204.388C143.621 232.887 161.244 260.762 183.494 283.262L141.996 324.754C143.621 318.758 144.746 312.758 144.996 306.383C144.871 259.512 98.871 221.388 92.621 216.638C64.748 241.012 41.873 272.637 40.748 306.133C41.748 334.629 59.373 362.503 81.623 385.128L9.375 457.37C-3.125 469.87 -3.125 490.119 9.375 502.619C21.883 515.127 42.116 515.127 54.623 502.619L126.871 430.374C149.621 453.124 177.244 470.495 206.244 471.495C239.492 470.245 271.99 446.624 295.99 419.253C278.99 399.753 245.742 368.628 206.494 367.253C199.869 367.253 193.494 368.378 187.244 370.003L228.742 328.504C251.367 351.379 278.99 368.753 308.115 369.753C341.238 368.503 373.738 344.879 397.861 317.383C380.863 298.008 347.488 266.762 308.24 265.512C301.615 265.512 295.24 266.512 289.115 268.137L330.49 226.762C353.238 249.512 380.863 266.887 409.861 267.887C443.111 266.637 475.609 243.012 499.609 215.638C486.859 201.013 464.984 179.767 438.236 169.517Z" />
        </Icon>
    </>
}