
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `input-pipe` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=regular input-pipe}
 * @preview ![input-pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMTYwQzExNC43NDYgMTYwIDEwNCAxNzAuNzQ0IDEwNCAxODRWMzI4QzEwNCAzNDEuMjU0IDExNC43NDYgMzUyIDEyOCAzNTJTMTUyIDM0MS4yNTQgMTUyIDMyOFYxODRDMTUyIDE3MC43NDQgMTQxLjI1NCAxNjAgMTI4IDE2MFpNNTc2LjAwMiA2NEg2My45OThDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2My45OTggNDQ4SDU3Ni4wMDJDNjExLjM0NiA0NDggNjQwIDQxOS4zNDggNjQwIDM4NFYxMjhDNjQwIDkyLjY1NCA2MTEuMzQ2IDY0IDU3Ni4wMDIgNjRaTTU5Mi4wMDIgMzg0QzU5Mi4wMDIgMzkyLjgzNiA1ODQuODM4IDQwMCA1NzYuMDAyIDQwMEg2My45OThDNTUuMTYyIDQwMCA0Ny45OTggMzkyLjgzNiA0Ny45OTggMzg0VjEyOEM0Ny45OTggMTE5LjE2MiA1NS4xNjIgMTEyIDYzLjk5OCAxMTJINTc2LjAwMkM1ODQuODM4IDExMiA1OTIuMDAyIDExOS4xNjIgNTkyLjAwMiAxMjhWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function InputPipe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 160C114.746 160 104 170.744 104 184V328C104 341.254 114.746 352 128 352S152 341.254 152 328V184C152 170.744 141.254 160 128 160ZM576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM592.002 384C592.002 392.836 584.838 400 576.002 400H63.998C55.162 400 47.998 392.836 47.998 384V128C47.998 119.162 55.162 112 63.998 112H576.002C584.838 112 592.002 119.162 592.002 128V384Z" />
        </Icon>
    </>
}