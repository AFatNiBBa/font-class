
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `exclamation` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=light exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCA0MDBDNDYuMzI2IDQwMCAzMiA0MTQuMzI2IDMyIDQzMlM0Ni4zMjYgNDY0IDY0IDQ2NFM5NiA0NDkuNjc0IDk2IDQzMlM4MS42NzQgNDAwIDY0IDQwMFpNNjQgMzUyQzcyLjg0NCAzNTIgODAgMzQ0Ljg0NCA4MCAzMzZWNDhDODAgMzkuMTU2IDcyLjg0NCAzMiA2NCAzMlM0OCAzOS4xNTYgNDggNDhWMzM2QzQ4IDM0NC44NDQgNTUuMTU2IDM1MiA2NCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Exclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 128 512" {...props}>
            <path d="M64 400C46.326 400 32 414.326 32 432S46.326 464 64 464S96 449.674 96 432S81.674 400 64 400ZM64 352C72.844 352 80 344.844 80 336V48C80 39.156 72.844 32 64 32S48 39.156 48 48V336C48 344.844 55.156 352 64 352Z" />
        </Icon>
    </>
}