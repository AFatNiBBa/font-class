
import { Icon } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=regular hamsa}
 * @preview ![hamsa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDE3IDI4OEMyMDMuMDEgMjg4IDE2MC4wMDQgMzUyIDE2MC4wMDQgMzUyUzIwMy4wMSA0MTYgMjU2LjAxNyA0MTZTMzUyLjAzIDM1MiAzNTIuMDMgMzUyUzMwOS4wMjQgMjg4IDI1Ni4wMTcgMjg4Wk0yNTYuMDE3IDM4NEMyMzguMzg5IDM4NCAyMjQuMDEyIDM2OS42MjUgMjI0LjAxMiAzNTJTMjM4LjM4OSAzMjAgMjU2LjAxNyAzMjBDMjczLjY0NCAzMjAgMjg4LjAyMSAzMzQuMzc1IDI4OC4wMjEgMzUyUzI3My42NDQgMzg0IDI1Ni4wMTcgMzg0Wk01MDUuNTUyIDI4My4zNzVDNDkzLjggMjU3LjEyNSA0NjcuMjk2IDI0MCA0MzguMDQyIDI0MEg0MzIuMDQyVjExMy43NUM0MzIuMDQyIDc0IDQwMy4yODcgMzkuMjUgMzY1LjAzMiAzM0MzNjAuNjU3IDMyLjM3NSAzNTYuMjgxIDMyIDM1Mi4wMyAzMkMzNDEuNzc5IDMyIDMzMi4wMjggMzMuODc1IDMyMy4xNTEgMzcuMzc1QzMxMS4xNSAxOC41IDI5MS43NzIgNC43NSAyNjkuMTQ0IDFDMjY0Ljc2OCAwLjM3NSAyNjAuMzkzIDAgMjU2LjAxNyAwQzIyNy42MzggMCAyMDIuNjM0IDE0Ljg3NSAxODguMzgyIDM3LjI1QzE4My41MDcgMzUuMzc1IDE3OC4zODEgMzMuODc1IDE3My4xMyAzM0MxNjguNjMgMzIuMzc1IDE2NC4yNTQgMzIgMTYwLjAwNCAzMkMxMTUuODcyIDMyIDc5Ljk5MiA2Ny44NzUgNzkuOTkyIDExMlYyNDBINzMuOTkyQzQ0LjczNyAyNDAgMTguMjM0IDI1Ny4xMjUgNi4zNTcgMjgzLjVDLTUuNzcgMzEwLjYyNSAtMC4yNjkgMzQyLjEyNSAyMC40ODQgMzYzLjYyNUwxMDMuODcxIDQ1MC4xMjVDMTQxLjg3NiA0ODkuMzc1IDE5Ny4zODQgNTEyIDI1Ni4wMTcgNTEyUzM3MC4xNTggNDg5LjM3NSA0MDguMTYzIDQ1MC4xMjVMNDkxLjU1IDM2My42MjVDNTEyLjMwMyAzNDIuMTI1IDUxNy44MDMgMzEwLjYyNSA1MDUuNTUyIDI4My4zNzVaTTQ1Ny4wNDUgMzMwLjI1TDM3My41MzMgNDE2Ljc1QzM0NC42NTQgNDQ2Ljc1IDMwMS43NzMgNDY0IDI1Ni4wMTcgNDY0UzE2Ny41MDUgNDQ2Ljc1IDEzOC41MDEgNDE2Ljc1TDU0Ljk4OSAzMzAuMjVDNDcuOTg4IDMyMyA0Ni4xMTMgMzEyLjI1IDUwLjIzOCAzMDMuMTI1QzU0LjM2NCAyOTQgNjMuNzQgMjg4IDczLjk5MiAyODhIMTI3Ljk5OVYxMTJDMTI3Ljk5OSA5NC4zNzUgMTQyLjM3NiA4MCAxNjAuMDA0IDgwQzE2MS43NTQgODAgMTYzLjYyOSA4MC4xMjUgMTY1LjM3OSA4MC41QzE4MS4xMzEgODMgMTkyLjAwOCA5Ny43NSAxOTIuMDA4IDExMy43NUMxOTIuMDA4IDExNy4zNDkgMTkyLjAxOSAxNzguNDk0IDE5Mi4wMjQgMjA4LjEzN0MxOTIuMDI2IDIxNi45MTggMTk5LjE0NiAyMjQgMjA3LjkyOCAyMjRIMjA4LjEyNUMyMTYuOTA5IDIyNCAyMjQuMDMgMjE2LjkxMiAyMjQuMDI5IDIwOC4xMjhDMjI0LjAyNCAxNzEuNTQgMjI0LjAxMiA4NC4wODEgMjI0LjAxMiA4MEMyMjQuMDEyIDYyLjM3NSAyMzguMzg5IDQ4IDI1Ni4wMTcgNDhDMjU3Ljc2NyA0OCAyNTkuNTE3IDQ4LjEyNSAyNjEuMzkzIDQ4LjVDMjc3LjE0NSA1MSAyODguMDIxIDY1Ljc1IDI4OC4wMjEgODEuNzVDMjg4LjAyMSA4NS41MTQgMjg4LjAzMyAxNzEuODA5IDI4OC4wMzggMjA4LjEyNEMyODguMDM5IDIxNi45MDUgMjk1LjE2IDIyNCAzMDMuOTQzIDIyNEgzMDMuOTQzQzMxMi43OTkgMjI0IDMxOS45NDggMjE2LjgwNiAzMTkuODQ2IDIwNy45NTFDMzE5LjUwMiAxNzcuODg4IDMxOC45MjggMTE1Ljc2IDMyMC4wMjYgMTEyQzMyMC4wMjYgOTQuMzc1IDMzNC4yNzggODAgMzUyLjAzIDgwQzM1NS41NjEgODAgMzU5LjA5MSA4MC41MDkgMzYzLjY0OCA4Mi41NTJDMzc2LjIwNCA4OC4xODIgMzg0LjAzNSAxMDEuMDMyIDM4NC4wMzUgMTE0Ljc5TDM4NC4wMzUgMjg4SDQzOC4wNDJDNDQ4LjQxOSAyODggNDU3LjY3IDI5NCA0NjEuNzk2IDMwMy4xMjVDNDY2LjA0NiAzMTIuMjUgNDY0LjA0NiAzMjMgNDU3LjA0NSAzMzAuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256.017 288C203.01 288 160.004 352 160.004 352S203.01 416 256.017 416S352.03 352 352.03 352S309.024 288 256.017 288ZM256.017 384C238.389 384 224.012 369.625 224.012 352S238.389 320 256.017 320C273.644 320 288.021 334.375 288.021 352S273.644 384 256.017 384ZM505.552 283.375C493.8 257.125 467.296 240 438.042 240H432.042V113.75C432.042 74 403.287 39.25 365.032 33C360.657 32.375 356.281 32 352.03 32C341.779 32 332.028 33.875 323.151 37.375C311.15 18.5 291.772 4.75 269.144 1C264.768 0.375 260.393 0 256.017 0C227.638 0 202.634 14.875 188.382 37.25C183.507 35.375 178.381 33.875 173.13 33C168.63 32.375 164.254 32 160.004 32C115.872 32 79.992 67.875 79.992 112V240H73.992C44.737 240 18.234 257.125 6.357 283.5C-5.77 310.625 -0.269 342.125 20.484 363.625L103.871 450.125C141.876 489.375 197.384 512 256.017 512S370.158 489.375 408.163 450.125L491.55 363.625C512.303 342.125 517.803 310.625 505.552 283.375ZM457.045 330.25L373.533 416.75C344.654 446.75 301.773 464 256.017 464S167.505 446.75 138.501 416.75L54.989 330.25C47.988 323 46.113 312.25 50.238 303.125C54.364 294 63.74 288 73.992 288H127.999V112C127.999 94.375 142.376 80 160.004 80C161.754 80 163.629 80.125 165.379 80.5C181.131 83 192.008 97.75 192.008 113.75C192.008 117.349 192.019 178.494 192.024 208.137C192.026 216.918 199.146 224 207.928 224H208.125C216.909 224 224.03 216.912 224.029 208.128C224.024 171.54 224.012 84.081 224.012 80C224.012 62.375 238.389 48 256.017 48C257.767 48 259.517 48.125 261.393 48.5C277.145 51 288.021 65.75 288.021 81.75C288.021 85.514 288.033 171.809 288.038 208.124C288.039 216.905 295.16 224 303.943 224H303.943C312.799 224 319.948 216.806 319.846 207.951C319.502 177.888 318.928 115.76 320.026 112C320.026 94.375 334.278 80 352.03 80C355.561 80 359.091 80.509 363.648 82.552C376.204 88.182 384.035 101.032 384.035 114.79L384.035 288H438.042C448.419 288 457.67 294 461.796 303.125C466.046 312.25 464.046 323 457.045 330.25Z" />
    </Icon>
);

export default Hamsa;