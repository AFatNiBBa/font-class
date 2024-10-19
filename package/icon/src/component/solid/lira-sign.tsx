
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lira-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lira-sign?s=solid lira-sign}
 * @preview ![lira-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDQwQzMyMCA0NjIuMDk0IDMwMi4wOTQgNDgwIDI4MCA0ODBINDBDMjQuNTYyIDQ4MCAxMC41IDQ3MS4xMjUgMy44NzUgNDU3LjE1NkMtMi43NSA0NDMuMjE5IC0wLjc1IDQyNi43MTkgOSA0MTQuNzVDMjQuMDYyIDM5Ni4yNDYgMzQuNDkyIDM3NC43MTEgNDAuOSAzNTJIMzJDMTQuMzEyIDM1MiAwIDMzNy42ODggMCAzMjBTMTQuMzEyIDI4OCAzMiAyODhINDhWMjU2SDMyQzE0LjMxMiAyNTYgMCAyNDEuNjg4IDAgMjI0UzE0LjMxMiAxOTIgMzIgMTkySDQ4VjE2MS40MzhDNDggOTAuMDYyIDEwNi4wNjIgMzIgMTc3LjQzOCAzMkMxOTEuNDA2IDMyIDIwNS4yMTkgMzQuMjUgMjE4LjUgMzguNjg4TDI5Mi42ODggNjMuNUMzMTMuNjI1IDcwLjUgMzI0LjkzOCA5My4xODggMzE3LjkzOCAxMTQuMTI1UzI4OC40MDYgMTQ2LjM3NSAyNjcuMzEzIDEzOS4zNzVMMTkzLjEyNSAxMTQuNTYyQzE4OC4wNjIgMTEyLjg3NSAxODIuNzgxIDExMiAxNzcuNDM4IDExMkMxNTAuMTg4IDExMiAxMjggMTM0LjE4OCAxMjggMTYxLjQzOFYxOTJIMjI0QzI0MS42ODggMTkyIDI1NiAyMDYuMzEyIDI1NiAyMjRTMjQxLjY4OCAyNTYgMjI0IDI1NkgxMjhWMjg4SDIyNEMyNDEuNjg4IDI4OCAyNTYgMzAyLjMxMiAyNTYgMzIwUzI0MS42ODggMzUyIDIyNCAzNTJIMTIzLjUzMUMxMjAuNDI4IDM2OC40MyAxMTUuNzc1IDM4NC41MjUgMTA5LjUzMSA0MDBIMjgwQzMwMi4wOTQgNDAwIDMyMCA0MTcuOTA2IDMyMCA0NDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LiraSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 440C320 462.094 302.094 480 280 480H40C24.562 480 10.5 471.125 3.875 457.156C-2.75 443.219 -0.75 426.719 9 414.75C24.062 396.246 34.492 374.711 40.9 352H32C14.312 352 0 337.688 0 320S14.312 288 32 288H48V256H32C14.312 256 0 241.688 0 224S14.312 192 32 192H48V161.438C48 90.062 106.062 32 177.438 32C191.406 32 205.219 34.25 218.5 38.688L292.688 63.5C313.625 70.5 324.938 93.188 317.938 114.125S288.406 146.375 267.313 139.375L193.125 114.562C188.062 112.875 182.781 112 177.438 112C150.188 112 128 134.188 128 161.438V192H224C241.688 192 256 206.312 256 224S241.688 256 224 256H128V288H224C241.688 288 256 302.312 256 320S241.688 352 224 352H123.531C120.428 368.43 115.775 384.525 109.531 400H280C302.094 400 320 417.906 320 440Z" />
        </Icon>
    </>
}