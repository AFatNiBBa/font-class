
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-retro` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-retro?s=sharp-duotone-solid mobile-retro}
 * @preview ![mobile-retro](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzIwIDBsMCA1MTJMMCA1MTIgMCAwek01NiAzMDRsMCA0OCA0OCAwIDAtNDgtNDggMHptMCA4MGwwIDQ4IDQ4IDAgMC00OC00OCAwem04LTI1NmwwIDEyOCAxOTIgMCAwLTEyOEw2NCAxMjh6bTQ4LTgwbDAgMzIgMTYgMCA2NCAwIDE2IDAgMC0zMi0xNiAwLTY0IDAtMTYgMHptMjQgMjU2bDAgNDggNDggMCAwLTQ4LTQ4IDB6bTAgODBsMCA0OCA0OCAwIDAtNDgtNDggMHptODAtODBsMCA0OCA0OCAwIDAtNDgtNDggMHptMCA4MGwwIDQ4IDQ4IDAgMC00OC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTI4SDI1NlYyNTZINjRWMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MobileRetro: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 0L320 0l0 512L0 512 0 0zM56 304l0 48 48 0 0-48-48 0zm0 80l0 48 48 0 0-48-48 0zm8-256l0 128 192 0 0-128L64 128zm48-80l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm24 256l0 48 48 0 0-48-48 0zm0 80l0 48 48 0 0-48-48 0zm80-80l0 48 48 0 0-48-48 0zm0 80l0 48 48 0 0-48-48 0z" />
            <path d="M64 128H256V256H64V128z" />
    </Icon>
);

export default MobileRetro;