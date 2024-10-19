
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radiation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=sharp-duotone-solid radiation}
 * @preview ![radiation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDggMjU2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMjU2YzAtMjkuNiAxNi4xLTU1LjUgNDAtNjkuM0wxMjggMzQuM0M1MS41IDc4LjUgMCAxNjEuMyAwIDI1NmwxNzYgMHptNDAgNjkuM0wxMjggNDc3LjdjMzcuNyAyMS44IDgxLjQgMzQuMyAxMjggMzQuM3M5MC40LTEyLjUgMTI4LTM0LjNMMjk2IDMyNS4zYy0xMS44IDYuOC0yNS40IDEwLjctNDAgMTAuN3MtMjguMi0zLjktNDAtMTAuN3pNMzM2IDI1NmwxNzYgMGMwLTk0LjctNTEuNS0xNzcuNS0xMjgtMjIxLjdMMjk2IDE4Ni43YzIzLjkgMTMuOCA0MCAzOS43IDQwIDY5LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const Radiation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M176 256c0-29.6 16.1-55.5 40-69.3L128 34.3C51.5 78.5 0 161.3 0 256l176 0zm40 69.3L128 477.7c37.7 21.8 81.4 34.3 128 34.3s90.4-12.5 128-34.3L296 325.3c-11.8 6.8-25.4 10.7-40 10.7s-28.2-3.9-40-10.7zM336 256l176 0c0-94.7-51.5-177.5-128-221.7L296 186.7c23.9 13.8 40 39.7 40 69.3z" />
    </Icon>
);

export default Radiation;