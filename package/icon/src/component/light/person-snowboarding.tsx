
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-snowboarding` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowboarding?s=light person-snowboarding}
 * @preview ![person-snowboarding](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMzEyIDIyOC43MUw0ODUuNDM3IDIwNi44MzRDNDQ1LjkzNyAxNjcuMzMzIDQwMS42MjQgMTMyLjczOCAzNTMuNzQ5IDEwNC4wMThDMzQ1Ljg4OSA5OS4yODQgMzM3LjMxMSA5NS45NTUgMzI4LjI2NCA5NC4xNTlMMjkzLjEyMyA4Ny4xMjdDMjc3LjE3IDgzLjkzOSAyNjQuMDI5IDczLjAwMiAyNTcuOTgyIDU3Ljg5MkwyMzguODU3IDEwLjA3OEMyMzUuNTc2IDEuODU5IDIyNi4yMTYgLTIuMTQxIDIxOC4wNiAxLjE1NkMyMDkuODU3IDQuNDM3IDIwNS44NTcgMTMuNzUgMjA5LjEzOCAyMS45NTNMMjI4LjI2MyA2OS43NjdDMjM4LjM0MiA5NC45NzEgMjYwLjI0OCAxMTMuMTkgMjg2Ljg1OCAxMTguNTAzTDI5OC40OTggMTIwLjgzMUwyNDEuNDk4IDE1OS44NjRDMjIwLjUxMyAxNzQuODQ5IDIwNy45OTggMTk5LjE5MyAyMDcuOTk4IDIyNC45NlYyNzYuNDkyTDEyMi45MzQgMzA0Ljg1M0MxMTQuNTU5IDMwNy42MzQgMTEwLjAyOCAzMTYuNjk3IDExMi44MjUgMzI1LjA4OEMxMTUuMDU5IDMzMS43OTEgMTIxLjI5NCAzMzYuMDI2IDEyNy45OTcgMzM2LjAyNkMxMjkuNjY5IDMzNi4wMjYgMTMxLjM3MiAzMzUuNzYgMTMzLjA1OSAzMzUuMTk3TDIyOS4wNiAzMDMuMTk2QzIzNS41OTIgMzAxLjAyNSAyMzkuOTk4IDI5NC45MTUgMjM5Ljk5OCAyODguMDI0VjIyNC45NkMyMzkuOTk4IDIwOS40OSAyNDcuNTEzIDE5NC44OTYgMjU5Ljg0MiAxODYuMDgzTDMzNy4wMyAxMzMuMjIyQzMzNy41MDYgMTMyLjg5NiAzMzcuNzU2IDEzMi4zOTggMzM4LjE4NiAxMzIuMDMzQzM1NC4yMjcgMTQxLjY5NSAzNjkuNjg2IDE1Mi4yNiAzODQuODMxIDE2My4yNjJMMjc5Ljc2NCAyMjYuMzAzQzI3NS4yMDEgMjI5LjAzOCAyNzIuMjk1IDIzMy44ODIgMjcyLjAxNCAyMzkuMTk0QzI3MS43NDggMjQ0LjUyMyAyNzQuMTM5IDI0OS42MzIgMjc4LjQwNCAyNTIuODJMMzMzLjU5MiAyOTQuMjEyTDMwNC42MDggMzk1LjYzN0MzMDIuMTg2IDQwNC4xMjIgMzA3LjEwOCA0MTIuOTgxIDMxNS42MDggNDE1LjQxOUMzMTcuMDc3IDQxNS44MjUgMzE4LjU0NSA0MTYuMDI4IDMyMC4wMTQgNDE2LjAyOEMzMjYuOTY3IDQxNi4wMjggMzMzLjM3NCA0MTEuNDUgMzM1LjM4OSA0MDQuNDE4TDM2Ny4zODkgMjkyLjQxNUMzNjkuMjAyIDI4Ni4wNCAzNjYuOTA1IDI3OS4xOTYgMzYxLjU5MyAyNzUuMjI3TDMxNi42MzkgMjQxLjUwN0w0MTIuMTYxIDE4NC4xODNDNDI5Ljc2MyAxOTguNDQ5IDQ0Ni43ODcgMjEzLjQzNCA0NjIuODEyIDIyOS40Nkw0ODQuNjg3IDI1MS4zMzVDNDg3LjgxMiAyNTQuNDYxIDQ5MS45MDYgMjU2LjAyMyA0OTYgMjU2LjAyM0M1MDAuMDk0IDI1Ni4wMjMgNTA0LjE4NyAyNTQuNDYxIDUwNy4zMTIgMjUxLjMzNUM1MTMuNTYyIDI0NS4wODUgNTEzLjU2MiAyMzQuOTYgNTA3LjMxMiAyMjguNzFaTTQyMi43OTYgMTEzLjIyMkM0NTMuNjcxIDExMy4yMjIgNDc4Ljc5NyA4OC4wOTYgNDc4Ljc5NyA1Ny4yMlM0NTMuNjcxIDEuMjE4IDQyMi43OTYgMS4yMThDMzkxLjkyMSAxLjIxOCAzNjYuNzk2IDI2LjM0NCAzNjYuNzk2IDU3LjIyUzM5MS45MjEgMTEzLjIyMiA0MjIuNzk2IDExMy4yMjJaTTQyMi43OTYgMzMuMjE5QzQzNi4wMzEgMzMuMjE5IDQ0Ni43OTYgNDMuOTg1IDQ0Ni43OTYgNTcuMjJTNDM2LjAzMSA4MS4yMjEgNDIyLjc5NiA4MS4yMjFDNDA5LjU2MiA4MS4yMjEgMzk4Ljc5NiA3MC40NTUgMzk4Ljc5NiA1Ny4yMlM0MDkuNTYyIDMzLjIxOSA0MjIuNzk2IDMzLjIxOVpNNDc0LjczNCA0NzMuMjMzQzQ0Ny4zNTkgNDgyLjgxMiA0MTcuNDUyIDQ4Mi4yMTggMzkwLjQ2OCA0NzEuNjA4TDk2Ljk5NyAzNTYuMzU0QzcxLjk1IDM0Ni41MSA1MC44NCAzMjguOTQ3IDM1LjkxOCAzMDUuNTA5TDI5LjQ4IDI5NS40MTVDMjQuNzE1IDI4Ny45NDYgMTQuODI0IDI4NS43NDMgNy4zODcgMjkwLjU0Qy0wLjA1MSAyOTUuMjkgLTIuMjM5IDMwNS4xODEgMi41MTIgMzEyLjYzNEw4LjkzMyAzMjIuNzEzQzI3LjQ5NiAzNTEuODg1IDUzLjkwMyAzNzMuODA4IDg1LjMwOSAzODYuMTM3TDM3OC43NjUgNTAxLjM5QzM5Ni43NDkgNTA4LjQ1MyA0MTUuNzY1IDUxMiA0MzQuODEyIDUxMkM0NTEuODU5IDUxMiA0NjguOTM3IDUwOS4xNTYgNDg1LjI2NSA1MDMuNDUzQzQ5My42MDkgNTAwLjUzMSA0OTguMDE2IDQ5MS40MDYgNDk1LjEwOSA0ODMuMDYyQzQ5Mi4xODcgNDc0LjczMyA0ODMuMDYyIDQ3MC4zNDIgNDc0LjczNCA0NzMuMjMzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonSnowboarding(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.312 228.71L485.437 206.834C445.937 167.333 401.624 132.738 353.749 104.018C345.889 99.284 337.311 95.955 328.264 94.159L293.123 87.127C277.17 83.939 264.029 73.002 257.982 57.892L238.857 10.078C235.576 1.859 226.216 -2.141 218.06 1.156C209.857 4.437 205.857 13.75 209.138 21.953L228.263 69.767C238.342 94.971 260.248 113.19 286.858 118.503L298.498 120.831L241.498 159.864C220.513 174.849 207.998 199.193 207.998 224.96V276.492L122.934 304.853C114.559 307.634 110.028 316.697 112.825 325.088C115.059 331.791 121.294 336.026 127.997 336.026C129.669 336.026 131.372 335.76 133.059 335.197L229.06 303.196C235.592 301.025 239.998 294.915 239.998 288.024V224.96C239.998 209.49 247.513 194.896 259.842 186.083L337.03 133.222C337.506 132.896 337.756 132.398 338.186 132.033C354.227 141.695 369.686 152.26 384.831 163.262L279.764 226.303C275.201 229.038 272.295 233.882 272.014 239.194C271.748 244.523 274.139 249.632 278.404 252.82L333.592 294.212L304.608 395.637C302.186 404.122 307.108 412.981 315.608 415.419C317.077 415.825 318.545 416.028 320.014 416.028C326.967 416.028 333.374 411.45 335.389 404.418L367.389 292.415C369.202 286.04 366.905 279.196 361.593 275.227L316.639 241.507L412.161 184.183C429.763 198.449 446.787 213.434 462.812 229.46L484.687 251.335C487.812 254.461 491.906 256.023 496 256.023C500.094 256.023 504.187 254.461 507.312 251.335C513.562 245.085 513.562 234.96 507.312 228.71ZM422.796 113.222C453.671 113.222 478.797 88.096 478.797 57.22S453.671 1.218 422.796 1.218C391.921 1.218 366.796 26.344 366.796 57.22S391.921 113.222 422.796 113.222ZM422.796 33.219C436.031 33.219 446.796 43.985 446.796 57.22S436.031 81.221 422.796 81.221C409.562 81.221 398.796 70.455 398.796 57.22S409.562 33.219 422.796 33.219ZM474.734 473.233C447.359 482.812 417.452 482.218 390.468 471.608L96.997 356.354C71.95 346.51 50.84 328.947 35.918 305.509L29.48 295.415C24.715 287.946 14.824 285.743 7.387 290.54C-0.051 295.29 -2.239 305.181 2.512 312.634L8.933 322.713C27.496 351.885 53.903 373.808 85.309 386.137L378.765 501.39C396.749 508.453 415.765 512 434.812 512C451.859 512 468.937 509.156 485.265 503.453C493.609 500.531 498.016 491.406 495.109 483.062C492.187 474.733 483.062 470.342 474.734 473.233Z" />
        </Icon>
    </>
}