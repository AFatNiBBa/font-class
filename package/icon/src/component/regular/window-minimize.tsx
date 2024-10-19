
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-minimize` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=regular window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgNDgwSDMyQzE0LjI1IDQ4MCAwIDQ2NS43NSAwIDQ0OFMxNC4yNSA0MTYgMzIgNDE2SDQ4MEM0OTcuNzUgNDE2IDUxMiA0MzAuMjUgNTEyIDQ0OFM0OTcuNzUgNDgwIDQ4MCA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WindowMinimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 480H32C14.25 480 0 465.75 0 448S14.25 416 32 416H480C497.75 416 512 430.25 512 448S497.75 480 480 480Z" />
        </Icon>
    </>
}