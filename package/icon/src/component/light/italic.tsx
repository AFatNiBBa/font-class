
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=light italic}
 * @preview ![italic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDhDMzg0IDU2Ljg0NCAzNzYuODQ0IDY0IDM2OCA2NEgyODQuNzNMMTMyLjExNSA0NDhIMjA4QzIxNi44NDQgNDQ4IDIyNCA0NTUuMTU2IDIyNCA0NjRTMjE2Ljg0NCA0ODAgMjA4IDQ4MEgxNkM3LjE1NiA0ODAgMCA0NzIuODQ0IDAgNDY0UzcuMTU2IDQ0OCAxNiA0NDhIOTkuMjdMMjUxLjg4NSA2NEgxNzZDMTY3LjE1NiA2NCAxNjAgNTYuODQ0IDE2MCA0OFMxNjcuMTU2IDMyIDE3NiAzMkgzNjhDMzc2Ljg0NCAzMiAzODQgMzkuMTU2IDM4NCA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Italic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 48C384 56.844 376.844 64 368 64H284.73L132.115 448H208C216.844 448 224 455.156 224 464S216.844 480 208 480H16C7.156 480 0 472.844 0 464S7.156 448 16 448H99.27L251.885 64H176C167.156 64 160 56.844 160 48S167.156 32 176 32H368C376.844 32 384 39.156 384 48Z" />
        </Icon>
    </>
}