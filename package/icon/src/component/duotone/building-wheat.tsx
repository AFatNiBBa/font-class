
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-wheat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-wheat?s=duotone building-wheat}
 * @preview ![building-wheat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4QzAgMjEuNSAyMS41IDAgNDggMEwzMzYgMGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDQxNmMwIDI2LjUtMjEuNSA0OC00OCA0OGwtOTYgMCAwLTgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4cy00OCAyMS41LTQ4IDQ4bDAgODAtOTYgMGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhMMCA0OHptNjQgNjRsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZMODAgOTZjLTguOCAwLTE2IDcuMi0xNiAxNnptMCAxMjhsMCAzMmMwIDguOCA3LjIgMTYgMTYgMTZsMzIgMGM4LjggMCAxNi03LjIgMTYtMTZsMC0zMmMwLTguOC03LjItMTYtMTYtMTZsLTMyIDBjLTguOCAwLTE2IDcuMi0xNiAxNnptOTYtMTI4bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwYy04LjggMC0xNiA3LjItMTYgMTZ6bTAgMTI4bDAgMzJjMCA4LjggNy4yIDE2IDE2IDE2bDMyIDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMzJjMC04LjgtNy4yLTE2LTE2LTE2bC0zMiAwYy04LjggMC0xNiA3LjItMTYgMTZ6bTk2LTEyOGwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMGMtOC44IDAtMTYgNy4yLTE2IDE2em0wIDEyOGwwIDMyYzAgOC44IDcuMiAxNiAxNiAxNmwzMiAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTMyYzAtOC44LTcuMi0xNi0xNi0xNmwtMzIgMGMtOC44IDAtMTYgNy4yLTE2IDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQwIDIwOGwwLTE2LTE2IDBjLTQ0LjIgMC04MCAzNS44LTgwIDgwbDAgMTYgMTYgMGM0NC4yIDAgODAtMzUuOCA4MC04MHptMCA5NmwtMTYgMGMtNDQuMiAwLTgwIDM1LjgtODAgODBsMCAxNiAxNiAwYzQ0LjIgMCA4MC0zNS44IDgwLTgwbDAtMTZ6bTAgMTEybC0xNiAwYy00NC4yIDAtODAgMzUuOC04MCA4MGwwIDE2IDE2IDBjNDQuMiAwIDgwLTM1LjggODAtODBsMC0xNnpNNTEyIDUxMmwwLTE2YzAtNDQuMi0zNS44LTgwLTgwLTgwbC0xNiAwIDAgMTZjMCA0NC4yIDM1LjggODAgODAgODBsMTYgMHptMC0xMjhjMC00NC4yLTM1LjgtODAtODAtODBsLTE2IDAgMCAxNmMwIDQ0LjIgMzUuOCA4MCA4MCA4MGwxNiAwIDAtMTZ6bTAtOTZsMC0xNmMwLTQ0LjItMzUuOC04MC04MC04MGwtMTYgMCAwIDE2YzAgNDQuMiAzNS44IDgwIDgwIDgwbDE2IDB6TTU1MiA1NmMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNGwwIDEwNGMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMTA0em00OCAxNmMtMTMuMyAwLTI0IDEwLjctMjQgMjRsMCAzMmMwIDEzLjMgMTAuNyAyNCAyNCAyNHMyNC0xMC43IDI0LTI0bDAtMzJjMC0xMy4zLTEwLjctMjQtMjQtMjR6TTQ4MCA5NmMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNGwwIDMyYzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BuildingWheat: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zm64 64l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm96-128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm96-128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
            <path d="M640 208l0-16-16 0c-44.2 0-80 35.8-80 80l0 16 16 0c44.2 0 80-35.8 80-80zm0 96l-16 0c-44.2 0-80 35.8-80 80l0 16 16 0c44.2 0 80-35.8 80-80l0-16zm0 112l-16 0c-44.2 0-80 35.8-80 80l0 16 16 0c44.2 0 80-35.8 80-80l0-16zM512 512l0-16c0-44.2-35.8-80-80-80l-16 0 0 16c0 44.2 35.8 80 80 80l16 0zm0-128c0-44.2-35.8-80-80-80l-16 0 0 16c0 44.2 35.8 80 80 80l16 0 0-16zm0-96l0-16c0-44.2-35.8-80-80-80l-16 0 0 16c0 44.2 35.8 80 80 80l16 0zM552 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104zm48 16c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32c0-13.3-10.7-24-24-24zM480 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32z" />
    </Icon>
);

export default BuildingWheat;