
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=duotone pallet-boxes}
 * @preview ![pallet-boxes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzMiAwIDAgNjQtMzIgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmw2NCAwIDIyNCAwIDIyNCAwIDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTMyIDAgMC02NCAzMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC02NCAwLTIyNCAwTDk2IDMyMGwtNjQgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTEyOCAzMmwxNjAgMCAwIDY0LTE2MCAwIDAtNjR6bTIyNCAwbDE2MCAwIDAgNjQtMTYwIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDBDNzguMyAwIDY0IDE0LjMgNjQgMzJsMCAxOTJjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTkyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xOTJjMC0xNy43LTE0LjMtMzItMzItMzJMOTYgMHpNNDE2IDY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTEyOGMwLTE3LjctMTQuMy0zMi0zMi0zMkw0MTYgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 17.7 14.3 32 32 32l32 0 0 64-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 224 0 224 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-224 0L96 320l-64 0c-17.7 0-32 14.3-32 32zm128 32l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
            <path d="M96 0C78.3 0 64 14.3 64 32l0 192c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L96 0zM416 64c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L416 64z" />
    </Icon>
);

export default PalletBoxes;