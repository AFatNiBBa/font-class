
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-sort` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=regular bars-sort}
 * @preview ![bars-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjggMzkySDI0QzEwLjggMzkyIDAgNDAyLjggMCA0MTZWNDE2QzAgNDI5LjIgMTAuOCA0NDAgMjQgNDQwSDE2OEMxODEuMiA0NDAgMTkyIDQyOS4yIDE5MiA0MTZWNDE2QzE5MiA0MDIuOCAxODEuMiAzOTIgMTY4IDM5MlpNNDI0IDcySDI0QzEwLjggNzIgMCA4Mi44IDAgOTZWOTZDMCAxMDkuMiAxMC44IDEyMCAyNCAxMjBINDI0QzQzNy4yIDEyMCA0NDggMTA5LjIgNDQ4IDk2Vjk2QzQ0OCA4Mi44IDQzNy4yIDcyIDQyNCA3MlpNMjk2IDIzMkgyNEMxMC44IDIzMiAwIDI0Mi44IDAgMjU2VjI1NkMwIDI2OS4yIDEwLjggMjgwIDI0IDI4MEgyOTZDMzA5LjIgMjgwIDMyMCAyNjkuMiAzMjAgMjU2VjI1NkMzMjAgMjQyLjggMzA5LjIgMjMyIDI5NiAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BarsSort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M168 392H24C10.8 392 0 402.8 0 416V416C0 429.2 10.8 440 24 440H168C181.2 440 192 429.2 192 416V416C192 402.8 181.2 392 168 392ZM424 72H24C10.8 72 0 82.8 0 96V96C0 109.2 10.8 120 24 120H424C437.2 120 448 109.2 448 96V96C448 82.8 437.2 72 424 72ZM296 232H24C10.8 232 0 242.8 0 256V256C0 269.2 10.8 280 24 280H296C309.2 280 320 269.2 320 256V256C320 242.8 309.2 232 296 232Z" />
        </Icon>
    </>
}