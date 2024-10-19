
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-duotone-solid check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NDguMSAxNDJsLTIzIDIyLjJMMTg2LjcgMzk0LjZsLTIyLjIgMjEuNS0yMi4yLTIxLjVMMjMgMjc5LjQgMCAyNTcuMmw0NC41LTQ2IDIzIDIyLjIgOTcgOTMuN0wzODAuNiAxMTguMmwyMy0yMi4yIDQ0LjUgNDZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448.1 142l-23 22.2L186.7 394.6l-22.2 21.5-22.2-21.5L23 279.4 0 257.2l44.5-46 23 22.2 97 93.7L380.6 118.2l23-22.2 44.5 46z" />
    </Icon>
);

export default Check;