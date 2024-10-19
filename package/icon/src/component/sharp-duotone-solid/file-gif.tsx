
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=sharp-duotone-solid file-gif}
 * @preview ![file-gif](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAxNDQtMjA4IDAgMCAyMDhMMCA1MTIgMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MEwyMjQgMGwwIDE2MCAxNjAgMHpNMjI0IDM5MmwwIDgwYzAgMjIuMSAxNy45IDQwIDQwIDQwbDE2IDBjMjIuMSAwIDQwLTE3LjkgNDAtNDBsMC0yNCAwLTE2LTE2IDAtMTYgMC0xNiAwIDAgMzIgMTYgMCAwIDhjMCA0LjQtMy42IDgtOCA4bC0xNiAwYy00LjQgMC04LTMuNi04LThsMC04MGMwLTQuNCAzLjYtOCA4LThsMTYgMGM0LjQgMCA4IDMuNiA4IDhsMCAxNiAzMiAwIDAtMTZjMC0yMi4xLTE3LjktNDAtNDAtNDBsLTE2IDBjLTIyLjEgMC00MCAxNy45LTQwIDQwem0xNjAtMjRsMC0xNi0zMiAwIDAgMTYgMCAxMjggMCAxNiAzMiAwIDAtMTYgMC0xMjh6bTQ4LTE2bC0xNiAwIDAgMTYgMCA2NCAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNDggMzIgMCAxNiAwIDAtMzItMTYgMC0zMiAwIDAtMzIgMzIgMCAxNiAwIDAtMzItMTYgMC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-208 0 0 208L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zM224 392l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24 0-16-16 0-16 0-16 0 0 32 16 0 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 32 0 0-16c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm160-24l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zm48-16l-16 0 0 16 0 64 0 64 0 16 32 0 0-16 0-48 32 0 16 0 0-32-16 0-32 0 0-32 32 0 16 0 0-32-16 0-48 0z" />
    </Icon>
);

export default FileGif;