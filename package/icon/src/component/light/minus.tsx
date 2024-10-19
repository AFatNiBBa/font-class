
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `minus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=light minus}
 * @preview ![minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNjQuODQ0IDQyNC44NDQgMjcyIDQxNiAyNzJIMzJDMjMuMTU2IDI3MiAxNiAyNjQuODQ0IDE2IDI1NlMyMy4xNTYgMjQwIDMyIDI0MEg0MTZDNDI0Ljg0NCAyNDAgNDMyIDI0Ny4xNTYgNDMyIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Minus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 256C432 264.844 424.844 272 416 272H32C23.156 272 16 264.844 16 256S23.156 240 32 240H416C424.844 240 432 247.156 432 256Z" />
        </Icon>
    </>
}