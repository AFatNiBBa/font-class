
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=duotone shield}
 * @preview ![shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGM0LjYgMCA5LjIgMSAxMy40IDIuOUw0NTcuNyA4Mi44YzIyIDkuMyAzOC40IDMxIDM4LjMgNTcuMmMtLjUgOTkuMi00MS4zIDI4MC43LTIxMy42IDM2My4yYy0xNi43IDgtMzYuMSA4LTUyLjggMEM1Ny4zIDQyMC43IDE2LjUgMjM5LjIgMTYgMTQwYy0uMS0yNi4yIDE2LjMtNDcuOSAzOC4zLTU3LjJMMjQyLjcgMi45QzI0Ni44IDEgMjUxLjQgMCAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
    </Icon>
);

export default Shield;