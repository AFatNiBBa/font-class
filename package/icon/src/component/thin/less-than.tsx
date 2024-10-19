
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `less-than` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=thin less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTUuNTYyIDQwOC44MTZDMzU5LjUzMSA0MTAuNzg0IDM2MS4xMjUgNDE1LjU5NiAzNTkuMTU2IDQxOS41MzRDMzU3LjY1OSA0MjIuNTI4IDM1My4yNCA0MjUuNTI4IDM0OC40MzggNDIzLjEyN0wyOC40MzggMjYzLjEzN0MyNS43MTkgMjYxLjc5MyAyNCAyNTkuMDEyIDI0IDI1NS45ODFDMjQgMjUyLjk1IDI1LjcxOSAyNTAuMTY5IDI4LjQzOCAyNDguODI1TDM0OC40MzggODguODM1QzM1Mi4yNSA4Ni44OTcgMzU3LjE1NiA4OC40MjkgMzU5LjE1NiA5Mi40MjhDMzYxLjEyNSA5Ni4zNjYgMzU5LjUzMSAxMDEuMTc4IDM1NS41NjIgMTAzLjE0Nkw0OS44NzUgMjU1Ljk4MUwzNTUuNTYyIDQwOC44MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LessThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M355.562 408.816C359.531 410.784 361.125 415.596 359.156 419.534C357.659 422.528 353.24 425.528 348.438 423.127L28.438 263.137C25.719 261.793 24 259.012 24 255.981C24 252.95 25.719 250.169 28.438 248.825L348.438 88.835C352.25 86.897 357.156 88.429 359.156 92.428C361.125 96.366 359.531 101.178 355.562 103.146L49.875 255.981L355.562 408.816Z" />
        </Icon>
    </>
}