
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rss` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=duotone rss}
 * @preview ![rss](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgODEuNyAxNC4zIDk2IDMyIDk2YzE5NC40IDAgMzUyIDE1Ny42IDM1MiAzNTJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMkM0NDggMjE4LjIgMjYxLjggMzIgMzIgMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NHpNMCAxOTJjMCAxNy43IDE0LjMgMzIgMzIgMzJjMTIzLjcgMCAyMjQgMTAwLjMgMjI0IDIyNGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyYzAtMTU5LjEtMTI4LjktMjg4LTI4OC0yODhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0MTZhNjQgNjQgMCAxIDEgMTI4IDBBNjQgNjQgMCAxIDEgMCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 81.7 14.3 96 32 96c194.4 0 352 157.6 352 352c0 17.7 14.3 32 32 32s32-14.3 32-32C448 218.2 261.8 32 32 32C14.3 32 0 46.3 0 64zM0 192c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-159.1-128.9-288-288-288c-17.7 0-32 14.3-32 32z" />
            <path d="M0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416z" />
    </Icon>
);

export default Rss;