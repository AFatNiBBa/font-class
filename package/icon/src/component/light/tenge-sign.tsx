
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tenge-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=light tenge-sign}
 * @preview ![tenge-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiA2NEgzNjhDMzc2Ljg0NCA2NCAzODQgNTYuODQ0IDM4NCA0OFMzNzYuODQ0IDMyIDM2OCAzMkgxNkM3LjE1NiAzMiAwIDM5LjE1NiAwIDQ4UzcuMTU2IDY0IDE2IDY0Wk0zNjggMTYwSDE2QzcuMTU2IDE2MCAwIDE2Ny4xNTYgMCAxNzZTNy4xNTYgMTkyIDE2IDE5MkgxNzZWNDY0QzE3NiA0NzIuODQ0IDE4My4xNTYgNDgwIDE5MiA0ODBTMjA4IDQ3Mi44NDQgMjA4IDQ2NFYxOTJIMzY4QzM3Ni44NDQgMTkyIDM4NCAxODQuODQ0IDM4NCAxNzZTMzc2Ljg0NCAxNjAgMzY4IDE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TengeSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64ZM368 160H16C7.156 160 0 167.156 0 176S7.156 192 16 192H176V464C176 472.844 183.156 480 192 480S208 472.844 208 464V192H368C376.844 192 384 184.844 384 176S376.844 160 368 160Z" />
        </Icon>
    </>
}