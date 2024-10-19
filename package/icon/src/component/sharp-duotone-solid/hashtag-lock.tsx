
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=sharp-duotone-solid hashtag-lock}
 * @preview ![hashtag-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zLjEgMzg0TDE2IDM4NGw3NC4yIDAtMTYgOTYgNjQuOSAwIDE2LTk2IDk1LjEgMC0xNiA5NiA2NC45IDAgMTYtOTYgNC45IDAgMC05NiAxMS4xIDAgMTYtOTYgMzguNSAwYzE0LjUtMTQuMiAzMi45LTI0LjYgNTMuNS0yOS4ybDUuOC0zNC44TDQzMiAxMjhsLTc0LjIgMCAxNi05Ni02NC45IDAtMTYgOTYtOTUuMSAwIDE2LTk2LTY0LjkgMC0xNiA5Nkw0OCAxMjhsLTIuMiAwTDM1LjEgMTkyIDQ4IDE5Mmw3NC4yIDBMMTAwLjkgMzIwIDE2IDMyMGwtMi4yIDBMMy4xIDM4NHptMTYyLjctNjRsMjEuMy0xMjggOTUuMSAwTDI2MC45IDMyMGwtOTUuMSAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyIDI3MmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptLTQ4IDQ4bDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4IDMyIDAgMCAxOTItMjI0IDAgMC0xOTIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M3.1 384L16 384l74.2 0-16 96 64.9 0 16-96 95.1 0-16 96 64.9 0 16-96 4.9 0 0-96 11.1 0 16-96 38.5 0c14.5-14.2 32.9-24.6 53.5-29.2l5.8-34.8L432 128l-74.2 0 16-96-64.9 0-16 96-95.1 0 16-96-64.9 0-16 96L48 128l-2.2 0L35.1 192 48 192l74.2 0L100.9 320 16 320l-2.2 0L3.1 384zm162.7-64l21.3-128 95.1 0L260.9 320l-95.1 0z" />
            <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default HashtagLock;