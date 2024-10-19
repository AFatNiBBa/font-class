
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `timeline` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=light timeline}
 * @preview ![timeline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQgMjQwSDUyOFYxMjUuNzM2QzU1NS41NTUgMTE4LjYgNTc2IDkzLjc4NSA1NzYgNjRDNTc2IDI4LjY1NiA1NDcuMzQ4IDAgNTEyIDBDNDc2LjY1NCAwIDQ0OCAyOC42NTYgNDQ4IDY0QzQ0OCA5My43ODUgNDY4LjQ0MyAxMTguNiA0OTYgMTI1LjczNlYyNDBIMTQ0VjEyNS43MzZDMTcxLjU1NSAxMTguNiAxOTIgOTMuNzg1IDE5MiA2NEMxOTIgMjguNjU2IDE2My4zNDggMCAxMjggMEM5Mi42NTQgMCA2NCAyOC42NTYgNjQgNjRDNjQgOTMuNzg1IDg0LjQ0MyAxMTguNiAxMTIgMTI1LjczNlYyNDBIMTZDNy4xNTYgMjQwIDAgMjQ3LjE1NiAwIDI1NlM3LjE1NiAyNzIgMTYgMjcySDMwNFYzODYuMjY0QzI3Ni40NDMgMzkzLjQgMjU2IDQxOC4yMTUgMjU2IDQ0OEMyNTYgNDgzLjM0NCAyODQuNjU0IDUxMiAzMjAgNTEyQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhDMzg0IDQxOC4yMTUgMzYzLjU1NSAzOTMuNCAzMzYgMzg2LjI2NFYyNzJINjI0QzYzMi44NDQgMjcyIDY0MCAyNjQuODQ0IDY0MCAyNTZTNjMyLjg0NCAyNDAgNjI0IDI0MFpNNDgwIDY0QzQ4MCA0Ni4zNTUgNDk0LjM1NSAzMiA1MTIgMzJTNTQ0IDQ2LjM1NSA1NDQgNjRTNTI5LjY0NSA5NiA1MTIgOTZTNDgwIDgxLjY0NSA0ODAgNjRaTTk2IDY0Qzk2IDQ2LjM1NSAxMTAuMzU1IDMyIDEyOCAzMlMxNjAgNDYuMzU1IDE2MCA2NFMxNDUuNjQ1IDk2IDEyOCA5NlM5NiA4MS42NDUgOTYgNjRaTTM1MiA0NDhDMzUyIDQ2NS42NDUgMzM3LjY0NSA0ODAgMzIwIDQ4MFMyODggNDY1LjY0NSAyODggNDQ4UzMwMi4zNTUgNDE2IDMyMCA0MTZTMzUyIDQzMC4zNTUgMzUyIDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Timeline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624 240H528V125.736C555.555 118.6 576 93.785 576 64C576 28.656 547.348 0 512 0C476.654 0 448 28.656 448 64C448 93.785 468.443 118.6 496 125.736V240H144V125.736C171.555 118.6 192 93.785 192 64C192 28.656 163.348 0 128 0C92.654 0 64 28.656 64 64C64 93.785 84.443 118.6 112 125.736V240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H304V386.264C276.443 393.4 256 418.215 256 448C256 483.344 284.654 512 320 512C355.348 512 384 483.344 384 448C384 418.215 363.555 393.4 336 386.264V272H624C632.844 272 640 264.844 640 256S632.844 240 624 240ZM480 64C480 46.355 494.355 32 512 32S544 46.355 544 64S529.645 96 512 96S480 81.645 480 64ZM96 64C96 46.355 110.355 32 128 32S160 46.355 160 64S145.645 96 128 96S96 81.645 96 64ZM352 448C352 465.645 337.645 480 320 480S288 465.645 288 448S302.355 416 320 416S352 430.355 352 448Z" />
        </Icon>
    </>
}