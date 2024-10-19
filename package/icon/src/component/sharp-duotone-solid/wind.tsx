
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=sharp-duotone-solid wind}
 * @preview ![wind](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgMzg0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTMyIDAtMzIgMCAwIDY0IDMyIDAgMzIgMGM1MyAwIDk2LTQzIDk2LTk2cy00My05Ni05Ni05NkwzMiAyMjQgMCAyMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMEwyODggMGwwIDY0IDMyIDAgMzIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiAxMjggMCAxMjhsMCA2NCAzMiAwIDMyMCAwYzUzIDAgOTYtNDMgOTYtOTZzLTQzLTk2LTk2LTk2TDMyMCAwek0xMjggNTEybDMyIDBjNTMgMCA5Ni00MyA5Ni05NnMtNDMtOTYtOTYtOTZMMzIgMzIwIDAgMzIwbDAgNjQgMzIgMCAxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMzIgMC0zMiAwIDAgNjQgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-32 0 0 64 32 0 32 0c53 0 96-43 96-96s-43-96-96-96L32 224 0 224z" />
            <path d="M320 0L288 0l0 64 32 0 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128 0 128l0 64 32 0 320 0c53 0 96-43 96-96s-43-96-96-96L320 0zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320 0 320l0 64 32 0 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-32 0 0 64 32 0z" />
    </Icon>
);

export default Wind;