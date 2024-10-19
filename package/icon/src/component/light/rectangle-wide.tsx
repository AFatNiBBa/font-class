
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rectangle-wide` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=light rectangle-wide}
 * @preview ![rectangle-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgNjRINjRDMjguNjU0IDY0IDAgOTIuNjU0IDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINTc2QzYxMS4zNDYgNDQ4IDY0MCA0MTkuMzQ2IDY0MCAzODRWMTI4QzY0MCA5Mi42NTQgNjExLjM0NiA2NCA1NzYgNjRaTTYwOCAzODRDNjA4IDQwMS42NDUgNTkzLjY0NSA0MTYgNTc2IDQxNkg2NEM0Ni4zNTUgNDE2IDMyIDQwMS42NDUgMzIgMzg0VjEyOEMzMiAxMTAuMzU1IDQ2LjM1NSA5NiA2NCA5Nkg1NzZDNTkzLjY0NSA5NiA2MDggMTEwLjM1NSA2MDggMTI4VjM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RectangleWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H576C611.346 448 640 419.346 640 384V128C640 92.654 611.346 64 576 64ZM608 384C608 401.645 593.645 416 576 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H576C593.645 96 608 110.355 608 128V384Z" />
        </Icon>
    </>
}