
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-note` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=sharp-duotone-solid music-note}
 * @preview ![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgNTEuOGwwIDI1IDAgNjQgMCAyMTguOWMzNy44IDEyLjggNjQgNDAuNCA2NCA3Mi4zbDAtMjY2LjIgMTAzLjgtMjUuOSAyNC4yLTYuMSAwLTI1IDAtNjQgMC00MS0zOS44IDkuOS0xMjggMzJMMTkyIDUxLjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQgMzUyYTExMiA4MCAwIDEgMCAwIDE2MCAxMTIgODAgMCAxIDAgMC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 51.8l0 25 0 64 0 218.9c37.8 12.8 64 40.4 64 72.3l0-266.2 103.8-25.9 24.2-6.1 0-25 0-64 0-41-39.8 9.9-128 32L192 51.8z" />
            <path d="M144 352a112 80 0 1 0 0 160 112 80 0 1 0 0-160z" />
    </Icon>
);

export default MusicNote;