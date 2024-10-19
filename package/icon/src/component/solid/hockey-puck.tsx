
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-puck` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=solid hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDE2MEMwIDEwNyAxMTQuNjI1IDY0IDI1NiA2NFM1MTIgMTA3IDUxMiAxNjBTMzk3LjM3NSAyNTYgMjU2IDI1NlMwIDIxMyAwIDE2MFpNMCAyNDIuMjVWMzUyQzAgNDA1IDExNC42MjUgNDQ4IDI1NiA0NDhTNTEyIDQwNSA1MTIgMzUyVjI0Mi4yNUMzOTguNjI1IDMyNC41IDExMy41IDMyNC42MjUgMCAyNDIuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HockeyPuck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 160C0 107 114.625 64 256 64S512 107 512 160S397.375 256 256 256S0 213 0 160ZM0 242.25V352C0 405 114.625 448 256 448S512 405 512 352V242.25C398.625 324.5 113.5 324.625 0 242.25Z" />
        </Icon>
    </>
}