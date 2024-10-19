
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=sharp-duotone-solid road-lock}
 * @preview ![road-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0ODBsMjU2IDAgMC02NCAwLTMyIDY0IDAgMCAzMiAwIDY0IDMyIDAgMC0xOTIgMzIgMCAwLTE2YzAtNTguMSA0NC4yLTEwNS44IDEwMC43LTExMS40TDQ4MCAzMiAzNTIgMzJsMCA2NCAwIDMyLTY0IDAgMC0zMiAwLTY0TDE2MCAzMiAzMiA0ODB6TTI4OCAxOTJsNjQgMCAwIDMyIDAgNjQgMCAzMi02NCAwIDAtMzIgMC02NCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDk2IDI3MmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptLTQ4IDQ4bDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4IDMyIDAgMCAxOTItMjI0IDAgMC0xOTIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 480l256 0 0-64 0-32 64 0 0 32 0 64 32 0 0-192 32 0 0-16c0-58.1 44.2-105.8 100.7-111.4L480 32 352 32l0 64 0 32-64 0 0-32 0-64L160 32 32 480zM288 192l64 0 0 32 0 64 0 32-64 0 0-32 0-64 0-32z" />
            <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default RoadLock;