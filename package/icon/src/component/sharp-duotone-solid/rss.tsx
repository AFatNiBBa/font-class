
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rss` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=sharp-duotone-solid rss}
 * @preview ![rss](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZjMjEyLjEgMCAzODQgMTcxLjkgMzg0IDM4NGw2NCAwQzQ0OCAyMzIuNiAyNDcuNCAzMiAwIDMyek0wIDE2MGwwIDY0YzE0MS40IDAgMjU2IDExNC42IDI1NiAyNTZsNjQgMEMzMjAgMzAzLjMgMTc2LjcgMTYwIDAgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0MTZhNjQgNjQgMCAxIDEgMTI4IDBBNjQgNjQgMCAxIDEgMCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96c212.1 0 384 171.9 384 384l64 0C448 232.6 247.4 32 0 32zM0 160l0 64c141.4 0 256 114.6 256 256l64 0C320 303.3 176.7 160 0 160z" />
            <path d="M0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416z" />
    </Icon>
);

export default Rss;