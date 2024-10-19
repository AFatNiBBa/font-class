
import { Icon } from "../../index";

/**
 * A component that renders the `image-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-user?s=sharp-solid image-user}
 * @preview ![image-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDMyTDAgMzIgMCA0ODBsNTEyIDAgMC00NDh6TTE5MiAxOTJhNjQgNjQgMCAxIDEgMTI4IDAgNjQgNjQgMCAxIDEgLTEyOCAwem0xNDQgOTZsMzIgOTYtMjI0IDAgMzItOTYgMTYwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ImageUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM192 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96-224 0 32-96 160 0z" />
    </Icon>
);

export default ImageUser;