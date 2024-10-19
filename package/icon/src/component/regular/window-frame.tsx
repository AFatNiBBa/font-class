
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=regular window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggNDY0SDQ4MFYzMkM0ODAgMTQuNCA0NjUuNiAwIDQ0OCAwSDY0QzQ2LjQgMCAzMiAxNC40IDMyIDMyVjQ2NEgyNEMxMC43NDUgNDY0IDAgNDc0Ljc0NSAwIDQ4OFY0ODhDMCA1MDEuMjU1IDEwLjc0NSA1MTIgMjQgNTEySDQ4OEM1MDEuMjU1IDUxMiA1MTIgNTAxLjI1NSA1MTIgNDg4VjQ4OEM1MTIgNDc0Ljc0NSA1MDEuMjU1IDQ2NCA0ODggNDY0Wk0yMzIgNDY0SDgwVjI3MkgyMzJWNDY0Wk0yMzIgMjI0SDgwVjQ4SDIzMlYyMjRaTTQzMiA0NjRIMjgwVjI3Mkg0MzJWNDY0Wk00MzIgMjI0SDI4MFY0OEg0MzJWMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowFrame(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 464H480V32C480 14.4 465.6 0 448 0H64C46.4 0 32 14.4 32 32V464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H488C501.255 512 512 501.255 512 488V488C512 474.745 501.255 464 488 464ZM232 464H80V272H232V464ZM232 224H80V48H232V224ZM432 464H280V272H432V464ZM432 224H280V48H432V224Z" />
        </Icon>
    </>
}