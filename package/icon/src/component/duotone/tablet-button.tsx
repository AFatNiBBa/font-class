
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=duotone tablet-button}
 * @preview ![tablet-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGw0NDggMCAwIDY0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRsMC02NHptMTkyIDY0YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEgzODRjMzUuMyAwIDY0IDI4LjcgNjQgNjRWMzg0SDBWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l448 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64zm192 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V384H0V64z" />
    </Icon>
);

export default TabletButton;