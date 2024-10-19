
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dial-high` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial-high?s=regular dial-high}
 * @preview ![dial-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAyNTZDMTQuMzI2IDI1NiAwIDI3MC4zMjYgMCAyODhDMCAzMDUuNjcyIDE0LjMyNiAzMjAgMzIgMzIwUzY0IDMwNS42NzIgNjQgMjg4QzY0IDI3MC4zMjYgNDkuNjc0IDI1NiAzMiAyNTZaTTg0LjM1MiA0NDYuMzkzQzcxLjg1NSA0NTguODg5IDcxLjg1NSA0NzkuMTUgODQuMzUyIDQ5MS42NDhDOTYuODQ4IDUwNC4xNDUgMTE3LjEwOSA1MDQuMTQ1IDEyOS42MDcgNDkxLjY0OEMxNDIuMTA0IDQ3OS4xNSAxNDIuMTA0IDQ1OC44ODkgMTI5LjYwNyA0NDYuMzkzQzExNy4xMDkgNDMzLjg5NiA5Ni44NDggNDMzLjg5NiA4NC4zNTIgNDQ2LjM5M1pNMTI5LjYwNyAxMjkuNjA3QzE0Mi4xMDQgMTE3LjExMSAxNDIuMTA0IDk2Ljg1IDEyOS42MDcgODQuMzU0QzExNy4xMDkgNzEuODU1IDk2Ljg0OCA3MS44NTUgODQuMzUyIDg0LjM1NEM3MS44NTUgOTYuODUgNzEuODU1IDExNy4xMTEgODQuMzUyIDEyOS42MDdDOTYuODQ4IDE0Mi4xMDUgMTE3LjEwOSAxNDIuMTA1IDEyOS42MDcgMTI5LjYwN1pNMjg4IDY0QzMwNS42NzIgNjQgMzIwIDQ5LjY3MiAzMjAgMzJDMzIwIDE0LjMyNiAzMDUuNjcyIDAgMjg4IDBDMjcwLjMyNiAwIDI1NiAxNC4zMjYgMjU2IDMyQzI1NiA0OS42NzIgMjcwLjMyNiA2NCAyODggNjRaTTQ0Ni4zOTEgNDQ2LjM5M0M0MzMuODk1IDQ1OC44ODkgNDMzLjg5NSA0NzkuMTUgNDQ2LjM5MSA0OTEuNjQ4QzQ1OC44ODkgNTA0LjE0NSA0NzkuMTUgNTA0LjE0NSA0OTEuNjQ2IDQ5MS42NDhDNTA0LjE0MyA0NzkuMTUgNTA0LjE0MyA0NTguODg5IDQ5MS42NDYgNDQ2LjM5M1M0NTguODg5IDQzMy44OTYgNDQ2LjM5MSA0NDYuMzkzWk01NDQgMjU2QzUyNi4zMjYgMjU2IDUxMiAyNzAuMzI4IDUxMiAyODhDNTEyIDMwNS42NzQgNTI2LjMyNiAzMjAgNTQ0IDMyMFM1NzYgMzA1LjY3NCA1NzYgMjg4QzU3NiAyNzAuMzI4IDU2MS42NzQgMjU2IDU0NCAyNTZaTTQ0Ni4zOTEgODQuMzU0QzQzMy44OTUgOTYuODUgNDMzLjg5NSAxMTcuMTExIDQ0Ni4zOTEgMTI5LjYwN0M0NTguODg5IDE0Mi4xMDUgNDc5LjE1IDE0Mi4xMDUgNDkxLjY0NiAxMjkuNjA3QzUwNC4xNDMgMTE3LjExMSA1MDQuMTQzIDk2Ljg1IDQ5MS42NDYgODQuMzU0QzQ3OS4xNSA3MS44NTUgNDU4Ljg4OSA3MS44NTUgNDQ2LjM5MSA4NC4zNTRaTTEyNy45OTcgMjg4LjAwMkMxMjcuOTk4IDM3Ni4zNjcgMTk5LjYzMyA0NDguMDAxIDI4Ny45OTkgNDQ4LjAwMVM0NDggMzc2LjM2NyA0NDcuOTk5IDI4OC4wMDJDNDQ4IDE5OS42MzQgMzc2LjM2NSAxMjggMjg3Ljk5OSAxMjhTMTI3Ljk5OCAxOTkuNjM0IDEyNy45OTcgMjg4LjAwMlpNMjg3Ljk5OSAxNzZDMzQxLjUwMiAxNzYgMzg2LjIzMyAyMTMuNzY1IDM5Ny4yNjcgMjY0LjAwMkgyODcuOTk5QzI3NC43NDkgMjY0LjAwMiAyNjMuOTk5IDI3NC43NTIgMjYzLjk5OSAyODguMDAyQzI2My45OTkgMzAxLjI1MiAyNzQuNzQ5IDMxMi4wMDIgMjg3Ljk5OSAzMTIuMDAySDM5Ny4yNjdDMzg2LjIzMyAzNjIuMjM4IDM0MS41MDIgNDAwLjAwMSAyODguMDAxIDQwMC4wMDJDMjI2LjI0MiA0MDAuMDAyIDE3NS45OTcgMzQ5Ljc1OCAxNzUuOTk3IDI4OC4wMDJDMTc1Ljk5NyAyMjYuMjQzIDIyNi4yNDIgMTc1Ljk5OSAyODcuOTk5IDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DialHigh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 256C14.326 256 0 270.326 0 288C0 305.672 14.326 320 32 320S64 305.672 64 288C64 270.326 49.674 256 32 256ZM84.352 446.393C71.855 458.889 71.855 479.15 84.352 491.648C96.848 504.145 117.109 504.145 129.607 491.648C142.104 479.15 142.104 458.889 129.607 446.393C117.109 433.896 96.848 433.896 84.352 446.393ZM129.607 129.607C142.104 117.111 142.104 96.85 129.607 84.354C117.109 71.855 96.848 71.855 84.352 84.354C71.855 96.85 71.855 117.111 84.352 129.607C96.848 142.105 117.109 142.105 129.607 129.607ZM288 64C305.672 64 320 49.672 320 32C320 14.326 305.672 0 288 0C270.326 0 256 14.326 256 32C256 49.672 270.326 64 288 64ZM446.391 446.393C433.895 458.889 433.895 479.15 446.391 491.648C458.889 504.145 479.15 504.145 491.646 491.648C504.143 479.15 504.143 458.889 491.646 446.393S458.889 433.896 446.391 446.393ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM446.391 84.354C433.895 96.85 433.895 117.111 446.391 129.607C458.889 142.105 479.15 142.105 491.646 129.607C504.143 117.111 504.143 96.85 491.646 84.354C479.15 71.855 458.889 71.855 446.391 84.354ZM127.997 288.002C127.998 376.367 199.633 448.001 287.999 448.001S448 376.367 447.999 288.002C448 199.634 376.365 128 287.999 128S127.998 199.634 127.997 288.002ZM287.999 176C341.502 176 386.233 213.765 397.267 264.002H287.999C274.749 264.002 263.999 274.752 263.999 288.002C263.999 301.252 274.749 312.002 287.999 312.002H397.267C386.233 362.238 341.502 400.001 288.001 400.002C226.242 400.002 175.997 349.758 175.997 288.002C175.997 226.243 226.242 175.999 287.999 176Z" />
        </Icon>
    </>
}