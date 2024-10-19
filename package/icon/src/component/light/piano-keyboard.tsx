
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `piano-keyboard` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=light piano-keyboard}
 * @preview ![piano-keyboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjRINjRDMjguODAxIDY0IDAgOTIuNzk5IDAgMTI4VjM4NEMwIDQxOS4xOTkgMjguODAxIDQ0OCA2NCA0NDhINTEyQzU0Ny4xOTkgNDQ4IDU3NiA0MTkuMTk5IDU3NiAzODRWMTI4QzU3NiA5Mi43OTkgNTQ3LjE5OSA2NCA1MTIgNjRaTTEyOCA0MTZINjRDNDYuMzI2IDQxNiAzMiA0MDEuNjcyIDMyIDM4NFYyMjRIOTZWMzIwQzk2IDMyOC44NzUgMTAzLjEyNSAzMzYgMTEyIDMzNkgxMjhWNDE2Wk0yNzIgNDE2SDE2MFYzMzZIMTc2QzE4NC44NzUgMzM2IDE5MiAzMjguODc1IDE5MiAzMjBWMjI0SDI0MFYzMjBDMjQwIDMyOC44NzUgMjQ3LjEyNSAzMzYgMjU2IDMzNkgyNzJWNDE2Wk0xMjggMzA0VjIyNEgxNjBWMzA0SDEyOFpNNDE2IDQxNkgzMDRWMzM2SDMyMEMzMjguODc1IDMzNiAzMzYgMzI4Ljg3NSAzMzYgMzIwVjIyNEgzODRWMzIwQzM4NCAzMjguODc1IDM5MS4xMjUgMzM2IDQwMCAzMzZINDE2VjQxNlpNMjcyIDMwNFYyMjRIMzA0VjMwNEgyNzJaTTU0NCAzODRDNTQ0IDQwMS42NzIgNTI5LjY3NCA0MTYgNTEyIDQxNkg0NDhWMzM2SDQ2NEM0NzIuODc1IDMzNiA0ODAgMzI4Ljg3NSA0ODAgMzIwVjIyNEg1NDRWMzg0Wk00MTYgMzA0VjIyNEg0NDhWMzA0SDQxNlpNNTQ0IDE5MkgzMlYxMjhDMzIgMTEwLjMyNiA0Ni4zMjYgOTYgNjQgOTZINTEyQzUyOS42NzQgOTYgNTQ0IDExMC4zMjYgNTQ0IDEyOFYxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PianoKeyboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 64H64C28.801 64 0 92.799 0 128V384C0 419.199 28.801 448 64 448H512C547.199 448 576 419.199 576 384V128C576 92.799 547.199 64 512 64ZM128 416H64C46.326 416 32 401.672 32 384V224H96V320C96 328.875 103.125 336 112 336H128V416ZM272 416H160V336H176C184.875 336 192 328.875 192 320V224H240V320C240 328.875 247.125 336 256 336H272V416ZM128 304V224H160V304H128ZM416 416H304V336H320C328.875 336 336 328.875 336 320V224H384V320C384 328.875 391.125 336 400 336H416V416ZM272 304V224H304V304H272ZM544 384C544 401.672 529.674 416 512 416H448V336H464C472.875 336 480 328.875 480 320V224H544V384ZM416 304V224H448V304H416ZM544 192H32V128C32 110.326 46.326 96 64 96H512C529.674 96 544 110.326 544 128V192Z" />
        </Icon>
    </>
}