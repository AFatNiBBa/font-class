
import { Icon } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=sharp-regular flatbread}
 * @preview ![flatbread](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTE3NyAzNjlMMTQzIDMzNSAzMzUgMTQzIDM2OSAxNzcgMTc3IDM2OXptNjQtMjI0bC05NiA5NkwxMTEgMjA3bDk2LTk2TDI0MSAxNDV6bTY0IDI1NkwyNzEgMzY3bDk2LTk2TDQwMSAzMDVsLTk2IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM177 369L143 335 335 143 369 177 177 369zm64-224l-96 96L111 207l96-96L241 145zm64 256L271 367l96-96L401 305l-96 96z" />
    </Icon>
);

export default Flatbread;