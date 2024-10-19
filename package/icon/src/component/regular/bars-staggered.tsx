
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-staggered` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=regular bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgMzkySDI0QzEwLjggMzkyIDAgNDAyLjggMCA0MTZWNDE2QzAgNDI5LjIgMTAuOCA0NDAgMjQgNDQwSDQyNEM0MzcuMiA0NDAgNDQ4IDQyOS4yIDQ0OCA0MTZWNDE2QzQ0OCA0MDIuOCA0MzcuMiAzOTIgNDI0IDM5MlpNNDI0IDcySDI0QzEwLjggNzIgMCA4Mi44IDAgOTZWOTZDMCAxMDkuMiAxMC44IDEyMCAyNCAxMjBINDI0QzQzNy4yIDEyMCA0NDggMTA5LjIgNDQ4IDk2Vjk2QzQ0OCA4Mi44IDQzNy4yIDcyIDQyNCA3MlpNNDg4IDIzMkg4OEM3NC44IDIzMiA2NCAyNDIuOCA2NCAyNTZWMjU2QzY0IDI2OS4yIDc0LjggMjgwIDg4IDI4MEg0ODhDNTAxLjIgMjgwIDUxMiAyNjkuMiA1MTIgMjU2VjI1NkM1MTIgMjQyLjggNTAxLjIgMjMyIDQ4OCAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BarsStaggered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M424 392H24C10.8 392 0 402.8 0 416V416C0 429.2 10.8 440 24 440H424C437.2 440 448 429.2 448 416V416C448 402.8 437.2 392 424 392ZM424 72H24C10.8 72 0 82.8 0 96V96C0 109.2 10.8 120 24 120H424C437.2 120 448 109.2 448 96V96C448 82.8 437.2 72 424 72ZM488 232H88C74.8 232 64 242.8 64 256V256C64 269.2 74.8 280 88 280H488C501.2 280 512 269.2 512 256V256C512 242.8 501.2 232 488 232Z" />
        </Icon>
    </>
}