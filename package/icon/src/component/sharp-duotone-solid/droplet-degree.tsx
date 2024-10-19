
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=sharp-duotone-solid droplet-degree}
 * @preview ![droplet-degree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTEyYTgwIDgwIDAgMSAwIDE2MCAwIDgwIDgwIDAgMSAwIC0xNjAgMHptMTEyIDBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAzMjBjMCAxMDYtODYgMTkyLTE5MiAxOTJTMCA0MjYgMCAzMjBTMTkyIDAgMTkyIDBzMTkyIDIxNCAxOTIgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 112a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm112 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M384 320c0 106-86 192-192 192S0 426 0 320S192 0 192 0s192 214 192 320z" />
    </Icon>
);

export default DropletDegree;