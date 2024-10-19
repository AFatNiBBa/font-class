
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ellipsis` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=light ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjI0QzIzOC4zMjYgMjI0IDIyNCAyMzguMzI2IDIyNCAyNTZDMjI0IDI3My42NzIgMjM4LjMyNiAyODggMjU2IDI4OFMyODggMjczLjY3MiAyODggMjU2QzI4OCAyMzguMzI2IDI3My42NzQgMjI0IDI1NiAyMjRaTTk2IDIyNEM3OC4zMjYgMjI0IDY0IDIzOC4zMjYgNjQgMjU2QzY0IDI3My42NzIgNzguMzI2IDI4OCA5NiAyODhTMTI4IDI3My42NzIgMTI4IDI1NkMxMjggMjM4LjMyNiAxMTMuNjc0IDIyNCA5NiAyMjRaTTQxNiAyMjRDMzk4LjMyNiAyMjQgMzg0IDIzOC4zMjYgMzg0IDI1NkMzODQgMjczLjY3MiAzOTguMzI2IDI4OCA0MTYgMjg4UzQ0OCAyNzMuNjcyIDQ0OCAyNTZDNDQ4IDIzOC4zMjYgNDMzLjY3NCAyMjQgNDE2IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Ellipsis(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 224C238.326 224 224 238.326 224 256C224 273.672 238.326 288 256 288S288 273.672 288 256C288 238.326 273.674 224 256 224ZM96 224C78.326 224 64 238.326 64 256C64 273.672 78.326 288 96 288S128 273.672 128 256C128 238.326 113.674 224 96 224ZM416 224C398.326 224 384 238.326 384 256C384 273.672 398.326 288 416 288S448 273.672 448 256C448 238.326 433.674 224 416 224Z" />
        </Icon>
    </>
}