
import { Icon } from "../../index";

/**
 * A component that renders the `circle-small` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=regular circle-small}
 * @preview ![circle-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDI1NkExMTIgMTEyIDAgMSAwIDQ4IDI1NmExMTIgMTEyIDAgMSAwIDIyNCAwek0wIDI1NmExNjAgMTYwIDAgMSAxIDMyMCAwQTE2MCAxNjAgMCAxIDEgMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 256A112 112 0 1 0 48 256a112 112 0 1 0 224 0zM0 256a160 160 0 1 1 320 0A160 160 0 1 1 0 256z" />
    </Icon>
);

export default CircleSmall;