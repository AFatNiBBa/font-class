
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-l` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-l?s=regular square-l}
 * @preview ![square-l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMjk2IDMzNkgxNzZWMTUyQzE3NiAxMzguNzUgMTY1LjI1IDEyOCAxNTIgMTI4UzEyOCAxMzguNzUgMTI4IDE1MlYzNjBDMTI4IDM3My4yNSAxMzguNzUgMzg0IDE1MiAzODRIMjk2QzMwOS4yNSAzODQgMzIwIDM3My4yNSAzMjAgMzYwUzMwOS4yNSAzMzYgMjk2IDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareL(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM296 336H176V152C176 138.75 165.25 128 152 128S128 138.75 128 152V360C128 373.25 138.75 384 152 384H296C309.25 384 320 373.25 320 360S309.25 336 296 336Z" />
        </Icon>
    </>
}