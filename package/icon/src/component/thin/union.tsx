
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `union` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=thin union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgNDBWMzIwQzM1MiA0MDguMjE5IDI4MC4yMTkgNDgwIDE5MiA0ODBTMzIgNDA4LjIxOSAzMiAzMjBWNDBDMzIgMzUuNTk0IDM1LjU5NCAzMiA0MCAzMlM0OCAzNS41OTQgNDggNDBWMzIwQzQ4IDM5OS40MDYgMTEyLjU5NCA0NjQgMTkyIDQ2NFMzMzYgMzk5LjQwNiAzMzYgMzIwVjQwQzMzNiAzNS41OTQgMzM5LjU5NCAzMiAzNDQgMzJTMzUyIDM1LjU5NCAzNTIgNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Union(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 40V320C352 408.219 280.219 480 192 480S32 408.219 32 320V40C32 35.594 35.594 32 40 32S48 35.594 48 40V320C48 399.406 112.594 464 192 464S336 399.406 336 320V40C336 35.594 339.594 32 344 32S352 35.594 352 40Z" />
        </Icon>
    </>
}