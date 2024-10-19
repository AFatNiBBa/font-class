
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=duotone gem}
 * @preview ![gem](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxOTJMNDAwIDY0SDExMkwyNTYgMTkyWk0yMjIuMjUgMjI0TDExMiA2NEwwIDIyNEgyMjIuMjVaTTUxMiAyMjRMNDAwIDY0TDI4OS43NSAyMjRINTEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTIgMjI0TDI2Ny42ODggNDc0LjkzOEMyNjQuNjU2IDQ3OC4xNzIgMjYwLjQzOCA0ODAgMjU2IDQ4MFMyNDcuMzQ0IDQ3OC4xNzIgMjQ0LjMxMiA0NzQuOTM4TDAgMjI0SDUxMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Gem(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 192L400 64H112L256 192ZM222.25 224L112 64L0 224H222.25ZM512 224L400 64L289.75 224H512Z" />
            <path d="M512 224L267.688 474.938C264.656 478.172 260.438 480 256 480S247.344 478.172 244.312 474.938L0 224H512Z" />
        </Icon>
    </>
}