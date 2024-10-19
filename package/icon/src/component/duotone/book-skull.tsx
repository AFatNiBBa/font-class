
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-skull` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=duotone book-skull}
 * @preview ![book-skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzODRWNDQ4SDk2Qzc4LjMyNiA0NDggNjQgNDMzLjY3MiA2NCA0MTZDNjQgMzk4LjMyNiA3OC4zMjYgMzg0IDk2IDM4NEg0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAxMjhDMjU2IDExOS4yNSAyNjMuMjUgMTEyIDI3MiAxMTJTMjg4IDExOS4yNSAyODggMTI4UzI4MC43NSAxNDQgMjcyIDE0NFMyNTYgMTM2Ljc1IDI1NiAxMjhaTTY0IDQxNkM2NCA0MzMuNjcyIDc4LjMyNiA0NDggOTYgNDQ4SDQyNEM0MzcuMjU0IDQ0OCA0NDggNDU4Ljc0NCA0NDggNDcyVjQ4OEM0NDggNTAxLjI1NCA0MzcuMjU0IDUxMiA0MjQgNTEySDk2QzQyLjk4IDUxMiAwIDQ2OS4wMiAwIDQxNlY5NkMwIDQyLjk4IDQyLjk4IDAgOTYgMEg0MTZDNDMzLjY3NCAwIDQ0OCAxNC4zMjYgNDQ4IDMyVjM2MEM0NDggMzczLjI1NCA0MzcuMjU0IDM4NCA0MjQgMzg0SDk2Qzc4LjMyNiAzODQgNjQgMzk4LjMyNiA2NCA0MTZaTTE2MCAxMjhDMTYwIDE0OC44NzUgMTcyLjc1IDE2Ny4yNSAxOTIgMTc4Ljg3NVYxOTJDMTkyIDIwMC43NSAxOTkuMjUgMjA4IDIwOCAyMDhIMjcyQzI4MC43NSAyMDggMjg4IDIwMC43NSAyODggMTkyVjE3OC44NzVDMzA3LjI1IDE2Ny4yNSAzMjAgMTQ4Ljg3NSAzMjAgMTI4QzMyMCA5Mi43NSAyODQuMjUgNjQgMjQwIDY0UzE2MCA5Mi43NSAxNjAgMTI4Wk0xMjkgMjQxLjc1TDE5OS41IDI3Mi4xMjVMMTI5LjEyNSAzMDIuMjVDMTI1IDMwMy44NzUgMTIzLjI1IDMwOC42MjUgMTI0Ljg3NSAzMTIuNzVMMTMxLjI1IDMyNy4zNzVDMTMyLjg3NSAzMzEuNSAxMzcuNjI1IDMzMy4yNSAxNDEuNzUgMzMxLjYyNUwyNDAgMjg5LjM3NUwzMzguMjUgMzMxLjVDMzQyLjM3NSAzMzMuMjUgMzQ3LjEyNSAzMzEuMzc1IDM0OC43NSAzMjcuMjVMMzU1LjEyNSAzMTIuNjI1QzM1Ni43NSAzMDguNSAzNTUgMzAzLjc1IDM1MC44NzUgMzAyLjEyNUwyODAuNjI1IDI3MkwzNTAuODc1IDI0MS43NUMzNTUgMjQwLjEyNSAzNTYuNzUgMjM1LjM3NSAzNTUuMTI1IDIzMS4yNUwzNDguNzUgMjE2LjYyNUMzNDcuMTI1IDIxMi41IDM0Mi4zNzUgMjEwLjc1IDMzOC4yNSAyMTIuMzc1TDIzOS44NzUgMjU0LjVMMTQxLjYyNSAyMTIuMzc1QzEzNy41IDIxMC43NSAxMzIuNzUgMjEyLjUgMTMxLjEyNSAyMTYuNjI1TDEyNC43NSAyMzEuMjVDMTIzLjEyNSAyMzUuMzc1IDEyNC44NzUgMjQwLjEyNSAxMjkgMjQxLjc1Wk0yMDggMTQ0QzIxNi43NSAxNDQgMjI0IDEzNi43NSAyMjQgMTI4UzIxNi43NSAxMTIgMjA4IDExMlMxOTIgMTE5LjI1IDE5MiAxMjhTMTk5LjI1IDE0NCAyMDggMTQ0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookSkull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M416 384V448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384H416Z" />
            <path d="M256 128C256 119.25 263.25 112 272 112S288 119.25 288 128S280.75 144 272 144S256 136.75 256 128ZM64 416C64 433.672 78.326 448 96 448H424C437.254 448 448 458.744 448 472V488C448 501.254 437.254 512 424 512H96C42.98 512 0 469.02 0 416V96C0 42.98 42.98 0 96 0H416C433.674 0 448 14.326 448 32V360C448 373.254 437.254 384 424 384H96C78.326 384 64 398.326 64 416ZM160 128C160 148.875 172.75 167.25 192 178.875V192C192 200.75 199.25 208 208 208H272C280.75 208 288 200.75 288 192V178.875C307.25 167.25 320 148.875 320 128C320 92.75 284.25 64 240 64S160 92.75 160 128ZM129 241.75L199.5 272.125L129.125 302.25C125 303.875 123.25 308.625 124.875 312.75L131.25 327.375C132.875 331.5 137.625 333.25 141.75 331.625L240 289.375L338.25 331.5C342.375 333.25 347.125 331.375 348.75 327.25L355.125 312.625C356.75 308.5 355 303.75 350.875 302.125L280.625 272L350.875 241.75C355 240.125 356.75 235.375 355.125 231.25L348.75 216.625C347.125 212.5 342.375 210.75 338.25 212.375L239.875 254.5L141.625 212.375C137.5 210.75 132.75 212.5 131.125 216.625L124.75 231.25C123.125 235.375 124.875 240.125 129 241.75ZM208 144C216.75 144 224 136.75 224 128S216.75 112 208 112S192 119.25 192 128S199.25 144 208 144Z" />
        </Icon>
    </>
}