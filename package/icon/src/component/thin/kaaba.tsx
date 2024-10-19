
import { Icon } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=thin kaaba}
 * @preview ![kaaba](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTQuMTI1IDgzLjVMMzE4LjM3NSA0Ljg3NUMzMDguNSAxLjYyNSAyOTguMjUgMCAyODggMFMyNjcuNSAxLjYyNSAyNTcuNjI1IDQuODc1TDIxLjg3NSA4My41QzguODc1IDg3Ljg3NSAwIDEwMC4xMjUgMCAxMTMuODc1VjQyNC42MjVDMCA0MzkuNjI1IDEwLjM3NSA0NTIuNjI1IDI1IDQ1NS44NzVMMjY3LjEyNSA1MDkuNzVDMjc0IDUxMS4yNSAyODEgNTEyIDI4OCA1MTJTMzAyIDUxMS4yNSAzMDguODc1IDUwOS43NUw1NTEgNDU1Ljg3NUM1NjUuNjI1IDQ1Mi42MjUgNTc2IDQzOS42MjUgNTc2IDQyNC42MjVWMTEzLjg3NUM1NzYgMTAwLjEyNSA1NjcuMjUgODcuODc1IDU1NC4xMjUgODMuNVpNNTYwIDQyNC42MjVDNTYwIDQzMi4xOTUgNTU0Ljg3MSA0MzguNjI1IDU0Ny41MjMgNDQwLjI1OEwzMDUuNDY1IDQ5NC4xMTdDMjk5Ljc0IDQ5NS4zNjcgMjkzLjg2MyA0OTYgMjg4IDQ5NlMyNzYuMjYgNDk1LjM2NyAyNzAuNiA0OTQuMTMzTDI4LjQ3MSA0NDAuMjU4QzIxLjEyOSA0MzguNjI1IDE2IDQzMi4xOTUgMTYgNDI0LjYyNVYxODIuNDE4TDI2Ny4zMTIgMTA3LjAzMUMyODAuODEyIDEwMi45NjkgMjk1LjE4OCAxMDIuOTY5IDMwOC42ODggMTA3LjAzMUw1NjAgMTgyLjQzVjQyNC42MjVaTTU2MCAxNjUuNzI2TDMxMy4zMTIgOTEuNzE5QzI5Ni43NSA4Ni43MTkgMjc5LjI1IDg2LjcxOSAyNjIuNjg4IDkxLjcxOUwxNiAxNjUuNzE5VjExMy44NzVDMTYgMTA2Ljk4OCAyMC40MTIgMTAwLjg3NSAyNi45MzggOTguNjhMMjYyLjYyNyAyMC4wNzRDMjcwLjg0IDE3LjM3MSAyNzkuMzc1IDE2IDI4OCAxNlMzMDUuMTYyIDE3LjM3MSAzMTMuMzEyIDIwLjA1NUw1NDkuMDY2IDk4LjY4QzU1NS42MDUgMTAwLjg1OSA1NjAgMTA2Ljk2NSA1NjAgMTEzLjg3NVYxNjUuNzI2Wk0xMTUuNzgxIDIxNi45NjlMNDUuOTA2IDIzNi4wNjJDNDEuNjI1IDIzNy4yMTkgMzkuMTI1IDI0MS42MjUgNDAuMjgxIDI0NS44NzVDNDEuMjUgMjQ5LjQzNyA0NC40NjkgMjUxLjc4MSA0OCAyNTEuNzgxQzQ4LjY4OCAyNTEuNzgxIDQ5LjQwNiAyNTEuNjg3IDUwLjA5NCAyNTEuNUwxMTkuOTY5IDIzMi40MDZDMTI0LjI1IDIzMS4yNSAxMjYuNzUgMjI2Ljg0NCAxMjUuNTk0IDIyMi41OTRTMTIwLjA2MiAyMTUuODEyIDExNS43ODEgMjE2Ljk2OVpNMjU5Ljc1IDE3Ny43MTlMMTYzLjc1IDIwMy45NjlDMTU5LjUgMjA1LjEyNSAxNTcgMjA5LjUzMSAxNTguMTU2IDIxMy44MTJDMTU5LjEyNSAyMTcuMzQ0IDE2Mi4zNDQgMjE5LjY4NyAxNjUuODc1IDIxOS42ODdDMTY2LjU2MiAyMTkuNjg3IDE2Ny4yODEgMjE5LjU5NCAxNjggMjE5LjQwNkwyNjQgMTkzLjE1NkMyNjguMjUgMTkyIDI3MC43NSAxODcuNTk0IDI2OS41OTQgMTgzLjMxMkMyNjguNDM4IDE3OS4wOTQgMjY0LjE4OCAxNzYuNTk0IDI1OS43NSAxNzcuNzE5Wk00NTYuMDMxIDIzMi40MDZMNTI1LjkwNiAyNTEuNUM1MjYuNTk0IDI1MS42ODcgNTI3LjMxMiAyNTEuNzgxIDUyOCAyNTEuNzgxQzUzMS41MzEgMjUxLjc4MSA1MzQuNzUgMjQ5LjQzNyA1MzUuNzE5IDI0NS44NzVDNTM2Ljg3NSAyNDEuNjI1IDUzNC4zNzUgMjM3LjIxOSA1MzAuMDk0IDIzNi4wNjJMNDYwLjIxOSAyMTYuOTY5QzQ1Ni4wNjIgMjE1Ljg0NCA0NTEuNTYyIDIxOC4zNDQgNDUwLjQwNiAyMjIuNTk0UzQ1MS43NSAyMzEuMjUgNDU2LjAzMSAyMzIuNDA2Wk0zMTIgMTkzLjE1Nkw0MDggMjE5LjQwNkM0MDguNzE5IDIxOS41OTQgNDA5LjQzOCAyMTkuNjg3IDQxMC4xMjUgMjE5LjY4N0M0MTMuNjU2IDIxOS42ODcgNDE2Ljg3NSAyMTcuMzQ0IDQxNy44NDQgMjEzLjgxMkM0MTkgMjA5LjUzMSA0MTYuNSAyMDUuMTI1IDQxMi4yNSAyMDMuOTY5TDMxNi4yNSAxNzcuNzE5QzMxMS44NDQgMTc2LjYyNSAzMDcuNTYyIDE3OS4wOTQgMzA2LjQwNiAxODMuMzEyQzMwNS4yNSAxODcuNTk0IDMwNy43NSAxOTIgMzEyIDE5My4xNTZaIi8+PC9zdmc+|width=32|height=32)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M554.125 83.5L318.375 4.875C308.5 1.625 298.25 0 288 0S267.5 1.625 257.625 4.875L21.875 83.5C8.875 87.875 0 100.125 0 113.875V424.625C0 439.625 10.375 452.625 25 455.875L267.125 509.75C274 511.25 281 512 288 512S302 511.25 308.875 509.75L551 455.875C565.625 452.625 576 439.625 576 424.625V113.875C576 100.125 567.25 87.875 554.125 83.5ZM560 424.625C560 432.195 554.871 438.625 547.523 440.258L305.465 494.117C299.74 495.367 293.863 496 288 496S276.26 495.367 270.6 494.133L28.471 440.258C21.129 438.625 16 432.195 16 424.625V182.418L267.312 107.031C280.812 102.969 295.188 102.969 308.688 107.031L560 182.43V424.625ZM560 165.726L313.312 91.719C296.75 86.719 279.25 86.719 262.688 91.719L16 165.719V113.875C16 106.988 20.412 100.875 26.938 98.68L262.627 20.074C270.84 17.371 279.375 16 288 16S305.162 17.371 313.312 20.055L549.066 98.68C555.605 100.859 560 106.965 560 113.875V165.726ZM115.781 216.969L45.906 236.062C41.625 237.219 39.125 241.625 40.281 245.875C41.25 249.437 44.469 251.781 48 251.781C48.688 251.781 49.406 251.687 50.094 251.5L119.969 232.406C124.25 231.25 126.75 226.844 125.594 222.594S120.062 215.812 115.781 216.969ZM259.75 177.719L163.75 203.969C159.5 205.125 157 209.531 158.156 213.812C159.125 217.344 162.344 219.687 165.875 219.687C166.562 219.687 167.281 219.594 168 219.406L264 193.156C268.25 192 270.75 187.594 269.594 183.312C268.438 179.094 264.188 176.594 259.75 177.719ZM456.031 232.406L525.906 251.5C526.594 251.687 527.312 251.781 528 251.781C531.531 251.781 534.75 249.437 535.719 245.875C536.875 241.625 534.375 237.219 530.094 236.062L460.219 216.969C456.062 215.844 451.562 218.344 450.406 222.594S451.75 231.25 456.031 232.406ZM312 193.156L408 219.406C408.719 219.594 409.438 219.687 410.125 219.687C413.656 219.687 416.875 217.344 417.844 213.812C419 209.531 416.5 205.125 412.25 203.969L316.25 177.719C311.844 176.625 307.562 179.094 306.406 183.312C305.25 187.594 307.75 192 312 193.156Z" />
    </Icon>
);

export default Kaaba;