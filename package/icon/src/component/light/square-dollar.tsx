
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-dollar?s=light square-dollar}
 * @preview ![square-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjguMzc1IDI0MC41NzhMMjIwIDIzOC4xNzJDMTgyLjY4OCAyMjcuMjAzIDE3My4zNDQgMjE5LjA3OCAxNzYuNTk0IDIwMC4zNzVDMTgwLjM0NCAxNzguNSAyMTAuMDMxIDE3My4wNjMgMjM3Ljg0NCAxNzcuNDM4QzI0NS40NjkgMTc4LjYyNSAyNTQuNjU2IDE4MS4xNDEgMjY2Ljc4MSAxODUuMzI4QzI3NS4xNTYgMTg4LjIxOSAyODQuMjUgMTgzLjc4MSAyODcuMTI1IDE3NS40MzhDMjkwIDE2Ny4wNzggMjg1LjU5NCAxNTcuOTY5IDI3Ny4yMTkgMTU1LjA3OEMyNjMuMjgxIDE1MC4yNjYgMjUyLjM0NCAxNDcuMzEyIDI0Mi43ODEgMTQ1LjgxMkMyNDEuODIyIDE0NS42NjIgMjQwLjk0OSAxNDUuNjgyIDI0MCAxNDUuNTUxVjExMkMyNDAgMTAzLjE1NiAyMzIuODQ0IDk2IDIyNCA5NlMyMDggMTAzLjE1NiAyMDggMTEyVjE0NC43MDdDMTczLjk2OSAxNDguMjIzIDE0OS45NzcgMTY2LjM4OSAxNDUuMDMxIDE5NC45MzhDMTM2LjA2MiAyNDYuODU5IDE4NC44MTIgMjYxLjE3MiAyMTEgMjY4Ljg3NUwyMTkuNTYyIDI3MS4zNDRDMjYyLjMxMiAyODMuNTYyIDI3NS4wMzEgMjkwLjcxOSAyNzEuNDA2IDMxMS42MjVDMjY3LjY1NiAzMzMuNTMxIDIzNy45NjkgMzM4Ljg5MSAyMTAuMDYyIDMzNC41NDdDMTk4LjMxMiAzMzIuNzgxIDE4NC4zNDQgMzI3Ljc1IDE3MiAzMjMuMjk3TDE2NS4zNDQgMzIwLjkyMkMxNTcgMzE4LjAxNiAxNDcuOTA2IDMyMi4zMjggMTQ0LjkwNiAzMzAuNjU2QzE0MS45NjkgMzM5IDE0Ni4zNDQgMzQ4LjE0MSAxNTQuNjU2IDM1MS4wNzhMMTYxLjE1NiAzNTMuNDA2QzE3NC44NzUgMzU4LjM1OSAxOTAuNDM4IDM2My45NTMgMjA1LjIxOSAzNjYuMTg4QzIwNi4xODIgMzY2LjMzOCAyMDcuMDQ1IDM2Ni4yNzkgMjA4IDM2Ni40MTJWNDAwQzIwOCA0MDguODQ0IDIxNS4xNTYgNDE2IDIyNCA0MTZTMjQwIDQwOC44NDQgMjQwIDQwMFYzNjcuMjZDMjc0LjA0MyAzNjMuNzQgMjk4LjAxNiAzNDUuNjA1IDMwMi45MzggMzE3LjA3OEMzMTIuMDYyIDI2NC41IDI2My42ODggMjUwLjY3MiAyMjguMzc1IDI0MC41NzhaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTYgNDE5LjM0NiAzMiAzODQgMzJaTTQxNiA0MTZDNDE2IDQzMy42NDUgNDAxLjY0NSA0NDggMzg0IDQ0OEg2NEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2Vjk2QzMyIDc4LjM1NSA0Ni4zNTUgNjQgNjQgNjRIMzg0QzQwMS42NDUgNjQgNDE2IDc4LjM1NSA0MTYgOTZWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M228.375 240.578L220 238.172C182.688 227.203 173.344 219.078 176.594 200.375C180.344 178.5 210.031 173.063 237.844 177.438C245.469 178.625 254.656 181.141 266.781 185.328C275.156 188.219 284.25 183.781 287.125 175.438C290 167.078 285.594 157.969 277.219 155.078C263.281 150.266 252.344 147.312 242.781 145.812C241.822 145.662 240.949 145.682 240 145.551V112C240 103.156 232.844 96 224 96S208 103.156 208 112V144.707C173.969 148.223 149.977 166.389 145.031 194.938C136.062 246.859 184.812 261.172 211 268.875L219.562 271.344C262.312 283.562 275.031 290.719 271.406 311.625C267.656 333.531 237.969 338.891 210.062 334.547C198.312 332.781 184.344 327.75 172 323.297L165.344 320.922C157 318.016 147.906 322.328 144.906 330.656C141.969 339 146.344 348.141 154.656 351.078L161.156 353.406C174.875 358.359 190.438 363.953 205.219 366.188C206.182 366.338 207.045 366.279 208 366.412V400C208 408.844 215.156 416 224 416S240 408.844 240 400V367.26C274.043 363.74 298.016 345.605 302.938 317.078C312.062 264.5 263.688 250.672 228.375 240.578ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" />
        </Icon>
    </>
}