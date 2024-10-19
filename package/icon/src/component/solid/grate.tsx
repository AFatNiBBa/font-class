
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grate` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=solid grate}
 * @preview ![grate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk05NiA0MTZINjRWMjg4SDk2VjQxNlpNOTYgMjI0SDY0Vjk2SDk2VjIyNFpNMTkyIDQxNkgxNjBWMjg4SDE5MlY0MTZaTTE5MiAyMjRIMTYwVjk2SDE5MlYyMjRaTTI4OCA0MTZIMjU2VjI4OEgyODhWNDE2Wk0yODggMjI0SDI1NlY5NkgyODhWMjI0Wk0zODQgNDE2SDM1MlYyODhIMzg0VjQxNlpNMzg0IDIyNEgzNTJWOTZIMzg0VjIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Grate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM96 416H64V288H96V416ZM96 224H64V96H96V224ZM192 416H160V288H192V416ZM192 224H160V96H192V224ZM288 416H256V288H288V416ZM288 224H256V96H288V224ZM384 416H352V288H384V416ZM384 224H352V96H384V224Z" />
        </Icon>
    </>
}