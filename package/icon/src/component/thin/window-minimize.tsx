
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-minimize` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=thin window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNDcyQzUxMiA0NzYuNDA2IDUwOC40MDYgNDgwIDUwNCA0ODBIOEMzLjU5NCA0ODAgMCA0NzYuNDA2IDAgNDcyUzMuNTk0IDQ2NCA4IDQ2NEg1MDRDNTA4LjQwNiA0NjQgNTEyIDQ2Ny41OTQgNTEyIDQ3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowMinimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 472C512 476.406 508.406 480 504 480H8C3.594 480 0 476.406 0 472S3.594 464 8 464H504C508.406 464 512 467.594 512 472Z" />
        </Icon>
    </>
}