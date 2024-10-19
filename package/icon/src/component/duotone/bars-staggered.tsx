
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=duotone bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMzg0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMOTYgMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCA5NmMwLTE3LjctMTQuMy0zMi0zMi0zMkwzMiA2NEMxNC4zIDY0IDAgNzguMyAwIDk2czE0LjMgMzIgMzIgMzJsMzg0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJ6bTAgMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMyTDMyIDM4NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwzODQgMGMxNy43IDAgMzItMTQuMyAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32z" />
            <path d="M448 96c0-17.7-14.3-32-32-32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32L32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default BarsStaggered;