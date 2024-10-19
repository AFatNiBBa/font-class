
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=duotone thumbtack}
 * @preview ![thumbtack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGMwIDYuNiAyLjEgMTMuMiA2IDE4LjdjNiA4LjMgMTUuNyAxMy4zIDI2IDEzLjNsMTI4IDAgMC05NmMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgOTYgMTI4IDBjMTAuMyAwIDE5LjktNC45IDI2LTEzLjNjNC01LjUgNi0xMi4xIDYtMTguN2MwLTMuNC0uNS02LjgtMS42LTEwLjFsLTEtM2MtMTMuOC00MS41LTQyLjgtNzQuOC03OS41LTk0LjdMMjkwLjUgNjQgMzIwIDY0YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDY0IDBDNDYuMyAwIDMyIDE0LjMgMzIgMzJzMTQuMyAzMiAzMiAzMmwyOS41IDBMODIuMSAyMTIuMmMtMzYuNyAxOS45LTY1LjcgNTMuMi03OS41IDk0LjdsLTEgM0MuNSAzMTMuMiAwIDMxNi42IDAgMzIweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDIyNGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDIyNGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTIyNGMwLTE3LjcgMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 6.6 2.1 13.2 6 18.7c6 8.3 15.7 13.3 26 13.3l128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 128 0c10.3 0 19.9-4.9 26-13.3c4-5.5 6-12.1 6-18.7c0-3.4-.5-6.8-1.6-10.1l-1-3c-13.8-41.5-42.8-74.8-79.5-94.7L290.5 64 320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 0C46.3 0 32 14.3 32 32s14.3 32 32 32l29.5 0L82.1 212.2c-36.7 19.9-65.7 53.2-79.5 94.7l-1 3C.5 313.2 0 316.6 0 320z" />
            <path d="M192 224c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Thumbtack;