
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=duotone triangle}
 * @preview ![triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yOTAuNSA1MS44QzI4My4zIDM5LjUgMjcwLjIgMzIgMjU2IDMycy0yNy4zIDcuNS0zNC41IDE5LjhsLTIxNiAzNjhjLTcuMyAxMi40LTcuMyAyNy43LS4yIDQwLjFTMjUuNyA0ODAgNDAgNDgwbDQzMiAwYzE0LjMgMCAyNy42LTcuNyAzNC43LTIwLjFzNy0yNy44LS4yLTQwLjFsLTIxNi0zNjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480l432 0c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z" />
    </Icon>
);

export default Triangle;