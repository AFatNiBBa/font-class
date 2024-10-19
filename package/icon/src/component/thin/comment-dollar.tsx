
import { Icon } from "../../index";

/**
 * A component that renders the `comment-dollar` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-dollar?s=thin comment-dollar}
 * @preview ![comment-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzEuOTk4QzExNC41OTQgMzEuOTk4IDAgMTI1LjA5MiAwIDIzOS45OThDMCAyODkuNTkyIDIxLjQwNiAzMzQuOTk4IDU3IDM3MC43MDFDNDQuNSA0MjEuMDkyIDIuNjg4IDQ2NS45OTggMi4xODggNDY2LjQ5OEMwIDQ2OC43OTUgLTAuNTk0IDQ3Mi4yMDEgMC42ODggNDc1LjIwMUMxLjk5OCA0NzguMjAxIDQuODEyIDQ3OS45OTggOCA0NzkuOTk4Qzc0LjMxMiA0NzkuOTk4IDEyNCA0NDguMjAxIDE0OC41OTQgNDI4LjU5MkMxODEuMzEyIDQ0MC45MDQgMjE3LjU5NCA0NDcuOTk4IDI1NiA0NDcuOTk4QzM5Ny40MDYgNDQ3Ljk5OCA1MTIgMzU0LjkwNCA1MTIgMjM5Ljk5OFMzOTcuNDA2IDMxLjk5OCAyNTYgMzEuOTk4Wk0yNTYgNDMxLjk5OEMyMjAuODc5IDQzMS45OTggMTg2LjY0MSA0MjUuODE0IDE1NC4yMyA0MTMuNjE3TDE0NS43MjMgNDEwLjQxNkwxMzguNjE3IDQxNi4wODJDMTE4LjQxOCA0MzIuMTg4IDc4LjQ3NyA0NTguMTE3IDI1Ljk1NyA0NjMuMTQxQzQwLjM5NSA0NDQuODQ2IDYzLjM3NSA0MTEuNDU5IDcyLjUzMSAzNzQuNTUzTDc0LjcwMyAzNjUuNzk1TDY4LjMzMiAzNTkuNDA0QzM0LjA5OCAzMjUuMDY0IDE2IDI4My43NzMgMTYgMjM5Ljk5OEMxNiAxMzQuMTI5IDEyMy42NjQgNDcuOTk4IDI1NiA0Ny45OThTNDk2IDEzNC4xMjkgNDk2IDIzOS45OThTMzg4LjMzNiA0MzEuOTk4IDI1NiA0MzEuOTk4Wk0yNTguMDE2IDIzMi4yMzRMMjUwLjcxOSAyMzAuMjM0QzIxOS4xNzIgMjIxLjM5MSAyMDQuODEyIDIxMy41MzEgMjA4LjU5NCAxOTIuODEyQzIxMi41OTQgMTcwLjkyMiAyNDEuODc1IDE2NS4yNjYgMjY5LjA5NCAxNjkuMjY2QzI3Ni4xNzIgMTcwLjMyOCAyODQuNTYyIDE3Mi41IDI5NS41IDE3Ni4wOTRDMjk5LjY1NiAxNzcuNDUzIDMwNC4yMDMgMTc1LjIwMyAzMDUuNTk0IDE3MUMzMDYuOTg0IDE2Ni44MTIgMzA0LjcwMyAxNjIuMjgxIDMwMC41IDE2MC45MDZDMjg4LjY4OCAxNTcuMDE2IDI3OS40NTMgMTU0LjY0MSAyNzEuNDUzIDE1My40NTNDMjY4Ljg5MyAxNTMuMDcgMjY2LjUyIDE1Mi45OTggMjY0LjA0NyAxNTIuNzY0VjEzNkMyNjQuMDQ3IDEzMS41NzggMjYwLjQ2OSAxMjggMjU2LjA0NyAxMjhTMjQ4LjA0NyAxMzEuNTc4IDI0OC4wNDcgMTM2VjE1Mi4yN0MyMTcuOTUzIDE1My40OCAxOTcuMDE0IDE2Ny4wMzcgMTkyLjg0NCAxODkuOTM4QzE4NS43OTcgMjI4LjY1NiAyMjMuNzM0IDIzOS4yOTcgMjQ2LjQwNiAyNDUuNjQxTDI1My44MTIgMjQ3LjY3MkMyOTAuNTk0IDI1Ny42ODggMzA3LjQ2OSAyNjQuODQ0IDMwMy40MDYgMjg3LjE4OEMyOTkuNDIyIDMwOS4wOTQgMjcwLjE1NiAzMTQuNzgxIDI0Mi44NTkgMzEwLjcxOUMyMzEuOTM4IDMwOS4xNTYgMjE5LjM1OSAzMDQuODQ0IDIwOC4yNjYgMzAxLjAzMUwyMDIuNTQ3IDI5OS4wOTRDMTk4LjM3NSAyOTcuNzAzIDE5My44NDQgMjk5LjkzOCAxOTIuNDIyIDMwNC4xMDlDMTkxLjAxNiAzMDguMjk3IDE5My4yNjYgMzEyLjg0NCAxOTcuNDUzIDMxNC4yNUwyMDMuMDc4IDMxNi4xNzJDMjE0Ljg0NCAzMjAuMjAzIDIyOC4xNzIgMzI0Ljc4MSAyNDAuNTQ3IDMyNi41NDdDMjQzLjE2NiAzMjYuOTM4IDI0NS41MiAzMjYuODkzIDI0OC4wNDcgMzI3LjEyOVYzNDRDMjQ4LjA0NyAzNDguNDIyIDI1MS42MjUgMzUyIDI1Ni4wNDcgMzUyUzI2NC4wNDcgMzQ4LjQyMiAyNjQuMDQ3IDM0NFYzMjcuNTM1QzI5NC4wMjEgMzI2LjI1NCAzMTQuOTk0IDMxMi45MTIgMzE5LjE1NiAyOTAuMDQ3QzMyNi4yODEgMjUwLjgxMiAyODguNDM4IDI0MC41MTYgMjU4LjAxNiAyMzIuMjM0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CommentDollar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 31.998C114.594 31.998 0 125.092 0 239.998C0 289.592 21.406 334.998 57 370.701C44.5 421.092 2.688 465.998 2.188 466.498C0 468.795 -0.594 472.201 0.688 475.201C1.998 478.201 4.812 479.998 8 479.998C74.312 479.998 124 448.201 148.594 428.592C181.312 440.904 217.594 447.998 256 447.998C397.406 447.998 512 354.904 512 239.998S397.406 31.998 256 31.998ZM256 431.998C220.879 431.998 186.641 425.814 154.23 413.617L145.723 410.416L138.617 416.082C118.418 432.188 78.477 458.117 25.957 463.141C40.395 444.846 63.375 411.459 72.531 374.553L74.703 365.795L68.332 359.404C34.098 325.064 16 283.773 16 239.998C16 134.129 123.664 47.998 256 47.998S496 134.129 496 239.998S388.336 431.998 256 431.998ZM258.016 232.234L250.719 230.234C219.172 221.391 204.812 213.531 208.594 192.812C212.594 170.922 241.875 165.266 269.094 169.266C276.172 170.328 284.562 172.5 295.5 176.094C299.656 177.453 304.203 175.203 305.594 171C306.984 166.812 304.703 162.281 300.5 160.906C288.688 157.016 279.453 154.641 271.453 153.453C268.893 153.07 266.52 152.998 264.047 152.764V136C264.047 131.578 260.469 128 256.047 128S248.047 131.578 248.047 136V152.27C217.953 153.48 197.014 167.037 192.844 189.938C185.797 228.656 223.734 239.297 246.406 245.641L253.812 247.672C290.594 257.688 307.469 264.844 303.406 287.188C299.422 309.094 270.156 314.781 242.859 310.719C231.938 309.156 219.359 304.844 208.266 301.031L202.547 299.094C198.375 297.703 193.844 299.938 192.422 304.109C191.016 308.297 193.266 312.844 197.453 314.25L203.078 316.172C214.844 320.203 228.172 324.781 240.547 326.547C243.166 326.938 245.52 326.893 248.047 327.129V344C248.047 348.422 251.625 352 256.047 352S264.047 348.422 264.047 344V327.535C294.021 326.254 314.994 312.912 319.156 290.047C326.281 250.812 288.438 240.516 258.016 232.234Z" />
    </Icon>
);

export default CommentDollar;