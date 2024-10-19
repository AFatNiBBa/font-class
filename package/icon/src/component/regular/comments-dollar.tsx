
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comments-dollar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comments-dollar?s=regular comments-dollar}
 * @preview ![comments-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTIuNzE1IDE1OS41TDIwNy45NjEgMTU4LjEzM0MxODcuNjQ1IDE1Mi4xNiAxODguMTI3IDE0OS40IDE4OC43ODQgMTQ1LjU3QzE4OS45NjEgMTM4Ljg3NSAyMDMuMDA2IDEzNy4yNCAyMTQuNzI1IDEzOS4wMzVDMjE5LjUyIDEzOS43NTggMjI0Ljc4NCAxNDEuNDQ1IDIyOS44MDUgMTQzLjE4OEMyMzguNzExIDE0Ni4yNjggMjQ4LjUxNCAxNDEuNTI1IDI1MS42MjEgMTMyLjYwN0MyNTQuNzI5IDEyMy42NiAyNTAuMDAyIDExMy44ODMgMjQxLjA1NSAxMTAuNzc1QzIzNC44NjggMTA4LjY0NiAyMjkuODE5IDEwNy4yODEgMjI1LjE0NSAxMDYuMjU2Vjk3LjE0M0MyMjUuMTQ1IDg3LjY4OCAyMTcuNDcxIDgwIDIwOC4wMDIgODBTMTkwLjg1OCA4Ny42ODggMTkwLjg1OCA5Ny4xNDNWMTA1LjcwN0MxNzEuNjM5IDEwOS43OTUgMTU4LjEyMyAxMjEuNzg1IDE1NS4wMDYgMTM5LjczMkMxNDguNjU5IDE3Ni40NTUgMTgzLjQ1MiAxODYuNjYgMTk4LjMwNSAxOTEuMDI1TDIwMy4yODcgMTkyLjQ3M0MyMjguMzg1IDE5OS42NSAyMjcuOTcxIDIwMi4wNjIgMjI3LjIyMSAyMDYuNDI4QzIyNi4wNDEgMjEzLjEyNSAyMTIuOTk2IDIxNC43ODUgMjAxLjIzOSAyMTIuOTYzQzE5NS4yOTEgMjEyLjA4IDE4Ny42ODQgMjA5LjM0OCAxODAuOTYxIDIwNi45MzdMMTc3LjEzMSAyMDUuNTQ1QzE2OC4yMTEgMjAyLjQ2MyAxNTguNDIgMjA3LjA5OCAxNTUuMjYgMjE2LjAxOEMxNTIuMTE0IDIyNC45MzggMTU2Ljc4NyAyMzQuNzQgMTY1LjcyMSAyMzcuOUwxNjkuMzc3IDIzOS4xODhDMTc2LjAyNiAyNDEuNTc4IDE4My40MTYgMjQzLjk3OSAxOTAuODU4IDI0NS42MjVWMjU0Ljg1N0MxOTAuODU4IDI2NC4zMTIgMTk4LjUzNCAyNzIgMjA4LjAwMiAyNzJTMjI1LjE0NSAyNjQuMzEyIDIyNS4xNDUgMjU0Ljg1N1YyNDYuMDY4QzI0NC4zMTEgMjQxLjk1OSAyNTcuODkxIDIzMC4xODcgMjYwLjk5NiAyMTIuMjY4QzI2Ny40MTIgMTc1LjE3IDIzMS44MjcgMTY0Ljk2MyAyMTIuNzE1IDE1OS41Wk01OTkuNTk0IDQ0My43MzZDNjI0LjgyOCA0MTMuOTQ1IDY0MCAzNzYuNjM1IDY0MCAzMzZDNjQwIDIzOC43OTcgNTU0LjAzOSAxNjAgNDQ4IDE2MEM0NDcuNjg2IDE2MCA0NDcuMzgxIDE2MC4wNDEgNDQ3LjA2NyAxNjAuMDQzQzQ0Ny41MzQgMTY1LjMyOCA0NDggMTcwLjYxMyA0NDggMTc2QzQ0OCAyNzQuNjE3IDM2OC4zMjEgMzU3LjI0OCAyNjEuODc5IDM3OC41MjNDMjgyLjY1OSA0NTUuMTQzIDM1Ny45ODcgNTEyIDQ0OCA1MTJDNDgxLjY5NCA1MTIgNTEzLjMyMyA1MDMuOTkyIDU0MC44NDggNDkwLjAxOEM1NjUuMjQ0IDUwMi4wMiA1OTYuMDg2IDUxMiA2MzIuMzQgNTEyQzYzNS4zOTkgNTEyIDYzOC4xIDUxMC4yNzUgNjM5LjM2IDUwNy4zOTVDNjQwLjU4OCA1MDQuNTE2IDY0MC4wMTggNTAxLjI0NiA2MzcuOTE4IDQ5OS4wNDFDNjM3LjU2NyA0OTguNjg5IDYxNS44NjggNDc1LjI2NiA1OTkuNTk0IDQ0My43MzZaTTQxNiAxNzZDNDE2IDc4Ljc5NyAzMjIuODc1IDAgMjA4IDBTMCA3OC43OTcgMCAxNzZDMCAyMTcuNjI3IDE3LjE3NiAyNTUuODEyIDQ1LjcyOSAyODUuOTQ3QzI5LjM4NSAzMTcuMzc3IDcuMjYgMzQxLjUxNiA2LjczOSAzNDEuOTA2Qy0wLjAwNyAzNDkuMDU3IC0xLjg5NiAzNTkuNzE1IDIuMDE4IDM2OC44ODlDNS45MyAzNzguMDYyIDE0Ljk2OSAzODQgMjQuOTUyIDM4NEM3OS4xMjkgMzg0IDEyMy4yNjggMzY0Ljc2NCAxNTMuOTQyIDM0NS43ODNDMTcxLjIwNyAzNDkuNzExIDE4OS4yNjggMzUyIDIwOCAzNTJDMzIyLjg3NSAzNTIgNDE2IDI3My4yMDEgNDE2IDE3NlpNMjA4IDMwNEMxOTMuODQgMzA0IDE3OS4yMzUgMzAyLjMxMSAxNjQuNTkgMjk4Ljk3OUwxNDUuNDExIDI5NC42MTdMMTI4LjY4NiAzMDQuOTY1QzExMS42ODYgMzE1LjQ4NCA5NC4yNjIgMzIzLjM1NSA3Ni41NDcgMzI4LjUzN0M4MC43MzEgMzIxLjg2OSA4NC43MzkgMzE0Ljk3MSA4OC4zMTUgMzA4LjA5MkwxMDQuMDkgMjc3Ljc1NEw4MC41NzMgMjUyLjkzNEM2NS43MTMgMjM3LjI1IDQ4IDIxMS4xNzQgNDggMTc2QzQ4IDEwNS40MiAxMTkuNzc2IDQ4IDIwOCA0OFMzNjggMTA1LjQyIDM2OCAxNzZTMjk2LjIyNSAzMDQgMjA4IDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentsDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M212.715 159.5L207.961 158.133C187.645 152.16 188.127 149.4 188.784 145.57C189.961 138.875 203.006 137.24 214.725 139.035C219.52 139.758 224.784 141.445 229.805 143.188C238.711 146.268 248.514 141.525 251.621 132.607C254.729 123.66 250.002 113.883 241.055 110.775C234.868 108.646 229.819 107.281 225.145 106.256V97.143C225.145 87.688 217.471 80 208.002 80S190.858 87.688 190.858 97.143V105.707C171.639 109.795 158.123 121.785 155.006 139.732C148.659 176.455 183.452 186.66 198.305 191.025L203.287 192.473C228.385 199.65 227.971 202.062 227.221 206.428C226.041 213.125 212.996 214.785 201.239 212.963C195.291 212.08 187.684 209.348 180.961 206.937L177.131 205.545C168.211 202.463 158.42 207.098 155.26 216.018C152.114 224.938 156.787 234.74 165.721 237.9L169.377 239.188C176.026 241.578 183.416 243.979 190.858 245.625V254.857C190.858 264.312 198.534 272 208.002 272S225.145 264.312 225.145 254.857V246.068C244.311 241.959 257.891 230.187 260.996 212.268C267.412 175.17 231.827 164.963 212.715 159.5ZM599.594 443.736C624.828 413.945 640 376.635 640 336C640 238.797 554.039 160 448 160C447.686 160 447.381 160.041 447.067 160.043C447.534 165.328 448 170.613 448 176C448 274.617 368.321 357.248 261.879 378.523C282.659 455.143 357.987 512 448 512C481.694 512 513.323 503.992 540.848 490.018C565.244 502.02 596.086 512 632.34 512C635.399 512 638.1 510.275 639.36 507.395C640.588 504.516 640.018 501.246 637.918 499.041C637.567 498.689 615.868 475.266 599.594 443.736ZM416 176C416 78.797 322.875 0 208 0S0 78.797 0 176C0 217.627 17.176 255.812 45.729 285.947C29.385 317.377 7.26 341.516 6.739 341.906C-0.007 349.057 -1.896 359.715 2.018 368.889C5.93 378.062 14.969 384 24.952 384C79.129 384 123.268 364.764 153.942 345.783C171.207 349.711 189.268 352 208 352C322.875 352 416 273.201 416 176ZM208 304C193.84 304 179.235 302.311 164.59 298.979L145.411 294.617L128.686 304.965C111.686 315.484 94.262 323.355 76.547 328.537C80.731 321.869 84.739 314.971 88.315 308.092L104.09 277.754L80.573 252.934C65.713 237.25 48 211.174 48 176C48 105.42 119.776 48 208 48S368 105.42 368 176S296.225 304 208 304Z" />
        </Icon>
    </>
}