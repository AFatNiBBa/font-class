
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `images` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=solid images}
 * @preview ![images](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjcuOTk5IDMySDE0NC4wMDRDMTE3LjQ5NSAzMiA5Ni4wMDMgNTMuNDkyIDk2LjAwMyA4MFYzMzZDOTYuMDAzIDM2Mi41MDggMTE3LjQ5NSAzODQgMTQ0LjAwNCAzODRINTI3Ljk5OUM1NTQuNTExIDM4NCA1NzYgMzYyLjUwOCA1NzYgMzM2VjgwQzU3NiA1My40OTIgNTU0LjUxMSAzMiA1MjcuOTk5IDMyWk0yMjMuOTkgOTZDMjQxLjY2NyA5NiAyNTUuOTkxIDExMC4zMjggMjU1Ljk5MSAxMjhTMjQxLjY2NyAxNjAgMjIzLjk5IDE2MEMyMDYuMzE4IDE2MCAxOTEuOTkgMTQ1LjY3MiAxOTEuOTkgMTI4UzIwNi4zMTggOTYgMjIzLjk5IDk2Wk00OTQuMTIzIDMxMS41NTFDNDkxLjMzNCAzMTYuNzU0IDQ4NS45MTIgMzIwIDQ4MC4wMTMgMzIwSDE5Mi4wMDVDMTg1Ljk4MiAzMjAgMTgwLjQ3NCAzMTYuNjIxIDE3Ny43NDMgMzExLjI1QzE3NS4wMTMgMzA1Ljg4MyAxNzUuNTI4IDI5OS40MzggMTc5LjA3NSAyOTQuNTc0TDI0OS4wNzcgMTk4LjU3NEMyNTIuMDkzIDE5NC40NDEgMjU2Ljg5OCAxOTIgMjYyLjAwNyAxOTJDMjY3LjExNyAxOTIgMjcxLjkyMSAxOTQuNDQxIDI3NC45MzcgMTk4LjU3NEwyOTcuMjg5IDIyOS4yMzRMMzYwLjAzMyAxMzUuMTI1QzM2Mi45OTggMTMwLjY3MiAzNjcuOTk0IDEyOCAzNzMuMzQ2IDEyOEMzNzguNjk0IDEyOCAzODMuNjkgMTMwLjY3MiAzODYuNjU5IDEzNS4xMjVMNDkzLjMyNiAyOTUuMTI1QzQ5Ni41OTkgMzAwLjAzNSA0OTYuOTA0IDMwNi4zNDggNDk0LjEyMyAzMTEuNTUxWk00OC4wMDEgNDAwVjk2QzIxLjQ5MSA5NiAwIDExNy40OTIgMCAxNDRWNDE2QzAgNDUxLjM0NCAyOC42NTUgNDgwIDY0LjAwMiA0ODBINDMyLjAxMkM0NTguNTIyIDQ4MCA0ODAuMDEzIDQ1OC41MDggNDgwLjAxMyA0MzJIODAuMDAyQzYyLjMyOCA0MzIgNDguMDAxIDQxNy42NzIgNDguMDAxIDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Images(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M527.999 32H144.004C117.495 32 96.003 53.492 96.003 80V336C96.003 362.508 117.495 384 144.004 384H527.999C554.511 384 576 362.508 576 336V80C576 53.492 554.511 32 527.999 32ZM223.99 96C241.667 96 255.991 110.328 255.991 128S241.667 160 223.99 160C206.318 160 191.99 145.672 191.99 128S206.318 96 223.99 96ZM494.123 311.551C491.334 316.754 485.912 320 480.013 320H192.005C185.982 320 180.474 316.621 177.743 311.25C175.013 305.883 175.528 299.438 179.075 294.574L249.077 198.574C252.093 194.441 256.898 192 262.007 192C267.117 192 271.921 194.441 274.937 198.574L297.289 229.234L360.033 135.125C362.998 130.672 367.994 128 373.346 128C378.694 128 383.69 130.672 386.659 135.125L493.326 295.125C496.599 300.035 496.904 306.348 494.123 311.551ZM48.001 400V96C21.491 96 0 117.492 0 144V416C0 451.344 28.655 480 64.002 480H432.012C458.522 480 480.013 458.508 480.013 432H80.002C62.328 432 48.001 417.672 48.001 400Z" />
        </Icon>
    </>
}