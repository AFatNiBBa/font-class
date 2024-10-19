
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=duotone pen-field}
 * @preview ![pen-field](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGMwLTQ0LjIgMzUuOC04MCA4MC04MGwxOTIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkw4MCAxOTJjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDIyNGMwIDguOCA3LjIgMTYgMTYgMTZsNDE2IDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMTI4YzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAxMjhjMCA0NC4yLTM1LjggODAtODAgODBMODAgNTEyYy00NC4yIDAtODAtMzUuOC04MC04MEwwIDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUzNC4xIDE2TDQ5NC40IDU1LjdsODkuMyA4OS4zIDM5LjgtMzguOWMxOS4xLTE4LjcgMTkuMi00OS40IC40LTY4LjJMNjAxLjkgMTZjLTE4LjgtMTguOC00OS4yLTE4LjctNjcuOSAwek00NzEuNyA3OC40TDMyOC41IDIyMS44Yy03IDctMTIuMyAxNS42LTE1LjQgMjVsLTIzLjggNzEuM2MtMi45IDguNi0uNiAxOC4xIDUuOCAyNC42czE1LjkgOC43IDI0LjYgNS44bDcxLjUtMjMuOWM5LjItMy4xIDE3LjYtOC4yIDI0LjUtMTVMNTYwLjggMTY3LjUgNDcxLjcgNzguNHpNMTYwIDMyMGEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAwem02NCAzMmEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208c0-44.2 35.8-80 80-80l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 192c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 208z" />
            <path d="M534.1 16L494.4 55.7l89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4 .4-68.2L601.9 16c-18.8-18.8-49.2-18.7-67.9 0zM471.7 78.4L328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15L560.8 167.5 471.7 78.4zM160 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default PenField;