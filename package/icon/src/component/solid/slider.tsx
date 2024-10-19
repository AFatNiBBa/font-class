
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=solid slider}
 * @preview ![slider](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDI0MFYyNzJDMCAyODkuNiAxNC40IDMwNCAzMiAzMDRIMjI0VjIwOEgzMkMxNC40IDIwOCAwIDIyMi40IDAgMjQwWk00ODAgMjA4SDQxNlYxNDRDNDE2IDExNy40OSAzOTQuNTEgOTYgMzY4IDk2SDMwNEMyNzcuNDkgOTYgMjU2IDExNy40OSAyNTYgMTQ0VjM2OEMyNTYgMzk0LjUxIDI3Ny40OSA0MTYgMzA0IDQxNkgzNjhDMzk0LjUxIDQxNiA0MTYgMzk0LjUxIDQxNiAzNjhWMzA0SDQ4MEM0OTcuNiAzMDQgNTEyIDI4OS42IDUxMiAyNzJWMjQwQzUxMiAyMjIuNCA0OTcuNiAyMDggNDgwIDIwOFpNMzUyIDM1MkgzMjBWMTYwSDM1MlYzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Slider(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 240V272C0 289.6 14.4 304 32 304H224V208H32C14.4 208 0 222.4 0 240ZM480 208H416V144C416 117.49 394.51 96 368 96H304C277.49 96 256 117.49 256 144V368C256 394.51 277.49 416 304 416H368C394.51 416 416 394.51 416 368V304H480C497.6 304 512 289.6 512 272V240C512 222.4 497.6 208 480 208ZM352 352H320V160H352V352Z" />
        </Icon>
    </>
}