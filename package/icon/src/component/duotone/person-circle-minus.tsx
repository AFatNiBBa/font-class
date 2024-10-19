
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-minus?s=duotone person-circle-minus}
 * @preview ![person-circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGMwIDEwLjkgNS41IDIxLjUgMTUuNSAyNy41YzE1LjEgOS4xIDM0LjggNC4yIDQzLjktMTAuOUw4OCAyNTYuOSA4OCA0ODBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTEyOCAxNiAwIDAgMTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0yMjMuMSAyOC42IDQ3LjVjMS40IDIuMyAzLjEgNC41IDQuOSA2LjNjNy45LTIzIDIwLjUtNDMuOSAzNi42LTYxLjVsLTQ0LjktNzQuN2MtMTcuNC0yOC45LTQ4LjYtNDYuNi04Mi4zLTQ2LjZsLTI5LjcgMGMtMzMuNyAwLTY0LjkgMTcuNy04Mi4zIDQ2LjZsLTU4LjMgOTdDMS41IDI3Ni43IDAgMjgyLjQgMCAyODh6TTExMiA0OGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwIC05NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyIDUxMmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTY0LTEyOGwtMTI4IDBjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZsMTI4IDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 10.9 5.5 21.5 15.5 27.5c15.1 9.1 34.8 4.2 43.9-10.9L88 256.9 88 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c1.4 2.3 3.1 4.5 4.9 6.3c7.9-23 20.5-43.9 36.6-61.5l-44.9-74.7c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97C1.5 276.7 0 282.4 0 288zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm64-128l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
    </Icon>
);

export default PersonCircleMinus;