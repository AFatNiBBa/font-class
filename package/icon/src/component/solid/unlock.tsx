
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=solid unlock}
 * @preview ![unlock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMjg4VjQ0OEM0NDggNDgzLjM0NCA0MTkuMzQ2IDUxMiAzODQgNTEySDY0QzI4LjY1NCA1MTIgMCA0ODMuMzQ0IDAgNDQ4VjI4OEMwIDI1Mi42NTIgMjguNjU0IDIyNCA2NCAyMjRIODBWMTQ0QzgwIDY0LjU5NCAxNDQuNTk0IDAgMjI0IDBTMzY4IDY0LjU5NCAzNjggMTQ0VjE2MEgzMDRWMTQ0QzMwNCA5OS44NzUgMjY4LjEwOSA2NCAyMjQgNjRTMTQ0IDk5Ljg3NSAxNDQgMTQ0VjIyNEgzODRDNDE5LjM0NiAyMjQgNDQ4IDI1Mi42NTIgNDQ4IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Unlock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 288V448C448 483.344 419.346 512 384 512H64C28.654 512 0 483.344 0 448V288C0 252.652 28.654 224 64 224H80V144C80 64.594 144.594 0 224 0S368 64.594 368 144V160H304V144C304 99.875 268.109 64 224 64S144 99.875 144 144V224H384C419.346 224 448 252.652 448 288Z" />
        </Icon>
    </>
}