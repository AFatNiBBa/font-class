
import { Icon, generic } from "../../index";

/**
 * A component that renders the `u` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=duotone u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMmMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDIyNGMwIDcwLjcgNTcuMyAxMjggMTI4IDEyOHMxMjgtNTcuMyAxMjgtMTI4bDAtMjI0YzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAyMjRjMCAxMDYtODYgMTkyLTE5MiAxOTJTMCAzOTQgMCAyODhMMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 32c17.7 0 32 14.3 32 32l0 224c0 70.7 57.3 128 128 128s128-57.3 128-128l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 224c0 106-86 192-192 192S0 394 0 288L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default U;