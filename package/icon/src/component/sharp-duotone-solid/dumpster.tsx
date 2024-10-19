
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=sharp-duotone-solid dumpster}
 * @preview ![dumpster](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwxMTQuOSAwTDE0MC41IDMyIDMyIDMyIDAgMTYwem0xNDcuNSAwTDI3MiAxNjBsMC0xMjgtOTguOSAwTDE0Ny41IDE2MHpNMzA0IDMybDAgMTI4IDEyNC41IDBMNDAyLjkgMzIgMzA0IDMyem0xMzEuNSAwbDI1LjYgMTI4TDU3NiAxNjAgNTQ0IDMyIDQzNS41IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgNDQ4TDQ0IDI4OCAwIDI4OGwwLTY0IDM2IDAtNC0zMiA1MTIgMC00IDMyIDM2IDAgMCA2NC00NCAwTDUxMiA0NDhsMCAzMi02NCAwIDAtMzItMzIwIDAgMCAzMi02NCAwIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l114.9 0L140.5 32 32 32 0 160zm147.5 0L272 160l0-128-98.9 0L147.5 160zM304 32l0 128 124.5 0L402.9 32 304 32zm131.5 0l25.6 128L576 160 544 32 435.5 32z" />
            <path d="M64 448L44 288 0 288l0-64 36 0-4-32 512 0-4 32 36 0 0 64-44 0L512 448l0 32-64 0 0-32-320 0 0 32-64 0 0-32z" />
    </Icon>
);

export default Dumpster;