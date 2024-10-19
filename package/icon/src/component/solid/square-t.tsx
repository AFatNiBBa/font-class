
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-t` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-t?s=solid square-t}
 * @preview ![square-t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk0zMjggMTc2SDI0OFYzNjBDMjQ4IDM3My4yNSAyMzcuMjUgMzg0IDIyNCAzODRTMjAwIDM3My4yNSAyMDAgMzYwVjE3NkgxMjBDMTA2Ljc1IDE3NiA5NiAxNjUuMjUgOTYgMTUyUzEwNi43NSAxMjggMTIwIDEyOEgzMjhDMzQxLjI1IDEyOCAzNTIgMTM4Ljc1IDM1MiAxNTJTMzQxLjI1IDE3NiAzMjggMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareT(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM328 176H248V360C248 373.25 237.25 384 224 384S200 373.25 200 360V176H120C106.75 176 96 165.25 96 152S106.75 128 120 128H328C341.25 128 352 138.75 352 152S341.25 176 328 176Z" />
        </Icon>
    </>
}