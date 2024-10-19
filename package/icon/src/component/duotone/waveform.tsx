
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waveform` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waveform?s=duotone waveform}
 * @preview ![waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMGMxMiAwIDIyLjEgOC44IDIzLjggMjAuN2w0MiAzMDQuNEw0MjQuMyA4NC4yYzEuOS0xMS43IDEyLTIwLjMgMjMuOS0yMC4yczIxLjkgOC45IDIzLjYgMjAuNmwyOC4yIDE5Ny4zIDIwLjUtMTAyLjZjMi4yLTEwLjggMTEuMy0xOC43IDIyLjMtMTkuM3MyMC45IDYuNCAyNC4yIDE2LjlMNTkzLjcgMjY0bDIyLjMgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtNDAgMGMtMTAuNSAwLTE5LjgtNi45LTIyLjktMTYuOWwtNC4xLTEzLjQtMjkuNCAxNDdjLTIuMyAxMS41LTEyLjUgMTkuNi0yNC4yIDE5LjNzLTIxLjQtOS0yMy4xLTIwLjZMNDQ2LjcgMjQ4LjNsLTM5IDI0My41Yy0xLjkgMTEuNy0xMi4xIDIwLjMtMjQgMjAuMnMtMjEuOS04LjktMjMuNS0yMC43TDMyMCAxOTkuNiAyNzkuOCA0OTEuM2MtMS42IDExLjgtMTEuNiAyMC42LTIzLjUgMjAuN3MtMjIuMS04LjUtMjQtMjAuMmwtMzktMjQzLjVMMTY3LjggNDI3LjRjLTEuNyAxMS42LTExLjQgMjAuMy0yMy4xIDIwLjZzLTIxLjktNy44LTI0LjItMTkuM2wtMjkuNC0xNDctNC4xIDEzLjRDODMuOCAzMDUuMSA3NC41IDMxMiA2NCAzMTJsLTQwIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRsMjIuMyAwIDI2LjgtODcuMWMzLjItMTAuNSAxMy4yLTE3LjUgMjQuMi0xNi45czIwLjIgOC41IDIyLjMgMTkuM2wyMC41IDEwMi42TDE2OC4yIDg0LjZjMS43LTExLjcgMTEuNy0yMC41IDIzLjYtMjAuNnMyMiA4LjUgMjMuOSAyMC4ybDM4LjUgMjQwLjkgNDItMzA0LjRDMjk3LjkgOC44IDMwOCAwIDMyMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Waveform: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 0c12 0 22.1 8.8 23.8 20.7l42 304.4L424.3 84.2c1.9-11.7 12-20.3 23.9-20.2s21.9 8.9 23.6 20.6l28.2 197.3 20.5-102.6c2.2-10.8 11.3-18.7 22.3-19.3s20.9 6.4 24.2 16.9L593.7 264l22.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-10.5 0-19.8-6.9-22.9-16.9l-4.1-13.4-29.4 147c-2.3 11.5-12.5 19.6-24.2 19.3s-21.4-9-23.1-20.6L446.7 248.3l-39 243.5c-1.9 11.7-12.1 20.3-24 20.2s-21.9-8.9-23.5-20.7L320 199.6 279.8 491.3c-1.6 11.8-11.6 20.6-23.5 20.7s-22.1-8.5-24-20.2l-39-243.5L167.8 427.4c-1.7 11.6-11.4 20.3-23.1 20.6s-21.9-7.8-24.2-19.3l-29.4-147-4.1 13.4C83.8 305.1 74.5 312 64 312l-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l22.3 0 26.8-87.1c3.2-10.5 13.2-17.5 24.2-16.9s20.2 8.5 22.3 19.3l20.5 102.6L168.2 84.6c1.7-11.7 11.7-20.5 23.6-20.6s22 8.5 23.9 20.2l38.5 240.9 42-304.4C297.9 8.8 308 0 320 0z" />
    </Icon>
);

export default Waveform;