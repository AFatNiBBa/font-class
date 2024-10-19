
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-three-quarters` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=duotone circle-three-quarters}
 * @preview ![circle-three-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMzODguNTQ3IDE2IDQ5NiAxMjMuNDUxIDQ5NiAyNTZIMjU2VjE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAzODguNTQ3IDM4OC41NDkgNDk2IDI1NiA0OTZDMTIzLjQ1MyA0OTYgMTYgMzg4LjU0OSAxNiAyNTZTMTIzLjQ1MyAxNiAyNTYgMTZWMjU2SDQ5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CircleThreeQuarters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C388.547 16 496 123.451 496 256H256V16Z" />
            <path d="M496 256C496 388.547 388.549 496 256 496C123.453 496 16 388.549 16 256S123.453 16 256 16V256H496Z" />
        </Icon>
    </>
}