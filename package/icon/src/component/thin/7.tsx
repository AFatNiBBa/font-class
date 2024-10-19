
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `7` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/7?s=thin 7}
 * @preview ![7](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTguNzg2IDQ0LjI1TDQ2Ljc4MiA0NzYuMjVDNDUuMjUxIDQ3OC42ODggNDIuNjU3IDQ4MCA0MC4wMDEgNDgwQzM4LjUzMiA0ODAgMzcuMDYzIDQ3OS41OTQgMzUuNzUxIDQ3OC43ODFDMzIgNDc2LjQwNiAzMC44NzUgNDcxLjQ2OSAzMy4yMTkgNDY3Ljc1TDI5Ny41MDQgNDhIOEMzLjU5NCA0OCAwIDQ0LjQwNiAwIDQwUzMuNTk0IDMyIDggMzJIMzEyLjAwNUMzMTQuOTExIDMyIDMxNy41OTggMzMuNTk0IDMxOS4wMDUgMzYuMTI1QzMyMC40MTEgMzguNjg4IDMyMC4zMTcgNDEuODEyIDMxOC43ODYgNDQuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function $7(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M318.786 44.25L46.782 476.25C45.251 478.688 42.657 480 40.001 480C38.532 480 37.063 479.594 35.751 478.781C32 476.406 30.875 471.469 33.219 467.75L297.504 48H8C3.594 48 0 44.406 0 40S3.594 32 8 32H312.005C314.911 32 317.598 33.594 319.005 36.125C320.411 38.688 320.317 41.812 318.786 44.25Z" />
        </Icon>
    </>
}