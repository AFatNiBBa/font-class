
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=sharp-duotone-solid wave-triangle}
 * @preview ![wave-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNzUuNiAxMC4xbDI2IDM0LjcgMjYyIDM0OS4zIDEwMi41LTE0MSAxOC44LTI1LjkgNTEuOCAzNy42LTE4LjggMjUuOS0xMjggMTc2LTI1LjUgMzUtMjYtMzQuNy0yNjItMzQ5LjNMNzMuOSAyNTguOCA1NS4xIDI4NC43IDMuMyAyNDcuMWwxOC44LTI1LjkgMTI4LTE3NiAyNS41LTM1eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M175.6 10.1l26 34.7 262 349.3 102.5-141 18.8-25.9 51.8 37.6-18.8 25.9-128 176-25.5 35-26-34.7-262-349.3L73.9 258.8 55.1 284.7 3.3 247.1l18.8-25.9 128-176 25.5-35z" />
    </Icon>
);

export default WaveTriangle;