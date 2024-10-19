
import { Icon, generic } from "../../index";

/**
 * A component that renders the `power-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=duotone power-off}
 * @preview ![power-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMzJsMCAyMjRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTIyNGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0Ny43IDc1LjVjMTEuMyAxMy42IDkuNCAzMy44LTQuMSA0NS4xQzEwNC43IDE1Mi45IDgwIDIwMS42IDgwIDI1NmMwIDk3LjIgNzguOCAxNzYgMTc2IDE3NnMxNzYtNzguOCAxNzYtMTc2YzAtNTQuNC0yNC43LTEwMy4xLTYzLjUtMTM1LjRjLTEzLjYtMTEuMy0xNS40LTMxLjUtNC4xLTQ1LjFzMzEuNS0xNS40IDQ1LjEtNC4xQzQ2Mi4yIDExNS40IDQ5NiAxODEuOCA0OTYgMjU2YzAgMTMyLjUtMTA3LjUgMjQwLTI0MCAyNDBTMTYgMzg4LjUgMTYgMjU2YzAtNzQuMiAzMy43LTE0MC42IDg2LjYtMTg0LjZjMTMuNi0xMS4zIDMzLjgtOS40IDQ1LjEgNC4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M147.7 75.5c11.3 13.6 9.4 33.8-4.1 45.1C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4c-13.6-11.3-15.4-31.5-4.1-45.1s31.5-15.4 45.1-4.1C462.2 115.4 496 181.8 496 256c0 132.5-107.5 240-240 240S16 388.5 16 256c0-74.2 33.7-140.6 86.6-184.6c13.6-11.3 33.8-9.4 45.1 4.1z" />
    </Icon>
);

export default PowerOff;