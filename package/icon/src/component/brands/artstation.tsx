
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `artstation` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/artstation?s=brands artstation}
 * @preview ![artstation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yIDM3Ny40bDQzIDc0LjNBNTEuMzUgNTEuMzUgMCAwIDAgOTAuOSA0ODBoMjg1LjRsLTU5LjItMTAyLjZ6TTUwMS44IDM1MEwzMzUuNiA1OS4zQTUxLjM4IDUxLjM4IDAgMCAwIDI5MC4yIDMyaC04OC40bDI1Ny4zIDQ0Ny42IDQwLjctNzAuNWMxLjktMy4yIDIxLTI5LjcgMi01OS4xek0yNzUgMzA0LjVsLTExNS41LTIwMEw0NCAzMDQuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Artstation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M2 377.4l43 74.3A51.35 51.35 0 0 0 90.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.38 51.38 0 0 0 290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z" />
        </Icon>
    </>
}