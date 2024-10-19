
import { Icon } from "../../index";

/**
 * A component that renders the `brain-circuit` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brain-circuit?s=solid brain-circuit}
 * @preview ![brain-circuit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQwIDU2YzAtMzAuOS0yNS4xLTU2LTU2LTU2Yy0yOC45IDAtNTIuNyAyMS45LTU1LjcgNDkuOUMxMDAuNiA1Ni45IDgwIDgyLjEgODAgMTEyYzAgNiAuOCAxMS45IDIuNCAxNy40QzUzLjYgMTM1LjcgMzIgMTYxLjMgMzIgMTkyYzAgMTUgNS4xIDI4LjggMTMuOCAzOS43QzE4LjcgMjQ0LjUgMCAyNzIuMSAwIDMwNGMwIDM0LjIgMjEuNCA2My40IDUxLjYgNzQuOEM0OS4zIDM4NS40IDQ4IDM5Mi42IDQ4IDQwMGMwIDM1LjMgMjguNyA2NCA2NCA2NGM1LjYgMCAxMS4xLS43IDE2LjMtMi4xYzIuOSAyOC4yIDI2LjggNTAuMSA1NS43IDUwLjFjMzAuOSAwIDU2LTI1LjEgNTYtNTZsMC0xODQtNDggMGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMzQuN2MxOC42IDYuNiAzMiAyNC40IDMyIDQ1LjNjMCAyNi41LTIxLjUgNDgtNDggNDhzLTQ4LTIxLjUtNDgtNDhjMC0yMC45IDEzLjQtMzguNyAzMi00NS4zbDAtMzQuN2MwLTI2LjUgMjEuNS00OCA0OC00OGw0OCAwIDAtODAtMzQuNyAwYy02LjYgMTguNi0yNC40IDMyLTQ1LjMgMzJjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDhjMjAuOSAwIDM4LjcgMTMuNCA0NS4zIDMybDM0LjcgMCAwLTcyem0zMiAxMDRsMCAxOTIgMzQuNyAwYzYuNi0xOC42IDI0LjQtMzIgNDUuMy0zMmMyNi41IDAgNDggMjEuNSA0OCA0OHMtMjEuNSA0OC00OCA0OGMtMjAuOSAwLTM4LjctMTMuNC00NS4zLTMyTDI3MiAzODRsMCA3MmMwIDMwLjkgMjUuMSA1NiA1NiA1NmMyOC45IDAgNTIuNy0yMS45IDU1LjctNTAuMWM1LjIgMS40IDEwLjcgMi4xIDE2LjMgMi4xYzM1LjMgMCA2NC0yOC43IDY0LTY0YzAtNy40LTEuMy0xNC42LTMuNi0yMS4yQzQ5MC42IDM2Ny40IDUxMiAzMzguMiA1MTIgMzA0YzAtMzEuOS0xOC43LTU5LjUtNDUuOC03Mi4zQzQ3NC45IDIyMC44IDQ4MCAyMDcgNDgwIDE5MmMwLTMwLjctMjEuNi01Ni4zLTUwLjQtNjIuNmMxLjYtNS41IDIuNC0xMS40IDIuNC0xNy40YzAtMjkuOS0yMC42LTU1LjEtNDguMy02Mi4xQzM4MC42IDIxLjkgMzU2LjkgMCAzMjggMGMtMzAuOSAwLTU2IDI1LjEtNTYgNTZsMCA3MiA0OCAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgMi43YzE4LjYgNi42IDMyIDI0LjQgMzIgNDUuM2MwIDI2LjUtMjEuNSA0OC00OCA0OHMtNDgtMjEuNS00OC00OGMwLTIwLjkgMTMuNC0zOC43IDMyLTQ1LjNsMC0yLjdjMC04LjgtNy4yLTE2LTE2LTE2bC00OCAwek0xNDQgMTQ0YTE2IDE2IDAgMSAwIDMyIDAgMTYgMTYgMCAxIDAgLTMyIDB6bTIwOCA2NGExNiAxNiAwIDEgMCAwIDMyIDE2IDE2IDAgMSAwIDAtMzJ6TTE0NCAzNjhhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHptMTkyIDBhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BrainCircuit: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 56c0-30.9-25.1-56-56-56c-28.9 0-52.7 21.9-55.7 49.9C100.6 56.9 80 82.1 80 112c0 6 .8 11.9 2.4 17.4C53.6 135.7 32 161.3 32 192c0 15 5.1 28.8 13.8 39.7C18.7 244.5 0 272.1 0 304c0 34.2 21.4 63.4 51.6 74.8C49.3 385.4 48 392.6 48 400c0 35.3 28.7 64 64 64c5.6 0 11.1-.7 16.3-2.1c2.9 28.2 26.8 50.1 55.7 50.1c30.9 0 56-25.1 56-56l0-184-48 0c-8.8 0-16 7.2-16 16l0 34.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-34.7c0-26.5 21.5-48 48-48l48 0 0-80-34.7 0c-6.6 18.6-24.4 32-45.3 32c-26.5 0-48-21.5-48-48s21.5-48 48-48c20.9 0 38.7 13.4 45.3 32l34.7 0 0-72zm32 104l0 192 34.7 0c6.6-18.6 24.4-32 45.3-32c26.5 0 48 21.5 48 48s-21.5 48-48 48c-20.9 0-38.7-13.4-45.3-32L272 384l0 72c0 30.9 25.1 56 56 56c28.9 0 52.7-21.9 55.7-50.1c5.2 1.4 10.7 2.1 16.3 2.1c35.3 0 64-28.7 64-64c0-7.4-1.3-14.6-3.6-21.2C490.6 367.4 512 338.2 512 304c0-31.9-18.7-59.5-45.8-72.3C474.9 220.8 480 207 480 192c0-30.7-21.6-56.3-50.4-62.6c1.6-5.5 2.4-11.4 2.4-17.4c0-29.9-20.6-55.1-48.3-62.1C380.6 21.9 356.9 0 328 0c-30.9 0-56 25.1-56 56l0 72 48 0c26.5 0 48 21.5 48 48l0 2.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-2.7c0-8.8-7.2-16-16-16l-48 0zM144 144a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm208 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM144 368a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm192 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
    </Icon>
);

export default BrainCircuit;