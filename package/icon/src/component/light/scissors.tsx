
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=light scissors}
 * @preview ![scissors](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTQuMzA5IDI5MS43NjZDMzUxLjMwOSAyODkuMjIzIDM0Ny42NDcgMjg3Ljk4MSAzNDQuMDAzIDI4Ny45ODFDMzM3LjI2OSAyODcuOTgxIDMyNy45OTIgMjkzLjMxMyAzMjcuOTkyIDMwMy45ODJDMzI3Ljk5MiAzMDguNTQyIDMyOS45MjkgMzEzLjA3IDMzMy42ODQgMzE2LjIzNEw0ODUuNjgzIDQ0NC4yMzRDNDg4LjY4MyA0NDYuNzY2IDQ5Mi4zMzkgNDQ4IDQ5NS45OTUgNDQ4QzUwMi43NTEgNDQ4IDUxMiA0NDIuNjg2IDUxMiA0MzIuMDE4QzUxMiA0MjcuNDU4IDUxMC4wNjMgNDIyLjkzIDUwNi4zMDggNDE5Ljc2NkwzNTQuMzA5IDI5MS43NjZaTTUwNi4zMDggOTIuMjM0QzUxMC4wNjMgODkuMDcgNTEyIDg0LjU0MiA1MTIgNzkuOTgyQzUxMiA2OS4yNTcgNTAyLjgxMSA2NC4wMTYgNDk1Ljk3OSA2NC4wMTZDNDkyLjMzOCA2NC4wMTYgNDg4LjY4MSA2NS4yNDcgNDg1LjY4MyA2Ny43NjZMMjg2Ljk5NyAyMzUuMDgyTDIwOC4xMDkgMTY4LjY1QzIxNy45NjEgMTUxLjk3NyAyMjMuOTk4IDEzMi43NyAyMjMuOTk4IDExMkMyMjMuOTk4IDUwLjE0NSAxNzMuODU0IDAgMTExLjk5OSAwUzAgNTAuMTQ1IDAgMTEyUzUwLjE0NCAyMjQgMTExLjk5OSAyMjRDMTQxLjUxNCAyMjQgMTY4LjE1OSAyMTIuMzUyIDE4OC4xNjYgMTkzLjY5MUwyNjIuMTU4IDI1NkwxODguMTY2IDMxOC4zMDlDMTY4LjE1OSAyOTkuNjQ4IDE0MS41MTQgMjg4IDExMS45OTkgMjg4QzUwLjE0NCAyODggMCAzMzguMTQ1IDAgNDAwUzUwLjE0NCA1MTIgMTExLjk5OSA1MTJTMjIzLjk5OCA0NjEuODU1IDIyMy45OTggNDAwQzIyMy45OTggMzc5LjIzIDIxNy45NjEgMzYwLjAyMyAyMDguMTA5IDM0My4zNUw1MDYuMzA4IDkyLjIzNFpNMTExLjk5OSAxOTJDNjcuODg4IDE5MiAzMiAxNTYuMTExIDMyIDExMlM2Ny44ODggMzIgMTExLjk5OSAzMlMxOTEuOTk4IDY3Ljg4OSAxOTEuOTk4IDExMlMxNTYuMTEgMTkyIDExMS45OTkgMTkyWk0xMTEuOTk5IDQ4MEM2Ny44ODggNDgwIDMyIDQ0NC4xMTEgMzIgNDAwUzY3Ljg4OCAzMjAgMTExLjk5OSAzMjBTMTkxLjk5OCAzNTUuODg5IDE5MS45OTggNDAwUzE1Ni4xMSA0ODAgMTExLjk5OSA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M354.309 291.766C351.309 289.223 347.647 287.981 344.003 287.981C337.269 287.981 327.992 293.313 327.992 303.982C327.992 308.542 329.929 313.07 333.684 316.234L485.683 444.234C488.683 446.766 492.339 448 495.995 448C502.751 448 512 442.686 512 432.018C512 427.458 510.063 422.93 506.308 419.766L354.309 291.766ZM506.308 92.234C510.063 89.07 512 84.542 512 79.982C512 69.257 502.811 64.016 495.979 64.016C492.338 64.016 488.681 65.247 485.683 67.766L286.997 235.082L208.109 168.65C217.961 151.977 223.998 132.77 223.998 112C223.998 50.145 173.854 0 111.999 0S0 50.145 0 112S50.144 224 111.999 224C141.514 224 168.159 212.352 188.166 193.691L262.158 256L188.166 318.309C168.159 299.648 141.514 288 111.999 288C50.144 288 0 338.145 0 400S50.144 512 111.999 512S223.998 461.855 223.998 400C223.998 379.23 217.961 360.023 208.109 343.35L506.308 92.234ZM111.999 192C67.888 192 32 156.111 32 112S67.888 32 111.999 32S191.998 67.889 191.998 112S156.11 192 111.999 192ZM111.999 480C67.888 480 32 444.111 32 400S67.888 320 111.999 320S191.998 355.889 191.998 400S156.11 480 111.999 480Z" />
    </Icon>
);

export default Scissors;