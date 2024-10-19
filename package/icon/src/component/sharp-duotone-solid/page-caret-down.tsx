
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page-caret-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-down?s=sharp-duotone-solid page-caret-down}
 * @preview ![page-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA1MTJsMzg0IDAgMC00MDBMMjcyIDAgMCAwek05NiAyMjRsMTkyIDAgMCAzMi05NiA5Nkw5NiAyNTZsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDI1NlYyMjRIMjg4djMybC05NiA5Nkw5NiAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PageCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0 0-400L272 0 0 0zM96 224l192 0 0 32-96 96L96 256l0-32z" />
            <path d="M96 256V224H288v32l-96 96L96 256z" />
    </Icon>
);

export default PageCaretDown;