
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-dots` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots?s=sharp-duotone-solid grip-dots}
 * @preview ![grip-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMzM2YTQ4IDQ4IDAgMSAxIC05NiAwIDQ4IDQ4IDAgMSAxIDk2IDB6bTE2MCAwYTQ4IDQ4IDAgMSAxIC05NiAwIDQ4IDQ4IDAgMSAxIDk2IDB6bTE2MCAwYTQ4IDQ4IDAgMSAxIC05NiAwIDQ4IDQ4IDAgMSAxIDk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTI4YTQ4IDQ4IDAgMSAxIDAgOTYgNDggNDggMCAxIDEgMC05NnptLTE2MCAwYTQ4IDQ4IDAgMSAxIDAgOTYgNDggNDggMCAxIDEgMC05NnpNMTEyIDE3NmE0OCA0OCAwIDEgMSAtOTYgMCA0OCA0OCAwIDEgMSA5NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GripDots: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M112 336a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
            <path d="M384 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM112 176a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default GripDots;