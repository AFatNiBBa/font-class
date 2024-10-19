
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-minus?s=solid square-minus}
 * @preview ![square-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDYgMzIgMzg0IDMyWk0zMTkuOTk4IDI4MEgxMjcuOTk4QzExNC43OTcgMjgwIDEwMy45OTYgMjY5LjE5NyAxMDMuOTk2IDI1NkMxMDMuOTk2IDI0Mi43OTkgMTE0Ljc5NyAyMzIgMTI3Ljk5OCAyMzJIMzE5Ljk5OEMzMzMuMTk1IDIzMiAzNDMuOTk2IDI0Mi43OTkgMzQzLjk5NiAyNTZDMzQzLjk5NiAyNjkuMTk3IDMzMy4xOTUgMjgwIDMxOS45OTggMjgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM319.998 280H127.998C114.797 280 103.996 269.197 103.996 256C103.996 242.799 114.797 232 127.998 232H319.998C333.195 232 343.996 242.799 343.996 256C343.996 269.197 333.195 280 319.998 280Z" />
        </Icon>
    </>
}