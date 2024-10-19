
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-divide` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=regular square-divide}
 * @preview ![square-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzIwIDIzMkgxMjhDMTE0Ljc0NiAyMzIgMTA0IDI0Mi43NDQgMTA0IDI1NkMxMDQgMjY5LjI1NCAxMTQuNzQ2IDI4MCAxMjggMjgwSDMyMEMzMzMuMjU0IDI4MCAzNDQgMjY5LjI1NCAzNDQgMjU2QzM0NCAyNDIuNzQ0IDMzMy4yNTQgMjMyIDMyMCAyMzJaTTIyNCAxOTJDMjQxLjY3NCAxOTIgMjU2IDE3Ny42NzIgMjU2IDE2MEMyNTYgMTQyLjMyNiAyNDEuNjc0IDEyOCAyMjQgMTI4UzE5MiAxNDIuMzI2IDE5MiAxNjBDMTkyIDE3Ny42NzIgMjA2LjMyNiAxOTIgMjI0IDE5MlpNMjI0IDMyMEMyMDYuMzI2IDMyMCAxOTIgMzM0LjMyNiAxOTIgMzUyQzE5MiAzNjkuNjcyIDIwNi4zMjYgMzg0IDIyNCAzODRTMjU2IDM2OS42NzIgMjU2IDM1MkMyNTYgMzM0LjMyNiAyNDEuNjc0IDMyMCAyMjQgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareDivide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM320 232H128C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280H320C333.254 280 344 269.254 344 256C344 242.744 333.254 232 320 232ZM224 192C241.674 192 256 177.672 256 160C256 142.326 241.674 128 224 128S192 142.326 192 160C192 177.672 206.326 192 224 192ZM224 320C206.326 320 192 334.326 192 352C192 369.672 206.326 384 224 384S256 369.672 256 352C256 334.326 241.674 320 224 320Z" />
        </Icon>
    </>
}