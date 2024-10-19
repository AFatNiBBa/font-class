
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=solid arrow-left-long}
 * @preview ![arrow-left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05LjE4NCAyMzMuMzc1TDEzNy4xODQgMTA1LjM3NUMxNDkuNjg0IDkyLjg3NSAxNjkuOTM0IDkyLjg3NSAxODIuNDM0IDEwNS4zNzVTMTk0LjkzNCAxMzguMTI1IDE4Mi40MzQgMTUwLjYyNUwxMDkuMDU5IDIyNEg0NzkuODA5QzQ5Ny40OTYgMjI0IDUxMS44MDkgMjM4LjMxMiA1MTEuODA5IDI1NlM0OTcuNDk2IDI4OCA0NzkuODA5IDI4OEgxMDkuMDU5TDE4Mi40MzQgMzYxLjM3NUMxOTQuOTM0IDM3My44NzUgMTk0LjkzNCAzOTQuMTI1IDE4Mi40MzQgNDA2LjYyNUMxNjkuOTQxIDQxOS4xMTggMTQ5LjY5MSA0MTkuMTMyIDEzNy4xODQgNDA2LjYyNUw5LjE4NCAyNzguNjI1Qy0zLjMxNiAyNjYuMTI1IC0zLjMxNiAyNDUuODc1IDkuMTg0IDIzMy4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowLeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M9.184 233.375L137.184 105.375C149.684 92.875 169.934 92.875 182.434 105.375S194.934 138.125 182.434 150.625L109.059 224H479.809C497.496 224 511.809 238.312 511.809 256S497.496 288 479.809 288H109.059L182.434 361.375C194.934 373.875 194.934 394.125 182.434 406.625C169.941 419.118 149.691 419.132 137.184 406.625L9.184 278.625C-3.316 266.125 -3.316 245.875 9.184 233.375Z" />
        </Icon>
    </>
}