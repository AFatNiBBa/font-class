
import { Icon, generic } from "../../index";

/**
 * A component that renders the `expand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=duotone expand}
 * @preview ![expand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDk2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDk2IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTY0IDAgMC02NGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnpNMjg4IDY0YzAgMTcuNyAxNC4zIDMyIDMyIDMybDY0IDAgMCA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtOTZjMC0xNy43LTE0LjMtMzItMzItMzJsLTk2IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMmw5NiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDY0IDk2bDAgNjRjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJMMCA2NHpNNDE2IDMyMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDk2YzAgMTcuNy0xNC4zIDMyLTMyIDMybC05NiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDY0IDAgMC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zM288 64c0 17.7 14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32z" />
            <path d="M0 64C0 46.3 14.3 32 32 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64zM416 320c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Expand;