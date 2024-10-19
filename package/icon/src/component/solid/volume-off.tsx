
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=solid volume-off}
 * @preview ![volume-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNjQuMDA2VjQ0OEMzMjAgNDYwLjU5NCAzMTIuNjA5IDQ3Mi4wMzEgMzAxLjEwOSA0NzcuMTg4QzI5Ni45MDYgNDc5LjA5NCAyOTIuNDM4IDQ4MCAyODggNDgwQzI4MC4zMTIgNDgwIDI3Mi43MTkgNDc3LjIxOSAyNjYuNzM0IDQ3MS45MDZMMTMxLjg0IDM1Mi4wMDJINDhDMjEuNDkgMzUyLjAwMiAwIDMzMC41MSAwIDMwNC4wMDJWMjA4LjAwNEMwIDE4MS40OTYgMjEuNDkgMTYwLjAwNSA0OCAxNjAuMDA1SDEzMS44NEwyNjYuNzM0IDQwLjFDMjc2LjE1NiAzMS43MjUgMjg5LjYwOSAyOS42MzEgMzAxLjEwOSAzNC44MTlDMzEyLjYwOSAzOS45NzUgMzIwIDUxLjQxMiAzMjAgNjQuMDA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VolumeOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 64.006V448C320 460.594 312.609 472.031 301.109 477.188C296.906 479.094 292.438 480 288 480C280.312 480 272.719 477.219 266.734 471.906L131.84 352.002H48C21.49 352.002 0 330.51 0 304.002V208.004C0 181.496 21.49 160.005 48 160.005H131.84L266.734 40.1C276.156 31.725 289.609 29.631 301.109 34.819C312.609 39.975 320 51.412 320 64.006Z" />
        </Icon>
    </>
}