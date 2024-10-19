
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-plus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-plus?s=light square-plus}
 * @preview ![square-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzIwIDI0MEgyNDBWMTYwQzI0MCAxNTEuMTU2IDIzMi44NDQgMTQ0IDIyNCAxNDRTMjA4IDE1MS4xNTYgMjA4IDE2MFYyNDBIMTI4QzExOS4xNTYgMjQwIDExMiAyNDcuMTU2IDExMiAyNTZTMTE5LjE1NiAyNzIgMTI4IDI3MkgyMDhWMzUyQzIwOCAzNjAuODQ0IDIxNS4xNTYgMzY4IDIyNCAzNjhTMjQwIDM2MC44NDQgMjQwIDM1MlYyNzJIMzIwQzMyOC44NDQgMjcyIDMzNiAyNjQuODQ0IDMzNiAyNTZTMzI4Ljg0NCAyNDAgMzIwIDI0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquarePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM320 240H240V160C240 151.156 232.844 144 224 144S208 151.156 208 160V240H128C119.156 240 112 247.156 112 256S119.156 272 128 272H208V352C208 360.844 215.156 368 224 368S240 360.844 240 352V272H320C328.844 272 336 264.844 336 256S328.844 240 320 240Z" />
        </Icon>
    </>
}