
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=regular arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTIwVjM2MEMzNTIgMzczLjI1IDM0MS4yNSAzODQgMzI4IDM4NFMzMDQgMzczLjI1IDMwNCAzNjBWMTc3LjkzOEw3Mi45NjkgNDA4Ljk2OUM2OC4yODEgNDEzLjY1NiA2Mi4xNDEgNDE2IDU2IDQxNlM0My43MTkgNDEzLjY1NiAzOS4wMzEgNDA4Ljk2OUMyOS42NTYgMzk5LjU5NCAyOS42NTYgMzg0LjQwNiAzOS4wMzEgMzc1LjAzMUwyNzAuMDYyIDE0NEg4OEM3NC43NSAxNDQgNjQgMTMzLjI1IDY0IDEyMFM3NC43NSA5NiA4OCA5NkgzMjhDMzQxLjI1IDk2IDM1MiAxMDYuNzUgMzUyIDEyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 120V360C352 373.25 341.25 384 328 384S304 373.25 304 360V177.938L72.969 408.969C68.281 413.656 62.141 416 56 416S43.719 413.656 39.031 408.969C29.656 399.594 29.656 384.406 39.031 375.031L270.062 144H88C74.75 144 64 133.25 64 120S74.75 96 88 96H328C341.25 96 352 106.75 352 120Z" />
        </Icon>
    </>
}