
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-thin suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTM2IDBsLTggMCAwIDggMCA4OEwxNiA5NiAwIDk2bDAgMTZMMCA0NjRsMCAxNiAxNiAwIDQ4MCAwIDE2IDAgMC0xNiAwLTM1MiAwLTE2LTE2IDBMMzg0IDk2bDAtODggMC04LTggMEwxMzYgMHpNMzY4IDk2TDE0NCA5NmwwLTgwIDIyNCAwIDAgODB6TTEzNiAxMTJsMjQwIDAgMzIgMCAwIDM1Mi0zMDQgMCAwLTM1MiAzMiAwem0tNDggMGwwIDM1Mi03MiAwIDAtMzUyIDcyIDB6TTQyNCA0NjRsMC0zNTIgNzIgMCAwIDM1Mi03MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 0l-8 0 0 8 0 88L16 96 0 96l0 16L0 464l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L384 96l0-88 0-8-8 0L136 0zM368 96L144 96l0-80 224 0 0 80zM136 112l240 0 32 0 0 352-304 0 0-352 32 0zm-48 0l0 352-72 0 0-352 72 0zM424 464l0-352 72 0 0 352-72 0z" />
    </Icon>
);

export default Suitcase;