
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=duotone cloud}
 * @preview ![cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNmMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGwzNjggMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOGMwLTYxLjktNDQtMTEzLjYtMTAyLjQtMTI1LjRjNC4xLTEwLjcgNi40LTIyLjQgNi40LTM0LjZjMC01My00My05Ni05Ni05NmMtMTkuNyAwLTM4LjEgNi01My4zIDE2LjJDMzY3IDY0LjIgMzE1LjMgMzIgMjU2IDMyQzE2Ny42IDMyIDk2IDEwMy42IDk2IDE5MmMwIDIuNyAuMSA1LjQgLjIgOC4xQzQwLjIgMjE5LjggMCAyNzMuMiAwIDMzNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Cloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
    </Icon>
);

export default Cloud;