
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rectangle-vertical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=duotone rectangle-vertical}
 * @preview ![rectangle-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDQ0OFY2NEMzMiAyOC42NTQgNjAuNjU0IDAgOTYgMEgzNTJDMzg3LjM0NiAwIDQxNiAyOC42NTQgNDE2IDY0VjQ0OEM0MTYgNDgzLjM0NiAzODcuMzQ2IDUxMiAzNTIgNTEySDk2QzYwLjY1NCA1MTIgMzIgNDgzLjM0NiAzMiA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function RectangleVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M32 448V64C32 28.654 60.654 0 96 0H352C387.346 0 416 28.654 416 64V448C416 483.346 387.346 512 352 512H96C60.654 512 32 483.346 32 448Z" />
        </Icon>
    </>
}