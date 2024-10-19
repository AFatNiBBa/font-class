
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `casette-betamax` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/casette-betamax?s=solid casette-betamax}
 * @preview ![casette-betamax](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzUyQzE3Ny42MjUgMzUyIDE5MiAzMzcuNjI1IDE5MiAzMjBTMTc3LjYyNSAyODggMTYwIDI4OFMxMjggMzAyLjM3NSAxMjggMzIwUzE0Mi4zNzUgMzUyIDE2MCAzNTJaTTUyOCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODBWMTI4SDU3NlY4MEM1NzYgNTMuNDkgNTU0LjUxIDMyIDUyOCAzMlpNMCA0MzJDMCA0NTguNTEgMjEuNDkgNDgwIDQ4IDQ4MEg1MjhDNTU0LjUxIDQ4MCA1NzYgNDU4LjUxIDU3NiA0MzJWMTYwSDBWNDMyWk0zMjAgMjI0SDUxMlY0MTZIMzIwVjIyNFpNMTYwIDIyNEMyMTIuOTUxIDIyNCAyNTYgMjY3LjA1MSAyNTYgMzIwUzIxMi45NTEgNDE2IDE2MCA0MTZDMTA3LjA1MSA0MTYgNjQgMzcyLjk0OSA2NCAzMjBTMTA3LjA1MSAyMjQgMTYwIDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CasetteBetamax(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M160 352C177.625 352 192 337.625 192 320S177.625 288 160 288S128 302.375 128 320S142.375 352 160 352ZM528 32H48C21.49 32 0 53.49 0 80V128H576V80C576 53.49 554.51 32 528 32ZM0 432C0 458.51 21.49 480 48 480H528C554.51 480 576 458.51 576 432V160H0V432ZM320 224H512V416H320V224ZM160 224C212.951 224 256 267.051 256 320S212.951 416 160 416C107.051 416 64 372.949 64 320S107.051 224 160 224Z" />
        </Icon>
    </>
}