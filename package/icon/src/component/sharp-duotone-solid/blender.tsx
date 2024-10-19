
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blender` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=sharp-duotone-solid blender}
 * @preview ![blender](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMiAwIDIyNGwwIDMyIDMyIDAgMTE3LjMgMEwxNjAgMzg0bDI1NiAwIDI0LTk2LTEwNCAwLTE2IDAgMC0zMiAxNiAwIDExMiAwIDE2LTY0LTEyOCAwLTE2IDAgMC0zMiAxNiAwIDEzNiAwIDE2LTY0TDMzNiA5NmwtMTYgMCAwLTMyIDE2IDAgMTYwIDBMNTEyIDAgMTYwIDAgMTI4IDAgMzIgMCAwIDB6TTY0IDY0bDY5LjMgMEwxNDQgMTkybC04MCAwTDY0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzM2IDY0bDE2MCAwLTggMzJMMzM2IDk2bC0xNiAwIDAtMzIgMTYgMHptMCA5NmwxMzYgMC04IDMyLTEyOCAwLTE2IDAgMC0zMiAxNiAwem0wIDk2bDExMiAwLTggMzItMTA0IDAtMTYgMCAwLTMyIDE2IDB6TTk2IDM4NGwzODQgMCAwIDEyOEw5NiA1MTJsMC0xMjh6bTIyNCA2NGEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 224l0 32 32 0 117.3 0L160 384l256 0 24-96-104 0-16 0 0-32 16 0 112 0 16-64-128 0-16 0 0-32 16 0 136 0 16-64L336 96l-16 0 0-32 16 0 160 0L512 0 160 0 128 0 32 0 0 0zM64 64l69.3 0L144 192l-80 0L64 64z" />
            <path d="M336 64l160 0-8 32L336 96l-16 0 0-32 16 0zm0 96l136 0-8 32-128 0-16 0 0-32 16 0zm0 96l112 0-8 32-104 0-16 0 0-32 16 0zM96 384l384 0 0 128L96 512l0-128zm224 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Blender;