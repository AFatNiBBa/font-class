
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cheese` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=regular cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTkuODc1IDMySDI5OC4zNzVDMjkxLjI1IDMyLjEyNSAyODQuMjUgMzQuNSAyNzguNzUgMzlMMCAyNTUuODc1VjQ0OEMwIDQ2NS42MjUgMTQuMzc1IDQ4MCAzMiA0ODBINDgwQzQ5Ny42MjUgNDgwIDUxMiA0NjUuNjI1IDUxMiA0NDhWMjU1Ljg3NUM1MTIgMTM2IDQxNy45OTkgMzguMjUgMjk5Ljg3NSAzMlpNMzAzLjYyNSA4MC4zNzVDMzkxLjM3NSA4OC4xMjUgNDU5LjI1IDE1OS44NzUgNDYzLjI1IDI0Ny44NzVIODguNUwzMDMuNjI1IDgwLjM3NVpNNDY0IDQzMkg0OFYyOTUuODc1SDQ2NFY0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Cheese(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M299.875 32H298.375C291.25 32.125 284.25 34.5 278.75 39L0 255.875V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V255.875C512 136 417.999 38.25 299.875 32ZM303.625 80.375C391.375 88.125 459.25 159.875 463.25 247.875H88.5L303.625 80.375ZM464 432H48V295.875H464V432Z" />
        </Icon>
    </>
}