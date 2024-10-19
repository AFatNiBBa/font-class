
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=sharp-duotone-solid face-flushed}
 * @preview ![face-flushed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTIzMi0zMkE3MiA3MiAwIDEgMSA4OCAyMjRhNzIgNzIgMCAxIDEgMTQ0IDB6TTE3NiAzNjhsMTYgMCAxMjggMCAxNiAwIDAgMzItMTYgMC0xMjggMC0xNiAwIDAtMzJ6TTQyNCAyMjRhNzIgNzIgMCAxIDEgLTE0NCAwIDcyIDcyIDAgMSAxIDE0NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDI0OGEyNCAyNCAwIDEgMCAwLTQ4IDI0IDI0IDAgMSAwIDAgNDh6bTE5MiAwYTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232-32A72 72 0 1 1 88 224a72 72 0 1 1 144 0zM176 368l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zM424 224a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
            <path d="M160 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default FaceFlushed;