
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-u` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=solid circle-u}
 * @preview ![circle-u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM2OCAyOTAuOTA2QzM2OCAzNTEuMDYyIDMxNy43NSA0MDAgMjU2IDQwMFMxNDQgMzUxLjA2MiAxNDQgMjkwLjkwNlYxNjhDMTQ0IDE1NC43NSAxNTQuNzUgMTQ0IDE2OCAxNDRTMTkyIDE1NC43NSAxOTIgMTY4VjI5MC45MDZDMTkyIDMyNC41OTQgMjIwLjcwMyAzNTIgMjU2IDM1MlMzMjAgMzI0LjU5NCAzMjAgMjkwLjkwNlYxNjhDMzIwIDE1NC43NSAzMzAuNzUgMTQ0IDM0NCAxNDRTMzY4IDE1NC43NSAzNjggMTY4VjI5MC45MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleU(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM368 290.906C368 351.062 317.75 400 256 400S144 351.062 144 290.906V168C144 154.75 154.75 144 168 144S192 154.75 192 168V290.906C192 324.594 220.703 352 256 352S320 324.594 320 290.906V168C320 154.75 330.75 144 344 144S368 154.75 368 168V290.906Z" />
        </Icon>
    </>
}