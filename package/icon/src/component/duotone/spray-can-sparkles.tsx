
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spray-can-sparkles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can-sparkles?s=duotone spray-can-sparkles}
 * @preview ![spray-can-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAzMzZhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgODAgMzM2ek0yODggNDhjMCAxLjQgMSAzIDIuMiAzLjZMMzIwIDY0bDEyLjQgMjkuOEMzMzMgOTUgMzM0LjYgOTYgMzM2IDk2czMtMSAzLjYtMi4yTDM1MiA2NGwyOS44LTEyLjRDMzgzIDUxIDM4NCA0OS40IDM4NCA0OGMwLTEuNC0xLTMtMi4yLTMuNkwzNTIgMzIgMzM5LjYgMi4yQzMzOSAxIDMzNy40IDAgMzM2IDBzLTMgMS0zLjYgMi4yTDMyMCAzMiAyOTAuMiA0NC40QzI4OSA0NSAyODggNDYuNiAyODggNDh6bTY0IDk2YzAgMS40IDEgMyAyLjIgMy42TDM4NCAxNjBsMTIuNCAyOS44Yy42IDEuMiAyLjIgMi4yIDMuNiAyLjJzMy0xIDMuNi0yLjJMNDE2IDE2MGwyOS44LTEyLjRjMS4yLS42IDIuMi0yLjIgMi4yLTMuNmMwLTEuNC0xLTMtMi4yLTMuNkw0MTYgMTI4IDQwMy42IDk4LjJDNDAzIDk3IDQwMS40IDk2IDQwMCA5NnMtMyAxLTMuNiAyLjJMMzg0IDEyOGwtMjkuOCAxMi40Yy0xLjIgLjYtMi4yIDIuMi0yLjIgMy42em02NC05NmMwIDEuNCAxIDMgMi4yIDMuNkw0NDggNjRsMTIuNCAyOS44QzQ2MSA5NSA0NjIuNiA5NiA0NjQgOTZzMy0xIDMuNi0yLjJMNDgwIDY0bDI5LjgtMTIuNEM1MTEgNTEgNTEyIDQ5LjQgNTEyIDQ4YzAtMS40LTEtMy0yLjItMy42TDQ4MCAzMiA0NjcuNiAyLjJDNDY3IDEgNDY1LjQgMCA0NjQgMHMtMyAxLTMuNiAyLjJMNDQ4IDMyIDQxOC4yIDQ0LjRDNDE3IDQ1IDQxNiA0Ni42IDQxNiA0OHptMCAxOTJjMCAxLjQgMSAzIDIuMiAzLjZMNDQ4IDI1NmwxMi40IDI5LjhjLjYgMS4yIDIuMiAyLjIgMy42IDIuMnMzLTEgMy42LTIuMkw0ODAgMjU2bDI5LjgtMTIuNGMxLjItLjYgMi4yLTIuMiAyLjItMy42YzAtMS40LTEtMy0yLjItMy42TDQ4MCAyMjRsLTEyLjQtMjkuOGMtLjYtMS4yLTIuMi0yLjItMy42LTIuMnMtMyAxLTMuNiAyLjJMNDQ4IDIyNGwtMjkuOCAxMi40Yy0xLjIgLjYtMi4yIDIuMi0yLjIgMy42eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDBsNjQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDk2TDk2IDEyOGwwLTk2YzAtMTcuNyAxNC4zLTMyIDMyLTMyek0wIDI1NmMwLTUzIDQzLTk2IDk2LTk2bDEyOCAwYzUzIDAgOTYgNDMgOTYgOTZsMCAyMDhjMCAyNi41LTIxLjUgNDgtNDggNDhMNDggNTEyYy0yNi41IDAtNDgtMjEuNS00OC00OEwwIDI1NnptMjQwIDgwQTgwIDgwIDAgMSAwIDgwIDMzNmE4MCA4MCAwIDEgMCAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SprayCanSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 336a80 80 0 1 0 160 0A80 80 0 1 0 80 336zM288 48c0 1.4 1 3 2.2 3.6L320 64l12.4 29.8C333 95 334.6 96 336 96s3-1 3.6-2.2L352 64l29.8-12.4C383 51 384 49.4 384 48c0-1.4-1-3-2.2-3.6L352 32 339.6 2.2C339 1 337.4 0 336 0s-3 1-3.6 2.2L320 32 290.2 44.4C289 45 288 46.6 288 48zm64 96c0 1.4 1 3 2.2 3.6L384 160l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L416 160l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6c0-1.4-1-3-2.2-3.6L416 128 403.6 98.2C403 97 401.4 96 400 96s-3 1-3.6 2.2L384 128l-29.8 12.4c-1.2 .6-2.2 2.2-2.2 3.6zm64-96c0 1.4 1 3 2.2 3.6L448 64l12.4 29.8C461 95 462.6 96 464 96s3-1 3.6-2.2L480 64l29.8-12.4C511 51 512 49.4 512 48c0-1.4-1-3-2.2-3.6L480 32 467.6 2.2C467 1 465.4 0 464 0s-3 1-3.6 2.2L448 32 418.2 44.4C417 45 416 46.6 416 48zm0 192c0 1.4 1 3 2.2 3.6L448 256l12.4 29.8c.6 1.2 2.2 2.2 3.6 2.2s3-1 3.6-2.2L480 256l29.8-12.4c1.2-.6 2.2-2.2 2.2-3.6c0-1.4-1-3-2.2-3.6L480 224l-12.4-29.8c-.6-1.2-2.2-2.2-3.6-2.2s-3 1-3.6 2.2L448 224l-29.8 12.4c-1.2 .6-2.2 2.2-2.2 3.6z" />
            <path d="M128 0l64 0c17.7 0 32 14.3 32 32l0 96L96 128l0-96c0-17.7 14.3-32 32-32zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 208c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0z" />
    </Icon>
);

export default SprayCanSparkles;