
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `meat` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meat?s=regular meat}
 * @preview ![meat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDMuOTc0IDY4LjQ4NEMzOTkuNDcgMjMuOTk0IDM0NS4wODkgMCAyOTkuMDg2IDBDMjYwLjQ1NyAwIDIzNy4wOCAxOC45OTYgMjMwLjMzIDI1Ljg2OUMxOTEuNzAxIDY0LjQ4NiAxMjguMDcgMTM5LjU5NCAxMjguMDcgMjA5LjQ1NVYyODIuMDYyTDEyOCAyODIuMTMzVjMwOS43OTFMMTE5LjQ0OSAzMTguMzRDMTA5LjgyMiAzMjguMDkgOTUuNDQ3IDMyOS40NjUgODIuNjk1IDMyNC4zNEM1Ni4wNjggMzEzLjcxNyAyNS42OTEgMzIzLjM0IDkuOTM5IDM0Ny4yMTNDLTUuODExIDM3MS4wODQgLTIuNTYxIDQwMi44MzIgMTcuNjkxIDQyMy4wOEMzMi45NDEgNDM4LjMyOCA1NC4xOTMgNDQyLjcwMyA3My44MiA0MzguMjAzQzY5LjMyIDQ1Ny43MDEgNzMuNjk1IDQ3OC45NDkgODguOTQ3IDQ5NC4xOTdDMTA5LjE5NyA1MTQuNTcgMTQwLjk1MSA1MTcuODE4IDE2NC45NTMgNTAyLjA3QzE4OC44MyA0ODYuMzIyIDE5OC40NTUgNDU1Ljk1MSAxODcuNzA1IDQyOS4yMDNDMTgyLjcwMyA0MTYuNTggMTg0LjA3OCA0MDIuMjA3IDE5My43MDUgMzkyLjQ1N0wyMDIuMjg5IDM4NEgyMjkuNzQ2TDIyOS44MyAzODMuOTE2SDMwMi44MzZDMzg0LjcxOCAzODMuOTE2IDQ4My45NzggMjg5LjQzOCA0OTMuMzUzIDI3Mi44MTRDNTMwLjczMiAyMjMuMzI2IDUxMC43MyAxMzUuMjIxIDQ0My45NzQgNjguNDg0Wk0zMDIuODM2IDMzNS45MjZIMjA4LjA3NEMxOTAuNDAxIDMzNS45MjYgMTc2LjA3NCAzMjEuNTk5IDE3Ni4wNzQgMzAzLjkyNlYyMDkuNDU1QzE3Ni4wNzQgMTg2LjU4NCAxODcuODI2IDE1Ny43MTUgMjA4LjQ1MyAxMjYuNzIzQzIxNy4wNzggMTY2LjA4OCAyMzkuODMgMjA1LjgzIDI3My4yMDkgMjM5LjE5N0MzMDYuNDYxIDI3Mi40NDEgMzQ2LjcxNCAyOTUuMTg2IDM4NS4zNDMgMzAzLjY4NEMzNTQuMzM5IDMyNC4zMDUgMzI1LjU4OCAzMzUuOTI2IDMwMi44MzYgMzM1LjkyNlpNNDUyLjcyNCAyNDcuODJDNDI5LjIyMiAyNzEuMzE2IDM2Mi44NDEgMjYwLjk0MyAzMDcuMDg2IDIwNS4yMDVDMjUzLjMzMiAxNTEuNDY3IDIzOS43MDUgODQuMzU1IDI2NC4zMzIgNTkuNzM2QzI4Ny44MzQgMzYuMzY3IDM1NC4wODkgNDYuNjE1IDQwOS45NyAxMDIuNDc3QzQ2My44NTEgMTU2LjIxNSA0NzYuOTc2IDIyMy41NzYgNDUyLjcyNCAyNDcuODJaTTMzMS44MzggMTI3LjIyM0MzMjIuMDg4IDEzNi45NzEgMzI1Ljk2MyAxNTYuODQgMzQwLjcxNCAxNzEuNTg4QzM1NS40NjQgMTg2LjIwOSAzNzUuMzQxIDE5MC4yMDkgMzg1LjIxOCAxODAuNDYxQzM5NC45NjggMTcwLjU4OCAzOTAuOTY4IDE1MC43MTcgMzc2LjIxNiAxMzYuMDk2QzM2MS41OTEgMTIxLjM0OCAzNDEuNzE0IDExNy4zNSAzMzEuODM4IDEyNy4yMjNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Meat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M443.974 68.484C399.47 23.994 345.089 0 299.086 0C260.457 0 237.08 18.996 230.33 25.869C191.701 64.486 128.07 139.594 128.07 209.455V282.062L128 282.133V309.791L119.449 318.34C109.822 328.09 95.447 329.465 82.695 324.34C56.068 313.717 25.691 323.34 9.939 347.213C-5.811 371.084 -2.561 402.832 17.691 423.08C32.941 438.328 54.193 442.703 73.82 438.203C69.32 457.701 73.695 478.949 88.947 494.197C109.197 514.57 140.951 517.818 164.953 502.07C188.83 486.322 198.455 455.951 187.705 429.203C182.703 416.58 184.078 402.207 193.705 392.457L202.289 384H229.746L229.83 383.916H302.836C384.718 383.916 483.978 289.438 493.353 272.814C530.732 223.326 510.73 135.221 443.974 68.484ZM302.836 335.926H208.074C190.401 335.926 176.074 321.599 176.074 303.926V209.455C176.074 186.584 187.826 157.715 208.453 126.723C217.078 166.088 239.83 205.83 273.209 239.197C306.461 272.441 346.714 295.186 385.343 303.684C354.339 324.305 325.588 335.926 302.836 335.926ZM452.724 247.82C429.222 271.316 362.841 260.943 307.086 205.205C253.332 151.467 239.705 84.355 264.332 59.736C287.834 36.367 354.089 46.615 409.97 102.477C463.851 156.215 476.976 223.576 452.724 247.82ZM331.838 127.223C322.088 136.971 325.963 156.84 340.714 171.588C355.464 186.209 375.341 190.209 385.218 180.461C394.968 170.588 390.968 150.717 376.216 136.096C361.591 121.348 341.714 117.35 331.838 127.223Z" />
        </Icon>
    </>
}