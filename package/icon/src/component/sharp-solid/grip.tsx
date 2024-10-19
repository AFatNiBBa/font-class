
import { Icon } from "../../index";

/**
 * A component that renders the `grip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=sharp-solid grip}
 * @preview ![grip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDk2TDAgOTYgMCAyMjRsMTI4IDAgMC0xMjh6bTAgMTkyTDAgMjg4IDAgNDE2bDEyOCAwIDAtMTI4ek0xNjAgOTZsMCAxMjggMTI4IDAgMC0xMjhMMTYwIDk2ek0yODggMjg4bC0xMjggMCAwIDEyOCAxMjggMCAwLTEyOHpNMzIwIDk2bDAgMTI4IDEyOCAwIDAtMTI4TDMyMCA5NnpNNDQ4IDI4OGwtMTI4IDAgMCAxMjggMTI4IDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Grip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 96L0 96 0 224l128 0 0-128zm0 192L0 288 0 416l128 0 0-128zM160 96l0 128 128 0 0-128L160 96zM288 288l-128 0 0 128 128 0 0-128zM320 96l0 128 128 0 0-128L320 96zM448 288l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default Grip;