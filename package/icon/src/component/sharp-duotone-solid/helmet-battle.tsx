
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-battle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-battle?s=sharp-duotone-solid helmet-battle}
 * @preview ![helmet-battle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDMyIDY0IDBMNjQgMCAwIDIyNHpNNTEyIDBsMCAyNTYgNjQgMCAwLTMyTDUxMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMjI0YzAgODAtMzIgMTkyLTMyIDE5MmwxOTIgOTZWMjU2bC05Ni0zMlYxOTJINDE2djMybC05NiAzMlY1MTJsMTkyLTk2cy0zMi0xMTItMzItMTkyQzQ4MCA4MCAyODggMCAyODggMFM5NiA4MCA5NiAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const HelmetBattle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 32 64 0L64 0 0 224zM512 0l0 256 64 0 0-32L512 0z" />
            <path d="M96 224c0 80-32 192-32 192l192 96V256l-96-32V192H416v32l-96 32V512l192-96s-32-112-32-192C480 80 288 0 288 0S96 80 96 224z" />
    </Icon>
);

export default HelmetBattle;