
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-pen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-pen?s=solid comment-pen}
 * @preview ![comment-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTE0LjU5NCAzMiAwIDEyNS4wOTQgMCAyNDBDMCAyODkuNTk0IDIxLjQwNiAzMzUgNTcgMzcwLjcwM0M0NC41IDQyMS4wOTQgMi42ODggNDY2IDIuMTg4IDQ2Ni41QzAgNDY4Ljc5NyAtMC41OTQgNDcyLjIwMyAwLjY4OCA0NzUuMjAzQzEuOTk5IDQ3OC4yMDMgNC44MTIgNDgwIDggNDgwQzc0LjMxMiA0ODAgMTI0IDQ0OC4yMDMgMTQ4LjU5NCA0MjguNTk0QzE4MS4zMTIgNDQwLjkwNiAyMTcuNTk0IDQ0OCAyNTYgNDQ4QzM5Ny40MDYgNDQ4IDUxMiAzNTQuOTA2IDUxMiAyNDBTMzk3LjQwNiAzMiAyNTYgMzJaTTIxNS4wNzggMzM2LjkyMkMyMTMuMTIxIDMzOC44NzkgMjEwLjYzMyAzNDAuMjA3IDIwNy45MjIgMzQwLjc1TDE1Mi4zNzUgMzUxLjg1OUMxNDcuNDc3IDM1Mi44NCAxNDMuMTYgMzQ4LjUyIDE0NC4xNDEgMzQzLjYyNUwxNTUuMjQ2IDI4OC4wODJDMTU1Ljc4OSAyODUuMzcxIDE1Ny4xMjEgMjgyLjg3OSAxNTkuMDc4IDI4MC45MjZMMjU2LjY4OCAxODMuMzEzTDMxMi42OTEgMjM5LjMyTDIxNS4wNzggMzM2LjkyMlpNMzU5Ljc5NyAxOTIuMjE5TDMzNS4zMTYgMjE2LjY5NUwyNzkuMzEyIDE2MC42ODhMMzAzLjc4OSAxMzYuMjA3QzMxNC43MjcgMTI1LjI3MyAzMzIuNDUzIDEyNS4yNzMgMzQzLjM4NyAxMzYuMjA3TDM1OS43OTcgMTUyLjYyMUMzNzAuNzM0IDE2My41NTUgMzcwLjczNCAxODEuMjg1IDM1OS43OTcgMTkyLjIxOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentPen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C1.999 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM215.078 336.922C213.121 338.879 210.633 340.207 207.922 340.75L152.375 351.859C147.477 352.84 143.16 348.52 144.141 343.625L155.246 288.082C155.789 285.371 157.121 282.879 159.078 280.926L256.688 183.313L312.691 239.32L215.078 336.922ZM359.797 192.219L335.316 216.695L279.312 160.688L303.789 136.207C314.727 125.273 332.453 125.273 343.387 136.207L359.797 152.621C370.734 163.555 370.734 181.285 359.797 192.219Z" />
        </Icon>
    </>
}