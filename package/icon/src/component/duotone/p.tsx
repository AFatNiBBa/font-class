
import { Icon, generic } from "../../index";

/**
 * A component that renders the `p` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=duotone p}
 * @preview ![p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDk2IDBjODguNCAwIDE2MCA3MS42IDE2MCAxNjBzLTcxLjYgMTYwLTE2MCAxNjBsLTk2IDAgMCA5NmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMkwwIDMyMCAwIDk2ek02NCAyODhsOTYgMGM1MyAwIDk2LTQzIDk2LTk2cy00My05Ni05Ni05Nkw2NCA5NmwwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l96 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-96 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 320 0 96zM64 288l96 0c53 0 96-43 96-96s-43-96-96-96L64 96l0 192z" />
    </Icon>
);

export default P;