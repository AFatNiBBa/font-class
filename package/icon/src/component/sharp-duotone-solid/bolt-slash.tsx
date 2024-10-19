
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-slash?s=sharp-duotone-solid bolt-slash}
 * @preview ![bolt-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMjg4bDU5LjgtNTYuNiAxMDMuOSA4MS44TDExMiAyODh6TTIyNCA1MTJsNTguMS0xOTMuNyA3OS45IDYzTDIyNCA1MTJ6bTE3LjgtMzQ3TDQxNiAwIDM1Ni43IDE5Ny42IDUyOCAyMjRsLTk0LjYgODkuN0MzNjkuNSAyNjQuMSAzMDUuNyAyMTQuNiAyNDEuOCAxNjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoltSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 288l59.8-56.6 103.9 81.8L112 288zM224 512l58.1-193.7 79.9 63L224 512zm17.8-347L416 0 356.7 197.6 528 224l-94.6 89.7C369.5 264.1 305.7 214.6 241.8 165z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BoltSlash;