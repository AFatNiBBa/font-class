
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-h` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=light square-h}
 * @preview ![square-h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzA0IDEyOEMyOTUuMTU2IDEyOCAyODggMTM1LjE1NiAyODggMTQ0VjI0MEgxNjBWMTQ0QzE2MCAxMzUuMTU2IDE1Mi44NDQgMTI4IDE0NCAxMjhTMTI4IDEzNS4xNTYgMTI4IDE0NFYzNjhDMTI4IDM3Ni44NDQgMTM1LjE1NiAzODQgMTQ0IDM4NFMxNjAgMzc2Ljg0NCAxNjAgMzY4VjI3MkgyODhWMzY4QzI4OCAzNzYuODQ0IDI5NS4xNTYgMzg0IDMwNCAzODRTMzIwIDM3Ni44NDQgMzIwIDM2OFYxNDRDMzIwIDEzNS4xNTYgMzEyLjg0NCAxMjggMzA0IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareH(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM304 128C295.156 128 288 135.156 288 144V240H160V144C160 135.156 152.844 128 144 128S128 135.156 128 144V368C128 376.844 135.156 384 144 384S160 376.844 160 368V272H288V368C288 376.844 295.156 384 304 384S320 376.844 320 368V144C320 135.156 312.844 128 304 128Z" />
        </Icon>
    </>
}