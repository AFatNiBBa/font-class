
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `files` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=duotone files}
 * @preview ![files](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDM2OFY0OEM5NiAyMS40OSAxMTcuNDkgMCAxNDQgMEgzNTJWOTZINDQ4VjM2OEM0NDggMzk0LjUxIDQyNi41MSA0MTYgNDAwIDQxNkgxNDRDMTE3LjQ5IDQxNiA5NiAzOTQuNTEgOTYgMzY4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00OCA0MzJWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzA0QzMzMC41MSA1MTIgMzUyIDQ5MC41MDggMzUyIDQ2NEg4MEM2Mi4zMjYgNDY0IDQ4IDQ0OS42NzIgNDggNDMyWk0zNTIgMFY5Nkg0NDhMMzUyIDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Files(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M96 368V48C96 21.49 117.49 0 144 0H352V96H448V368C448 394.51 426.51 416 400 416H144C117.49 416 96 394.51 96 368Z" />
            <path d="M48 432V96C21.49 96 0 117.492 0 144V448C0 483.346 28.654 512 64 512H304C330.51 512 352 490.508 352 464H80C62.326 464 48 449.672 48 432ZM352 0V96H448L352 0Z" />
        </Icon>
    </>
}