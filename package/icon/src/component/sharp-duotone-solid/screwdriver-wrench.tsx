
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=sharp-duotone-solid screwdriver-wrench}
 * @preview ![screwdriver-wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmw5NiA5NkwyMzMuNCAzNzQuNiAyMTAuNyAzNTJsMjIuNi0yMi42IDguNC04LjQtNzMuNC03My40TDAgNDE2em03MC4xLThMMTA0IDM3NC4xIDEzNy45IDQwOCAxMDQgNDQxLjkgNzAuMSA0MDh6TTIyNCAxNDRjMCAuMyAwIC41IDAgLjhsOTcgOTcgOC40LTguNEwzNTIgMjEwLjdsMjIuNiAyMi42IDQ1LjEgNDUuMWM1NC0yMC44IDkyLjMtNzMuMSA5Mi4zLTEzNC40YzAtMTktMy43LTM3LjEtMTAuMy01My43TDQxNiAxNzZsLTgwIDAgMC04MCA4NS43LTg1LjdDNDA1LjEgMy43IDM4NyAwIDM2OCAwQzI4OC41IDAgMjI0IDY0LjUgMjI0IDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE1OC4xIDE5MkwyODcgMzIxbC0zMSAzMUw0MTYgNTEybDk2LTk2TDM1MiAyNTZsLTMxIDMxLTEyOS0xMjlMMTkyIDk2IDY0IDAgMCA2NCA5NiAxOTJsNjIuMSAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l96 96L233.4 374.6 210.7 352l22.6-22.6 8.4-8.4-73.4-73.4L0 416zm70.1-8L104 374.1 137.9 408 104 441.9 70.1 408zM224 144c0 .3 0 .5 0 .8l97 97 8.4-8.4L352 210.7l22.6 22.6 45.1 45.1c54-20.8 92.3-73.1 92.3-134.4c0-19-3.7-37.1-10.3-53.7L416 176l-80 0 0-80 85.7-85.7C405.1 3.7 387 0 368 0C288.5 0 224 64.5 224 144z" />
            <path d="M158.1 192L287 321l-31 31L416 512l96-96L352 256l-31 31-129-129L192 96 64 0 0 64 96 192l62.1 0z" />
    </Icon>
);

export default ScrewdriverWrench;