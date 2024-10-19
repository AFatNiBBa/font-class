
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=solid diagram-nested}
 * @preview ![diagram-nested](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzM2VjQ2NEM1MTIgNDkwLjUxIDQ5MC41MSA1MTIgNDY0IDUxMkgzMzZDMzA5LjQ5IDUxMiAyODggNDkwLjUxIDI4OCA0NjRWNDMySDE3NkMxMjMuMDYyIDQzMiA4MCAzODguOTM4IDgwIDMzNlYyMjRINDhDMjEuNDkgMjI0IDAgMjAyLjUxIDAgMTc2VjQ4QzAgMjEuNDkgMjEuNDkgMCA0OCAwSDE3NkMyMDIuNTEgMCAyMjQgMjEuNDkgMjI0IDQ4VjE3NkMyMjQgMjAyLjUxIDIwMi41MSAyMjQgMTc2IDIyNEgxNDRWMzM2QzE0NCAzNTMuNjU2IDE1OC4zNDQgMzY4IDE3NiAzNjhIMjg4VjMzNkMyODggMzA5LjQ5IDMwOS40OSAyODggMzM2IDI4OEg0NjRDNDkwLjUxIDI4OCA1MTIgMzA5LjQ5IDUxMiAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramNested(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 336V464C512 490.51 490.51 512 464 512H336C309.49 512 288 490.51 288 464V432H176C123.062 432 80 388.938 80 336V224H48C21.49 224 0 202.51 0 176V48C0 21.49 21.49 0 48 0H176C202.51 0 224 21.49 224 48V176C224 202.51 202.51 224 176 224H144V336C144 353.656 158.344 368 176 368H288V336C288 309.49 309.49 288 336 288H464C490.51 288 512 309.49 512 336Z" />
        </Icon>
    </>
}