
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=duotone crop-simple}
 * @preview ![crop-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmwwIDMyIDAgNjQgMCAyNTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjU2IDAgMC02NC0yNTYgMCAwLTI1NiAwLTY0IDAtMzJjMC0xNy43LTE0LjMtMzItMzItMzJTNjQgMTQuMyA2NCAzMnpNNDQ4IDM4NGwwIDY0IDMyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiA2NEMxNC4zIDY0IDAgNzguMyAwIDk2czE0LjMgMzIgMzIgMzJsMzIgMCAwLTY0TDMyIDY0ek0zODQgNDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0zNTJjMC0zNS4zLTI4LjctNjQtNjQtNjRMMTI4IDY0bDAgNjQgMjU2IDAgMCAzNTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 32l0 32 0 64 0 256c0 35.3 28.7 64 64 64l256 0 0-64-256 0 0-256 0-64 0-32c0-17.7-14.3-32-32-32S64 14.3 64 32zM448 384l0 64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
            <path d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0-64L32 64zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352c0-35.3-28.7-64-64-64L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default CropSimple;