
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=duotone clock-one}
 * @preview ![clock-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiAxMjBjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDU2LjcgMjAtMzBjNy40LTExIDIyLjMtMTQgMzMuMy02LjdjNi45IDQuNiAxMC43IDEyLjIgMTAuNyAyMGMwIDQuNi0xLjMgOS4yLTQgMTMuM2wtNjQgOTZjLTUuOSA4LjgtMTYuOCAxMi43LTI2LjkgOS43cy0xNy0xMi40LTE3LTIzbDAtMTM2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDk2YzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgNTYuNyAyMC0zMGM3LjQtMTEgMjIuMy0xNCAzMy4zLTYuN3MxNCAyMi4zIDYuNyAzMy4zbC02NCA5NmMtNS45IDguOC0xNi44IDEyLjctMjYuOSA5LjdzLTE3LTEyLjQtMTctMjNsMC0xMzZjMC0xMy4zIDEwLjctMjQgMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56.7 20-30c7.4-11 22.3-14 33.3-6.7c6.9 4.6 10.7 12.2 10.7 20c0 4.6-1.3 9.2-4 13.3l-64 96c-5.9 8.8-16.8 12.7-26.9 9.7s-17-12.4-17-23l0-136z" />
            <path d="M256 96c13.3 0 24 10.7 24 24l0 56.7 20-30c7.4-11 22.3-14 33.3-6.7s14 22.3 6.7 33.3l-64 96c-5.9 8.8-16.8 12.7-26.9 9.7s-17-12.4-17-23l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockOne;