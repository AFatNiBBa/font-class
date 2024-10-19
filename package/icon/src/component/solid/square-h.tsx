
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-h` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=solid square-h}
 * @preview ![square-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk0zMzYgMzYwQzMzNiAzNzMuMjUgMzI1LjI1IDM4NCAzMTIgMzg0UzI4OCAzNzMuMjUgMjg4IDM2MFYyODBIMTYwVjM2MEMxNjAgMzczLjI1IDE0OS4yNSAzODQgMTM2IDM4NFMxMTIgMzczLjI1IDExMiAzNjBWMTUyQzExMiAxMzguNzUgMTIyLjc1IDEyOCAxMzYgMTI4UzE2MCAxMzguNzUgMTYwIDE1MlYyMzJIMjg4VjE1MkMyODggMTM4Ljc1IDI5OC43NSAxMjggMzEyIDEyOFMzMzYgMTM4Ljc1IDMzNiAxNTJWMzYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM336 360C336 373.25 325.25 384 312 384S288 373.25 288 360V280H160V360C160 373.25 149.25 384 136 384S112 373.25 112 360V152C112 138.75 122.75 128 136 128S160 138.75 160 152V232H288V152C288 138.75 298.75 128 312 128S336 138.75 336 152V360Z" />
        </Icon>
    </>
}