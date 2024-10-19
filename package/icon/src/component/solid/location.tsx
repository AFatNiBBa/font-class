
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location?s=solid location}
 * @preview ![location](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDE5Mi4wMDFDMCA4NS45NjkgODUuOTY5IDAgMTkyIDBTMzg0IDg1Ljk2OSAzODQgMTkyLjAwMUMzODQgMjY5LjQwOCAzNTcuMDMxIDI5MS4wMzMgMjExLjcxOSA1MDEuNjc2QzIwMi4xODcgNTE1LjQ0MSAxODEuODEyIDUxNS40NDEgMTcyLjI4MSA1MDEuNjc2QzI2Ljk2OSAyOTEuMDMzIDAgMjY5LjQwOCAwIDE5Mi4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Location(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M0 192.001C0 85.969 85.969 0 192 0S384 85.969 384 192.001C384 269.408 357.031 291.033 211.719 501.676C202.187 515.441 181.812 515.441 172.281 501.676C26.969 291.033 0 269.408 0 192.001Z" />
        </Icon>
    </>
}