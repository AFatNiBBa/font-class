
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-xmark?s=duotone comment-xmark}
 * @preview ![comment-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMxLjk5OSA0NzguMjUgNC43NSA0ODAgOCA0ODBDNzQuMjUgNDgwIDEyNCA0NDguMjUgMTQ4LjYyNSA0MjguNjI1QzE4MS4yNSA0NDAuODc1IDIxNy42MjUgNDQ4IDI1NiA0NDhDMzk3LjM3NSA0NDggNTEyIDM1NC44NzUgNTEyIDI0MFMzOTcuMzc1IDMyIDI1NiAzMlpNMzM2Ljk3MyAyODcuMDMxQzM0Ni4zNDggMjk2LjQwNiAzNDYuMzQ4IDMxMS41OTQgMzM2Ljk3MyAzMjAuOTY5QzMyNy41OTIgMzMwLjM0OCAzMTIuNDA4IDMzMC4zNCAzMDMuMDM1IDMyMC45NjlMMjU2LjAwNCAyNzMuOTM4TDIwOC45NzMgMzIwLjk2OUMxOTkuNTkyIDMzMC4zNDggMTg0LjQwOCAzMzAuMzQgMTc1LjAzNSAzMjAuOTY5QzE2NS42NiAzMTEuNTk0IDE2NS42NiAyOTYuNDA2IDE3NS4wMzUgMjg3LjAzMUwyMjIuMDY2IDI0MEwxNzUuMDM1IDE5Mi45NjlDMTY1LjY2IDE4My41OTQgMTY1LjY2IDE2OC40MDYgMTc1LjAzNSAxNTkuMDMxUzE5OS41OTggMTQ5LjY1NiAyMDguOTczIDE1OS4wMzFMMjU2LjAwNCAyMDYuMDYyTDMwMy4wMzUgMTU5LjAzMUMzMTIuNDEgMTQ5LjY1NiAzMjcuNTk4IDE0OS42NTYgMzM2Ljk3MyAxNTkuMDMxUzM0Ni4zNDggMTgzLjU5NCAzMzYuOTczIDE5Mi45NjlMMjg5Ljk0MSAyNDBMMzM2Ljk3MyAyODcuMDMxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNzUuMDMxIDMyMC45NjlDMTg0LjQwNCAzMzAuMzQgMTk5LjU4OCAzMzAuMzQ4IDIwOC45NjkgMzIwLjk2OUwyNTYgMjczLjkzN0wzMDMuMDMxIDMyMC45NjlDMzEyLjQwNCAzMzAuMzQgMzI3LjU4OCAzMzAuMzQ4IDMzNi45NjkgMzIwLjk2OUMzNDYuMzQ0IDMxMS41OTQgMzQ2LjM0NCAyOTYuNDA2IDMzNi45NjkgMjg3LjAzMUwyODkuOTM3IDI0MEwzMzYuOTY5IDE5Mi45NjlDMzQ2LjM0NCAxODMuNTk0IDM0Ni4zNDQgMTY4LjQwNiAzMzYuOTY5IDE1OS4wMzFTMzEyLjQwNiAxNDkuNjU2IDMwMy4wMzEgMTU5LjAzMUwyNTYgMjA2LjA2MkwyMDguOTY5IDE1OS4wMzFDMTk5LjU5NCAxNDkuNjU2IDE4NC40MDYgMTQ5LjY1NiAxNzUuMDMxIDE1OS4wMzFTMTY1LjY1NiAxODMuNTk0IDE3NS4wMzEgMTkyLjk2OUwyMjIuMDYzIDI0MEwxNzUuMDMxIDI4Ny4wMzFDMTY1LjY1NiAyOTYuNDA2IDE2NS42NTYgMzExLjU5NCAxNzUuMDMxIDMyMC45NjlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336.973 287.031C346.348 296.406 346.348 311.594 336.973 320.969C327.592 330.348 312.408 330.34 303.035 320.969L256.004 273.938L208.973 320.969C199.592 330.348 184.408 330.34 175.035 320.969C165.66 311.594 165.66 296.406 175.035 287.031L222.066 240L175.035 192.969C165.66 183.594 165.66 168.406 175.035 159.031S199.598 149.656 208.973 159.031L256.004 206.062L303.035 159.031C312.41 149.656 327.598 149.656 336.973 159.031S346.348 183.594 336.973 192.969L289.941 240L336.973 287.031Z" />
            <path d="M175.031 320.969C184.404 330.34 199.588 330.348 208.969 320.969L256 273.937L303.031 320.969C312.404 330.34 327.588 330.348 336.969 320.969C346.344 311.594 346.344 296.406 336.969 287.031L289.937 240L336.969 192.969C346.344 183.594 346.344 168.406 336.969 159.031S312.406 149.656 303.031 159.031L256 206.062L208.969 159.031C199.594 149.656 184.406 149.656 175.031 159.031S165.656 183.594 175.031 192.969L222.063 240L175.031 287.031C165.656 296.406 165.656 311.594 175.031 320.969Z" />
        </Icon>
    </>
}