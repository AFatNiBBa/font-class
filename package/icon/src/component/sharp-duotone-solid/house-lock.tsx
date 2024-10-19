
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=sharp-duotone-solid house-lock}
 * @preview ![house-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGwwIDQ3LjYgNjQuMSAwIDAgMjI0LjRMMjI0IDUxMmwwLTE2MCAxMjggMCAwIDE2MCAzMiAwIDAtMjI0IDMyIDAgMC0xNmMwLTQ4IDMwLjItODkgNzIuNy0xMDQuOUwyODguNCAwIDAgMjQweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDk2IDI3MmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptLTQ4IDQ4bDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4IDMyIDAgMCAxOTItMjI0IDAgMC0xOTIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 128 0 0 160 32 0 0-224 32 0 0-16c0-48 30.2-89 72.7-104.9L288.4 0 0 240z" />
            <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default HouseLock;