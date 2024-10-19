
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=thin rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggODBDNDc0LjQ2NyA4MCA0OTYgMTAxLjUzMyA0OTYgMTI4VjM4NEM0OTYgNDEwLjQ2NyA0NzQuNDY3IDQzMiA0NDggNDMySDY0QzM3LjUzMyA0MzIgMTYgNDEwLjQ2NyAxNiAzODRWMTI4QzE2IDEwMS41MzMgMzcuNTMzIDgwIDY0IDgwSDQ0OE00NDggNjRINjRDMjguNjU0IDY0IDAgOTIuNjU0IDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINDQ4QzQ4My4zNDYgNDQ4IDUxMiA0MTkuMzQ2IDUxMiAzODRWMTI4QzUxMiA5Mi42NTQgNDgzLjM0NiA2NCA0NDggNjRMNDQ4IDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rectangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 80C474.467 80 496 101.533 496 128V384C496 410.467 474.467 432 448 432H64C37.533 432 16 410.467 16 384V128C16 101.533 37.533 80 64 80H448M448 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H448C483.346 448 512 419.346 512 384V128C512 92.654 483.346 64 448 64L448 64Z" />
        </Icon>
    </>
}