
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-tanakh` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-tanakh?s=duotone book-tanakh}
 * @preview ![book-tanakh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MiAzODRDMzY5LjY3NCAzODQgMzg0IDM5OC4zMjYgMzg0IDQxNkMzODQgNDMzLjY3MiAzNjkuNjc0IDQ0OCAzNTIgNDQ4SDMyVjM4NEgzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEzMS41IDE2OC42MjVMMTE0IDEzOS41SDE0OC44NzVMMTMxLjUgMTY4LjYyNVpNMTE0IDI0NC41SDE0OC44NzVMMTMxLjM3NSAyMTUuMzc1TDExNCAyNDQuNVpNMjA4IDI5Ni42MjVMMjI0Ljg3NSAyNjguNUgxOTEuMjVMMjA4IDI5Ni42MjVaTTIwOCA4Ny4zNzVMMTkxLjI1IDExNS41SDIyNC43NUwyMDggODcuMzc1Wk0yMzkuMTI1IDEzOS4zNzVIMTc2Ljg3NUwxNDUuMzc1IDE5MkwxNzYuODc1IDI0NC41SDIzOS4xMjVMMjcwLjYyNSAxOTJMMjM5LjEyNSAxMzkuMzc1Wk0zMDIgMTM5LjVIMjY3LjEyNUwyODQuNjI1IDE2OC42MjVMMzAyIDEzOS41Wk00NDggOTZWNDE2QzQ0OCA0NjkuMDIgNDA1LjAyIDUxMiAzNTIgNTEySDI0QzEwLjc0NiA1MTIgMCA1MDEuMjU0IDAgNDg4VjQ3MkMwIDQ1OC43NDQgMTAuNzQ2IDQ0OCAyNCA0NDhIMzUyQzM2OS42NzQgNDQ4IDM4NCA0MzMuNjcyIDM4NCA0MTZDMzg0IDM5OC4zMjYgMzY5LjY3NCAzODQgMzUyIDM4NEgyNEMxMC43NDYgMzg0IDAgMzczLjI1NCAwIDM2MFYzMkMwIDE0LjMyNiAxNC4zMjYgMCAzMiAwSDM1MkM0MDUuMDIgMCA0NDggNDIuOTggNDQ4IDk2Wk0zMjYuMzc1IDIzOC4zNzVMMjk4LjYyNSAxOTJMMzI2LjI1IDE0NS43NUMzMzAgMTM5LjUgMzMwIDEzMS44NzUgMzI2LjUgMTI1LjYyNUMzMjMgMTE5LjM3NSAzMTYuMzc1IDExNS41IDMwOS4xMjUgMTE1LjVIMjUyLjc1TDIyNSA2OS4xMjVDMjIxLjUgNjMuMTI1IDIxNSA1OS41IDIwOCA1OS41UzE5NC4zNzUgNjMuMjUgMTkwLjc1IDY5LjI1TDE2My4yNSAxMTUuNUgxMDYuODc1Qzk5LjYyNSAxMTUuMzc1IDkzIDExOS4yNSA4OS4zNzUgMTI1LjYyNUM4NS44NzUgMTMxLjc1IDg1Ljg3NSAxMzkuNSA4OS42MjUgMTQ1LjYyNUwxMTcuMzc1IDE5Mkw4OS43NSAyMzguMjVDODYuMTI1IDI0NC41IDg2IDI1Mi4xMjUgODkuNSAyNTguMzc1QzkzIDI2NC42MjUgOTkuNzUgMjY4LjUgMTA2Ljg3NSAyNjguNUgxNjMuMjVMMTkxIDMxNC44NzVDMTk0LjUgMzIwLjg3NSAyMDEgMzI0LjUgMjA4IDMyNC41QzIxNS4xMjUgMzI0LjUgMjIxLjYyNSAzMjAuNzUgMjI1LjI1IDMxNC43NUwyNTIuNzUgMjY4LjYyNUgzMDkuMTI1QzMxNi4zNzUgMjY4LjYyNSAzMjMgMjY0Ljc1IDMyNi42MjUgMjU4LjM3NUMzMzAuMTI1IDI1Mi4yNSAzMzAuMTI1IDI0NC41IDMyNi4zNzUgMjM4LjM3NVpNMjY3LjEyNSAyNDQuNUgzMDJMMjg0LjYyNSAyMTUuMzc1TDI2Ny4xMjUgMjQ0LjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookTanakh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M352 384C369.674 384 384 398.326 384 416C384 433.672 369.674 448 352 448H32V384H352Z" />
            <path d="M131.5 168.625L114 139.5H148.875L131.5 168.625ZM114 244.5H148.875L131.375 215.375L114 244.5ZM208 296.625L224.875 268.5H191.25L208 296.625ZM208 87.375L191.25 115.5H224.75L208 87.375ZM239.125 139.375H176.875L145.375 192L176.875 244.5H239.125L270.625 192L239.125 139.375ZM302 139.5H267.125L284.625 168.625L302 139.5ZM448 96V416C448 469.02 405.02 512 352 512H24C10.746 512 0 501.254 0 488V472C0 458.744 10.746 448 24 448H352C369.674 448 384 433.672 384 416C384 398.326 369.674 384 352 384H24C10.746 384 0 373.254 0 360V32C0 14.326 14.326 0 32 0H352C405.02 0 448 42.98 448 96ZM326.375 238.375L298.625 192L326.25 145.75C330 139.5 330 131.875 326.5 125.625C323 119.375 316.375 115.5 309.125 115.5H252.75L225 69.125C221.5 63.125 215 59.5 208 59.5S194.375 63.25 190.75 69.25L163.25 115.5H106.875C99.625 115.375 93 119.25 89.375 125.625C85.875 131.75 85.875 139.5 89.625 145.625L117.375 192L89.75 238.25C86.125 244.5 86 252.125 89.5 258.375C93 264.625 99.75 268.5 106.875 268.5H163.25L191 314.875C194.5 320.875 201 324.5 208 324.5C215.125 324.5 221.625 320.75 225.25 314.75L252.75 268.625H309.125C316.375 268.625 323 264.75 326.625 258.375C330.125 252.25 330.125 244.5 326.375 238.375ZM267.125 244.5H302L284.625 215.375L267.125 244.5Z" />
        </Icon>
    </>
}