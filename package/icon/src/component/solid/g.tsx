
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `g` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=solid g}
 * @preview ![g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDgwQzE2NC4xNzIgNDgwIDEwNy45MDYgNDU2LjY4OCA2NS42MDkgNDE0LjM3NUMyMy4yOTcgMzcyLjA5NCAwIDMxNS44NDQgMCAyNTZTMjMuMjk3IDEzOS45MDYgNjUuNjA5IDk3LjYyNUMxMDcuOTA2IDU1LjMxMiAxNjQuMTcyIDMyIDIyNCAzMlMzNDAuMDk0IDU1LjMxMiAzODIuMzkxIDk3LjYyNUM0MDEuMTQxIDExNi4zNzUgNDAxLjE0MSAxNDYuNzUgMzgyLjM5MSAxNjUuNVMzMzMuMjM0IDE4NC4yNSAzMTQuNTE2IDE2NS41QzI2Ni4xNDEgMTE3LjEyNSAxODEuODU5IDExNy4xMjUgMTMzLjQ4NCAxNjUuNUMxMDkuMzEyIDE4OS42ODggOTYgMjIxLjgxMiA5NiAyNTZTMTA5LjMxMiAzMjIuMzEyIDEzMy40ODQgMzQ2LjVDMTgxLjg1OSAzOTQuODc1IDI2Ni4xNDEgMzk0Ljg3NSAzMTQuNTE2IDM0Ni41QzMyMi44NzUgMzM4LjEyNSAzMzAuMDk0IDMyOS4xODggMzM2IDMyMEgyNDBDMjEzLjQ4NCAzMjAgMTkyIDI5OC41IDE5MiAyNzJTMjEzLjQ4NCAyMjQgMjQwIDIyNEg0MDBDNDI2LjUxNiAyMjQgNDQ4IDI0NS41IDQ0OCAyNzJWMjg4QzQ0OCAyOTAuOTA2IDQ0Ny43MzQgMjkzLjgxMiA0NDcuMjAzIDI5Ni42ODhDNDM5LjUxNiAzMzguNDY5IDQxNi41IDM4MC4yODEgMzgyLjM5MSA0MTQuMzc1QzM0MC4wOTQgNDU2LjY4OCAyODMuODI4IDQ4MCAyMjQgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function G(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 480C164.172 480 107.906 456.688 65.609 414.375C23.297 372.094 0 315.844 0 256S23.297 139.906 65.609 97.625C107.906 55.312 164.172 32 224 32S340.094 55.312 382.391 97.625C401.141 116.375 401.141 146.75 382.391 165.5S333.234 184.25 314.516 165.5C266.141 117.125 181.859 117.125 133.484 165.5C109.312 189.688 96 221.812 96 256S109.312 322.312 133.484 346.5C181.859 394.875 266.141 394.875 314.516 346.5C322.875 338.125 330.094 329.188 336 320H240C213.484 320 192 298.5 192 272S213.484 224 240 224H400C426.516 224 448 245.5 448 272V288C448 290.906 447.734 293.812 447.203 296.688C439.516 338.469 416.5 380.281 382.391 414.375C340.094 456.688 283.828 480 224 480Z" />
        </Icon>
    </>
}