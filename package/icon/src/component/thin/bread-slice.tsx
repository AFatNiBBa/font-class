
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bread-slice` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=thin bread-slice}
 * @preview ![bread-slice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDOTYgMzIgMCAxMTIuMDM1IDAgMTc2Ljk2NUMwIDIwMyAyMS41NTcgMjI0IDU2Ljg4OSAyMjRINjRWNDQ4QzY0IDQ2NS42NzQgNzguMzI4IDQ4MCA5NiA0ODBINDE2QzQzMy42NzQgNDgwIDQ0OCA0NjUuNjc0IDQ0OCA0NDhWMjI0SDQ1NS4xMTFDNDkwLjQ0NSAyMjQgNTEyIDIwMyA1MTIgMTc2Ljk2NUM1MTIgMTEyLjAzNSA0MTYgMzIgMjU2IDMyWk00NTUuMTExIDIwOEg0MzJWNDQ4QzQzMiA0NTYuODIyIDQyNC44MjIgNDY0IDQxNiA0NjRIOTZDODcuMTc4IDQ2NCA4MCA0NTYuODIyIDgwIDQ0OFYyMDhINTYuODg5QzMyLjQzMiAyMDggMTYgMTk1LjUyNyAxNiAxNzYuOTY1QzE2IDEyNC4yNTQgMTAxLjQ2NyA0OCAyNTYgNDhDNDEwLjUzNSA0OCA0OTYgMTI0LjI1NCA0OTYgMTc2Ljk2NUM0OTYgMTk1LjUyNyA0NzkuNTY4IDIwOCA0NTUuMTExIDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BreadSlice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C96 32 0 112.035 0 176.965C0 203 21.557 224 56.889 224H64V448C64 465.674 78.328 480 96 480H416C433.674 480 448 465.674 448 448V224H455.111C490.445 224 512 203 512 176.965C512 112.035 416 32 256 32ZM455.111 208H432V448C432 456.822 424.822 464 416 464H96C87.178 464 80 456.822 80 448V208H56.889C32.432 208 16 195.527 16 176.965C16 124.254 101.467 48 256 48C410.535 48 496 124.254 496 176.965C496 195.527 479.568 208 455.111 208Z" />
        </Icon>
    </>
}