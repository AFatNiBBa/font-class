
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=sharp-duotone-solid circle-y}
 * @preview ![circle-y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyMC42IDE0NGw1OS41IDBMMjU2IDI0Ny40IDMzMS44IDE0NGw1OS41IDBDMzU0LjIgMTk0LjYgMzE3LjEgMjQ1LjIgMjgwIDI5NS45YzAgMjYuNyAwIDUzLjQgMCA4MC4xYzAgOCAwIDE2IDAgMjRsLTQ4IDBjMC04IDAtMTYgMC0yNGMwLTI2LjcgMC01My40IDAtODAuMUMxOTQuOSAyNDUuMiAxNTcuOCAxOTQuNiAxMjAuNiAxNDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjAuNiAxNDRMMjMyIDI5NS45bDAgODAuMSAwIDI0IDQ4IDAgMC0yNCAwLTgwLjFMMzkxLjQgMTQ0bC01OS41IDBMMjU2IDI0Ny40IDE4MC4yIDE0NGwtNTkuNSAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM120.6 144l59.5 0L256 247.4 331.8 144l59.5 0C354.2 194.6 317.1 245.2 280 295.9c0 26.7 0 53.4 0 80.1c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-26.7 0-53.4 0-80.1C194.9 245.2 157.8 194.6 120.6 144z" />
            <path d="M120.6 144L232 295.9l0 80.1 0 24 48 0 0-24 0-80.1L391.4 144l-59.5 0L256 247.4 180.2 144l-59.5 0z" />
    </Icon>
);

export default CircleY;