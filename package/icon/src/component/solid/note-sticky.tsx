
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=solid note-sticky}
 * @preview ![note-sticky](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwVjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDI5My40OUMzMTAuNDY1IDQ4MCAzMjYuNzQyIDQ3My4yNTYgMzM4Ljc0NiA0NjEuMjU0TDQyOS4yNTQgMzcwLjc0NEM0NDEuMjU4IDM1OC43NDIgNDQ4IDM0Mi40NjMgNDQ4IDMyNS40OVY4MEM0NDggNTMuNDkgNDI2LjUxIDMyIDQwMCAzMlpNNjQgOTZIMzg0TDM4My45OTggMzIwSDMyMEMzMDIuMzI4IDMyMCAyODggMzM0LjMyNiAyODggMzUyVjQxNkg2NFY5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function NoteSticky(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H293.49C310.465 480 326.742 473.256 338.746 461.254L429.254 370.744C441.258 358.742 448 342.463 448 325.49V80C448 53.49 426.51 32 400 32ZM64 96H384L383.998 320H320C302.328 320 288 334.326 288 352V416H64V96Z" />
        </Icon>
    </>
}