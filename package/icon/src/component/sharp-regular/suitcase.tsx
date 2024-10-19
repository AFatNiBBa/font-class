
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-regular suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUyIDBMMTI4IDBsMCAyNCAwIDcyTDQ4IDk2IDAgOTZsMCA0OEwwIDQzMmwwIDQ4IDQ4IDAgNDE2IDAgNDggMCAwLTQ4IDAtMjg4IDAtNDgtNDggMC04MCAwIDAtNzIgMC0yNEwzNjAgMCAxNTIgMHpNMzM2IDk2TDE3NiA5NmwwLTQ4IDE2MCAwIDAgNDh6TTE1MiAxNDRsMjA4IDAgOCAwIDAgMjg4LTIyNCAwIDAtMjg4IDggMHpNNDggMTQ0bDQ4IDAgMCAyODgtNDggMCAwLTI4OHpNNDY0IDQzMmwtNDggMCAwLTI4OCA0OCAwIDAgMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72L48 96 0 96l0 48L0 432l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0-80 0 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM152 144l208 0 8 0 0 288-224 0 0-288 8 0zM48 144l48 0 0 288-48 0 0-288zM464 432l-48 0 0-288 48 0 0 288z" />
    </Icon>
);

export default Suitcase;