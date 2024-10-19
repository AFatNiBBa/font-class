
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `paw` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paw?s=thin paw}
 * @preview ![paw](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguNDk2IDE5MC42MjdDMzIyLjA0MyAxOTEuNTU3IDMyNS42NCAxOTIuMDA2IDMyOS4yNDIgMTkyLjAwNkMzNTcuMTIxIDE5Mi4wMDYgMzg1LjQ3NCAxNjUuMTY0IDM5NS45OSAxMjYuNzUyQzQwNy44NjMgODMuMzc5IDM5Mi4zNjUgNDEuNTA0IDM2MS40OTIgMzMuMzc5QzM1Ny45NDUgMzIuNDQ5IDM1NC4zNDcgMzIgMzUwLjc0NCAzMkMzMjIuODY1IDMyIDI5NC41MTMgNTguODQyIDI4My45OTggOTcuMjU0QzI3Mi4xMjUgMTQwLjYyNyAyODcuNjIzIDE4Mi41MDIgMzE4LjQ5NiAxOTAuNjI3Wk0yOTkuNDMxIDEwMS40NzlDMzA3Ljc3NyA3MC45OSAzMjkuODM4IDQ4IDM1MC43NDQgNDhDMzUzLjAxOSA0OCAzNTUuMjY5IDQ4LjI4OSAzNTcuNDIgNDguODUyQzM2Ni44MzIgNTEuMzI4IDM3Mi43NCA1OC42NjggMzc2LjAzOSA2NC4zODlDMzg0LjcxNyA3OS40MzQgMzg2LjQwNCAxMDEuMTY4IDM4MC41NTYgMTIyLjUyN0MzNzIuMjExIDE1My4wMTYgMzUwLjE1IDE3Ni4wMDYgMzI5LjI0NCAxNzYuMDA2QzMyNi45NjkgMTc2LjAwNiAzMjQuNzE5IDE3NS43MTcgMzIyLjU2OCAxNzUuMTU0QzMxMy4xNTYgMTcyLjY3OCAzMDcuMjQ4IDE2NS4zMzggMzAzLjk0NyAxNTkuNjE3QzI5NS4yNzEgMTQ0LjU3MiAyOTMuNTg0IDEyMi44MzggMjk5LjQzMSAxMDEuNDc5Wk00NzQuODU3IDE2MS4yNTJDNDcxLjI3NSAxNjAuMzkxIDQ2Ny42NCAxNTkuOTc1IDQ2NC4wMTEgMTU5Ljk3NUM0MzguMTU0IDE1OS45NzUgNDEyLjMzNiAxODEuMDEyIDQwMy4yMzggMjExLjM3N0MzOTIuODY1IDI0Ni4wMDIgNDA3Ljk4OCAyNzkuNzUyIDQzNy4xMTEgMjg2Ljc1MkM0NDAuNjk1IDI4Ny42MTMgNDQ0LjMyNiAyODguMDI5IDQ0Ny45NTEgMjg4LjAyOUM0NzMuNzg5IDI4OC4wMjkgNDk5LjUyMyAyNjYuOTkyIDUwOC43MyAyMzYuNjI3QzUxOS4xMDUgMjAyLjAwMiA1MDMuOTggMTY4LjI1MiA0NzQuODU3IDE2MS4yNTJaTTQ5My40MiAyMzEuOTg0QzQ4Ni40OTggMjU0LjgxMiA0NjYuOTUxIDI3Mi4wMjkgNDQ3Ljk1MSAyNzIuMDI5QzQ0NS41NDEgMjcyLjAyOSA0NDMuMTUgMjcxLjc0OCA0NDAuODQ5IDI3MS4xOTVDNDMwLjcwMyAyNjguNzU2IDQyNC44NTMgMjYxLjc3NSA0MjEuNzMyIDI1Ni4zNDhDNDE1LjM1MyAyNDUuMjU4IDQxNC4xOTkgMjMwLjUzOSA0MTguNTY0IDIxNS45NjlDNDI1LjM5NiAxOTMuMTcgNDQ0LjkzNSAxNzUuOTc1IDQ2NC4wMTIgMTc1Ljk3NUM0NjYuNDI4IDE3NS45NzUgNDY4LjgxOCAxNzYuMjU2IDQ3MS4xMTkgMTc2LjgwOUM0ODEuMjY1IDE3OS4yNDggNDg3LjExNyAxODYuMjI5IDQ5MC4yMzggMTkxLjY1NkM0OTYuNjE1IDIwMi43NDYgNDk3Ljc2OSAyMTcuNDY1IDQ5My40MiAyMzEuOTg0Wk0xODIuNzU4IDE5Mi4wMDZDMTg2LjM2MyAxOTIuMDA2IDE4OS45NTUgMTkxLjU1NyAxOTMuNTA2IDE5MC42MjdDMjI0LjM3OSAxODIuNTAyIDIzOS44NzcgMTQwLjYyNyAyMjguMDAyIDk3LjI1NEMyMTcuNDg4IDU4Ljg0NiAxODkuMTMzIDMyIDE2MS4yNTYgMzJDMTU3LjY1MiAzMiAxNTQuMDU4IDMyLjQ0OSAxNTAuNTA4IDMzLjM3OUMxMTkuNjM2IDQxLjUwNCAxMDQuMTM2IDgzLjM3OSAxMTYuMDExIDEyNi43NTJDMTI2LjUyNSAxNjUuMTYgMTU0Ljg4MSAxOTIuMDA2IDE4Mi43NTggMTkyLjAwNlpNMTM1Ljk2MSA2NC4zODlDMTM5LjI2IDU4LjY2OCAxNDUuMTY4IDUxLjMyOCAxNTQuNTY0IDQ4Ljg1NUMxNTYuNzMyIDQ4LjI4OSAxNTguOTgyIDQ4IDE2MS4yNTYgNDhDMTgyLjE2NCA0OCAyMDQuMjI0IDcwLjk5IDIxMi41NyAxMDEuNDc5QzIxOC40MTggMTIyLjgzOCAyMTYuNzI4IDE0NC41NzIgMjA4LjA1MyAxNTkuNjE3QzIwNC43NTQgMTY1LjMzOCAxOTguODQ1IDE3Mi42NzggMTg5LjQ0OSAxNzUuMTVDMTg3LjI4MSAxNzUuNzE3IDE4NS4wMzEgMTc2LjAwNiAxODIuNzU4IDE3Ni4wMDZDMTYxLjg0OSAxNzYuMDA2IDEzOS43ODkgMTUzLjAxNiAxMzEuNDQzIDEyMi41MjdDMTI1LjU5NSAxMDEuMTY4IDEyNy4yODUgNzkuNDM0IDEzNS45NjEgNjQuMzg5Wk03NC44OSAyODYuNzUyQzEwNC4wMTEgMjc5Ljc1MiAxMTkuMTM2IDI0Ni4wMDIgMTA4Ljc2MSAyMTEuMzc3Qzk5LjY2NiAxODEuMDE0IDczLjg0NCAxNTkuOTc1IDQ3Ljk4OCAxNTkuOTc1QzQ0LjM1OSAxNTkuOTc1IDQwLjcyOCAxNjAuMzkxIDM3LjE0MiAxNjEuMjUyQzguMDE5IDE2OC4yNTIgLTcuMTA0IDIwMi4wMDIgMy4yNjkgMjM2LjYyN0MxMi4zNjcgMjY2Ljk5IDM4LjE4NyAyODguMDI5IDY0LjA0NSAyODguMDI5QzY3LjY3NCAyODguMDI5IDcxLjMwNCAyODcuNjEzIDc0Ljg5IDI4Ni43NTJaTTE4LjU5NyAyMzIuMDM1QzE0LjIzIDIxNy40NjUgMTUuMzg1IDIwMi43NDYgMjEuNzYzIDE5MS42NTZDMjQuODg1IDE4Ni4yMjkgMzAuNzM0IDE3OS4yNDggNDAuODgzIDE3Ni44MDlDNDMuMTgzIDE3Ni4yNTYgNDUuNTc0IDE3NS45NzUgNDcuOTg4IDE3NS45NzVDNjcuMDY2IDE3NS45NzUgODYuNjAzIDE5My4xNyA5My40MzUgMjE1Ljk2OUM5Ny44MDEgMjMwLjUzOSA5Ni42NDYgMjQ1LjI1OCA5MC4yNjkgMjU2LjM0OEM4Ny4xNDggMjYxLjc3NSA4MS4yOTcgMjY4Ljc1NiA3MS4xNSAyNzEuMTk1QzY4Ljg0OSAyNzEuNzQ4IDY2LjQ1OSAyNzIuMDI5IDY0LjA0NSAyNzIuMDI5QzQ0Ljk2NyAyNzIuMDI5IDI1LjQyOCAyNTQuODM0IDE4LjU5NyAyMzIuMDM1Wk0yNTYgMjI0LjAwMkMxNzYuNjMxIDIyNC4wMDIgNjQuMDE1IDM0Ni43NTIgNjQuMDE1IDQyNC4yNUM2NC4wMTUgNDU5LjEyNSA5MC43NjMgNDgwIDEzNS43NiA0ODBDMTg0LjYzMSA0ODAgMjE2Ljg3OSA0NTQuODc1IDI1NiA0NTQuODc1QzI5NS40OTggNDU0Ljg3NSAzMjcuODY5IDQ4MCAzNzYuMjQgNDgwQzQyMS4yMzggNDgwIDQ0Ny45ODYgNDU5LjEyNSA0NDcuOTg2IDQyNC4yNUM0NDcuOTg2IDM0Ni43NTIgMzM1LjM2OSAyMjQuMDAyIDI1NiAyMjQuMDAyWk0zNzYuMjQgNDY0QzM1My40MDQgNDY0IDMzMy44NCA0NTcuNTM5IDMxNC45MiA0NTEuMjkxQzI5Ni40MzUgNDQ1LjE4OCAyNzcuMzIyIDQzOC44NzUgMjU2IDQzOC44NzVDMjM0Ljk0OSA0MzguODc1IDIxNi4wMDIgNDQ1LjE0MSAxOTcuNjc5IDQ1MS4yMDFDMTc4LjY1MiA0NTcuNDkyIDE1OC45NzYgNDY0IDEzNS43NiA0NjRDMTE0Ljk0MSA0NjQgODAuMDE1IDQ1OC44MzYgODAuMDE1IDQyNC4yNUM4MC4wMTUgMzUzLjY1IDE4OC41NjYgMjQwLjAwMiAyNTYgMjQwLjAwMlM0MzEuOTg2IDM1My42NSA0MzEuOTg2IDQyNC4yNUM0MzEuOTg2IDQ1OC44MzYgMzk3LjA2IDQ2NCAzNzYuMjQgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Paw(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M318.496 190.627C322.043 191.557 325.64 192.006 329.242 192.006C357.121 192.006 385.474 165.164 395.99 126.752C407.863 83.379 392.365 41.504 361.492 33.379C357.945 32.449 354.347 32 350.744 32C322.865 32 294.513 58.842 283.998 97.254C272.125 140.627 287.623 182.502 318.496 190.627ZM299.431 101.479C307.777 70.99 329.838 48 350.744 48C353.019 48 355.269 48.289 357.42 48.852C366.832 51.328 372.74 58.668 376.039 64.389C384.717 79.434 386.404 101.168 380.556 122.527C372.211 153.016 350.15 176.006 329.244 176.006C326.969 176.006 324.719 175.717 322.568 175.154C313.156 172.678 307.248 165.338 303.947 159.617C295.271 144.572 293.584 122.838 299.431 101.479ZM474.857 161.252C471.275 160.391 467.64 159.975 464.011 159.975C438.154 159.975 412.336 181.012 403.238 211.377C392.865 246.002 407.988 279.752 437.111 286.752C440.695 287.613 444.326 288.029 447.951 288.029C473.789 288.029 499.523 266.992 508.73 236.627C519.105 202.002 503.98 168.252 474.857 161.252ZM493.42 231.984C486.498 254.812 466.951 272.029 447.951 272.029C445.541 272.029 443.15 271.748 440.849 271.195C430.703 268.756 424.853 261.775 421.732 256.348C415.353 245.258 414.199 230.539 418.564 215.969C425.396 193.17 444.935 175.975 464.012 175.975C466.428 175.975 468.818 176.256 471.119 176.809C481.265 179.248 487.117 186.229 490.238 191.656C496.615 202.746 497.769 217.465 493.42 231.984ZM182.758 192.006C186.363 192.006 189.955 191.557 193.506 190.627C224.379 182.502 239.877 140.627 228.002 97.254C217.488 58.846 189.133 32 161.256 32C157.652 32 154.058 32.449 150.508 33.379C119.636 41.504 104.136 83.379 116.011 126.752C126.525 165.16 154.881 192.006 182.758 192.006ZM135.961 64.389C139.26 58.668 145.168 51.328 154.564 48.855C156.732 48.289 158.982 48 161.256 48C182.164 48 204.224 70.99 212.57 101.479C218.418 122.838 216.728 144.572 208.053 159.617C204.754 165.338 198.845 172.678 189.449 175.15C187.281 175.717 185.031 176.006 182.758 176.006C161.849 176.006 139.789 153.016 131.443 122.527C125.595 101.168 127.285 79.434 135.961 64.389ZM74.89 286.752C104.011 279.752 119.136 246.002 108.761 211.377C99.666 181.014 73.844 159.975 47.988 159.975C44.359 159.975 40.728 160.391 37.142 161.252C8.019 168.252 -7.104 202.002 3.269 236.627C12.367 266.99 38.187 288.029 64.045 288.029C67.674 288.029 71.304 287.613 74.89 286.752ZM18.597 232.035C14.23 217.465 15.385 202.746 21.763 191.656C24.885 186.229 30.734 179.248 40.883 176.809C43.183 176.256 45.574 175.975 47.988 175.975C67.066 175.975 86.603 193.17 93.435 215.969C97.801 230.539 96.646 245.258 90.269 256.348C87.148 261.775 81.297 268.756 71.15 271.195C68.849 271.748 66.459 272.029 64.045 272.029C44.967 272.029 25.428 254.834 18.597 232.035ZM256 224.002C176.631 224.002 64.015 346.752 64.015 424.25C64.015 459.125 90.763 480 135.76 480C184.631 480 216.879 454.875 256 454.875C295.498 454.875 327.869 480 376.24 480C421.238 480 447.986 459.125 447.986 424.25C447.986 346.752 335.369 224.002 256 224.002ZM376.24 464C353.404 464 333.84 457.539 314.92 451.291C296.435 445.188 277.322 438.875 256 438.875C234.949 438.875 216.002 445.141 197.679 451.201C178.652 457.492 158.976 464 135.76 464C114.941 464 80.015 458.836 80.015 424.25C80.015 353.65 188.566 240.002 256 240.002S431.986 353.65 431.986 424.25C431.986 458.836 397.06 464 376.24 464Z" />
        </Icon>
    </>
}