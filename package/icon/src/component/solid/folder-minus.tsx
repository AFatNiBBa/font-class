
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=solid folder-minus}
 * @preview ![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIwOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjQzMkMwIDQ1OC41IDIxLjUgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUgNDgwIDUxMiA0NTguNSA1MTIgNDMyVjE0NEM1MTIgMTE3LjUgNDkwLjUgOTYgNDY0IDk2Wk0zMzYgMzExLjk5OEgxNzZDMTYyLjczIDMxMS45OTggMTUyIDMwMS4yNTYgMTUyIDI4OEMxNTIgMjc0Ljc0MiAxNjIuNzM4IDI2NC4wMDIgMTc2IDI2NC4wMDJIMzM2QzM0OS4yNjIgMjY0LjAwMiAzNjAgMjc0Ljc0MiAzNjAgMjg4UzM0OS4yNjIgMzExLjk5OCAzMzYgMzExLjk5OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM336 311.998H176C162.73 311.998 152 301.256 152 288C152 274.742 162.738 264.002 176 264.002H336C349.262 264.002 360 274.742 360 288S349.262 311.998 336 311.998Z" />
        </Icon>
    </>
}