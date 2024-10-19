
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brain-arrow-curved-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brain-arrow-curved-right?s=thin brain-arrow-curved-right}
 * @preview ![brain-arrow-curved-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgMzIwVjY0QzI5NiAzNy40OTIgMzE3LjM4NSAxNiAzNDMuOTA4IDE2QzM3MC4wMjMgMTYgMzkyLjI0IDM3LjA2MiAzOTEuODUgNjQuODEyQzM5NC40OTIgNjQuMzY3IDM5Ny4xNjYgNjQgMzk5LjkzNiA2NEM0MjYuNDU5IDY0IDQ0Ny45NjEgODUuNDkyIDQ0Ny45NjEgMTEyQzQ0Ny45NjEgMTI0LjU3OCA0NDMuMDEyIDEzNS45MyA0MzUuMDkyIDE0NC40OTJDNDM3LjMwNSAxNDQuMjk3IDQzOS40MzggMTQ0LjIwMyA0NDEuNDk4IDE0NC4yMDNDNDg3LjE3NiAxNDQuMjAzIDQ5NS45ODQgMTg5Ljk2OSA0OTUuOTg0IDIwMEg0OTZWMjA4QzQ5NiAyMTIuNDE4IDQ5OS41ODIgMjE2IDUwNCAyMTZTNTEyIDIxMi40MTggNTEyIDIwOFYyMDBINTExLjk4NEM1MTEuOTg0IDE4MC41NjYgNDk4LjczMiAxNDEuMTE3IDQ2MS4xMTMgMTMwLjc1QzQ2Mi45ODYgMTI0LjcxOSA0NjMuOTYxIDExOC40MSA0NjMuOTYxIDExMkM0NjMuOTYxIDc4LjczIDQzOC40MzIgNTEuMzA5IDQwNS45MyA0OC4yNzdDNDAzLjE5NSAzNy4zMTIgMzk3LjYwNCAyNy4yNzMgMzg5LjUxOCAxOS4wNzRDMzc3LjU2NCA2Ljk1MyAzNjAuOTQxIDAgMzQzLjkwOCAwQzMxOS45MTQgMCAyOTguOTYzIDEzLjI1OCAyODggMzIuODM2QzI3Ny4wMzcgMTMuMjU4IDI1Ni4wODYgMCAyMzIuMDk0IDBDMjE1LjA2MSAwIDE5OC40MzYgNi45NTMgMTg2LjQ4MiAxOS4wNzhDMTc4LjM5NiAyNy4yNzMgMTcyLjgwNyAzNy4zMTIgMTcwLjA3MiA0OC4yNzdDMTM3LjU2OCA1MS4zMDkgMTEyLjA0MSA3OC43MyAxMTIuMDQxIDExMkMxMTIuMDQxIDExOC4zOTUgMTEzLjAwOCAxMjQuNjg4IDExNC44NzMgMTMwLjcwM0M5NS40NzMgMTM1Ljk2MSA4My42MTcgMTQ4LjYwOSA3Ni42ODYgMTU5LjYzM0M2Ni42ODYgMTc1LjUzMSA2NC4wMTggMTkyLjQ4OCA2NC4wMTggMjAwQzY0LjAxOCAyMTIuMDQ3IDY3LjEyOSAyMjMuODM2IDcyLjg3NyAyMzQuMjk3QzQ4LjI2IDI0OC4yMDMgMzIgMjc0LjY4OCAzMiAzMDRDMzIgMzM3LjEzMyA1MS45NzMgMzY1Ljc2NiA4MS41MTQgMzc3Ljc4NUM3OS43MjMgMzg2LjI3MyA3OS41NDEgMzk0LjkyMiA4MS4wMDYgNDAzLjY3MkM4NS40MDggNDI5Ljk3NyAxMDQuNTA4IDQ1Mi4yNTQgMTI5Ljg4OSA0NjAuNDQ1QzE0MC45MSA0NjQgMTUyLjAyNyA0NjQuODY3IDE2Mi44NTUgNDYzLjE0OEMxNjUuODY5IDQ3My42MDkgMTcxLjM5NSA0ODMuMjE5IDE3OS4xNTYgNDkxLjI1QzE5MS45MDIgNTA0LjQzOCAyMDkuNzQgNTEyIDIyOC4wOTIgNTEyQzI0NC44MzQgNTEyIDI2MC4xNDMgNTA1Ljg3NSAyNzEuOTk2IDQ5NS44MDVDMjc0Ljg0NCA0OTMuMzgzIDI3NS43NzUgNDg5LjMwOSAyNzQuMDE2IDQ4Ni4wMTJMMjczLjkzNCA0ODUuODU5QzI3MS41MzkgNDgxLjM1NSAyNjUuNjUgNDgwLjAzMSAyNjEuNzkzIDQ4My4zNzFDMjUyLjc0IDQ5MS4yMDMgMjQxLjAxNiA0OTYgMjI4LjA5MiA0OTZDMTk5LjM5OCA0OTYgMTc1LjIwNyA0NzIuNTQ3IDE3Ni4yMzQgNDQyLjMxMkMxNjMuNDYxIDQ0OC40NjEgMTQ4LjMwMyA0NTAuNDI2IDEzMS45MjggNDQ0LjE2NEMxMTcuMjc5IDQzOC41NjIgMTA1LjQ3MyA0MjYuNjk1IDk5Ljg2MSA0MTIuMDU1QzkzLjQ0MyAzOTUuMzA1IDk1LjY3NCAzNzkuOTE0IDEwMi4xNjQgMzY3LjAwOEM3MS41MjEgMzYyLjIzNCA0OCAzMzUuOTY5IDQ4IDMwNEM0OCAyNzMuMjQyIDY5LjcyOSAyNDcuNTk0IDk4LjY2NiAyNDEuNDQ1Qzg3LjI5NyAyMzEuMTk1IDgwLjAxOCAyMTYuNTA4IDgwLjAxOCAyMDBDODAuMDE4IDE4OS40NjUgODkuMDg2IDE0NC4yMDMgMTM0LjUwOCAxNDQuMjAzQzEzNi41NjQgMTQ0LjIwMyAxMzguNjk5IDE0NC4yOTcgMTQwLjkwOCAxNDQuNDkyQzEzMi45ODggMTM1LjkzIDEyOC4wNDEgMTI0LjU3OCAxMjguMDQxIDExMkMxMjguMDQxIDg1LjQ5MiAxNDkuNTQxIDY0IDE3Ni4wNjQgNjRDMTc4LjgzNCA2NCAxODEuNTEgNjQuMzY3IDE4NC4xNSA2NC44MTJDMTgzLjc2IDM3LjA1MSAyMDUuOTkyIDE2IDIzMi4wOTQgMTZDMjU4LjYxNyAxNiAyODAgMzcuNDkyIDI4MCA2NFYzMjBDMjgwIDMyNC40MTggMjgzLjU4MiAzMjggMjg4IDMyOFMyOTYgMzI0LjQxOCAyOTYgMzIwWk02MDMuMzE0IDM0MC42ODhMNTA3LjMxNCAyNDQuNjg4QzUwNC4yNTIgMjQxLjYyNSA1MDAuMTYgMjQwIDQ5NS45OTYgMjQwQzQ5My45MzYgMjQwIDQ5MS44NTcgMjQwLjM5OCA0ODkuODc3IDI0MS4yMTlDNDgzLjg5OCAyNDMuNjk1IDQ4MCAyNDkuNTI3IDQ4MCAyNTZWMzA0LjAxMkM0NTQuOTk2IDMwNC4wMzkgNDA3LjI0NCAzMDQuMTMzIDM4NS4xODQgMzA0LjQ4QzM0NS44NjUgMzA1LjA5NCAzMTAuNjA0IDMzMi44NjcgMjk1LjM1NCAzNzUuMjM4QzI4Mi4xMDUgNDEyLjA0MyAyODMuNTE4IDQ2NC42NiAzMjcuMjExIDUwMS45NjFDMzMwLjE3OCA1MDQuNDkyIDMzMy44NzkgNTA1Ljc5MyAzMzcuNjA0IDUwNS43OTNDMzQwLjM0NiA1MDUuNzkzIDM0My4xIDUwNS4wOSAzNDUuNTg4IDUwMy42NTZDMzUxLjQ1NSA1MDAuMjc3IDM1NC41NTkgNDkzLjU3IDM1My4zMzggNDg2LjkxQzM0OC42NTQgNDYxLjM0OCAzNTMuNzk5IDQzNy4yODkgMzY3LjQ1NSA0MjAuOTAyQzM3OC44NTIgNDA3LjIyNyAzOTUuNjM5IDQwMCA0MTYgNDAwSDQ4MFY0NDhDNDgwIDQ1NC40NzMgNDgzLjg5OCA0NjAuMzA1IDQ4OS44NzcgNDYyLjc4MUM0OTEuODU3IDQ2My42MDIgNDkzLjkzNiA0NjQgNDk1Ljk5NiA0NjRDNTAwLjE2IDQ2NCA1MDQuMjUyIDQ2Mi4zNzUgNTA3LjMxNCA0NTkuMzEyTDYwMy4zMTQgMzYzLjMxMkM2MDkuNTYyIDM1Ny4wNjYgNjA5LjU2MiAzNDYuOTM0IDYwMy4zMTQgMzQwLjY4OFpNNDk2IDQ0OFYzODRINDE2QzM1Ni4wMzkgMzg0IDMyNy43MzggNDM1Ljk2OSAzMzcuNiA0ODkuNzkzQzI3MC41MjMgNDMyLjUzMSAzMTMuMDk4IDMyMS42MDUgMzg1LjQzNCAzMjAuNDc3QzQxNiAzMjAgNDk2IDMyMCA0OTYgMzIwVjI1Nkw1OTIgMzUyTDQ5NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BrainArrowCurvedRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M296 320V64C296 37.492 317.385 16 343.908 16C370.023 16 392.24 37.062 391.85 64.812C394.492 64.367 397.166 64 399.936 64C426.459 64 447.961 85.492 447.961 112C447.961 124.578 443.012 135.93 435.092 144.492C437.305 144.297 439.438 144.203 441.498 144.203C487.176 144.203 495.984 189.969 495.984 200H496V208C496 212.418 499.582 216 504 216S512 212.418 512 208V200H511.984C511.984 180.566 498.732 141.117 461.113 130.75C462.986 124.719 463.961 118.41 463.961 112C463.961 78.73 438.432 51.309 405.93 48.277C403.195 37.312 397.604 27.273 389.518 19.074C377.564 6.953 360.941 0 343.908 0C319.914 0 298.963 13.258 288 32.836C277.037 13.258 256.086 0 232.094 0C215.061 0 198.436 6.953 186.482 19.078C178.396 27.273 172.807 37.312 170.072 48.277C137.568 51.309 112.041 78.73 112.041 112C112.041 118.395 113.008 124.688 114.873 130.703C95.473 135.961 83.617 148.609 76.686 159.633C66.686 175.531 64.018 192.488 64.018 200C64.018 212.047 67.129 223.836 72.877 234.297C48.26 248.203 32 274.688 32 304C32 337.133 51.973 365.766 81.514 377.785C79.723 386.273 79.541 394.922 81.006 403.672C85.408 429.977 104.508 452.254 129.889 460.445C140.91 464 152.027 464.867 162.855 463.148C165.869 473.609 171.395 483.219 179.156 491.25C191.902 504.438 209.74 512 228.092 512C244.834 512 260.143 505.875 271.996 495.805C274.844 493.383 275.775 489.309 274.016 486.012L273.934 485.859C271.539 481.355 265.65 480.031 261.793 483.371C252.74 491.203 241.016 496 228.092 496C199.398 496 175.207 472.547 176.234 442.312C163.461 448.461 148.303 450.426 131.928 444.164C117.279 438.562 105.473 426.695 99.861 412.055C93.443 395.305 95.674 379.914 102.164 367.008C71.521 362.234 48 335.969 48 304C48 273.242 69.729 247.594 98.666 241.445C87.297 231.195 80.018 216.508 80.018 200C80.018 189.465 89.086 144.203 134.508 144.203C136.564 144.203 138.699 144.297 140.908 144.492C132.988 135.93 128.041 124.578 128.041 112C128.041 85.492 149.541 64 176.064 64C178.834 64 181.51 64.367 184.15 64.812C183.76 37.051 205.992 16 232.094 16C258.617 16 280 37.492 280 64V320C280 324.418 283.582 328 288 328S296 324.418 296 320ZM603.314 340.688L507.314 244.688C504.252 241.625 500.16 240 495.996 240C493.936 240 491.857 240.398 489.877 241.219C483.898 243.695 480 249.527 480 256V304.012C454.996 304.039 407.244 304.133 385.184 304.48C345.865 305.094 310.604 332.867 295.354 375.238C282.105 412.043 283.518 464.66 327.211 501.961C330.178 504.492 333.879 505.793 337.604 505.793C340.346 505.793 343.1 505.09 345.588 503.656C351.455 500.277 354.559 493.57 353.338 486.91C348.654 461.348 353.799 437.289 367.455 420.902C378.852 407.227 395.639 400 416 400H480V448C480 454.473 483.898 460.305 489.877 462.781C491.857 463.602 493.936 464 495.996 464C500.16 464 504.252 462.375 507.314 459.312L603.314 363.312C609.562 357.066 609.562 346.934 603.314 340.688ZM496 448V384H416C356.039 384 327.738 435.969 337.6 489.793C270.523 432.531 313.098 321.605 385.434 320.477C416 320 496 320 496 320V256L592 352L496 448Z" />
        </Icon>
    </>
}