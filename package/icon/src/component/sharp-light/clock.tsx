
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-light clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAxIDMyIDI1NmEyMjQgMjI0IDAgMSAxIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTI0MCAxMTJsMCAxNDQgMCA4LjYgNy4xIDQuOCA5NiA2NCAxMy4zIDguOSAxNy44LTI2LjYtMTMuMy04LjlMMjcyIDI0Ny40IDI3MiAxMTJsMC0xNi0zMiAwIDAgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144 0 8.6 7.1 4.8 96 64 13.3 8.9 17.8-26.6-13.3-8.9L272 247.4 272 112l0-16-32 0 0 16z" />
    </Icon>
);

export default Clock;