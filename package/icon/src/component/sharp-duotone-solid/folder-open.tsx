
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=sharp-duotone-solid folder-open}
 * @preview ![folder-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwIDEyOCAyMjRsMzUyIDAgMC0xMjhMMjcyIDk2IDIwOCAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDIyNEwwIDQ4MEg0NDhMNTc2IDIyNEgxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480 128 224l352 0 0-128L272 96 208 32 0 32z" />
            <path d="M128 224L0 480H448L576 224H128z" />
    </Icon>
);

export default FolderOpen;