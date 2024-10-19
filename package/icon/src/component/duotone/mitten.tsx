
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mitten` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=duotone mitten}
 * @preview ![mitten](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0MTZsMCA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwyODggMGMxNy43IDAgMzItMTQuMyAzMi0zMmwwLTY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDY0IDM4NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMTQuNyAyMzQuN0wyODMuMiAxMDguOUMyNjcuMiA0NC45IDIwOS43IDAgMTQzLjggMGwtMy40IDBDNjIuOCAwIDAgNjIuOCAwIDE0MC4zYzAgMTMgMS44IDI2IDUuNCAzOC42TDY0IDM4NGwyODggMCA3OS4yLTg1LjhjMTAuOC0xMS43IDE2LjgtMjcgMTYuOC00Mi45YzAtMzQuOS0yOC4zLTYzLjMtNjMuMy02My4zbC0yLjggMGMtMTkgMC0zNy4yIDguMi00OS43IDIyLjZsLTE3LjYgMjAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 416l0 64c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 384c-17.7 0-32 14.3-32 32z" />
            <path d="M314.7 234.7L283.2 108.9C267.2 44.9 209.7 0 143.8 0l-3.4 0C62.8 0 0 62.8 0 140.3c0 13 1.8 26 5.4 38.6L64 384l288 0 79.2-85.8c10.8-11.7 16.8-27 16.8-42.9c0-34.9-28.3-63.3-63.3-63.3l-2.8 0c-19 0-37.2 8.2-49.7 22.6l-17.6 20.1z" />
    </Icon>
);

export default Mitten;