
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=sharp-duotone-solid anchor-lock}
 * @preview ![anchor-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1Mmw2NCAwIDAgMTI4IDAgMzIgMzIgMCAxOTIgMCA5NiAwIDAtNjQtNjQgMCAwLTIwOCAzMiAwIDMyIDAgMC02NC0zMiAwLTEwLjkgMEMzNjcgMTU4LjggMzg0IDEyOS40IDM4NCA5NmMwLTUzLTQzLTk2LTk2LTk2cy05NiA0My05NiA5NmMwIDMzLjQgMTcgNjIuOCA0Mi45IDgwTDIyNCAxNzZsLTMyIDAgMCA2NCAzMiAwIDMyIDAgMCAyMDgtMTI4IDAgMC05NiA2NCAwTDk2IDI1NiAwIDM1MnpNMzIwIDk2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OTYgMjcybDAgNDggNjQgMCAwLTQ4YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyem0tNDggNDhsMC00OGMwLTQ0LjIgMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwbDAgNDggMzIgMCAwIDE5Mi0yMjQgMCAwLTE5MiAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l64 0 0 128 0 32 32 0 192 0 96 0 0-64-64 0 0-208 32 0 32 0 0-64-32 0-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 0 208-128 0 0-96 64 0L96 256 0 352zM320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default AnchorLock;