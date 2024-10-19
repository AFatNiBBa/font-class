
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microscope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=duotone microscope}
 * @preview ![microscope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0MDBjMCA4LjggNy4yIDE2IDE2IDE2bDE5MiAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC0xOTIgMGMtOC44IDAtMTYgNy4yLTE2IDE2ek0xNjAgMzJsOTYgMGMwLTE3LjctMTQuMy0zMi0zMi0zMkwxOTIgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggNjRjMC0xNy43IDE0LjMtMzIgMzItMzJsOTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDIyNGMwIDE3LjctMTQuMyAzMi0zMiAzMmMwIDE3LjctMTQuMyAzMi0zMiAzMmwtMzIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMjI0ek01MTIgMzIwYzAgNDkuMi0xOC41IDk0LTQ4LjkgMTI4bDE2LjkgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtMTYwIDBMMzIgNTEyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDI4OCAwYzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4cy01Ny4zLTEyOC0xMjgtMTI4bDAtNjRjMTA2IDAgMTkyIDg2IDE5MiAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 400c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0c-8.8 0-16 7.2-16 16zM160 32l96 0c0-17.7-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32z" />
            <path d="M128 64c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32l0-224zM512 320c0 49.2-18.5 94-48.9 128l16.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192z" />
    </Icon>
);

export default Microscope;