
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=duotone signature}
 * @preview ![signature](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAzNjcuOTk4SDI0QzEwLjc0NiAzNjcuOTk4IDAgMzc4Ljc0MiAwIDM5MS45OThTMTAuNzQ2IDQxNiAyNC4wMDIgNDE2SDEyOC45NzFDMTI4LjY3NiA0MTIuNzg5IDEyOCA0MDkuNjg5IDEyOCA0MDYuNDA0VjM2Ny45OThaTTcuMDMxIDI5Ni45NjlDMTEuNzE5IDMwMS42NTYgMTcuODQ0IDMwNCAyNCAzMDRTMzYuMjgxIDMwMS42NTYgNDAuOTY5IDI5Ni45NjlMNjQgMjczLjkzN0w4Ny4wMzEgMjk2Ljk2OUM5MS43MTkgMzAxLjY1NiA5Ny44NDQgMzA0IDEwNCAzMDRTMTE2LjI4MSAzMDEuNjU2IDEyMC45NjkgMjk2Ljk2OUMxMzAuMzQ0IDI4Ny41OTQgMTMwLjM0NCAyNzIuNDA2IDEyMC45NjkgMjYzLjAzMUw5Ny45MzggMjQwTDEyMC45NjkgMjE2Ljk2OUMxMzAuMzQ0IDIwNy41OTQgMTMwLjM0NCAxOTIuNDA2IDEyMC45NjkgMTgzLjAzMVM5Ni40MDYgMTczLjY1NiA4Ny4wMzEgMTgzLjAzMUw2NCAyMDYuMDYyTDQwLjk2OSAxODMuMDMxQzMxLjU5NCAxNzMuNjU2IDE2LjQwNiAxNzMuNjU2IDcuMDMxIDE4My4wMzFTLTIuMzQ0IDIwNy41OTQgNy4wMzEgMjE2Ljk2OUwzMC4wNjIgMjQwTDcuMDMxIDI2My4wMzFDLTIuMzQ0IDI3Mi40MDYgLTIuMzQ0IDI4Ny41OTQgNy4wMzEgMjk2Ljk2OVpNNjE2IDM2Ny45OThIMzY3LjMxOEMzNjEuNTg2IDM4My45NjcgMzU1LjEyMyA0MDAuMTcgMzQ3Ljg3NyA0MTZINjE2QzYyOS4yNTQgNDE2IDY0MCA0MDUuMjU0IDY0MCAzOTJWMzkxLjk5OEM2NDAgMzc4Ljc0MiA2MjkuMjU0IDM2Ny45OTggNjE2IDM2Ny45OThaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYxNiAyNTUuOTk3SDUyNC4zOTFMNTQyLjM1OSAyMDIuMTIxQzU0Ni4xNDEgMTkwLjc3NyA1NDMuMjgxIDE3OC4yNzYgNTM0Ljk2OSAxNjkuNzE0QzUyNi42MjUgMTYxLjE1MSA1MTQuMTg3IDE1Ny45MzIgNTAyLjgxMiAxNjEuMzM5TDM3Ny40MzcgMTk4Ljk2NEMzODEuMjgxIDE3NC40MzMgMzgzLjUgMTUyLjMzOCAzODMuOTA2IDEzNC42MTlDMzg1LjA5NCA4NC40NjIgMzUwLjY4NyA0MC44OTkgMzAzLjg5MSAzMy4yNzRDMjc1Ljc2NiAyOC43MTEgMjQ3LjMyOCAzNi41MjQgMjI1Ljg0NCA1NC44MzdDMjA0LjMyOCA3My4xMTggMTkyIDk5Ljc3NSAxOTIgMTI3Ljk5NFYxNjcuOTk1QzE5MiAxODEuMjQ5IDIwMi43NDYgMTkxLjk5NSAyMTYgMTkxLjk5NUgyMzJDMjQ1LjI1NCAxOTEuOTk1IDI1NiAxODEuMjQ5IDI1NiAxNjcuOTk1VjEyNy45OTRDMjU2IDExOC41ODggMjYwLjEwOSAxMDkuNjgxIDI2Ny4yOTcgMTAzLjU4N0MyNzQuNTYyIDk3LjQgMjgzLjg3NSA5NC44MDYgMjkzLjYwOSA5Ni40NjJDMzExLjIwMyA5OS4zMDYgMzIwLjI5NyAxMTcuNDYzIDMxOS45MzggMTMzLjExOUMzMTkuMzc1IDE1Ni42MiAzMTUuMzkxIDE4Ni45OTUgMzA4Ljg5MSAyMTkuNDk2TDIxMi40MzcgMjQ4LjQzNEMxODEuMzE0IDI1Ny43NzIgMTYwIDI4Ni40MTkgMTYwIDMxOC45MTRWNDAyLjk2MkMxNjAgNDM5Ljg1OSAxODUuNjE1IDQ3My43MDIgMjIyLjEwOSA0NzkuMTQzQzI1MS42ODIgNDgzLjU1NCAyNzkuODk1IDQ3MC42NyAyOTUuMzEzIDQ0Ni42MjVDMzI0LjE4OCA0MDEuNjU2IDM0Ny42NTYgMzM0LjE1NCAzNjMuMTg4IDI3MC4wMjhMNDYyLjE1NiAyNDAuMzcxTDQ0OS42NDEgMjc3Ljg3MkM0NDYuMzkxIDI4Ny42MjIgNDQ4LjAzMSAyOTguMzcyIDQ1NC4wNDcgMzA2LjcxNlM0NjkuNzE5IDMxOS45OTggNDgwIDMxOS45OThINjE2QzYyOS4yNTQgMzE5Ljk5OCA2NDAgMzA5LjI1MSA2NDAgMjk1Ljk5N1YyNzkuOTk3QzY0MCAyNjYuNzQzIDYyOS4yNTQgMjU1Ljk5NyA2MTYgMjU1Ljk5N1pNMjQxLjQ2OSA0MTIuMDYyQzIzNy4zOTEgNDE4LjQwNiAyMjMuOTY5IDQxNC45NjggMjI0IDQwNi40MDZWMzE4LjkzNUMyMjQgMzE0LjcxNiAyMjYuODEyIDMxMC45MzUgMjMwLjgyOCAzMDkuNzQ4TDI5MS4xNzIgMjkxLjY1M0MyNzcuNSAzMzguNTI5IDI2MC4wNzggMzgzLjA2MSAyNDEuNDY5IDQxMi4wNjJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Signature(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M128 367.998H24C10.746 367.998 0 378.742 0 391.998S10.746 416 24.002 416H128.971C128.676 412.789 128 409.689 128 406.404V367.998ZM7.031 296.969C11.719 301.656 17.844 304 24 304S36.281 301.656 40.969 296.969L64 273.937L87.031 296.969C91.719 301.656 97.844 304 104 304S116.281 301.656 120.969 296.969C130.344 287.594 130.344 272.406 120.969 263.031L97.938 240L120.969 216.969C130.344 207.594 130.344 192.406 120.969 183.031S96.406 173.656 87.031 183.031L64 206.062L40.969 183.031C31.594 173.656 16.406 173.656 7.031 183.031S-2.344 207.594 7.031 216.969L30.062 240L7.031 263.031C-2.344 272.406 -2.344 287.594 7.031 296.969ZM616 367.998H367.318C361.586 383.967 355.123 400.17 347.877 416H616C629.254 416 640 405.254 640 392V391.998C640 378.742 629.254 367.998 616 367.998Z" />
            <path d="M616 255.997H524.391L542.359 202.121C546.141 190.777 543.281 178.276 534.969 169.714C526.625 161.151 514.187 157.932 502.812 161.339L377.437 198.964C381.281 174.433 383.5 152.338 383.906 134.619C385.094 84.462 350.687 40.899 303.891 33.274C275.766 28.711 247.328 36.524 225.844 54.837C204.328 73.118 192 99.775 192 127.994V167.995C192 181.249 202.746 191.995 216 191.995H232C245.254 191.995 256 181.249 256 167.995V127.994C256 118.588 260.109 109.681 267.297 103.587C274.562 97.4 283.875 94.806 293.609 96.462C311.203 99.306 320.297 117.463 319.938 133.119C319.375 156.62 315.391 186.995 308.891 219.496L212.437 248.434C181.314 257.772 160 286.419 160 318.914V402.962C160 439.859 185.615 473.702 222.109 479.143C251.682 483.554 279.895 470.67 295.313 446.625C324.188 401.656 347.656 334.154 363.188 270.028L462.156 240.371L449.641 277.872C446.391 287.622 448.031 298.372 454.047 306.716S469.719 319.998 480 319.998H616C629.254 319.998 640 309.251 640 295.997V279.997C640 266.743 629.254 255.997 616 255.997ZM241.469 412.062C237.391 418.406 223.969 414.968 224 406.406V318.935C224 314.716 226.812 310.935 230.828 309.748L291.172 291.653C277.5 338.529 260.078 383.061 241.469 412.062Z" />
        </Icon>
    </>
}