
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=regular equals}
 * @preview ![equals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDggMzI4SDQwQzI2Ljc1IDMyOCAxNiAzMzguNzUgMTYgMzUyUzI2Ljc1IDM3NiA0MCAzNzZINDA4QzQyMS4yNSAzNzYgNDMyIDM2NS4yNSA0MzIgMzUyUzQyMS4yNSAzMjggNDA4IDMyOFpNNDAgMTg0SDQwOEM0MjEuMjUgMTg0IDQzMiAxNzMuMjUgNDMyIDE2MFM0MjEuMjUgMTM2IDQwOCAxMzZINDBDMjYuNzUgMTM2IDE2IDE0Ni43NSAxNiAxNjBTMjYuNzUgMTg0IDQwIDE4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Equals(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M408 328H40C26.75 328 16 338.75 16 352S26.75 376 40 376H408C421.25 376 432 365.25 432 352S421.25 328 408 328ZM40 184H408C421.25 184 432 173.25 432 160S421.25 136 408 136H40C26.75 136 16 146.75 16 160S26.75 184 40 184Z" />
        </Icon>
    </>
}