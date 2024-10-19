
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-regular jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMGwwIDQ4IDI1NiAwIDAtNDhMMzIgMHpNMjcyIDEyOGwwIDk2TDQ4IDIyNGwwLTk2IDIyNCAwem0wIDI0MGwwIDk2TDQ4IDQ2NGwwLTk2IDIyNCAwek00OCA4MEwwIDgwbDAgNDhMMCA0NjRsMCA0OCA0OCAwIDIyNCAwIDQ4IDAgMC00OCAwLTMzNiAwLTQ4LTQ4IDBMNDggODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 0l0 48 256 0 0-48L32 0zM272 128l0 96L48 224l0-96 224 0zm0 240l0 96L48 464l0-96 224 0zM48 80L0 80l0 48L0 464l0 48 48 0 224 0 48 0 0-48 0-336 0-48-48 0L48 80z" />
    </Icon>
);

export default Jar;