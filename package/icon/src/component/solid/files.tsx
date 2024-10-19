
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `files` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=solid files}
 * @preview ![files](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMFY5Nkg0NDhMMzUyIDBaTTMyMCA5NlYwSDE0NEMxMTcuNDkgMCA5NiAyMS40OTIgOTYgNDhWMzY4Qzk2IDM5NC41MDggMTE3LjQ5IDQxNiAxNDQgNDE2SDQwMEM0MjYuNTEgNDE2IDQ0OCAzOTQuNTA4IDQ0OCAzNjhWMTI4SDM1MkMzMzQuNCAxMjggMzIwIDExMy42MDIgMzIwIDk2Wk00OCA0MzJWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzA0QzMzMC41MSA1MTIgMzUyIDQ5MC41MDggMzUyIDQ2NEg4MEM2Mi4zMjYgNDY0IDQ4IDQ0OS42NzIgNDggNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Files(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 0V96H448L352 0ZM320 96V0H144C117.49 0 96 21.492 96 48V368C96 394.508 117.49 416 144 416H400C426.51 416 448 394.508 448 368V128H352C334.4 128 320 113.602 320 96ZM48 432V96C21.49 96 0 117.492 0 144V448C0 483.346 28.654 512 64 512H304C330.51 512 352 490.508 352 464H80C62.326 464 48 449.672 48 432Z" />
        </Icon>
    </>
}