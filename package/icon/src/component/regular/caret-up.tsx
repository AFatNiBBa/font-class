
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=regular caret-up}
 * @preview ![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00Ny45NjggMzM2SDI3MS45NzZDMzE0LjYwMyAzMzYgMzM2LjEwMyAyODQuMjQyIDMwNS44NTIgMjUzLjk4OEwxOTMuOTczIDE0MS45NzFDMTc1LjIyMyAxMjMuMzQzIDE0NC43MjIgMTIzLjM0MyAxMjUuOTcxIDE0MS45NzFMMTQuMDkyIDI1My45ODhDLTE2LjAzNCAyODQuMjQyIDUuMzQyIDMzNiA0Ny45NjggMzM2Wk0xNTkuOTcyIDE3NS45NzZMMjcxLjk3NiAyODcuOTkzSDQ3Ljk2OEwxNTkuOTcyIDE3NS45NzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CaretUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M47.968 336H271.976C314.603 336 336.103 284.242 305.852 253.988L193.973 141.971C175.223 123.343 144.722 123.343 125.971 141.971L14.092 253.988C-16.034 284.242 5.342 336 47.968 336ZM159.972 175.976L271.976 287.993H47.968L159.972 175.976Z" />
        </Icon>
    </>
}