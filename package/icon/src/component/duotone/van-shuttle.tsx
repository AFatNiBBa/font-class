
import { Icon, generic } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=duotone van-shuttle}
 * @preview ![van-shuttle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCA0MDBhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgODAgNDAwem0zMjAgMGE4MCA4MCAwIDEgMCAxNjAgMCA4MCA4MCAwIDEgMCAtMTYwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAxMDRjMC00LjQgMy42LTggOC04bDg4IDAgMCA5Ni05NiAwIDAtODh6bTQ4MiA4OGwtMTYyIDAgMC05NiA4MS4xIDBMNTQ2IDE5MnptLTIyNiAwbC05NiAwIDAtOTYgOTYgMCAwIDk2ek03MiAzMkMzMi4yIDMyIDAgNjQuMiAwIDEwNEwwIDMzNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGwxLjEgMGM3LjgtNTQuMyA1NC40LTk2IDExMC45LTk2czEwMy4xIDQxLjcgMTEwLjkgOTZsOTguMyAwYzcuOC01NC4zIDU0LjQtOTYgMTEwLjktOTZzMTAzLjEgNDEuNyAxMTAuOSA5NmwxLjEgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTEwOC4zYzAtMTUuMS01LjMtMjkuNy0xNS00MS4yTDUxNC4xIDU0LjhDNTAxLjkgNDAuMyA0ODQgMzIgNDY1LjEgMzJMMzUyIDMyIDE5MiAzMiA3MiAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M64 104c0-4.4 3.6-8 8-8l88 0 0 96-96 0 0-88zm482 88l-162 0 0-96 81.1 0L546 192zm-226 0l-96 0 0-96 96 0 0 96zM72 32C32.2 32 0 64.2 0 104L0 336c0 26.5 21.5 48 48 48l1.1 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l98.3 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96l1.1 0c26.5 0 48-21.5 48-48l0-108.3c0-15.1-5.3-29.7-15-41.2L514.1 54.8C501.9 40.3 484 32 465.1 32L352 32 192 32 72 32z" />
    </Icon>
);

export default VanShuttle;