
import { Icon, generic } from "../../index";

/**
 * A component that renders the `section` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/section?s=duotone section}
 * @preview ![section](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xLjcgMjQzYzQuOC0yOCAyMC42LTQ4LjkgNDEuNy02Mi41YzExLjEgNy42IDIzLjggMTMuNyAzNi42IDE4LjdjNi40IDIuNSAxMi44IDQuOCAxOSA2LjlzMTIuMyA0IDE4LjEgNS44YzEuMiAuNCAyLjUgLjggMy43IDEuMmMxNy41IDUuNSAzMS44IDEwLjMgNDMuMSAxNS41bC0xNi40LTIuNmMtMjYuNy00LjItNDgtMS43LTYyLjEgNC4zYy0xMi42IDUuNC0xOC42IDEzLTIwLjUgMjIuN2MtLjggOC4xIC41IDEyLjcgMi4xIDE1LjdjMS43IDMuMyA0LjkgNy4xIDExIDExLjNjMTMuOCA5LjMgMzQuMyAxNS42IDYxLjcgMjMuOGwxLjQgLjQgLjYgLjJjMjQgNy4yIDU0LjMgMTYuMyA3Ni45IDMyLjljMSAuOCAyLjEgMS41IDMuMSAyLjNjMTEuMiA4LjggMjEuMiAyMC4yIDI3LjYgMzUuMmM0LjYgMTAuOCA2LjggMjIuNCA2LjggMzQuNmMwIDYuMy0uNiAxMi44LTEuNyAxOS40Yy02IDM1LTI5LjIgNTguOS01OC41IDcxLjRjLTE4LjYgOC0zOS44IDExLjYtNjIgMTEuNmMtMTEuNiAwLTIzLjQtMS0zNS40LTIuOWMtMTguOC0zLjEtNDguNy0xMy4zLTY3LjMtMTkuNmMtMy41LTEuMi02LjctMi4zLTkuMi0zLjFDNS4xIDQ4MC43LTMuOSA0NjIuNiAxLjYgNDQ1LjhzMjMuNy0yNS44IDQwLjUtMjAuM2MzLjggMS4zIDggMi43IDEyLjMgNC4yYzE5IDYuNSA0MS40IDE0LjEgNTQuMSAxNi4yYzI2LjYgNC4xIDQ4IDEuNiA2Mi00LjRjMTMtNS42IDE4LjktMTMuNCAyMC43LTIzLjVjMS42LTkuNSAuNC0xNC45LS45LTE4LjFjLTEuNC0zLjMtNC4xLTYuOS05LjUtMTAuOWMtMTIuNS05LjItMzIuMi0xNS42LTU5LjQtMjMuOGMtMS4yLS40LTIuNS0uNy0zLjctMS4xYy0yMy41LTctNTMtMTUuOC03NS40LTMxYy0xMi41LTguNS0yNC40LTE5LjktMzIuMy0zNS41Yy04LTE1LjktMTAuNy0zMy43LTguNC01M2MuMS0uNiAuMS0xLjEgLjItMS43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQuOSA5NkM2Ny4xIDg0LjQgNzMuNyA3Ni4yIDg2IDcwLjZjMTMuOC02LjIgMzQuOC04LjkgNjEuMi00LjVjOC44IDEuNCAzNi4xIDcuMSA0NC4xIDkuM2MxNyA0LjggMzQuNy01LjEgMzkuNS0yMi4ycy01LjEtMzQuNy0yMi4yLTM5LjVjLTExLjEtMy4xLTQxLTkuMi01MC45LTEwLjhDMTIzLTIuNyA4OC4zLS42IDU5LjcgMTIuM0MyOS45IDI1LjggNy41IDUwLjkgMS42IDg2LjVjLS4xIC41LS4yIDEuMS0uMiAxLjZjLTIuMiAxOS43IC4zIDM3LjkgOC4xIDU0LjFjNy43IDE2LjEgMTkuNCAyOCAzMiAzNi45YzIyLjUgMTYuMSA1Mi4xIDI1LjQgNzUuNiAzMi44YzAgMCAwIDAgMCAwbDMuNyAxLjJjMjcuMiA4LjYgNDYuOCAxNS40IDU5LjIgMjVjNS41IDQuMiA4LjQgOC4yIDEwIDEyLjJjMS42IDQgMi44IDEwLjQgMS4xIDIwLjljLTIuNCAxNC43LTEyLjggMjYuNC0zNy4xIDMxbC0xMi40IDIuM2MyNCA3LjIgNTQuMyAxNi4zIDc2LjkgMzIuOWMxIC44IDIuMSAxLjUgMy4xIDIuM2MxNi41LTEzLjkgMjguNS0zMy4yIDMyLjYtNTguMmMzLjItMTkuOCAxLjktMzguMy00LjgtNTUuMWMtNi43LTE2LjgtMTcuOC0yOS40LTMwLjItMzljLTIyLjgtMTcuNi01My42LTI3LjQtNzcuNy0zNWwtMS40LS41Yy0yNy40LTguNy00Ny44LTE1LjMtNjEuNS0yNWMtNi4xLTQuNC05LjUtOC41LTExLjQtMTIuNGMtMS44LTMuNy0zLjItOS4zLTIuMy0xOC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Section: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M1.7 243c4.8-28 20.6-48.9 41.7-62.5c11.1 7.6 23.8 13.7 36.6 18.7c6.4 2.5 12.8 4.8 19 6.9s12.3 4 18.1 5.8c1.2 .4 2.5 .8 3.7 1.2c17.5 5.5 31.8 10.3 43.1 15.5l-16.4-2.6c-26.7-4.2-48-1.7-62.1 4.3c-12.6 5.4-18.6 13-20.5 22.7c-.8 8.1 .5 12.7 2.1 15.7c1.7 3.3 4.9 7.1 11 11.3c13.8 9.3 34.3 15.6 61.7 23.8l1.4 .4 .6 .2c24 7.2 54.3 16.3 76.9 32.9c1 .8 2.1 1.5 3.1 2.3c11.2 8.8 21.2 20.2 27.6 35.2c4.6 10.8 6.8 22.4 6.8 34.6c0 6.3-.6 12.8-1.7 19.4c-6 35-29.2 58.9-58.5 71.4c-18.6 8-39.8 11.6-62 11.6c-11.6 0-23.4-1-35.4-2.9c-18.8-3.1-48.7-13.3-67.3-19.6c-3.5-1.2-6.7-2.3-9.2-3.1C5.1 480.7-3.9 462.6 1.6 445.8s23.7-25.8 40.5-20.3c3.8 1.3 8 2.7 12.3 4.2c19 6.5 41.4 14.1 54.1 16.2c26.6 4.1 48 1.6 62-4.4c13-5.6 18.9-13.4 20.7-23.5c1.6-9.5 .4-14.9-.9-18.1c-1.4-3.3-4.1-6.9-9.5-10.9c-12.5-9.2-32.2-15.6-59.4-23.8c-1.2-.4-2.5-.7-3.7-1.1c-23.5-7-53-15.8-75.4-31c-12.5-8.5-24.4-19.9-32.3-35.5c-8-15.9-10.7-33.7-8.4-53c.1-.6 .1-1.1 .2-1.7z" />
            <path d="M64.9 96C67.1 84.4 73.7 76.2 86 70.6c13.8-6.2 34.8-8.9 61.2-4.5c8.8 1.4 36.1 7.1 44.1 9.3c17 4.8 34.7-5.1 39.5-22.2s-5.1-34.7-22.2-39.5c-11.1-3.1-41-9.2-50.9-10.8C123-2.7 88.3-.6 59.7 12.3C29.9 25.8 7.5 50.9 1.6 86.5c-.1 .5-.2 1.1-.2 1.6c-2.2 19.7 .3 37.9 8.1 54.1c7.7 16.1 19.4 28 32 36.9c22.5 16.1 52.1 25.4 75.6 32.8c0 0 0 0 0 0l3.7 1.2c27.2 8.6 46.8 15.4 59.2 25c5.5 4.2 8.4 8.2 10 12.2c1.6 4 2.8 10.4 1.1 20.9c-2.4 14.7-12.8 26.4-37.1 31l-12.4 2.3c24 7.2 54.3 16.3 76.9 32.9c1 .8 2.1 1.5 3.1 2.3c16.5-13.9 28.5-33.2 32.6-58.2c3.2-19.8 1.9-38.3-4.8-55.1c-6.7-16.8-17.8-29.4-30.2-39c-22.8-17.6-53.6-27.4-77.7-35l-1.4-.5c-27.4-8.7-47.8-15.3-61.5-25c-6.1-4.4-9.5-8.5-11.4-12.4c-1.8-3.7-3.2-9.3-2.3-18.5z" />
    </Icon>
);

export default Section;