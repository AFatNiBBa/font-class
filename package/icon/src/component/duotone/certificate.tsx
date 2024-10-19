
import { Icon, generic } from "../../index";

/**
 * A component that renders the `certificate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/certificate?s=duotone certificate}
 * @preview ![certificate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMTEgNy4zQzIwNSAxIDE5Ni0xLjQgMTg3LjYgLjhzLTE0LjkgOC45LTE3LjEgMTcuM0wxNTQuNyA4MC42bC02Mi0xNy41Yy04LjQtMi40LTE3LjQgMC0yMy41IDYuMXMtOC41IDE1LjEtNi4xIDIzLjVsMTcuNSA2MkwxOC4xIDE3MC42Yy04LjQgMi4xLTE1IDguNy0xNy4zIDE3LjFTMSAyMDUgNy4zIDIxMWw0Ni4yIDQ1TDcuMyAzMDFDMSAzMDctMS40IDMxNiAuOCAzMjQuNHM4LjkgMTQuOSAxNy4zIDE3LjFsNjIuNSAxNS44LTE3LjUgNjJjLTIuNCA4LjQgMCAxNy40IDYuMSAyMy41czE1LjEgOC41IDIzLjUgNi4xbDYyLTE3LjUgMTUuOCA2Mi41YzIuMSA4LjQgOC43IDE1IDE3LjEgMTcuM3MxNy4zLS4yIDIzLjQtNi40bDQ1LTQ2LjIgNDUgNDYuMmM2LjEgNi4yIDE1IDguNyAyMy40IDYuNHMxNC45LTguOSAxNy4xLTE3LjNsMTUuOC02Mi41IDYyIDE3LjVjOC40IDIuNCAxNy40IDAgMjMuNS02LjFzOC41LTE1LjEgNi4xLTIzLjVsLTE3LjUtNjIgNjIuNS0xNS44YzguNC0yLjEgMTUtOC43IDE3LjMtMTcuMXMtLjItMTcuNC02LjQtMjMuNGwtNDYuMi00NSA0Ni4yLTQ1YzYuMi02LjEgOC43LTE1IDYuNC0yMy40cy04LjktMTQuOS0xNy4zLTE3LjFsLTYyLjUtMTUuOCAxNy41LTYyYzIuNC04LjQgMC0xNy40LTYuMS0yMy41cy0xNS4xLTguNS0yMy41LTYuMWwtNjIgMTcuNUwzNDEuNCAxOC4xYy0yLjEtOC40LTguNy0xNS0xNy4xLTE3LjNTMzA3IDEgMzAxIDcuM0wyNTYgNTMuNSAyMTEgNy4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Certificate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
    </Icon>
);

export default Certificate;