
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-bookmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=duotone circle-bookmark}
 * @preview ![circle-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzUyIDM4NEwyNTYgMzIwTDE2MCAzODRWMTYwQzE2MCAxNDIuMzI2IDE3NC4zMjYgMTI4IDE5MiAxMjhIMzIwQzMzNy42NzQgMTI4IDM1MiAxNDIuMzI2IDM1MiAxNjBWMzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIgMzg0TDI1NiAzMjBMMTYwIDM4NFYxNjBDMTYwIDE0Mi4zMjYgMTc0LjMyNiAxMjggMTkyIDEyOEgzMjBDMzM3LjY3NCAxMjggMzUyIDE0Mi4zMjYgMzUyIDE2MFYzODRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleBookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM352 384L256 320L160 384V160C160 142.326 174.326 128 192 128H320C337.674 128 352 142.326 352 160V384Z" />
            <path d="M352 384L256 320L160 384V160C160 142.326 174.326 128 192 128H320C337.674 128 352 142.326 352 160V384Z" />
        </Icon>
    </>
}