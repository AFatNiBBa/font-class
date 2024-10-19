
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=sharp-duotone-solid image-polaroid}
 * @preview ![image-polaroid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTY0IDk2bDMyMCAwIDAgMjU2TDY0IDM1MiA2NCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCA5Nkw2NCA5NmwwIDI1NiAzMjAgMCAwLTI1NnpNMTI4IDEyOGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6TTM1MiAzMjBsLTE0NCAwLTQ4IDAtNjQgMCAwLTMyIDU2LTY0IDMwLjIgMzQuNUwyNTYgMTYwbDk2IDEyOCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ImagePolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l320 0 0 256L64 352 64 96z" />
            <path d="M384 96L64 96l0 256 320 0 0-256zM128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM352 320l-144 0-48 0-64 0 0-32 56-64 30.2 34.5L256 160l96 128 0 32z" />
    </Icon>
);

export default ImagePolaroid;