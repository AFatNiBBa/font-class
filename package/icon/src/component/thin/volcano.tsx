
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=thin volcano}
 * @preview ![volcano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDIuODY3IDIyNEgyMDkuMTIxQzE5Ny4xMTkgMjI0IDE4NS45NDUgMjI5LjI4MSAxNzguNDI4IDIzOC41NjJMMTI0LjUzMSAzMDUuNjI1QzEyMi4xNTYgMzA4LjU2MiAxMjIuMTg4IDMxMi43ODEgMTI0LjU5NCAzMTUuNzE5TDEzNy40MDggMzMxLjI4MUMxNDMuNDA4IDMzOC42MjUgMTUyLjcwNyAzNDIuODc1IDE2Mi44OTUgMzQyLjg3NUMxNjIuOTI2IDM0Mi45MDYgMTYyLjk1NyAzNDIuOTA2IDE2My4wMDQgMzQyLjkwNkMxNzMuMjA5IDM0Mi44NzUgMTgyLjU1NSAzMzguNjg4IDE4OC42NjQgMzMxLjI4MUMyMDQuMjM2IDMxMi4yNTggMjM5LjQ1MyAzMDQuMDIgMjYyLjU5NiAzMzAuMDYzTDI5My4yMjUgMzY0LjkwNkMyOTkuMjI3IDM3MS43MTkgMzA4LjI0MiAzNzUuNjU2IDMxNy45NjMgMzc1LjY4OEgzMTguMDg4QzMyNy44NTYgMzc1LjY4OCAzMzYuOTM0IDM3MS43ODEgMzQzLjAyOSAzNjQuOTA2TDM4Ni43NTQgMzE1LjE4OEMzODkuMzMyIDMxMi4yODEgMzg5LjQyNiAzMDcuOTM4IDM4Ni45ODggMzA0LjkwNkwzMzMuNjIxIDIzOC40NjlDMzI2LjAxIDIyOS4yODEgMzE0Ljc5MSAyMjQgMzAyLjg2NyAyMjRaTTMzMS4wNDMgMzU0LjMxMkMzMjQuNjQ5IDM2MS40OTYgMzExLjUzNSAzNjEuNDU5IDMwNS4yNDIgMzU0LjM0NEwyNzQuNTgyIDMxOS40NjlDMjYyLjI5OSAzMDUuNjU2IDI0NS40ODUgMjk3LjcxOSAyMjkuMjk1IDI5Ny43MTlDMjA1LjgzMiAyOTcuNzE5IDE4OC4yNzIgMzA2LjQ3NSAxNzYuMzAzIDMyMS4xMjVDMTcwLjA2MSAzMjguNzA3IDE1Ni4xMzUgMzI4Ljg3MSAxNDkuNzcgMzIxLjEyNUwxNDEuMDggMzEwLjU2MkwxOTAuODY3IDI0OC41OTRDMTk1LjMyMiAyNDMuMTI1IDIwMS45NjMgMjQwIDIwOS4xMjEgMjQwSDMwMi44NjdDMzEwLjAyNCAyNDAgMzE2Ljc0NCAyNDMuMTU2IDMyMS4yMjkgMjQ4LjU2MkwzNzAuMjk3IDMwOS42ODdMMzMxLjA0MyAzNTQuMzEyWk0xNjQuNzk3IDE0Ny45NzFDMTc1LjA3OCAxNDcuOTcxIDE4NS4xODggMTQ1LjcyMSAxOTQuNDY5IDE0MS4zNzlMMjE4LjUwMiAxODcuNjVDMjIwLjUzMyAxOTEuNTg4IDIyNS4zOTMgMTkzLjE0OCAyMjkuMjgzIDE5MS4wNTdDMjMzLjIwNSAxODkuMDI1IDIzNC43MzYgMTg0LjE4MiAyMzIuNjkgMTgwLjI3N0wyMDQuOTA2IDEyNi43ODdDMjAyLjEyOSAxMjEuNCAxOTYuMjIxIDEyMi4wOTIgMTkzLjU3OCAxMjMuNjkzQzE4NC45MDYgMTI5LjEgMTc0Ljk1MyAxMzEuOTc1IDE2NC43OTcgMTMxLjk3NUMxMzUuNjg4IDEzMS45NzUgMTEyIDEwOS4yNiAxMTIgODEuMzI4QzExMiA1My4zOTUgMTM1LjY4OCAzMC42NSAxNjQuNzk3IDMwLjY1QzE3Ny4yMzUgMzAuNjUgMTg5LjAzMSAzNC44OTggMTk4LjkzOCA0Mi45NTlDMjAzLjA1OSA0Ni4zMTQgMjA4LjUyMiA0NC42IDIxMC43ODMgNDAuOTYxQzIyMC40NzEgMjUuMzM4IDIzNy4zNzcgMTUuOTk2IDI1Ni4wMDIgMTUuOTk2UzI5MS41MzMgMjUuMzM4IDMwMS4yMjEgNDAuOTYxQzMwMy41IDQ0LjYyOSAzMDguOTMyIDQ2LjI5NSAzMTMuMDY1IDQyLjk1OUMzMjIuOTcxIDM0Ljg5OCAzMzQuNzY4IDMwLjY1IDM0Ny4yMDUgMzAuNjVDMzc2LjMxNSAzMC42NSA0MDAuMDAyIDUzLjM5NSA0MDAuMDAyIDgxLjMyOEM0MDAuMDAyIDEwOS4yNiAzNzYuMzE1IDEzMS45NzUgMzQ3LjIwNSAxMzEuOTc1QzMzNy4wNDkgMTMxLjk3NSAzMjcuMDk2IDEyOS4xIDMxOC40MjQgMTIzLjY5M0MzMTUuODA1IDEyMi4wOTIgMzA5Ljg3NyAxMjEuMzk2IDMwNy4wOTYgMTI2Ljc4N0wyNzkuMzE1IDE4MC4yNzdDMjc3LjI2OCAxODQuMTgyIDI3OC43OTkgMTg5LjAyNSAyODIuNzIxIDE5MS4wNTdDMjg3LjQxNiAxOTMuNTU5IDI5MS45NjkgMTkwLjYxNSAyOTMuNTAyIDE4Ny42NUwzMTcuNTMzIDE0MS4zNzlDMzI2LjgxNSAxNDUuNzIxIDMzNi45MjQgMTQ3Ljk3MSAzNDcuMjA1IDE0Ny45NzFDMzg1LjE0MyAxNDcuOTcxIDQxNi4wMDIgMTE4LjA3IDQxNi4wMDIgODEuMzI4QzQxNi4wMDIgNDQuNTUzIDM4NS4xNDMgMTQuNjUyIDM0Ny4yMDUgMTQuNjUyQzMzMy44NjEgMTQuNjUyIDMyMS4xMTEgMTguNDAyIDMwOS44NzcgMjUuNTU3QzI5Ni44NzcgOS40MDQgMjc3LjI5OSAwIDI1Ni4wMDIgMFMyMTUuMTI3IDkuNDA0IDIwMi4xMjUgMjUuNTU3QzE5MC44OTEgMTguNDAyIDE3OC4xNDEgMTQuNjUyIDE2NC43OTcgMTQuNjUyQzEyNi44NiAxNC42NTIgOTYgNDQuNTUzIDk2IDgxLjMyOEM5NiAxMTguMDcgMTI2Ljg2IDE0Ny45NzEgMTY0Ljc5NyAxNDcuOTcxWk01MDMuOTg4IDQ1MC41OTRMNDA2LjM2NSAzMjkuMTI1QzQwMy42MTUgMzI1LjY4OCAzOTguNTgyIDMyNS4xMjUgMzk1LjExMyAzMjcuODc1QzM5MS42NzYgMzMwLjY1NiAzOTEuMTI5IDMzNS42ODggMzkzLjg5NSAzMzkuMTI1TDQ5MS40MDggNDYwLjQ2OUM1MDIuMjI1IDQ3NC41NDEgNDkyLjcxOSA0OTYgNDczLjA0NSA0OTZIMzkuMDY3QzE5LjU5IDQ5NiA5LjYwNCA0NzQuNjg2IDIwLjQ4NiA0NjAuNjI1TDExNy40OTggMzQwLjA5NEMxMjAuMjY2IDMzNi42MjUgMTE5LjcxNyAzMzEuNTk0IDExNi4yNzkgMzI4Ljg0NEMxMTIuODI2IDMyNi4wMzEgMTA3Ljc5NSAzMjYuNjI1IDEwNS4wMjcgMzMwLjAzMUw3LjkwNiA0NTAuNzE5Qy0wLjkzOSA0NjIuMTg3IC0yLjQ4NiA0NzcuMzc1IDMuODkxIDQ5MC4zNDRDMTAuNDUzIDUwMy42ODggMjMuOTQgNTEyIDM5LjA2NyA1MTJINDczLjA0NUM0ODguMTEgNTEyIDUwMS41NDkgNTAzLjcxOSA1MDguMTEzIDQ5MC4zNzVDNTE0LjQ4OCA0NzcuNDA2IDUxMi45NTcgNDYyLjIxOSA1MDMuOTg4IDQ1MC41OTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Volcano(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M302.867 224H209.121C197.119 224 185.945 229.281 178.428 238.562L124.531 305.625C122.156 308.562 122.188 312.781 124.594 315.719L137.408 331.281C143.408 338.625 152.707 342.875 162.895 342.875C162.926 342.906 162.957 342.906 163.004 342.906C173.209 342.875 182.555 338.688 188.664 331.281C204.236 312.258 239.453 304.02 262.596 330.063L293.225 364.906C299.227 371.719 308.242 375.656 317.963 375.688H318.088C327.856 375.688 336.934 371.781 343.029 364.906L386.754 315.188C389.332 312.281 389.426 307.938 386.988 304.906L333.621 238.469C326.01 229.281 314.791 224 302.867 224ZM331.043 354.312C324.649 361.496 311.535 361.459 305.242 354.344L274.582 319.469C262.299 305.656 245.485 297.719 229.295 297.719C205.832 297.719 188.272 306.475 176.303 321.125C170.061 328.707 156.135 328.871 149.77 321.125L141.08 310.562L190.867 248.594C195.322 243.125 201.963 240 209.121 240H302.867C310.024 240 316.744 243.156 321.229 248.562L370.297 309.687L331.043 354.312ZM164.797 147.971C175.078 147.971 185.188 145.721 194.469 141.379L218.502 187.65C220.533 191.588 225.393 193.148 229.283 191.057C233.205 189.025 234.736 184.182 232.69 180.277L204.906 126.787C202.129 121.4 196.221 122.092 193.578 123.693C184.906 129.1 174.953 131.975 164.797 131.975C135.688 131.975 112 109.26 112 81.328C112 53.395 135.688 30.65 164.797 30.65C177.235 30.65 189.031 34.898 198.938 42.959C203.059 46.314 208.522 44.6 210.783 40.961C220.471 25.338 237.377 15.996 256.002 15.996S291.533 25.338 301.221 40.961C303.5 44.629 308.932 46.295 313.065 42.959C322.971 34.898 334.768 30.65 347.205 30.65C376.315 30.65 400.002 53.395 400.002 81.328C400.002 109.26 376.315 131.975 347.205 131.975C337.049 131.975 327.096 129.1 318.424 123.693C315.805 122.092 309.877 121.396 307.096 126.787L279.315 180.277C277.268 184.182 278.799 189.025 282.721 191.057C287.416 193.559 291.969 190.615 293.502 187.65L317.533 141.379C326.815 145.721 336.924 147.971 347.205 147.971C385.143 147.971 416.002 118.07 416.002 81.328C416.002 44.553 385.143 14.652 347.205 14.652C333.861 14.652 321.111 18.402 309.877 25.557C296.877 9.404 277.299 0 256.002 0S215.127 9.404 202.125 25.557C190.891 18.402 178.141 14.652 164.797 14.652C126.86 14.652 96 44.553 96 81.328C96 118.07 126.86 147.971 164.797 147.971ZM503.988 450.594L406.365 329.125C403.615 325.688 398.582 325.125 395.113 327.875C391.676 330.656 391.129 335.688 393.895 339.125L491.408 460.469C502.225 474.541 492.719 496 473.045 496H39.067C19.59 496 9.604 474.686 20.486 460.625L117.498 340.094C120.266 336.625 119.717 331.594 116.279 328.844C112.826 326.031 107.795 326.625 105.027 330.031L7.906 450.719C-0.939 462.187 -2.486 477.375 3.891 490.344C10.453 503.688 23.94 512 39.067 512H473.045C488.11 512 501.549 503.719 508.113 490.375C514.488 477.406 512.957 462.219 503.988 450.594Z" />
        </Icon>
    </>
}