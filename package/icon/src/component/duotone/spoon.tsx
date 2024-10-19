
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spoon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spoon?s=duotone spoon}
 * @preview ![spoon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTYwLjJDMjI0IDgwIDMyMCAwIDQxNiAwYzUzIDAgOTYgNDMgOTYgOTZjMCA5Ni04MCAxOTItMTYwLjIgMTkyYy0yMS42IDAtNDMuMi03LjMtNjAuOC0yMS44Yy0yLjQtMi00LjctNC4xLTYuOS02LjNsLTMyLTMyYy0yLjItMi4yLTQuMy00LjYtNi4zLTYuOWMtMTQuNS0xNy42LTIxLjgtMzkuMi0yMS44LTYwLjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNDUuOCAyMjAuOWMyIDIuNCA0LjEgNC43IDYuMyA2LjlsMzIgMzJjMi4yIDIuMiA0LjYgNC4zIDYuOSA2LjNMNTQuNiA1MDIuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBzLTEyLjUtMzIuOCAwLTQ1LjNMMjQ1LjggMjIwLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const Spoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160.2C224 80 320 0 416 0c53 0 96 43 96 96c0 96-80 192-160.2 192c-21.6 0-43.2-7.3-60.8-21.8c-2.4-2-4.7-4.1-6.9-6.3l-32-32c-2.2-2.2-4.3-4.6-6.3-6.9c-14.5-17.6-21.8-39.2-21.8-60.8z" />
            <path d="M245.8 220.9c2 2.4 4.1 4.7 6.3 6.9l32 32c2.2 2.2 4.6 4.3 6.9 6.3L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L245.8 220.9z" />
    </Icon>
);

export default Spoon;