
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rectangle-vertical` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=thin rectangle-vertical}
 * @preview ![rectangle-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTZDMzc4LjQ2NyAxNiA0MDAgMzcuNTMzIDQwMCA2NFY0NDhDNDAwIDQ3NC40NjcgMzc4LjQ2NyA0OTYgMzUyIDQ5Nkg5NkM2OS41MzMgNDk2IDQ4IDQ3NC40NjcgNDggNDQ4VjY0QzQ4IDM3LjUzMyA2OS41MzMgMTYgOTYgMTZIMzUyTTM1MiAwSDk2QzYwLjY1NCAwIDMyIDI4LjY1NCAzMiA2NFY0NDhDMzIgNDgzLjM0NiA2MC42NTQgNTEyIDk2IDUxMkgzNTJDMzg3LjM0NiA1MTIgNDE2IDQ4My4zNDYgNDE2IDQ0OFY2NEM0MTYgMjguNjU0IDM4Ny4zNDYgMCAzNTIgMEwzNTIgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RectangleVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 16C378.467 16 400 37.533 400 64V448C400 474.467 378.467 496 352 496H96C69.533 496 48 474.467 48 448V64C48 37.533 69.533 16 96 16H352M352 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H352C387.346 512 416 483.346 416 448V64C416 28.654 387.346 0 352 0L352 0Z" />
        </Icon>
    </>
}