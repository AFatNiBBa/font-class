
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-duotone-solid file-slash}
 * @preview ![file-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMEwzNTIgMGwwIDE2MCAxNjAgMCAwIDIxNC43QzM4NCAyNzUuNCAyNTYgMTc2IDEyOCA3Ni42TDEyOCAwem0wIDE5Ni44TDUxMiA0OTkuNGwwIDEyLjYtMzg0IDAgMC0zMTUuMnpNMzg0IDBMNTEyIDEyOGwtMTI4IDBMMzg0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0L352 0l0 160 160 0 0 214.7C384 275.4 256 176 128 76.6L128 0zm0 196.8L512 499.4l0 12.6-384 0 0-315.2zM384 0L512 128l-128 0L384 0z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default FileSlash;