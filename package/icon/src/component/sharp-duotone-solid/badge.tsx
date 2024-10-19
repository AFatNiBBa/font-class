
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge?s=sharp-duotone-solid badge}
 * @preview ![badge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNDAuOSA1MS4xQzMyNC44IDIwLjcgMjkyLjggMCAyNTYgMHMtNjguOCAyMC43LTg0LjkgNTEuMUMxMzguMiA0MSAxMDEgNDkgNzUgNzVzLTM0IDYzLjMtMjMuOSA5Ni4xQzIwLjcgMTg3LjIgMCAyMTkuMiAwIDI1NnMyMC43IDY4LjggNTEuMSA4NC45QzQxIDM3My44IDQ5IDQxMSA3NSA0MzdzNjMuMyAzNCA5Ni4xIDIzLjlDMTg3LjIgNDkxLjMgMjE5LjIgNTEyIDI1NiA1MTJzNjguOC0yMC43IDg0LjktNTEuMUMzNzMuOCA0NzEgNDExIDQ2MyA0MzcgNDM3czM0LTYzLjMgMjMuOS05Ni4xQzQ5MS4zIDMyNC44IDUxMiAyOTIuOCA1MTIgMjU2cy0yMC43LTY4LjgtNTEuMS04NC45QzQ3MSAxMzguMiA0NjMgMTAxIDQzNyA3NXMtNjMuMy0zNC05Ni4xLTIzLjl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Badge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M340.9 51.1C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256s20.7 68.8 51.1 84.9C41 373.8 49 411 75 437s63.3 34 96.1 23.9C187.2 491.3 219.2 512 256 512s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1C491.3 324.8 512 292.8 512 256s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9z" />
    </Icon>
);

export default Badge;