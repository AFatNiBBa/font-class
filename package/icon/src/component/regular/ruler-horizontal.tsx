
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-horizontal` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=regular ruler-horizontal}
 * @preview ![ruler-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMTI4SDQ4QzIxLjYgMTI4IDAgMTQ5LjYgMCAxNzZWMzM2QzAgMzYyLjQgMjEuNiAzODQgNDggMzg0SDU5MkM2MTguNCAzODQgNjQwIDM2Mi40IDY0MCAzMzZWMTc2QzY0MCAxNDkuNiA2MTguNCAxMjggNTkyIDEyOFpNNTkyIDMzNkg0OFYxNzZIMTEyVjIyNEMxMTIgMjMyLjggMTE5LjIgMjQwIDEyOCAyNDBIMTI4QzEzNi44IDI0MCAxNDQgMjMyLjggMTQ0IDIyNFYxNzZIMjA4VjIyNEMyMDggMjMyLjggMjE1LjIgMjQwIDIyNCAyNDBIMjI0QzIzMi44IDI0MCAyNDAgMjMyLjggMjQwIDIyNFYxNzZIMzA0VjIyNEMzMDQgMjMyLjggMzExLjIgMjQwIDMyMCAyNDBIMzIwQzMyOC44IDI0MCAzMzYgMjMyLjggMzM2IDIyNFYxNzZINDAwVjIyNEM0MDAgMjMyLjggNDA3LjIgMjQwIDQxNiAyNDBINDE2QzQyNC44IDI0MCA0MzIgMjMyLjggNDMyIDIyNFYxNzZINDk2VjIyNEM0OTYgMjMyLjggNTAzLjIgMjQwIDUxMiAyNDBINTEyQzUyMC44IDI0MCA1MjggMjMyLjggNTI4IDIyNFYxNzZINTkyVjMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RulerHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 128H48C21.6 128 0 149.6 0 176V336C0 362.4 21.6 384 48 384H592C618.4 384 640 362.4 640 336V176C640 149.6 618.4 128 592 128ZM592 336H48V176H112V224C112 232.8 119.2 240 128 240H128C136.8 240 144 232.8 144 224V176H208V224C208 232.8 215.2 240 224 240H224C232.8 240 240 232.8 240 224V176H304V224C304 232.8 311.2 240 320 240H320C328.8 240 336 232.8 336 224V176H400V224C400 232.8 407.2 240 416 240H416C424.8 240 432 232.8 432 224V176H496V224C496 232.8 503.2 240 512 240H512C520.8 240 528 232.8 528 224V176H592V336Z" />
        </Icon>
    </>
}