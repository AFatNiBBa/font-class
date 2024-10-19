
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-right?s=sharp-duotone-solid rotate-right}
 * @preview ![rotate-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZjMCA1Ny4zIDIxLjkgMTE0LjcgNjUuNiAxNTguNGM4Ny41IDg3LjUgMjI5LjMgODcuNSAzMTYuOCAwbC00NS4zLTQ1LjNjLTYyLjUgNjIuNS0xNjMuOCA2Mi41LTIyNi4zIDBzLTYyLjUtMTYzLjggMC0yMjYuM3MxNjMuOC02Mi41IDIyNi4zIDBjMTUuMS0xNS4xIDMwLjItMzAuMiA0NS4zLTQ1LjNjLTg3LjUtODcuNS0yMjkuMy04Ny41LTMxNi44IDBDNTMuOSAxNDEuMyAzMiAxOTguNyAzMiAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzYgMjI0bC0yNC0yNEw0NzIgNDBsMjQgMjQgMCAxNjBIMzM2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RotateRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256c0 57.3 21.9 114.7 65.6 158.4c87.5 87.5 229.3 87.5 316.8 0l-45.3-45.3c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0c15.1-15.1 30.2-30.2 45.3-45.3c-87.5-87.5-229.3-87.5-316.8 0C53.9 141.3 32 198.7 32 256z" />
            <path d="M336 224l-24-24L472 40l24 24 0 160H336z" />
    </Icon>
);

export default RotateRight;