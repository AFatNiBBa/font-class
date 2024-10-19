
import { Icon, generic } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=sharp-duotone-solid empty-set}
 * @preview ![empty-set](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZjMCA1MC4zIDE2LjYgOTYuOCA0NC42IDEzNC4xbDQ1LjktNDUuOUMxMDUuOCAzMTguOSA5NiAyODguNiA5NiAyNTZjMC04OC40IDcxLjYtMTYwIDE2MC0xNjBjMzIuNiAwIDYyLjkgOS44IDg4LjIgMjYuNWMxNS4zLTE1LjMgMzAuNi0zMC42IDQ1LjktNDUuOUMzNTIuOCA0OC42IDMwNi4zIDMyIDI1NiAzMkMxMzIuMyAzMiAzMiAxMzIuMyAzMiAyNTZ6bTg5LjkgMTc5LjRjMzcuNCAyOCA4My44IDQ0LjYgMTM0LjEgNDQuNmMxMjMuNyAwIDIyNC0xMDAuMyAyMjQtMjI0YzAtNTAuMy0xNi42LTk2LjgtNDQuNi0xMzQuMWwtNDUuOSA0NS45QzQwNi4yIDE5My4xIDQxNiAyMjMuNCA0MTYgMjU2YzAgODguNC03MS42IDE2MC0xNjAgMTYwYy0zMi42IDAtNjIuOS05LjgtODguMi0yNi41Yy0xNS4zIDE1LjMtMzAuNiAzMC42LTQ1LjkgNDUuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUwMi42IDU0LjZsLTQ0OCA0NDhMOS40IDQ1Ny40bDQ0OC00NDggNDUuMyA0NS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 50.3 16.6 96.8 44.6 134.1l45.9-45.9C105.8 318.9 96 288.6 96 256c0-88.4 71.6-160 160-160c32.6 0 62.9 9.8 88.2 26.5c15.3-15.3 30.6-30.6 45.9-45.9C352.8 48.6 306.3 32 256 32C132.3 32 32 132.3 32 256zm89.9 179.4c37.4 28 83.8 44.6 134.1 44.6c123.7 0 224-100.3 224-224c0-50.3-16.6-96.8-44.6-134.1l-45.9 45.9C406.2 193.1 416 223.4 416 256c0 88.4-71.6 160-160 160c-32.6 0-62.9-9.8-88.2-26.5c-15.3 15.3-30.6 30.6-45.9 45.9z" />
            <path d="M502.6 54.6l-448 448L9.4 457.4l448-448 45.3 45.3z" />
    </Icon>
);

export default EmptySet;