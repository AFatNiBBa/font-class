
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield-blank` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-blank?s=solid shield-blank}
 * @preview ![shield-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMTI3Ljk4MkM0OTYgMzgxLjI1MiAzMDkuMTExIDUxMiAyNTUuOTUzIDUxMkMyMDQuOTIzIDUxMiAxNiAzODUuMjU4IDE2IDEyNy45ODJDMTYgMTA4LjU3NCAyNy42ODggOTEuMDcyIDQ1LjU5NCA4My42ODFMMjM3LjU5NCAzLjY3MkMyNDIuNSAxLjY0MSAyNTAuNzUgMCAyNTYuMDYyIDBDMjYxLjM0NCAwIDI2OS42MjUgMS42NDEgMjc0LjUgMy42NzJMNDY2LjUgODMuNjgxQzQ4NC4zMTIgOTEuMDcyIDQ5NiAxMDguNTc0IDQ5NiAxMjcuOTgyWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function ShieldBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 127.982C496 381.252 309.111 512 255.953 512C204.923 512 16 385.258 16 127.982C16 108.574 27.688 91.072 45.594 83.681L237.594 3.672C242.5 1.641 250.75 0 256.062 0C261.344 0 269.625 1.641 274.5 3.672L466.5 83.681C484.312 91.072 496 108.574 496 127.982Z " />
        </Icon>
    </>
}