
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-sun` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sun?s=light cloud-sun}
 * @preview ![cloud-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05My40OTggMzIyLjg2M0w5Mi42MjUgMzIzTDEwNS4xMjUgMjU5Ljc1QzEwNi4yNSAyNTMuNSAxMDMuNzUgMjQ3IDk4LjI1IDI0My4zNzVMNDQuNzUgMjA3LjYyNUw5OC4yNSAxNzEuNzVDMTAzLjc1IDE2OC4yNSAxMDYuMjUgMTYxLjc1IDEwNS4xMjUgMTU1LjM3NUw5Mi42MjUgOTIuMTI1TDE1NS43NSAxMDQuNjI1QzE2Mi4yNSAxMDUuODc1IDE2OC42MjUgMTAzLjEyNSAxNzIuMjUgOTcuNzVMMjA4IDQ0LjI1TDI0My43NSA5Ny43NUMyNDcuMzc1IDEwMy4xMjUgMjUzLjc1IDEwNS44NzUgMjYwLjI1IDEwNC42MjVMMzIzLjM3NSA5Mi4xMjVMMzEzLjk3OSAxMzkuNThDMzEyLjI2NCAxNDguMjM4IDMxNy44ODUgMTU2LjY0NiAzMjYuNTM5IDE1OC4zNjlDMzM1LjIxMyAxNjAuMDk4IDM0My42NDEgMTU0LjQ1OSAzNDUuMzUyIDE0NS43ODNMMzU5LjM3NSA3NC43NUMzNjAuMzc1IDY5LjYyNSAzNTguNzUgNjQuMjUgMzU1IDYwLjM3NUMzNTEuMjUgNTYuNjI1IDM0NS43NSA1NC44NzUgMzQwLjYyNSA1NkwyNjQuMzc1IDcxLjEyNUwyMjEuMjUgNi43NUMyMTUuMjUgLTIuMjUgMjAwLjc1IC0yLjI1IDE5NC43NSA2Ljc1TDE1MS41IDcxLjI1TDc1LjM3NSA1Ni4xMjVDNzAuMTI1IDU1IDY0Ljc1IDU2Ljc1IDYxIDYwLjVTNTUuNjI1IDY5Ljc1IDU2LjYyNSA3NC44NzVMNzEuNzUgMTUxLjEyNUw3LjEyNSAxOTQuMjVDMi43NSAxOTcuMjUgMCAyMDIuMjUgMCAyMDcuNVMyLjc1IDIxNy43NSA3LjEyNSAyMjAuNzVMNzEuNjI1IDI2NEw1Ni41IDM0MC4yNUM1NS41IDM0NS4zNzUgNTcuMTI1IDM1MC43NSA2MC44NzUgMzU0LjYyNUM2My44NzUgMzU3LjYyNSA2OCAzNTkuMjUgNzIuMjUgMzU5LjI1QzczLjI1IDM1OS4yNSA3NC4yNSAzNTkuMjUgNzUuMjUgMzU5TDk4Ljk1NyAzNTQuNDg0QzEwNi41MjUgMzUzLjA0MyAxMTIgMzQ2LjQyNiAxMTIgMzM4LjcyMUMxMTIgMzI4Ljg4MSAxMDMuMjIzIDMyMS4zNTkgOTMuNDk4IDMyMi44NjNaTTU0My43NSAzMDQuMjVDNTM5Ljc1IDI1OS4zNzUgNTAyIDIyNCA0NTYgMjI0QzQzOC4yNSAyMjQgNDIxLjI1IDIyOS4yNSA0MDYuNzUgMjM5LjI1QzM4NC4yNSAyMDkuNzUgMzQ5LjUgMTkyIDMxMiAxOTJDMjQ1Ljc1IDE5MiAxOTIgMjQ1Ljc1IDE5MiAzMTJWMzEyLjM3NUMxNTMuNzUgMzI4LjM3NSAxMjggMzY1Ljg3NSAxMjggNDA4QzEyOCA0NjUuMjUgMTc0Ljc1IDUxMiAyMzIgNTEySDUzNkM1OTMuMjUgNTEyIDY0MCA0NjUuMjUgNjQwIDQwOEM2NDAgMzUzLjI1IDU5Ny4zNzUgMzA4LjI1IDU0My43NSAzMDQuMjVaTTUzNiA0ODBIMjM0LjM3M0MyMDEuMzU3IDQ4MCAxNzEuMDQ5IDQ1OC43NzcgMTYyLjUxIDQyNi44ODVDMTUxLjk0NSAzODcuNDM3IDE3NS44NDggMzQ4Ljg4MyAyMTMuMjUgMzM4Ljc1TDIxMy4yNiAzMzguNzQ2QzIyMC45MjYgMzM2Ljc0IDIyNS45NDcgMzI5LjM5OCAyMjUuMDMzIDMyMS41MjdDMjI0LjM1MiAzMTUuNjQxIDIyNCAzMTQuOTYzIDIyNCAzMTJDMjI0IDI2My41IDI2My41IDIyNCAzMTIgMjI0QzM0NC4yNSAyMjQgMzczLjc1IDI0MS44NzUgMzg5LjI1IDI3MC43NUwzODkuMjU0IDI3MC43NThDMzk0LjM3OSAyODAuNDU5IDQwNy41NTUgMjgyLjE4MiA0MTUgMjc0LjEyNUM0MjcuNjQ4IDI2MC4yOTkgNDQ1LjY2MiAyNTMuOTE0IDQ2NC4zNTcgMjU2LjYwMkM0OTEuMTM1IDI2MC40NDkgNTEwLjczNCAyODQuMTggNTExLjk4IDMxMS4yMDNDNTEyLjA3NCAzMTMuMjAzIDUxMS44MyAzMTQuNTI3IDUxMS4yNSAzMTguODc1TDUxMS4yMjcgMzE5LjA2OEM1MDkuOTU5IDMyOS4yMDcgNTE4LjQ0MyAzMzcuODk1IDUyOC42MDkgMzM2Ljg2N0M1MzQuMjM4IDMzNi4yOTkgNTMzLjgxOCAzMzYuMTI1IDUzNiAzMzYuMTI1QzU3NS43NSAzMzYuMTI1IDYwOCAzNjguMzc1IDYwOCA0MDguMTI1QzYwOCA0NDcuNzUgNTc1Ljc1IDQ4MCA1MzYgNDgwWk0xNjMgMjg0Ljc1QzE2NSAyNzMuNzUgMTY4LjI1IDI2My4xMjUgMTcyLjYyNSAyNTIuODc1QzE1OSAyNDIuMjUgMTUwLjI1IDIyNiAxNTAuMjUgMjA3LjVDMTUwLjI1IDE3NS43NSAxNzYuMTI1IDE0OS43NSAyMDggMTQ5Ljc1QzIyNi41IDE0OS43NSAyNDIuNzUgMTU4LjYyNSAyNTMuMzc1IDE3Mi4xMjVDMjYzLjYyNSAxNjcuNzUgMjc0LjI1IDE2NC41IDI4NS4yNSAxNjIuNUMyNjkuNzUgMTM1Ljg3NSAyNDEuMTI1IDExNy43NSAyMDggMTE3Ljc1QzE1OC41IDExNy43NSAxMTguMjUgMTU4IDExOC4yNSAyMDcuNUMxMTguMjUgMjQwLjUgMTM2LjI1IDI2OS4yNSAxNjMgMjg0Ljc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CloudSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M93.498 322.863L92.625 323L105.125 259.75C106.25 253.5 103.75 247 98.25 243.375L44.75 207.625L98.25 171.75C103.75 168.25 106.25 161.75 105.125 155.375L92.625 92.125L155.75 104.625C162.25 105.875 168.625 103.125 172.25 97.75L208 44.25L243.75 97.75C247.375 103.125 253.75 105.875 260.25 104.625L323.375 92.125L313.979 139.58C312.264 148.238 317.885 156.646 326.539 158.369C335.213 160.098 343.641 154.459 345.352 145.783L359.375 74.75C360.375 69.625 358.75 64.25 355 60.375C351.25 56.625 345.75 54.875 340.625 56L264.375 71.125L221.25 6.75C215.25 -2.25 200.75 -2.25 194.75 6.75L151.5 71.25L75.375 56.125C70.125 55 64.75 56.75 61 60.5S55.625 69.75 56.625 74.875L71.75 151.125L7.125 194.25C2.75 197.25 0 202.25 0 207.5S2.75 217.75 7.125 220.75L71.625 264L56.5 340.25C55.5 345.375 57.125 350.75 60.875 354.625C63.875 357.625 68 359.25 72.25 359.25C73.25 359.25 74.25 359.25 75.25 359L98.957 354.484C106.525 353.043 112 346.426 112 338.721C112 328.881 103.223 321.359 93.498 322.863ZM543.75 304.25C539.75 259.375 502 224 456 224C438.25 224 421.25 229.25 406.75 239.25C384.25 209.75 349.5 192 312 192C245.75 192 192 245.75 192 312V312.375C153.75 328.375 128 365.875 128 408C128 465.25 174.75 512 232 512H536C593.25 512 640 465.25 640 408C640 353.25 597.375 308.25 543.75 304.25ZM536 480H234.373C201.357 480 171.049 458.777 162.51 426.885C151.945 387.437 175.848 348.883 213.25 338.75L213.26 338.746C220.926 336.74 225.947 329.398 225.033 321.527C224.352 315.641 224 314.963 224 312C224 263.5 263.5 224 312 224C344.25 224 373.75 241.875 389.25 270.75L389.254 270.758C394.379 280.459 407.555 282.182 415 274.125C427.648 260.299 445.662 253.914 464.357 256.602C491.135 260.449 510.734 284.18 511.98 311.203C512.074 313.203 511.83 314.527 511.25 318.875L511.227 319.068C509.959 329.207 518.443 337.895 528.609 336.867C534.238 336.299 533.818 336.125 536 336.125C575.75 336.125 608 368.375 608 408.125C608 447.75 575.75 480 536 480ZM163 284.75C165 273.75 168.25 263.125 172.625 252.875C159 242.25 150.25 226 150.25 207.5C150.25 175.75 176.125 149.75 208 149.75C226.5 149.75 242.75 158.625 253.375 172.125C263.625 167.75 274.25 164.5 285.25 162.5C269.75 135.875 241.125 117.75 208 117.75C158.5 117.75 118.25 158 118.25 207.5C118.25 240.5 136.25 269.25 163 284.75Z" />
    </Icon>
);

export default CloudSun;