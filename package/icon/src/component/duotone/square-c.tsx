
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-c` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=duotone square-c}
 * @preview ![square-c](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTE2Ny4xOTcgMzEyLjI4NUMxODIuMTI1IDMyNy40MiAyMDEuOTU5IDMzNS43NzEgMjIzLjA2MSAzMzUuNzcxUzI2My45OTYgMzI3LjQ1MSAyNzguOTM5IDMxMi4yODVDMjg4LjI3IDMwMi44NjcgMzAzLjQ5NCAzMDIuNzQgMzEyLjg4OSAzMTIuMTZDMzIyLjMxNCAzMjEuNTE4IDMyMi4zNzcgMzM2Ljc3NyAzMTMuMDQ1IDM0Ni4yNkMyODkuMDIxIDM3MC41OTQgMjU3LjA1NyAzODQgMjIzLjA2MSAzODRDMjIzLjA2MSAzODQgMjIzLjA2MSAzODQgMjIzLjA0NSAzODRDMTg5LjA0OSAzODQgMTU3LjEgMzcwLjU5NCAxMzMuMDkyIDM0Ni4yNkM4My42MzcgMjk2LjE3OCA4My42MzcgMjE0LjYzNyAxMzMuMDkyIDE2NC41MjNDMTgxLjA5MiAxMTUuODI2IDI2NC45OCAxMTUuODI2IDMxMy4wNDUgMTY0LjUyM0MzMjIuMzc3IDE3My45NzUgMzIyLjMxNCAxODkuMjM0IDMxMi44ODkgMTk4LjYyM0MzMDMuNDk0IDIwNy45OCAyODguMzAxIDIwNy45NDkgMjc4LjkzOSAxOTguNDY3QzI0OS4wNTMgMTY4LjE5NyAxOTcuMDUxIDE2OC4yMjkgMTY3LjE5NyAxOTguNDY3QzEzNi4yMTcgMjI5Ljg2NSAxMzYuMjE3IDI4MC45MTggMTY3LjE5NyAzMTIuMjg1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNzguOTM5IDE5OC40NjdDMjg4LjMgMjA3Ljk0OSAzMDMuNDk0IDIwNy45OCAzMTIuODg4IDE5OC42MjNDMzIyLjMxNCAxODkuMjM0IDMyMi4zNzYgMTczLjk3NSAzMTMuMDQ0IDE2NC41MjNDMjg5LjI0NCAxNDAuNDEgMjU2LjY2IDEyOC4yMzcgMjIzLjk5OSAxMjguMDA0QzE5MC43MDEgMTI3Ljc2NiAxNTcuMzIzIDEzOS45NCAxMzMuMDkxIDE2NC41MjNDMTA4LjIxNCAxODkuNzMxIDk1Ljg1MSAyMjIuODkyIDk2LjAwMSAyNTZDOTYuMTUgMjg4LjcxIDEwOC41MTMgMzIxLjM3IDEzMy4wOTEgMzQ2LjI2QzE1Ny4wOTkgMzcwLjU5NCAxODkuMDQ4IDM4NCAyMjMuMDQ0IDM4NEMyMjMuMDYgMzg0IDIyMy4wNiAzODQgMjIzLjA2IDM4NEMyNTcuMDU2IDM4NCAyODkuMDIxIDM3MC41OTQgMzEzLjA0NCAzNDYuMjZDMzIyLjM3NiAzMzYuNzc3IDMyMi4zMTQgMzIxLjUxOCAzMTIuODg4IDMxMi4xNkMzMDMuNDk0IDMwMi43NCAyODguMjY5IDMwMi44NjcgMjc4LjkzOSAzMTIuMjg1QzI2My45OTYgMzI3LjQ1MSAyNDQuMTYyIDMzNS43NzEgMjIzLjA2IDMzNS43NzFTMTgyLjEyNSAzMjcuNDIgMTY3LjE5NyAzMTIuMjg1QzEzNi4yMTYgMjgwLjkxOCAxMzYuMjE2IDIyOS44NjUgMTY3LjE5NyAxOTguNDY3QzE5Ny4wNSAxNjguMjI5IDI0OS4wNTIgMTY4LjE5NyAyNzguOTM5IDE5OC40NjdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareC(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM167.197 312.285C182.125 327.42 201.959 335.771 223.061 335.771S263.996 327.451 278.939 312.285C288.27 302.867 303.494 302.74 312.889 312.16C322.314 321.518 322.377 336.777 313.045 346.26C289.021 370.594 257.057 384 223.061 384C223.061 384 223.061 384 223.045 384C189.049 384 157.1 370.594 133.092 346.26C83.637 296.178 83.637 214.637 133.092 164.523C181.092 115.826 264.98 115.826 313.045 164.523C322.377 173.975 322.314 189.234 312.889 198.623C303.494 207.98 288.301 207.949 278.939 198.467C249.053 168.197 197.051 168.229 167.197 198.467C136.217 229.865 136.217 280.918 167.197 312.285Z" />
            <path d="M278.939 198.467C288.3 207.949 303.494 207.98 312.888 198.623C322.314 189.234 322.376 173.975 313.044 164.523C289.244 140.41 256.66 128.237 223.999 128.004C190.701 127.766 157.323 139.94 133.091 164.523C108.214 189.731 95.851 222.892 96.001 256C96.15 288.71 108.513 321.37 133.091 346.26C157.099 370.594 189.048 384 223.044 384C223.06 384 223.06 384 223.06 384C257.056 384 289.021 370.594 313.044 346.26C322.376 336.777 322.314 321.518 312.888 312.16C303.494 302.74 288.269 302.867 278.939 312.285C263.996 327.451 244.162 335.771 223.06 335.771S182.125 327.42 167.197 312.285C136.216 280.918 136.216 229.865 167.197 198.467C197.05 168.229 249.052 168.197 278.939 198.467Z" />
        </Icon>
    </>
}