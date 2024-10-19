
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=duotone circle-half-stroke}
 * @preview ![circle-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAyNTZDNDk2IDM4OC41NDkgMzg4LjU0OSA0OTYgMjU2IDQ5NlY0MzJDMzUzLjA0NyA0MzIgNDMyIDM1My4wNDcgNDMyIDI1NlMzNTMuMDQ3IDgwIDI1NiA4MFYxNkMzODguNTQ5IDE2IDQ5NiAxMjMuNDUxIDQ5NiAyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiA0OTZDMTIzLjQ1MyA0OTYgMTYgMzg4LjU0OSAxNiAyNTZTMTIzLjQ1MyAxNiAyNTYgMTZWNDk2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M496 256C496 388.549 388.549 496 256 496V432C353.047 432 432 353.047 432 256S353.047 80 256 80V16C388.549 16 496 123.451 496 256Z" />
            <path d="M256 496C123.453 496 16 388.549 16 256S123.453 16 256 16V496Z" />
        </Icon>
    </>
}