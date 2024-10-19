
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `j` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=light j}
 * @preview ![j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgNDgwQzcxLjc4MSA0ODAgMCA0MDguMjE5IDAgMzIwVjI3MkMwIDI2My4xNTYgNy4xNTYgMjU2IDE2IDI1NlMzMiAyNjMuMTU2IDMyIDI3MlYzMjBDMzIgMzkwLjU5NCA4OS40MDYgNDQ4IDE2MCA0NDhTMjg4IDM5MC41OTQgMjg4IDMyMFY0OEMyODggMzkuMTU2IDI5NS4xNTYgMzIgMzA0IDMyUzMyMCAzOS4xNTYgMzIwIDQ4VjMyMEMzMjAgNDA4LjIxOSAyNDguMjE5IDQ4MCAxNjAgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function J(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M160 480C71.781 480 0 408.219 0 320V272C0 263.156 7.156 256 16 256S32 263.156 32 272V320C32 390.594 89.406 448 160 448S288 390.594 288 320V48C288 39.156 295.156 32 304 32S320 39.156 320 48V320C320 408.219 248.219 480 160 480Z" />
        </Icon>
    </>
}