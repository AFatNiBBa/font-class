
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-exclamation-check` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=solid circle-exclamation-check}
 * @preview ![circle-exclamation-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDguNDAyIDMzNS41OTZMMzUyLjQwMiAyNzkuNTk2QzMzMC41NjggMjU3Ljc2MiAzMzAuNTY4IDIyMi4yMzYgMzUyLjQwMiAyMDAuNDA0QzM2Mi45OCAxODkuODI2IDM3Ny4wNDMgMTg0IDM5MS45OTggMTg0UzQyMS4wMTYgMTg5LjgyNiA0MzEuNTk0IDIwMC40MDRMNDQ2LjUwNCAyMTUuMzEyTDQ4Mi4zMjIgMTc2LjczNkM0NDkuNTUzIDgzLjE5NSAzNjAuNzMgMTYgMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NkMzNTguMjMyIDQ5NiA0NDUuMzAxIDQzMS45NjcgNDc5Ljg4OSAzNDEuOTEyQzQ3MC44MTEgMzQ4LjE2IDQ1OS44NTUgMzUxLjc4MyA0NDcuOTk4IDM1MkM0MzMuMjU4IDM1MiA0MTguODI2IDM0Ni4wMjEgNDA4LjQwMiAzMzUuNTk2Wk0yMzIgMTUyQzIzMiAxMzguNzUgMjQyLjc1IDEyOCAyNTYgMTI4UzI4MCAxMzguNzUgMjgwIDE1MlYyODBDMjgwIDI5My4yNSAyNjkuMjUgMzA0IDI1NiAzMDRTMjMyIDI5My4yNSAyMzIgMjgwVjE1MlpNMjU2IDQwMEMyMzguNjM3IDQwMCAyMjQuNTYyIDM4NS45MjQgMjI0LjU2MiAzNjguNTYxQzIyNC41NjIgMzUxLjE5OSAyMzguNjM3IDMzNy4xMjMgMjU2IDMzNy4xMjNTMjg3LjQzOCAzNTEuMTk5IDI4Ny40MzggMzY4LjU2MUMyODcuNDM4IDM4NS45MjQgMjczLjM2MyA0MDAgMjU2IDQwMFpNNTY4LjMyNiAxNjYuNDA2QzU1OC42MjMgMTU3LjQwNiA1NDMuNDIgMTU3Ljk1MyA1MzQuNDA0IDE2Ny42NzJMNDQ3LjM1NyAyNjEuNDIyTDQwOC45NjcgMjIzLjAzMUMzOTkuNTkyIDIxMy42NTYgMzg0LjQwNCAyMTMuNjU2IDM3NS4wMjkgMjIzLjAzMVMzNjUuNjU0IDI0Ny41OTQgMzc1LjAyOSAyNTYuOTY5TDQzMS4wMjkgMzEyLjk2OUM0MzUuNTI5IDMxNy40NjkgNDQxLjYzOSAzMjAgNDQ3Ljk5OCAzMjBINDQ4LjQzNkM0NTQuOTY3IDMxOS44NzUgNDYxLjE1NCAzMTcuMTA5IDQ2NS41OTIgMzEyLjMyOEw1NjkuNTkyIDIwMC4zMjhDNTc4LjYwNyAxOTAuNjI1IDU3OC4wNDUgMTc1LjQzOCA1NjguMzI2IDE2Ni40MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleExclamationCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M408.402 335.596L352.402 279.596C330.568 257.762 330.568 222.236 352.402 200.404C362.98 189.826 377.043 184 391.998 184S421.016 189.826 431.594 200.404L446.504 215.312L482.322 176.736C449.553 83.195 360.73 16 256 16C123.451 16 16 123.451 16 256S123.451 496 256 496C358.232 496 445.301 431.967 479.889 341.912C470.811 348.16 459.855 351.783 447.998 352C433.258 352 418.826 346.021 408.402 335.596ZM232 152C232 138.75 242.75 128 256 128S280 138.75 280 152V280C280 293.25 269.25 304 256 304S232 293.25 232 280V152ZM256 400C238.637 400 224.562 385.924 224.562 368.561C224.562 351.199 238.637 337.123 256 337.123S287.438 351.199 287.438 368.561C287.438 385.924 273.363 400 256 400ZM568.326 166.406C558.623 157.406 543.42 157.953 534.404 167.672L447.357 261.422L408.967 223.031C399.592 213.656 384.404 213.656 375.029 223.031S365.654 247.594 375.029 256.969L431.029 312.969C435.529 317.469 441.639 320 447.998 320H448.436C454.967 319.875 461.154 317.109 465.592 312.328L569.592 200.328C578.607 190.625 578.045 175.438 568.326 166.406Z" />
        </Icon>
    </>
}