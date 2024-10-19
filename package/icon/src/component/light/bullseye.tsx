
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=light bullseye}
 * @preview ![bullseye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAwIDMyIDI1NmEyMjQgMjI0IDAgMSAwIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI1NiAzODRhMTI4IDEyOCAwIDEgMCAwLTI1NiAxMjggMTI4IDAgMSAwIDAgMjU2em0wLTI4OGExNjAgMTYwIDAgMSAxIDAgMzIwIDE2MCAxNjAgMCAxIDEgMC0zMjB6bTAgMTkyYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHptMC05NmE2NCA2NCAwIDEgMSAwIDEyOCA2NCA2NCAwIDEgMSAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 384a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Bullseye;