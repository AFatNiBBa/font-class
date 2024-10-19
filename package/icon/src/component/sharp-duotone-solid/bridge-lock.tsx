
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=sharp-duotone-solid bridge-lock}
 * @preview ![bridge-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMmwwIDY0IDMyIDAgNDAgMCAwIDY0LTcyIDAgMCAxMjhjNTMgMCA5NiA0MyA5NiA5NmwwIDk2IDk2IDAgMC05NmMwLTUzIDQzLTk2IDk2LTk2YzI0LjYgMCA0NyA5LjIgNjQgMjQuNGwwLTI0LjQgMzIgMCAwLTE2YzAtNjEuOSA1MC4xLTExMiAxMTItMTEybDggMCAwLTY0IDQwIDAgMzIgMCAwLTY0LTMyIDBMNjQgMzIgMzIgMzJ6TTE1MiA5Nmw4MCAwIDAgNjQtODAgMCAwLTY0em0xMjggMGw4MCAwIDAgNjQtODAgMCAwLTY0em0xMjggMGw4MCAwIDAgNjQtODAgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDk2IDI3MmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptLTQ4IDQ4bDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4IDMyIDAgMCAxOTItMjI0IDAgMC0xOTIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l0 64 32 0 40 0 0 64-72 0 0 128c53 0 96 43 96 96l0 96 96 0 0-96c0-53 43-96 96-96c24.6 0 47 9.2 64 24.4l0-24.4 32 0 0-16c0-61.9 50.1-112 112-112l8 0 0-64 40 0 32 0 0-64-32 0L64 32 32 32zM152 96l80 0 0 64-80 0 0-64zm128 0l80 0 0 64-80 0 0-64zm128 0l80 0 0 64-80 0 0-64z" />
            <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default BridgeLock;