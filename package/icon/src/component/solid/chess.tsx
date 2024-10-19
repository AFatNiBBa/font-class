
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chess` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess?s=solid chess}
 * @preview ![chess](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03My45OTkgMjA4SDY0QzU1LjEyNSAyMDggNDggMjE1LjEyNSA0OCAyMjRWMjQwQzQ4IDI0OC44NzUgNTUuMTI1IDI1NiA2NCAyNTZIODBDNzkuNzUgMjk5LjEyNSA3NC41IDM0Mi4xMjUgNjQgMzg0SDE5MkMxODEuNSAzNDIuMTI1IDE3Ni4yNSAyOTkuMTI1IDE3NiAyNTZIMTkyQzIwMC44NzUgMjU2IDIwOCAyNDguODc1IDIwOCAyNDBWMjI0QzIwOCAyMTUuMTI1IDIwMC44NzUgMjA4IDE5MiAyMDhIMTgxLjk5OUwyMTUuODc1IDExNy42MjVDMjE3Ljc1IDExMi43NSAyMTcgMTA3LjI1IDIxMy45OTkgMTAyLjg3NUMyMTEgOTguNjI1IDIwNi4xMjUgOTYgMjAwLjg3NSA5NkgxNDRWNjRIMTY4QzE3Mi4zNzUgNjQgMTc2IDYwLjM3NSAxNzYgNTZWNDBDMTc2IDM1LjYyNSAxNzIuMzc1IDMyIDE2OCAzMkgxNDRWOEMxNDQgMy42MjUgMTQwLjM3NSAwIDEzNiAwSDEyMEMxMTUuNjI1IDAgMTEyIDMuNjI1IDExMiA4VjMySDg4QzgzLjYyNSAzMiA4MCAzNS42MjUgODAgNDBWNTZDODAgNjAuMzc1IDgzLjYyNSA2NCA4OCA2NEgxMTJWOTZINTUuMTI1QzQ5Ljg3NSA5NiA0NC44NzUgOTguNjI1IDQxLjg3NSAxMDIuODc1QzM4Ljg3NSAxMDcuMjUgMzguMjUgMTEyLjc1IDQwLjEyNSAxMTcuNjI1TDczLjk5OSAyMDhaTTI0Ny4xMjUgNDU5LjYyNUwyMjQgNDQ4VjQzMkMyMjQgNDIzLjEyNSAyMTYuODc1IDQxNiAyMDggNDE2SDQ4QzM5LjEyNSA0MTYgMzIgNDIzLjEyNSAzMiA0MzJWNDQ4TDguODc1IDQ1OS42MjVDMy4zNzUgNDYyLjI1IDAgNDY3Ljg3NSAwIDQ3My44NzVWNDk2QzAgNTA0Ljg3NSA3LjEyNSA1MTIgMTYgNTEySDI0MEMyNDguODc1IDUxMiAyNTYgNTA0Ljg3NSAyNTYgNDk2VjQ3My44NzVDMjU2IDQ2Ny44NzUgMjUyLjYyNSA0NjIuMjUgMjQ3LjEyNSA0NTkuNjI1Wk0zMzkuODc1IDMwMS43NUwzMzYuNjI1IDM4NEg0NjMuMzc1TDQ2MC4xMjUgMzAxLjc1TDQ4NC42MjUgMjgxQzQ5MS44NzUgMjc0Ljg3NSA0OTYgMjY2IDQ5NiAyNTYuNVYxOThDNDk2IDE5NC42MjUgNDkzLjM3NSAxOTIgNDg5Ljk5OSAxOTJINDYzLjYyNUM0NjAuMjUgMTkyIDQ1Ny42MjUgMTk0LjYyNSA0NTcuNjI1IDE5OFYyMjRINDMyLjg3NVYxOThDNDMyLjg3NSAxOTQuNjI1IDQzMC4yNSAxOTIgNDI2Ljg3NSAxOTJIMzczLjEyNUMzNjkuNzUgMTkyIDM2Ny4xMjUgMTk0LjYyNSAzNjcuMTI1IDE5OFYyMjRIMzQyLjM3NVYxOThDMzQyLjM3NSAxOTQuNjI1IDMzOS43NSAxOTIgMzM2LjM3NSAxOTJIMzA5Ljk5OUMzMDYuNjI1IDE5MiAzMDQgMTk0LjYyNSAzMDQgMTk4VjI1Ni42MjVDMzA0IDI2NiAzMDguMTI1IDI3NC44NzUgMzE1LjM3NSAyODFMMzM5Ljg3NSAzMDEuNzVaTTM4NCAzMDRDMzg0IDI5NS4xMjUgMzkxLjEyNSAyODggNDAwIDI4OFM0MTYgMjk1LjEyNSA0MTYgMzA0VjMzNkgzODRWMzA0Wk01MDMuMTI1IDQ1OS42MjVMNDgwIDQ0OFY0MzJDNDgwIDQyMy4xMjUgNDcyLjg3NSA0MTYgNDY0IDQxNkgzMzZDMzI3LjEyNSA0MTYgMzIwIDQyMy4xMjUgMzIwIDQzMlY0NDhMMjk2Ljg3NSA0NTkuNjI1QzI5MS4zNzUgNDYyLjI1IDI4OCA0NjcuODc1IDI4OCA0NzMuODc1VjQ5NkMyODggNTA0Ljg3NSAyOTUuMTI1IDUxMiAzMDQgNTEySDQ5NkM1MDQuODc1IDUxMiA1MTIgNTA0Ljg3NSA1MTIgNDk2VjQ3My44NzVDNTEyIDQ2Ny44NzUgNTA4LjYyNSA0NjIuMjUgNTAzLjEyNSA0NTkuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Chess(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M73.999 208H64C55.125 208 48 215.125 48 224V240C48 248.875 55.125 256 64 256H80C79.75 299.125 74.5 342.125 64 384H192C181.5 342.125 176.25 299.125 176 256H192C200.875 256 208 248.875 208 240V224C208 215.125 200.875 208 192 208H181.999L215.875 117.625C217.75 112.75 217 107.25 213.999 102.875C211 98.625 206.125 96 200.875 96H144V64H168C172.375 64 176 60.375 176 56V40C176 35.625 172.375 32 168 32H144V8C144 3.625 140.375 0 136 0H120C115.625 0 112 3.625 112 8V32H88C83.625 32 80 35.625 80 40V56C80 60.375 83.625 64 88 64H112V96H55.125C49.875 96 44.875 98.625 41.875 102.875C38.875 107.25 38.25 112.75 40.125 117.625L73.999 208ZM247.125 459.625L224 448V432C224 423.125 216.875 416 208 416H48C39.125 416 32 423.125 32 432V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625ZM339.875 301.75L336.625 384H463.375L460.125 301.75L484.625 281C491.875 274.875 496 266 496 256.5V198C496 194.625 493.375 192 489.999 192H463.625C460.25 192 457.625 194.625 457.625 198V224H432.875V198C432.875 194.625 430.25 192 426.875 192H373.125C369.75 192 367.125 194.625 367.125 198V224H342.375V198C342.375 194.625 339.75 192 336.375 192H309.999C306.625 192 304 194.625 304 198V256.625C304 266 308.125 274.875 315.375 281L339.875 301.75ZM384 304C384 295.125 391.125 288 400 288S416 295.125 416 304V336H384V304ZM503.125 459.625L480 448V432C480 423.125 472.875 416 464 416H336C327.125 416 320 423.125 320 432V448L296.875 459.625C291.375 462.25 288 467.875 288 473.875V496C288 504.875 295.125 512 304 512H496C504.875 512 512 504.875 512 496V473.875C512 467.875 508.625 462.25 503.125 459.625Z" />
        </Icon>
    </>
}