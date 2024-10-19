
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=sharp-duotone-solid shop}
 * @preview ![shop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMCAzMiAwIDE2MCAwIDEyOCAzMjAgMCAwLTEyOCAwLTE2MCAxMjggMCAwIDI4OCA2NCAwIDAtMzIwLTMyIDAtMzIgMEw2NCAxOTJ6bTY0IDMybDE5MiAwIDAgMTYwLTE5MiAwIDAtMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQwIDE5MkgwVjEyOEw5NiAwSDU0NGw5NiAxMjh2NjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 32 0 160 0 128 320 0 0-128 0-160 128 0 0 288 64 0 0-320-32 0-32 0L64 192zm64 32l192 0 0 160-192 0 0-160z" />
            <path d="M640 192H0V128L96 0H544l96 128v64z" />
    </Icon>
);

export default Shop;