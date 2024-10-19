
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `z` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=thin z}
 * @preview ![z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgNDgwSDhDNC44NzUgNDgwIDIuMDMxIDQ3OC4xODggMC43NSA0NzUuMzQ0Qy0wLjU2MiA0NzIuNTMxIC0wLjEyNSA0NjkuMTg4IDEuOTA2IDQ2Ni44MTJMMzU4LjY4OCA0OEg4QzMuNTk0IDQ4IDAgNDQuNDA2IDAgNDBTMy41OTQgMzIgOCAzMkgzNzZDMzc5LjEyNSAzMiAzODEuOTY5IDMzLjgxMiAzODMuMjUgMzYuNjU2QzM4NC41NjIgMzkuNDY5IDM4NC4xMjUgNDIuODEyIDM4Mi4wOTQgNDUuMTg4TDI1LjMxMiA0NjRIMzc2QzM4MC40MDYgNDY0IDM4NCA0NjcuNTk0IDM4NCA0NzJTMzgwLjQwNiA0ODAgMzc2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Z(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M376 480H8C4.875 480 2.031 478.188 0.75 475.344C-0.562 472.531 -0.125 469.188 1.906 466.812L358.688 48H8C3.594 48 0 44.406 0 40S3.594 32 8 32H376C379.125 32 381.969 33.812 383.25 36.656C384.562 39.469 384.125 42.812 382.094 45.188L25.312 464H376C380.406 464 384 467.594 384 472S380.406 480 376 480Z" />
        </Icon>
    </>
}