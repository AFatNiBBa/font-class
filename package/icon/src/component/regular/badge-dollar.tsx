
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `badge-dollar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/badge-dollar?s=regular badge-dollar}
 * @preview ![badge-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMjU2QzU0NCAyMTkuNSA1MjUuMjUgMTg3LjYyNSA0OTcuMjUgMTY5LjI1QzUwNC4xMjUgMTM2LjM3NSA0OTQuNjI1IDEwMC42MjUgNDY5IDc1QzQ0My4zNzUgNDkuMjUgNDA3LjUgMzkuODc1IDM3NC43NSA0Ni43NUMzNTYuMjUgMTguNzUgMzI0LjI1IDAgMjg4IDBTMjE5Ljc1IDE4Ljc1IDIwMS4yNSA0Ni43NUMxNjguMzc1IDM5Ljg3NSAxMzIuNjI1IDQ5LjM3NSAxMDcgNzVDODEuMjUgMTAwLjYyNSA3MS44NzUgMTM2LjUgNzguNzUgMTY5LjI1QzUwLjYyNSAxODcuNzUgMzIgMjE5Ljc1IDMyIDI1NlM1MC43NSAzMjQuMjUgNzguNzUgMzQyLjc1QzcxLjg3NSAzNzUuNjI1IDgxLjM3NSA0MTEuMzc1IDEwNyA0MzdDMTMyLjYyNSA0NjIuNzUgMTY4LjI1IDQ3Mi4xMjUgMjAxLjI1IDQ2NS4yNUMyMTkuNzUgNDkzLjM3NSAyNTEuNzUgNTEyIDI4OCA1MTJDMzI0LjM3NSA1MTIgMzU2LjI1IDQ5My4yNSAzNzQuNzUgNDY1LjI1QzQwNy43NSA0NzIuMTI1IDQ0My4zNzUgNDYyLjYyNSA0NjkgNDM3QzQ5NC43NSA0MTEuMzc1IDUwNC4xMjUgMzc1LjUgNDk3LjI1IDM0Mi43NUM1MjUuMzc1IDMyNC4yNSA1NDQgMjkyLjI1IDU0NCAyNTZaTTQzNS43NSAzMTcuMjVDNDQ0Ljc1IDMzNy4yNSA0NjYgMzcyLjEyNSA0MzUgNDAzLjEyNUM0MDcgNDMxLjEyNSAzNzkuNzUgNDE3LjYyNSAzNDkuMjUgNDAzLjc1QzM0MS41IDQyNC4zNzUgMzMxLjg3NSA0NjQgMjg4IDQ2NEMyNDIuNzUgNDY0IDIzMy4yNSA0MjEuMjUgMjI2Ljc1IDQwMy43NUMyMDUuNzUgNDEzLjM3NSAxNzEuODc1IDQzNCAxNDAuODc1IDQwM0MxMDguODc1IDM3MSAxMzIuNSAzMzQuMTI1IDE0MC4yNSAzMTcuMjVDMTE5LjYyNSAzMDkuNSA4MCAyOTkuODc1IDgwIDI1NkM4MCAyMTAuNzUgMTIyLjc1IDIwMS4yNSAxNDAuMjUgMTk0Ljc1QzEzMS4yNSAxNzQuNzUgMTEwIDEzOS44NzUgMTQxIDEwOC44NzVDMTczIDc2Ljg3NSAyMDkuODc1IDEwMC41IDIyNi43NSAxMDguMjVDMjM0LjUgODcuNjI1IDI0NC4xMjUgNDggMjg4IDQ4QzMzMy4yNSA0OCAzNDIuNzUgOTAuNzUgMzQ5LjI1IDEwOC4zNzVDMzY5LjEyNSA5OS4yNSA0MDQgNzguMTI1IDQzNSAxMDkuMTI1QzQ2NyAxNDEuMTI1IDQ0My4zNzUgMTc4IDQzNS43NSAxOTQuODc1QzQ1Ni4yNSAyMDIuNjI1IDQ5NS44NzUgMjEyLjI1IDQ5NS44NzUgMjU2LjEyNUM0OTUuODc1IDMwMS4zNzUgNDUzLjEyNSAzMTAuNzUgNDM1Ljc1IDMxNy4yNVpNMzU5LjMwMSAzMDMuODU5QzM1NS4xODQgMzI3LjczMiAzMzcuNTUxIDM0My44NjUgMzEyLjI3IDM0OS41OFYzNjBDMzEyLjI3IDM3My4yNSAzMDEuNTIgMzg0IDI4OC4yNyAzODRTMjY0LjI3IDM3My4yNSAyNjQuMjcgMzYwVjM0OC41ODhDMjU0Ljc3MSAzNDYuMzY5IDI0NS4zNzEgMzQzLjMzOCAyMzYuODk1IDM0MC4yODFMMjMyLjIzOCAzMzguNjI1QzIxOS43NyAzMzQuMTg4IDIxMy4yMDcgMzIwLjQ2OSAyMTcuNjQ1IDMwNy45ODRDMjIyLjA4MiAyOTUuNDg0IDIzNS43NyAyODkgMjQ4LjMwMSAyOTMuMzc1TDI1My4xNzYgMjk1LjEyNUMyNjEuOTU3IDI5OC4yOTcgMjcxLjkyNiAzMDEuODkxIDI3OS42MTMgMzAzLjA0N0MyOTYuNzA3IDMwNS43MTkgMzEwLjg2MyAzMDIuNDM3IDMxMS45ODggMjk1LjY4N0MzMTIuODAxIDI5MC45MzcgMzEzLjMwMSAyODguMTA5IDI4MS42NDUgMjc5LjA0N0wyNzUuMTQ1IDI3Ny4xNzJDMjU2LjkyNiAyNzEuODEyIDIwOC42NDUgMjU3LjYwOSAyMTcuMjM4IDIwOC4xMjVDMjIxLjM0MiAxODQuMjU2IDIzOS4wMSAxNjguMjM0IDI2NC4yNyAxNjIuNTE4VjE1MkMyNjQuMjcgMTM4Ljc1IDI3NS4wMiAxMjggMjg4LjI3IDEyOFMzMTIuMjcgMTM4Ljc1IDMxMi4yNyAxNTJWMTYzLjI0MkMzMTguMTc4IDE2NC42MDcgMzI0LjQ5OCAxNjYuMzM4IDMzMi4xMTMgMTY4Ljk2OUMzNDQuNjQ1IDE3My4zMTMgMzUxLjI3IDE4Ni45NjkgMzQ2Ljk1NyAxOTkuNUMzNDIuNjEzIDIxMi4wMTYgMzI4Ljk4OCAyMTguNjg4IDMxNi40MjYgMjE0LjM0NEMzMDguMTQ1IDIxMS40NjkgMzAxLjcwNyAyMDkuNzAzIDI5Ni43NyAyMDguOTIyQzI3OS44OTUgMjA2LjIzNCAyNjUuNzA3IDIwOS41NDcgMjY0LjU1MSAyMTYuMzEzQzI2My44MzIgMjIwLjQyMiAyNjMuMjcgMjIzLjY0MSAyODguNjc2IDIzMS4xMDlMMjk0Ljg2MyAyMzIuOTA2QzMyMC4zOTUgMjQwLjIwMyAzNjcuOTg4IDI1My44MTIgMzU5LjMwMSAzMDMuODU5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BadgeDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 256C544 219.5 525.25 187.625 497.25 169.25C504.125 136.375 494.625 100.625 469 75C443.375 49.25 407.5 39.875 374.75 46.75C356.25 18.75 324.25 0 288 0S219.75 18.75 201.25 46.75C168.375 39.875 132.625 49.375 107 75C81.25 100.625 71.875 136.5 78.75 169.25C50.625 187.75 32 219.75 32 256S50.75 324.25 78.75 342.75C71.875 375.625 81.375 411.375 107 437C132.625 462.75 168.25 472.125 201.25 465.25C219.75 493.375 251.75 512 288 512C324.375 512 356.25 493.25 374.75 465.25C407.75 472.125 443.375 462.625 469 437C494.75 411.375 504.125 375.5 497.25 342.75C525.375 324.25 544 292.25 544 256ZM435.75 317.25C444.75 337.25 466 372.125 435 403.125C407 431.125 379.75 417.625 349.25 403.75C341.5 424.375 331.875 464 288 464C242.75 464 233.25 421.25 226.75 403.75C205.75 413.375 171.875 434 140.875 403C108.875 371 132.5 334.125 140.25 317.25C119.625 309.5 80 299.875 80 256C80 210.75 122.75 201.25 140.25 194.75C131.25 174.75 110 139.875 141 108.875C173 76.875 209.875 100.5 226.75 108.25C234.5 87.625 244.125 48 288 48C333.25 48 342.75 90.75 349.25 108.375C369.125 99.25 404 78.125 435 109.125C467 141.125 443.375 178 435.75 194.875C456.25 202.625 495.875 212.25 495.875 256.125C495.875 301.375 453.125 310.75 435.75 317.25ZM359.301 303.859C355.184 327.732 337.551 343.865 312.27 349.58V360C312.27 373.25 301.52 384 288.27 384S264.27 373.25 264.27 360V348.588C254.771 346.369 245.371 343.338 236.895 340.281L232.238 338.625C219.77 334.188 213.207 320.469 217.645 307.984C222.082 295.484 235.77 289 248.301 293.375L253.176 295.125C261.957 298.297 271.926 301.891 279.613 303.047C296.707 305.719 310.863 302.437 311.988 295.687C312.801 290.937 313.301 288.109 281.645 279.047L275.145 277.172C256.926 271.812 208.645 257.609 217.238 208.125C221.342 184.256 239.01 168.234 264.27 162.518V152C264.27 138.75 275.02 128 288.27 128S312.27 138.75 312.27 152V163.242C318.178 164.607 324.498 166.338 332.113 168.969C344.645 173.313 351.27 186.969 346.957 199.5C342.613 212.016 328.988 218.688 316.426 214.344C308.145 211.469 301.707 209.703 296.77 208.922C279.895 206.234 265.707 209.547 264.551 216.313C263.832 220.422 263.27 223.641 288.676 231.109L294.863 232.906C320.395 240.203 367.988 253.812 359.301 303.859Z" />
        </Icon>
    </>
}