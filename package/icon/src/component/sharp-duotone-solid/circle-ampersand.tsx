
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-ampersand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=sharp-duotone-solid circle-ampersand}
 * @preview ![circle-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NCA2NC4zYzAtMjIuOSAxMC45LTQ0LjUgMjkuNC01OC4xbDIxLjktMTYuMS03LjMtNy43Yy0xMi44LTEzLjQtMjAtMzEuMi0yMC00OS44bDAtMzYuNyAwLTI0IDI0IDAgOTYgMCAyNCAwIDAgMjQgMCAzNS43YzAgMjAuNC05LjcgMzkuNi0yNi4yIDUxLjZsLTE4IDEzLjIgMjguNiAyOS45IDI3LjctNDAuMSAxMy43LTE5LjcgMzkuNSAyNy4zLTEzLjcgMTkuNy0zMy4zIDQ4LjEgNjAuOSA2My42Yy44IC44IDEuNSAxLjcgMi4yIDIuNmwtNjYuMSAwLTI0LjgtMjUuOS0xMC44IDE1LjZMMjg0LjYgMzg0IDI3MiAzODRsLTE2IDAtODggMC0yNCAwIDAtMjQgMC0zOS43em00OCAwbDAgMTUuNyA2Ny40IDAgOS4yLTEzLjMtMzkuOC00MS41LTI3IDE5LjhjLTYuMiA0LjUtOS44IDExLjctOS44IDE5LjR6TTIxNiAxNzZsMCAxMi43YzAgNi4yIDIuNCAxMi4xIDYuNyAxNi42bDExLjcgMTIuMiAyMy4xLTE2LjljNC4xLTMgNi41LTcuOCA2LjUtMTIuOWwwLTExLjctNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxMjhsLTI0IDAgMCAyNCAwIDM2LjdjMCAxOC42IDcuMiAzNi40IDIwIDQ5LjhsNy4zIDcuNy0yMS45IDE2LjFjLTE4LjUgMTMuNi0yOS40IDM1LjEtMjkuNCA1OC4xbDAgMzkuNyAwIDI0IDI0IDAgODggMCAxNiAwIDEyLjYgMCA3LjItMTAuMyAxMC44LTE1LjZMMzI3LjQgMzg0bDY2LjEgMGMtLjctLjktMS40LTEuOC0yLjItMi42bC02MC45LTYzLjYgMzMuMy00OC4xIDEzLjctMTkuNy0zOS41LTI3LjMtMTMuNyAxOS43LTI3LjcgNDAuMS0yOC42LTI5LjkgMTgtMTMuMmMxNi40LTEyLjEgMjYuMi0zMS4yIDI2LjItNTEuNmwwLTM1LjcgMC0yNC0yNCAwLTk2IDB6bTY1LjUgNzIuNmwtMjMuMSAxNi45LTExLjctMTIuMmMtNC4zLTQuNS02LjctMTAuNC02LjctMTYuNmwwLTEyLjcgNDggMCAwIDExLjdjMCA1LjEtMi40IDkuOS02LjUgMTIuOXpNMjAxLjggMzAxbDI3LTE5LjggMzkuOCA0MS41TDI1OS40IDMzNiAxOTIgMzM2bDAtMTUuN2MwLTcuNiAzLjYtMTQuOCA5LjgtMTkuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleAmpersand: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 64.3c0-22.9 10.9-44.5 29.4-58.1l21.9-16.1-7.3-7.7c-12.8-13.4-20-31.2-20-49.8l0-36.7 0-24 24 0 96 0 24 0 0 24 0 35.7c0 20.4-9.7 39.6-26.2 51.6l-18 13.2 28.6 29.9 27.7-40.1 13.7-19.7 39.5 27.3-13.7 19.7-33.3 48.1 60.9 63.6c.8 .8 1.5 1.7 2.2 2.6l-66.1 0-24.8-25.9-10.8 15.6L284.6 384 272 384l-16 0-88 0-24 0 0-24 0-39.7zm48 0l0 15.7 67.4 0 9.2-13.3-39.8-41.5-27 19.8c-6.2 4.5-9.8 11.7-9.8 19.4zM216 176l0 12.7c0 6.2 2.4 12.1 6.7 16.6l11.7 12.2 23.1-16.9c4.1-3 6.5-7.8 6.5-12.9l0-11.7-48 0z" />
            <path d="M192 128l-24 0 0 24 0 36.7c0 18.6 7.2 36.4 20 49.8l7.3 7.7-21.9 16.1c-18.5 13.6-29.4 35.1-29.4 58.1l0 39.7 0 24 24 0 88 0 16 0 12.6 0 7.2-10.3 10.8-15.6L327.4 384l66.1 0c-.7-.9-1.4-1.8-2.2-2.6l-60.9-63.6 33.3-48.1 13.7-19.7-39.5-27.3-13.7 19.7-27.7 40.1-28.6-29.9 18-13.2c16.4-12.1 26.2-31.2 26.2-51.6l0-35.7 0-24-24 0-96 0zm65.5 72.6l-23.1 16.9-11.7-12.2c-4.3-4.5-6.7-10.4-6.7-16.6l0-12.7 48 0 0 11.7c0 5.1-2.4 9.9-6.5 12.9zM201.8 301l27-19.8 39.8 41.5L259.4 336 192 336l0-15.7c0-7.6 3.6-14.8 9.8-19.4z" />
    </Icon>
);

export default CircleAmpersand;