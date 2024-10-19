
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree-palm` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-palm?s=light tree-palm}
 * @preview ![tree-palm](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzQuOTM2IDI0MC4yNUMzMjYuMjMzIDI0MS43ODEgMzIwLjQyMSAyNTAuMDYyIDMyMS45NjcgMjU4Ljc4MUMzMzEuNTc3IDMxMy4yODEgMzQxLjIzMyAzOTQuMTI1IDMzMi43MDIgNDY5LjkwNkMzMzIuMDE0IDQ3Ni4xNTYgMzI3LjU3NyA0ODAgMzIzLjg3NCA0ODBIMjY0LjkyMUMyNjIuMjY0IDQ4MCAyNjAuMzExIDQ3OC4yNSAyNTkuMTI0IDQ3Ni43ODFDMjU2LjM3NCA0NzMuMzQ0IDI1NS4zNTggNDY4LjUgMjU2LjM4OSA0NjMuNzVDMjY1LjQ2NyA0MjIuMTg4IDI4MC40NTIgMzM5Ljg3NSAyNzkuMDE0IDI1NS43MTlDMjc4Ljg1OCAyNDYuODc1IDI3MS4zNTggMjQwLjY4OCAyNjIuNzMzIDI0MEMyNTMuOTA1IDI0MC4xNTYgMjQ2Ljg1OCAyNDcuNDM4IDI0Ny4wMTQgMjU2LjI4MUMyNDguNDA1IDMzNy4xODggMjMzLjkwNSA0MTYuNzE5IDIyNS4xMzcgNDU2LjkwNkMyMjIuMDI4IDQ3MSAyMjUuNDE5IDQ4NS45MDYgMjM0LjE4NiA0OTYuODEyQzI0MS45MzYgNTA2LjQ2OSAyNTMuMTM5IDUxMiAyNjQuOTIxIDUxMkgzMjMuODc0QzM0NC41OTIgNTEyIDM2Mi4wNjMgNDk1LjQzOCAzNjQuNTE2IDQ3My40NjlDMzczLjQ2OSAzOTMuOTA2IDM2My40NTQgMzA5Ljc4MSAzNTMuNDY5IDI1My4yMTlDMzUxLjkzOCAyNDQuNTMxIDM0My42NTUgMjM4LjQzOCAzMzQuOTM2IDI0MC4yNVpNNDA5LjU5NCA1OC4xODhDMzc3LjUwMSA1OC4xODggMzQ2LjczNSA2NS40MzggMzE5LjU3NyA3OS4zMTJDMjkzLjIzMyAzMS44MTIgMjMzLjE3MSAwIDE2Ni40MDMgMEM4MS4xMzUgMCAxMi45MzIgNDQuMjE5IDAuNTQyIDEwNy41MzFDLTEuMTQ2IDExNi4xMjUgMS4xNTEgMTI1LjAzMSA2Ljg1NCAxMzEuOTY5QzEzLjEzNSAxMzkuNjI1IDIyLjY2NyAxNDQgMzMuMDEgMTQ0SDk4LjA1N0M4NS40NjQgMTYwLjI1IDc2LjEzNSAxNzguNjI1IDcwLjEzNSAxOTlDNTAuNzc2IDI2NC43MTkgNzMuNzkyIDMyOC4wOTQgODEuNzE0IDMzOS4yNUM4Ni44NTQgMzQ2LjQ2OSA5NC45NjQgMzUxLjA2MiAxMDMuOTc5IDM1MS44NzVDMTA0Ljk3OSAzNTEuOTY5IDEwNS45NzkgMzUyLjAzMSAxMDYuOTc5IDM1Mi4wMzFDMTE1LjY1MyAzNTIuMDMxIDEyNC4xMDYgMzQ4LjU5NCAxMzAuNjY5IDM0Mi4yNUwyNjYuNTMgMjA4SDU0Mi45ODdDNTUzLjMzMSAyMDggNTYyLjg2MiAyMDMuNjI1IDU2OS4xNDMgMTk1Ljk2OUM1NzQuODQ2IDE4OS4wMzEgNTc3LjE0MyAxODAuMTI1IDU3NS40NTYgMTcxLjU2MkM1NjIuNzk5IDEwNi45MzggNDkxLjUwMyA1OC4xODggNDA5LjU5NCA1OC4xODhaTTQ2NC4wMDMgMTc2VjE0NEM0NjQuMDAzIDEzNS4xNTYgNDU2Ljg0NCAxMjggNDQ4LjAwMSAxMjhTNDMyLjAwMSAxMzUuMTU2IDQzMi4wMDEgMTQ0VjE3NkgyNTkuOTUyQzI1NS43NDkgMTc2IDI1MS43MDIgMTc3LjY1NiAyNDguNzAyIDE4MC42MjVMMTA3Ljk0OCAzMjAuOTM3QzEwNC4zMzkgMzE1LjA2MiA4My41ODkgMjU5LjkzNyAxMDIuMTk4IDIwMy42MjVDMTE1Ljk2NSAxNjEuOTY5IDE0OC4xODQgMTMwLjc1IDE5Ny45MzQgMTEwLjg0NEMyMDYuMTM3IDEwNy41NjIgMjEwLjEzNyA5OC4yNSAyMDYuODU2IDkwLjA2MkMyMDQuMzU2IDgzLjgxMiAxOTguMzQgODAgMTkxLjk5NyA4MEMxOTAuMDEyIDgwIDE4Ny45OTcgODAuMzc1IDE4Ni4wNTkgODEuMTU2QzE2NC43NzggODkuNjU2IDE0Ni4xODQgMTAwIDEzMC4zMDkgMTEyLjE1NkMxMjkuNTU5IDExMi4wNjIgMTI4Ljc3OCAxMTIgMTI3Ljk5NyAxMTJMMzEuOTQ4IDExMy42ODhDNDEuMjE0IDY2LjM3NSA5Ny43NiAzMiAxNjYuNDAzIDMyQzIyNy42NjkgMzIgMjgxLjQ2NyA2Mi45MzggMjk3LjIzMyAxMDcuMjgxQzI5OC44NzQgMTExLjg3NSAzMDIuNTMgMTE1LjQ2OSAzMDcuMTU1IDExNy4wNjNDMzExLjc4IDExOC42MjUgMzE2Ljg3NCAxMTggMzIwLjk2NyAxMTUuMzQ0QzM0Ni41NDYgOTguOTA2IDM3Ny4yMDQgOTAuMTg4IDQwOS41OTQgOTAuMTg4QzQ3Ni40ODcgOTAuMTg4IDUzNC4yODQgMTI3LjgxMyA1NDIuOTg3IDE3Nkg0NjQuMDAzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TreePalm(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M334.936 240.25C326.233 241.781 320.421 250.062 321.967 258.781C331.577 313.281 341.233 394.125 332.702 469.906C332.014 476.156 327.577 480 323.874 480H264.921C262.264 480 260.311 478.25 259.124 476.781C256.374 473.344 255.358 468.5 256.389 463.75C265.467 422.188 280.452 339.875 279.014 255.719C278.858 246.875 271.358 240.688 262.733 240C253.905 240.156 246.858 247.438 247.014 256.281C248.405 337.188 233.905 416.719 225.137 456.906C222.028 471 225.419 485.906 234.186 496.812C241.936 506.469 253.139 512 264.921 512H323.874C344.592 512 362.063 495.438 364.516 473.469C373.469 393.906 363.454 309.781 353.469 253.219C351.938 244.531 343.655 238.438 334.936 240.25ZM409.594 58.188C377.501 58.188 346.735 65.438 319.577 79.312C293.233 31.812 233.171 0 166.403 0C81.135 0 12.932 44.219 0.542 107.531C-1.146 116.125 1.151 125.031 6.854 131.969C13.135 139.625 22.667 144 33.01 144H98.057C85.464 160.25 76.135 178.625 70.135 199C50.776 264.719 73.792 328.094 81.714 339.25C86.854 346.469 94.964 351.062 103.979 351.875C104.979 351.969 105.979 352.031 106.979 352.031C115.653 352.031 124.106 348.594 130.669 342.25L266.53 208H542.987C553.331 208 562.862 203.625 569.143 195.969C574.846 189.031 577.143 180.125 575.456 171.562C562.799 106.938 491.503 58.188 409.594 58.188ZM464.003 176V144C464.003 135.156 456.844 128 448.001 128S432.001 135.156 432.001 144V176H259.952C255.749 176 251.702 177.656 248.702 180.625L107.948 320.937C104.339 315.062 83.589 259.937 102.198 203.625C115.965 161.969 148.184 130.75 197.934 110.844C206.137 107.562 210.137 98.25 206.856 90.062C204.356 83.812 198.34 80 191.997 80C190.012 80 187.997 80.375 186.059 81.156C164.778 89.656 146.184 100 130.309 112.156C129.559 112.062 128.778 112 127.997 112L31.948 113.688C41.214 66.375 97.76 32 166.403 32C227.669 32 281.467 62.938 297.233 107.281C298.874 111.875 302.53 115.469 307.155 117.063C311.78 118.625 316.874 118 320.967 115.344C346.546 98.906 377.204 90.188 409.594 90.188C476.487 90.188 534.284 127.813 542.987 176H464.003Z" />
        </Icon>
    </>
}