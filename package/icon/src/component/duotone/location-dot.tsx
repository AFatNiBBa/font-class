
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=duotone location-dot}
 * @preview ![location-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDg3LjQgMTE3IDI0MyAxNjguMyAzMDcuMmM2LjEgNy43IDE0LjkgMTEuNSAyMy43IDExLjVzMTcuNi0zLjggMjMuNy0xMS41QzI2NyA0MzUgMzg0IDI3OS40IDM4NCAxOTJDMzg0IDg2IDI5OCAwIDE5MiAwUzAgODYgMCAxOTJ6bTI3MiAwYTgwIDgwIDAgMSAxIC0xNjAgMCA4MCA4MCAwIDEgMSAxNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNDRhNDggNDggMCAxIDAgMCA5NiA0OCA0OCAwIDEgMCAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 87.4 117 243 168.3 307.2c6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192zm272 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
            <path d="M192 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default LocationDot;