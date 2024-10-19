
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `theta` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=thin theta}
 * @preview ![theta](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTZDMTAzLjYzNSAxNiAzMiAxMjMuNDUxIDMyIDI1NlMxMDMuNjM1IDQ5NiAxOTIgNDk2UzM1MiAzODguNTQ5IDM1MiAyNTZTMjgwLjM2NSAxNiAxOTIgMTZaTTE5MiAzMkMyNjkuNjY2IDMyIDMzMyAxMjguMjA5IDMzNS43NCAyNDhINDguMjZDNTEgMTI4LjIwOSAxMTQuMzM0IDMyIDE5MiAzMlpNMTkyIDQ4MEMxMTQuMzM0IDQ4MCA1MSAzODMuNzkxIDQ4LjI2IDI2NEgzMzUuNzRDMzMzIDM4My43OTEgMjY5LjY2NiA0ODAgMTkyIDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Theta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 16C103.635 16 32 123.451 32 256S103.635 496 192 496S352 388.549 352 256S280.365 16 192 16ZM192 32C269.666 32 333 128.209 335.74 248H48.26C51 128.209 114.334 32 192 32ZM192 480C114.334 480 51 383.791 48.26 264H335.74C333 383.791 269.666 480 192 480Z" />
        </Icon>
    </>
}