
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `u` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=thin u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDgwQzg2LjEyNSA0ODAgMCAzOTMuODc1IDAgMjg4VjQwQzAgMzUuNTk0IDMuNTc4IDMyIDggMzJTMTYgMzUuNTk0IDE2IDQwVjI4OEMxNiAzODUuMDMxIDk0Ljk1MyA0NjQgMTkyIDQ2NFMzNjggMzg1LjAzMSAzNjggMjg4VjQwQzM2OCAzNS41OTQgMzcxLjU3OCAzMiAzNzYgMzJTMzg0IDM1LjU5NCAzODQgNDBWMjg4QzM4NCAzOTMuODc1IDI5Ny44NzUgNDgwIDE5MiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function U(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 480C86.125 480 0 393.875 0 288V40C0 35.594 3.578 32 8 32S16 35.594 16 40V288C16 385.031 94.953 464 192 464S368 385.031 368 288V40C368 35.594 371.578 32 376 32S384 35.594 384 40V288C384 393.875 297.875 480 192 480Z" />
        </Icon>
    </>
}