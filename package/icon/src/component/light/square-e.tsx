
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-e` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=light square-e}
 * @preview ![square-e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzA0IDE2MEMzMTIuODQ0IDE2MCAzMjAgMTUyLjg0NCAzMjAgMTQ0UzMxMi44NDQgMTI4IDMwNCAxMjhIMTQ0QzEzNS4xNTYgMTI4IDEyOCAxMzUuMTU2IDEyOCAxNDRWMzY4QzEyOCAzNzYuODQ0IDEzNS4xNTYgMzg0IDE0NCAzODRIMzA0QzMxMi44NDQgMzg0IDMyMCAzNzYuODQ0IDMyMCAzNjhTMzEyLjg0NCAzNTIgMzA0IDM1MkgxNjBWMjcySDI1NkMyNjQuODQ0IDI3MiAyNzIgMjY0Ljg0NCAyNzIgMjU2UzI2NC44NDQgMjQwIDI1NiAyNDBIMTYwVjE2MEgzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareE(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM304 160C312.844 160 320 152.844 320 144S312.844 128 304 128H144C135.156 128 128 135.156 128 144V368C128 376.844 135.156 384 144 384H304C312.844 384 320 376.844 320 368S312.844 352 304 352H160V272H256C264.844 272 272 264.844 272 256S264.844 240 256 240H160V160H304Z" />
        </Icon>
    </>
}