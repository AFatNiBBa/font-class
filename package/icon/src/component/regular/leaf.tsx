
import { Icon } from "../../index";

/**
 * A component that renders the `leaf` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=regular leaf}
 * @preview ![leaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODYuMTgyIDM5Ljk4NUM0ODMuNzk3IDM0LjY2NiA0NzguODQ0IDMyIDQ3My44MjQgMzJDNDY5LjA4IDMyIDQ2NC4yNzggMzQuMzgxIDQ2MS41MjYgMzkuMTU3QzQzNi41MzcgODIuNDI1IDM5MS40MTQgMTA0LjMxMiAzNDUuNTg4IDEwNC4zMTJDMzM0LjQwNSAxMDQuMzEyIDMyMy4xODIgMTAzLjAwOSAzMTIuMTk2IDEwMC4zOTVDMjk5LjMwOSA5Ny4zMjkgMjg1Ljg2NCA5Ni4wMDQgMjcyLjAzMiA5Ni4wMDRIMjcyLjAwMUMxNzQuOCA5Ni4wMDQgOTYuMDAxIDE3NC44MDcgOTYuMDAxIDI3Mi4wMTdDOTYuMDAxIDI4MC44NCA5Ni44NjMgMjg5LjQ0MiA5OC4xMTcgMjk3LjkxN0MxOC43MTkgMzY3LjA1MSAwLjc0IDQ0OS45NzYgMC40NzEgNDUxLjMxQy0yLjEyMyA0NjQuMjggNi4yNjcgNDc2Ljg0NCAxOS4yMDUgNDc5LjVDMjAuODMgNDc5Ljg0NCAyMi40MzkgNDgwIDI0LjAxNyA0ODBDMzUuMTU4IDQ4MCA0NS4xNTggNDcyLjE1NiA0Ny41MTcgNDYwLjg0MkM0OC4zNzcgNDU2LjY5NCA2MS4wMjcgNDAwLjcwNyAxMTMuNDIzIDM0Ny45ODNDMTQxLjggNDA3LjEwNCAyMDIuMDQ0IDQ0OC4wMjkgMjcyLjAwMSA0NDguMDI5VjQ0OC4wMDJIMjcyLjAxNEMyOTQuODgyIDQ0OC4wMDIgMzE2LjY1OSA0NDMuNDk3IDMzNi43MDIgNDM1LjU1OUM0NDEuOTQ2IDQwMC43NTYgNTEyIDI5My4yNjQgNTEyIDE2NS40MDRDNTEyIDEyMS44OTcgNTAyLjY3IDc2Ljc2MSA0ODYuMTgyIDM5Ljk4NVpNMzIxLjYzMyAzODkuOTgyTDMyMC4zMTcgMzkwLjQxOEwzMTkuMDI4IDM5MC45MjdDMzAzLjgzNSAzOTYuOTQ1IDI4Ny45OTUgNDAwLjAwNiAyNzIuMDAxIDQwMC4wMjZDMjE2Ljg0OSA0MDAuMDI2IDE3MC4xNTkgMzY0Ljc2NyAxNTIuMTk5IDMxNS43NkMxOTMuNzQzIDI4Ni45MDUgMjUwLjkyNSAyNjMuMTIyIDMzMC4xNzMgMjU1LjkyMkMzNDMuMzc2IDI1NC43MDMgMzUzLjA5NCAyNDMuMDQ2IDM1MS45MDcgMjI5LjgyNkMzNTAuNjg4IDIxNi42MzggMzM4LjY1NyAyMDYuOTUgMzI1LjgyOSAyMDguMTA2QzI0OC45MDcgMjE1LjEwMyAxOTAuMjA2IDIzNi44MzEgMTQ0Ljc3NyAyNjQuMzQ2QzE0OC44MzMgMTk3LjM5IDIwNC4wNjIgMTQ0LjAwOCAyNzIuMDMyIDE0NC4wMDhDMjgyLjcgMTQ0LjAwOCAyOTIuNDc1IDE0NS4wNDcgMzAxLjA4NSAxNDcuMDk0QzMxNS42NDMgMTUwLjU1OSAzMzAuNjE4IDE1Mi4zMTUgMzQ1LjU4OCAxNTIuMzE1QzM4OC4xOTQgMTUyLjMxNSA0MjcuNzA1IDEzOC41ODkgNDU5LjA3NCAxMTMuOTg4QzQ2Mi4yODkgMTMwLjg4OCA0NjQgMTQ4LjM2IDQ2NCAxNjUuNDA0QzQ2NCAyNzEuNTcxIDQwNi43ODcgMzYxLjgyNCAzMjEuNjMzIDM4OS45ODJaIi8+PC9zdmc+|width=32|height=32)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M486.182 39.985C483.797 34.666 478.844 32 473.824 32C469.08 32 464.278 34.381 461.526 39.157C436.537 82.425 391.414 104.312 345.588 104.312C334.405 104.312 323.182 103.009 312.196 100.395C299.309 97.329 285.864 96.004 272.032 96.004H272.001C174.8 96.004 96.001 174.807 96.001 272.017C96.001 280.84 96.863 289.442 98.117 297.917C18.719 367.051 0.74 449.976 0.471 451.31C-2.123 464.28 6.267 476.844 19.205 479.5C20.83 479.844 22.439 480 24.017 480C35.158 480 45.158 472.156 47.517 460.842C48.377 456.694 61.027 400.707 113.423 347.983C141.8 407.104 202.044 448.029 272.001 448.029V448.002H272.014C294.882 448.002 316.659 443.497 336.702 435.559C441.946 400.756 512 293.264 512 165.404C512 121.897 502.67 76.761 486.182 39.985ZM321.633 389.982L320.317 390.418L319.028 390.927C303.835 396.945 287.995 400.006 272.001 400.026C216.849 400.026 170.159 364.767 152.199 315.76C193.743 286.905 250.925 263.122 330.173 255.922C343.376 254.703 353.094 243.046 351.907 229.826C350.688 216.638 338.657 206.95 325.829 208.106C248.907 215.103 190.206 236.831 144.777 264.346C148.833 197.39 204.062 144.008 272.032 144.008C282.7 144.008 292.475 145.047 301.085 147.094C315.643 150.559 330.618 152.315 345.588 152.315C388.194 152.315 427.705 138.589 459.074 113.988C462.289 130.888 464 148.36 464 165.404C464 271.571 406.787 361.824 321.633 389.982Z" />
    </Icon>
);

export default Leaf;