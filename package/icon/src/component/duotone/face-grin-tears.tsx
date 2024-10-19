
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-tears` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tears?s=duotone face-grin-tears}
 * @preview ![face-grin-tears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMC4yNSAxNkMyMDEuNzEzIDE2IDEwMy40ODIgMTAyLjAwOCA4NCAyMTUuMDA4Qzg3LjIyNyAyMTQuNTA0IDg5Ljg5OCAyMTMuODU5IDkzLjI3MSAyMTMuMzk1TDk2Ljk4NiAyMTIuOTE4SDk5LjQ1N0MxMTEuMTE5IDIxMi45MTggMTIyLjE1NiAyMTcuOTkyIDEyOS43NDIgMjI2Ljg0NEMxMzcuMzI4IDIzNS42OTkgMTQwLjY1IDI0Ny40MSAxMzguOTE2IDI1OC41NjZDMTI3LjgxNCAzMzYuNzE5IDExMC41NzggMzU0Ljc4MSAxMDQuNTg0IDM2MC43ODlDMTQzLjUxOCA0NDAuNzY2IDIyNS4zMyA0OTYgMzIwLjI1IDQ5NlM0OTYuOTgyIDQ0MC43NjYgNTM1LjkxOCAzNjAuNzg5QzUyOS45MjYgMzU0Ljc4OSA1MTIuNjg3IDMzNi43MjcgNTAxLjY0NSAyNTguOTczQzQ5OS44NTIgMjQ3LjQxIDUwMy4xNzQgMjM1LjY5OSA1MTAuNzYgMjI2Ljg0NEM1MTguMzQ0IDIxNy45OTIgNTI5LjM4MyAyMTIuOTE4IDU0MS4wNDMgMjEyLjkxOEw1NDQuNTA2IDIxMy4wMTZMNTQ2LjY3NCAyMTMuMzEyQzU1MC4yNTYgMjEzLjgwNSA1NTMuMDg4IDIxNC40ODQgNTU2LjUwMiAyMTUuMDE2QzUzNy4wMjMgMTAyLjAxMiA0MzguNzkzIDE2IDMyMC4yNSAxNlpNNDAwLjI5MyAxNTJDNDI0LjAyNyAxNTIgNDUyLjk2OSAxODEuMjUgNDU2LjIzOCAyMjMuMzc1QzQ1Ni45NjUgMjMyIDQ0NS40NjEgMjM1LjI1IDQ0MS4zNDQgMjI3Ljg3NUw0MzEuODk4IDIxMC44NzVDNDI0LjE0OCAxOTcuMjUgNDEyLjY0NSAxODkuMjUgNDAwLjI5MyAxODkuMjVDMzg4LjA2MyAxODkuMjUgMzc2LjU1OSAxOTcuMjUgMzY4LjgwOSAyMTAuODc1TDM1OS4zNjMgMjI3Ljg3NUMzNTUuMjQ2IDIzNS4yNSAzNDMuNzQyIDIzMS44NzUgMzQ0LjQ2OSAyMjMuMzc1QzM0Ny40OTYgMTgxLjI1IDM3Ni40MzggMTUyIDQwMC4yOTMgMTUyWk0yNDAuMjA3IDE1MkMyNjQuMDYzIDE1MiAyOTMuMDA0IDE4MS4yNSAyOTYuMjczIDIyMy4zNzVDMjk3IDIzMiAyODUuNDk2IDIzNS4yNSAyODEuMzc5IDIyNy44NzVMMjcxLjgxMyAyMTAuODc1QzI2NC4xODQgMTk3LjI1IDI1Mi42OCAxODkuMjUgMjQwLjMyOCAxODkuMjVDMjI4LjA5OCAxODkuMjUgMjE2LjU5NCAxOTcuMjUgMjA4Ljg0NCAyMTAuODc1TDE5OS4zOTggMjI3Ljg3NUMxOTUuMTYgMjM1LjI1IDE4My43NzcgMjMxLjg3NSAxODQuNTA0IDIyMy4zNzVDMTg3LjUzMSAxODEuMjUgMjE2LjQ3MyAxNTIgMjQwLjIwNyAxNTJaTTMyMC4yNSA0MzJDMjU5LjcwMyA0MzIgMTg1LjcxNSAzOTMuNzUgMTc2LjM5MSAzMzguNzVDMTc0LjQ1MyAzMjYuNzUgMTg1LjgzNiAzMTcuMTI1IDE5Ny4wOTggMzIwLjc1QzIyNy4zNzEgMzMwLjUgMjcyLjI5NyAzMzYgMzIwLjI1IDMzNlM0MTMuMTI5IDMzMC41IDQ0My40MDIgMzIwLjc1QzQ1NC43ODUgMzE3LjEyNSA0NjUuOTI2IDMyNi44NzUgNDY0LjEwOSAzMzguNzVDNDU0Ljc4NSAzOTMuNzUgMzgwLjc5NyA0MzIgMzIwLjI1IDQzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDAwLjA0MyAxNTJDMzc2LjE4NyAxNTIgMzQ3LjI0NiAxODEuMjUgMzQ0LjIxOCAyMjMuMzc1QzM0My40OTIgMjMxLjg3NSAzNTQuOTk2IDIzNS4yNSAzNTkuMTEzIDIyNy44NzVMMzY4LjU1OCAyMTAuODc1QzM3Ni4zMDggMTk3LjI1IDM4Ny44MTIgMTg5LjI1IDQwMC4wNDMgMTg5LjI1QzQxMi4zOTQgMTg5LjI1IDQyMy44OTggMTk3LjI1IDQzMS42NDggMjEwLjg3NUw0NDEuMDkzIDIyNy44NzVDNDQ1LjIxMSAyMzUuMjUgNDU2LjcxNCAyMzIgNDU1Ljk4OCAyMjMuMzc1QzQ1Mi43MTggMTgxLjI1IDQyMy43NzcgMTUyIDQwMC4wNDMgMTUyWk0yMzkuOTU3IDE1MkMyMTYuMjIyIDE1MiAxODcuMjgxIDE4MS4yNSAxODQuMjU0IDIyMy4zNzVDMTgzLjUyNyAyMzEuODc1IDE5NC45MSAyMzUuMjUgMTk5LjE0OCAyMjcuODc1TDIwOC41OTMgMjEwLjg3NUMyMTYuMzQzIDE5Ny4yNSAyMjcuODQ3IDE4OS4yNSAyNDAuMDc4IDE4OS4yNUMyNTIuNDI5IDE4OS4yNSAyNjMuOTMzIDE5Ny4yNSAyNzEuNTYyIDIxMC44NzVMMjgxLjEyOSAyMjcuODc1QzI4NS4yNDYgMjM1LjI1IDI5Ni43NSAyMzIgMjk2LjAyMyAyMjMuMzc1QzI5Mi43NTQgMTgxLjI1IDI2My44MTIgMTUyIDIzOS45NTcgMTUyWk05Ny45MzUgMjQ1LjAxNkM3Ni4zMzkgMjQ3Ljk4NCAyNy42OTMgMjU2LjQyMiAxMy41NTQgMjcwLjU2MkMtNC44MjUgMjg4Ljk0NSAtNC40NDIgMzE5LjAyIDE0LjI2OSAzMzcuNzNTNjMuMDU2IDM1Ni44MjQgODEuNDM1IDMzOC40NDVDOTUuNTc2IDMyNC4zMDUgMTAzLjkyNyAyNzUuNTcgMTA2Ljk4MiAyNTQuMDYyQzEwNy44MTQgMjQ4LjcxMSAxMDMuMjkxIDI0NC4xODggOTcuOTM1IDI0NS4wMTZaTTYyNi40NDUgMjcwLjU2MkM2MTIuMzA2IDI1Ni40MjIgNTYzLjY2IDI0Ny45ODQgNTQyLjA2NCAyNDUuMDE2QzUzNi43MDkgMjQ0LjE4OCA1MzIuMTg1IDI0OC43MTEgNTMzLjAxNyAyNTQuMDYyQzUzNi4wNzIgMjc1LjU3IDU0NC40MjMgMzI0LjMwNSA1NTguNTY0IDMzOC40NDVDNTc2Ljk0MyAzNTYuODI0IDYwNy4wMTkgMzU2LjQ0MSA2MjUuNzMgMzM3LjczUzY0NC44MjQgMjg4Ljk0NSA2MjYuNDQ1IDI3MC41NjJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceGrinTears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M320.25 16C201.713 16 103.482 102.008 84 215.008C87.227 214.504 89.898 213.859 93.271 213.395L96.986 212.918H99.457C111.119 212.918 122.156 217.992 129.742 226.844C137.328 235.699 140.65 247.41 138.916 258.566C127.814 336.719 110.578 354.781 104.584 360.789C143.518 440.766 225.33 496 320.25 496S496.982 440.766 535.918 360.789C529.926 354.789 512.687 336.727 501.645 258.973C499.852 247.41 503.174 235.699 510.76 226.844C518.344 217.992 529.383 212.918 541.043 212.918L544.506 213.016L546.674 213.312C550.256 213.805 553.088 214.484 556.502 215.016C537.023 102.012 438.793 16 320.25 16ZM400.293 152C424.027 152 452.969 181.25 456.238 223.375C456.965 232 445.461 235.25 441.344 227.875L431.898 210.875C424.148 197.25 412.645 189.25 400.293 189.25C388.063 189.25 376.559 197.25 368.809 210.875L359.363 227.875C355.246 235.25 343.742 231.875 344.469 223.375C347.496 181.25 376.438 152 400.293 152ZM240.207 152C264.063 152 293.004 181.25 296.273 223.375C297 232 285.496 235.25 281.379 227.875L271.813 210.875C264.184 197.25 252.68 189.25 240.328 189.25C228.098 189.25 216.594 197.25 208.844 210.875L199.398 227.875C195.16 235.25 183.777 231.875 184.504 223.375C187.531 181.25 216.473 152 240.207 152ZM320.25 432C259.703 432 185.715 393.75 176.391 338.75C174.453 326.75 185.836 317.125 197.098 320.75C227.371 330.5 272.297 336 320.25 336S413.129 330.5 443.402 320.75C454.785 317.125 465.926 326.875 464.109 338.75C454.785 393.75 380.797 432 320.25 432Z" />
            <path d="M400.043 152C376.187 152 347.246 181.25 344.218 223.375C343.492 231.875 354.996 235.25 359.113 227.875L368.558 210.875C376.308 197.25 387.812 189.25 400.043 189.25C412.394 189.25 423.898 197.25 431.648 210.875L441.093 227.875C445.211 235.25 456.714 232 455.988 223.375C452.718 181.25 423.777 152 400.043 152ZM239.957 152C216.222 152 187.281 181.25 184.254 223.375C183.527 231.875 194.91 235.25 199.148 227.875L208.593 210.875C216.343 197.25 227.847 189.25 240.078 189.25C252.429 189.25 263.933 197.25 271.562 210.875L281.129 227.875C285.246 235.25 296.75 232 296.023 223.375C292.754 181.25 263.812 152 239.957 152ZM97.935 245.016C76.339 247.984 27.693 256.422 13.554 270.562C-4.825 288.945 -4.442 319.02 14.269 337.73S63.056 356.824 81.435 338.445C95.576 324.305 103.927 275.57 106.982 254.062C107.814 248.711 103.291 244.188 97.935 245.016ZM626.445 270.562C612.306 256.422 563.66 247.984 542.064 245.016C536.709 244.188 532.185 248.711 533.017 254.062C536.072 275.57 544.423 324.305 558.564 338.445C576.943 356.824 607.019 356.441 625.73 337.73S644.824 288.945 626.445 270.562Z" />
        </Icon>
    </>
}