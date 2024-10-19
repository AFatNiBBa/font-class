
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=sharp-duotone-solid location-dot}
 * @preview ![location-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDMwNCAxOTIgNTEyIDE5MiA1MTJzMTkyLTIwOCAxOTItMzIwQzM4NCA4NiAyOTggMCAxOTIgMFMwIDg2IDAgMTkyem0yNzIgMGE4MCA4MCAwIDEgMSAtMTYwIDAgODAgODAgMCAxIDEgMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMTQ0YTQ4IDQ4IDAgMSAwIDAgOTYgNDggNDggMCAxIDAgMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm272 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
            <path d="M192 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default LocationDot;