
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bill-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=solid money-bill-simple}
 * @preview ![money-bill-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggNjRINDhDMjEuNDkyIDY0IDAgODUuNDkyIDAgMTEyVjQwMEMwIDQyNi41MDggMjEuNDkyIDQ0OCA0OCA0NDhINTI4QzU1NC41MTIgNDQ4IDU3NiA0MjYuNTA4IDU3NiA0MDBWMTEyQzU3NiA4NS40OTIgNTU0LjUxMiA2NCA1MjggNjRaTTI4OCAzNTJDMjQzLjgxNiAzNTIgMjA4IDMwOS4wMTggMjA4IDI1NkMyMDggMjAyLjk4IDI0My44MTYgMTYwIDI4OCAxNjBTMzY4IDIwMi45OCAzNjggMjU2QzM2OCAzMDkuMDE4IDMzMi4xODQgMzUyIDI4OCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MoneyBillSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528 64H48C21.492 64 0 85.492 0 112V400C0 426.508 21.492 448 48 448H528C554.512 448 576 426.508 576 400V112C576 85.492 554.512 64 528 64ZM288 352C243.816 352 208 309.018 208 256C208 202.98 243.816 160 288 160S368 202.98 368 256C368 309.018 332.184 352 288 352Z" />
        </Icon>
    </>
}