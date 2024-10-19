
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill-wave` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-wave?s=thin money-bill-wave}
 * @preview ![money-bill-wave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMTYwQzI0My44MTQgMTYwIDIwOC4wMDQgMjAyLjk4NCAyMDguMDA0IDI1NlMyNDMuODE0IDM1MiAyODggMzUyQzMzMi4xNTQgMzUyIDM2Ny45OTYgMzA5LjAzMSAzNjcuOTk2IDI1NkMzNjcuOTk2IDIwMi45ODQgMzMyLjE4NiAxNjAgMjg4IDE2MFpNMjg4IDMzNkMyNTIuNzEzIDMzNiAyMjQuMDA0IDMwMC4xMTEgMjI0LjAwNCAyNTZDMjI0LjAwNCAyMTEuODg3IDI1Mi43MTMgMTc2IDI4OCAxNzZTMzUxLjk5NiAyMTEuODg3IDM1MS45OTYgMjU2QzM1MS45OTYgMzAwLjExMSAzMjMuMjg3IDMzNiAyODggMzM2Wk01NTkuMDM5IDUyLjIwOUM1MjQuMTM3IDM3LjU2OCA0ODkuMjA1IDMyIDQ1NC4yNzUgMzJINDU0LjIzNEMzNDMuNDE0IDMyLjAwNiAyMzIuNTQ1IDg4LjExMSAxMjEuNzI1IDg4LjExMUM5My45MzcgODguMTExIDY2LjE0OCA4NC41ODIgMzguMzM0IDc1Ljc2NEMyNS45OTQgNzEuODE2IDAgNzcuMDI3IDAgMTAyLjkzNFY0MzMuMjU0QzAgNDQ0LjYzMSA2LjQ5OCA0NTUuNDAyIDE2Ljk2MSA0NTkuNzc3QzUxLjg2MyA0NzQuNDMgODYuNzkzIDQ4MCAxMjEuNzI1IDQ4MEMyMzIuNTY0IDQ4MCAzNDMuNDM2IDQyMy44ODcgNDU0LjI3NSA0MjMuODg3QzQ4Mi4wOSA0MjMuODg3IDUwOS44NzkgNDI3LjQwNCA1MzcuNjY2IDQzNi4yMzRDNTYyLjAwNCA0NDMuOTEgNTc2IDQyMy4xMTMgNTc2IDQwOS4wNjRWNzguNzQ2QzU3NiA2Ny4zNjkgNTY5LjUwMiA1Ni41OTYgNTU5LjAzOSA1Mi4yMDlaTTU2MCA0MDkuMDY0QzU2MCA0MTguNjYgNTUwLjUyIDQyMy41MTIgNTQyLjUxMiA0MjAuOTg2QzUxNC43NzcgNDEyLjE3MiA0ODUuOTE2IDQwNy44ODcgNDU0LjI3NSA0MDcuODg3QzM5Ni44NjEgNDA3Ljg4NyAzMzkuNTI1IDQyMi4zOTggMjg0LjA3NCA0MzYuNDMyQzIzMC41MjMgNDQ5Ljk4NiAxNzUuMTUyIDQ2NCAxMjEuNzI1IDQ2NEM4NS44MDkgNDY0IDUzLjU2NiA0NTcuNzkzIDIzLjEyOSA0NDUuMDE2QzE4Ljg2NSA0NDMuMjMyIDE2IDQzOC41MDYgMTYgNDMzLjI1NFYxMDIuOTM0QzE2IDkzLjIzIDI1LjU5OCA4OC40ODggMzMuNSA5MS4wMTZDNjEuMjk3IDk5LjgyOCA5MC4xNTYgMTA0LjExMSAxMjEuNzI1IDEwNC4xMTFDMTc5LjEzMyAxMDQuMTExIDIzNi40NjcgODkuNiAyOTEuOTE0IDc1LjU2NkMzNDUuNDU3IDYyLjAxNiA0MDAuODIgNDguMDAyIDQ1NC4yMzQgNDhINDU0LjI3NUM0OTAuMTg2IDQ4IDUyMi40MyA1NC4yMDMgNTUyLjg1NCA2Ni45NjNDNTU3LjEyNyA2OC43NTYgNTYwIDczLjQ5MiA1NjAgNzguNzQ2VjQwOS4wNjRaTTExMi4xNDEgMTMzLjkwNkMxMDcuOTA2IDEzMi45NjkgMTAzLjU2MiAxMzUuNjg4IDEwMi42MjUgMTQwLjAxNkM5Ny4wNDcgMTY1LjUgNzQuMDc4IDE4NCA0OCAxODRDNDMuNTc4IDE4NCA0MCAxODcuNTc4IDQwIDE5MlM0My41NzggMjAwIDQ4IDIwMEM4MS41NDcgMjAwIDExMS4wOTQgMTc2LjIwMyAxMTguMjUgMTQzLjQyMkMxMTkuMjAzIDEzOS4xMDkgMTE2LjQ2OSAxMzQuODQ0IDExMi4xNDEgMTMzLjkwNlpNNDkgMzUyLjg3NUM0NC41NDcgMzUyLjMyOCA0MC42MjUgMzU1LjQwNiA0MC4wNjIgMzU5LjgxM0MzOS41MTYgMzY0LjIwMyA0Mi42MjUgMzY4LjIwMyA0NyAzNjguNzVDNzQuOTM4IDM3Mi4yNjYgOTYgMzk2LjAxNiA5NiA0MjRDOTYgNDI0Ljk2OSA5NS44MjggNDI1LjkwNiA5NS42ODggNDI2Ljg0NEw5NS4zMTIgNDI5LjU3OEM5NC44NTkgNDMzLjk2OSA5OC4xODggNDM2Ljk1MyAxMDIuNTc4IDQzNy4zOTFDMTAyLjgxMiA0MzcuNDIyIDEwMy4wMzEgNDM3LjQyMiAxMDMuMjM0IDQzNy40MjJDMTA3LjM3NSA0MzcuNDIyIDExMS4wNjIgNDMzLjQ2OSAxMTEuNDg0IDQyOS4yOTdDMTExLjc2NiA0MjcuNTYyIDExMiA0MjUuODEyIDExMiA0MjRDMTEyIDM4Ny45NjkgODQuOTIyIDM1Ny4zOTEgNDkgMzUyLjg3NVpNNTI4IDMxMkM0OTQuNDUzIDMxMiA0NjQuOTA2IDMzNS43OTcgNDU3Ljc1IDM2OC41NzhDNDU2Ljc5NyAzNzIuODkxIDQ1OS41MzEgMzc3LjE1NiA0NjMuODU5IDM3OC4wOTRDNDY0LjQzOCAzNzguMjE5IDQ2NSAzNzguMjgxIDQ2NS41NzggMzc4LjI4MUM0NjkuMjUgMzc4LjI4MSA0NzIuNTYyIDM3NS43MzQgNDczLjM3NSAzNzEuOTg0QzQ3OC45NTMgMzQ2LjUgNTAxLjkyMiAzMjggNTI4IDMyOEM1MzIuNDIyIDMyOCA1MzYgMzI0LjQyMiA1MzYgMzIwUzUzMi40MjIgMzEyIDUyOCAzMTJaTTUyNyAxNTkuMTI1QzUyNy4zNDQgMTU5LjE3MiA1MjcuNjcyIDE1OS4xODcgNTI4LjAxNiAxNTkuMTg3QzUzMS45ODQgMTU5LjE4NyA1MzUuNDIyIDE1Ni4yMzQgNTM1LjkzOCAxNTIuMTg3QzUzNi40ODQgMTQ3Ljc5NyA1MzMuMzc1IDE0My43OTcgNTI5IDE0My4yNUM1MDEuMDYyIDEzOS43MzQgNDgwIDExNS45ODQgNDgwIDg4QzQ4MCA4Ny4wMzEgNDgwLjE3MiA4Ni4wOTQgNDgwLjMxMiA4NS4xNTZMNDgwLjY4OCA4Mi40MjJDNDgxLjE0MSA3OC4wMzEgNDc3LjgxMiA3NS4wNDcgNDczLjQyMiA3NC42MDlDNDY4LjM3NSA3My45MzggNDY0Ljk2OSA3OC4zMjggNDY0LjUxNiA4Mi43MDNDNDY0LjIzNCA4NC40MzggNDY0IDg2LjE4OCA0NjQgODhDNDY0IDEyNC4wMzEgNDkxLjA3OCAxNTQuNjA5IDUyNyAxNTkuMTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoneyBillWave(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 160C243.814 160 208.004 202.984 208.004 256S243.814 352 288 352C332.154 352 367.996 309.031 367.996 256C367.996 202.984 332.186 160 288 160ZM288 336C252.713 336 224.004 300.111 224.004 256C224.004 211.887 252.713 176 288 176S351.996 211.887 351.996 256C351.996 300.111 323.287 336 288 336ZM559.039 52.209C524.137 37.568 489.205 32 454.275 32H454.234C343.414 32.006 232.545 88.111 121.725 88.111C93.937 88.111 66.148 84.582 38.334 75.764C25.994 71.816 0 77.027 0 102.934V433.254C0 444.631 6.498 455.402 16.961 459.777C51.863 474.43 86.793 480 121.725 480C232.564 480 343.436 423.887 454.275 423.887C482.09 423.887 509.879 427.404 537.666 436.234C562.004 443.91 576 423.113 576 409.064V78.746C576 67.369 569.502 56.596 559.039 52.209ZM560 409.064C560 418.66 550.52 423.512 542.512 420.986C514.777 412.172 485.916 407.887 454.275 407.887C396.861 407.887 339.525 422.398 284.074 436.432C230.523 449.986 175.152 464 121.725 464C85.809 464 53.566 457.793 23.129 445.016C18.865 443.232 16 438.506 16 433.254V102.934C16 93.23 25.598 88.488 33.5 91.016C61.297 99.828 90.156 104.111 121.725 104.111C179.133 104.111 236.467 89.6 291.914 75.566C345.457 62.016 400.82 48.002 454.234 48H454.275C490.186 48 522.43 54.203 552.854 66.963C557.127 68.756 560 73.492 560 78.746V409.064ZM112.141 133.906C107.906 132.969 103.562 135.688 102.625 140.016C97.047 165.5 74.078 184 48 184C43.578 184 40 187.578 40 192S43.578 200 48 200C81.547 200 111.094 176.203 118.25 143.422C119.203 139.109 116.469 134.844 112.141 133.906ZM49 352.875C44.547 352.328 40.625 355.406 40.062 359.813C39.516 364.203 42.625 368.203 47 368.75C74.938 372.266 96 396.016 96 424C96 424.969 95.828 425.906 95.688 426.844L95.312 429.578C94.859 433.969 98.188 436.953 102.578 437.391C102.812 437.422 103.031 437.422 103.234 437.422C107.375 437.422 111.062 433.469 111.484 429.297C111.766 427.562 112 425.812 112 424C112 387.969 84.922 357.391 49 352.875ZM528 312C494.453 312 464.906 335.797 457.75 368.578C456.797 372.891 459.531 377.156 463.859 378.094C464.438 378.219 465 378.281 465.578 378.281C469.25 378.281 472.562 375.734 473.375 371.984C478.953 346.5 501.922 328 528 328C532.422 328 536 324.422 536 320S532.422 312 528 312ZM527 159.125C527.344 159.172 527.672 159.187 528.016 159.187C531.984 159.187 535.422 156.234 535.938 152.187C536.484 147.797 533.375 143.797 529 143.25C501.062 139.734 480 115.984 480 88C480 87.031 480.172 86.094 480.312 85.156L480.688 82.422C481.141 78.031 477.812 75.047 473.422 74.609C468.375 73.938 464.969 78.328 464.516 82.703C464.234 84.438 464 86.188 464 88C464 124.031 491.078 154.609 527 159.125Z" />
        </Icon>
    </>
}