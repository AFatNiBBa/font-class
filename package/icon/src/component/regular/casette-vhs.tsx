
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `casette-vhs` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/casette-vhs?s=regular casette-vhs}
 * @preview ![casette-vhs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODQgMzg0SDM5MkM0NDAuNjI1IDM4NCA0ODAgMzQ0LjYyNSA0ODAgMjk2UzQ0MC42MjUgMjA4IDM5MiAyMDhIMTg0QzEzNS4zNzUgMjA4IDk2IDI0Ny4zNzUgOTYgMjk2UzEzNS4zNzUgMzg0IDE4NCAzODRaTTQwMCAyNjRDNDE3LjYyNSAyNjQgNDMyIDI3OC4zNzUgNDMyIDI5NlM0MTcuNjI1IDMyOCA0MDAgMzI4VjI2NFpNMjI0IDI1NkgzNTJWMzM2SDIyNFYyNTZaTTE3NiAyNjRWMzI4QzE1OC4zNzUgMzI4IDE0NCAzMTMuNjI1IDE0NCAyOTZTMTU4LjM3NSAyNjQgMTc2IDI2NFpNNTEyIDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINTEyQzU0Ny4zNDggNDgwIDU3NiA0NTEuMzQ2IDU3NiA0MTZWOTZDNTc2IDYwLjY1NCA1NDcuMzQ4IDMyIDUxMiAzMlpNNTI4IDQxNkM1MjggNDI0LjgyMiA1MjAuODIyIDQzMiA1MTIgNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyMiA0OCA0MTZWMTYwSDUyOFY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CasetteVhs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M184 384H392C440.625 384 480 344.625 480 296S440.625 208 392 208H184C135.375 208 96 247.375 96 296S135.375 384 184 384ZM400 264C417.625 264 432 278.375 432 296S417.625 328 400 328V264ZM224 256H352V336H224V256ZM176 264V328C158.375 328 144 313.625 144 296S158.375 264 176 264ZM512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V160H528V416Z" />
        </Icon>
    </>
}