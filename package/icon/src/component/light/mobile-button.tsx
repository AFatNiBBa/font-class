
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mobile-button` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=light mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMzkyQzE3OC42ODggMzkyIDE2OCA0MDIuNjg4IDE2OCA0MTZTMTc4LjY4OCA0NDAgMTkyIDQ0MFMyMTYgNDI5LjMxMiAyMTYgNDE2UzIwNS4zMTIgMzkyIDE5MiAzOTJaTTI4OCAwSDk2QzYwLjY1NCAwIDMyIDI4LjY1NCAzMiA2NFY0NDhDMzIgNDgzLjM0NiA2MC42NTQgNTEyIDk2IDUxMkgyODhDMzIzLjM0NiA1MTIgMzUyIDQ4My4zNDYgMzUyIDQ0OFY2NEMzNTIgMjguNjU0IDMyMy4zNDYgMCAyODggMFpNMzIwIDQ0OEMzMjAgNDY1LjY0NSAzMDUuNjQ1IDQ4MCAyODggNDgwSDk2Qzc4LjM1NSA0ODAgNjQgNDY1LjY0NSA2NCA0NDhWNjRDNjQgNDYuMzU1IDc4LjM1NSAzMiA5NiAzMkgyODhDMzA1LjY0NSAzMiAzMjAgNDYuMzU1IDMyMCA2NFY0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MobileButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 392C178.688 392 168 402.688 168 416S178.688 440 192 440S216 429.312 216 416S205.312 392 192 392ZM288 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H288C323.346 512 352 483.346 352 448V64C352 28.654 323.346 0 288 0ZM320 448C320 465.645 305.645 480 288 480H96C78.355 480 64 465.645 64 448V64C64 46.355 78.355 32 96 32H288C305.645 32 320 46.355 320 64V448Z" />
        </Icon>
    </>
}