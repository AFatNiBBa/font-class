
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=sharp-duotone-solid bookmark-slash}
 * @preview ![bookmark-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwwIDc2LjZDMjU2IDE3NiAzODQgMjc1LjQgNTEyIDM3NC43TDUxMiAwIDEyOCAwem0wIDE5Ni44TDEyOCA1MTIgMzIwIDQwMCA1MTIgNTEybDAtMTIuNkwxMjggMTk2Ljh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 76.6C256 176 384 275.4 512 374.7L512 0 128 0zm0 196.8L128 512 320 400 512 512l0-12.6L128 196.8z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BookmarkSlash;