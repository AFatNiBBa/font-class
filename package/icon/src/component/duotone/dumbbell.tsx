
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=duotone dumbbell}
 * @preview ![dumbbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwwLTY0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnptMTkyLTMybDAgNjQgMjU2IDAgMC02NC0yNTYgMHptNDE2IDBsMCA2NGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAzMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCA2NC0zMiAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDE5MmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwzMiAwIDAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJsMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTM4NGMwLTE3LjctMTQuMy0zMi0zMi0zMmwtMzIgMHptMzg0IDBsLTMyIDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgMzg0YzAgMTcuNyAxNC4zIDMyIDMyIDMybDMyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC02NCAzMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTkyYzAtMTcuNy0xNC4zLTMyLTMyLTMybC0zMiAwIDAtNjRjMC0xNy43LTE0LjMtMzItMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l0-64c-17.7 0-32 14.3-32 32zm192-32l0 64 256 0 0-64-256 0zm416 0l0 64c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
            <path d="M128 32c-17.7 0-32 14.3-32 32l0 64-32 0c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32l-32 0zm384 0l-32 0c-17.7 0-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64 32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0 0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default Dumbbell;