
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-duotone-solid clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw2LjEgMCA2Ny45IDAgOTIuMSAwIDY3LjkgMCA5Mi4xIDAgNjcuOSAwTDUxMiAxNjBsMCAzMjBMMCA0ODAgMCAxNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NTQuMSAzMkwzMjcgMTU5bC0xIDEtOTIuMSAwTDM2MSAzM2wxLTEgOTIuMSAwek0zOTMuOSAxNjBMNTEyIDQxLjkgNTEyIDE2MGwtMTE4LjEgMHpNMjAxLjkgMzJsOTIuMSAwTDE2NyAxNTlsLTEgMS05Mi4xIDBMMjAxIDMzbDEtMXptLTY3LjkgMEw3IDE1OWwtMSAxTDAgMTYwIDAgMzJsMTM0LjEgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l6.1 0 67.9 0 92.1 0 67.9 0 92.1 0 67.9 0L512 160l0 320L0 480 0 160z" />
            <path d="M454.1 32L327 159l-1 1-92.1 0L361 33l1-1 92.1 0zM393.9 160L512 41.9 512 160l-118.1 0zM201.9 32l92.1 0L167 159l-1 1-92.1 0L201 33l1-1zm-67.9 0L7 159l-1 1L0 160 0 32l134.1 0z" />
    </Icon>
);

export default Clapperboard;