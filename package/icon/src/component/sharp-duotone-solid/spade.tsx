
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spade` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=sharp-duotone-solid spade}
 * @preview ![spade](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwMi45QzAgMzY1LjMgNTAuNyA0MTYgMTEzLjEgNDE2YzMwIDAgNTguOC0xMS45IDgwLTMzLjFMMjI0IDM1MmwwLTk2IDAtMzIgNjQgMCAwIDMyIDAgOTYgMzAuOSAzMC45YzIxLjIgMjEuMiA1MCAzMy4xIDgwIDMzLjFDNDYxLjMgNDE2IDUxMiAzNjUuMyA1MTIgMzAyLjljMC0zMC0xMS45LTU4LjgtMzMuMS04MEw0MTYgMTYwIDI1NiAwIDk2IDE2MCAzMy4xIDIyMi45QzExLjkgMjQ0LjEgMCAyNzIuOSAwIDMwMi45eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDIyNGwwIDMyIDAgMTkyIDMyIDAgMzIgMCAwIDY0LTMyIDAtMzIgMC02NCAwLTMyIDAtMzIgMCAwLTY0IDMyIDAgMzIgMCAwLTE5MiAwLTMyIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 302.9C0 365.3 50.7 416 113.1 416c30 0 58.8-11.9 80-33.1L224 352l0-96 0-32 64 0 0 32 0 96 30.9 30.9c21.2 21.2 50 33.1 80 33.1C461.3 416 512 365.3 512 302.9c0-30-11.9-58.8-33.1-80L416 160 256 0 96 160 33.1 222.9C11.9 244.1 0 272.9 0 302.9z" />
            <path d="M288 224l0 32 0 192 32 0 32 0 0 64-32 0-32 0-64 0-32 0-32 0 0-64 32 0 32 0 0-192 0-32 64 0z" />
    </Icon>
);

export default Spade;