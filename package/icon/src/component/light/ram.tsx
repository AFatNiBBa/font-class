
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ram` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ram?s=light ram}
 * @preview ![ram](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuOTg2IDExMkM1MjAuODIyIDExMiA1MjcuOTg2IDEwNC44MzYgNTI3Ljk4NiA5NkM1MjcuOTg2IDg3LjE2MiA1MjAuODIyIDgwIDUxMS45ODYgODBTNDk1Ljk4NiA4Ny4xNjIgNDk1Ljk4NiA5NkM0OTUuOTg2IDEwNC44MzYgNTAzLjE1IDExMiA1MTEuOTg2IDExMlpNNTI3Ljk4NiAyNDBDNTE5LjE0MyAyNDAgNTExLjk4NiAyNDcuMTU2IDUxMS45ODYgMjU2QzUxMS45ODYgMjc1Ljc1IDQ5Ny4yOTkgMjkzLjA2MiA0NzcuMDY2IDI5Ny4xODhDNDcyLjY5MSAyOTguMDk0IDQ2OC44NzkgMzAwLjc4MSA0NjYuNTY2IDMwNC41OTRDNDY0LjI1NCAzMDguNDM4IDQ2My42NiAzMTMuMDYyIDQ2NC45MSAzMTcuMzQ0QzQ2Ni4yMjMgMzIxLjg3NSA0NjYuODE2IDMyNS4zNzUgNDY2LjgxNiAzMjguNzE5QzQ2Ni44MTYgMzU4Ljg0NCA0MzEuNTM1IDM4MS4yODEgNDAxLjQxMiAzNjUuNDY5QzM5NC43MDkgMzYxLjkwNiAzODYuNTA2IDM2My41MzEgMzgxLjY3OCAzNjkuMzc1QzM2OC41NTMgMzg1LjA2MyAzNDUuODUgMzkwLjM0NCAzMjYuMTAyIDM4MEMzMTkuNDc3IDM3Ni41MzEgMzExLjI0MiAzNzguMTI1IDMwNi40MTQgMzgzLjkwNkMyODkuMjg5IDQwNC4zNDQgMjU0LjY5NyA0MDQuMzQ0IDIzNy41NzIgMzgzLjkwNkMyMzIuNzEzIDM3OC4xMjUgMjI0LjQ5NCAzNzYuNTMxIDIxNy44ODUgMzgwQzE5OC4wODggMzkwLjM3NSAxNzUuNDQ5IDM4NS4wOTQgMTYyLjMwOSAzNjkuMzc1QzE1Ny40NjUgMzYzLjU2MyAxNDkuMjYyIDM2MS45MDYgMTQyLjU3NCAzNjUuNDY5QzExMi40NjcgMzgxLjI4MSA3Ny4xNyAzNTguODQ0IDc3LjE3IDMyOC43MTlDNzcuMTcgMzI1LjM3NSA3Ny43NjQgMzIxLjg3NSA3OS4wNzYgMzE3LjM0NEM4MC4zMjYgMzEzLjA2MiA3OS43MzIgMzA4LjQzOCA3Ny40MiAzMDQuNTk0Qzc1LjEwNyAzMDAuNzgxIDcxLjI5NSAyOTguMDk0IDY2LjkyIDI5Ny4xODhDNDYuNjg2IDI5My4wNjIgMzIgMjc1Ljc1IDMyIDI1NlM0Ni42ODYgMjE4LjkzOCA2Ni45MiAyMTQuODEyQzcxLjI5NSAyMTMuOTA2IDc1LjEwNyAyMTEuMjE5IDc3LjQyIDIwNy40MDZDNzkuNzMyIDIwMy41NjIgODAuMzI2IDE5OC45MzggNzkuMDc2IDE5NC42NTZDNzcuNzY0IDE5MC4xMjUgNzcuMTcgMTg2LjYyNSA3Ny4xNyAxODMuMjgxQzc3LjE3IDE1My4xODggMTEyLjQ2NyAxMzAuNzgxIDE0Mi41NzQgMTQ2LjUzMUMxNDkuMjYyIDE1MC4wNjMgMTU3LjQ2NSAxNDguNDM4IDE2Mi4zMDkgMTQyLjYyNUMxNzUuNDM0IDEyNi45MzggMTk4LjA3MiAxMjEuNTk0IDIxNy44ODUgMTMyQzIyNS43MjkgMTM2LjAzMSAyMzUuMzY5IDEzMy4wNjIgMjM5LjQ3OSAxMjUuMjVDMjQzLjU3MiAxMTcuNDA2IDI0MC41NTcgMTA3Ljc1IDIzMi43MjkgMTAzLjYyNUMyMDMuNzYgODguNDY5IDE2OS4zNTUgOTMuMjgxIDE0Ni4zMjQgMTEzLjM0NEMxMzguMjMgMTEwLjUzMSAxMjkuODg3IDEwOS4wOTQgMTIxLjQwMiAxMDkuMDk0Qzc5LjM3MyAxMDkuMDk0IDQ1LjE3IDE0Mi4zNzUgNDUuMTcgMTgzLjI4MUM0NS4xNyAxODQuOTA2IDQ1LjIzMiAxODYuNTYzIDQ1LjM3MyAxODguMjE5QzE4LjM1OSAxOTkuOTA2IDAgMjI2LjM3NSAwIDI1NlMxOC4zNTkgMzEyLjA5NCA0NS4zNzMgMzIzLjc4MUM0NS4yMzIgMzI1LjQzOCA0NS4xNyAzMjcuMDk0IDQ1LjE3IDMyOC43MTlDNDUuMTcgMzY0LjA0OSA3MC43MyAzOTMuNTggMTA0Ljc2OCA0MDEuMDA0TDEzOS4xMDUgNDg2Ljg0NEMxNDUuMTk5IDUwMi4xMjUgMTU5Ljc3NyA1MTIgMTc2LjI0NiA1MTJIMTk5Ljk5NEMyMjIuMDU3IDUxMiAyMzkuOTk0IDQ5NC4wNjIgMjM5Ljk5NCA0NzJWNDI0LjcwOUMyNDkuOTQxIDQyOS4yODcgMjYwLjc0NCA0MzIgMjcxLjk5MiA0MzJDMjgzLjI0MiA0MzIgMjk0LjA0NSA0MjkuMjg3IDMwMy45OTIgNDI0LjcwOVY0NzJDMzAzLjk5MiA0OTQuMDYyIDMyMS45MyA1MTIgMzQzLjk5IDUxMkgzNjcuNzRDMzg0LjIwOSA1MTIgMzk4Ljc4NyA1MDIuMTI1IDQwNC44ODEgNDg2Ljg0NEw0MzkuMjE5IDQwMS4wMDRDNDczLjI1NiAzOTMuNTggNDk4LjgxNCAzNjQuMDQ5IDQ5OC44MTQgMzI4LjcxOUM0OTguODE0IDMyNy4wOTQgNDk4Ljc1MiAzMjUuNDM4IDQ5OC42MTEgMzIzLjc4MUM1MjUuNjI3IDMxMi4wOTQgNTQzLjk4NiAyODUuNjI1IDU0My45ODYgMjU2QzU0My45ODYgMjQ3LjE1NiA1MzYuODMgMjQwIDUyNy45ODYgMjQwWk0yMDcuOTk0IDQ3MkMyMDcuOTk0IDQ3Ni40MDYgMjA0LjQgNDgwIDE5OS45OTQgNDgwSDE3Ni4yNDZDMTcyLjk0OSA0ODAgMTcwLjA0MyA0NzguMDMxIDE2OC44MjQgNDc0Ljk2OUwxMzkuMDQ3IDQwMC41MzVDMTQxLjQ4IDM5OS45NDcgMTQzLjkzMiAzOTkuNDg4IDE0Ni4zMjQgMzk4LjY1NkMxNjMuMDE0IDQxMy4xOTUgMTg1Ljc5MSA0MTkuMzExIDIwNy45OTQgNDE1Ljk1N1Y0NzJaTTM3NS4xNjIgNDc0Ljk2OUMzNzMuOTQzIDQ3OC4wMzEgMzcxLjAzNyA0ODAgMzY3Ljc0IDQ4MEgzNDMuOTlDMzM5LjU4NiA0ODAgMzM1Ljk5MiA0NzYuNDA2IDMzNS45OTIgNDcyVjQxNS45NjFDMzU4LjE3NCA0MTkuMzA5IDM4MC45NjMgNDEzLjE5MSAzOTcuNjYyIDM5OC42NTZDNDAwLjA1NSAzOTkuNDg4IDQwMi41MDYgMzk5Ljk0NyA0MDQuOTM5IDQwMC41MzVMMzc1LjE2MiA0NzQuOTY5Wk02MjIuNzY2IDkxLjY4OEw1ODAuMjk3IDQ5LjIxOUM1NjkuMjAzIDM4LjEyNSA1NTQuNDU1IDMyIDUzOC43MzYgMzJINDQ1Ljg3OUM0MjQuOTQxIDExLjU5NCAzOTYuOTQzIDAgMzY3Ljk5IDBDMzA2LjI0MiAwIDI1NS45OTQgNTAuMjUgMjU1Ljk5NCAxMTJTMzA2LjI0MiAyMjQgMzY3Ljk5IDIyNEMzOTkuMzY1IDIyNCA0MjkuNTk4IDIxMC40MDYgNDUwLjk3MyAxODYuNzE5QzQ2OS42NzYgMTY1LjkzOCA0NzkuOTg4IDEzOS40MDYgNDc5Ljk4OCAxMTJDNDc5Ljk4OCAxMDMuMTU2IDQ3Mi44MzIgOTYgNDYzLjk4OCA5NlM0NDcuOTg4IDEwMy4xNTYgNDQ3Ljk4OCAxMTJDNDQ3Ljk4OCAxMzEuNDY5IDQ0MC41OTggMTUwLjQwNiA0MjcuMTkxIDE2NS4yODFDNDExLjY3OCAxODIuNSAzOTAuNjQ2IDE5MiAzNjcuOTkgMTkyQzMyMy44ODMgMTkyIDI4Ny45OTIgMTU2LjEyNSAyODcuOTkyIDExMlMzMjMuODgzIDMyIDM2Ny45OSAzMkMzOTAuNjQ2IDMyIDQxMS42NzggNDEuNSA0MjcuMTkxIDU4LjcxOUM0MzAuMjM4IDYyLjA5NCA0MzQuNTUxIDY0IDQzOS4wODIgNjRINTM4LjczNkM1NDUuODkzIDY0IDU1Mi42MTEgNjYuNzgxIDU1Ny42NTggNzEuODQ0TDYwMC4xMjUgMTE0LjMxMkM2MDguMjk3IDEyMi40NjkgNjEwLjMxMyAxMzQuOTA2IDYwNS4xNTYgMTQ1LjIxOUM2MDAuNTk0IDE1NC4zNDQgNTkxLjQzOCAxNjAgNTgxLjIzNCAxNjBINTExLjk4NkM1MDMuMTQzIDE2MCA0OTUuOTg2IDE2Ny4xNTYgNDk1Ljk4NiAxNzZTNTAzLjE0MyAxOTIgNTExLjk4NiAxOTJINTgxLjIzNEM2MDMuNjI1IDE5MiA2MjMuNzY2IDE3OS41NjIgNjMzLjc4MSAxNTkuNTMxQzY0NS4xMDcgMTM2Ljg3NSA2NDAuNjg4IDEwOS42MjUgNjIyLjc2NiA5MS42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ram(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M511.986 112C520.822 112 527.986 104.836 527.986 96C527.986 87.162 520.822 80 511.986 80S495.986 87.162 495.986 96C495.986 104.836 503.15 112 511.986 112ZM527.986 240C519.143 240 511.986 247.156 511.986 256C511.986 275.75 497.299 293.062 477.066 297.188C472.691 298.094 468.879 300.781 466.566 304.594C464.254 308.438 463.66 313.062 464.91 317.344C466.223 321.875 466.816 325.375 466.816 328.719C466.816 358.844 431.535 381.281 401.412 365.469C394.709 361.906 386.506 363.531 381.678 369.375C368.553 385.063 345.85 390.344 326.102 380C319.477 376.531 311.242 378.125 306.414 383.906C289.289 404.344 254.697 404.344 237.572 383.906C232.713 378.125 224.494 376.531 217.885 380C198.088 390.375 175.449 385.094 162.309 369.375C157.465 363.563 149.262 361.906 142.574 365.469C112.467 381.281 77.17 358.844 77.17 328.719C77.17 325.375 77.764 321.875 79.076 317.344C80.326 313.062 79.732 308.438 77.42 304.594C75.107 300.781 71.295 298.094 66.92 297.188C46.686 293.062 32 275.75 32 256S46.686 218.938 66.92 214.812C71.295 213.906 75.107 211.219 77.42 207.406C79.732 203.562 80.326 198.938 79.076 194.656C77.764 190.125 77.17 186.625 77.17 183.281C77.17 153.188 112.467 130.781 142.574 146.531C149.262 150.063 157.465 148.438 162.309 142.625C175.434 126.938 198.072 121.594 217.885 132C225.729 136.031 235.369 133.062 239.479 125.25C243.572 117.406 240.557 107.75 232.729 103.625C203.76 88.469 169.355 93.281 146.324 113.344C138.23 110.531 129.887 109.094 121.402 109.094C79.373 109.094 45.17 142.375 45.17 183.281C45.17 184.906 45.232 186.563 45.373 188.219C18.359 199.906 0 226.375 0 256S18.359 312.094 45.373 323.781C45.232 325.438 45.17 327.094 45.17 328.719C45.17 364.049 70.73 393.58 104.768 401.004L139.105 486.844C145.199 502.125 159.777 512 176.246 512H199.994C222.057 512 239.994 494.062 239.994 472V424.709C249.941 429.287 260.744 432 271.992 432C283.242 432 294.045 429.287 303.992 424.709V472C303.992 494.062 321.93 512 343.99 512H367.74C384.209 512 398.787 502.125 404.881 486.844L439.219 401.004C473.256 393.58 498.814 364.049 498.814 328.719C498.814 327.094 498.752 325.438 498.611 323.781C525.627 312.094 543.986 285.625 543.986 256C543.986 247.156 536.83 240 527.986 240ZM207.994 472C207.994 476.406 204.4 480 199.994 480H176.246C172.949 480 170.043 478.031 168.824 474.969L139.047 400.535C141.48 399.947 143.932 399.488 146.324 398.656C163.014 413.195 185.791 419.311 207.994 415.957V472ZM375.162 474.969C373.943 478.031 371.037 480 367.74 480H343.99C339.586 480 335.992 476.406 335.992 472V415.961C358.174 419.309 380.963 413.191 397.662 398.656C400.055 399.488 402.506 399.947 404.939 400.535L375.162 474.969ZM622.766 91.688L580.297 49.219C569.203 38.125 554.455 32 538.736 32H445.879C424.941 11.594 396.943 0 367.99 0C306.242 0 255.994 50.25 255.994 112S306.242 224 367.99 224C399.365 224 429.598 210.406 450.973 186.719C469.676 165.938 479.988 139.406 479.988 112C479.988 103.156 472.832 96 463.988 96S447.988 103.156 447.988 112C447.988 131.469 440.598 150.406 427.191 165.281C411.678 182.5 390.646 192 367.99 192C323.883 192 287.992 156.125 287.992 112S323.883 32 367.99 32C390.646 32 411.678 41.5 427.191 58.719C430.238 62.094 434.551 64 439.082 64H538.736C545.893 64 552.611 66.781 557.658 71.844L600.125 114.312C608.297 122.469 610.313 134.906 605.156 145.219C600.594 154.344 591.438 160 581.234 160H511.986C503.143 160 495.986 167.156 495.986 176S503.143 192 511.986 192H581.234C603.625 192 623.766 179.562 633.781 159.531C645.107 136.875 640.688 109.625 622.766 91.688Z" />
        </Icon>
    </>
}