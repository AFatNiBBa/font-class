
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=duotone f}
 * @preview ![f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA4MEMzMjAgMTA2LjUgMjk4LjUxNiAxMjggMjcyIDEyOEg5NlYyMjRIMjA4QzIzNC41MTYgMjI0IDI1NiAyNDUuNSAyNTYgMjcyUzIzNC41MTYgMzIwIDIwOCAzMjBIOTZWNDMyQzk2IDQ1OC41IDc0LjUxNiA0ODAgNDggNDgwUzAgNDU4LjUgMCA0MzJWODBDMCA1My41IDIxLjQ4NCAzMiA0OCAzMkgyNzJDMjk4LjUxNiAzMiAzMjAgNTMuNSAzMjAgODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function F(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M320 80C320 106.5 298.516 128 272 128H96V224H208C234.516 224 256 245.5 256 272S234.516 320 208 320H96V432C96 458.5 74.516 480 48 480S0 458.5 0 432V80C0 53.5 21.484 32 48 32H272C298.516 32 320 53.5 320 80Z" />
        </Icon>
    </>
}