
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=sharp-regular circle-up}
 * @preview ![circle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4YTIwOCAyMDggMCAxIDEgMCA0MTYgMjA4IDIwOCAwIDEgMSAwLTQxNnptMCA0NjRBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0xNDQgMjI0bDAgMzIgNjQgMCAwIDEyOCA5NiAwIDAtMTI4IDY0IDAgMC0zMkwyNTYgMTI4IDE0NCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 224l0 32 64 0 0 128 96 0 0-128 64 0 0-32L256 128 144 224z" />
    </Icon>
);

export default CircleUp;