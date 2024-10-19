
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=solid cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQuMjU4IDEyMi4zNzVDMzgxLjUwOCAxMDcuMTI1IDM2OC4xMzIgOTYgMzUyLjYzMSA5NkgzMzYuNjNWNDhDMzM2LjYzIDIxLjUgMzE1LjAwMyAwIDI4OC41MDEgMEgxNjAuMjQyQzEzMy43NCAwIDExMi4yMzkgMjEuNSAxMTIuMjM5IDQ4Vjk2SDk1LjM2M0M3OS44NjEgOTYgNjYuNDg1IDEwNy4xMjUgNjMuNzM1IDEyMi4zNzVMMC40ODEgNDc0LjM3NUMtMi44NDkgNDkzLjMzIDExLjQ5IDUxMiAzMi4xMDggNTEySDQxNS44ODVDNDM2LjUzNCA1MTIgNDUwLjg0IDQ5My4zMTIgNDQ3LjUxMyA0NzQuMzc1TDM4NC4yNTggMTIyLjM3NVpNMTYwLjAwOCA0OEgyODguMDE3Vjk2SDE2MC4wMDhWNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Cowbell(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384.258 122.375C381.508 107.125 368.132 96 352.631 96H336.63V48C336.63 21.5 315.003 0 288.501 0H160.242C133.74 0 112.239 21.5 112.239 48V96H95.363C79.861 96 66.485 107.125 63.735 122.375L0.481 474.375C-2.849 493.33 11.49 512 32.108 512H415.885C436.534 512 450.84 493.312 447.513 474.375L384.258 122.375ZM160.008 48H288.017V96H160.008V48Z" />
        </Icon>
    </>
}