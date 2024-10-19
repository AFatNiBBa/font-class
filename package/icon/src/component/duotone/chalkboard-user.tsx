
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=duotone chalkboard-user}
 * @preview ![chalkboard-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMCAzMmMyMy4zIDAgNDUuMiA2LjIgNjQgMTcuMUwyMjQgNjRsMzUyIDAgMCAyODgtNjQgMC0xMjggMC05OS42IDBjMjIuNCAxNi41IDQwLjYgMzguNSA1Mi40IDY0TDU3NiA0MTZjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yODhjMC0zNS4zLTI4LjctNjQtNjQtNjRMMjI0IDBjLTM1LjMgMC02NCAyOC43LTY0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMjI0YTk2IDk2IDAgMSAxIDE5MiAwQTk2IDk2IDAgMSAxIDY0IDIyNHpNMCA0ODUuM0MwIDQxMS43IDU5LjcgMzUyIDEzMy4zIDM1Mmw1My4zIDBDMjYwLjMgMzUyIDMyMCA0MTEuNyAzMjAgNDg1LjNjMCAxNC43LTExLjkgMjYuNy0yNi43IDI2LjdMMjYuNyA1MTJDMTEuOSA1MTIgMCA1MDAuMSAwIDQ4NS4zek00MTYgMjg4bDY0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzMi0xMjggMCAwLTMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 64l0 32c23.3 0 45.2 6.2 64 17.1L224 64l352 0 0 288-64 0-128 0-99.6 0c22.4 16.5 40.6 38.5 52.4 64L576 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64z" />
            <path d="M64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM0 485.3C0 411.7 59.7 352 133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3zM416 288l64 0c17.7 0 32 14.3 32 32l0 32-128 0 0-32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default ChalkboardUser;