
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `franc-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=solid franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMTEyVjE5MkgyNDhDMjcwLjA5NCAxOTIgMjg4IDIwOS45MDYgMjg4IDIzMlMyNzAuMDk0IDI3MiAyNDggMjcySDEyOFYzMjBIMTkyQzIwOS42ODggMzIwIDIyNCAzMzQuMzI4IDIyNCAzNTJTMjA5LjY4OCAzODQgMTkyIDM4NEgxMjhWNDQwQzEyOCA0NjIuMDk0IDExMC4wOTQgNDgwIDg4IDQ4MFM0OCA0NjIuMDk0IDQ4IDQ0MFYzODRIMzJDMTQuMzEyIDM4NCAwIDM2OS42NzIgMCAzNTJTMTQuMzEyIDMyMCAzMiAzMjBINDhWNzJDNDggNDkuOTA2IDY1LjkwNiAzMiA4OCAzMkgyODBDMzAyLjA5NCAzMiAzMjAgNDkuOTA2IDMyMCA3MlMzMDIuMDk0IDExMiAyODAgMTEySDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FrancSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M128 112V192H248C270.094 192 288 209.906 288 232S270.094 272 248 272H128V320H192C209.688 320 224 334.328 224 352S209.688 384 192 384H128V440C128 462.094 110.094 480 88 480S48 462.094 48 440V384H32C14.312 384 0 369.672 0 352S14.312 320 32 320H48V72C48 49.906 65.906 32 88 32H280C302.094 32 320 49.906 320 72S302.094 112 280 112H128Z" />
        </Icon>
    </>
}