
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `h` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=thin h}
 * @preview ![h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDBWNDcyQzM4NCA0NzYuNDA2IDM4MC40MjIgNDgwIDM3NiA0ODBTMzY4IDQ3Ni40MDYgMzY4IDQ3MlYyMzkuMzc1SDE2VjQ3MkMxNiA0NzYuNDA2IDEyLjQyMiA0ODAgOCA0ODBTMCA0NzYuNDA2IDAgNDcyVjQwQzAgMzUuNTk0IDMuNTc4IDMyIDggMzJTMTYgMzUuNTk0IDE2IDQwVjIyMy4zNzVIMzY4VjQwQzM2OCAzNS41OTQgMzcxLjU3OCAzMiAzNzYgMzJTMzg0IDM1LjU5NCAzODQgNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function H(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 40V472C384 476.406 380.422 480 376 480S368 476.406 368 472V239.375H16V472C16 476.406 12.422 480 8 480S0 476.406 0 472V40C0 35.594 3.578 32 8 32S16 35.594 16 40V223.375H368V40C368 35.594 371.578 32 376 32S384 35.594 384 40Z" />
        </Icon>
    </>
}