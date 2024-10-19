
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=solid magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTcxIDQ0OC40MDJMMzgwLjYyMyAzMjQuMDUzQzQwMi45NTMgMjkwLjkwMiA0MTYgMjUwLjk3NyA0MTYgMjA4QzQxNiA5My4xMjUgMzIyLjg3NSAwIDIwOCAwUzAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNkMyNTAuOTc3IDQxNiAyOTAuOTAyIDQwMi45NTMgMzI0LjA1MyAzODAuNjIzTDQ0OC40MDIgNTA0Ljk3MUM0NTcuNzc1IDUxNC4zNDQgNDcyLjk3MSA1MTQuMzQ0IDQ4Mi4zNDQgNTA0Ljk3MUw1MDQuOTcxIDQ4Mi4zNDRDNTE0LjM0NCA0NzIuOTcxIDUxNC4zNDQgNDU3Ljc3NSA1MDQuOTcxIDQ0OC40MDJaTTgwIDIwOEM4MCAxMzcuNDIgMTM3LjQyIDgwIDIwOCA4MFMzMzYgMTM3LjQyIDMzNiAyMDhDMzM2IDI3OC41NzggMjc4LjU4IDMzNiAyMDggMzM2UzgwIDI3OC41NzggODAgMjA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MagnifyingGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.971 448.402L380.623 324.053C402.953 290.902 416 250.977 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C250.977 416 290.902 402.953 324.053 380.623L448.402 504.971C457.775 514.344 472.971 514.344 482.344 504.971L504.971 482.344C514.344 472.971 514.344 457.775 504.971 448.402ZM80 208C80 137.42 137.42 80 208 80S336 137.42 336 208C336 278.578 278.58 336 208 336S80 278.578 80 208Z" />
        </Icon>
    </>
}