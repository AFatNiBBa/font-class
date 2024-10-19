
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess?s=duotone chess}
 * @preview ![chess](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0Ny4xMjUgNDU5LjYyNUwyMjQgNDQ4VjQwMEMyMjQgMzkxLjEyNSAyMTYuODc1IDM4NCAyMDggMzg0SDQ4QzM5LjEyNSAzODQgMzIgMzkxLjEyNSAzMiA0MDBWNDQ4TDguODc1IDQ1OS42MjVDMy4zNzUgNDYyLjI1IDAgNDY3Ljg3NSAwIDQ3My44NzVWNDk2QzAgNTA0Ljg3NSA3LjEyNSA1MTIgMTYgNTEySDI0MEMyNDguODc1IDUxMiAyNTYgNTA0Ljg3NSAyNTYgNDk2VjQ3My44NzVDMjU2IDQ2Ny44NzUgMjUyLjYyNSA0NjIuMjUgMjQ3LjEyNSA0NTkuNjI1Wk01MDMuMTI1IDQ1OS42MjVMNDgwIDQ0OFY0MDBDNDgwIDM5MS4xMjUgNDcyLjg3NSAzODQgNDY0IDM4NEgzMzZDMzI3LjEyNSAzODQgMzIwIDM5MS4xMjUgMzIwIDQwMFY0NDhMMjk2Ljg3NSA0NTkuNjI1QzI5MS4zNzUgNDYyLjI1IDI4OCA0NjcuODc1IDI4OCA0NzMuODc1VjQ5NkMyODggNTA0Ljg3NSAyOTUuMTI1IDUxMiAzMDQgNTEySDQ5NkM1MDQuODc1IDUxMiA1MTIgNTA0Ljg3NSA1MTIgNDk2VjQ3My44NzVDNTEyIDQ2Ny44NzUgNTA4LjYyNSA0NjIuMjUgNTAzLjEyNSA0NTkuNjI1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMDAuODExIDk2SDE0My45MzZWNjRIMTY3LjkzNkMxNzIuMzExIDY0IDE3NS45MzYgNjAuMzc1IDE3NS45MzYgNTZWNDBDMTc1LjkzNiAzNS42MjUgMTcyLjMxMSAzMiAxNjcuOTM2IDMySDE0My45MzZWOEMxNDMuOTM2IDMuNjI1IDE0MC4zMTEgMCAxMzUuOTM2IDBIMTE5LjkzNkMxMTUuNTYxIDAgMTExLjkzNiAzLjYyNSAxMTEuOTM2IDhWMzJIODcuOTM2QzgzLjU2MSAzMiA3OS45MzYgMzUuNjI1IDc5LjkzNiA0MFY1NkM3OS45MzYgNjAuMzc1IDgzLjU2MSA2NCA4Ny45MzYgNjRIMTExLjkzNlY5Nkg1NS4wNjFDNDkuODExIDk2IDQ0LjgxMSA5OC42MjUgNDEuODExIDEwMi44NzVDMzguODExIDEwNy4yNSAzOC4xODYgMTEyLjc1IDQwLjA2MSAxMTcuNjI1TDczLjkzNiAyMDhINjMuOTM2QzU1LjA2MSAyMDggNDcuOTM2IDIxNS4xMjUgNDcuOTM2IDIyNFYyNDBDNDcuOTM2IDI0OC44NzUgNTUuMDYxIDI1NiA2My45MzYgMjU2SDc5LjkzNkM3OS42ODYgMjk5LjEyNSA3NC40MzYgMzQyLjEyNSA2My45MzYgMzg0SDE5MS45MzZDMTgxLjQzNiAzNDIuMTI1IDE3Ni4xODYgMjk5LjEyNSAxNzUuOTM2IDI1NkgxOTEuOTM2QzIwMC44MTEgMjU2IDIwNy45MzYgMjQ4Ljg3NSAyMDcuOTM2IDI0MFYyMjRDMjA3LjkzNiAyMTUuMTI1IDIwMC44MTEgMjA4IDE5MS45MzYgMjA4SDE4MS45MzZMMjE1LjgxMSAxMTcuNjI1QzIxNy42ODYgMTEyLjc1IDIxNi45MzYgMTA3LjI1IDIxMy45MzYgMTAyLjg3NUMyMTAuOTM2IDk4LjYyNSAyMDYuMDYxIDk2IDIwMC44MTEgOTZaTTQ4OS45MzYgMTkySDQ2My41NjFDNDYwLjE4NiAxOTIgNDU3LjU2MSAxOTQuNjI1IDQ1Ny41NjEgMTk4VjIyNEg0MzIuODExVjE5OEM0MzIuODExIDE5NC42MjUgNDMwLjE4NiAxOTIgNDI2LjgxMSAxOTJIMzczLjA2MUMzNjkuNjg2IDE5MiAzNjcuMDYxIDE5NC42MjUgMzY3LjA2MSAxOThWMjI0SDM0Mi4zMTFWMTk4QzM0Mi4zMTEgMTk0LjYyNSAzMzkuNjg2IDE5MiAzMzYuMzExIDE5MkgzMDkuOTM2QzMwNi41NjEgMTkyIDMwMy45MzYgMTk0LjYyNSAzMDMuOTM2IDE5OFYyNTYuNjI1QzMwMy45MzYgMjY2IDMwOC4wNjEgMjc0Ljg3NSAzMTUuMzExIDI4MUwzMzkuODExIDMwMS43NUwzMzYuNTYxIDM4NEg0NjMuMzExTDQ2MC4wNjEgMzAxLjc1TDQ4NC41NjEgMjgxQzQ5MS44MTEgMjc0Ljg3NSA0OTUuOTM2IDI2NiA0OTUuOTM2IDI1Ni41VjE5OEM0OTUuOTM2IDE5NC42MjUgNDkzLjMxMSAxOTIgNDg5LjkzNiAxOTJaTTQxNS45MzYgMzM2SDM4My45MzZWMzA0QzM4My45MzYgMjk1LjEyNSAzOTEuMDYxIDI4OCAzOTkuOTM2IDI4OFM0MTUuOTM2IDI5NS4xMjUgNDE1LjkzNiAzMDRWMzM2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Chess(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M247.125 459.625L224 448V400C224 391.125 216.875 384 208 384H48C39.125 384 32 391.125 32 400V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625ZM503.125 459.625L480 448V400C480 391.125 472.875 384 464 384H336C327.125 384 320 391.125 320 400V448L296.875 459.625C291.375 462.25 288 467.875 288 473.875V496C288 504.875 295.125 512 304 512H496C504.875 512 512 504.875 512 496V473.875C512 467.875 508.625 462.25 503.125 459.625Z" />
            <path d="M200.811 96H143.936V64H167.936C172.311 64 175.936 60.375 175.936 56V40C175.936 35.625 172.311 32 167.936 32H143.936V8C143.936 3.625 140.311 0 135.936 0H119.936C115.561 0 111.936 3.625 111.936 8V32H87.936C83.561 32 79.936 35.625 79.936 40V56C79.936 60.375 83.561 64 87.936 64H111.936V96H55.061C49.811 96 44.811 98.625 41.811 102.875C38.811 107.25 38.186 112.75 40.061 117.625L73.936 208H63.936C55.061 208 47.936 215.125 47.936 224V240C47.936 248.875 55.061 256 63.936 256H79.936C79.686 299.125 74.436 342.125 63.936 384H191.936C181.436 342.125 176.186 299.125 175.936 256H191.936C200.811 256 207.936 248.875 207.936 240V224C207.936 215.125 200.811 208 191.936 208H181.936L215.811 117.625C217.686 112.75 216.936 107.25 213.936 102.875C210.936 98.625 206.061 96 200.811 96ZM489.936 192H463.561C460.186 192 457.561 194.625 457.561 198V224H432.811V198C432.811 194.625 430.186 192 426.811 192H373.061C369.686 192 367.061 194.625 367.061 198V224H342.311V198C342.311 194.625 339.686 192 336.311 192H309.936C306.561 192 303.936 194.625 303.936 198V256.625C303.936 266 308.061 274.875 315.311 281L339.811 301.75L336.561 384H463.311L460.061 301.75L484.561 281C491.811 274.875 495.936 266 495.936 256.5V198C495.936 194.625 493.311 192 489.936 192ZM415.936 336H383.936V304C383.936 295.125 391.061 288 399.936 288S415.936 295.125 415.936 304V336Z" />
        </Icon>
    </>
}