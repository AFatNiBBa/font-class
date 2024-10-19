
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-cowboy-side` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-cowboy-side?s=duotone hat-cowboy-side}
 * @preview ![hat-cowboy-side](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAzNjcuOTkyQzY0MCA0MzUuMjM5IDU3OS43NSA0NDggNTY0LjggNDQ4QzQ3MS45MSA0NDggNDI1LjMgNDEwLjkyNiAzNTQuOTMgMzQzLjUzTDI2Ni43MTkgMjU5LjA0MkMyNDAuOTk5IDIzNi4xIDIxMC45OTkgMjIzLjk3OSAxNzkuOTk5IDIyMy45NzlDMTEwLjMwOSAyMjMuOTc5IDUxLjM1OSAyODYuNzA1IDMzLjMxOSAzODAuMDUzQzMwLjEyOSAzOTYuNjU1IDMyLjkzOSA0MTMuODg3IDQxLjAyOSA0MjcuMzU4QzQ4Ljg1OSA0NDAuNDY5IDYwLjYzOSA0NDggNzMuMjc5IDQ0OEgzMC41NzlDMjEuMzM0IDQ0OC4wMzMgMTIuOTAzIDQ0Mi43MjEgOC45MzkgNDM0LjM2OUMtMy43MzEgNDA3LjMyNiAwLjI5OSAzODIuMDk0IDEuODY5IDM3My45OTNDMjIuODk5IDI2NS4xMjIgOTQuNDY5IDE5MS45NzUgMTc5Ljk5OSAxOTEuOTc1QzIxOC45NDkgMTkxLjk3NSAyNTYuMzA5IDIwNi44OTcgMjg4Ljg5IDIzNS45M0wzNzcuMSAzMjAuNDE4QzQ0Ni40NSAzODYuODc0IDQ4NS4xOCA0MTUuOTk3IDU2NC44IDQxNS45OTdDNTg4LjYyIDQxNS45OTcgNjA4IDM5NC40NjUgNjA4IDM2Ny45OTJDNjA4IDM0Ni4xOCA1ODcuMzkgMjU5LjkwMiA0OTUuNTUgMjQzLjExTDQ5MCAyMTAuMDI3QzYwMS44NyAyMjMuOTc5IDY0MCAzMjMuNDU4IDY0MCAzNjcuOTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTQuODk4IDM0My41MjhMMjY2LjY4NyAyNTkuMDRDMjQwLjk2NyAyMzYuMDk5IDIxMC45NjYgMjIzLjk4IDE3OS45NjcgMjIzLjk4QzExMC4yNzcgMjIzLjk4IDUxLjMyNyAyODYuNzA0IDMzLjI4NSAzODAuMDUyQzMwLjA5NiAzOTYuNjUyIDMyLjkwNyA0MTMuODg4IDQwLjk5NyA0MjcuMzU5QzQ4LjgyNyA0NDAuNDcgNjAuNjA3IDQ0Ny45OTggNzMuMjQ2IDQ0Ny45OThINTY0Ljc2N0M0OTMuNjQ3IDQ0Ny45OTggNDQ5LjY1NyA0MjYuMjY1IDQwMS4zNTYgMzg1LjgzNEMzODYuNTc3IDM3My40NTMgMzcxLjM4NyAzNTkuMzMgMzU0Ljg5OCAzNDMuNTI4Wk00OTUuNTE2IDI0My4xMDhMNDY4LjM1NyA4MS4wOTRDNDYyLjIxNiA0OC4wOSA0MjcuNTQ3IDI2LjMzNyAzOTEuOTk3IDMzLjI5OUwyMDAuODE3IDcwLjY4M0MxNzMuNzI3IDc1Ljk4NCAxNTMuNDA3IDk2Ljc1NyAxNTAuNDY2IDEyMi4xN0wxNDIuODk3IDE5Ni43MDNDMTU1LjAwMSAxOTMuNTU1IDE2Ny40NTkgMTkxLjk2NCAxNzkuOTY3IDE5MS45NzZDMjE4LjkxNiAxOTEuOTc2IDI1Ni4yNzcgMjA2Ljg5NiAyODguODU2IDIzNS45MjdMMzc3LjA2NiAzMjAuNDE1QzQ0Ni40MTcgMzg2Ljg3MyA0ODUuMTQ3IDQxNS45OTggNTY0Ljc2NyA0MTUuOTk4QzU4OC41ODYgNDE1Ljk5OCA2MDcuOTY4IDM5NC40NjQgNjA3Ljk2OCAzNjcuOTkyQzYwNy45NjggMzQ2LjE4IDU4Ny4zNTggMjU5Ljg5OSA0OTUuNTE2IDI0My4xMDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const HatCowboySide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M640 367.992C640 435.239 579.75 448 564.8 448C471.91 448 425.3 410.926 354.93 343.53L266.719 259.042C240.999 236.1 210.999 223.979 179.999 223.979C110.309 223.979 51.359 286.705 33.319 380.053C30.129 396.655 32.939 413.887 41.029 427.358C48.859 440.469 60.639 448 73.279 448H30.579C21.334 448.033 12.903 442.721 8.939 434.369C-3.731 407.326 0.299 382.094 1.869 373.993C22.899 265.122 94.469 191.975 179.999 191.975C218.949 191.975 256.309 206.897 288.89 235.93L377.1 320.418C446.45 386.874 485.18 415.997 564.8 415.997C588.62 415.997 608 394.465 608 367.992C608 346.18 587.39 259.902 495.55 243.11L490 210.027C601.87 223.979 640 323.458 640 367.992Z" />
            <path d="M354.898 343.528L266.687 259.04C240.967 236.099 210.966 223.98 179.967 223.98C110.277 223.98 51.327 286.704 33.285 380.052C30.096 396.652 32.907 413.888 40.997 427.359C48.827 440.47 60.607 447.998 73.246 447.998H564.767C493.647 447.998 449.657 426.265 401.356 385.834C386.577 373.453 371.387 359.33 354.898 343.528ZM495.516 243.108L468.357 81.094C462.216 48.09 427.547 26.337 391.997 33.299L200.817 70.683C173.727 75.984 153.407 96.757 150.466 122.17L142.897 196.703C155.001 193.555 167.459 191.964 179.967 191.976C218.916 191.976 256.277 206.896 288.856 235.927L377.066 320.415C446.417 386.873 485.147 415.998 564.767 415.998C588.586 415.998 607.968 394.464 607.968 367.992C607.968 346.18 587.358 259.899 495.516 243.108Z" />
    </Icon>
);

export default HatCowboySide;