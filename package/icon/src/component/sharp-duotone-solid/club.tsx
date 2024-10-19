
import { Icon, generic } from "../../index";

/**
 * A component that renders the `club` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/club?s=sharp-duotone-solid club}
 * @preview ![club](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGMwIDcwLjcgNTcuMyAxMjggMTI4IDEyOGMzOC4yIDAgNzIuNS0xNi44IDk2LTQzLjNMMjI0IDI1NmwwLTMyIDY0IDAgMCAzMiAwIDExNi43YzIzLjUgMjYuNiA1Ny44IDQzLjMgOTYgNDMuM2M3MC43IDAgMTI4LTU3LjMgMTI4LTEyOHMtNTcuMy0xMjgtMTI4LTEyOGMtMS40IDAtMi43IDAtNCAuMWMyLjYtMTAuMiA0LTIxIDQtMzIuMUMzODQgNTcuMyAzMjYuNyAwIDI1NiAwUzEyOCA1Ny4zIDEyOCAxMjhjMCAxMS4xIDEuNCAyMS44IDQgMzIuMWMtMS4zIDAtMi43LS4xLTQtLjFDNTcuMyAxNjAgMCAyMTcuMyAwIDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAyMjRsMCAzMiAwIDE5MiAzMiAwIDMyIDAgMCA2NC0zMiAwLTMyIDAtNjQgMC0zMiAwLTMyIDAgMC02NCAzMiAwIDMyIDAgMC0xOTIgMC0zMiA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Club: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 70.7 57.3 128 128 128c38.2 0 72.5-16.8 96-43.3L224 256l0-32 64 0 0 32 0 116.7c23.5 26.6 57.8 43.3 96 43.3c70.7 0 128-57.3 128-128s-57.3-128-128-128c-1.4 0-2.7 0-4 .1c2.6-10.2 4-21 4-32.1C384 57.3 326.7 0 256 0S128 57.3 128 128c0 11.1 1.4 21.8 4 32.1c-1.3 0-2.7-.1-4-.1C57.3 160 0 217.3 0 288z" />
            <path d="M288 224l0 32 0 192 32 0 32 0 0 64-32 0-32 0-64 0-32 0-32 0 0-64 32 0 32 0 0-192 0-32 64 0z" />
    </Icon>
);

export default Club;