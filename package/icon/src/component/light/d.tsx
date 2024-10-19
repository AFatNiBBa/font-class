
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `d` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=light d}
 * @preview ![d](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgNDgwSDE2QzcuMTU2IDQ4MCAwIDQ3Mi44NDQgMCA0NjRWNDhDMCAzOS4xNTYgNy4xNTYgMzIgMTYgMzJIMTYwQzI4My41MTYgMzIgMzg0IDEzMi41IDM4NCAyNTZTMjgzLjUxNiA0ODAgMTYwIDQ4MFpNMzIgNDQ4SDE2MEMyNjUuODc1IDQ0OCAzNTIgMzYxLjg3NSAzNTIgMjU2UzI2NS44NzUgNjQgMTYwIDY0SDMyVjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function D(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M160 480H16C7.156 480 0 472.844 0 464V48C0 39.156 7.156 32 16 32H160C283.516 32 384 132.5 384 256S283.516 480 160 480ZM32 448H160C265.875 448 352 361.875 352 256S265.875 64 160 64H32V448Z" />
        </Icon>
    </>
}