
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `credit-card-blank` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-blank?s=solid credit-card-blank}
 * @preview ![credit-card-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjUyIDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTIgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0OCA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjU0IDU0Ny4zNDggMzIgNTEyIDMyWk0xNjAgMzc2QzE2MCAzODAuNDE4IDE1Ni40MTggMzg0IDE1MiAzODRINzJDNjcuNTgyIDM4NCA2NCAzODAuNDE4IDY0IDM3NlYzNjBDNjQgMzU1LjU4IDY3LjU4MiAzNTIgNzIgMzUySDE1MkMxNTYuNDE4IDM1MiAxNjAgMzU1LjU4IDE2MCAzNjBWMzc2Wk0zNTIgMzc2QzM1MiAzODAuNDE4IDM0OC40MTggMzg0IDM0NCAzODRIMjAwQzE5NS41ODIgMzg0IDE5MiAzODAuNDE4IDE5MiAzNzZWMzYwQzE5MiAzNTUuNTggMTk1LjU4MiAzNTIgMjAwIDM1MkgzNDRDMzQ4LjQxOCAzNTIgMzUyIDM1NS41OCAzNTIgMzYwVjM3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CreditCardBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM160 376C160 380.418 156.418 384 152 384H72C67.582 384 64 380.418 64 376V360C64 355.58 67.582 352 72 352H152C156.418 352 160 355.58 160 360V376ZM352 376C352 380.418 348.418 384 344 384H200C195.582 384 192 380.418 192 376V360C192 355.58 195.582 352 200 352H344C348.418 352 352 355.58 352 360V376Z" />
        </Icon>
    </>
}