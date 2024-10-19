
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=sharp-duotone-solid peace}
 * @preview ![peace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04OS4yIDM1MS4xYzEwLjcgMTguNyAyNC40IDM1LjQgNDAuNiA0OS41TDIyNCAzMjMuNWwwIDEyMS44YzEwLjQgMS43IDIxLjEgMi43IDMyIDIuN3MyMS42LS45IDMyLTIuN2wwLTEyMS44IDk0LjMgNzcuMWMxNi4xLTE0LjEgMjkuOS0zMC44IDQwLjYtNDkuNUwyODggMjQwLjhsMC0xNzQuMmMtMTAuNC0xLjctMjEuMS0yLjctMzItMi43cy0yMS42IC45LTMyIDIuN2wwIDE3NC4yTDg5LjIgMzUxLjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNjRhMTkyIDE5MiAwIDEgMSAwIDM4NCAxOTIgMTkyIDAgMSAxIDAtMzg0em0wIDQ0OEEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Peace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M89.2 351.1c10.7 18.7 24.4 35.4 40.6 49.5L224 323.5l0 121.8c10.4 1.7 21.1 2.7 32 2.7s21.6-.9 32-2.7l0-121.8 94.3 77.1c16.1-14.1 29.9-30.8 40.6-49.5L288 240.8l0-174.2c-10.4-1.7-21.1-2.7-32-2.7s-21.6 .9-32 2.7l0 174.2L89.2 351.1z" />
            <path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default Peace;