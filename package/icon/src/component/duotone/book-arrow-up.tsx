
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `book-arrow-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-up?s=duotone book-arrow-up}
 * @preview ![book-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDQxNkM2NCA0MzMuNjcyIDc4LjMyOCA0NDggOTYgNDQ4SDIxNlYzODRIOTZDNzguMzI4IDM4NCA2NCAzOTguMzI2IDY0IDQxNlpNMjY0IDM4NFY0NDhINDE2VjM4NEgyNjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQyNCA0NDhIMjY0VjUxMkg0MjRDNDM3LjI1NCA1MTIgNDQ4IDUwMS4yNTQgNDQ4IDQ4OFY0NzJDNDQ4IDQ1OC43NDIgNDM3LjI1NCA0NDggNDI0IDQ0OFpNNDE2IDBIOTZDNDIuOTggMCAwIDQyLjk4IDAgOTZWNDE2QzAgNDY5LjAyIDQyLjk4IDUxMiA5NiA1MTJIMjE2VjQ0OEg5NkM3OC4zMjggNDQ4IDY0IDQzMy42NzIgNjQgNDE2Uzc4LjMyOCAzODQgOTYgMzg0SDIxNlYyMDkuOTM4TDE3Ni45NjkgMjQ4Ljk2OUMxNjcuNTk0IDI1OC4zNDQgMTUyLjQwNiAyNTguMzQ0IDE0My4wMzEgMjQ4Ljk2OVMxMzMuNjU2IDIyNC40MDYgMTQzLjAzMSAyMTUuMDMxTDIyMy4wMzEgMTM1LjAzMUMyMzIuNDA2IDEyNS42NTYgMjQ3LjU5NCAxMjUuNjU2IDI1Ni45NjkgMTM1LjAzMUwzMzYuOTY5IDIxNS4wMzFDMzQ2LjM0NCAyMjQuNDA2IDM0Ni4zNDQgMjM5LjU5NCAzMzYuOTY5IDI0OC45NjlDMzMyLjI4MSAyNTMuNjU2IDMyNi4xNTYgMjU2IDMyMCAyNTZTMzA3LjcxOSAyNTMuNjU2IDMwMy4wMzEgMjQ4Ljk2OUwyNjQgMjA5LjkzOFYzODRINDI0QzQzNy4yNTQgMzg0IDQ0OCAzNzMuMjU0IDQ0OCAzNjBWMzJDNDQ4IDE0LjMyOCA0MzMuNjcyIDAgNDE2IDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M64 416C64 433.672 78.328 448 96 448H216V384H96C78.328 384 64 398.326 64 416ZM264 384V448H416V384H264Z" />
            <path d="M424 448H264V512H424C437.254 512 448 501.254 448 488V472C448 458.742 437.254 448 424 448ZM416 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H216V448H96C78.328 448 64 433.672 64 416S78.328 384 96 384H216V209.938L176.969 248.969C167.594 258.344 152.406 258.344 143.031 248.969S133.656 224.406 143.031 215.031L223.031 135.031C232.406 125.656 247.594 125.656 256.969 135.031L336.969 215.031C346.344 224.406 346.344 239.594 336.969 248.969C332.281 253.656 326.156 256 320 256S307.719 253.656 303.031 248.969L264 209.938V384H424C437.254 384 448 373.254 448 360V32C448 14.328 433.672 0 416 0Z" />
        </Icon>
    </>
}