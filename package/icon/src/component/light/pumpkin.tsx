
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pumpkin` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pumpkin?s=light pumpkin}
 * @preview ![pumpkin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzMuNzgzIDk4LjkxNkMyMzMuNzgzIDEwNS44ODQgMjM5LjIzNiAxMTQuOTE5IDI0OS43OTIgMTE0LjkxOUMyNTYuMTM2IDExNC45MTkgMjYyLjEzNiAxMTEuMTIyIDI2NC42NTEgMTA0Ljg3M0wyOTIuNTg5IDM1LjA2NUwzMjAuMDc0IDQ4Ljc1MlY5NS45NTJDMzIwLjA3NCAxMDQuNzk1IDMyNy4yMyAxMTEuOTUxIDMzNi4wNzQgMTExLjk1MVMzNTIuMDc0IDEwNC43OTUgMzUyLjA3NCA5NS45NTJWNDMuNzIxQzM1Mi4wNzQgMzQuNjEyIDM0Ni45OCAyNi40MjUgMzM4Ljc0NiAyMi4zMDFMMjk5LjIxNCAyLjYzQzI5NS43NTQgMC44ODMgMjkyLjA2NSAwIDI4OC4zNzEgMEMyNzguODU5IDAgMjY5LjgzNiA1LjgxNCAyNjYuMDg5IDE1LjE0NUwyMzQuOTMzIDkyLjk2OEMyMzQuMTUzIDk0LjkyMSAyMzMuNzgzIDk2LjkzNSAyMzMuNzgzIDk4LjkxNlpNNTc2IDMxNC41MTZDNTc2IDIzNy4yMzEgNTI3LjY1NCAxMjcuOTk5IDQyMC44NTggMTI3Ljk5OUM0MTkuMDY2IDEyNy45OTkgNDE3LjI2OCAxMjguMDM0IDQxNS40NjUgMTI4LjEwNkM0MDYuODE5IDEyOC4zODEgNDAwLjAwMiAxMzUuNDg5IDQwMC4wMDIgMTQ0LjA3M0M0MDAuMDAyIDE1My4wNzkgNDA2Ljg3MiAxNjAuMDczIDQxNi4zMDMgMTYwLjA3M0M0MTYuNzI4IDE2MC4wNzMgNDE4LjExMiAxNjAgNDIwLjQ1MSAxNjBDNDgzLjI0IDE2MCA1NDMuOTk4IDIyMS45NjkgNTQzLjk5OCAzMTQuMjEyQzU0My45OTggMzcwLjE3IDUwMS41MjIgNDc5LjY3NiA0MjAuODY1IDQ3OS42NzZDMzc2LjU0NyA0NzkuNjc2IDM3Mi40NTkgNDU2LjYxOCAzNTMuNDM1IDQ1Ni42MThDMzMzLjUwMSA0NTYuNjE4IDMzMi4xMDcgNDgwLjAwMiAyODguMDI3IDQ4MC4wMDJDMjQ0LjAyNSA0ODAuMDAyIDI0Mi42NzkgNDU2LjU5OSAyMjIuNjY4IDQ1Ni41OTlDMjA0LjI3NSA0NTYuNTk5IDE5OC44MjggNDc5LjY0OCAxNTUuMjI1IDQ3OS42NDhDNzMuMzkxIDQ3OS42NDggMzIuMDAyIDM3MC4wMDQgMzIuMDAyIDMxNC4xODZDMzIuMDAyIDI1My4xOTkgNjkuMTY1IDE2MC4wMjUgMTU1Ljc3NCAxNjAuMDI1QzE1OS40MjEgMTYwLjAyNSAxNTkuNjc5IDE2MC4xMzggMTYwLjY1NCAxNjAuMTM4QzE2Ni41NTYgMTYwLjEzOCAxNzUuOTg3IDE1NC44NjEgMTc1Ljk4NyAxNDQuMDg1QzE3NS45ODcgMTM1LjQ4OSAxNjkuMTY1IDEyOC4zODIgMTYwLjQ5NSAxMjguMTIxQzE1OC45MSAxMjguMDY2IDE1Ny4zMjkgMTI4LjAzOSAxNTUuNzUyIDEyOC4wMzlDNDkuMDIyIDEyOC4wMzkgMCAyMzUuNzg2IDAgMzE0LjQ5M0MwIDQwNy44ODEgNjcuMTkzIDUxMS42MTYgMTU1LjIwNyA1MTEuNjE2QzE3OS4xNzEgNTExLjYxNiAyMDMuMTY2IDUwNC43MDggMjIyLjU0MiA0OTAuODQ1QzI0MC45NzkgNTA1LjA2MyAyNjIuNDggNTEyIDI4OC4wMjcgNTEyQzMxMy41MjcgNTEyIDMzNS4wNDIgNTA1LjA3OSAzNTMuNjM2IDQ5MC44M0MzNzIuOTU3IDUwNC43MSAzOTYuOTE5IDUxMS42MjUgNDIwLjg2NiA1MTEuNjI1QzUwOS43MzEgNTExLjYyNSA1NzYgNDA2LjUyMSA1NzYgMzE0LjUxNlpNMTkxLjk4IDE5NC44OTZDMjA5LjA5MSAxOTQuODk2IDIxNi43MTUgMTYwLjAyNSAyODcuOTk1IDE2MC4wMjVDMzU4Ljg4NCAxNjAuMDI1IDM2Ny4yMTggMTk0LjkxMyAzODMuOTk2IDE5NC45MTNDMzkyLjgxMyAxOTQuOTEzIDM5OS45OTYgMTg3Ljc2IDM5OS45OTYgMTc4LjkwN0MzOTkuOTk2IDE2Mi41NjIgMzU0LjE0NiAxMjguMDI4IDI4Ny45OTUgMTI4LjAyOEMyMjEuODI3IDEyOC4wMjggMTc1Ljk5NCAxNjIuNTczIDE3NS45OTQgMTc4LjkwN0MxNzUuOTk0IDE4Ny42OTMgMTgzLjA5MiAxOTQuODk2IDE5MS45OCAxOTQuODk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pumpkin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M233.783 98.916C233.783 105.884 239.236 114.919 249.792 114.919C256.136 114.919 262.136 111.122 264.651 104.873L292.589 35.065L320.074 48.752V95.952C320.074 104.795 327.23 111.951 336.074 111.951S352.074 104.795 352.074 95.952V43.721C352.074 34.612 346.98 26.425 338.746 22.301L299.214 2.63C295.754 0.883 292.065 0 288.371 0C278.859 0 269.836 5.814 266.089 15.145L234.933 92.968C234.153 94.921 233.783 96.935 233.783 98.916ZM576 314.516C576 237.231 527.654 127.999 420.858 127.999C419.066 127.999 417.268 128.034 415.465 128.106C406.819 128.381 400.002 135.489 400.002 144.073C400.002 153.079 406.872 160.073 416.303 160.073C416.728 160.073 418.112 160 420.451 160C483.24 160 543.998 221.969 543.998 314.212C543.998 370.17 501.522 479.676 420.865 479.676C376.547 479.676 372.459 456.618 353.435 456.618C333.501 456.618 332.107 480.002 288.027 480.002C244.025 480.002 242.679 456.599 222.668 456.599C204.275 456.599 198.828 479.648 155.225 479.648C73.391 479.648 32.002 370.004 32.002 314.186C32.002 253.199 69.165 160.025 155.774 160.025C159.421 160.025 159.679 160.138 160.654 160.138C166.556 160.138 175.987 154.861 175.987 144.085C175.987 135.489 169.165 128.382 160.495 128.121C158.91 128.066 157.329 128.039 155.752 128.039C49.022 128.039 0 235.786 0 314.493C0 407.881 67.193 511.616 155.207 511.616C179.171 511.616 203.166 504.708 222.542 490.845C240.979 505.063 262.48 512 288.027 512C313.527 512 335.042 505.079 353.636 490.83C372.957 504.71 396.919 511.625 420.866 511.625C509.731 511.625 576 406.521 576 314.516ZM191.98 194.896C209.091 194.896 216.715 160.025 287.995 160.025C358.884 160.025 367.218 194.913 383.996 194.913C392.813 194.913 399.996 187.76 399.996 178.907C399.996 162.562 354.146 128.028 287.995 128.028C221.827 128.028 175.994 162.573 175.994 178.907C175.994 187.693 183.092 194.896 191.98 194.896Z" />
        </Icon>
    </>
}