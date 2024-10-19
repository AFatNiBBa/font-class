
import { Icon } from "../../index";

/**
 * A component that renders the `file-pdf` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=regular file-pdf}
 * @preview ![file-pdf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDkzLjM4M0wyOTAuNjI3IDE4Ljc0NkMyNzguNjI1IDYuNzQyIDI2Mi4zNDggMCAyNDUuMzczIDBINjRDMjguNjU0IDAgMCAyOC42NTIgMCA2NEwwLjAyIDQ0OEMwLjAyIDQ4My4zNDQgMjguNjc0IDUxMiA2NC4wMiA1MTJIMzIwQzM1NS4xOTkgNTEyIDM4NCA0ODMuMTk5IDM4NCA0NDhWMTM4LjY0MUMzODQgMTIxLjY2NCAzNzcuMjU4IDEwNS4zODMgMzY1LjI1NiA5My4zODNaTTMzNi4wMDIgNDQ4QzMzNi4wMDIgNDU2LjgzNiAzMjguODM4IDQ2NCAzMjAuMDAyIDQ2NEg2NC4wMThDNTUuMTggNDY0IDQ4LjAxOCA0NTYuODM2IDQ4LjAxOCA0NDhMNDggNjQuMTI1QzQ4IDU1LjI4OSA1NS4xNjQgNDguMTI1IDY0IDQ4LjEyNUgyMjQuMDA4VjEyOEMyMjQuMDA4IDE0NS42NzIgMjM4LjMzNCAxNjAgMjU2LjAwOCAxNjBIMzM2LjAwMlY0NDhaTTIwMi4wMzcgMjg2LjEzM0MyMDIuOTE0IDI4My40NDUgMjAzLjc3NyAyODAuNzM0IDIwNC42MTkgMjc3Ljk4OEMyMDYuMDUzIDI3Mi4yMjcgMjEyLjEwNyAyNDYuNDUzIDIxMi4xMDcgMjI1LjUxNkMyMTIuMTA3IDIwNy4wMzUgMTk3LjA3NCAxOTIgMTc4LjU5NCAxOTJDMTYwLjExNyAxOTIgMTQ1LjA4MiAyMDcuMDM1IDE0NS4wODIgMjI1LjUxNkMxNDUuMDgyIDIyNS44MTIgMTQ1LjI0NiAyNTQuMzI4IDE1OC45MzIgMjg3LjgxMkMxNTEuODk2IDMwNy4xNzIgMTQzLjM2NSAzMjYuNjEzIDEzMy41MTggMzQ1Ljc0MkMxMTIuMDIzIDM1NS44NTIgOTQuMjc3IDM2Ny45NzcgODAuNzE5IDM4MS44MTZDNzQuNDg0IDM4OC4yNTQgNzEuMzUyIDM5Ni41NTUgNzEuMzUyIDQwNi41MzlDNzEuMzUyIDQyNC45OTIgODYuMzYxIDQ0MCAxMDQuODEyIDQ0MEMxMTUuNjE3IDQ0MCAxMjUuNzkzIDQzNC43NzMgMTMyLjAyOSA0MjYuMDIzQzEzOS4zNTIgNDE1Ljc0MiAxNTAuNDEgMzk5LjEyNSAxNjIuNTAyIDM3Ny4wNzhDMTc4LjMwMSAzNzAuNzI3IDE5Ni4zODEgMzY1LjM1OSAyMTYuMzg1IDM2MS4wNzhDMjI5LjkzOSAzNzAuNjU2IDI0NS4yODcgMzc4LjM2NyAyNjIuMDkyIDM4NC4wMjdDMjY2LjYxOSAzODUuNTc4IDI3MS40OTQgMzg2LjM3NSAyNzYuNTE4IDM4Ni4zNzVDMjk2Ljc3OSAzODYuMzc1IDMxMi42NDggMzcwLjE4NCAzMTIuNjQ4IDM0OS41MTZDMzEyLjY0OCAzMjkuMTg3IDI5Ni4xMTEgMzEyLjY0OCAyNzUuNzgzIDMxMi42NDhIMjcyLjA3OEMyNjkuMzUyIDMxMi43NzMgMjUxLjU2NCAzMTMuNzg5IDIyNi43MDcgMzE4LjAxNkMyMTYuODY1IDMwOC45MzggMjA4LjU5OCAyOTguMjUgMjAyLjAzNyAyODYuMTMzWk0xMTAuMTkzIDQxMC40MzhDMTA2LjkyIDQxNS4xMjUgOTguMTYyIDQxMy4yMTUgOTguMTYyIDQwNS4xMjVDOTguMTYyIDQwMy4zNzEgOTguNzkxIDQwMS42OTUgOTkuODkxIDQwMC41N0MxMDguOTEgMzkxLjM1MiAxMTkuODI4IDM4My41MjMgMTMxLjc0IDM3Ni44NDhDMTIyLjI1IDM5My4wNzggMTE0LjI5MSA0MDQuNzAzIDExMC4xOTMgNDEwLjQzOFpNMTc4LjU5NCAyMTguODEyQzE4Mi4yODcgMjE4LjgxMiAxODUuMjk3IDIyMS44MiAxODUuMjk3IDIyNS41MTZDMTg1LjI5NyAyNDAuNzI3IDE4MS4xODggMjYwLjM1OSAxNzkuNTUxIDI2Ny42MTdDMTcyLjE0MSAyNDUuMDQ3IDE3MS44OTMgMjI3LjI0MiAxNzEuODkzIDIyNS41MTZDMTcxLjg5MyAyMjEuODIgMTc0LjkwMiAyMTguODEyIDE3OC41OTQgMjE4LjgxMlpNMTYyLjI4MyAzNDguMzM2QzE2OC44OTUgMzM0Ljg1MiAxNzUuNTA2IDMxOS44NzUgMTgxLjY1OCAzMDMuNjQxQzE4OC4wNDcgMzE0LjU1OSAxOTYuMjE1IDMyNS41MDQgMjA2LjYyMyAzMzUuNjA5QzE5Mi41NTEgMzM4Ljc1IDE3Ny4zNTIgMzQyLjg5MSAxNjIuMjgzIDM0OC4zMzZaTTI3Mi40MzIgMzM5LjQ2MUgyNzUuNzgzQzI4MS4zMjIgMzM5LjQ2MSAyODUuODM4IDM0My45NjEgMjg1LjgzOCAzNTAuMjQ2QzI4NS44MzggMzU1LjM3NSAyODEuNjYyIDM1OS41NjYgMjc2LjUxOCAzNTkuNTY2QzI3NC40ODggMzU5LjU2NiAyNzIuNDU5IDM1OS4yNSAyNzAuNjY2IDM1OC42MjVDMjU4LjMzNCAzNTQuNDg4IDI0Ny41NTkgMzQ5LjMwNSAyMzguMTIxIDM0My40MzhDMjU4LjMzNCAzNDAuMjczIDI3Mi4xNDUgMzM5LjQ4NCAyNzIuNDMyIDMzOS40NjFaIi8+PC9zdmc+|width=32|height=32)
 */
const FilePdf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C355.199 512 384 483.199 384 448V138.641C384 121.664 377.258 105.383 365.256 93.383ZM336.002 448C336.002 456.836 328.838 464 320.002 464H64.018C55.18 464 48.018 456.836 48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V448ZM202.037 286.133C202.914 283.445 203.777 280.734 204.619 277.988C206.053 272.227 212.107 246.453 212.107 225.516C212.107 207.035 197.074 192 178.594 192C160.117 192 145.082 207.035 145.082 225.516C145.082 225.812 145.246 254.328 158.932 287.812C151.896 307.172 143.365 326.613 133.518 345.742C112.023 355.852 94.277 367.977 80.719 381.816C74.484 388.254 71.352 396.555 71.352 406.539C71.352 424.992 86.361 440 104.812 440C115.617 440 125.793 434.773 132.029 426.023C139.352 415.742 150.41 399.125 162.502 377.078C178.301 370.727 196.381 365.359 216.385 361.078C229.939 370.656 245.287 378.367 262.092 384.027C266.619 385.578 271.494 386.375 276.518 386.375C296.779 386.375 312.648 370.184 312.648 349.516C312.648 329.187 296.111 312.648 275.783 312.648H272.078C269.352 312.773 251.564 313.789 226.707 318.016C216.865 308.938 208.598 298.25 202.037 286.133ZM110.193 410.438C106.92 415.125 98.162 413.215 98.162 405.125C98.162 403.371 98.791 401.695 99.891 400.57C108.91 391.352 119.828 383.523 131.74 376.848C122.25 393.078 114.291 404.703 110.193 410.438ZM178.594 218.812C182.287 218.812 185.297 221.82 185.297 225.516C185.297 240.727 181.188 260.359 179.551 267.617C172.141 245.047 171.893 227.242 171.893 225.516C171.893 221.82 174.902 218.812 178.594 218.812ZM162.283 348.336C168.895 334.852 175.506 319.875 181.658 303.641C188.047 314.559 196.215 325.504 206.623 335.609C192.551 338.75 177.352 342.891 162.283 348.336ZM272.432 339.461H275.783C281.322 339.461 285.838 343.961 285.838 350.246C285.838 355.375 281.662 359.566 276.518 359.566C274.488 359.566 272.459 359.25 270.666 358.625C258.334 354.488 247.559 349.305 238.121 343.438C258.334 340.273 272.145 339.484 272.432 339.461Z" />
    </Icon>
);

export default FilePdf;