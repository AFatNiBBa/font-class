
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tv` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=solid tv}
 * @preview ![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNDQ4SDEyOEMxMTAuMzI3IDQ0OCA5NiA0NjIuMzI3IDk2IDQ4MFY0ODBDOTYgNDk3LjY3MyAxMTAuMzI3IDUxMiAxMjggNTEySDUxMkM1MjkuNjczIDUxMiA1NDQgNDk3LjY3MyA1NDQgNDgwVjQ4MEM1NDQgNDYyLjMyNyA1MjkuNjczIDQ0OCA1MTIgNDQ4Wk01OTIgMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWMzY4QzAgMzk0LjUgMjEuNSA0MTYgNDggNDE2SDU5MkM2MTguNSA0MTYgNjQwIDM5NC41IDY0MCAzNjhWNDhDNjQwIDIxLjUgNjE4LjUgMCA1OTIgMFpNNTc2IDM1Mkg2NFY2NEg1NzZWMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M512 448H128C110.327 448 96 462.327 96 480V480C96 497.673 110.327 512 128 512H512C529.673 512 544 497.673 544 480V480C544 462.327 529.673 448 512 448ZM592 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H592C618.5 416 640 394.5 640 368V48C640 21.5 618.5 0 592 0ZM576 352H64V64H576V352Z" />
        </Icon>
    </>
}