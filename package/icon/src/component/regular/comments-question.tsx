
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comments-question` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comments-question?s=regular comments-question}
 * @preview ![comments-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjEuNzY2IDg4SDE5MS4wNjNDMTY2LjY3MiA4OCAxNDYuODI4IDEwNy44NDQgMTQ2LjgyOCAxMzIuMjM0QzE0Ni44MjggMTQxLjA3OCAxNTMuOTg1IDE0OC4yMzQgMTYyLjgyOCAxNDguMjM0UzE3OC44MjggMTQxLjA3OCAxNzguODI4IDEzMi4yMzRDMTc4LjgyOCAxMjUuNDg0IDE4NC4zMTMgMTIwIDE5MS4wNjMgMTIwSDIyMS43NjZDMjMwLjI2NiAxMjAgMjM3LjE3MiAxMjYuOTA2IDIzNy4xNzIgMTM1LjQwNkMyMzcuMTcyIDE0MS4yODEgMjMzLjkwNyAxNDYuNTYyIDIyOC42NTcgMTQ5LjE4OEwyMDAuODQ0IDE2My4wOTRDMTk1LjQyMiAxNjUuODEyIDE5MiAxNzEuMzQ0IDE5MiAxNzcuNDA2VjE5MkMxOTIgMjAwLjg0NCAxOTkuMTU3IDIwOCAyMDggMjA4UzIyNCAyMDAuODQ0IDIyNCAxOTJWMTg3LjI5N0wyNDIuOTUzIDE3Ny44MTJDMjU5LjEyNSAxNjkuNzUgMjY5LjE3MiAxNTMuNSAyNjkuMTcyIDEzNS40MDZDMjY5LjE3MiAxMDkuMjY2IDI0Ny45MDcgODggMjIxLjc2NiA4OFpNMjA4IDIyMEMxOTYuOTU1IDIyMCAxODggMjI4Ljk1MyAxODggMjQwQzE4OCAyNTEuMDQ1IDE5Ni45NTUgMjYwIDIwOCAyNjBTMjI4IDI1MS4wNDUgMjI4IDI0MEMyMjggMjI4Ljk1MyAyMTkuMDQ1IDIyMCAyMDggMjIwWk00MTYgMTc2QzQxNiA3OC43OTcgMzIyLjg3NSAwIDIwOCAwUzAgNzguNzk3IDAgMTc2QzAgMjE3LjYyNyAxNy4xNzYgMjU1LjgxMiA0NS43MjkgMjg1Ljk0N0MyOS4zODUgMzE3LjM3NyA3LjI2IDM0MS41MTYgNi43MzkgMzQxLjkwNkMtMC4wMDcgMzQ5LjA1NyAtMS44OTYgMzU5LjcxNSAyLjAxOCAzNjguODg5QzUuOTMgMzc4LjA2MiAxNC45NjkgMzg0IDI0Ljk1MiAzODRDNzkuMTI5IDM4NCAxMjMuMjY4IDM2NC43NjQgMTUzLjk0MiAzNDUuNzgzQzE3MS4yMDcgMzQ5LjcxMSAxODkuMjY4IDM1MiAyMDggMzUyQzMyMi44NzUgMzUyIDQxNiAyNzMuMjAxIDQxNiAxNzZaTTIwOCAzMDRDMTkzLjg0IDMwNCAxNzkuMjM1IDMwMi4zMTEgMTY0LjU5IDI5OC45NzlMMTQ1LjQxMSAyOTQuNjE3TDEyOC42ODYgMzA0Ljk2NUMxMTEuNjg2IDMxNS40ODQgOTQuMjYyIDMyMy4zNTUgNzYuNTQ3IDMyOC41MzdDODAuNzMxIDMyMS44NjkgODQuNzM5IDMxNC45NzEgODguMzE1IDMwOC4wOTJMMTA0LjA5IDI3Ny43NTRMODAuNTczIDI1Mi45MzRDNjUuNzEzIDIzNy4yNSA0OCAyMTEuMTc0IDQ4IDE3NkM0OCAxMDUuNDIgMTE5Ljc3NiA0OCAyMDggNDhTMzY4IDEwNS40MiAzNjggMTc2UzI5Ni4yMjUgMzA0IDIwOCAzMDRaTTU5OS41OTQgNDQzLjczNkM2MjQuODI4IDQxMy45NDUgNjQwIDM3Ni42MzUgNjQwIDMzNkM2NDAgMjM4Ljc5NyA1NTQuMDM5IDE2MCA0NDggMTYwQzQ0Ny42ODYgMTYwIDQ0Ny4zODEgMTYwLjA0MSA0NDcuMDY3IDE2MC4wNDNDNDQ3LjUzNCAxNjUuMzI4IDQ0OCAxNzAuNjEzIDQ0OCAxNzZDNDQ4IDI3NC42MTcgMzY4LjMyMSAzNTcuMjQ4IDI2MS44NzkgMzc4LjUyM0MyODIuNjU5IDQ1NS4xNDMgMzU3Ljk4NyA1MTIgNDQ4IDUxMkM0ODEuNjk0IDUxMiA1MTMuMzIzIDUwMy45OTIgNTQwLjg0OCA0OTAuMDE4QzU2NS4yNDQgNTAyLjAyIDU5Ni4wODYgNTEyIDYzMi4zNCA1MTJDNjM1LjM5OSA1MTIgNjM4LjEgNTEwLjI3NSA2MzkuMzYgNTA3LjM5NUM2NDAuNTg4IDUwNC41MTYgNjQwLjAxOCA1MDEuMjQ2IDYzNy45MTggNDk5LjA0MUM2MzcuNTY3IDQ5OC42ODkgNjE1Ljg2OCA0NzUuMjY2IDU5OS41OTQgNDQzLjczNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentsQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M221.766 88H191.063C166.672 88 146.828 107.844 146.828 132.234C146.828 141.078 153.985 148.234 162.828 148.234S178.828 141.078 178.828 132.234C178.828 125.484 184.313 120 191.063 120H221.766C230.266 120 237.172 126.906 237.172 135.406C237.172 141.281 233.907 146.562 228.657 149.188L200.844 163.094C195.422 165.812 192 171.344 192 177.406V192C192 200.844 199.157 208 208 208S224 200.844 224 192V187.297L242.953 177.812C259.125 169.75 269.172 153.5 269.172 135.406C269.172 109.266 247.907 88 221.766 88ZM208 220C196.955 220 188 228.953 188 240C188 251.045 196.955 260 208 260S228 251.045 228 240C228 228.953 219.045 220 208 220ZM416 176C416 78.797 322.875 0 208 0S0 78.797 0 176C0 217.627 17.176 255.812 45.729 285.947C29.385 317.377 7.26 341.516 6.739 341.906C-0.007 349.057 -1.896 359.715 2.018 368.889C5.93 378.062 14.969 384 24.952 384C79.129 384 123.268 364.764 153.942 345.783C171.207 349.711 189.268 352 208 352C322.875 352 416 273.201 416 176ZM208 304C193.84 304 179.235 302.311 164.59 298.979L145.411 294.617L128.686 304.965C111.686 315.484 94.262 323.355 76.547 328.537C80.731 321.869 84.739 314.971 88.315 308.092L104.09 277.754L80.573 252.934C65.713 237.25 48 211.174 48 176C48 105.42 119.776 48 208 48S368 105.42 368 176S296.225 304 208 304ZM599.594 443.736C624.828 413.945 640 376.635 640 336C640 238.797 554.039 160 448 160C447.686 160 447.381 160.041 447.067 160.043C447.534 165.328 448 170.613 448 176C448 274.617 368.321 357.248 261.879 378.523C282.659 455.143 357.987 512 448 512C481.694 512 513.323 503.992 540.848 490.018C565.244 502.02 596.086 512 632.34 512C635.399 512 638.1 510.275 639.36 507.395C640.588 504.516 640.018 501.246 637.918 499.041C637.567 498.689 615.868 475.266 599.594 443.736Z" />
        </Icon>
    </>
}