
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `toggle-off` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=solid toggle-off}
 * @preview ![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTYwQzEzOC45MzggMTYwIDk2IDIwMi45MzggOTYgMjU2UzEzOC45MzggMzUyIDE5MiAzNTJTMjg4IDMwOS4wNjIgMjg4IDI1NlMyNDUuMDYyIDE2MCAxOTIgMTYwWk0zODQgNjRIMTkyQzg1Ljk5OSA2NCAwIDE1MCAwIDI1NkMwIDM2MiA4NS45OTkgNDQ4IDE5MiA0NDhIMzg0QzQ4OS45OTkgNDQ4IDU3NiAzNjIgNTc2IDI1NkM1NzYgMTUwIDQ4OS45OTkgNjQgMzg0IDY0Wk0zODQgMzg0SDE5MkMxMjEuNDIgMzg0IDY0IDMyNi41OCA2NCAyNTZTMTIxLjQyIDEyOCAxOTIgMTI4SDM4NEM0NTQuNTggMTI4IDUxMiAxODUuNDIgNTEyIDI1NlM0NTQuNTggMzg0IDM4NCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ToggleOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M192 160C138.938 160 96 202.938 96 256S138.938 352 192 352S288 309.062 288 256S245.062 160 192 160ZM384 64H192C85.999 64 0 150 0 256C0 362 85.999 448 192 448H384C489.999 448 576 362 576 256C576 150 489.999 64 384 64ZM384 384H192C121.42 384 64 326.58 64 256S121.42 128 192 128H384C454.58 128 512 185.42 512 256S454.58 384 384 384Z" />
        </Icon>
    </>
}