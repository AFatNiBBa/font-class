
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plug` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=duotone plug}
 * @preview ![plug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDBDNzguMzc1IDAgNjQgMTQuMzc1IDY0IDMyVjE2MEgxMjhWMzJDMTI4IDE0LjM3NSAxMTMuNjI1IDAgOTYgMFpNMjg4IDBDMjcwLjM3NSAwIDI1NiAxNC4zNzUgMjU2IDMyVjE2MEgzMjBWMzJDMzIwIDE0LjM3NSAzMDUuNjI1IDAgMjg4IDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM2OCAxNjBIMTZDNy4xMjUgMTYwIDAgMTY3LjEyNSAwIDE3NlYyMDhDMCAyMTYuODc1IDcuMTI1IDIyNCAxNiAyMjRIMzJWMjU2QzMyIDMzMiA4NS41IDM5Ny42MjUgMTYwIDQxMi43NVY1MTJIMjI0VjQxMi43NUMyOTguNSAzOTcuNjI1IDM1MiAzMzIgMzUyIDI1NlYyMjRIMzY4QzM3Ni44NzUgMjI0IDM4NCAyMTYuODc1IDM4NCAyMDhWMTc2QzM4NCAxNjcuMTI1IDM3Ni44NzUgMTYwIDM2OCAxNjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Plug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M96 0C78.375 0 64 14.375 64 32V160H128V32C128 14.375 113.625 0 96 0ZM288 0C270.375 0 256 14.375 256 32V160H320V32C320 14.375 305.625 0 288 0Z" />
            <path d="M368 160H16C7.125 160 0 167.125 0 176V208C0 216.875 7.125 224 16 224H32V256C32 332 85.5 397.625 160 412.75V512H224V412.75C298.5 397.625 352 332 352 256V224H368C376.875 224 384 216.875 384 208V176C384 167.125 376.875 160 368 160Z" />
        </Icon>
    </>
}