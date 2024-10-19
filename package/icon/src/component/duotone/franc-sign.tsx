
import { Icon, generic } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=duotone franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxNiAwIDAtNjQtMTYgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTExMi0zMmwwIDY0IDgwIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTgwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik04MCAzMkM2Mi4zIDMyIDQ4IDQ2LjMgNDggNjRsMCAxNjAgMCAyMjRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTE5MiAxNDQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtMTQ0IDAgMC05NiAxNzYgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkw4MCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 17.7 14.3 32 32 32l16 0 0-64-16 0c-17.7 0-32 14.3-32 32zm112-32l0 64 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0z" />
            <path d="M80 32C62.3 32 48 46.3 48 64l0 160 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-96 176 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
    </Icon>
);

export default FrancSign;