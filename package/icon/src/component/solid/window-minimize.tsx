
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-minimize` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=solid window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNDAwVjQzMkM1MTIgNDU4LjUgNDkwLjUgNDgwIDQ2NCA0ODBINDhDMjEuNSA0ODAgMCA0NTguNSAwIDQzMlY0MDBDMCAzNzMuNSAyMS41IDM1MiA0OCAzNTJINDY0QzQ5MC41IDM1MiA1MTIgMzczLjUgNTEyIDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowMinimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 400V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V400C0 373.5 21.5 352 48 352H464C490.5 352 512 373.5 512 400Z" />
        </Icon>
    </>
}