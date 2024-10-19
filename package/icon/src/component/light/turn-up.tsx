
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turn-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=light turn-up}
 * @preview ![turn-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTMuNTk2IDExOS42NzJMMjA5LjU5NiA3LjY3MkMyMDQuODQ2IDIuNTU3IDE5OC40MjQgMCAxOTIuMDAyIDBTMTc5LjE1OCAyLjU1NyAxNzQuNDA4IDcuNjcyTDcwLjQwOCAxMTkuNjcyQzYzLjkyNCAxMjYuNjU2IDYyLjE4OSAxMzYuODQ0IDY2LjAwMiAxNDUuNTk0Uzc4LjQ1NSAxNjAgODguMDAyIDE2MEgxNzZWNDMyQzE3NiA0NTguNDY5IDE1NC40NjkgNDgwIDEyOCA0ODBIMTZDNy4xNTYgNDgwIDAgNDg3LjE1NiAwIDQ5NlM3LjE1NiA1MTIgMTYgNTEySDEyOEMxNzIuMTA5IDUxMiAyMDggNDc2LjEyNSAyMDggNDMyVjE2MEgyOTYuMDAyQzMwNS41NDkgMTYwIDMxNC4xODkgMTU0LjM0NCAzMTguMDAyIDE0NS41OTRTMzIwLjA4IDEyNi42NTYgMzEzLjU5NiAxMTkuNjcyWk0xMDYuMzQ0IDEyOEwxOTIuMDAyIDM1Ljc1MkwyNzcuNjYgMTI4SDEwNi4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TurnUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M313.596 119.672L209.596 7.672C204.846 2.557 198.424 0 192.002 0S179.158 2.557 174.408 7.672L70.408 119.672C63.924 126.656 62.189 136.844 66.002 145.594S78.455 160 88.002 160H176V432C176 458.469 154.469 480 128 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H128C172.109 512 208 476.125 208 432V160H296.002C305.549 160 314.189 154.344 318.002 145.594S320.08 126.656 313.596 119.672ZM106.344 128L192.002 35.752L277.66 128H106.344Z" />
        </Icon>
    </>
}