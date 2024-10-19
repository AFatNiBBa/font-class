
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=sharp-duotone-solid paper-plane-top}
 * @preview ![paper-plane-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyQzI3LjggOTYuOSA1NS42IDE2MS43IDgzLjQgMjI2LjZjNzMuNiA5LjggMTQ3LjEgMTkuNiAyMjAuNiAyOS40Yy03My41IDkuOC0xNDcuMSAxOS42LTIyMC42IDI5LjRDNTUuNiAzNTAuMyAyNy44IDQxNS4xIDAgNDgwbDY0IDBMNTEyIDI1NiA2NCAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODMuNCAyMjYuNkw5NiAyNTYgODMuNCAyODUuNCAzMDQgMjU2IDgzLjQgMjI2LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32C27.8 96.9 55.6 161.7 83.4 226.6c73.6 9.8 147.1 19.6 220.6 29.4c-73.5 9.8-147.1 19.6-220.6 29.4C55.6 350.3 27.8 415.1 0 480l64 0L512 256 64 32 0 32z" />
            <path d="M83.4 226.6L96 256 83.4 285.4 304 256 83.4 226.6z" />
    </Icon>
);

export default PaperPlaneTop;