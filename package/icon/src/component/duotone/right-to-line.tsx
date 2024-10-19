
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=duotone right-to-line}
 * @preview ![right-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgOTZsMCAzMjBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTMyMGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM0MC43IDIyOC43TDIxNy45IDEwNS45Yy02LjQtNi40LTE1LTkuOS0yNC05LjljLTE4LjcgMC0zMy45IDE1LjItMzMuOSAzMy45bDAgNjIuMUwzMiAxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTI4IDAgMCA2Mi4xYzAgMTguNyAxNS4yIDMzLjkgMzMuOSAzMy45YzkgMCAxNy42LTMuNiAyNC05LjlMMzQwLjcgMjgzLjNjNy4yLTcuMiAxMS4zLTE3LjEgMTEuMy0yNy4zcy00LjEtMjAuMS0xMS4zLTI3LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M340.7 228.7L217.9 105.9c-6.4-6.4-15-9.9-24-9.9c-18.7 0-33.9 15.2-33.9 33.9l0 62.1L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0 0 62.1c0 18.7 15.2 33.9 33.9 33.9c9 0 17.6-3.6 24-9.9L340.7 283.3c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3z" />
    </Icon>
);

export default RightToLine;