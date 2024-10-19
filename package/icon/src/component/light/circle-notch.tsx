
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-notch` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=light circle-notch}
 * @preview ![circle-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAzODguMzQ0IDM4OC4zNDQgNDk2IDI1NiA0OTZTMTYgMzg4LjM0NCAxNiAyNTZDMTYgMTUwLjU5NCA4Ni41IDU1Ljk2OSAxODcuNDM4IDI1LjkzOEMxOTYuMDYyIDIzLjQzOCAyMDQuODQ0IDI4LjI4MSAyMDcuMzQ0IDM2LjcxOUMyMDkuODQ0IDQ1LjE4OCAyMDUuMDMxIDU0LjA5NCAxOTYuNTYyIDU2LjYyNUMxMDkuMDk0IDgyLjY1NiA0OCAxNjQuNjI1IDQ4IDI1NkM0OCAzNzAuNjg4IDE0MS4zMTIgNDY0IDI1NiA0NjRTNDY0IDM3MC42ODggNDY0IDI1NkM0NjQgMTY0LjYyNSA0MDIuOTA2IDgyLjY1NiAzMTUuNDM4IDU2LjYyNUMzMDYuOTY5IDU0LjA5NCAzMDIuMTU2IDQ1LjE4NyAzMDQuNjU2IDM2LjcxOUMzMDcuMTU2IDI4LjI4MSAzMTYuMDMxIDIzLjQ2OSAzMjQuNTYyIDI1LjkzN0M0MjUuNSA1NS45NjkgNDk2IDE1MC41OTQgNDk2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleNotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 388.344 388.344 496 256 496S16 388.344 16 256C16 150.594 86.5 55.969 187.438 25.938C196.062 23.438 204.844 28.281 207.344 36.719C209.844 45.188 205.031 54.094 196.562 56.625C109.094 82.656 48 164.625 48 256C48 370.688 141.312 464 256 464S464 370.688 464 256C464 164.625 402.906 82.656 315.438 56.625C306.969 54.094 302.156 45.187 304.656 36.719C307.156 28.281 316.031 23.469 324.562 25.937C425.5 55.969 496 150.594 496 256Z" />
        </Icon>
    </>
}