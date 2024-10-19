
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cookie-bite` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cookie-bite?s=light cookie-bite}
 * @preview ![cookie-bite](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODQuMDEyIDE5MkMxODQuMDEyIDE3OC43NSAxNzMuMjYyIDE2OCAxNjAuMDEyIDE2OFMxMzYuMDEyIDE3OC43NSAxMzYuMDEyIDE5MlMxNDYuNzYyIDIxNiAxNjAuMDEyIDIxNlMxODQuMDEyIDIwNS4yNSAxODQuMDEyIDE5MlpNMjg4LjAxMiAyMzJDMjc0Ljc2MiAyMzIgMjY0LjAxMiAyNDIuNzUgMjY0LjAxMiAyNTZTMjc0Ljc2MiAyODAgMjg4LjAxMiAyODBTMzEyLjAxMiAyNjkuMjUgMzEyLjAxMiAyNTZTMzAxLjI2MiAyMzIgMjg4LjAxMiAyMzJaTTE5Mi4wMTIgMzI4QzE3OC43NjIgMzI4IDE2OC4wMTIgMzM4Ljc1IDE2OC4wMTIgMzUyUzE3OC43NjIgMzc2IDE5Mi4wMTIgMzc2UzIxNi4wMTIgMzY1LjI1IDIxNi4wMTIgMzUyUzIwNS4yNjIgMzI4IDE5Mi4wMTIgMzI4Wk0zNTIuMDEyIDMyOEMzMzguNzYyIDMyOCAzMjguMDEyIDMzOC43NSAzMjguMDEyIDM1MlMzMzguNzYyIDM3NiAzNTIuMDEyIDM3NlMzNzYuMDEyIDM2NS4yNSAzNzYuMDEyIDM1MlMzNjUuMjYyIDMyOCAzNTIuMDEyIDMyOFpNNDk0LjYwNSAyNTUuODgzQzQyOC45NzggMjU1LjA2MiAzNzYuMDA4IDIwMS43NDIgMzc2LjAwOCAxMzZDMzEwLjI2NiAxMzYgMjU2Ljk0MyA4My4wMzEgMjU2LjI0IDE3LjQwNkMyNTAuMDI5IDE2LjQ2OSAyNDMuNzAxIDE2IDIzNy40OSAxNkMyMTguMTU0IDE2IDE5OC45MzUgMjAuNTcgMTgxLjQ3NSAyOS40NzdMMTE2LjY2OCA2Mi40MDZDOTMuMzQ4IDc0LjM1OSA3NC4zNjMgOTMuMzQ0IDYyLjQwOCAxMTYuNjY0TDI5LjU5NiAxODEuMjM0QzE3LjY0MyAyMDQuNjcyIDEzLjQyNCAyMzEuMTU2IDE3LjUyNSAyNTcuMTcyTDI4Ljg5MyAzMjguNjU2QzMyLjk5NCAzNTQuNTU1IDQ1LjE4MiAzNzguNDYxIDYzLjY5NyAzOTYuOTc3TDExNS4wMjcgNDQ4LjQyMkMxMzMuNTQzIDQ2Ni44MiAxNTcuMzMyIDQ3OS4wMDggMTgzLjIzMiA0ODMuMTA5TDI1NS4wNjggNDk0LjQ3N0MyNjEuNTE0IDQ5NS41MzEgMjY4LjA3NiA0OTYgMjc0LjUyMSA0OTZDMjkzLjg1OSA0OTYgMzEzLjE5NSA0OTEuNDMgMzMwLjY1NiA0ODIuNTIzTDM5NS40NjMgNDQ5LjQ3N0M0MTguNzgzIDQzNy42NDEgNDM3Ljc2NyA0MTguNjU2IDQ0OS42MDMgMzk1LjMzNkw0ODIuNTMzIDMzMC43NjZDNDk0LjI1NCAzMDcuNjggNDk4LjQ3MyAyODEuNDMgNDk0LjYwNSAyNTUuODgzWk00NTQuMDI1IDMxNi4yMjdMNDIxLjA2OCAzODAuODU0QzQxMi4zNjUgMzk4IDM5OC4xMjkgNDEyLjIzOCAzODAuOTI2IDQyMC45NjlMMzE2LjExNSA0NTQuMDE4QzMwMy4zMTIgNDYwLjU0NyAyODguOTMgNDY0IDI3NC41MjEgNDY0QzI2OS41MTcgNDY0IDI2NC43MTEgNDYzLjYyOSAyNjAuMDcgNDYyLjg2OUwxODguMjM4IDQ1MS41MDJDMTY5LjAwOCA0NDguNDU3IDE1MS40OTIgNDM5LjU0MyAxMzcuNjggNDI1LjgyTDg2LjMyNCAzNzQuMzQ4QzcyLjQ5IDM2MC41MTYgNjMuNTYgMzQyLjk4NCA2MC40OTYgMzIzLjYzMUw0OS4xMzUgMjUyLjE4N0M0Ni4wNzYgMjMyLjc4MyA0OS4xNzYgMjEzLjI3MyA1OC4xMjMgMTk1LjczTDkwLjg4NSAxMzEuMjYyQzk5LjgzOCAxMTMuNzk3IDExMy44MDEgOTkuODM0IDEzMS4xNjQgOTAuOTM0TDE5Ni4wMTYgNTcuOTgyQzIwNS45MSA1Mi45MzYgMjE2LjcyMyA0OS43MjcgMjI3Ljc0IDQ4LjUyOUMyNDAuNjQxIDEwNy4yNyAyODcuNzkxIDE1My41MjcgMzQ2Ljg1IDE2NS4xNjJDMzU4LjQ5NiAyMjQuMTY2IDQwNC43MyAyNzEuMzQ4IDQ2My40NDMgMjg0LjMzMkM0NjIuMjQ0IDI5NS40MjggNDU5LjA2NCAzMDYuMzA1IDQ1NC4wMjUgMzE2LjIyN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CookieBite(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M184.012 192C184.012 178.75 173.262 168 160.012 168S136.012 178.75 136.012 192S146.762 216 160.012 216S184.012 205.25 184.012 192ZM288.012 232C274.762 232 264.012 242.75 264.012 256S274.762 280 288.012 280S312.012 269.25 312.012 256S301.262 232 288.012 232ZM192.012 328C178.762 328 168.012 338.75 168.012 352S178.762 376 192.012 376S216.012 365.25 216.012 352S205.262 328 192.012 328ZM352.012 328C338.762 328 328.012 338.75 328.012 352S338.762 376 352.012 376S376.012 365.25 376.012 352S365.262 328 352.012 328ZM494.605 255.883C428.978 255.062 376.008 201.742 376.008 136C310.266 136 256.943 83.031 256.24 17.406C250.029 16.469 243.701 16 237.49 16C218.154 16 198.935 20.57 181.475 29.477L116.668 62.406C93.348 74.359 74.363 93.344 62.408 116.664L29.596 181.234C17.643 204.672 13.424 231.156 17.525 257.172L28.893 328.656C32.994 354.555 45.182 378.461 63.697 396.977L115.027 448.422C133.543 466.82 157.332 479.008 183.232 483.109L255.068 494.477C261.514 495.531 268.076 496 274.521 496C293.859 496 313.195 491.43 330.656 482.523L395.463 449.477C418.783 437.641 437.767 418.656 449.603 395.336L482.533 330.766C494.254 307.68 498.473 281.43 494.605 255.883ZM454.025 316.227L421.068 380.854C412.365 398 398.129 412.238 380.926 420.969L316.115 454.018C303.312 460.547 288.93 464 274.521 464C269.517 464 264.711 463.629 260.07 462.869L188.238 451.502C169.008 448.457 151.492 439.543 137.68 425.82L86.324 374.348C72.49 360.516 63.56 342.984 60.496 323.631L49.135 252.187C46.076 232.783 49.176 213.273 58.123 195.73L90.885 131.262C99.838 113.797 113.801 99.834 131.164 90.934L196.016 57.982C205.91 52.936 216.723 49.727 227.74 48.529C240.641 107.27 287.791 153.527 346.85 165.162C358.496 224.166 404.73 271.348 463.443 284.332C462.244 295.428 459.064 306.305 454.025 316.227Z" />
        </Icon>
    </>
}