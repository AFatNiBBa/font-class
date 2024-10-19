
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-xmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-xmark?s=solid comment-xmark}
 * @preview ![comment-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTE0LjYyNSAzMiAwIDEyNS4xMjUgMCAyNDBDMCAyODkuNjI1IDIxLjM3NSAzMzUgNTcgMzcwLjc1QzQ0LjUgNDIxLjEyNSAyLjc1IDQ2NiAyLjI1IDQ2Ni41QzAgNDY4Ljc1IC0wLjYyNSA0NzIuMjUgMC43NSA0NzUuMjVDMS45OTkgNDc4LjI1IDQuNzUgNDgwIDggNDgwQzc0LjI1IDQ4MCAxMjQgNDQ4LjI1IDE0OC42MjUgNDI4LjYyNUMxODEuMjUgNDQwLjg3NSAyMTcuNjI1IDQ0OCAyNTYgNDQ4QzM5Ny4zNzUgNDQ4IDUxMiAzNTQuODc1IDUxMiAyNDBTMzk3LjM3NSAzMiAyNTYgMzJaTTMzNi45NzMgMjg3LjAzMUMzNDYuMzQ4IDI5Ni40MDYgMzQ2LjM0OCAzMTEuNTk0IDMzNi45NzMgMzIwLjk2OUMzMjcuNTkyIDMzMC4zNDggMzEyLjQwOCAzMzAuMzQgMzAzLjAzNSAzMjAuOTY5TDI1Ni4wMDQgMjczLjkzOEwyMDguOTczIDMyMC45NjlDMTk5LjU5MiAzMzAuMzQ4IDE4NC40MDggMzMwLjM0IDE3NS4wMzUgMzIwLjk2OUMxNjUuNjYgMzExLjU5NCAxNjUuNjYgMjk2LjQwNiAxNzUuMDM1IDI4Ny4wMzFMMjIyLjA2NiAyNDBMMTc1LjAzNSAxOTIuOTY5QzE2NS42NiAxODMuNTk0IDE2NS42NiAxNjguNDA2IDE3NS4wMzUgMTU5LjAzMVMxOTkuNTk4IDE0OS42NTYgMjA4Ljk3MyAxNTkuMDMxTDI1Ni4wMDQgMjA2LjA2MkwzMDMuMDM1IDE1OS4wMzFDMzEyLjQxIDE0OS42NTYgMzI3LjU5OCAxNDkuNjU2IDMzNi45NzMgMTU5LjAzMVMzNDYuMzQ4IDE4My41OTQgMzM2Ljk3MyAxOTIuOTY5TDI4OS45NDEgMjQwTDMzNi45NzMgMjg3LjAzMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336.973 287.031C346.348 296.406 346.348 311.594 336.973 320.969C327.592 330.348 312.408 330.34 303.035 320.969L256.004 273.938L208.973 320.969C199.592 330.348 184.408 330.34 175.035 320.969C165.66 311.594 165.66 296.406 175.035 287.031L222.066 240L175.035 192.969C165.66 183.594 165.66 168.406 175.035 159.031S199.598 149.656 208.973 159.031L256.004 206.062L303.035 159.031C312.41 149.656 327.598 149.656 336.973 159.031S346.348 183.594 336.973 192.969L289.941 240L336.973 287.031Z" />
        </Icon>
    </>
}