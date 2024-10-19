
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `earth-americas` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/earth-americas?s=thin earth-americas}
 * @preview ![earth-americas](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE4IDE2IDI1NlMxMjMuNDYxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgyIDQ5NiAyNTZTMzg4LjUzOSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0zMzUuMDE2IDI5MS42ODhDMzI3LjQwNiAyODQuMTU2IDMxNy4zNTkgMjgwIDMwNi43MzQgMjgwSDI0Mi40MjJDMjM5Ljg3NSAyNzcuNzgxIDIzNS45MzggMjcyLjM3NSAyMzMuMjAzIDI2OC42MjVDMjI1LjQzOCAyNTguMDMxIDIxOC4xMDkgMjQ4IDIwOC4wNDcgMjQ4QzE5OC44OTEgMjQ4IDE4OS41OTQgMjQ1LjgxMiAxODEuMjk3IDI0MS43NUwxNzAuMTI1IDIzNi4wNjJDMTY4Ljc5NyAyMzUuNDA2IDE2Ny45NjkgMjM0LjA5NCAxNjcuOTY5IDIzMi42MjVDMTY3Ljk2OSAyMzAuOTA2IDE2OS4wNjIgMjI5LjM3NSAxNzAuNzM0IDIyOC44NDRMMjAxLjc2NiAyMTguNUMyMDQuNTk0IDIxNy41NjIgMjA3LjUzMSAyMTguMTU2IDIwOS43MDMgMjIwLjAzMUwyMTguOTM4IDIyOC4wNjNDMjIxLjg0NCAyMzAuNTYyIDIyNS42ODggMjMyIDIyOS40ODQgMjMySDIzNS4wNDdDMjQwLjYyNSAyMzIgMjQ1LjcwMyAyMjkuMTU2IDI0OC42NDEgMjI0LjQzOEMyNTEuNTc4IDIxOS42ODggMjUxLjg0NCAyMTMuODQ0IDI0OS4zNDQgMjA4Ljc4MUwyMzMuNzE5IDE3Ny42MjVMMjQzLjY1NiAxNjhIMjUyLjczNEMyNTYuOTUzIDE2OCAyNjEuMDc4IDE2Ni4yNSAyNjMuOTUzIDE2My4yODFMMjcxLjkzNyAxNTUuMjgxQzI3NC45ODQgMTUyLjI4MSAyNzYuNjU2IDE0OC4yNSAyNzYuNjU2IDE0NFMyNzQuOTg0IDEzNS43MTkgMjcyLjAzMSAxMzIuODEyTDI2Ny4zNTkgMTI4TDI4Mi4zOTEgMTEzQzI5MS42MDkgMTAzLjY1NiAyOTEuNjA5IDg4LjQ2OSAyODIuMzU5IDc5LjA5NEwyNjEuNjQxIDU4LjM0NEMyNTguNTE2IDU1LjIxOSAyNTMuNDUzIDU1LjIxOSAyNTAuMzI4IDU4LjM0NFMyNDcuMjAzIDY2LjUzMSAyNTAuMzI4IDY5LjY1NkwyNzEuMDE2IDkwLjM3NUMyNzQuMTA5IDkzLjUgMjc0LjEwOSA5OC42MjUgMjcxLjEwOSAxMDEuNjU2TDI1Ni4wNDcgMTE2LjcxOUMyNTMgMTE5LjcxOSAyNTEuMzI4IDEyMy43NSAyNTEuMzI4IDEyOFMyNTMgMTM2LjI4MSAyNTUuOTUzIDEzOS4xODhMMjYwLjY0MSAxNDMuOTY5TDI1Mi43MzQgMTUySDI0My42NTZDMjM5LjUzMSAxNTIgMjM1LjU5NCAxNTMuNTk0IDIzMi41MTYgMTU2LjVMMjIyLjQyMiAxNjYuMjgxQzIxNy43MTkgMTcxLjEyNSAyMTYuNDY5IDE3OC41IDIxOS40MjIgMTg0Ljg0NEwyMzUuMDQ3IDIxNkwyMjkuNDA2IDIxNS45NjlMMjIwLjE3MiAyMDcuOTM4QzIxMy43MDMgMjAyLjQwNiAyMDUuMDE2IDIwMC42NTYgMTk2Ljc5NyAyMDMuMjgxTDE2NS43MDMgMjEzLjY1NkMxNTcuNDg0IDIxNi4zNDQgMTUxLjk2OSAyMjMuOTY5IDE1MS45NjkgMjMyLjYyNUMxNTEuOTY5IDI0MC4yODEgMTU2LjI1IDI0Ny4wOTQgMTYyLjk4NCAyNTAuMzc1TDE3NC4xNDEgMjU2LjA2MkMxODQuNjcyIDI2MS4yMTkgMTk2LjMyOCAyNjMuOTY5IDIwNy41NDcgMjYzLjk2OUgyMDcuNzM0QzIxMC41NDcgMjY0Ljc1IDIxNi44NzUgMjczLjQzNyAyMjAuMjgxIDI3OC4wOTRDMjI1LjYwOSAyODUuMzc1IDIzMC42NDEgMjkyLjI1IDIzNi40MjIgMjk1LjE1NkMyMzcuNTMxIDI5NS43MTkgMjM4Ljc2NiAyOTYgMjQwLjAxNiAyOTZIMzA2LjczNEMzMTMuMTA5IDI5NiAzMTkuMTU2IDI5OC41IDMyMy43MzQgMzAzLjAzMUwzMzcuMzc1IDMxNi42MjVDMzQxLjY3MiAzMjAuOTY5IDM0NC4wMzEgMzI2LjY1NiAzNDQuMDMxIDMzMi42MjVDMzQ0LjAzMSAzNDIuNzgxIDMzOS44OTEgMzUyLjc1IDMzMi43ODEgMzU5Ljg3NUMzMjguNzUgMzYzLjc4MSAzMjQuNzE5IDM2Ny44MTMgMzIxLjM0NCAzNzEuMTg4QzMxNy40MzcgMzc1LjA2MyAzMTQuNTYyIDM4MCAzMTMuMDMxIDM4NS42MjVMMzEyLjAxNiAzODkuNjU2QzMxMS4wMzEgMzkzLjcxOSAzMTAuMDQ3IDM5Ny43ODEgMzA4LjU2MiA0MDEuNzE5TDI5NC41IDQzOS40MDZDMjkyLjk1MyA0NDMuNTMxIDI5NS4wNjIgNDQ4LjEyNSAyOTkuMjAzIDQ0OS42ODhDMzAwLjEyNSA0NTAuMDMxIDMwMS4wNjIgNDUwLjE4OCAzMDIgNDUwLjE4OEMzMDUuMjUgNDUwLjE4OCAzMDguMjk3IDQ0OC4xODggMzA5LjUgNDQ0Ljk2OUwzMjMuNTQ3IDQwNy4zMTNDMzI1LjI1IDQwMi44MTMgMzI2LjQwNiAzOTguMTU2IDMyNy41NjIgMzkzLjVMMzI4LjUgMzg5Ljc1QzMyOS4yNjYgMzg2LjkzOCAzMzAuNjcyIDM4NC40NjkgMzMyLjYyNSAzODIuNTMxQzMzNS45NjkgMzc5LjE4OCAzMzkuOTM3IDM3NS4yMTkgMzQ0LjAxNiAzNzEuMjgxQzM1NC4xODcgMzYxLjA2MyAzNjAuMDMxIDM0Ni45NjkgMzYwLjAzMSAzMzIuNjI1QzM2MC4wMzEgMzIyLjQwNiAzNTYuMDMxIDMxMi43MTkgMzQ4LjcwMyAzMDUuMzQ0TDMzNS4wMTYgMjkxLjY4OFpNMTk3LjE3MiA5MS41MzFDMjAwLjYyNSA5My4yNSAyMDQuMzI4IDk0LjEyNSAyMDguMDE2IDk0LjEyNUMyMTIuMzc1IDk0LjEyNSAyMTYuNzM0IDkyLjkwNiAyMjAuNjA5IDkwLjUzMUMyMjcuNzY2IDg2LjEyNSAyMzIuMDMxIDc4LjUgMjMyLjAzMSA3MC4xMjVWNjYuODc1QzIzMi4wMzEgNjIuNDY5IDIyOC40NTMgNTguODc1IDIyNC4wMzEgNTguODc1UzIxNi4wMzEgNjIuNDY5IDIxNi4wMzEgNjYuODc1VjcwLjEyNUMyMTYuMDMxIDc0LjEyNSAyMTMuMzc1IDc2LjE4OCAyMTIuMjM0IDc2LjkwNkMyMTEuMDYyIDc3LjU5NCAyMDggNzkuMDMxIDIwNC4zNTkgNzcuMjE5TDE5MC4wNjIgNzAuMDYyQzE4Ni4xODggNjguMTU2IDE4MS4zMjggNjkuNzE5IDE3OS4zMjggNzMuNjI1QzE3Ny4zNTkgNzcuNTk0IDE3OC45NTMgODIuNDA2IDE4Mi45MDYgODQuMzc1TDE5Ny4xNzIgOTEuNTMxWk0yMzkuMDQ3IDM3MS43NUMyMzQuNTk0IDM2Ny4yNSAyMzIuMDMxIDM2MS4wNjIgMjMyLjAzMSAzNTQuNzVWMzIyLjc1QzIzMi4wMzEgMzA4LjE4OCAyMjQuMTQxIDI5NC43ODEgMjExLjQ1MyAyODcuNzVDMTk2Ljk2OSAyNzkuNzE5IDE3Ni40MDYgMjY4LjY1NiAxNjIuMzQ0IDI2MS40NjlDMTUxLjY1NiAyNTYuMTI1IDE0MS41NzggMjQ5LjIxOSAxMzEuNjI1IDI0MC4xMjVDMTI1LjM0NCAyMzQuNTYyIDExOS43MTkgMjI4LjEyNSAxMTQuODc1IDIyMUMxMDYuOTM4IDIwOS4zMTIgOTUuMDMxIDE5MS43MTkgODUuNSAxNzcuNTMxQzgzLjAxNiAxNzMuODc1IDc4LjAzMSAxNzIuOTA2IDc0LjM5MSAxNzUuMzc1QzcwLjczNCAxNzcuODQ0IDY5Ljc1IDE4Mi44MTIgNzIuMjE5IDE4Ni40NjlDODEuNzgxIDIwMC42NTYgOTMuNjg4IDIxOC4zMTIgMTAxLjY0MSAyMzBDMTA3LjIwMyAyMzguMjE5IDExMy43MTkgMjQ1LjY1NiAxMjEuNjcyIDI1Mi44MTJDMTMxLjkzOCAyNjIuMDYyIDE0My4yMTkgMjY5LjgxMiAxNTUuMTI1IDI3NS43NUMxNjguOTY5IDI4Mi44NDQgMTg5LjM0NCAyOTMuNzgxIDIwMy42ODggMzAxLjc1QzIxMS4yOTcgMzA1Ljk2OSAyMTYuMDMxIDMxNCAyMTYuMDMxIDMyMi43NVYzNTQuNzVDMjE2LjAzMSAzNjUuMzc1IDIyMC4xNzIgMzc1LjQwNiAyMjcuNzAzIDM4My4wMzFDMjQyLjA5NCAzOTcuNDA2IDI0OS4yNjYgNDE4LjY1NiAyNDggNDI4LjYyNVY0NDhDMjQ4IDQ1Mi40MDYgMjUxLjU3OCA0NTYgMjU2IDQ1NlMyNjQgNDUyLjQwNiAyNjQgNDQ4TDI2My45MjIgNDI5LjY4OEMyNjYuMDc4IDQxMy41OTQgMjU0LjkwNiAzODcuNTk0IDIzOS4wNDcgMzcxLjc1Wk00NDguMzQ0IDI3MS44MTJMNDI3LjA0NyAyNjYuNUM0MjMuMDYyIDI2NS40NjkgNDE5LjcwMyAyNjMuMTI1IDQxNy41MzEgMjU5LjgxMkwzOTkuNSAyMzIuODEyQzM5NS45MjIgMjI3LjQ2OSAzOTUuOTIyIDIyMC41MzEgMzk5LjUgMjE1LjE4OEw0MTkuMDYyIDE4NS43NUM0MjAuNjcyIDE4My4zNzUgNDIyLjgxMiAxODEuNSA0MjUuMjE5IDE4MC4yODFMNDMxLjA2MiAxNzcuMzc1QzQzNS4wMzEgMTc1LjQzOCA0MzYuNjQxIDE3MC42MjUgNDM0LjY4NyAxNjYuNjU2QzQzMi43MTkgMTYyLjY4OCA0MjcuOTIyIDE2MS4xMjUgNDIzLjk1MyAxNjMuMDYzTDQxOC4wNzggMTY1Ljk2OUM0MTMuMjE5IDE2OC40MDYgNDA4Ljk4NCAxNzIuMTI1IDQwNS43OTcgMTc2LjgxM0wzODYuMTg3IDIwNi4zMTNDMzc5LjAxNiAyMTcuMDYzIDM3OS4wMTYgMjMwLjkzOCAzODYuMTg3IDI0MS42ODhMNDA0LjE4NyAyNjguNjI1QzQwOC41MTYgMjc1LjIxOSA0MTUuMjAzIDI3OS45NjkgNDIzLjEwOSAyODJMNDQ0LjQ2OSAyODcuMzEzQzQ0NS4xMjUgMjg3LjUgNDQ1Ljc2NiAyODcuNTYzIDQ0Ni40MDYgMjg3LjU2M0M0NTAgMjg3LjU2MyA0NTMuMjY2IDI4NS4xMjUgNDU0LjE3MiAyODEuNUM0NTUuMjM0IDI3Ny4yMTkgNDUyLjYyNSAyNzIuODc1IDQ0OC4zNDQgMjcxLjgxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function EarthAmericas(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.461 16 16 123.418 16 256S123.461 496 256 496S496 388.582 496 256S388.539 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM335.016 291.688C327.406 284.156 317.359 280 306.734 280H242.422C239.875 277.781 235.938 272.375 233.203 268.625C225.438 258.031 218.109 248 208.047 248C198.891 248 189.594 245.812 181.297 241.75L170.125 236.062C168.797 235.406 167.969 234.094 167.969 232.625C167.969 230.906 169.062 229.375 170.734 228.844L201.766 218.5C204.594 217.562 207.531 218.156 209.703 220.031L218.938 228.063C221.844 230.562 225.688 232 229.484 232H235.047C240.625 232 245.703 229.156 248.641 224.438C251.578 219.688 251.844 213.844 249.344 208.781L233.719 177.625L243.656 168H252.734C256.953 168 261.078 166.25 263.953 163.281L271.937 155.281C274.984 152.281 276.656 148.25 276.656 144S274.984 135.719 272.031 132.812L267.359 128L282.391 113C291.609 103.656 291.609 88.469 282.359 79.094L261.641 58.344C258.516 55.219 253.453 55.219 250.328 58.344S247.203 66.531 250.328 69.656L271.016 90.375C274.109 93.5 274.109 98.625 271.109 101.656L256.047 116.719C253 119.719 251.328 123.75 251.328 128S253 136.281 255.953 139.188L260.641 143.969L252.734 152H243.656C239.531 152 235.594 153.594 232.516 156.5L222.422 166.281C217.719 171.125 216.469 178.5 219.422 184.844L235.047 216L229.406 215.969L220.172 207.938C213.703 202.406 205.016 200.656 196.797 203.281L165.703 213.656C157.484 216.344 151.969 223.969 151.969 232.625C151.969 240.281 156.25 247.094 162.984 250.375L174.141 256.062C184.672 261.219 196.328 263.969 207.547 263.969H207.734C210.547 264.75 216.875 273.437 220.281 278.094C225.609 285.375 230.641 292.25 236.422 295.156C237.531 295.719 238.766 296 240.016 296H306.734C313.109 296 319.156 298.5 323.734 303.031L337.375 316.625C341.672 320.969 344.031 326.656 344.031 332.625C344.031 342.781 339.891 352.75 332.781 359.875C328.75 363.781 324.719 367.813 321.344 371.188C317.437 375.063 314.562 380 313.031 385.625L312.016 389.656C311.031 393.719 310.047 397.781 308.562 401.719L294.5 439.406C292.953 443.531 295.062 448.125 299.203 449.688C300.125 450.031 301.062 450.188 302 450.188C305.25 450.188 308.297 448.188 309.5 444.969L323.547 407.313C325.25 402.813 326.406 398.156 327.562 393.5L328.5 389.75C329.266 386.938 330.672 384.469 332.625 382.531C335.969 379.188 339.937 375.219 344.016 371.281C354.187 361.063 360.031 346.969 360.031 332.625C360.031 322.406 356.031 312.719 348.703 305.344L335.016 291.688ZM197.172 91.531C200.625 93.25 204.328 94.125 208.016 94.125C212.375 94.125 216.734 92.906 220.609 90.531C227.766 86.125 232.031 78.5 232.031 70.125V66.875C232.031 62.469 228.453 58.875 224.031 58.875S216.031 62.469 216.031 66.875V70.125C216.031 74.125 213.375 76.188 212.234 76.906C211.062 77.594 208 79.031 204.359 77.219L190.062 70.062C186.188 68.156 181.328 69.719 179.328 73.625C177.359 77.594 178.953 82.406 182.906 84.375L197.172 91.531ZM239.047 371.75C234.594 367.25 232.031 361.062 232.031 354.75V322.75C232.031 308.188 224.141 294.781 211.453 287.75C196.969 279.719 176.406 268.656 162.344 261.469C151.656 256.125 141.578 249.219 131.625 240.125C125.344 234.562 119.719 228.125 114.875 221C106.938 209.312 95.031 191.719 85.5 177.531C83.016 173.875 78.031 172.906 74.391 175.375C70.734 177.844 69.75 182.812 72.219 186.469C81.781 200.656 93.688 218.312 101.641 230C107.203 238.219 113.719 245.656 121.672 252.812C131.938 262.062 143.219 269.812 155.125 275.75C168.969 282.844 189.344 293.781 203.688 301.75C211.297 305.969 216.031 314 216.031 322.75V354.75C216.031 365.375 220.172 375.406 227.703 383.031C242.094 397.406 249.266 418.656 248 428.625V448C248 452.406 251.578 456 256 456S264 452.406 264 448L263.922 429.688C266.078 413.594 254.906 387.594 239.047 371.75ZM448.344 271.812L427.047 266.5C423.062 265.469 419.703 263.125 417.531 259.812L399.5 232.812C395.922 227.469 395.922 220.531 399.5 215.188L419.062 185.75C420.672 183.375 422.812 181.5 425.219 180.281L431.062 177.375C435.031 175.438 436.641 170.625 434.687 166.656C432.719 162.688 427.922 161.125 423.953 163.063L418.078 165.969C413.219 168.406 408.984 172.125 405.797 176.813L386.187 206.313C379.016 217.063 379.016 230.938 386.187 241.688L404.187 268.625C408.516 275.219 415.203 279.969 423.109 282L444.469 287.313C445.125 287.5 445.766 287.563 446.406 287.563C450 287.563 453.266 285.125 454.172 281.5C455.234 277.219 452.625 272.875 448.344 271.812Z" />
        </Icon>
    </>
}