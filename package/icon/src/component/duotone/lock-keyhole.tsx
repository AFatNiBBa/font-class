
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=duotone lock-keyhole}
 * @preview ![lock-keyhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAxNDRsMCA0OCA2NCAwIDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4IDY0IDAgMC00OEMzNjggNjQuNSAzMDMuNSAwIDIyNCAwUzgwIDY0LjUgODAgMTQ0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTkyYy0zNS4zIDAtNjQgMjguNy02NCA2NEwwIDQ0OGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMjAgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTE5MmMwLTM1LjMtMjguNy02NC02NC02NEw2NCAxOTJ6TTI1NiAzMjBsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTY0YzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 64 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144z" />
            <path d="M64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 192zM256 320l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default LockKeyhole;