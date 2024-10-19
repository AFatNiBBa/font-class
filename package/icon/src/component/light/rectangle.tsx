
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=light rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRINjRDMjguNjU0IDY0IDAgOTIuNjU0IDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINDQ4QzQ4My4zNDYgNDQ4IDUxMiA0MTkuMzQ2IDUxMiAzODRWMTI4QzUxMiA5Mi42NTQgNDgzLjM0NiA2NCA0NDggNjRaTTQ4MCAzODRDNDgwIDQwMS42NDUgNDY1LjY0NSA0MTYgNDQ4IDQxNkg2NEM0Ni4zNTUgNDE2IDMyIDQwMS42NDUgMzIgMzg0VjEyOEMzMiAxMTAuMzU1IDQ2LjM1NSA5NiA2NCA5Nkg0NDhDNDY1LjY0NSA5NiA0ODAgMTEwLjM1NSA0ODAgMTI4VjM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Rectangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H448C483.346 448 512 419.346 512 384V128C512 92.654 483.346 64 448 64ZM480 384C480 401.645 465.645 416 448 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H448C465.645 96 480 110.355 480 128V384Z" />
        </Icon>
    </>
}