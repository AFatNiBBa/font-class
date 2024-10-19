
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `overline` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=regular overline}
 * @preview ![overline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgMEgyNEMxMC43NSAwIDAgMTAuNzUgMCAyNFMxMC43NSA0OCAyNCA0OEg0MjRDNDM3LjI1IDQ4IDQ0OCAzNy4yNSA0NDggMjRTNDM3LjI1IDAgNDI0IDBaTTIyNCA5NkMxMjYuNzk5IDk2IDQ4IDE3NC43OTcgNDggMjcyVjMzNkM0OCA0MzMuMjAzIDEyNi43OTkgNTEyIDIyNCA1MTJDMzIxLjIwMyA1MTIgNDAwIDQzMy4yMDMgNDAwIDMzNlYyNzJDNDAwIDE3NC43OTcgMzIxLjIwMyA5NiAyMjQgOTZaTTM1MiAzMzZDMzUyIDQwNi41OCAyOTQuNTggNDY0IDIyNCA0NjRDMTUzLjQyMiA0NjQgOTYgNDA2LjU4IDk2IDMzNlYyNzJDOTYgMjAxLjQyIDE1My40MjIgMTQ0IDIyNCAxNDRDMjk0LjU4IDE0NCAzNTIgMjAxLjQyIDM1MiAyNzJWMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Overline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 0H24C10.75 0 0 10.75 0 24S10.75 48 24 48H424C437.25 48 448 37.25 448 24S437.25 0 424 0ZM224 96C126.799 96 48 174.797 48 272V336C48 433.203 126.799 512 224 512C321.203 512 400 433.203 400 336V272C400 174.797 321.203 96 224 96ZM352 336C352 406.58 294.58 464 224 464C153.422 464 96 406.58 96 336V272C96 201.42 153.422 144 224 144C294.58 144 352 201.42 352 272V336Z" />
        </Icon>
    </>
}