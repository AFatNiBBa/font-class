
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-o` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-o?s=sharp-duotone-solid circle-o}
 * @preview ![circle-o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTM4NCAwYTEyOCAxMjggMCAxIDEgLTI1NiAwIDEyOCAxMjggMCAxIDEgMjU2IDB6bS0yMDggMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMTc2YTgwIDgwIDAgMSAwIDAgMTYwIDgwIDgwIDAgMSAwIDAtMTYwem0xMjggODBhMTI4IDEyOCAwIDEgMSAtMjU2IDAgMTI4IDEyOCAwIDEgMSAyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleO: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm384 0a128 128 0 1 1 -256 0 128 128 0 1 1 256 0zm-208 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M256 176a80 80 0 1 0 0 160 80 80 0 1 0 0-160zm128 80a128 128 0 1 1 -256 0 128 128 0 1 1 256 0z" />
    </Icon>
);

export default CircleO;