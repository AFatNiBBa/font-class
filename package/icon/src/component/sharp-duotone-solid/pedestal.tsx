
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=sharp-duotone-solid pedestal}
 * @preview ![pedestal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAwTDQxNiAwbDAgNDQ4TDMyIDQ0OCAzMiAwek05NiA4OGEyNCAyNCAwIDEgMCA0OCAwQTI0IDI0IDAgMSAwIDk2IDg4em0yMDggMGEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwIC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDg4QTI0IDI0IDAgMSAwIDk2IDg4YTI0IDI0IDAgMSAwIDQ4IDB6bTIwOCAwYTI0IDI0IDAgMSAwIC00OCAwIDI0IDI0IDAgMSAwIDQ4IDB6TTMyIDQ0OEwwIDQ0OGwwIDY0IDMyIDAgMzg0IDAgMzIgMCAwLTY0LTMyIDBMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 0L416 0l0 448L32 448 32 0zM96 88a24 24 0 1 0 48 0A24 24 0 1 0 96 88zm208 0a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            <path d="M144 88A24 24 0 1 0 96 88a24 24 0 1 0 48 0zm208 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM32 448L0 448l0 64 32 0 384 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Pedestal;