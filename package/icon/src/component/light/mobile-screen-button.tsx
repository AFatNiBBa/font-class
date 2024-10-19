
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile-screen-button` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=light mobile-screen-button}
 * @preview ![mobile-screen-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDQwQzIwNS4zMTIgNDQwIDIxNiA0MjkuMzEyIDIxNiA0MTZTMjA1LjMxMiAzOTIgMTkyIDM5MlMxNjggNDAyLjY4OCAxNjggNDE2UzE3OC42ODggNDQwIDE5MiA0NDBaTTI4OCAwSDk2QzYwLjY1NCAwIDMyIDI4LjY1NCAzMiA2NFY0NDhDMzIgNDgzLjM0NiA2MC42NTQgNTEyIDk2IDUxMkgyODhDMzIzLjM0NiA1MTIgMzUyIDQ4My4zNDYgMzUyIDQ0OFY2NEMzNTIgMjguNjU0IDMyMy4zNDYgMCAyODggMFpNMzIwIDQ0OEMzMjAgNDY1LjY0NSAzMDUuNjQ1IDQ4MCAyODggNDgwSDk2Qzc4LjM1NSA0ODAgNjQgNDY1LjY0NSA2NCA0NDhWMzUySDMyMFY0NDhaTTMyMCAzMjBINjRWNjRDNjQgNDYuMzU1IDc4LjM1NSAzMiA5NiAzMkgyODhDMzA1LjY0NSAzMiAzMjAgNDYuMzU1IDMyMCA2NFYzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MobileScreenButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 440C205.312 440 216 429.312 216 416S205.312 392 192 392S168 402.688 168 416S178.688 440 192 440ZM288 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H288C323.346 512 352 483.346 352 448V64C352 28.654 323.346 0 288 0ZM320 448C320 465.645 305.645 480 288 480H96C78.355 480 64 465.645 64 448V352H320V448ZM320 320H64V64C64 46.355 78.355 32 96 32H288C305.645 32 320 46.355 320 64V320Z" />
        </Icon>
    </>
}