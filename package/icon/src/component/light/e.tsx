
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=light e}
 * @preview ![e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDY0QzMyMCA0NzIuODQ0IDMxMi44NDQgNDgwIDMwNCA0ODBIMTZDNy4xNTYgNDgwIDAgNDcyLjg0NCAwIDQ2NFY0OEMwIDM5LjE1NiA3LjE1NiAzMiAxNiAzMkgzMDRDMzEyLjg0NCAzMiAzMjAgMzkuMTU2IDMyMCA0OFMzMTIuODQ0IDY0IDMwNCA2NEgzMlYyNDBIMjQwQzI0OC44NDQgMjQwIDI1NiAyNDcuMTU2IDI1NiAyNTZTMjQ4Ljg0NCAyNzIgMjQwIDI3MkgzMlY0NDhIMzA0QzMxMi44NDQgNDQ4IDMyMCA0NTUuMTU2IDMyMCA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function E(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 464C320 472.844 312.844 480 304 480H16C7.156 480 0 472.844 0 464V48C0 39.156 7.156 32 16 32H304C312.844 32 320 39.156 320 48S312.844 64 304 64H32V240H240C248.844 240 256 247.156 256 256S248.844 272 240 272H32V448H304C312.844 448 320 455.156 320 464Z" />
        </Icon>
    </>
}