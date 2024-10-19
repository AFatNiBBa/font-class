
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-user` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=solid square-user}
 * @preview ![square-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk0yMjQgMTI4QzI2My43NjYgMTI4IDI5NiAxNjAuMjM0IDI5NiAyMDBDMjk2IDIzOS43NjQgMjYzLjc2NiAyNzIgMjI0IDI3MkMxODQuMjM2IDI3MiAxNTIgMjM5Ljc2NCAxNTIgMjAwQzE1MiAxNjAuMjM0IDE4NC4yMzYgMTI4IDIyNCAxMjhaTTgxLjYxMyA0MTZDODkuNDM4IDM2MS43OTEgMTM1LjYyNSAzMjAgMTkyIDMyMEgyNTZDMzEyLjM3NSAzMjAgMzU4LjU2MiAzNjEuNzkxIDM2Ni4zODcgNDE2SDgxLjYxM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM224 128C263.766 128 296 160.234 296 200C296 239.764 263.766 272 224 272C184.236 272 152 239.764 152 200C152 160.234 184.236 128 224 128ZM81.613 416C89.438 361.791 135.625 320 192 320H256C312.375 320 358.562 361.791 366.387 416H81.613Z" />
        </Icon>
    </>
}