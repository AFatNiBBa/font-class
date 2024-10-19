
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=duotone circle-user}
 * @preview ![circle-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTExMyAzODQuMmMyMi4xLTM4LjMgNjMuNS02NC4yIDExMS02NC4ybDY0IDBjNDcuNCAwIDg4LjkgMjUuOCAxMTEgNjQuMkMzNjMuOCA0MjMuMyAzMTIuOCA0NDggMjU2IDQ0OHMtMTA3LjgtMjQuNy0xNDMtNjMuOHpNMzI4IDIwMGE3MiA3MiAwIDEgMSAtMTQ0IDAgNzIgNzIgMCAxIDEgMTQ0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMjcyYTcyIDcyIDAgMSAwIDAtMTQ0IDcyIDcyIDAgMSAwIDAgMTQ0em0wIDE3NmM1Ni44IDAgMTA3LjgtMjQuNyAxNDMtNjMuOEMzNzYuOSAzNDUuOCAzMzUuNCAzMjAgMjg4IDMyMGwtNjQgMGMtNDcuNCAwLTg4LjkgMjUuOC0xMTEgNjQuMmMzNS4yIDM5LjIgODYuMiA2My44IDE0MyA2My44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM113 384.2c22.1-38.3 63.5-64.2 111-64.2l64 0c47.4 0 88.9 25.8 111 64.2C363.8 423.3 312.8 448 256 448s-107.8-24.7-143-63.8zM328 200a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
            <path d="M256 272a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm0 176c56.8 0 107.8-24.7 143-63.8C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8z" />
    </Icon>
);

export default CircleUser;