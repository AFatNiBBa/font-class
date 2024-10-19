
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=regular minus}
 * @preview ![minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNjkuMjUgNDIxLjI1IDI4MCA0MDggMjgwSDQwQzI2Ljc1IDI4MCAxNiAyNjkuMjUgMTYgMjU2UzI2Ljc1IDIzMiA0MCAyMzJINDA4QzQyMS4yNSAyMzIgNDMyIDI0Mi43NSA0MzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Minus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 256C432 269.25 421.25 280 408 280H40C26.75 280 16 269.25 16 256S26.75 232 40 232H408C421.25 232 432 242.75 432 256Z" />
        </Icon>
    </>
}