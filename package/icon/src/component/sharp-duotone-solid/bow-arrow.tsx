
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=sharp-duotone-solid bow-arrow}
 * @preview ![bow-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjcgMTQ0bDIyLjYgMjIuNmM0Ny43IDQ3LjcgOTUuNCA5NS40IDE0MyAxNDNjMTEuMyAxMS4zIDIyLjYgMjIuNiAzMy45IDMzLjlsMTQzIDE0M0wzNjggNTA5LjMgNDEzLjMgNDY0IDQwMSA0NTEuN2MyOC4xLTM4IDQ3LTgxLjYgNDctMTMxLjdjMC01OC0xOS42LTExNi01OC44LTE2My4zYy0xNS4yIDE1LjItMzAuMyAzMC4zLTQ1LjUgNDUuNUMzNzAuNiAyMzYuOCAzODQgMjc4LjQgMzg0IDMyMGMwIDI5LjktMTAuMiA1OC4zLTI4LjkgODUuOGMtMzUuOC0zNS44LTcxLjYtNzEuNi0xMDcuNS0xMDcuNWMtMTEuMy0xMS4zLTIyLjYtMjIuNi0zMy45LTMzLjlMMTA2LjIgMTU2LjlDMTMzLjcgMTM4LjIgMTYyLjEgMTI4IDE5MiAxMjhjNDEuNiAwIDgzLjIgMTMuNCAxMTcuNyA0MC4zbDQ1LjUtNDUuNUMzMDggODMuNiAyNTAgNjQgMTkyIDY0Yy01MC4xIDAtOTMuNyAxOC45LTEzMS43IDQ3TDQ4IDk4LjcgMi43IDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAwTDM1MiAzMmw0NyA0N3MwIDAgMCAwTDIxMy43IDI2NC40bDMzLjkgMzMuOUw0MzMgMTEzczAgMCAwIDBsNDcgNDdMNTEyIDB6TTIwMi4zIDM0My42bC0zMy45LTMzLjktMTguNSAxOC41TDk2IDMxMiAwIDQwOGw4MCAyNCAyNCA4MCA5Ni05Ni0xNi4yLTUzLjkgMTguNS0xOC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 144l22.6 22.6c47.7 47.7 95.4 95.4 143 143c11.3 11.3 22.6 22.6 33.9 33.9l143 143L368 509.3 413.3 464 401 451.7c28.1-38 47-81.6 47-131.7c0-58-19.6-116-58.8-163.3c-15.2 15.2-30.3 30.3-45.5 45.5C370.6 236.8 384 278.4 384 320c0 29.9-10.2 58.3-28.9 85.8c-35.8-35.8-71.6-71.6-107.5-107.5c-11.3-11.3-22.6-22.6-33.9-33.9L106.2 156.9C133.7 138.2 162.1 128 192 128c41.6 0 83.2 13.4 117.7 40.3l45.5-45.5C308 83.6 250 64 192 64c-50.1 0-93.7 18.9-131.7 47L48 98.7 2.7 144z" />
            <path d="M512 0L352 32l47 47s0 0 0 0L213.7 264.4l33.9 33.9L433 113s0 0 0 0l47 47L512 0zM202.3 343.6l-33.9-33.9-18.5 18.5L96 312 0 408l80 24 24 80 96-96-16.2-53.9 18.5-18.5z" />
    </Icon>
);

export default BowArrow;