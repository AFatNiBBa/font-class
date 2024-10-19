
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=solid circle-minus}
 * @preview ![circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDAyIDE2QzEyMy40MzggMTYgMTYgMTIzLjQzOCAxNiAyNTZTMTIzLjQzOCA0OTYgMjU2LjAwMiA0OTZDMzg4LjU2MiA0OTYgNDk2IDM4OC41NjIgNDk2IDI1NlMzODguNTYyIDE2IDI1Ni4wMDIgMTZaTTM1Mi4wMDIgMjgwSDE2MC4wMDJDMTQ2LjgwMSAyODAgMTM2IDI2OS4xOTcgMTM2IDI1NkMxMzYgMjQyLjc5OSAxNDYuODAxIDIzMiAxNjAuMDAyIDIzMkgzNTIuMDAyQzM2NS4xOTkgMjMyIDM3NiAyNDIuNzk5IDM3NiAyNTZDMzc2IDI2OS4xOTcgMzY1LjE5OSAyODAgMzUyLjAwMiAyODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.002 16C123.438 16 16 123.438 16 256S123.438 496 256.002 496C388.562 496 496 388.562 496 256S388.562 16 256.002 16ZM352.002 280H160.002C146.801 280 136 269.197 136 256C136 242.799 146.801 232 160.002 232H352.002C365.199 232 376 242.799 376 256C376 269.197 365.199 280 352.002 280Z" />
        </Icon>
    </>
}