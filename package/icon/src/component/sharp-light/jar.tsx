
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-light jar}
 * @preview ![jar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjcyIDBsMCAzMkw0OCAzMiA0OCAwIDI3MiAwek0zMiA5NmwwIDk2IDI1NiAwIDAtOTZMMzIgOTZ6bTAgMTI4bDAgMTI4IDI1NiAwIDAtMTI4TDMyIDIyNHptMCAxNjBsMCA5NiAyNTYgMCAwLTk2TDMyIDM4NHpNMCA2NGwzMiAwIDI1NiAwIDMyIDAgMCAzMiAwIDM4NCAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCA5NiAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 0l0 32L48 32 48 0 272 0zM32 96l0 96 256 0 0-96L32 96zm0 128l0 128 256 0 0-128L32 224zm0 160l0 96 256 0 0-96L32 384zM0 64l32 0 256 0 32 0 0 32 0 384 0 32-32 0L32 512 0 512l0-32L0 96 0 64z" />
    </Icon>
);

export default Jar;