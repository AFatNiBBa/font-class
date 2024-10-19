
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spade` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=duotone spade}
 * @preview ![spade](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OS4zYzAgMzEuNiAxMS42IDYzLjMgMzUuMSA4OGM0OC42IDUxLjMgMTI5LjYgNTMuNSAxODEgNC45bDgtNy42TDIyNCAyNTZjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDExOC42IDggNy42YzI0LjggMjMuNCA1Ni40IDM1LjEgODggMzUuMWMzMy45IDAgNjcuOC0xMy40IDkyLjktNDBjMjMuNC0yNC44IDM1LjEtNTYuNCAzNS4xLTg4YzAtMzMuOS0xMy40LTY3LjgtNDAtOTIuOUwzNDQgNzUuMSAyNzggMTIuNWMtNi4yLTUuOC0xNC4xLTguOC0yMi04LjhzLTE1LjggMi45LTIyIDguOEwxNjggNzUuMSA0MCAxOTYuM2MtMjYuNiAyNS4yLTQwIDU5LTQwIDkyLjl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMjI0YzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTkyIDMyIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTEyOCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDMyIDAgMC0xOTJjMC0xNy43IDE0LjMtMzIgMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 289.3c0 31.6 11.6 63.3 35.1 88c48.6 51.3 129.6 53.5 181 4.9l8-7.6L224 256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 118.6 8 7.6c24.8 23.4 56.4 35.1 88 35.1c33.9 0 67.8-13.4 92.9-40c23.4-24.8 35.1-56.4 35.1-88c0-33.9-13.4-67.8-40-92.9L344 75.1 278 12.5c-6.2-5.8-14.1-8.8-22-8.8s-15.8 2.9-22 8.8L168 75.1 40 196.3c-26.6 25.2-40 59-40 92.9z" />
            <path d="M256 224c17.7 0 32 14.3 32 32l0 192 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Spade;