
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=sharp-duotone-solid heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgOTZsMCAzODRMNDcyLjIgMjYzLjhjMjUuNS0yNS41IDM5LjgtNjAgMzkuOC05NkM1MTIgOTIuOCA0NTEuMiAzMiAzNzYuMiAzMmMtMzYgMC03MC41IDE0LjMtOTYgMzkuOEwyNTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zOS44IDI2My44TDI1NiA0ODBWOTZMMjMxLjggNzEuOGMtMjUuNS0yNS41LTYwLTM5LjgtOTYtMzkuOEM2MC44IDMyIDAgOTIuOCAwIDE2Ny44YzAgMzYgMTQuMyA3MC41IDM5LjggOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96l0 384L472.2 263.8c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96z" />
            <path d="M39.8 263.8L256 480V96L231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z" />
    </Icon>
);

export default HeartHalf;