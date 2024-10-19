
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=solid arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDE2VjM1MkM0NDggMzM0LjMyNiA0MzMuNjcyIDMyMCA0MTYgMzIwUzM4NCAzMzQuMzI2IDM4NCAzNTJWNDE2QzM4NCA0MzMuNjc0IDM2OS42NzIgNDQ4IDM1MiA0NDhIOTZDNzguMzI4IDQ0OCA2NCA0MzMuNjc0IDY0IDQxNlYzNTJDNjQgMzM0LjMyNiA0OS42NzIgMzIwIDMyIDMyMFMwIDMzNC4zMjYgMCAzNTJWNDE2QzAgNDY5LjAyIDQyLjk4IDUxMiA5NiA1MTJIMzUyQzQwNS4wMiA1MTIgNDQ4IDQ2OS4wMiA0NDggNDE2Wk0yNDYuNjI1IDM0Mi42MjVMMzc0LjYyNSAyMTQuNjI1QzM4Ny4xMzMgMjAyLjExNyAzODcuMTE3IDE4MS44NjcgMzc0LjYyNSAxNjkuMzc1QzM2Mi4xMjUgMTU2Ljg3NSAzNDEuODc1IDE1Ni44NzUgMzI5LjM3NSAxNjkuMzc1TDI1NiAyNDIuNzVWMzJDMjU2IDE0LjMxMiAyNDEuNjg4IDAgMjI0IDBTMTkyIDE0LjMxMiAxOTIgMzJWMjQyLjc1TDExOC42MjUgMTY5LjM3NUMxMDYuMTI1IDE1Ni44NzUgODUuODc1IDE1Ni44NzUgNzMuMzc1IDE2OS4zNzVTNjAuODc1IDIwMi4xMjUgNzMuMzc1IDIxNC42MjVMMjAxLjM3NSAzNDIuNjI1QzIxMy44NzUgMzU1LjEyNSAyMzQuMTI1IDM1NS4xMjUgMjQ2LjYyNSAzNDIuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownToBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 416V352C448 334.326 433.672 320 416 320S384 334.326 384 352V416C384 433.674 369.672 448 352 448H96C78.328 448 64 433.674 64 416V352C64 334.326 49.672 320 32 320S0 334.326 0 352V416C0 469.02 42.98 512 96 512H352C405.02 512 448 469.02 448 416ZM246.625 342.625L374.625 214.625C387.133 202.117 387.117 181.867 374.625 169.375C362.125 156.875 341.875 156.875 329.375 169.375L256 242.75V32C256 14.312 241.688 0 224 0S192 14.312 192 32V242.75L118.625 169.375C106.125 156.875 85.875 156.875 73.375 169.375S60.875 202.125 73.375 214.625L201.375 342.625C213.875 355.125 234.125 355.125 246.625 342.625Z" />
        </Icon>
    </>
}