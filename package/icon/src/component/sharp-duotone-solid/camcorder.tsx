
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=sharp-duotone-solid camcorder}
 * @preview ![camcorder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDQ4MGwzODQgMCAwLTk2IDAtMTI4IDAtOTZMOTYgMTYwbDAtNjQgMTkyIDAgMzIgMCAwLTY0LTMyIDBMNjQgMzIgMzIgMzJsMCAzMiAwIDk2TDAgMTYwem02NCA2NGwxNiAwIDIyNCAwIDE2IDAgMCAzMi0xNiAwTDgwIDI1NmwtMTYgMCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTc2IDE2MGwwIDMyMEwzODQgMzg0bDAtMTI4IDE5Mi05NnpNODAgMjI0bDIyNCAwIDE2IDAgMCAzMi0xNiAwTDgwIDI1NmwtMTYgMCAwLTMyIDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 480l384 0 0-96 0-128 0-96L96 160l0-64 192 0 32 0 0-64-32 0L64 32 32 32l0 32 0 96L0 160zm64 64l16 0 224 0 16 0 0 32-16 0L80 256l-16 0 0-32z" />
            <path d="M576 160l0 320L384 384l0-128 192-96zM80 224l224 0 16 0 0 32-16 0L80 256l-16 0 0-32 16 0z" />
    </Icon>
);

export default Camcorder;