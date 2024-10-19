
import { Icon } from "../../index";

/**
 * A component that renders the `knife-kitchen` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/knife-kitchen?s=light knife-kitchen}
 * @preview ![knife-kitchen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjYuMzIzIDMyMi4wOTdDMzYwLjE5OCAzMjguNDczIDM2MC40MTcgMzM4LjYgMzY2Ljc5MSAzNDQuNzI2QzM2Ny44MjIgMzQ1Ljc0MiAzNjguMzU0IDM0Ni45NDUgMzY4LjM1NCAzNDguMzk4QzM2OC4zNTQgMzQ5Ljc3MyAzNjcuODIyIDM1MC45NzcgMzY2Ljc2IDM1MS45OTJMMzEyLjk4MSA0MDMuNjg3QzI2MS43OTYgNDUyLjg5OCAxOTQuMDE4IDQ3OS45OTUgMTIyLjE3OCA0NzkuOTk1QzkyLjk5MiA0NzkuOTk1IDYzLjk5MyA0NzUuNDYzIDM2LjEyIDQ2Ni41NEMzMy45OTUgNDY1Ljg1MyAzMi41ODkgNDY0LjQxNSAzMi4xNTEgNDYyLjQxNUMzMS43NzYgNDYwLjc4OSAzMi4yNzYgNDU5LjIxMSAzMy42ODIgNDU3Ljg4M0wyNjUuMDc3IDIzNS40OTFDMjcxLjQ1MiAyMjkuMzgxIDI3MS42NCAyMTkuMjM5IDI2NS41MTUgMjEyLjg2M0MyNTkuNDIxIDIwNi40ODcgMjQ5LjI5NyAyMDYuMzMxIDI0Mi44OTEgMjEyLjQyNUwxMS41NTggNDM0Ljc1NEMxLjk5NiA0NDMuODY1IC0xLjk3MiA0NTYuODk4IDAuOTM0IDQ2OS41MjVDMy44NCA0ODIuNDY0IDEzLjI0NiA0OTIuNzE2IDI2LjI0NSA0OTYuOTgyQzU3LjQgNTA2Ljk1MiA4OS42OCA1MTIgMTIyLjE3OCA1MTJDMjAyLjMzIDUxMiAyNzcuOTUyIDQ4MS43MyAzMzUuMTY4IDQyNi43NTNMMzg4Ljk0NiAzNzUuMDU4QzM5Ni4yOSAzNjcuOTc5IDQwMC4zNTIgMzU4LjUwOSA0MDAuMzUyIDM0OC40OTJDNDAwLjQxNSAzMzguMjg3IDM5Ni4zNTIgMzI4Ljc1NSAzODguOTE1IDMyMS42MjlDMzgyLjU0MSAzMTUuNTE4IDM3Mi4zODUgMzE1LjcyMiAzNjYuMzIzIDMyMi4wOTdaTTU2MC41OTQgNDIuOTYzTDUzMC42OSAxNC4yNEM1MTAuOTA5IC00LjcxNiA0NzguNjkyIC00Ljc3OCA0NTguNzg3IDE0LjI0TDI5NC45ODIgMTcxLjYyM0MyOTAuNTQ1IDE3NS45NTEgMjg4LjAxNCAxODEuOTY4IDI4OC4wMTQgMTg4LjEyNUMyODguMDE0IDE5NC4zNzYgMjkwLjYwNyAyMDAuNDM5IDI5NS4wNzYgMjA0LjcwNUwzOTAuNDc4IDI5Ni41QzM5NC44MjEgMzAwLjYyNiA0MDAuNDc3IDMwMi44OTIgNDA2LjQxNCAzMDIuODkyQzQxMS41NyAzMDIuODkyIDQxNi42NjQgMzAxLjEyNiA0MjAuODIgMjk3LjgyOEw0NTEuNiAyNzIuOTY1QzQ2MS41MDUgMjYzLjQ4IDQ2Ni45NzQgMjUwLjc3NSA0NjYuOTc0IDIzNy4xNjNWMjA4Ljg3OEw1NjAuNjI2IDExNC42OTJDNTcwLjUzMSAxMDUuMTc1IDU3NiA5Mi40MjQgNTc2IDc4Ljc5N0M1NzYgNjUuMTg1IDU3MC41MzEgNTIuNDY1IDU2MC41OTQgNDIuOTYzWk01MzguMTg5IDkxLjg3N0w0MzQuOTc2IDE5NS42ODlWMjM3LjE2M0M0MzQuOTc2IDI0Mi4wMjMgNDMzLjA2OSAyNDYuMzk5IDQzMC41MDcgMjQ4LjkzMUw0MDYuOTQ2IDI2Ny45MThMMzI0LjAxMiAxODguMTI1TDQ4MC45NDIgMzcuMzM3QzQ4OC40NDIgMzAuMTggNTAxLjA5NyAzMC4xOTYgNTA4LjUzNCAzNy4zMjJMNTM4LjQ3MSA2Ni4wOTJDNTQyLjA5NSA2OS41NDUgNTQ0LjAwMiA3My45MzcgNTQ0LjAwMiA3OC43OTdDNTQ0LjAwMiA4My42ODggNTQyLjA5NSA4OC4xMjYgNTM4LjE4OSA5MS44NzdaTTQ5Ni4wMDQgNjMuOTM1QzQ4Ny4xNjggNjMuOTM1IDQ4MC4wMDUgNzEuMDk4IDQ4MC4wMDUgNzkuOTM3QzQ4MC4wMDUgODguNzc1IDQ4Ny4xNjggOTUuOTQgNDk2LjAwNCA5NS45NFM1MTIuMDAzIDg4Ljc3NSA1MTIuMDAzIDc5LjkzN0M1MTIuMDAzIDcxLjA5OCA1MDQuODM5IDYzLjkzNSA0OTYuMDA0IDYzLjkzNVpNNDMyLjAwNyAxMjcuOTQ0QzQyMy4xNzEgMTI3Ljk0NCA0MTYuMDA4IDEzNS4xMDcgNDE2LjAwOCAxNDMuOTQ3QzQxNi4wMDggMTUyLjc4NCA0MjMuMTcxIDE1OS45NDkgNDMyLjAwNyAxNTkuOTQ5UzQ0OC4wMDYgMTUyLjc4NCA0NDguMDA2IDE0My45NDdDNDQ4LjAwNiAxMzUuMTA3IDQ0MC44NDIgMTI3Ljk0NCA0MzIuMDA3IDEyNy45NDRaIi8+PC9zdmc+|width=32|height=32)
 */
const KnifeKitchen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M366.323 322.097C360.198 328.473 360.417 338.6 366.791 344.726C367.822 345.742 368.354 346.945 368.354 348.398C368.354 349.773 367.822 350.977 366.76 351.992L312.981 403.687C261.796 452.898 194.018 479.995 122.178 479.995C92.992 479.995 63.993 475.463 36.12 466.54C33.995 465.853 32.589 464.415 32.151 462.415C31.776 460.789 32.276 459.211 33.682 457.883L265.077 235.491C271.452 229.381 271.64 219.239 265.515 212.863C259.421 206.487 249.297 206.331 242.891 212.425L11.558 434.754C1.996 443.865 -1.972 456.898 0.934 469.525C3.84 482.464 13.246 492.716 26.245 496.982C57.4 506.952 89.68 512 122.178 512C202.33 512 277.952 481.73 335.168 426.753L388.946 375.058C396.29 367.979 400.352 358.509 400.352 348.492C400.415 338.287 396.352 328.755 388.915 321.629C382.541 315.518 372.385 315.722 366.323 322.097ZM560.594 42.963L530.69 14.24C510.909 -4.716 478.692 -4.778 458.787 14.24L294.982 171.623C290.545 175.951 288.014 181.968 288.014 188.125C288.014 194.376 290.607 200.439 295.076 204.705L390.478 296.5C394.821 300.626 400.477 302.892 406.414 302.892C411.57 302.892 416.664 301.126 420.82 297.828L451.6 272.965C461.505 263.48 466.974 250.775 466.974 237.163V208.878L560.626 114.692C570.531 105.175 576 92.424 576 78.797C576 65.185 570.531 52.465 560.594 42.963ZM538.189 91.877L434.976 195.689V237.163C434.976 242.023 433.069 246.399 430.507 248.931L406.946 267.918L324.012 188.125L480.942 37.337C488.442 30.18 501.097 30.196 508.534 37.322L538.471 66.092C542.095 69.545 544.002 73.937 544.002 78.797C544.002 83.688 542.095 88.126 538.189 91.877ZM496.004 63.935C487.168 63.935 480.005 71.098 480.005 79.937C480.005 88.775 487.168 95.94 496.004 95.94S512.003 88.775 512.003 79.937C512.003 71.098 504.839 63.935 496.004 63.935ZM432.007 127.944C423.171 127.944 416.008 135.107 416.008 143.947C416.008 152.784 423.171 159.949 432.007 159.949S448.006 152.784 448.006 143.947C448.006 135.107 440.842 127.944 432.007 127.944Z" />
    </Icon>
);

export default KnifeKitchen;