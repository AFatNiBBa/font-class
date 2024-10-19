
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-music` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-music?s=duotone comment-music}
 * @preview ![comment-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNTk0IDMyIDAgMTI1LjA5NCAwIDI0MEMwIDI4OS41OTQgMjEuNDA2IDMzNSA1NyAzNzAuNzAzQzQ0LjUgNDIxLjA5NCAyLjY4OCA0NjYgMi4xODggNDY2LjVDMCA0NjguNzk3IC0wLjU5NCA0NzIuMjAzIDAuNjg4IDQ3NS4yMDNDMiA0NzguMjAzIDQuODEyIDQ4MCA4IDQ4MEM3NC4zMTIgNDgwIDEyNCA0NDguMjAzIDE0OC41OTQgNDI4LjU5NEMxODEuMzEyIDQ0MC45MDYgMjE3LjU5NCA0NDggMjU2IDQ0OEMzOTcuNDA2IDQ0OCA1MTIgMzU0LjkwNiA1MTIgMjQwUzM5Ny40MDYgMzIgMjU2IDMyWk0zNTIgMjg3Ljk1OUMzNTIgMzA1LjU4NCAzMzAuNSAzMTkuOTU5IDMwNCAzMTkuOTU5UzI1NiAzMDUuNTg0IDI1NiAyODcuOTU5UzI3Ny41IDI1NS45NTkgMzA0IDI1NS45NTlDMzA5LjM3NSAyNTUuOTU5IDMxNC43NSAyNTYuNzA5IDMyMCAyNTcuOTU5VjE4MS41ODRMMjI0IDIxOS4wODRWMzE5Ljk1OUMyMjQgMzM3LjU4NCAyMDIuNSAzNTEuOTU5IDE3NiAzNTEuOTU5UzEyOCAzMzcuNTg0IDEyOCAzMTkuOTU5UzE0OS41IDI4Ny45NTkgMTc2IDI4Ny45NTlDMTgxLjM3NSAyODcuOTU5IDE4Ni43NSAyODguNzA5IDE5MiAyODkuOTU5VjE3NS4yMDlDMTkyIDE2OC4yMDkgMTk2LjUgMTYyLjA4NCAyMDMuMjUgMTU5Ljk1OUwzMzEuMjUgMTEyLjcwOUMzMzYgMTExLjIwOSAzNDEuMzc1IDExMi4wODQgMzQ1LjUgMTE1LjA4NFMzNTIgMTIyLjgzNCAzNTIgMTI3Ljk1OVYyODcuOTU5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIgMjg3Ljk1OUMzNTIgMzA1LjU4NCAzMzAuNSAzMTkuOTU5IDMwNCAzMTkuOTU5UzI1NiAzMDUuNTg0IDI1NiAyODcuOTU5UzI3Ny41IDI1NS45NTkgMzA0IDI1NS45NTlDMzA5LjM3NSAyNTUuOTU5IDMxNC43NSAyNTYuNzA5IDMyMCAyNTcuOTU5VjE4MS41ODRMMjI0IDIxOS4wODRWMzE5Ljk1OUMyMjQgMzM3LjU4NCAyMDIuNSAzNTEuOTU5IDE3NiAzNTEuOTU5UzEyOCAzMzcuNTg0IDEyOCAzMTkuOTU5UzE0OS41IDI4Ny45NTkgMTc2IDI4Ny45NTlDMTgxLjM3NSAyODcuOTU5IDE4Ni43NSAyODguNzA5IDE5MiAyODkuOTU5VjE3NS4yMDlDMTkyIDE2OC4yMDkgMTk2LjUgMTYyLjA4NCAyMDMuMjUgMTU5Ljk1OUwzMzEuMjUgMTEyLjcwOUMzMzYgMTExLjIwOSAzNDEuMzc1IDExMi4wODQgMzQ1LjUgMTE1LjA4NFMzNTIgMTIyLjgzNCAzNTIgMTI3Ljk1OVYyODcuOTU5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const CommentMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C2 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM352 287.959C352 305.584 330.5 319.959 304 319.959S256 305.584 256 287.959S277.5 255.959 304 255.959C309.375 255.959 314.75 256.709 320 257.959V181.584L224 219.084V319.959C224 337.584 202.5 351.959 176 351.959S128 337.584 128 319.959S149.5 287.959 176 287.959C181.375 287.959 186.75 288.709 192 289.959V175.209C192 168.209 196.5 162.084 203.25 159.959L331.25 112.709C336 111.209 341.375 112.084 345.5 115.084S352 122.834 352 127.959V287.959Z" />
            <path d="M352 287.959C352 305.584 330.5 319.959 304 319.959S256 305.584 256 287.959S277.5 255.959 304 255.959C309.375 255.959 314.75 256.709 320 257.959V181.584L224 219.084V319.959C224 337.584 202.5 351.959 176 351.959S128 337.584 128 319.959S149.5 287.959 176 287.959C181.375 287.959 186.75 288.709 192 289.959V175.209C192 168.209 196.5 162.084 203.25 159.959L331.25 112.709C336 111.209 341.375 112.084 345.5 115.084S352 122.834 352 127.959V287.959Z" />
    </Icon>
);

export default CommentMusic;