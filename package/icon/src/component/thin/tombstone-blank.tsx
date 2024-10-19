
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tombstone-blank` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=thin tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MCA0NjRDNDQuNDA2IDQ2NCA0OCA0NjAuNDIyIDQ4IDQ1NlYxOTJDNDggOTQuOTUzIDEyNi45NjkgMTYgMjI0IDE2UzQwMCA5NC45NTMgNDAwIDE5MlY0NTZDNDAwIDQ2MC40MjIgNDAzLjU5NCA0NjQgNDA4IDQ2NFM0MTYgNDYwLjQyMiA0MTYgNDU2VjE5MkM0MTYgODYuMTI1IDMyOS44NzUgMCAyMjQgMFMzMiA4Ni4xMjUgMzIgMTkyVjQ1NkMzMiA0NjAuNDIyIDM1LjU5NCA0NjQgNDAgNDY0Wk00NDAgNDk2SDhDMy41OTQgNDk2IDAgNDk5LjU3OCAwIDUwNFMzLjU5NCA1MTIgOCA1MTJINDQwQzQ0NC40MDYgNTEyIDQ0OCA1MDguNDIyIDQ0OCA1MDRTNDQ0LjQwNiA0OTYgNDQwIDQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TombstoneBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M40 464C44.406 464 48 460.422 48 456V192C48 94.953 126.969 16 224 16S400 94.953 400 192V456C400 460.422 403.594 464 408 464S416 460.422 416 456V192C416 86.125 329.875 0 224 0S32 86.125 32 192V456C32 460.422 35.594 464 40 464ZM440 496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496Z" />
        </Icon>
    </>
}