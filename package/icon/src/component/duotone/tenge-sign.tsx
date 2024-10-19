
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tenge-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=duotone tenge-sign}
 * @preview ![tenge-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAyMDBDMzg0IDIyMi4wOTQgMzY2LjA5NCAyNDAgMzQ0IDI0MEgyMzJWNDQwQzIzMiA0NjIuMDk0IDIxNC4wOTQgNDgwIDE5MiA0ODBTMTUyIDQ2Mi4wOTQgMTUyIDQ0MFYyNDBINDBDMTcuOTA2IDI0MCAwIDIyMi4wOTQgMCAyMDBTMTcuOTA2IDE2MCA0MCAxNjBIMzQ0QzM2Ni4wOTQgMTYwIDM4NCAxNzcuOTA2IDM4NCAyMDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4NCA3MkMzODQgOTQuMDk0IDM2Ni4wOTQgMTEyIDM0NCAxMTJINDBDMTcuOTA2IDExMiAwIDk0LjA5NCAwIDcyUzE3LjkwNiAzMiA0MCAzMkgzNDRDMzY2LjA5NCAzMiAzODQgNDkuOTA2IDM4NCA3MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TengeSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M384 200C384 222.094 366.094 240 344 240H232V440C232 462.094 214.094 480 192 480S152 462.094 152 440V240H40C17.906 240 0 222.094 0 200S17.906 160 40 160H344C366.094 160 384 177.906 384 200Z" />
            <path d="M384 72C384 94.094 366.094 112 344 112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H344C366.094 32 384 49.906 384 72Z" />
        </Icon>
    </>
}