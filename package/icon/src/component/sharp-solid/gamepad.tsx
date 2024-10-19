
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-solid gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQwIDY0TDAgNjQgMCA0NDhsNjQwIDAgMC0zODR6TTQ5NiAxNjhhNDAgNDAgMCAxIDEgMCA4MCA0MCA0MCAwIDEgMSAwLTgwek0zOTIgMzA0YTQwIDQwIDAgMSAxIDgwIDAgNDAgNDAgMCAxIDEgLTgwIDB6TTE2OCAxNzZsNDggMCAwIDU2IDU2IDAgMCA0OC01NiAwIDAgNTYtNDggMCAwLTU2LTU2IDAgMC00OCA1NiAwIDAtNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 64L0 64 0 448l640 0 0-384zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 176l48 0 0 56 56 0 0 48-56 0 0 56-48 0 0-56-56 0 0-48 56 0 0-56z" />
    </Icon>
);

export default Gamepad;