
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cookie-bite` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cookie-bite?s=thin cookie-bite}
 * @preview ![cookie-bite](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODcuODIzIDI1NS42MUM0MjcuODQxIDI1MS41MTcgMzc5LjkzOSAyMDMuNDk2IDM3Ni4yNCAxNDMuNDg0QzM3NS45ODEgMTM5LjI4MiAzNzIuNzMgMTM2LjAzMSAzNjguNTI3IDEzNS43NzJDMzA4LjUxNCAxMzIuMDcyIDI2MC40OTggODQuMTc0IDI1Ni41MDQgMjQuMTk4QzI1Ni4yMzUgMjAuMTU2IDI1My4xODEgMTYuOTIyIDI0OS4xNDcgMTYuNTQ1QzI0NS4yNTEgMTYuMTgxIDI0MS4zNTIgMTYgMjM3LjQ2MyAxNkMyMTguMDM1IDE2IDE5OC44NTEgMjAuNTI1IDE4MS40NzUgMjkuNDhMMTE2LjY2OCA2Mi40MDlDOTMuMzQ4IDc0LjM2MSA3NC4zNjMgOTMuMzQ1IDYyLjQxIDExNi42NjdMMjkuNTk4IDE4MS4yMzVDMTcuNjQyIDIwNC42NzIgMTMuNDI0IDIzMS4xNTcgMTcuNTI1IDI1Ny4xNzJMMjguODk0IDMyOC42NTZDMzIuOTk2IDM1NC41NTMgNDUuMTgzIDM3OC40NTkgNjMuNjk5IDM5Ni45NzRMMTE1LjE0NSA0NDguNDJDMTMzLjYwOCA0NjYuODgzIDE1Ny40NDMgNDc5LjAyNSAxODMuMjMyIDQ4My4xMDZMMjU1LjA3IDQ5NC40NzNDMjYxLjUyMSA0OTUuNDk0IDI2OC4wMDIgNDk2IDI3NC40NTcgNDk2QzI5My45MTYgNDk2IDMxMy4xNDQgNDkxLjQwOCAzMzAuNjU4IDQ4Mi41MkwzOTUuNDYzIDQ0OS40NzRDNDE4Ljc4MyA0MzcuNjM5IDQzNy43NjkgNDE4LjY1NSA0NDkuNjA1IDM5NS4zMzNMNDgyLjUzNSAzMzAuNzY1QzQ5My4yMjcgMzA5LjcwMSA0OTcuNjc2IDI4Ni4wMDUgNDk1LjQzNiAyNjIuNjEzQzQ5NS4wNjMgMjU4LjcxOSA0OTEuNzI2IDI1NS44NzYgNDg3LjgyMyAyNTUuNjFaTTQ2OC4yODEgMzIzLjQ5Nkw0MzUuMzM4IDM4OC4wOTNDNDI1LjEwOSA0MDguMjQ1IDQwOC4zNzcgNDI0Ljk3NyAzODguMTkzIDQzNS4yMjFMMzIzLjQxOCA0NjguMjUzQzMwOC4yNzMgNDc1LjkzOCAyOTEuMzQ0IDQ4MC4wMDEgMjc0LjQ1NyA0ODAuMDAxQzI2OC44MjggNDgwLjAwMSAyNjMuMTQ2IDQ3OS41NTMgMjU3LjU3IDQ3OC42N0wxODUuNzM0IDQ2Ny4zMDRDMTYzLjEzNSA0NjMuNzI0IDE0Mi41OTYgNDUzLjI0MiAxMjYuMzQyIDQzNi45ODhMNzUuMDE0IDM4NS42NkM1OC43NzUgMzY5LjQyMiA0OC4yOTEgMzQ4Ljg0NSA0NC42OTUgMzI2LjE0MkwzMy4zMyAyNTQuNjhDMjkuNzQgMjMxLjkxNyAzMy4zNzkgMjA5LjAzMyA0My44NjEgMTg4LjQ4M0w3Ni42NDggMTIzLjk2M0M4Ny4xMzkgMTAzLjQ5OSAxMDMuNSA4Ny4xMzYgMTIzLjkxNiA3Ni42NzJMMTg4LjgwMyA0My43MDJDMjAzLjY2MiAzNi4wNDYgMjIwLjQ4OCAzMS45OTkgMjM3LjQ2MyAzMS45OTlDMjM4LjY5NSAzMS45OTkgMjM5LjkzMyAzMi4wMTkgMjQxLjE3MiAzMi4wNjJDMjQ4LjU0MyA5NC40MTcgMjk4LjU2MiAxNDQuMTM4IDM2MC44NTkgMTUxLjE1NEMzNjcuODc5IDIxMy4zOTYgNDE3LjU5IDI2My40NTMgNDc5LjkzIDI3MC45MjdDNDgwLjQ5IDI4OS4wNTQgNDc2LjQ4MiAzMDcuMzQgNDY4LjI4MSAzMjMuNDk2Wk0xNzYuMDA4IDMwMy45OThDMTU4LjM4MyAzMDMuOTk4IDE0NC4wMDggMzE4LjM3MyAxNDQuMDA4IDMzNS45OTdDMTQ0LjAwOCAzNTMuNjIyIDE1OC4zODMgMzY3Ljk5NiAxNzYuMDA4IDM2Ny45OTZTMjA4LjAwOCAzNTMuNjIyIDIwOC4wMDggMzM1Ljk5N0MyMDguMDA4IDMxOC4zNzMgMTkzLjYzMyAzMDMuOTk4IDE3Ni4wMDggMzAzLjk5OFpNMTc2LjAwOCAzNTEuOTk3QzE2Ny4xODUgMzUxLjk5NyAxNjAuMDA4IDM0NC44MTkgMTYwLjAwOCAzMzUuOTk3QzE2MC4wMDggMzI3LjE3NSAxNjcuMTg1IDMxOS45OTggMTc2LjAwOCAzMTkuOTk4UzE5Mi4wMDggMzI3LjE3NSAxOTIuMDA4IDMzNS45OTdDMTkyLjAwOCAzNDQuODE5IDE4NC44MyAzNTEuOTk3IDE3Ni4wMDggMzUxLjk5N1pNMjA4LjAwOCAxNDQuMDA0QzE5MC4zODMgMTQ0LjAwNCAxNzYuMDA4IDE1OC4zNzggMTc2LjAwOCAxNzYuMDAzUzE5MC4zODMgMjA4LjAwMiAyMDguMDA4IDIwOC4wMDJTMjQwLjAwOCAxOTMuNjI3IDI0MC4wMDggMTc2LjAwM1MyMjUuNjMzIDE0NC4wMDQgMjA4LjAwOCAxNDQuMDA0Wk0yMDguMDA4IDE5Mi4wMDJDMTk5LjE4NSAxOTIuMDAyIDE5Mi4wMDggMTg0LjgyNSAxOTIuMDA4IDE3Ni4wMDNDMTkyLjAwOCAxNjcuMTgxIDE5OS4xODUgMTYwLjAwMyAyMDguMDA4IDE2MC4wMDNTMjI0LjAwOCAxNjcuMTgxIDIyNC4wMDggMTc2LjAwM0MyMjQuMDA4IDE4NC44MjUgMjE2LjgzIDE5Mi4wMDIgMjA4LjAwOCAxOTIuMDAyWk0zNjguMDA4IDI3MS45OTlDMzUwLjM4MyAyNzEuOTk5IDMzNi4wMDggMjg2LjM3NCAzMzYuMDA4IDMwMy45OThTMzUwLjM4MyAzMzUuOTk3IDM2OC4wMDggMzM1Ljk5N1M0MDAuMDA4IDMyMS42MjMgNDAwLjAwOCAzMDMuOTk4UzM4NS42MzMgMjcxLjk5OSAzNjguMDA4IDI3MS45OTlaTTM2OC4wMDggMzE5Ljk5OEMzNTkuMTg1IDMxOS45OTggMzUyLjAwOCAzMTIuODIgMzUyLjAwOCAzMDMuOTk4QzM1Mi4wMDggMjk1LjE3NiAzNTkuMTg1IDI4Ny45OTkgMzY4LjAwOCAyODcuOTk5UzM4NC4wMDggMjk1LjE3NiAzODQuMDA4IDMwMy45OThDMzg0LjAwOCAzMTIuODIgMzc2LjgzIDMxOS45OTggMzY4LjAwOCAzMTkuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CookieBite(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M487.823 255.61C427.841 251.517 379.939 203.496 376.24 143.484C375.981 139.282 372.73 136.031 368.527 135.772C308.514 132.072 260.498 84.174 256.504 24.198C256.235 20.156 253.181 16.922 249.147 16.545C245.251 16.181 241.352 16 237.463 16C218.035 16 198.851 20.525 181.475 29.48L116.668 62.409C93.348 74.361 74.363 93.345 62.41 116.667L29.598 181.235C17.642 204.672 13.424 231.157 17.525 257.172L28.894 328.656C32.996 354.553 45.183 378.459 63.699 396.974L115.145 448.42C133.608 466.883 157.443 479.025 183.232 483.106L255.07 494.473C261.521 495.494 268.002 496 274.457 496C293.916 496 313.144 491.408 330.658 482.52L395.463 449.474C418.783 437.639 437.769 418.655 449.605 395.333L482.535 330.765C493.227 309.701 497.676 286.005 495.436 262.613C495.063 258.719 491.726 255.876 487.823 255.61ZM468.281 323.496L435.338 388.093C425.109 408.245 408.377 424.977 388.193 435.221L323.418 468.253C308.273 475.938 291.344 480.001 274.457 480.001C268.828 480.001 263.146 479.553 257.57 478.67L185.734 467.304C163.135 463.724 142.596 453.242 126.342 436.988L75.014 385.66C58.775 369.422 48.291 348.845 44.695 326.142L33.33 254.68C29.74 231.917 33.379 209.033 43.861 188.483L76.648 123.963C87.139 103.499 103.5 87.136 123.916 76.672L188.803 43.702C203.662 36.046 220.488 31.999 237.463 31.999C238.695 31.999 239.933 32.019 241.172 32.062C248.543 94.417 298.562 144.138 360.859 151.154C367.879 213.396 417.59 263.453 479.93 270.927C480.49 289.054 476.482 307.34 468.281 323.496ZM176.008 303.998C158.383 303.998 144.008 318.373 144.008 335.997C144.008 353.622 158.383 367.996 176.008 367.996S208.008 353.622 208.008 335.997C208.008 318.373 193.633 303.998 176.008 303.998ZM176.008 351.997C167.185 351.997 160.008 344.819 160.008 335.997C160.008 327.175 167.185 319.998 176.008 319.998S192.008 327.175 192.008 335.997C192.008 344.819 184.83 351.997 176.008 351.997ZM208.008 144.004C190.383 144.004 176.008 158.378 176.008 176.003S190.383 208.002 208.008 208.002S240.008 193.627 240.008 176.003S225.633 144.004 208.008 144.004ZM208.008 192.002C199.185 192.002 192.008 184.825 192.008 176.003C192.008 167.181 199.185 160.003 208.008 160.003S224.008 167.181 224.008 176.003C224.008 184.825 216.83 192.002 208.008 192.002ZM368.008 271.999C350.383 271.999 336.008 286.374 336.008 303.998S350.383 335.997 368.008 335.997S400.008 321.623 400.008 303.998S385.633 271.999 368.008 271.999ZM368.008 319.998C359.185 319.998 352.008 312.82 352.008 303.998C352.008 295.176 359.185 287.999 368.008 287.999S384.008 295.176 384.008 303.998C384.008 312.82 376.83 319.998 368.008 319.998Z" />
        </Icon>
    </>
}