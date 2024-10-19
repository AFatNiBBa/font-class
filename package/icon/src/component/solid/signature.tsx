
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signature` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=solid signature}
 * @preview ![signature](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03LjAzMSAyOTYuOTY5QzExLjcxOSAzMDEuNjU2IDE3Ljg0NCAzMDQgMjQgMzA0UzM2LjI4MSAzMDEuNjU2IDQwLjk2OSAyOTYuOTY5TDY0IDI3My45MzhMODcuMDMxIDI5Ni45NjlDOTEuNzE5IDMwMS42NTYgOTcuODQ0IDMwNCAxMDQgMzA0UzExNi4yODEgMzAxLjY1NiAxMjAuOTY5IDI5Ni45NjlDMTMwLjM0NCAyODcuNTk0IDEzMC4zNDQgMjcyLjQwNiAxMjAuOTY5IDI2My4wMzFMOTcuOTM4IDI0MEwxMjAuOTY5IDIxNi45NjlDMTMwLjM0NCAyMDcuNTk0IDEzMC4zNDQgMTkyLjQwNiAxMjAuOTY5IDE4My4wMzFTOTYuNDA2IDE3My42NTYgODcuMDMxIDE4My4wMzFMNjQgMjA2LjA2Mkw0MC45NjkgMTgzLjAzMUMzMS41OTQgMTczLjY1NiAxNi40MDYgMTczLjY1NiA3LjAzMSAxODMuMDMxUy0yLjM0NCAyMDcuNTk0IDcuMDMxIDIxNi45NjlMMzAuMDYyIDI0MEw3LjAzMSAyNjMuMDMxQy0yLjM0NCAyNzIuNDA2IC0yLjM0NCAyODcuNTk0IDcuMDMxIDI5Ni45NjlaTTEyOCAzNjcuOTk4SDI0QzEwLjc0NiAzNjcuOTk4IDAgMzc4Ljc0NCAwIDM5MS45OThDMCA0MDUuMjU0IDEwLjc0NiA0MTUuOTk4IDI0IDQxNS45OThIMTI4Ljk3MUMxMjguNjc2IDQxMi43ODkgMTI4IDQwOS42ODkgMTI4IDQwNi40MDRWMzY3Ljk5OFpNNjE2IDM2Ny45OThIMzY3LjMxOEMzNjEuNTg2IDM4My45NjcgMzU1LjEyMyA0MDAuMTcgMzQ3Ljg3NyA0MTUuOTk4SDYxNkM2MjkuMjU0IDQxNS45OTggNjQwIDQwNS4yNTQgNjQwIDM5MS45OThDNjQwIDM3OC43NDQgNjI5LjI1NCAzNjcuOTk4IDYxNiAzNjcuOTk4Wk02MTYgMjU1Ljk5Nkg1MjQuMzkxTDU0Mi4zNTkgMjAyLjExOUM1NDYuMTQxIDE5MC43NzUgNTQzLjI4MSAxNzguMjc1IDUzNC45NjkgMTY5LjcxM0M1MjYuNjI1IDE2MS4xNSA1MTQuMTg3IDE1Ny45MzIgNTAyLjgxMiAxNjEuMzM4TDM3Ny40MzcgMTk4Ljk2M0MzODEuMjgxIDE3NC40MzIgMzgzLjUgMTUyLjMzOCAzODMuOTA2IDEzNC42MTlDMzg1LjA5NCA4NC40NjEgMzUwLjY4NyA0MC44OTggMzAzLjg5MSAzMy4yNzNDMjc1Ljc2NiAyOC43MTEgMjQ3LjMyOCAzNi41MjMgMjI1Ljg0NCA1NC44MzZDMjA0LjMyOCA3My4xMTcgMTkyIDk5Ljc3MyAxOTIgMTI3Ljk5NFYxNjcuOTk0QzE5MiAxODEuMjQ4IDIwMi43NDYgMTkxLjk5NCAyMTYgMTkxLjk5NEgyMzJDMjQ1LjI1NCAxOTEuOTk0IDI1NiAxODEuMjQ4IDI1NiAxNjcuOTk0VjEyNy45OTRDMjU2IDExOC41ODggMjYwLjEwOSAxMDkuNjggMjY3LjI5NyAxMDMuNTg2QzI3NC41NjIgOTcuMzk4IDI4My44NzUgOTQuODA1IDI5My42MDkgOTYuNDYxQzMxMS4yMDMgOTkuMzA1IDMyMC4yOTcgMTE3LjQ2MyAzMTkuOTM4IDEzMy4xMTlDMzE5LjM3NSAxNTYuNjE5IDMxNS4zOTEgMTg2Ljk5NCAzMDguODkxIDIxOS40OTZMMjEyLjQzOCAyNDguNDM0QzE4MS4zMTQgMjU3Ljc3MSAxNjAgMjg2LjQxOCAxNjAgMzE4LjkxMlY0MDIuOTYxQzE2MCA0MzkuODU5IDE4NS42MTUgNDczLjcwMSAyMjIuMTA5IDQ3OS4xNDNDMjUxLjY4MiA0ODMuNTUzIDI3OS44OTUgNDcwLjY3IDI5NS4zMTMgNDQ2LjYyNUMzMjQuMTg4IDQwMS42NTQgMzQ3LjY1NiAzMzQuMTU0IDM2My4xODggMjcwLjAyN0w0NjIuMTU2IDI0MC4zNzFMNDQ5LjY0MSAyNzcuODcxQzQ0Ni4zOTEgMjg3LjYyMSA0NDguMDMxIDI5OC4zNzEgNDU0LjA0NyAzMDYuNzE1UzQ2OS43MTkgMzE5Ljk5OCA0ODAgMzE5Ljk5OEg2MTZDNjI5LjI1NCAzMTkuOTk4IDY0MCAzMDkuMjUgNjQwIDI5NS45OTZWMjc5Ljk5NkM2NDAgMjY2Ljc0MiA2MjkuMjU0IDI1NS45OTYgNjE2IDI1NS45OTZaTTI0MS40NjkgNDEyLjA2MUMyMzcuMzkxIDQxOC40MDQgMjIzLjk2OSA0MTQuOTY3IDIyNCA0MDYuNDA0VjMxOC45MzRDMjI0IDMxNC43MTUgMjI2LjgxMiAzMTAuOTM0IDIzMC44MjggMzA5Ljc0NkwyOTEuMTcyIDI5MS42NTJDMjc3LjUgMzM4LjUyOSAyNjAuMDc4IDM4My4wNjEgMjQxLjQ2OSA0MTIuMDYxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Signature(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M7.031 296.969C11.719 301.656 17.844 304 24 304S36.281 301.656 40.969 296.969L64 273.938L87.031 296.969C91.719 301.656 97.844 304 104 304S116.281 301.656 120.969 296.969C130.344 287.594 130.344 272.406 120.969 263.031L97.938 240L120.969 216.969C130.344 207.594 130.344 192.406 120.969 183.031S96.406 173.656 87.031 183.031L64 206.062L40.969 183.031C31.594 173.656 16.406 173.656 7.031 183.031S-2.344 207.594 7.031 216.969L30.062 240L7.031 263.031C-2.344 272.406 -2.344 287.594 7.031 296.969ZM128 367.998H24C10.746 367.998 0 378.744 0 391.998C0 405.254 10.746 415.998 24 415.998H128.971C128.676 412.789 128 409.689 128 406.404V367.998ZM616 367.998H367.318C361.586 383.967 355.123 400.17 347.877 415.998H616C629.254 415.998 640 405.254 640 391.998C640 378.744 629.254 367.998 616 367.998ZM616 255.996H524.391L542.359 202.119C546.141 190.775 543.281 178.275 534.969 169.713C526.625 161.15 514.187 157.932 502.812 161.338L377.437 198.963C381.281 174.432 383.5 152.338 383.906 134.619C385.094 84.461 350.687 40.898 303.891 33.273C275.766 28.711 247.328 36.523 225.844 54.836C204.328 73.117 192 99.773 192 127.994V167.994C192 181.248 202.746 191.994 216 191.994H232C245.254 191.994 256 181.248 256 167.994V127.994C256 118.588 260.109 109.68 267.297 103.586C274.562 97.398 283.875 94.805 293.609 96.461C311.203 99.305 320.297 117.463 319.938 133.119C319.375 156.619 315.391 186.994 308.891 219.496L212.438 248.434C181.314 257.771 160 286.418 160 318.912V402.961C160 439.859 185.615 473.701 222.109 479.143C251.682 483.553 279.895 470.67 295.313 446.625C324.188 401.654 347.656 334.154 363.188 270.027L462.156 240.371L449.641 277.871C446.391 287.621 448.031 298.371 454.047 306.715S469.719 319.998 480 319.998H616C629.254 319.998 640 309.25 640 295.996V279.996C640 266.742 629.254 255.996 616 255.996ZM241.469 412.061C237.391 418.404 223.969 414.967 224 406.404V318.934C224 314.715 226.812 310.934 230.828 309.746L291.172 291.652C277.5 338.529 260.078 383.061 241.469 412.061Z" />
        </Icon>
    </>
}