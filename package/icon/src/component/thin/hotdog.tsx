
import { Icon } from "../../index";

/**
 * A component that renders the `hotdog` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hotdog?s=thin hotdog}
 * @preview ![hotdog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNy40NTUgMzE5Ljk5N0MyOS41MDIgMzE5Ljk5NyAzMS41NDkgMzE5LjIxNiAzMy4xMTEgMzE3LjY1M0MzNi4yMzcgMzE0LjUyOCAzNi4yMzcgMzA5LjQ2NiAzMy4xMTEgMzA2LjM0QzExLjgyOSAyODUuMDI4IDEwLjE4OCAyNTIuMDI3IDI5LjQ1NSAyMzIuNzQ2TDIzMi43ODMgMjkuNDNDMjUyLjA2NiAxMC4xNzkgMjg1LjA4NCAxMS44MzYgMzA2LjM2NyAzMy4xMTdDMzA5LjQ5MiAzNi4yNDIgMzE0LjU1NSAzNi4yNDIgMzE3LjY4IDMzLjExN0MzMjAuODA1IDI5Ljk5MyAzMjAuODA1IDI0LjkzIDMxNy42OCAyMS44MDVDMjkwLjExNSAtNS43NTggMjQ2Ljk1NiAtNy40MTUgMjIxLjQ2OSAxOC4xMTdMMTguMTQyIDIyMS40MzNDLTcuMzYgMjQ2Ljk2NSAtNS43MiAyOTAuMTIxIDIxLjc5OCAzMTcuNjUzQzIzLjM2MSAzMTkuMjE2IDI1LjQwOCAzMTkuOTk3IDI3LjQ1NSAzMTkuOTk3Wk00MjEuNjg4IDEwMS42NUM0MDcuNDY4IDExNS44NjkgMzk1Ljk2NyAxMTcuODM3IDM4Mi42MzggMTIwLjE1QzM2OC42NTIgMTIyLjU1NiAzNTIuNzkyIDEyNS4yNzUgMzM0Ljk3OCAxNDMuMDg4UzMxNC40MyAxNzYuNzQ1IDMxMi4wMjMgMTkwLjc0NUMzMDkuNzQyIDIwNC4wNTggMzA3Ljc1NyAyMTUuNTg5IDI5My41MzcgMjI5LjgwOEMyNzkuMzQ5IDI0My45OTYgMjY3Ljg0OCAyNDUuOTY0IDI1NC41NSAyNDguMjQ2QzI0MC41NjUgMjUwLjYyMSAyMjQuNzM1IDI1My4zNCAyMDYuOTM3IDI3MS4xMjFDMTg5LjE1NSAyODguOTM0IDE4Ni40MzYgMzA0Ljc0NyAxODQuMDQ1IDMxOC43MTZDMTgxLjc2MyAzMzIuMDI4IDE3OS44MSAzNDMuNTI5IDE2NS42MDYgMzU3LjcxNkMxNTEuNDE3IDM3MS45MDQgMTM5LjkzMiAzNzMuODczIDEyNi42MzQgMzc2LjE1NEMxMTIuNjY0IDM3OC41MjkgOTYuODE5IDM4MS4yNDggNzkuMDM3IDM5OS4wMjlDNzUuOTEyIDQwMi4xNTQgNzUuOTEyIDQwNy4yMTcgNzkuMDM3IDQxMC4zNDJDODAuNTk5IDQxMS45MDUgODIuNjQ2IDQxMi42ODYgODQuNjk0IDQxMi42ODZTODguNzg4IDQxMS45MDUgOTAuMzUgNDEwLjM0MkMxMDQuNTM5IDM5Ni4xNTQgMTE2LjAyNCAzOTQuMTg2IDEyOS4zMjIgMzkxLjkwNEMxNDMuMjkyIDM4OS41MjkgMTU5LjEzNyAzODYuODEgMTc2LjkxOSAzNjkuMDI5QzE5NC43MTcgMzUxLjI0NyAxOTcuNDIxIDMzNS40MDMgMTk5LjgyNyAzMjEuNDM0QzIwMi4wOTMgMzA4LjEyMiAyMDQuMDYyIDI5Ni42MjIgMjE4LjI1IDI4Mi40MzRDMjMyLjQzOSAyNjguMjQ2IDI0My45NCAyNjYuMjc3IDI1Ny4yMzggMjYzLjk5NkMyNzEuMjIzIDI2MS42MjEgMjg3LjA1MyAyNTguOTAyIDMwNC44NTEgMjQxLjEyMUMzMjIuNjY1IDIyMy4yNzcgMzI1LjM5OSAyMDcuNDMzIDMyNy44MDYgMTkzLjQ2NEMzMzAuMDg3IDE4MC4xMiAzMzIuMDcyIDE2OC42MiAzNDYuMjkxIDE1NC40MDFDMzYwLjUxMSAxNDAuMTgyIDM3Mi4wMjggMTM4LjIxMyAzODUuMzU3IDEzNS45QzM5OS4zNDIgMTMzLjQ5NCA0MTUuMTg3IDEzMC43NzUgNDMzLjAwMSAxMTIuOTYyQzQzNi4xMjYgMTA5LjgzNyA0MzYuMTI2IDEwNC43NzUgNDMzLjAwMSAxMDEuNjVDNDI5Ljg3NiA5OC41MjUgNDI0LjgxMyA5OC41MjUgNDIxLjY4OCAxMDEuNjVaTTQ4OC41NzQgMjMuNDUzQzQ3My4wNDEgNy44NTkgNDUyLjYxMiAwLjA2MiA0MzIuMTgzIDAuMDYyQzQxMS43NTEgMC4wNjIgMzkxLjMyMiA3Ljg1OSAzNzUuNzkgMjMuNDUzTDI0LjQ2IDM3NC43NjNDMy42MjcgMzk0LjcyNSAtNC43MzMgNDI0LjQxMyAyLjYyOSA0NTIuMzU4QzkuOTg5IDQ4MC4zMDQgMzEuNjk3IDUwMi4wMTIgNTkuNjQ1IDUwOS4zNzFDNjYuMzU0IDUxMS4xMzcgNzMuMTY3IDUxMiA3OS45MiA1MTJDMTAxLjI5IDUxMiAxMjIuMDc3IDUwMy4zNzUgMTM3LjI0NiA0ODcuNTM5TDQ4OC41NzQgMTM2LjIzMkM1MTkuNzYzIDEwNS4xNjkgNTE5Ljc2MyA1NC41MTYgNDg4LjU3NCAyMy40NTNaTTEyNS42OTMgNDc2LjQ2OEMxMTMuODAxIDQ4OC44ODIgOTcuMTE2IDQ5NiA3OS45MiA0OTZDNzQuNDY0IDQ5NiA2OS4wMTUgNDk1LjI5MyA2My43MTkgNDkzLjg5OEM0MS40NDggNDg4LjAzNSAyMy45NjggNDcwLjU1NCAxOC4xMDMgNDQ4LjI4NEMxMi4yMjkgNDI1Ljk4NyAxOC45MDcgNDAyLjI0NCAzNS43NzYgMzg2LjA3NkwzODcuMTI4IDM0Ljc0MkMzOTkuMTI3IDIyLjY5NSA0MTUuMTI5IDE2LjA2MiA0MzIuMTgzIDE2LjA2MkM0NDkuMjM3IDE2LjA2MiA0NjUuMjM4IDIyLjY5NSA0NzcuMjgyIDM0Ljc4OUM0ODkuMzMgNDYuNzg5IDQ5NS45NjUgNjIuNzkgNDk1Ljk2NSA3OS44NDFDNDk1Ljk2NSA5Ni44OTYgNDg5LjMzIDExMi44OTYgNDc3LjI2IDEyNC45MkwxMjUuNjkzIDQ3Ni40NjhaTTQ3OC45MjYgMTk0LjMzOUM0NzUuODAxIDE5Ny40NjQgNDc1LjgwMSAyMDIuNTI2IDQ3OC45MjYgMjA1LjY1MUM1MDAuMjA5IDIyNi45NjQgNTAxLjg1IDI1OS45NjUgNDgyLjU4MyAyNzkuMjQ2TDI3OS4yNTUgNDgyLjU2MkMyNjAuMDE5IDUwMS44NDQgMjI3LjAwMSA1MDAuMTg3IDIwNS42NzEgNDc4Ljg3NEMyMDIuNTQ2IDQ3NS43NDkgMTk3LjQ4MyA0NzUuNzQ5IDE5NC4zNTggNDc4Ljg3NEMxOTEuMjMzIDQ4MiAxOTEuMjMzIDQ4Ny4wNjIgMTk0LjM1OCA0OTAuMTg3QzIwOC44MjggNTA0LjY1NiAyMjcuNTk1IDUxMS45NjkgMjQ1Ljg0NiA1MTEuOTY5QzI2Mi4zNjMgNTExLjk2OSAyNzguNDU4IDUwNiAyOTAuNTY4IDQ5My44NzVMNDkzLjg5NiAyOTAuNTU5QzUxOS4zOTggMjY1LjAyNyA1MTcuNzU4IDIyMS44NyA0OTAuMjQgMTk0LjMzOUM0ODcuMTE1IDE5MS4yMTQgNDgyLjA1MiAxOTEuMjE0IDQ3OC45MjYgMTk0LjMzOVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hotdog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M27.455 319.997C29.502 319.997 31.549 319.216 33.111 317.653C36.237 314.528 36.237 309.466 33.111 306.34C11.829 285.028 10.188 252.027 29.455 232.746L232.783 29.43C252.066 10.179 285.084 11.836 306.367 33.117C309.492 36.242 314.555 36.242 317.68 33.117C320.805 29.993 320.805 24.93 317.68 21.805C290.115 -5.758 246.956 -7.415 221.469 18.117L18.142 221.433C-7.36 246.965 -5.72 290.121 21.798 317.653C23.361 319.216 25.408 319.997 27.455 319.997ZM421.688 101.65C407.468 115.869 395.967 117.837 382.638 120.15C368.652 122.556 352.792 125.275 334.978 143.088S314.43 176.745 312.023 190.745C309.742 204.058 307.757 215.589 293.537 229.808C279.349 243.996 267.848 245.964 254.55 248.246C240.565 250.621 224.735 253.34 206.937 271.121C189.155 288.934 186.436 304.747 184.045 318.716C181.763 332.028 179.81 343.529 165.606 357.716C151.417 371.904 139.932 373.873 126.634 376.154C112.664 378.529 96.819 381.248 79.037 399.029C75.912 402.154 75.912 407.217 79.037 410.342C80.599 411.905 82.646 412.686 84.694 412.686S88.788 411.905 90.35 410.342C104.539 396.154 116.024 394.186 129.322 391.904C143.292 389.529 159.137 386.81 176.919 369.029C194.717 351.247 197.421 335.403 199.827 321.434C202.093 308.122 204.062 296.622 218.25 282.434C232.439 268.246 243.94 266.277 257.238 263.996C271.223 261.621 287.053 258.902 304.851 241.121C322.665 223.277 325.399 207.433 327.806 193.464C330.087 180.12 332.072 168.62 346.291 154.401C360.511 140.182 372.028 138.213 385.357 135.9C399.342 133.494 415.187 130.775 433.001 112.962C436.126 109.837 436.126 104.775 433.001 101.65C429.876 98.525 424.813 98.525 421.688 101.65ZM488.574 23.453C473.041 7.859 452.612 0.062 432.183 0.062C411.751 0.062 391.322 7.859 375.79 23.453L24.46 374.763C3.627 394.725 -4.733 424.413 2.629 452.358C9.989 480.304 31.697 502.012 59.645 509.371C66.354 511.137 73.167 512 79.92 512C101.29 512 122.077 503.375 137.246 487.539L488.574 136.232C519.763 105.169 519.763 54.516 488.574 23.453ZM125.693 476.468C113.801 488.882 97.116 496 79.92 496C74.464 496 69.015 495.293 63.719 493.898C41.448 488.035 23.968 470.554 18.103 448.284C12.229 425.987 18.907 402.244 35.776 386.076L387.128 34.742C399.127 22.695 415.129 16.062 432.183 16.062C449.237 16.062 465.238 22.695 477.282 34.789C489.33 46.789 495.965 62.79 495.965 79.841C495.965 96.896 489.33 112.896 477.26 124.92L125.693 476.468ZM478.926 194.339C475.801 197.464 475.801 202.526 478.926 205.651C500.209 226.964 501.85 259.965 482.583 279.246L279.255 482.562C260.019 501.844 227.001 500.187 205.671 478.874C202.546 475.749 197.483 475.749 194.358 478.874C191.233 482 191.233 487.062 194.358 490.187C208.828 504.656 227.595 511.969 245.846 511.969C262.363 511.969 278.458 506 290.568 493.875L493.896 290.559C519.398 265.027 517.758 221.87 490.24 194.339C487.115 191.214 482.052 191.214 478.926 194.339Z" />
    </Icon>
);

export default Hotdog;