
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-center` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=duotone align-center}
 * @preview ![align-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxOTIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkwxMjggMzJjLTE3LjcgMC0zMiAxNC4zLTMyIDMyem0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxOTIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtMTkyIDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgNDgwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDM4NCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDMyIDQ4MHptMC0yNTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMzg0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMMzIgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32zm0 256c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32z" />
            <path d="M32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480zm0-256c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224z" />
    </Icon>
);

export default AlignCenter;