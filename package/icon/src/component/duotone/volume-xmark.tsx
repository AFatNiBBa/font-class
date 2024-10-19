
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=duotone volume-xmark}
 * @preview ![volume-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MC45NjkgMzAzLjAyOUM1NzAuMzQ0IDMxMi40MDQgNTcwLjM0NCAzMjcuNTkyIDU2MC45NjkgMzM2Ljk2N0M1NTEuNTg4IDM0Ni4zNDggNTM2LjQwNCAzNDYuMzQgNTI3LjAzMSAzMzYuOTY3TDQ4MCAyODkuOTM2TDQzMi45NjkgMzM2Ljk2N0M0MjMuNTg4IDM0Ni4zNDggNDA4LjQwNCAzNDYuMzQgMzk5LjAzMSAzMzYuOTY3QzM4OS42NTYgMzI3LjU5MiAzODkuNjU2IDMxMi40MDQgMzk5LjAzMSAzMDMuMDI5TDQ0Ni4wNjMgMjU1Ljk5OEwzOTkuMDMxIDIwOC45NjdDMzg5LjY1NiAxOTkuNTkyIDM4OS42NTYgMTg0LjQwNCAzOTkuMDMxIDE3NS4wMjlTNDIzLjU5NCAxNjUuNjU0IDQzMi45NjkgMTc1LjAyOUw0ODAgMjIyLjA2MUw1MjcuMDMxIDE3NS4wMjlDNTM2LjQwNiAxNjUuNjU0IDU1MS41OTQgMTY1LjY1NCA1NjAuOTY5IDE3NS4wMjlTNTcwLjM0NCAxOTkuNTkyIDU2MC45NjkgMjA4Ljk2N0w1MTMuOTM4IDI1NS45OThMNTYwLjk2OSAzMDMuMDI5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAgNjQuMDA2VjQ0OC4wMDFDMzIwIDQ2MC41OTUgMzEyLjYwOSA0NzIuMDMyIDMwMS4xMDkgNDc3LjE4OEMyOTYuOTA2IDQ3OS4wOTQgMjkyLjQzOCA0ODAuMDAxIDI4OCA0ODAuMDAxQzI4MC4zMTIgNDgwLjAwMSAyNzIuNzE5IDQ3Ny4yMTkgMjY2LjczNCA0NzEuOTA3TDEzMS44NCAzNTIuMDAySDQ4QzIxLjQ5IDM1Mi4wMDIgMCAzMzAuNTEgMCAzMDQuMDAzVjIwOC4wMDRDMCAxODEuNDk3IDIxLjQ5IDE2MC4wMDUgNDggMTYwLjAwNUgxMzEuODRMMjY2LjczNCA0MC4xMDFDMjc2LjE1NiAzMS43MjYgMjg5LjYwOSAyOS42MzIgMzAxLjEwOSAzNC44MTlDMzEyLjYwOSAzOS45NzYgMzIwIDUxLjQxMyAzMjAgNjQuMDA2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function VolumeXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M560.969 303.029C570.344 312.404 570.344 327.592 560.969 336.967C551.588 346.348 536.404 346.34 527.031 336.967L480 289.936L432.969 336.967C423.588 346.348 408.404 346.34 399.031 336.967C389.656 327.592 389.656 312.404 399.031 303.029L446.063 255.998L399.031 208.967C389.656 199.592 389.656 184.404 399.031 175.029S423.594 165.654 432.969 175.029L480 222.061L527.031 175.029C536.406 165.654 551.594 165.654 560.969 175.029S570.344 199.592 560.969 208.967L513.938 255.998L560.969 303.029Z" />
            <path d="M320 64.006V448.001C320 460.595 312.609 472.032 301.109 477.188C296.906 479.094 292.438 480.001 288 480.001C280.312 480.001 272.719 477.219 266.734 471.907L131.84 352.002H48C21.49 352.002 0 330.51 0 304.003V208.004C0 181.497 21.49 160.005 48 160.005H131.84L266.734 40.101C276.156 31.726 289.609 29.632 301.109 34.819C312.609 39.976 320 51.413 320 64.006Z" />
        </Icon>
    </>
}