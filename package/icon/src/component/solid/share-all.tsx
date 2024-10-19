
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share-all` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=solid share-all}
 * @preview ![share-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuNjkxIDE4OS44NDZMMjYzLjY5MSAzNy44NDZDMjQ4LjI4NSAyNC41NDkgMjI0LjAwNCAzNS4zNDYgMjI0LjAwNCA1Ni4wMThWMTM4Ljg1N0M5NC44NjMgMTQ5LjEwMiAwIDE5MS4wMTQgMCAzMjIuMzNDMCAzODMuNzY4IDM5LjU5NCA0NDQuNjQzIDgzLjM0NCA0NzYuNDU1Qzk3IDQ4Ni4zOTMgMTE2LjQzOCA0NzMuOTI0IDExMS40MDYgNDU3LjgzQzcyLjkyNCAzMzQuNzU4IDExNS41MDggMjg4LjUzOSAyMjQuMDA0IDI3NS45NjNWMzYwLjAwMkMyMjQuMDA0IDM4MC43MDUgMjQ4LjMxNiAzOTEuNDU1IDI2My42OTEgMzc4LjE1OEw0MzkuNjkxIDIyNi4xNThDNDUwLjc1NCAyMTYuNTk2IDQ1MC43ODUgMTk5LjQwOCA0MzkuNjkxIDE4OS44NDZaTTU2Ny42OTEgMTg5Ljg0NkwzOTEuNjkxIDM3Ljg0NkMzNzYuMjg1IDI0LjU0OSAzNTIuMDA0IDM1LjM0NiAzNTIuMDA0IDU2LjAxOFY3MS44MzRMNTA5LjY3MiAyMDguMDAyTDM1Mi4wMDQgMzQ0LjE2OFYzNjAuMDAyQzM1Mi4wMDQgMzgwLjcwNSAzNzYuMzE2IDM5MS40NTUgMzkxLjY5MSAzNzguMTU4TDU2Ny42OTEgMjI2LjE1OEM1NzguNzcxIDIxNi41OSA1NzguNzcxIDE5OS40MTQgNTY3LjY5MSAxODkuODQ2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShareAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M439.691 189.846L263.691 37.846C248.285 24.549 224.004 35.346 224.004 56.018V138.857C94.863 149.102 0 191.014 0 322.33C0 383.768 39.594 444.643 83.344 476.455C97 486.393 116.438 473.924 111.406 457.83C72.924 334.758 115.508 288.539 224.004 275.963V360.002C224.004 380.705 248.316 391.455 263.691 378.158L439.691 226.158C450.754 216.596 450.785 199.408 439.691 189.846ZM567.691 189.846L391.691 37.846C376.285 24.549 352.004 35.346 352.004 56.018V71.834L509.672 208.002L352.004 344.168V360.002C352.004 380.705 376.316 391.455 391.691 378.158L567.691 226.158C578.771 216.59 578.771 199.414 567.691 189.846Z" />
        </Icon>
    </>
}