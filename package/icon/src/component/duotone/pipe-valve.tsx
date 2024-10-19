
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=duotone pipe-valve}
 * @preview ![pipe-valve](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMCAyNTYgMzg0IDAgMC0yNTYtMTYwIDAgMC03Ni0zMi00LTMyIDQgMCA3Nkw2NCAxOTJ6TTIyNCA2NGwwIDEyIDMyIDQgMzItNCAwLTEyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDEyOGwxMjgtMTYgMTI4IDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDI1NiA4MCAxMjggNjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJ6TTMyIDE2MGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJMMCA0NDhjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTI1NmMwLTE3LjctMTQuMy0zMi0zMi0zMnptNDgwIDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMjU2YzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 192l0 256 384 0 0-256-160 0 0-76-32-4-32 4 0 76L64 192zM224 64l0 12 32 4 32-4 0-12c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M128 128l128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32L256 80 128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32zM32 160c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zm480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256z" />
    </Icon>
);

export default PipeValve;