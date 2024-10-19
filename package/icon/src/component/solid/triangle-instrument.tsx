
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `triangle-instrument` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=solid triangle-instrument}
 * @preview ![triangle-instrument](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuNzY5IDM2OC4xMjVDNTE1Ljg5NiAzOTYuODc1IDUxNi43NzEgNDMzLjM3MyA1MDAuMDE5IDQ2Mi44NzNDNDgyLjg5MiA0OTMuMzczIDQ1MC43NjUgNTEyLjEyMyA0MTUuODg4IDUxMS45OThIOTYuMTExQzYxLjIzNCA1MTIuMTIzIDI5LjEwNyA0OTMuMzczIDExLjk4IDQ2Mi44NzNDLTQuNzcyIDQzMy4zNzMgLTMuODk1IDM5Ni44NzUgMTQuMjMgMzY4LjEyNUwxNzMuOTk0IDEwOS4zNzVDMTg1Ljc0NCA5MC4zNzUgMjAzLjYyMSA3Ny4xMjUgMjIzLjk5OCA3MFYzMi4wMDJDMjIzLjk5OCAxNC4zMjggMjM4LjMyNSAwIDI1NiAwSDI1NkMyNzMuNjc0IDAgMjg4LjAwMiAxNC4zMjggMjg4LjAwMiAzMi4wMDJWNzBDMzA4LjUwNCA3Ny4xMjUgMzI2LjI1NiA5MC4zNzUgMzM4LjAwNiAxMDkuMzc1TDM3NC4xMzQgMTY3Ljg3NUwzNzQuMTAzIDE2Ny45MzhMNDcxLjA4OCA3MC45OThDNDgwLjQ1MyA2MS42MzEgNDk1LjczOCA2MS42NzIgNTA1LjA1MiA3MS4wOTJDNTE0LjM1MSA4MC40OTYgNTE0LjMxIDk1LjY0NSA1MDQuOTU5IDEwNC45OThMMzA4LjYxOSAzMDEuMjVDMzEwLjg3NSAzMDcuNDUzIDMxMS44MzYgMzEzLjgyOCAzMTEuODkyIDMyMC4xNThDMzExLjkwNCAzMjEuMTg3IDMxMS41NDcgMzIyLjE1MiAzMTEuNTAyIDMyMy4xNzhDMzExLjI3MSAzMjguMjQ4IDMxMC42NSAzMzMuMjQgMzA5LjA5NyAzMzguMDM3QzMwOC4zODggMzQwLjI2OCAzMDcuMDkgMzQyLjIwMSAzMDYuMTA5IDM0NC4zM0MzMDQuNTcyIDM0Ny42MjcgMzAzLjE0MiAzNTAuOTE0IDMwMC45NyAzNTMuODgzQzI5OS4wNSAzNTYuNTU1IDI5Ni41MzcgMzU4LjY5NSAyOTQuMTQgMzYxLjAyM0MyOTIuNTUyIDM2Mi41NDUgMjkxLjQxIDM2NC4zOTggMjg5LjYyMSAzNjUuNzVDMjg5LjA5OSAzNjYuMTQ4IDI4OC40NjUgMzY2LjI3OSAyODcuOTMzIDM2Ni42NThDMjg3LjA3MiAzNjcuMjczIDI4Ni41MzEgMzY4LjE3OCAyODUuNjI3IDM2OC43NUMyODMuMzM0IDM3MC4yMjMgMjgwLjczOCAzNzAuNzIxIDI3OC4zMTYgMzcxLjgyNkMyNzYuMDA0IDM3Mi44NzMgMjczLjc5NyAzNzQuMDIgMjcxLjM5IDM3NC43NEMyNjcuNzM4IDM3NS44NDggMjY0LjExNSAzNzYuMzM4IDI2MC4zNjEgMzc2LjY4NkMyNTguMTE1IDM3Ni44OTUgMjU1Ljk0NSAzNzcuMTMzIDI1My42OTMgMzc3LjA3QzI0OS43ODkgMzc2Ljk3MSAyNDYuMDY2IDM3Ni4zNSAyNDIuMjU3IDM3NS40NTNDMjQwLjIxMyAzNzQuOTY5IDIzOC4yNCAzNzQuNDcxIDIzNi4yNDYgMzczLjc1MkMyMzIuMzMgMzcyLjM2MyAyMjguNzMgMzcwLjUwMiAyMjUuMTUyIDM2OC4yNUMyMjQuMjY1IDM2Ny42ODYgMjIzLjI0IDM2Ny40OTIgMjIyLjM3NyAzNjYuODc1QzIyMS41NjIgMzY2LjI5NyAyMjEuMDc0IDM2NS40NDMgMjIwLjI5OCAzNjQuODI4QzIxOC41NDEgMzYzLjQ0MyAyMTYuNDg0IDM2Mi42MTMgMjE0Ljg3MSAzNjFDMjEzLjQxOCAzNTkuNTM3IDIxMi42ODcgMzU3LjY2NiAyMTEuNDIyIDM1Ni4wODRDMjEwLjA3NiAzNTQuNDIgMjA4LjkzNyAzNTIuNzA3IDIwNy43OTcgMzUwLjkxNkMyMDUuNjY0IDM0Ny41NDUgMjAzLjgwOCAzNDQuMTg4IDIwMi40NDMgMzQwLjUxQzIwMS42NjYgMzM4LjQ0OSAyMDEuMjA3IDMzNi4zNjEgMjAwLjY3MyAzMzQuMjIzQzE5OS43NzMgMzMwLjU0NSAxOTkuMDE1IDMyNi45NTcgMTk4Ljg1OSAzMjMuMThDMTk4Ljc0IDMyMC42NzQgMTk5LjA4IDMxOC4yMTMgMTk5LjI5NyAzMTUuNjg2QzE5OS42MTMgMzEyLjIwNyAxOTkuOTEyIDMwOC44MjIgMjAwLjg3OSAzMDUuNDJDMjAxLjA5OSAzMDQuNjE3IDIwMC45OTQgMzAzLjc5NyAyMDEuMjUyIDMwM0MyMDIuMDQzIDMwMC41ODYgMjAzLjU4IDI5OC42NSAyMDQuNjYyIDI5Ni40MDZDMjA1LjYzOCAyOTQuMzgxIDIwNi4wMDkgMjkyLjE4NiAyMDcuMjQ2IDI5MC4yNUMyMDcuNjI3IDI4OS42NDggMjA4LjI0IDI4OS4yOTcgMjA4LjY0IDI4OC43MTNDMjEwLjgxMiAyODUuNTQ5IDIxMy41MTcgMjgyLjk3MSAyMTYuMjQ4IDI4MC4zMzRDMjE3Ljk4IDI3OC42NjYgMjE5LjQ0MyAyNzYuNzM2IDIyMS4zNTMgMjc1LjMxOEMyMjQuODc3IDI3Mi42ODIgMjI4Ljg2NyAyNzAuODU5IDIzMi45MTggMjY5LjA5OEMyMzQuNDQzIDI2OC40NDEgMjM1Ljc2OSAyNjcuNDA0IDIzNy4zNDUgMjY2Ljg4M0MyNDMuMDI3IDI2NC45ODYgMjQ5LjAzNyAyNjMuOTc5IDI1NS4yNCAyNjMuOTg2QzI1NS4zNTEgMjYzLjk4NiAyNTUuNDU3IDI2My45MzggMjU1LjU2OCAyNjMuOTM4QzI1NS43MTYgMjYzLjkzOSAyNTUuODQ5IDI2My44NzMgMjU1Ljk5OCAyNjMuODc1QzI2Mi4zNzMgMjY0IDI2OC43NDYgMjY1LjEyNSAyNzQuNzQ2IDI2Ny4yNUwyOTAuMDMxIDI1MS45NzFMMzI3LjYzMSAyMTQuMzc1TDI4My41MDIgMTQzQzI3NS4xMjcgMTI5LjUgMjYxLjUgMTI4IDI1NiAxMjhTMjM2Ljg3MyAxMjkuNSAyMjguNDk4IDE0My4xMjVMNjguNjA5IDQwMS43NUM2Mi44NTkgNDEwLjg3MyA2Mi40ODQgNDIyLjM3MyA2Ny44NTkgNDMxLjc0OEM3My42MDkgNDQxLjk5OCA4NC40ODYgNDQ4LjI0OCA5Ni4xMTEgNDQ3Ljk5OEg0MTUuODg4QzQyNy41MTMgNDQ4LjI0OCA0MzguMzkgNDQxLjk5OCA0NDQuMTQgNDMxLjc0OEM0NDkuNTE1IDQyMi4zNzMgNDQ5LjE0IDQxMC44NzMgNDQzLjM5IDQwMS43NUwzNzAuODg0IDI4NC4zNzVMNDE3LjM4OCAyMzcuODc1TDQ5Ny43NjkgMzY4LjEyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TriangleInstrument(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.769 368.125C515.896 396.875 516.771 433.373 500.019 462.873C482.892 493.373 450.765 512.123 415.888 511.998H96.111C61.234 512.123 29.107 493.373 11.98 462.873C-4.772 433.373 -3.895 396.875 14.23 368.125L173.994 109.375C185.744 90.375 203.621 77.125 223.998 70V32.002C223.998 14.328 238.325 0 256 0H256C273.674 0 288.002 14.328 288.002 32.002V70C308.504 77.125 326.256 90.375 338.006 109.375L374.134 167.875L374.103 167.938L471.088 70.998C480.453 61.631 495.738 61.672 505.052 71.092C514.351 80.496 514.31 95.645 504.959 104.998L308.619 301.25C310.875 307.453 311.836 313.828 311.892 320.158C311.904 321.187 311.547 322.152 311.502 323.178C311.271 328.248 310.65 333.24 309.097 338.037C308.388 340.268 307.09 342.201 306.109 344.33C304.572 347.627 303.142 350.914 300.97 353.883C299.05 356.555 296.537 358.695 294.14 361.023C292.552 362.545 291.41 364.398 289.621 365.75C289.099 366.148 288.465 366.279 287.933 366.658C287.072 367.273 286.531 368.178 285.627 368.75C283.334 370.223 280.738 370.721 278.316 371.826C276.004 372.873 273.797 374.02 271.39 374.74C267.738 375.848 264.115 376.338 260.361 376.686C258.115 376.895 255.945 377.133 253.693 377.07C249.789 376.971 246.066 376.35 242.257 375.453C240.213 374.969 238.24 374.471 236.246 373.752C232.33 372.363 228.73 370.502 225.152 368.25C224.265 367.686 223.24 367.492 222.377 366.875C221.562 366.297 221.074 365.443 220.298 364.828C218.541 363.443 216.484 362.613 214.871 361C213.418 359.537 212.687 357.666 211.422 356.084C210.076 354.42 208.937 352.707 207.797 350.916C205.664 347.545 203.808 344.188 202.443 340.51C201.666 338.449 201.207 336.361 200.673 334.223C199.773 330.545 199.015 326.957 198.859 323.18C198.74 320.674 199.08 318.213 199.297 315.686C199.613 312.207 199.912 308.822 200.879 305.42C201.099 304.617 200.994 303.797 201.252 303C202.043 300.586 203.58 298.65 204.662 296.406C205.638 294.381 206.009 292.186 207.246 290.25C207.627 289.648 208.24 289.297 208.64 288.713C210.812 285.549 213.517 282.971 216.248 280.334C217.98 278.666 219.443 276.736 221.353 275.318C224.877 272.682 228.867 270.859 232.918 269.098C234.443 268.441 235.769 267.404 237.345 266.883C243.027 264.986 249.037 263.979 255.24 263.986C255.351 263.986 255.457 263.938 255.568 263.938C255.716 263.939 255.849 263.873 255.998 263.875C262.373 264 268.746 265.125 274.746 267.25L290.031 251.971L327.631 214.375L283.502 143C275.127 129.5 261.5 128 256 128S236.873 129.5 228.498 143.125L68.609 401.75C62.859 410.873 62.484 422.373 67.859 431.748C73.609 441.998 84.486 448.248 96.111 447.998H415.888C427.513 448.248 438.39 441.998 444.14 431.748C449.515 422.373 449.14 410.873 443.39 401.75L370.884 284.375L417.388 237.875L497.769 368.125Z" />
        </Icon>
    </>
}