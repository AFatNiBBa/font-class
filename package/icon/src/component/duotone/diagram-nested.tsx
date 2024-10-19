
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-nested` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=duotone diagram-nested}
 * @preview ![diagram-nested](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCA0MzJIMTc2QzEyMy4wNjIgNDMyIDgwIDM4OC45MzggODAgMzM2VjIyNEgxNDRWMzM2QzE0NCAzNTMuNjU2IDE1OC4zNDQgMzY4IDE3NiAzNjhIMjg4VjQzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc2IDBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDhWMTc2QzAgMjAyLjUxIDIxLjQ5IDIyNCA0OCAyMjRIMTc2QzIwMi41MSAyMjQgMjI0IDIwMi41MSAyMjQgMTc2VjQ4QzIyNCAyMS40OSAyMDIuNTEgMCAxNzYgMFpNNDY0IDI4OEgzMzZDMzA5LjQ5IDI4OCAyODggMzA5LjQ5IDI4OCAzMzZWNDY0QzI4OCA0OTAuNTEgMzA5LjQ5IDUxMiAzMzYgNTEySDQ2NEM0OTAuNTEgNTEyIDUxMiA0OTAuNTEgNTEyIDQ2NFYzMzZDNTEyIDMwOS40OSA0OTAuNTEgMjg4IDQ2NCAyODhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiagramNested(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M288 432H176C123.062 432 80 388.938 80 336V224H144V336C144 353.656 158.344 368 176 368H288V432Z" />
            <path d="M176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0ZM464 288H336C309.49 288 288 309.49 288 336V464C288 490.51 309.49 512 336 512H464C490.51 512 512 490.51 512 464V336C512 309.49 490.51 288 464 288Z" />
        </Icon>
    </>
}