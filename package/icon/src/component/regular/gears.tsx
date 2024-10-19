
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gears` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gears?s=regular gears}
 * @preview ![gears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAuMDEzIDE0NEMxNDIuMzM5IDE0NCAxMjguMDEzIDE1OC4zMjYgMTI4LjAxMyAxNzZDMTI4LjAxMyAxOTMuNjcyIDE0Mi4zMzkgMjA4IDE2MC4wMTMgMjA4UzE5Mi4wMTMgMTkzLjY3MiAxOTIuMDEzIDE3NkMxOTIuMDEzIDE1OC4zMjYgMTc3LjY4NiAxNDQgMTYwLjAxMyAxNDRaTTMwNy4xNTMgMTk4Ljc4MUwyOTAuNDgxIDE4OS4xNTZDMjkwLjk4MSAxODQuNjg4IDI5MS4yMTYgMTgwLjM3NSAyOTEuMjE2IDE3Ni4xODhDMjkxLjIxNiAxNzEuODEyIDI5MC45NjYgMTY3LjQwNiAyOTAuNDY2IDE2Mi44NzVMMzA3LjE4NCAxNTMuMjE5QzMxNy42NTMgMTQ3LjEyNSAzMjIuNTEzIDEzNC41IDMxOC43NDcgMTIzLjE4OEMzMTEuNTU5IDEwMS41MzEgMzAwLjI2MyA4MS45MzggMjg1LjE1MyA2NC44NzVDMjc3LjM4OCA1Ni4xNTYgMjYzLjM4OCA1NC4wNjIgMjUzLjM3MiA1OS45MzhMMjM2LjA5MSA2OS45MDZDMjI5LjA5MSA2NC44NzUgMjIxLjY2OSA2MC41OTQgMjEzLjg1NiA1Ny4wNjJWMzcuMTg4QzIxMy44NTYgMjUuMTg4IDIwNS40MzQgMTQuNjU2IDE5My43MzEgMTIuMTU2QzE3MS4yMzEgNy40MDYgMTQ4Ljg3MiA3LjQwNiAxMjYuMjE2IDEyLjE1NkMxMTQuNTkxIDE0LjY1NiAxMDYuMTUzIDI1LjE4OCAxMDYuMTUzIDM3LjE4OFY1Ny4wNjNDOTguMzU2IDYwLjU5NCA5MC45MTkgNjQuODc1IDgzLjkzNCA2OS45MDZMNjYuNzE2IDU5Ljk2OUM1Ni41MjggNTQuMDMxIDQyLjU0NCA1Ni4yMTkgMzQuODI1IDY0LjkzN0MxOS43NjMgODEuOTM3IDguNDY2IDEwMS41MzEgMS4yOTQgMTIzLjE1NkMtMi40ODcgMTM0LjUgMi4zNzIgMTQ3LjEyNSAxMi44NzIgMTUzLjIxOUwyOS41NTkgMTYyLjg3NUMyOS4wNTkgMTY3LjQwNiAyOC44MDkgMTcxLjgxMiAyOC44MDkgMTc2LjE4N0MyOC44MDkgMTgwLjM3NSAyOS4wNDQgMTg0LjY4NyAyOS41NDQgMTg5LjE1NkwxMi45MTkgMTk4Ljc1QzIuMzcyIDIwNC43ODEgLTIuNTE5IDIxNy40MzggMS4yNzggMjI4LjgxMkM4LjQ4MSAyNTAuNDY5IDE5Ljc2MyAyNzAuMDYyIDM0Ljc0NyAyODYuOTM3QzQyLjQzNCAyOTUuNzgxIDU2LjU3NSAyOTcuODc1IDY2LjY1MyAyOTIuMDk0TDgzLjYzOCAyODIuMjgxQzkwLjY4NCAyODcuMzc1IDk4LjIxNiAyOTEuNzE5IDEwNi4xNTMgMjk1LjMxMlYzMTQuODEyQzEwNi4xNTMgMzI2LjgxMiAxMTQuNTkxIDMzNy4zNDQgMTI2LjI5NCAzMzkuODQ0QzEzNy41NDQgMzQyLjIxOSAxNDguODg4IDM0My40MDYgMTYwLjAxMyAzNDMuNDA2UzE4Mi40ODEgMzQyLjIxOSAxOTMuODA5IDMzOS44NDRDMjA1LjQzNCAzMzcuMzQ0IDIxMy44NTYgMzI2LjgxMiAyMTMuODU2IDMxNC44MTJWMjk1LjMxMkMyMjEuNzk0IDI5MS43MTkgMjI5LjMyNSAyODcuMzc1IDIzNi4zNzIgMjgyLjI4MUwyNTMuMzA5IDI5Mi4wMzFDMjYzLjUxMyAyOTcuOTY5IDI3Ny41NDQgMjk1Ljc1IDI4NS4xODQgMjg3LjA2MkMzMDAuMjYzIDI3MC4wNjIgMzExLjU0NCAyNTAuNDY5IDMxOC43MzEgMjI4Ljg0NEMzMjIuNTI4IDIxNy40NjkgMzE3LjY2OSAyMDQuODEyIDMwNy4xNTMgMTk4Ljc4MVpNMjQ4LjAxMyAxNzZDMjQ4LjAxMyAxODcuMDc4IDI0NS43MzkgMTk3LjU3NCAyNDIuMDAzIDIwNy4zMzhMMjc2LjU0NCAyMjcuMjgxQzI3Mi44MjUgMjM1Ljc4MSAyNjguMiAyNDMuODEzIDI2Mi43IDI1MS4yODFMMjI3Ljk5NSAyMzEuMjQ2QzIxNC42MzggMjQ3LjY2IDE5NS42OTIgMjU5LjEzMyAxNzMuODU2IDI2Mi42MDVWMzAyLjU5NEMxNjQuNTc1IDMwMy43MTkgMTU1LjQ1IDMwMy43MTkgMTQ2LjE2OSAzMDIuNTk0VjI2Mi42MDVDMTI0LjMzMyAyNTkuMTMzIDEwNS4zODggMjQ3LjY2IDkyLjAzIDIzMS4yNDZMNTcuMzI1IDI1MS4yODFDNTEuODU2IDI0My44MTMgNDcuMjMxIDIzNS43ODEgNDMuNDgxIDIyNy4yODFMNzguMDIyIDIwNy4zMzhDNzQuMjg2IDE5Ny41NzQgNzIuMDEzIDE4Ny4wNzggNzIuMDEzIDE3NlM3NC4yODYgMTU0LjQyNiA3OC4wMjIgMTQ0LjY2Mkw0My40ODEgMTI0LjcxOUM0Ny4yIDExNi4yMTkgNTEuODI1IDEwOC4xODcgNTcuMzI1IDEwMC43MTlMOTIuMDMgMTIwLjc1NEMxMDUuMzg5IDEwNC4zNCAxMjQuMzMzIDkyLjg2NyAxNDYuMTY5IDg5LjM5NVY0OS40MDZDMTU1LjQ4MSA0OC4yODEgMTY0LjYwNiA0OC4yODEgMTczLjg1NiA0OS40MDZWODkuMzk1QzE5NS42OTYgOTIuODY5IDIxNC42NDUgMTA0LjM0MiAyMjguMDAzIDEyMC43NjJMMjYyLjczMSAxMDAuNzE5QzI2OC4yIDEwOC4yMTkgMjcyLjgyNSAxMTYuMjUgMjc2LjU0NCAxMjQuNzE5TDI0Mi4wMDMgMTQ0LjY2MkMyNDUuNzM5IDE1NC40MjYgMjQ4LjAxMyAxNjQuOTIyIDI0OC4wMTMgMTc2Wk00NjQuMDEzIDMyMC4wMDZDNDQ2LjM0MSAzMjAuMDA2IDQzMi4wMTMgMzM0LjMzMiA0MzIuMDEzIDM1Mi4wMDZTNDQ2LjM0MSAzODQuMDA2IDQ2NC4wMTMgMzg0LjAwNkM0ODEuNjg2IDM4NC4wMDYgNDk2LjAxMyAzNjkuNjggNDk2LjAxMyAzNTIuMDA2UzQ4MS42ODYgMzIwLjAwNiA0NjQuMDEzIDMyMC4wMDZaTTYyNy44NTYgMzE4LjIwOUM2MjUuMzU2IDMwNi41ODQgNjE0LjgyNSAyOTguMTQ2IDYwMi44MjUgMjk4LjE0Nkg1ODIuOTVDNTc5LjQxOSAyOTAuMzUgNTc1LjEzOCAyODIuOTEyIDU3MC4xMDYgMjc1LjkyOEw1ODAuMDQ0IDI1OC43MDlDNTg1Ljk4MSAyNDguNTIxIDU4My43OTQgMjM0LjUzNyA1NzUuMDc1IDIyNi44MThDNTU4LjA3NSAyMTEuNzU2IDUzOC40ODEgMjAwLjQ1OSA1MTYuODU2IDE5My4yODdDNTA1LjUxMyAxODkuNTA2IDQ5Mi44ODggMTk0LjM2NSA0ODYuNzk0IDIwNC44NjVMNDc3LjEzOCAyMjEuNTUzQzQ3Mi42MDYgMjIxLjA1MyA0NjguMiAyMjAuODAzIDQ2My44MjUgMjIwLjgwM0M0NTkuNjM4IDIyMC44MDMgNDU1LjMyNSAyMjEuMDM3IDQ1MC44NTYgMjIxLjUzN0w0NDEuMjYzIDIwNC45MTJDNDM1LjIzMSAxOTQuMzY1IDQyMi41NzUgMTg5LjQ3NSA0MTEuMiAxOTMuMjcxQzM4OS41NDQgMjAwLjQ3NSAzNjkuOTUgMjExLjc1NiAzNTMuMDc1IDIyNi43NEMzNDQuMjMxIDIzNC40MjggMzQyLjEzOCAyNDguNTY4IDM0Ny45MTkgMjU4LjY0NkwzNTcuNzMxIDI3NS42MzFDMzUyLjYzOCAyODIuNjc4IDM0OC4yOTQgMjkwLjIwOSAzNDQuNyAyOTguMTQ2SDMyNS4yQzMxMy4yIDI5OC4xNDYgMzAyLjY2OSAzMDYuNTg0IDMwMC4xNjkgMzE4LjI4N0MyOTcuNzk0IDMyOS41MzcgMjk2LjYwNiAzNDAuODgxIDI5Ni42MDYgMzUyLjAwNlMyOTcuNzk0IDM3NC40NzUgMzAwLjE2OSAzODUuODAzQzMwMi42NjkgMzk3LjQyOCAzMTMuMiA0MDUuODQ4IDMyNS4yIDQwNS44NDhIMzQ0LjdDMzQ4LjI5NCA0MTMuNzg1IDM1Mi42MzggNDIxLjMxNiAzNTcuNzMxIDQyOC4zNjNMMzQ3Ljk4MSA0NDUuMzAxQzM0Mi4wNDQgNDU1LjUwNCAzNDQuMjYzIDQ2OS41MzUgMzUyLjk1IDQ3Ny4xNzZDMzY5Ljk1IDQ5Mi4yNTQgMzg5LjU0NCA1MDMuNTM1IDQxMS4xNjkgNTEwLjcyM0M0MjIuNTQ0IDUxNC41MiA0MzUuMiA1MDkuNjYgNDQxLjIzMSA0OTkuMTQ1TDQ1MC44NTYgNDgyLjQ3M0M0NTUuMzI1IDQ4Mi45NzMgNDU5LjYzOCA0ODMuMjA3IDQ2My44MjUgNDgzLjIwN0M0NjguMiA0ODMuMjA3IDQ3Mi42MDYgNDgyLjk1NyA0NzcuMTM4IDQ4Mi40NTdMNDg2Ljc5NCA0OTkuMTc2QzQ5Mi44ODggNTA5LjY0NSA1MDUuNTEzIDUxNC41MDQgNTE2LjgyNSA1MTAuNzM4QzUzOC40ODEgNTAzLjU1MSA1NTguMDc1IDQ5Mi4yNTQgNTc1LjEzOCA0NzcuMTQ1QzU4My44NTYgNDY5LjM3OSA1ODUuOTUgNDU1LjM3OSA1ODAuMDc1IDQ0NS4zNjNMNTcwLjEwNiA0MjguMDgyQzU3NS4xMzggNDIxLjA4MiA1NzkuNDE5IDQxMy42NiA1ODIuOTUgNDA1Ljg0OEg2MDIuODI1QzYxNC44MjUgNDA1Ljg0OCA2MjUuMzU2IDM5Ny40MjggNjI3Ljg1NiAzODUuNzI1QzYzMi42MDYgMzYzLjIyNSA2MzIuNjA2IDM0MC44NjUgNjI3Ljg1NiAzMTguMjA5Wk01OTAuNjA2IDM2NS44NUg1NTAuNjE4QzU0Ny4xNDMgMzg3LjY4OSA1MzUuNjcxIDQwNi42MzcgNTE5LjI1MSA0MTkuOTk0TDUzOS4yOTQgNDU0LjcyM0M1MzEuNzk0IDQ2MC4xOTEgNTIzLjc2MyA0NjQuODE2IDUxNS4yOTQgNDY4LjUzNUw0OTUuMzUgNDMzLjk5NEM0ODUuNTg3IDQzNy43MyA0NzUuMDkxIDQ0MC4wMDQgNDY0LjAxMyA0NDAuMDA0UzQ0Mi40MzggNDM3LjczIDQzMi42NzUgNDMzLjk5NEw0MTIuNzMxIDQ2OC41MzVDNDA0LjIzMSA0NjQuODE2IDM5Ni4yIDQ2MC4xOTEgMzg4LjczMSA0NTQuNjkxTDQwOC43NjYgNDE5Ljk4NkMzOTIuMzUyIDQwNi42MjkgMzgwLjg4IDM4Ny42ODYgMzc3LjQwNyAzNjUuODVIMzM3LjQxOUMzMzYuMjk0IDM1Ni41NjggMzM2LjI5NCAzNDcuNDQzIDMzNy40MTkgMzM4LjE2MkgzNzcuNDA3QzM4MC44OCAzMTYuMzI2IDM5Mi4zNTIgMjk3LjM4MSA0MDguNzY2IDI4NC4wMjNMMzg4LjczMSAyNDkuMzE4QzM5Ni4yIDI0My44NSA0MDQuMjMxIDIzOS4yMjUgNDEyLjczMSAyMzUuNDc1TDQzMi42NzUgMjcwLjAxNkM0NDIuNDM4IDI2Ni4yNzkgNDUyLjkzNCAyNjQuMDA2IDQ2NC4wMTMgMjY0LjAwNlM0ODUuNTg3IDI2Ni4yNzkgNDk1LjM1IDI3MC4wMTZMNTE1LjI5NCAyMzUuNDc1QzUyMy43OTQgMjM5LjE5MyA1MzEuODI1IDI0My44MTggNTM5LjI5NCAyNDkuMzE4TDUxOS4yNTkgMjg0LjAyM0M1MzUuNjczIDI5Ny4zODMgNTQ3LjE0NSAzMTYuMzI2IDU1MC42MTggMzM4LjE2Mkg1OTAuNjA2QzU5MS43MzEgMzQ3LjQ3NSA1OTEuNzMxIDM1Ni42IDU5MC42MDYgMzY1Ljg1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M160.013 144C142.339 144 128.013 158.326 128.013 176C128.013 193.672 142.339 208 160.013 208S192.013 193.672 192.013 176C192.013 158.326 177.686 144 160.013 144ZM307.153 198.781L290.481 189.156C290.981 184.688 291.216 180.375 291.216 176.188C291.216 171.812 290.966 167.406 290.466 162.875L307.184 153.219C317.653 147.125 322.513 134.5 318.747 123.188C311.559 101.531 300.263 81.938 285.153 64.875C277.388 56.156 263.388 54.062 253.372 59.938L236.091 69.906C229.091 64.875 221.669 60.594 213.856 57.062V37.188C213.856 25.188 205.434 14.656 193.731 12.156C171.231 7.406 148.872 7.406 126.216 12.156C114.591 14.656 106.153 25.188 106.153 37.188V57.063C98.356 60.594 90.919 64.875 83.934 69.906L66.716 59.969C56.528 54.031 42.544 56.219 34.825 64.937C19.763 81.937 8.466 101.531 1.294 123.156C-2.487 134.5 2.372 147.125 12.872 153.219L29.559 162.875C29.059 167.406 28.809 171.812 28.809 176.187C28.809 180.375 29.044 184.687 29.544 189.156L12.919 198.75C2.372 204.781 -2.519 217.438 1.278 228.812C8.481 250.469 19.763 270.062 34.747 286.937C42.434 295.781 56.575 297.875 66.653 292.094L83.638 282.281C90.684 287.375 98.216 291.719 106.153 295.312V314.812C106.153 326.812 114.591 337.344 126.294 339.844C137.544 342.219 148.888 343.406 160.013 343.406S182.481 342.219 193.809 339.844C205.434 337.344 213.856 326.812 213.856 314.812V295.312C221.794 291.719 229.325 287.375 236.372 282.281L253.309 292.031C263.513 297.969 277.544 295.75 285.184 287.062C300.263 270.062 311.544 250.469 318.731 228.844C322.528 217.469 317.669 204.812 307.153 198.781ZM248.013 176C248.013 187.078 245.739 197.574 242.003 207.338L276.544 227.281C272.825 235.781 268.2 243.813 262.7 251.281L227.995 231.246C214.638 247.66 195.692 259.133 173.856 262.605V302.594C164.575 303.719 155.45 303.719 146.169 302.594V262.605C124.333 259.133 105.388 247.66 92.03 231.246L57.325 251.281C51.856 243.813 47.231 235.781 43.481 227.281L78.022 207.338C74.286 197.574 72.013 187.078 72.013 176S74.286 154.426 78.022 144.662L43.481 124.719C47.2 116.219 51.825 108.187 57.325 100.719L92.03 120.754C105.389 104.34 124.333 92.867 146.169 89.395V49.406C155.481 48.281 164.606 48.281 173.856 49.406V89.395C195.696 92.869 214.645 104.342 228.003 120.762L262.731 100.719C268.2 108.219 272.825 116.25 276.544 124.719L242.003 144.662C245.739 154.426 248.013 164.922 248.013 176ZM464.013 320.006C446.341 320.006 432.013 334.332 432.013 352.006S446.341 384.006 464.013 384.006C481.686 384.006 496.013 369.68 496.013 352.006S481.686 320.006 464.013 320.006ZM627.856 318.209C625.356 306.584 614.825 298.146 602.825 298.146H582.95C579.419 290.35 575.138 282.912 570.106 275.928L580.044 258.709C585.981 248.521 583.794 234.537 575.075 226.818C558.075 211.756 538.481 200.459 516.856 193.287C505.513 189.506 492.888 194.365 486.794 204.865L477.138 221.553C472.606 221.053 468.2 220.803 463.825 220.803C459.638 220.803 455.325 221.037 450.856 221.537L441.263 204.912C435.231 194.365 422.575 189.475 411.2 193.271C389.544 200.475 369.95 211.756 353.075 226.74C344.231 234.428 342.138 248.568 347.919 258.646L357.731 275.631C352.638 282.678 348.294 290.209 344.7 298.146H325.2C313.2 298.146 302.669 306.584 300.169 318.287C297.794 329.537 296.606 340.881 296.606 352.006S297.794 374.475 300.169 385.803C302.669 397.428 313.2 405.848 325.2 405.848H344.7C348.294 413.785 352.638 421.316 357.731 428.363L347.981 445.301C342.044 455.504 344.263 469.535 352.95 477.176C369.95 492.254 389.544 503.535 411.169 510.723C422.544 514.52 435.2 509.66 441.231 499.145L450.856 482.473C455.325 482.973 459.638 483.207 463.825 483.207C468.2 483.207 472.606 482.957 477.138 482.457L486.794 499.176C492.888 509.645 505.513 514.504 516.825 510.738C538.481 503.551 558.075 492.254 575.138 477.145C583.856 469.379 585.95 455.379 580.075 445.363L570.106 428.082C575.138 421.082 579.419 413.66 582.95 405.848H602.825C614.825 405.848 625.356 397.428 627.856 385.725C632.606 363.225 632.606 340.865 627.856 318.209ZM590.606 365.85H550.618C547.143 387.689 535.671 406.637 519.251 419.994L539.294 454.723C531.794 460.191 523.763 464.816 515.294 468.535L495.35 433.994C485.587 437.73 475.091 440.004 464.013 440.004S442.438 437.73 432.675 433.994L412.731 468.535C404.231 464.816 396.2 460.191 388.731 454.691L408.766 419.986C392.352 406.629 380.88 387.686 377.407 365.85H337.419C336.294 356.568 336.294 347.443 337.419 338.162H377.407C380.88 316.326 392.352 297.381 408.766 284.023L388.731 249.318C396.2 243.85 404.231 239.225 412.731 235.475L432.675 270.016C442.438 266.279 452.934 264.006 464.013 264.006S485.587 266.279 495.35 270.016L515.294 235.475C523.794 239.193 531.825 243.818 539.294 249.318L519.259 284.023C535.673 297.383 547.145 316.326 550.618 338.162H590.606C591.731 347.475 591.731 356.6 590.606 365.85Z" />
        </Icon>
    </>
}