
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-code` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-code?s=duotone comment-code}
 * @preview ![comment-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMxLjk5OSA0NzguMjUgNC43NSA0ODAgOCA0ODBDNzQuMjUgNDgwIDEyNCA0NDguMjUgMTQ4LjYyNSA0MjguNjI1QzE4MS4yNSA0NDAuODc1IDIxNy42MjUgNDQ4IDI1NiA0NDhDMzk3LjM3NSA0NDggNTEyIDM1NC44NzUgNTEyIDI0MFMzOTcuMzc1IDMyIDI1NiAzMlpNMjE2Ljk2OSAyODcuMDMxQzIyNi4zNDQgMjk2LjQwNiAyMjYuMzQ0IDMxMS41OTQgMjE2Ljk2OSAzMjAuOTY5QzIxMi4yODEgMzI1LjY1NiAyMDYuMTQxIDMyOCAyMDAgMzI4UzE4Ny43MTkgMzI1LjY1NiAxODMuMDMxIDMyMC45NjlMMTE5LjAzMSAyNTYuOTY5QzEwOS42NTYgMjQ3LjU5NCAxMDkuNjU2IDIzMi40MDYgMTE5LjAzMSAyMjMuMDMxTDE4My4wMzEgMTU5LjAzMUMxOTIuNDA2IDE0OS42NTYgMjA3LjU5NCAxNDkuNjU2IDIxNi45NjkgMTU5LjAzMVMyMjYuMzQ0IDE4My41OTQgMjE2Ljk2OSAxOTIuOTY5TDE2OS45MzggMjQwTDIxNi45NjkgMjg3LjAzMVpNMzkyLjk2OSAyNTYuOTY5TDMyOC45NjkgMzIwLjk2OUMzMjQuMjgxIDMyNS42NTYgMzE4LjE0MSAzMjggMzEyIDMyOFMyOTkuNzE5IDMyNS42NTYgMjk1LjAzMSAzMjAuOTY5QzI4NS42NTYgMzExLjU5NCAyODUuNjU2IDI5Ni40MDYgMjk1LjAzMSAyODcuMDMxTDM0Mi4wNjIgMjQwTDI5NS4wMzEgMTkyLjk2OUMyODUuNjU2IDE4My41OTQgMjg1LjY1NiAxNjguNDA2IDI5NS4wMzEgMTU5LjAzMVMzMTkuNTk0IDE0OS42NTYgMzI4Ljk2OSAxNTkuMDMxTDM5Mi45NjkgMjIzLjAzMUM0MDIuMzQ0IDIzMi40MDYgNDAyLjM0NCAyNDcuNTk0IDM5Mi45NjkgMjU2Ljk2OVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjE2Ljk2OSAxNTkuMDMxQzIwNy41OTQgMTQ5LjY1NiAxOTIuNDA2IDE0OS42NTYgMTgzLjAzMSAxNTkuMDMxTDExOS4wMzEgMjIzLjAzMUMxMDkuNjU2IDIzMi40MDYgMTA5LjY1NiAyNDcuNTk0IDExOS4wMzEgMjU2Ljk2OUwxODMuMDMxIDMyMC45NjlDMTg3LjcxOSAzMjUuNjU2IDE5My44NTkgMzI4IDIwMCAzMjhTMjEyLjI4MSAzMjUuNjU2IDIxNi45NjkgMzIwLjk2OUMyMjYuMzQ0IDMxMS41OTQgMjI2LjM0NCAyOTYuNDA2IDIxNi45NjkgMjg3LjAzMUwxNjkuOTM4IDI0MEwyMTYuOTY5IDE5Mi45NjlDMjI2LjM0NCAxODMuNTk0IDIyNi4zNDQgMTY4LjQwNiAyMTYuOTY5IDE1OS4wMzFaTTM5Mi45NjkgMjIzLjAzMUwzMjguOTY5IDE1OS4wMzFDMzE5LjU5NCAxNDkuNjU2IDMwNC40MDYgMTQ5LjY1NiAyOTUuMDMxIDE1OS4wMzFTMjg1LjY1NiAxODMuNTk0IDI5NS4wMzEgMTkyLjk2OUwzNDIuMDYzIDI0MEwyOTUuMDMxIDI4Ny4wMzFDMjg1LjY1NiAyOTYuNDA2IDI4NS42NTYgMzExLjU5NCAyOTUuMDMxIDMyMC45NjlDMjk5LjcxOSAzMjUuNjU2IDMwNS44NTkgMzI4IDMxMiAzMjhTMzI0LjI4MSAzMjUuNjU2IDMyOC45NjkgMzIwLjk2OUwzOTIuOTY5IDI1Ni45NjlDNDAyLjM0NCAyNDcuNTk0IDQwMi4zNDQgMjMyLjQwNiAzOTIuOTY5IDIyMy4wMzFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentCode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM216.969 287.031C226.344 296.406 226.344 311.594 216.969 320.969C212.281 325.656 206.141 328 200 328S187.719 325.656 183.031 320.969L119.031 256.969C109.656 247.594 109.656 232.406 119.031 223.031L183.031 159.031C192.406 149.656 207.594 149.656 216.969 159.031S226.344 183.594 216.969 192.969L169.938 240L216.969 287.031ZM392.969 256.969L328.969 320.969C324.281 325.656 318.141 328 312 328S299.719 325.656 295.031 320.969C285.656 311.594 285.656 296.406 295.031 287.031L342.062 240L295.031 192.969C285.656 183.594 285.656 168.406 295.031 159.031S319.594 149.656 328.969 159.031L392.969 223.031C402.344 232.406 402.344 247.594 392.969 256.969Z" />
            <path d="M216.969 159.031C207.594 149.656 192.406 149.656 183.031 159.031L119.031 223.031C109.656 232.406 109.656 247.594 119.031 256.969L183.031 320.969C187.719 325.656 193.859 328 200 328S212.281 325.656 216.969 320.969C226.344 311.594 226.344 296.406 216.969 287.031L169.938 240L216.969 192.969C226.344 183.594 226.344 168.406 216.969 159.031ZM392.969 223.031L328.969 159.031C319.594 149.656 304.406 149.656 295.031 159.031S285.656 183.594 295.031 192.969L342.063 240L295.031 287.031C285.656 296.406 285.656 311.594 295.031 320.969C299.719 325.656 305.859 328 312 328S324.281 325.656 328.969 320.969L392.969 256.969C402.344 247.594 402.344 232.406 392.969 223.031Z" />
        </Icon>
    </>
}