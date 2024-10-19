
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mug` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=light mug}
 * @preview ![mug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgNjRINjRDNDYuMzI4IDY0IDMyIDc4LjMyNiAzMiA5NlYzNTJDMzIgNDA1LjAyIDc0Ljk4IDQ0OCAxMjggNDQ4SDMyMEMzNzMuMDIgNDQ4IDQxNiA0MDUuMDIgNDE2IDM1MlYyODhINDY0QzUyNS43NSAyODggNTc2IDIzNy43NSA1NzYgMTc2UzUyNS43NSA2NCA0NjQgNjRaTTM4NCAzNTJDMzg0IDM4Ny4yODkgMzU1LjI5MSA0MTYgMzIwIDQxNkgxMjhDOTIuNzExIDQxNiA2NCAzODcuMjg5IDY0IDM1MlY5NkgzODRWMzUyWk00NjQgMjU2SDQxNlY5Nkg0NjRDNTA4LjEyNSA5NiA1NDQgMTMxLjg3NSA1NDQgMTc2UzUwOC4xMjUgMjU2IDQ2NCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Mug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M464 64H64C46.328 64 32 78.326 32 96V352C32 405.02 74.98 448 128 448H320C373.02 448 416 405.02 416 352V288H464C525.75 288 576 237.75 576 176S525.75 64 464 64ZM384 352C384 387.289 355.291 416 320 416H128C92.711 416 64 387.289 64 352V96H384V352ZM464 256H416V96H464C508.125 96 544 131.875 544 176S508.125 256 464 256Z" />
        </Icon>
    </>
}