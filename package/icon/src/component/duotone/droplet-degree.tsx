
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=duotone droplet-degree}
 * @preview ![droplet-degree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTEyYTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHptMTEyIDBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzIwQzAgNDI2IDg2IDUxMiAxOTIgNTEyczE5Mi04NiAxOTItMTkyYzAtOTEuMi0xMzAuMi0yNjIuMy0xNjYuNi0zMDguM0MyMTEuNCA0LjIgMjAyLjUgMCAxOTIuOSAwaC0xLjhjLTkuNiAwLTE4LjUgNC4yLTI0LjUgMTEuN0MxMzAuMiA1Ny43IDAgMjI4LjggMCAzMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 112a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm112 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320z" />
    </Icon>
);

export default DropletDegree;