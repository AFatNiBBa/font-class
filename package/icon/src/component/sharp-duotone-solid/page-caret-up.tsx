
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=sharp-duotone-solid page-caret-up}
 * @preview ![page-caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMzg0IDAgMC00MDBMMjcyIDAgMCAwek05NiAyODhsOTYtOTYgOTYgOTYgMCAzMkw5NiAzMjBsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDI4OHYzMkgyODhWMjg4bC05Ni05Nkw5NiAyODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0 0-400L272 0 0 0zM96 288l96-96 96 96 0 32L96 320l0-32z" />
            <path d="M96 288v32H288V288l-96-96L96 288z" />
    </Icon>
);

export default PageCaretUp;