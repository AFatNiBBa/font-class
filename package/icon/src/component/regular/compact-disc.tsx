
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=regular compact-disc}
 * @preview ![compact-disc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0yMjcuNTMxIDEzMS4xNzJDMjM2LjE0MSAxMjkuMjE5IDI0MS41NjMgMTIwLjY1NiAyMzkuNjA5IDExMi4wMzFDMjM3LjY1NiAxMDMuNDIyIDIyOS4wNjMgOTguMDc4IDIyMC40NjkgOTkuOTUzQzE2MC43NjYgMTEzLjQ1MyAxMTMuNDUzIDE2MC43NjYgOTkuOTUzIDIyMC40NjlDOTggMjI5LjA5NCAxMDMuNDIyIDIzNy42NTYgMTEyLjAzMSAyMzkuNjA5QzExMy4yMTkgMjM5Ljg3NSAxMTQuNDA2IDI0MCAxMTUuNTc4IDI0MEMxMjIuODkxIDI0MCAxMjkuNDg0IDIzNC45NTMgMTMxLjE3MiAyMjcuNTMxQzE0MS45NjkgMTc5Ljc4MSAxNzkuNzgxIDE0MS45NjkgMjI3LjUzMSAxMzEuMTcyWk0yNTYgMTYwQzIwMi45MjQgMTYwIDE2MCAyMDIuOTIyIDE2MCAyNTZDMTYwIDMwOS4wNzYgMjAyLjkyNCAzNTIgMjU2IDM1MlMzNTIgMzA5LjA3NiAzNTIgMjU2QzM1MiAyMDIuOTIyIDMwOS4wNzYgMTYwIDI1NiAxNjBaTTI1NiAyODBDMjQyLjc1IDI4MCAyMzIgMjY5LjI1IDIzMiAyNTZTMjQyLjc1IDIzMiAyNTYgMjMyUzI4MCAyNDIuNzUgMjgwIDI1NlMyNjkuMjUgMjgwIDI1NiAyODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CompactDisc(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM227.531 131.172C236.141 129.219 241.563 120.656 239.609 112.031C237.656 103.422 229.063 98.078 220.469 99.953C160.766 113.453 113.453 160.766 99.953 220.469C98 229.094 103.422 237.656 112.031 239.609C113.219 239.875 114.406 240 115.578 240C122.891 240 129.484 234.953 131.172 227.531C141.969 179.781 179.781 141.969 227.531 131.172ZM256 160C202.924 160 160 202.922 160 256C160 309.076 202.924 352 256 352S352 309.076 352 256C352 202.922 309.076 160 256 160ZM256 280C242.75 280 232 269.25 232 256S242.75 232 256 232S280 242.75 280 256S269.25 280 256 280Z" />
        </Icon>
    </>
}