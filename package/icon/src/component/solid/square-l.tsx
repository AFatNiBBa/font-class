
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-l` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-l?s=solid square-l}
 * @preview ![square-l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk0yOTYgMzg0SDE1MkMxMzguNzUgMzg0IDEyOCAzNzMuMjUgMTI4IDM2MFYxNTJDMTI4IDEzOC43NSAxMzguNzUgMTI4IDE1MiAxMjhTMTc2IDEzOC43NSAxNzYgMTUyVjMzNkgyOTZDMzA5LjI1IDMzNiAzMjAgMzQ2Ljc1IDMyMCAzNjBTMzA5LjI1IDM4NCAyOTYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareL(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM296 384H152C138.75 384 128 373.25 128 360V152C128 138.75 138.75 128 152 128S176 138.75 176 152V336H296C309.25 336 320 346.75 320 360S309.25 384 296 384Z" />
        </Icon>
    </>
}