
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=regular floppy-disk}
 * @preview ![floppy-disk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzE4OC43OTkgMjU2IDE2MCAyODQuNzk5IDE2MCAzMjBDMTYwIDM1NS4xOTkgMTg4Ljc5OSAzODQgMjI0IDM4NEMyNTkuMTk5IDM4NCAyODggMzU1LjE5OSAyODggMzIwQzI4OCAyODQuNzk5IDI1OS4xOTkgMjU2IDIyNCAyNTZaTTQzNCAxMzBMMzUwLjA1MyA0Ni4wNTNDMzQxLjA1NSAzNy4wNTUgMzI4Ljg1IDMyIDMxNi4xMjUgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlYxNjMuNzk5QzQ0OCAxNTEuMTIzIDQ0Mi45NjUgMTM4Ljk2MyA0MzQgMTMwWk0xMjggODBIMjcyVjE2MEgxMjhWODBaTTQwMCA0MTZDNDAwIDQyNC44MzYgMzkyLjgzNiA0MzIgMzg0IDQzMkg2NEM1NS4xNjQgNDMyIDQ4IDQyNC44MzYgNDggNDE2Vjk2QzQ4IDg3LjE2MiA1NS4xNjQgODAgNjQgODBIODBWMTg0QzgwIDE5Ny4yNTQgOTAuNzQ2IDIwOCAxMDQgMjA4SDI5NkMzMDkuMjU0IDIwOCAzMjAgMTk3LjI1NCAzMjAgMTg0VjgzLjg3NUwzOTguMjUgMTYyLjEyNUMzOTkuMzcxIDE2My4yNDQgNDAwIDE2NC43NjYgNDAwIDE2Ni4zNVY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FloppyDisk(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 256C188.799 256 160 284.799 160 320C160 355.199 188.799 384 224 384C259.199 384 288 355.199 288 320C288 284.799 259.199 256 224 256ZM434 130L350.053 46.053C341.055 37.055 328.85 32 316.125 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V163.799C448 151.123 442.965 138.963 434 130ZM128 80H272V160H128V80ZM400 416C400 424.836 392.836 432 384 432H64C55.164 432 48 424.836 48 416V96C48 87.162 55.164 80 64 80H80V184C80 197.254 90.746 208 104 208H296C309.254 208 320 197.254 320 184V83.875L398.25 162.125C399.371 163.244 400 164.766 400 166.35V416Z" />
        </Icon>
    </>
}