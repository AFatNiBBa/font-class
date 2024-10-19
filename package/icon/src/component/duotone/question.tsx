
import { Icon, generic } from "../../index";

/**
 * A component that renders the `question` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=duotone question}
 * @preview ![question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjAgNDQwYTQwIDQwIDAgMSAwIDgwIDAgNDAgNDAgMCAxIDAgLTgwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQgOTZjLTM1LjMgMC02NCAyOC43LTY0IDY0YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyQzE2IDg5LjMgNzMuMyAzMiAxNDQgMzJsMzIgMGM3MC43IDAgMTI4IDU3LjMgMTI4IDEyOGwwIDMuNmMwIDQzLjYtMjIuMSA4NC4xLTU4LjggMTA3LjdMMjAzIDI5OC40Yy02LjkgNC40LTExIDEyLTExIDIwLjJsMCAxLjRjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xLjRjMC0yOS45IDE1LjItNTcuOCA0MC40LTc0bDQyLjItMjcuMWMxOC4zLTExLjggMjkuNC0zMi4xIDI5LjQtNTMuOGwwLTMuNmMwLTM1LjMtMjguNy02NC02NC02NGwtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M120 440a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
            <path d="M144 96c-35.3 0-64 28.7-64 64c0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2l0 1.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.4c0-29.9 15.2-57.8 40.4-74l42.2-27.1c18.3-11.8 29.4-32.1 29.4-53.8l0-3.6c0-35.3-28.7-64-64-64l-32 0z" />
    </Icon>
);

export default Question;