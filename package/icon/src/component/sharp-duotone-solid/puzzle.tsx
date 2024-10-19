
import { Icon, generic } from "../../index";

/**
 * A component that renders the `puzzle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle?s=sharp-duotone-solid puzzle}
 * @preview ![puzzle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDUxMmwyMjQgMCAwLTgwLTMyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMzIgMCAwLTgwLTgwIDAgMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDMyTDAgMjg4ek0zMDQgMGwwIDgwIDMyIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTMyIDAgMCA2NCA2NCAwIDAgMTZjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTE2IDgwIDBMNTEyIDAgMzA0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI4OGw4MCAwIDAtMzJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDMyIDgwIDAgMC04MCAxNiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xNiAwIDAtODBMMCA2NCAwIDI4OHptMjI0IDBsMCA4MC0zMiAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDMyIDAgMCA4MCAyMjQgMCAwLTIyNC04MCAwIDAgMzJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zMi04MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Puzzle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 512l224 0 0-80-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-80-80 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 288zM304 0l0 80 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64 64 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 80 0L512 0 304 0z" />
            <path d="M0 288l80 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 80 0 0-80 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-80L0 64 0 288zm224 0l0 80-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 80 224 0 0-224-80 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-80 0z" />
    </Icon>
);

export default Puzzle;