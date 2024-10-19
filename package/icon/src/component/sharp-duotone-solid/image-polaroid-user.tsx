
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-polaroid-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid-user?s=sharp-duotone-solid image-polaroid-user}
 * @preview ![image-polaroid-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTY0IDk2bDMyMCAwIDAgMjU2LTU2IDAtMjA4IDAtNTYgMEw2NCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCA5Nkw2NCA5NmwwIDI1NiA1NiAwIDI0LTY0IDE2MCAwIDI0IDY0IDU2IDAgMC0yNTZ6TTE2MCAxOTJhNjQgNjQgMCAxIDEgMTI4IDAgNjQgNjQgMCAxIDEgLTEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ImagePolaroidUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l320 0 0 256-56 0-208 0-56 0L64 96z" />
            <path d="M384 96L64 96l0 256 56 0 24-64 160 0 24 64 56 0 0-256zM160 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagePolaroidUser;