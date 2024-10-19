
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-xmark?s=sharp-duotone-solid location-xmark}
 * @preview ![location-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDMwNCAxOTIgNTEyIDE5MiA1MTJzMTkyLTIwOCAxOTItMzIwQzM4NCA4NiAyOTggMCAxOTIgMFMwIDg2IDAgMTkyem05NC4xLTY0YzExLjMtMTEuMyAyMi42LTIyLjYgMzMuOS0zMy45YzUuNyA1LjcgMTEuMyAxMS4zIDE3IDE3YzE1LjcgMTUuNyAzMS4zIDMxLjMgNDcgNDdjMTUuNy0xNS43IDMxLjMtMzEuMyA0Ny00N2M1LjctNS43IDExLjMtMTEuMyAxNy0xN2MxMS4zIDExLjMgMjIuNiAyMi42IDMzLjkgMzMuOWMtNS43IDUuNy0xMS4zIDExLjMtMTcgMTdjLTE1LjcgMTUuNy0zMS4zIDMxLjMtNDcgNDdjMTUuNyAxNS43IDMxLjQgMzEuNCA0NyA0N2M1LjcgNS43IDExLjMgMTEuMyAxNyAxN2MtMTEuMyAxMS4zLTIyLjYgMjIuNi0zMy45IDMzLjlsLTE3LTE3LTQ3LTQ3Yy0xNS43IDE1LjctMzEuMyAzMS40LTQ3IDQ3bC0xNyAxN2MtMTEuMy0xMS4zLTIyLjYtMjIuNi0zMy45LTMzLjljNS43LTUuNyAxMS4zLTExLjMgMTctMTdjMTUuNy0xNS43IDMxLjQtMzEuNCA0Ny00N2MtMTUuNy0xNS43LTMxLjMtMzEuMy00Ny00N2MtNS43LTUuNy0xMS4zLTExLjMtMTctMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNzMgMTQ1bDE3LTE3TDI1NiA5NC4xbC0xNyAxNy00NyA0Ny00Ny00Ny0xNy0xN0w5NC4xIDEyOGwxNyAxNyA0NyA0Ny00NyA0Ny0xNyAxN0wxMjggMjg5LjlsMTctMTcgNDctNDcgNDcgNDcgMTcgMTdMMjg5LjkgMjU2bC0xNy0xNy00Ny00NyA0Ny00N3oiLz48L3N2Zz4=|width=32|height=32)
 */
const LocationXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm94.1-64c11.3-11.3 22.6-22.6 33.9-33.9c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.3 31.3 47 47c15.7-15.7 31.3-31.3 47-47c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.3 31.3-47 47c15.7 15.7 31.4 31.4 47 47c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9l-17-17-47-47c-15.7 15.7-31.3 31.4-47 47l-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.3-31.3-47-47c-5.7-5.7-11.3-11.3-17-17z" />
            <path d="M273 145l17-17L256 94.1l-17 17-47 47-47-47-17-17L94.1 128l17 17 47 47-47 47-17 17L128 289.9l17-17 47-47 47 47 17 17L289.9 256l-17-17-47-47 47-47z" />
    </Icon>
);

export default LocationXmark;