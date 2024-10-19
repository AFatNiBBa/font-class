
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `integral` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=light integral}
 * @preview ![integral](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNzJDMjg4IDgwLjg0NCAyODAuODQ0IDg4IDI3MiA4OFMyNTYgODAuODQ0IDI1NiA3MkMyNTYgNDkuOTM4IDIzOC4wNjIgMzIgMjE2IDMyUzE3NiA0OS45MzggMTc2IDcyVjQ0MEMxNzYgNDc5LjY4OCAxNDMuNzAzIDUxMiAxMDQgNTEyUzMyIDQ3OS42ODggMzIgNDQwQzMyIDQzMS4xNTYgMzkuMTU2IDQyNCA0OCA0MjRTNjQgNDMxLjE1NiA2NCA0NDBDNjQgNDYyLjA2MiA4MS45MzggNDgwIDEwNCA0ODBTMTQ0IDQ2Mi4wNjIgMTQ0IDQ0MFY3MkMxNDQgMzIuMzEyIDE3Ni4yOTcgMCAyMTYgMFMyODggMzIuMzEyIDI4OCA3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Integral(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M288 72C288 80.844 280.844 88 272 88S256 80.844 256 72C256 49.938 238.062 32 216 32S176 49.938 176 72V440C176 479.688 143.703 512 104 512S32 479.688 32 440C32 431.156 39.156 424 48 424S64 431.156 64 440C64 462.062 81.938 480 104 480S144 462.062 144 440V72C144 32.312 176.297 0 216 0S288 32.312 288 72Z" />
        </Icon>
    </>
}