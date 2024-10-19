
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `curling-stone` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=solid curling-stone}
 * @preview ![curling-stone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjI0QzQ4MCAxODguNjUyIDQ1MS4zNDYgMTYwIDQxNiAxNjBIMjI0VjEyOEMyMjQgMTEwLjMyNiAyMzguMzI2IDk2IDI1NiA5Nkg0MDBDNDA4LjgzNiA5NiA0MTYgODguODM2IDQxNiA4MFY0OEM0MTYgMzkuMTYyIDQwOC44MzYgMzIgNDAwIDMySDI1NkMyMDIuOTggMzIgMTYwIDc0Ljk4IDE2MCAxMjhWMTYwQzEyNC42NTQgMTYwIDk2IDE4OC42NTIgOTYgMjI0QzQyLjk4IDIyNCAwIDI2Ni45OCAwIDMyMFYzMzZINTc2VjMyMEM1NzYgMjY2Ljk4IDUzMy4wMiAyMjQgNDgwIDIyNFpNMCAzODRDMCA0MzcuMDIgNDIuOTggNDgwIDk2IDQ4MEg0ODBDNTMzLjAyIDQ4MCA1NzYgNDM3LjAyIDU3NiAzODRWMzY4SDBWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CurlingStone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 224C480 188.652 451.346 160 416 160H224V128C224 110.326 238.326 96 256 96H400C408.836 96 416 88.836 416 80V48C416 39.162 408.836 32 400 32H256C202.98 32 160 74.98 160 128V160C124.654 160 96 188.652 96 224C42.98 224 0 266.98 0 320V336H576V320C576 266.98 533.02 224 480 224ZM0 384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V368H0V384Z" />
        </Icon>
    </>
}