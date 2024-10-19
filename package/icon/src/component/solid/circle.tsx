
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle?s=solid circle}
 * @preview ![circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAzODguNTQ4IDM4OC41NDggNDk2IDI1NiA0OTZTMTYgMzg4LjU0OCAxNiAyNTZTMTIzLjQ1MiAxNiAyNTYgMTZTNDk2IDEyMy40NTIgNDk2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Circle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 388.548 388.548 496 256 496S16 388.548 16 256S123.452 16 256 16S496 123.452 496 256Z" />
        </Icon>
    </>
}