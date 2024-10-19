
import { Icon } from "../../index";

/**
 * A component that renders the `handshake` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake?s=regular handshake}
 * @preview ![handshake](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuMDUzIDEyNy45NjNDNDg4LjA3OCAxMDcuNzk3IDQ0NC41ODggNjYuMzEzIDM4My4zNzUgNTYuODYxQzM2MC44NzMgNTMuNTA3IDMzNy45ODQgNjAuNDY3IDMxOS45NjkgNzUuMDc0QzMwMi4wMjEgNjAuNDY3IDI3OS4wODQgNTMuNDE3IDI1Ni41MzEgNTYuODYxQzE3Ni43ODEgNjkuMTc1IDEyNi43MTkgMTM2LjI0NSAxMjQuNjI1IDEzOS4wODlDMTE2Ljc4MSAxNDkuNzc4IDExOS4wOTQgMTY0LjgxMSAxMjkuNzUgMTcyLjY1NUMxMzQuMDMxIDE3NS44MTIgMTM5LjAzMSAxNzcuMzEyIDE0My45MzcgMTc3LjMxMkMxNTEuMzQ0IDE3Ny4zMTIgMTU4LjYyNSAxNzMuOTM3IDE2My4zMTIgMTY3LjUzQzE2My43MTkgMTY2Ljk2NyAyMDMuNSAxMTMuNjE4IDI2My44MTIgMTA0LjMwNEMyNzEuMjcgMTAzLjM0MyAyNzguNzk3IDEwNC45NzQgMjg1LjM3MyAxMDguNzg3TDIyNy4xNTYgMTY4LjE1NUMyMTQuNzgxIDE4MC41MzEgMjA3Ljk2OSAxOTYuOTcxIDIwNy45NjkgMjE0LjUwNEMyMDcuOTY5IDIzMi4wMDYgMjE0Ljc4MSAyNDguNDQ1IDIyNy4xMjUgMjYwLjc5QzIzOS41IDI3My4xNjcgMjU1LjkzOCAyNzkuOTggMjczLjQzOCAyNzkuOThTMzA3LjM3NSAyNzMuMTY3IDMxOS43NSAyNjAuNzlMMzMxLjA5OCAyNDkuNDQxTDQ1NS4yODEgMzUwLjMzMkM0NTcuNTk0IDM1Mi4yMDcgNDU3LjkzOCAzNTUuNTgyIDQ1NS43ODEgMzU4LjMwMUw0MjguMDk0IDM5NC4wNTVDNDI2LjI1IDM5Ni4zMDYgNDIyLjg0NCAzOTYuNjUgNDIwLjkzOCAzOTUuMTE4TDM5OC43MTkgMzc2LjQyOEwzNzIuNTMxIDQwNC4xODJDMzcwLjE4OCA0MDcuMDU3IDM2Ny4xODggNDA3Ljc0NSAzNjUuNjI1IDQwNy45MDFDMzYzLjk2OSA0MDguMDU3IDM2MS4wNjMgNDA4LjAyNiAzNTguODEzIDQwNi4xODJMMzI2LjQwNiAzNzguNTIyTDMxMC42NTYgMzkyLjI3NEwzMDcuODQ0IDM5NS4yMTJDMzAyIDQwMi4zNjkgMjkzLjc1IDQwNi44NjkgMjg0LjU2MiA0MDcuODA3QzI3NS4wOTQgNDA4LjYyIDI2Ni4zMTIgNDA2LjA1NyAyNjAuMDYyIDQwMS4wMjVMMTcwLjI4MSAzMTkuNzk3SDk2VjEyOC4xNjZIMFYzODMuODY3SDY0Qzc1Ljc0NCAzODMuODY3IDg1LjU3MiAzNzcuMjMzIDkxLjEzOSAzNjcuODAzSDE1MS43ODFMMjI4Ljg0NCA0MzcuNDY3QzI0My43MTkgNDQ5LjU2MiAyNjEuOTA2IDQ1NiAyODAuODQ0IDQ1NkMyODMuNzE5IDQ1NiAyODYuNjI1IDQ1NS44NzUgMjg5LjUgNDU1LjU2MkMzMDMuMTI1IDQ1NC4xNTYgMzE1LjkwNiA0NDkuNDk5IDMyNi45NjkgNDQyLjA2MUwzMjcuODc1IDQ0Mi44NzRDMzM5LjkwNiA0NTIuNzUgMzU1LjE1NiA0NTcuMjgxIDM3MC41NjIgNDU1LjY1NkMzODMuNzUgNDU0LjI4MSAzOTUuODQ0IDQ0OC42MjQgNDA0LjQ2OSA0NDAuMzExQzQyNS41NjIgNDQ4LjQ5OSA0NTAuNTYyIDQ0Mi42NTUgNDY1LjcxOSA0MjMuODRMNDkzLjQwNiAzODguMDg2QzUxMS44NzUgMzY1LjI3MSA1MDguMzc1IDMzMS42MTEgNDg1LjU2MiAzMTMuMDc4TDM2NS4yMTMgMjE1LjMyMkwzNzMuNTk0IDIwNi45NDFDMzgyLjk2OSAxOTcuNTY1IDM4Mi45NjkgMTgyLjM3NSAzNzMuNTk0IDE3Mi45OTlDMzY0LjIxOSAxNjMuNjIzIDM0OS4wMzEgMTYzLjYyMyAzMzkuNjU2IDE3Mi45OTlMMjg1LjgxMiAyMjYuODQ5QzI3OS4xODggMjMzLjQ3NSAyNjcuNzE5IDIzMy41MDYgMjYxLjA5NCAyMjYuODE4QzI1Ny43ODEgMjIzLjUzNiAyNTUuOTY5IDIxOS4xNjEgMjU1Ljk2OSAyMTQuNTA0QzI1NS45NjkgMjA5LjgxNiAyNTcuNzgxIDIwNS40NCAyNjEuMjUgMjAxLjk3MkwzNDcuMTU2IDExNC4zMzZDMzU0Ljk2OSAxMDYuNDkyIDM2NS42ODggMTAyLjU4NSAzNzYuMDk0IDEwNC4zMDRDNDM1Ljg0NCAxMTMuNTI0IDQ3Ni4yODEgMTY3LjAzIDQ3Ni42NTYgMTY3LjU5MkM0NzkuNzQ0IDE3MS43NDcgNDgzLjkyIDE3NC41MzggNDg4LjQ5MiAxNzUuOTY4SDU0NFYzNTEuOTk2QzU0NCAzNjkuNjY3IDU1OC4zMjMgMzgzLjk5MiA1NzUuOTkyIDM4My45OTJINjQwVjEyNy45NjNINTA2LjA1M1pNNDggMzUxLjk5NkMzOS4yNSAzNTEuOTk2IDMyIDM0NC43NDUgMzIgMzM2LjAwMkMzMiAzMjcuMTI2IDM5LjI1IDMyMC4wMDQgNDggMzIwLjAwNFM2NCAzMjcuMTI2IDY0IDMzNi4wMDJDNjQgMzQ0Ljc0NSA1Ni43NSAzNTEuOTk2IDQ4IDM1MS45OTZaTTU5MiAzNTEuOTk2QzU4My4yNSAzNTEuOTk2IDU3NiAzNDQuNzQ1IDU3NiAzMzYuMDAyQzU3NiAzMjcuMTI2IDU4My4yNSAzMjAuMDA0IDU5MiAzMjAuMDA0UzYwOCAzMjcuMTI2IDYwOCAzMzYuMDAyQzYwOCAzNDQuNzQ1IDYwMC43NSAzNTEuOTk2IDU5MiAzNTEuOTk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Handshake: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M506.053 127.963C488.078 107.797 444.588 66.313 383.375 56.861C360.873 53.507 337.984 60.467 319.969 75.074C302.021 60.467 279.084 53.417 256.531 56.861C176.781 69.175 126.719 136.245 124.625 139.089C116.781 149.778 119.094 164.811 129.75 172.655C134.031 175.812 139.031 177.312 143.937 177.312C151.344 177.312 158.625 173.937 163.312 167.53C163.719 166.967 203.5 113.618 263.812 104.304C271.27 103.343 278.797 104.974 285.373 108.787L227.156 168.155C214.781 180.531 207.969 196.971 207.969 214.504C207.969 232.006 214.781 248.445 227.125 260.79C239.5 273.167 255.938 279.98 273.438 279.98S307.375 273.167 319.75 260.79L331.098 249.441L455.281 350.332C457.594 352.207 457.938 355.582 455.781 358.301L428.094 394.055C426.25 396.306 422.844 396.65 420.938 395.118L398.719 376.428L372.531 404.182C370.188 407.057 367.188 407.745 365.625 407.901C363.969 408.057 361.063 408.026 358.813 406.182L326.406 378.522L310.656 392.274L307.844 395.212C302 402.369 293.75 406.869 284.562 407.807C275.094 408.62 266.312 406.057 260.062 401.025L170.281 319.797H96V128.166H0V383.867H64C75.744 383.867 85.572 377.233 91.139 367.803H151.781L228.844 437.467C243.719 449.562 261.906 456 280.844 456C283.719 456 286.625 455.875 289.5 455.562C303.125 454.156 315.906 449.499 326.969 442.061L327.875 442.874C339.906 452.75 355.156 457.281 370.562 455.656C383.75 454.281 395.844 448.624 404.469 440.311C425.562 448.499 450.562 442.655 465.719 423.84L493.406 388.086C511.875 365.271 508.375 331.611 485.562 313.078L365.213 215.322L373.594 206.941C382.969 197.565 382.969 182.375 373.594 172.999C364.219 163.623 349.031 163.623 339.656 172.999L285.812 226.849C279.188 233.475 267.719 233.506 261.094 226.818C257.781 223.536 255.969 219.161 255.969 214.504C255.969 209.816 257.781 205.44 261.25 201.972L347.156 114.336C354.969 106.492 365.688 102.585 376.094 104.304C435.844 113.524 476.281 167.03 476.656 167.592C479.744 171.747 483.92 174.538 488.492 175.968H544V351.996C544 369.667 558.323 383.992 575.992 383.992H640V127.963H506.053ZM48 351.996C39.25 351.996 32 344.745 32 336.002C32 327.126 39.25 320.004 48 320.004S64 327.126 64 336.002C64 344.745 56.75 351.996 48 351.996ZM592 351.996C583.25 351.996 576 344.745 576 336.002C576 327.126 583.25 320.004 592 320.004S608 327.126 608 336.002C608 344.745 600.75 351.996 592 351.996Z" />
    </Icon>
);

export default Handshake;