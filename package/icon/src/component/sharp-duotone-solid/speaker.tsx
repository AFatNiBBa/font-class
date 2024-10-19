
import { Icon, generic } from "../../index";

/**
 * A component that renders the `speaker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=sharp-duotone-solid speaker}
 * @preview ![speaker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzg0IDBsMCA1MTJMMCA1MTIgMCAwek04MCAzMzZhMTEyIDExMiAwIDEgMCAyMjQgMEExMTIgMTEyIDAgMSAwIDgwIDMzNnptNjQtMjI0YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMTYwYTQ4IDQ4IDAgMSAwIDAtOTYgNDggNDggMCAxIDAgMCA5NnptMCAyODhhMTEyIDExMiAwIDEgMCAwLTIyNCAxMTIgMTEyIDAgMSAwIDAgMjI0ek0xMjggMzM2YTY0IDY0IDAgMSAxIDEyOCAwIDY0IDY0IDAgMSAxIC0xMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Speaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 512L0 512 0 0zM80 336a112 112 0 1 0 224 0A112 112 0 1 0 80 336zm64-224a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M192 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM128 336a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Speaker;