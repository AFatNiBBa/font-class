
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pancakes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pancakes?s=duotone pancakes}
 * @preview ![pancakes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGMwIDIwLjMgMjQuMiAzOC44IDY0IDUyLjlsMC00OC4xYzAtLjEtLjEtLjItLjItLjRjLS40LS41LTEuMi0xLjMtMi40LTEuOGMtMTQuNy01LjktMjguNy0xMy40LTM5LjYtMjIuOWMtMi4zLTItNC42LTQuMy02LjgtNi44QzUuMyAxNDEuNCAwIDE1MC41IDAgMTYwem0wIDgwYzAgMjEgMjUuOCA0MCA2OCA1NC4zYy0yLjYtNi45LTQtMTQuNS00LTIyLjNsMC0yNS4zYy0yMS41LTYuOC00MS4xLTE1LjItNTYuOC0yNS42QzIuNSAyMjcuMiAwIDIzMy41IDAgMjQwem0wIDgwYzAgNDQuMiAxMTQuNiA4MCAyNTYgODBzMjU2LTM1LjggMjU2LTgwYzAtNi41LTIuNS0xMi44LTcuMi0xOC45Yy0xNi4xIDEwLjYtMzYuMiAxOS4xLTU4LjMgMjZDMzk2LjQgMzQyLjggMzI5IDM1MiAyNTYgMzUycy0xNDAuNC05LjItMTkwLjYtMjQuOWMtMjItNi45LTQyLjItMTUuNC01OC4zLTI2QzIuNSAzMDcuMiAwIDMxMy41IDAgMzIwem0wIDgwYzAgNDQuMiAxMTQuNiA4MCAyNTYgODBzMjU2LTM1LjggMjU2LTgwYzAtNi41LTIuNS0xMi44LTcuMi0xOC45Yy0xNi4xIDEwLjYtMzYuMiAxOS4xLTU4LjMgMjZDMzk2LjQgNDIyLjggMzI5IDQzMiAyNTYgNDMycy0xNDAuNC05LjItMTkwLjYtMjQuOWMtMjItNi45LTQyLjItMTUuNC01OC4zLTI2QzIuNSAzODcuMiAwIDM5My41IDAgNDAwem0xNzQuNi04NC4xYzI1LjYgMi43IDUyLjkgNC4xIDgxLjQgNC4xYzE0MS40IDAgMjU2LTM1LjggMjU2LTgwYzAtNi41LTIuNS0xMi44LTcuMi0xOC45Yy0xNi4xIDEwLjYtMzYuMiAxOS4xLTU4LjMgMjZjLTQ3LjggMTQuOS0xMTEuMiAyNC0xODAuMiAyNC44Yy0xMS4zIDEwLTI2LjEgMTYuMS00Mi40IDE2LjFjLTExLjggMC0yMi45LTMuMi0zMi40LTguOGMtMS42IDE0LjEtNy44IDI2LjktMTcgMzYuN3ptMTExLjUtNzYuNEM0MTMuMyAyMzQuOCA1MTIgMjAxIDUxMiAxNjBjMC05LjUtNS4zLTE4LjYtMTQuOS0yN2MtNCA0LjUtOC41IDguNC0xMi43IDExLjVjLTEzLjQgMTAtMzAuOSAxNy44LTQ5LjggMjRDMzk2LjYgMTgxIDM0NS41IDE4OSAyODkuMyAxOTEuM2MtLjUgMC0uOSAuMi0xLjIgLjVjLS4xIDEwLjgtLjEgMjEuNS0uMSAzMi4yYzAgNS4zLS43IDEwLjUtMS45IDE1LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMTU5LjRjLTE3LjcgLjctMzIgMTUtMzIgMzIuNmwwIDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtNTIuM2MwLTguMS02LjUtMTQuOS0xNC41LTE1LjdjLTkuNC0xLTE3LjUgNi4zLTE3LjUgMTUuN0wxNjAgMjcyYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMTA3LjJjMC0xNC4yLTkuNS0yNi41LTIyLjctMzEuOEM0Ny4zIDEyMi42IDMyIDEwOS44IDMyIDk2YzAtMzUuMyAxMDAuMy02NCAyMjQtNjRzMjI0IDI4LjcgMjI0IDY0YzAgMzIuMi04My40IDU4LjktMTkyIDYzLjR6TTIwOCA2NGMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNmw5NiAwYzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2bC05NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pancakes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0 20.3 24.2 38.8 64 52.9l0-48.1c0-.1-.1-.2-.2-.4c-.4-.5-1.2-1.3-2.4-1.8c-14.7-5.9-28.7-13.4-39.6-22.9c-2.3-2-4.6-4.3-6.8-6.8C5.3 141.4 0 150.5 0 160zm0 80c0 21 25.8 40 68 54.3c-2.6-6.9-4-14.5-4-22.3l0-25.3c-21.5-6.8-41.1-15.2-56.8-25.6C2.5 227.2 0 233.5 0 240zm0 80c0 44.2 114.6 80 256 80s256-35.8 256-80c0-6.5-2.5-12.8-7.2-18.9c-16.1 10.6-36.2 19.1-58.3 26C396.4 342.8 329 352 256 352s-140.4-9.2-190.6-24.9c-22-6.9-42.2-15.4-58.3-26C2.5 307.2 0 313.5 0 320zm0 80c0 44.2 114.6 80 256 80s256-35.8 256-80c0-6.5-2.5-12.8-7.2-18.9c-16.1 10.6-36.2 19.1-58.3 26C396.4 422.8 329 432 256 432s-140.4-9.2-190.6-24.9c-22-6.9-42.2-15.4-58.3-26C2.5 387.2 0 393.5 0 400zm174.6-84.1c25.6 2.7 52.9 4.1 81.4 4.1c141.4 0 256-35.8 256-80c0-6.5-2.5-12.8-7.2-18.9c-16.1 10.6-36.2 19.1-58.3 26c-47.8 14.9-111.2 24-180.2 24.8c-11.3 10-26.1 16.1-42.4 16.1c-11.8 0-22.9-3.2-32.4-8.8c-1.6 14.1-7.8 26.9-17 36.7zm111.5-76.4C413.3 234.8 512 201 512 160c0-9.5-5.3-18.6-14.9-27c-4 4.5-8.5 8.4-12.7 11.5c-13.4 10-30.9 17.8-49.8 24C396.6 181 345.5 189 289.3 191.3c-.5 0-.9 .2-1.2 .5c-.1 10.8-.1 21.5-.1 32.2c0 5.3-.7 10.5-1.9 15.5z" />
            <path d="M288 159.4c-17.7 .7-32 15-32 32.6l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-52.3c0-8.1-6.5-14.9-14.5-15.7c-9.4-1-17.5 6.3-17.5 15.7L160 272c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-107.2c0-14.2-9.5-26.5-22.7-31.8C47.3 122.6 32 109.8 32 96c0-35.3 100.3-64 224-64s224 28.7 224 64c0 32.2-83.4 58.9-192 63.4zM208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z" />
    </Icon>
);

export default Pancakes;