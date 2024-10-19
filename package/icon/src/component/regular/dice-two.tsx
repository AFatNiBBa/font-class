
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-two` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-two?s=regular dice-two}
 * @preview ![dice-two](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMTI4QzExMC4zNzUgMTI4IDk2IDE0Mi4zNzUgOTYgMTYwUzExMC4zNzUgMTkyIDEyOCAxOTJTMTYwIDE3Ny42MjUgMTYwIDE2MFMxNDUuNjI1IDEyOCAxMjggMTI4Wk0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODc1IDM5Mi44NzUgNDMyIDM4NCA0MzJINjRDNTUuMTI1IDQzMiA0OCA0MjQuODc1IDQ4IDQxNlY5NkM0OCA4Ny4xMjUgNTUuMTI1IDgwIDY0IDgwSDM4NEMzOTIuODc1IDgwIDQwMCA4Ny4xMjUgNDAwIDk2VjQxNlpNMzIwIDMyMEMzMDIuMzc1IDMyMCAyODggMzM0LjM3NSAyODggMzUyUzMwMi4zNzUgMzg0IDMyMCAzODRTMzUyIDM2OS42MjUgMzUyIDM1MlMzMzcuNjI1IDMyMCAzMjAgMzIwWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function DiceTwo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M128 128C110.375 128 96 142.375 96 160S110.375 192 128 192S160 177.625 160 160S145.625 128 128 128ZM384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM400 416C400 424.875 392.875 432 384 432H64C55.125 432 48 424.875 48 416V96C48 87.125 55.125 80 64 80H384C392.875 80 400 87.125 400 96V416ZM320 320C302.375 320 288 334.375 288 352S302.375 384 320 384S352 369.625 352 352S337.625 320 320 320Z " />
        </Icon>
    </>
}