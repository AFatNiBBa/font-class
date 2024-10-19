
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `google-drive` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/google-drive?s=brands google-drive}
 * @preview ![google-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzkgMzE0LjlMMTc1LjQgMzJoMTYxLjJsMTYzLjYgMjgyLjlIMzM5em0tMTM3LjUgMjMuNkwxMjAuOSA0ODBoMzEwLjVMNTEyIDMzOC41SDIwMS41ek0xNTQuMSA2Ny40TDAgMzM4LjUgODAuNiA0ODAgMjM3IDIwOC44IDE1NC4xIDY3LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GoogleDrive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" />
        </Icon>
    </>
}