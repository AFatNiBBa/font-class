
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle?s=duotone circle}
 * @preview ![circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAyNTZDNDk2IDM4OC41NDggMzg4LjU0OCA0OTYgMjU2IDQ5NlMxNiAzODguNTQ4IDE2IDI1NlMxMjMuNDUyIDE2IDI1NiAxNlM0OTYgMTIzLjQ1MiA0OTYgMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Circle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M496 256C496 388.548 388.548 496 256 496S16 388.548 16 256S123.452 16 256 16S496 123.452 496 256Z" />
        </Icon>
    </>
}