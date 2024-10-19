
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=duotone file-xmark}
 * @preview ![file-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OTIgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkyIDUxMiA0OCA1MTJIMzM2QzM2Mi41MDggNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMjcyLjk2OSAzNjcuMDMxQzI4Mi4zNDQgMzc2LjQwNiAyODIuMzQ0IDM5MS41OTQgMjcyLjk2OSA0MDAuOTY5QzI2My41ODYgNDEwLjM0OCAyNDguNDA2IDQxMC4zNCAyMzkuMDMxIDQwMC45NjlMMTkyIDM1My45MzhMMTQ0Ljk2OSA0MDAuOTY5QzEzNS41ODYgNDEwLjM0OCAxMjAuNDA2IDQxMC4zNCAxMTEuMDMxIDQwMC45NjlDMTAxLjY1NiAzOTEuNTk0IDEwMS42NTYgMzc2LjQwNiAxMTEuMDMxIDM2Ny4wMzFMMTU4LjA2MiAzMjBMMTExLjAzMSAyNzIuOTY5QzEwMS42NTYgMjYzLjU5NCAxMDEuNjU2IDI0OC40MDYgMTExLjAzMSAyMzkuMDMxUzEzNS41OTQgMjI5LjY1NiAxNDQuOTY5IDIzOS4wMzFMMTkyIDI4Ni4wNjJMMjM5LjAzMSAyMzkuMDMxQzI0OC40MDYgMjI5LjY1NiAyNjMuNTk0IDIyOS42NTYgMjcyLjk2OSAyMzkuMDMxUzI4Mi4zNDQgMjYzLjU5NCAyNzIuOTY5IDI3Mi45NjlMMjI1LjkzOCAzMjBMMjcyLjk2OSAzNjcuMDMxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yNzIuOTY5IDIzOS4wMzFDMjYzLjU5NCAyMjkuNjU2IDI0OC40MDYgMjI5LjY1NiAyMzkuMDMxIDIzOS4wMzFMMTkyIDI4Ni4wNjJMMTQ0Ljk2OSAyMzkuMDMxQzEzNS41OTQgMjI5LjY1NiAxMjAuNDA2IDIyOS42NTYgMTExLjAzMSAyMzkuMDMxUzEwMS42NTYgMjYzLjU5NCAxMTEuMDMxIDI3Mi45NjlMMTU4LjA2MyAzMjBMMTExLjAzMSAzNjcuMDMxQzEwMS42NTYgMzc2LjQwNiAxMDEuNjU2IDM5MS41OTQgMTExLjAzMSA0MDAuOTY5QzEyMC40MDYgNDEwLjM0IDEzNS41ODYgNDEwLjM0OCAxNDQuOTY5IDQwMC45NjlMMTkyIDM1My45MzhMMjM5LjAzMSA0MDAuOTY5QzI0OC40MDYgNDEwLjM0IDI2My41ODYgNDEwLjM0OCAyNzIuOTY5IDQwMC45NjlDMjgyLjM0NCAzOTEuNTk0IDI4Mi4zNDQgMzc2LjQwNiAyNzIuOTY5IDM2Ny4wMzFMMjI1LjkzOCAzMjBMMjcyLjk2OSAyNzIuOTY5QzI4Mi4zNDQgMjYzLjU5NCAyODIuMzQ0IDI0OC40MDYgMjcyLjk2OSAyMzkuMDMxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M256 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V128H256ZM272.969 367.031C282.344 376.406 282.344 391.594 272.969 400.969C263.586 410.348 248.406 410.34 239.031 400.969L192 353.938L144.969 400.969C135.586 410.348 120.406 410.34 111.031 400.969C101.656 391.594 101.656 376.406 111.031 367.031L158.062 320L111.031 272.969C101.656 263.594 101.656 248.406 111.031 239.031S135.594 229.656 144.969 239.031L192 286.062L239.031 239.031C248.406 229.656 263.594 229.656 272.969 239.031S282.344 263.594 272.969 272.969L225.938 320L272.969 367.031Z" />
            <path d="M256 0V128H384L256 0ZM272.969 239.031C263.594 229.656 248.406 229.656 239.031 239.031L192 286.062L144.969 239.031C135.594 229.656 120.406 229.656 111.031 239.031S101.656 263.594 111.031 272.969L158.063 320L111.031 367.031C101.656 376.406 101.656 391.594 111.031 400.969C120.406 410.34 135.586 410.348 144.969 400.969L192 353.938L239.031 400.969C248.406 410.34 263.586 410.348 272.969 400.969C282.344 391.594 282.344 376.406 272.969 367.031L225.938 320L272.969 272.969C282.344 263.594 282.344 248.406 272.969 239.031Z" />
        </Icon>
    </>
}