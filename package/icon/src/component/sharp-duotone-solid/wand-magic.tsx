
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=sharp-duotone-solid wand-magic}
 * @preview ![wand-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODAgMTIwbDgwLjQtODAuNEw0MDAgMGwzOS42IDM5LjYgMzIuOCAzMi44TDUxMiAxMTJsLTM5LjYgMzkuNkwzOTIgMjMybC0zOS42LTM5LjZMNDMyLjggMTEyIDQwMCA3OS4ybC04MC40IDgwLjRMMjgwIDEyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM5MiAyMzJMMjgwIDEyMCAwIDQwMCAxMTIgNTEyIDM5MiAyMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M280 120l80.4-80.4L400 0l39.6 39.6 32.8 32.8L512 112l-39.6 39.6L392 232l-39.6-39.6L432.8 112 400 79.2l-80.4 80.4L280 120z" />
            <path d="M392 232L280 120 0 400 112 512 392 232z" />
    </Icon>
);

export default WandMagic;