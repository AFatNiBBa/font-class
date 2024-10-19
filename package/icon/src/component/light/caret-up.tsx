
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caret-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=light caret-up}
 * @preview ![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMi4wMzkgMzIwSDI4Ny45ODhDMzE2LjM1NyAzMjAgMzMwLjcyOSAyODUuNSAzMTAuNjA4IDI2NS4zNzVMMTgyLjYzNCAxMzcuMzc1QzE3MC4xMzYgMTI0Ljg3NSAxNDkuODkgMTI0Ljg3NSAxMzcuMzkzIDEzNy4zNzVMOS40MTkgMjY1LjM3NUMtMTAuNzAyIDI4NS41IDMuNTQ1IDMyMCAzMi4wMzkgMzIwWk0xNjAuMDEzIDE2MEwyODcuOTg4IDI4OEgzMi4wMzlMMTYwLjAxMyAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CaretUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M32.039 320H287.988C316.357 320 330.729 285.5 310.608 265.375L182.634 137.375C170.136 124.875 149.89 124.875 137.393 137.375L9.419 265.375C-10.702 285.5 3.545 320 32.039 320ZM160.013 160L287.988 288H32.039L160.013 160Z" />
        </Icon>
    </>
}