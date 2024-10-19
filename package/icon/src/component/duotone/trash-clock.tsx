
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=duotone trash-clock}
 * @preview ![trash-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1My40IDQ2Ni44YzEuNSAyNS40IDIyLjUgNDUuMiA0Ny45IDQ1LjJsMjI5LjUgMEMyODUuNiA0ODAuMSAyNTYgNDI3LjUgMjU2IDM2OGMwLTg5LjkgNjcuNC0xNjQgMTU0LjQtMTc0LjdMNDE2IDk2IDMyIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTM1LjIgMTcuN0MxNDAuNiA2LjggMTUxLjcgMCAxNjMuOCAwTDI4NC4yIDBjMTIuMSAwIDIzLjIgNi44IDI4LjYgMTcuN0wzMjAgMzJsOTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA5NkMxNC4zIDk2IDAgODEuNyAwIDY0UzE0LjMgMzIgMzIgMzJsOTYgMCA3LjItMTQuM3pNMjg4IDM2OGExNDQgMTQ0IDAgMSAxIDI4OCAwIDE0NCAxNDQgMCAxIDEgLTI4OCAwem0xNDQtODBjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDY0YzAgOC44IDcuMiAxNiAxNiAxNmw0OCAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC0zMiAwIDAtNDhjMC04LjgtNy4yLTE2LTE2LTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96L53.4 466.8c1.5 25.4 22.5 45.2 47.9 45.2l229.5 0C285.6 480.1 256 427.5 256 368c0-89.9 67.4-164 154.4-174.7L416 96 32 96z" />
            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default TrashClock;