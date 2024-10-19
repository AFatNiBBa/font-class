
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=thin scissors}
 * @preview ![scissors](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuMTgxIDI5MS4xMDlDMzM3Ljg2OCAyODguMjgxIDMzMi44MzcgMjg4LjY0MSAzMjkuOSAyOTIuMDE2QzMyNy4wMjUgMjk1LjM5MSAzMjcuNDMxIDMwMC40MzggMzMwLjgwNiAzMDMuMjk3TDQ5OC44MDMgNDQ2LjA5NEM1MDAuMzAzIDQ0Ny4zNzUgNTAyLjE0NiA0NDggNTAzLjk5IDQ0OEM1MDYuMjQgNDQ4IDUwOC40OSA0NDcuMDQ3IDUxMC4wODQgNDQ1LjE4OEM1MTIuOTU5IDQ0MS44MTIgNTEyLjU1MiA0MzYuNzY2IDUwOS4xNzcgNDMzLjkwNkwzNDEuMTgxIDI5MS4xMDlaTTUwOS4xNzcgNzguMDk0QzUxMi41NTIgNzUuMjM0IDUxMi45NTkgNzAuMTg4IDUxMC4wODQgNjYuODEyQzUwNy4yMDkgNjMuNDIyIDUwMi4xNzggNjMuMDc4IDQ5OC44MDMgNjUuOTA2TDI4Ny41MjYgMjQ1LjQ5NkwxODkuOTE4IDE2Mi41MjlDMjAxLjMwMyAxNDUuODUgMjA3Ljk5NiAxMjUuNzE5IDIwNy45OTYgMTA0QzIwNy45OTYgNDYuNTYyIDE2MS40MzQgMCAxMDMuOTk4IDBTMCA0Ni41NjIgMCAxMDRTNDYuNTYyIDIwOCAxMDMuOTk4IDIwOEMxMzMuOTU4IDIwOCAxNjAuNzUzIDE5NS4xNSAxNzkuNzMxIDE3NC44NzdMMjc1LjE2OCAyNTZMMTc5LjczMSAzMzcuMTIzQzE2MC43NTMgMzE2Ljg1IDEzMy45NTggMzA0IDEwMy45OTggMzA0QzQ2LjU2MiAzMDQgMCAzNTAuNTYyIDAgNDA4UzQ2LjU2MiA1MTIgMTAzLjk5OCA1MTJTMjA3Ljk5NiA0NjUuNDM4IDIwNy45OTYgNDA4QzIwNy45OTYgMzg2LjI4MSAyMDEuMzAzIDM2Ni4xNSAxODkuOTE4IDM0OS40NzFMMjkyLjcxMyAyNjIuMDk0TDUwOS4xNzcgNzguMDk0Wk0xMDMuOTk4IDE5MkM1NS40NzUgMTkyIDE2IDE1Mi41MjMgMTYgMTA0UzU1LjQ3NSAxNiAxMDMuOTk4IDE2UzE5MS45OTYgNTUuNDc3IDE5MS45OTYgMTA0UzE1Mi41MiAxOTIgMTAzLjk5OCAxOTJaTTE5MS45OTYgNDA4QzE5MS45OTYgNDU2LjUyMyAxNTIuNTIgNDk2IDEwMy45OTggNDk2UzE2IDQ1Ni41MjMgMTYgNDA4UzU1LjQ3NSAzMjAgMTAzLjk5OCAzMjBTMTkxLjk5NiAzNTkuNDc3IDE5MS45OTYgNDA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M341.181 291.109C337.868 288.281 332.837 288.641 329.9 292.016C327.025 295.391 327.431 300.438 330.806 303.297L498.803 446.094C500.303 447.375 502.146 448 503.99 448C506.24 448 508.49 447.047 510.084 445.188C512.959 441.812 512.552 436.766 509.177 433.906L341.181 291.109ZM509.177 78.094C512.552 75.234 512.959 70.188 510.084 66.812C507.209 63.422 502.178 63.078 498.803 65.906L287.526 245.496L189.918 162.529C201.303 145.85 207.996 125.719 207.996 104C207.996 46.562 161.434 0 103.998 0S0 46.562 0 104S46.562 208 103.998 208C133.958 208 160.753 195.15 179.731 174.877L275.168 256L179.731 337.123C160.753 316.85 133.958 304 103.998 304C46.562 304 0 350.562 0 408S46.562 512 103.998 512S207.996 465.438 207.996 408C207.996 386.281 201.303 366.15 189.918 349.471L292.713 262.094L509.177 78.094ZM103.998 192C55.475 192 16 152.523 16 104S55.475 16 103.998 16S191.996 55.477 191.996 104S152.52 192 103.998 192ZM191.996 408C191.996 456.523 152.52 496 103.998 496S16 456.523 16 408S55.475 320 103.998 320S191.996 359.477 191.996 408Z" />
    </Icon>
);

export default Scissors;