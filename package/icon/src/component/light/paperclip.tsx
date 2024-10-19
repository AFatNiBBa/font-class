
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=light paperclip}
 * @preview ![paperclip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTEyVjM1MkMzNTIgNDQwLjIxOSAyODAuMjE5IDUxMiAxOTIgNTEyUzMyIDQ0MC4yMTkgMzIgMzUyVjIwOEMzMiAxOTkuMTYyIDM5LjE2NCAxOTIgNDggMTkyUzY0IDE5OS4xNjIgNjQgMjA4VjM1MkM2NCA0MjIuNTc4IDEyMS40MjIgNDgwIDE5MiA0ODBTMzIwIDQyMi41NzggMzIwIDM1MlYxMTJDMzIwIDY3Ljg5MSAyODQuMTA5IDMyIDI0MCAzMlMxNjAgNjcuODkxIDE2MCAxMTJWMzIwQzE2MCAzMzcuNjQxIDE3NC4zNTkgMzUyIDE5MiAzNTJTMjI0IDMzNy42NDEgMjI0IDMyMFYxNDRDMjI0IDEzNS4xNjIgMjMxLjE2NCAxMjggMjQwIDEyOFMyNTYgMTM1LjE2MiAyNTYgMTQ0VjMyMEMyNTYgMzU1LjI5NyAyMjcuMjk3IDM4NCAxOTIgMzg0UzEyOCAzNTUuMjk3IDEyOCAzMjBWMTEyQzEyOCA1MC4yNSAxNzguMjUgMCAyNDAgMFMzNTIgNTAuMjUgMzUyIDExMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Paperclip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 112V352C352 440.219 280.219 512 192 512S32 440.219 32 352V208C32 199.162 39.164 192 48 192S64 199.162 64 208V352C64 422.578 121.422 480 192 480S320 422.578 320 352V112C320 67.891 284.109 32 240 32S160 67.891 160 112V320C160 337.641 174.359 352 192 352S224 337.641 224 320V144C224 135.162 231.164 128 240 128S256 135.162 256 144V320C256 355.297 227.297 384 192 384S128 355.297 128 320V112C128 50.25 178.25 0 240 0S352 50.25 352 112Z" />
        </Icon>
    </>
}