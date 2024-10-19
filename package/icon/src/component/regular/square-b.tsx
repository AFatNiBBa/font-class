
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-b` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-b?s=regular square-b}
 * @preview ![square-b](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzA1Ljg4MyAyNDcuODJDMzE0LjY5OSAyMzUuNDEgMzIwIDIyMC4zNDYgMzIwIDIwNEMzMjAgMTYyLjA5NCAyODUuOTA2IDEyOCAyNDQgMTI4SDE1MkMxMzguNzUgMTI4IDEyOCAxMzguNzUgMTI4IDE1MlYzNjBDMTI4IDM3My4yNSAxMzguNzUgMzg0IDE1MiAzODRIMjYwQzMwMS45MDYgMzg0IDMzNiAzNDkuOTA2IDMzNiAzMDhDMzM2IDI4My40IDMyNC4wNjIgMjYxLjcxOSAzMDUuODgzIDI0Ny44MlpNMTc2IDE3NkgyNDRDMjU5LjQzOCAxNzYgMjcyIDE4OC41NjIgMjcyIDIwNFMyNTkuNDM4IDIzMiAyNDQgMjMySDE3NlYxNzZaTTI2MCAzMzZIMTc2VjI4MEgyNjBDMjc1LjQzOCAyODAgMjg4IDI5Mi41NjIgMjg4IDMwOFMyNzUuNDM4IDMzNiAyNjAgMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareB(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM305.883 247.82C314.699 235.41 320 220.346 320 204C320 162.094 285.906 128 244 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H260C301.906 384 336 349.906 336 308C336 283.4 324.062 261.719 305.883 247.82ZM176 176H244C259.438 176 272 188.562 272 204S259.438 232 244 232H176V176ZM260 336H176V280H260C275.438 280 288 292.562 288 308S275.438 336 260 336Z" />
        </Icon>
    </>
}