
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=duotone binoculars}
 * @preview ![binoculars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGwwIDMyIDk2IDAgMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMmwtMzIgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6TTIyNCA5NmwwIDE2MCA2NCAwIDAtMTYwLTY0IDB6bTk2LTMybDAgMzIgOTYgMCAwLTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMybC0zMiAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiA0NDhsMC0xOTIgMzIgMCAwLTE2MC0zMiAwTDkzIDk2Yy0xNi40IDAtMzAuMiAxMi41LTMxLjggMjguOGwtOSA4OS43Yy0yLjcgMjcuMy0xMS41IDUzLjctMjUuNiA3Ny4zQzkuMiAzMjAuNyAwIDM1My44IDAgMzg3LjZMMCA0NDhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTI4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJ6bTEyOCAwYzAgMTcuNyAxNC4zIDMyIDMyIDMybDEyOCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtNjAuNGMwLTMzLjgtOS4yLTY2LjktMjYuNS05NS44Yy0xNC4xLTIzLjYtMjIuOS00OS45LTI1LjYtNzcuM2wtOS04OS43QzQ0OS4yIDEwOC41IDQzNS41IDk2IDQxOSA5NmwtOTkgMC0zMiAwIDAgMTYwIDMyIDAgMCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 64l0 32 96 0 0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zM224 96l0 160 64 0 0-160-64 0zm96-32l0 32 96 0 0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z" />
            <path d="M192 448l0-192 32 0 0-160-32 0L93 96c-16.4 0-30.2 12.5-31.8 28.8l-9 89.7c-2.7 27.3-11.5 53.7-25.6 77.3C9.2 320.7 0 353.8 0 387.6L0 448c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32zm128 0c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-60.4c0-33.8-9.2-66.9-26.5-95.8c-14.1-23.6-22.9-49.9-25.6-77.3l-9-89.7C449.2 108.5 435.5 96 419 96l-99 0-32 0 0 160 32 0 0 192z" />
    </Icon>
);

export default Binoculars;