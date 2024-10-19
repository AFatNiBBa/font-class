
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `intersection` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=duotone intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM0NCA0ODBDMzIxLjkwNiA0ODAgMzA0IDQ2Mi4wOTQgMzA0IDQ0MFYyMjRDMzA0IDE2Mi4yNSAyNTMuNzUgMTEyIDE5MiAxMTJTODAgMTYyLjI1IDgwIDIyNFY0NDBDODAgNDYyLjA5NCA2Mi4wOTQgNDgwIDQwIDQ4MFMwIDQ2Mi4wOTQgMCA0NDBWMjI0QzAgMTE4LjEyNSA4Ni4xMjUgMzIgMTkyIDMyUzM4NCAxMTguMTI1IDM4NCAyMjRWNDQwQzM4NCA0NjIuMDk0IDM2Ni4wOTQgNDgwIDM0NCA0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Intersection(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M344 480C321.906 480 304 462.094 304 440V224C304 162.25 253.75 112 192 112S80 162.25 80 224V440C80 462.094 62.094 480 40 480S0 462.094 0 440V224C0 118.125 86.125 32 192 32S384 118.125 384 224V440C384 462.094 366.094 480 344 480Z" />
        </Icon>
    </>
}