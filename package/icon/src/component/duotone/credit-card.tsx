
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `credit-card` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=duotone credit-card}
 * @preview ![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAzMkg2NEMyOC42NTIgMzIgMCA2MC42NTYgMCA5NlYxMjhINTc2Vjk2QzU3NiA2MC42NTYgNTQ3LjM0OCAzMiA1MTIgMzJaTTAgNDE2QzAgNDUxLjM0NCAyOC42NTIgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0OCA0ODAgNTc2IDQ1MS4zNDQgNTc2IDQxNlYyMjRIMFY0MTZaTTE5MiAzNjBDMTkyIDM1NS41NzggMTk1LjU4MiAzNTIgMjAwIDM1MkgzNDRDMzQ4LjQxOCAzNTIgMzUyIDM1NS41NzggMzUyIDM2MFYzNzZDMzUyIDM4MC40MTggMzQ4LjQxOCAzODQgMzQ0IDM4NEgyMDBDMTk1LjU4MiAzODQgMTkyIDM4MC40MTggMTkyIDM3NlYzNjBaTTY0IDM2MEM2NCAzNTUuNTc4IDY3LjU4MiAzNTIgNzIgMzUySDE1MkMxNTYuNDE4IDM1MiAxNjAgMzU1LjU3OCAxNjAgMzYwVjM3NkMxNjAgMzgwLjQxOCAxNTYuNDE4IDM4NCAxNTIgMzg0SDcyQzY3LjU4MiAzODQgNjQgMzgwLjQxOCA2NCAzNzZWMzYwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NzYgMjI0SDBWMTI4SDU3NlYyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CreditCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M512 32H64C28.652 32 0 60.656 0 96V128H576V96C576 60.656 547.348 32 512 32ZM0 416C0 451.344 28.652 480 64 480H512C547.348 480 576 451.344 576 416V224H0V416ZM192 360C192 355.578 195.582 352 200 352H344C348.418 352 352 355.578 352 360V376C352 380.418 348.418 384 344 384H200C195.582 384 192 380.418 192 376V360ZM64 360C64 355.578 67.582 352 72 352H152C156.418 352 160 355.578 160 360V376C160 380.418 156.418 384 152 384H72C67.582 384 64 380.418 64 376V360Z" />
            <path d="M576 224H0V128H576V224Z" />
        </Icon>
    </>
}