
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=sharp-duotone-solid circle-bolt}
 * @preview ![circle-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NC04TDMyMCAxMTIgMjgwIDI0MGw4OCAwIDAgMjRMMTkyIDQwMGw0MC0xMjgtODggMCAwLTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzY4IDI2NEwxOTIgNDAwbDQwLTEyOEgxNDRWMjQ4TDMyMCAxMTIgMjgwIDI0MGg4OHYyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-8L320 112 280 240l88 0 0 24L192 400l40-128-88 0 0-24z" />
            <path d="M368 264L192 400l40-128H144V248L320 112 280 240h88v24z" />
    </Icon>
);

export default CircleBolt;