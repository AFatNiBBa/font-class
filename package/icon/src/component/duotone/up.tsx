
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=duotone up}
 * @preview ![up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyNTZWNDQ4QzI1NiA0NjUuNjc0IDI0MS42NzIgNDgwIDIyNCA0ODBIMTYwQzE0Mi4zMjYgNDgwIDEyOCA0NjUuNjc0IDEyOCA0NDhWMjU2SDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzgxLjU2MyAyMzYuMjVDMzc2LjYwOSAyNDguMjAzIDM2NC45MzggMjU2IDM1MiAyNTZIMzJDMTkuMDYzIDI1NiA3LjM5MSAyNDguMjAzIDIuNDM4IDIzNi4yNUMtMi41MTYgMjI0LjI4MSAwLjIxOSAyMTAuNTMxIDkuMzc1IDIwMS4zNzVMMTY5LjM3NSA0MS4zNzVDMTc1LjYyNSAzNS4xMjUgMTgzLjgxMyAzMiAxOTIgMzJTMjA4LjM3NSAzNS4xMjUgMjE0LjYyNSA0MS4zNzVMMzc0LjYyNSAyMDEuMzc1QzM4My43ODEgMjEwLjUzMSAzODYuNTE2IDIyNC4yODEgMzgxLjU2MyAyMzYuMjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Up(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M256 256V448C256 465.674 241.672 480 224 480H160C142.326 480 128 465.674 128 448V256H256Z" />
            <path d="M381.563 236.25C376.609 248.203 364.938 256 352 256H32C19.063 256 7.391 248.203 2.438 236.25C-2.516 224.281 0.219 210.531 9.375 201.375L169.375 41.375C175.625 35.125 183.813 32 192 32S208.375 35.125 214.625 41.375L374.625 201.375C383.781 210.531 386.516 224.281 381.563 236.25Z" />
        </Icon>
    </>
}