
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=duotone plug}
 * @preview ![plug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmwwIDEyOCA2NCAwIDAtMTI4YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzY0IDE0LjMgNjQgMzJ6bTE5MiAwbDAgMTI4IDY0IDAgMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDE5MmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMjAgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwwIDMyYzAgNzcuNC01NSAxNDItMTI4IDE1Ni44bDAgNjcuMmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTY3LjJDODcgMzk4IDMyIDMzMy40IDMyIDI1NmwwLTMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 32l0 128 64 0 0-128c0-17.7-14.3-32-32-32S64 14.3 64 32zm192 0l0 128 64 0 0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M0 192c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 32c0 77.4-55 142-128 156.8l0 67.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-67.2C87 398 32 333.4 32 256l0-32c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Plug;