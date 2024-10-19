
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-lock?s=sharp-duotone-solid building-lock}
 * @preview ![building-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMzg0IDBsMCAxOTMuNmMtMTkuOCAyMC4yLTMyIDQ3LjktMzIgNzguNGwwIDE2LTMyIDAgMCAyMjQtODAgMCAwLTEyOC05NiAwIDAgMTI4TDAgNTEyIDAgMHpNNjQgOTZsMCA2NCA2NCAwIDAtNjRMNjQgOTZ6bTAgMTI4bDAgNjQgNjQgMCAwLTY0LTY0IDB6TTE2MCA5NmwwIDY0IDY0IDAgMC02NC02NCAwem0wIDEyOGwwIDY0IDY0IDAgMC02NC02NCAwek0yNTYgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxMjhsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiAyNzJsMCA0OCA2NCAwIDAtNDhjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ6bS00OCA0OGwwLTQ4YzAtNDQuMiAzNS44LTgwIDgwLTgwczgwIDM1LjggODAgODBsMCA0OCAzMiAwIDAgMTkyLTIyNCAwIDAtMTkyIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BuildingLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 193.6c-19.8 20.2-32 47.9-32 78.4l0 16-32 0 0 224-80 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM256 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
            <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default BuildingLock;