
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-sms` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-sms?s=light comment-sms}
 * @preview ![comment-sms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDY4IDMyQzExNC42OTMgMzIgMC4wNjggMTI1LjEyNSAwLjA2OCAyNDBDMC4wNjggMjg3LjYyNSAxOS45NDMgMzMxLjI1IDUyLjk0MyAzNjYuMjVDMzguMDY4IDQwNS43NSA3LjA2OCA0MzkuMTI1IDYuNTY4IDQzOS41Qy0wLjA1NyA0NDYuNSAtMS44MDcgNDU2Ljc1IDEuOTQzIDQ2NS41QzUuODE4IDQ3NC4yNSAxNC4zMTggNDgwIDIzLjk0MyA0ODBDODUuNDQzIDQ4MCAxMzMuOTQzIDQ1NC4yNSAxNjMuMDY4IDQzMy43NUMxOTIuMDY4IDQ0Mi43NSAyMjMuMzE4IDQ0OCAyNTYuMDY4IDQ0OEMzOTcuNDQzIDQ0OCA1MTIuMDY4IDM1NC44NzUgNTEyLjA2OCAyNDBTMzk3LjQ0MyAzMiAyNTYuMDY4IDMyWk0yNTYuMDY4IDQxNkMyMjcuODE4IDQxNiAxOTkuODE4IDQxMS43NSAxNzIuODE4IDQwMy4yNUwxNTcuNjkzIDM5OC4zNzVMMTQ0LjY5MyA0MDcuNjI1QzEyMS42OTMgNDIzLjg3NSA4Ni4xOTMgNDQyLjg3NSA0Mi4wNjggNDQ3LjI1QzU0LjA2OCA0MzIuMTI1IDcxLjgxOCA0MDYuNzUgODIuODE4IDM3Ny42MjVMODkuOTQzIDM1OC44NzVMNzYuMzE4IDM0NC4yNUM0Ny40NDMgMzEzLjc1IDMyLjE5MyAyNzcuNjI1IDMyLjE5MyAyNDBDMzIuMTkzIDE0MyAxMzIuNjkzIDY0IDI1Ni4xOTMgNjRTNDgwLjE5MyAxNDMgNDgwLjE5MyAyNDBTMzc5LjU2OCA0MTYgMjU2LjA2OCA0MTZaTTEzMi40NDMgMjI0LjYwOUwxMjguMzM0IDIyMy40MjJDMTExLjM5NiAyMTguNDM4IDExMS43NzEgMjE2LjI4MSAxMTIuMjQgMjEzLjU0N0MxMTMuMDIxIDIwOS4wMTYgMTIyLjUwNiAyMDYuODU5IDEzMy43MjQgMjA4LjYwOUMxMzcuODk2IDIwOS4yODEgMTQyLjQ5IDIxMC43MTkgMTQ2Ljg2NSAyMTIuMjE5QzE1NS4yMjQgMjE1LjEwOSAxNjQuMzM0IDIxMC42NDEgMTY3LjE5MyAyMDIuMjk3QzE3MC4wNjggMTkzLjk1MyAxNjUuNjMxIDE4NC44NDQgMTU3LjI3MSAxODEuOTY5QzE1MS4xMTUgMTc5Ljg0NCAxNDQuNjE1IDE3Ny45MzggMTM4LjY5MyAxNzdDMTA4LjE0NiAxNzIuMzQ0IDg0Ljc1NiAxODQuNzE5IDgwLjcwOSAyMDguMTA5Qzc1LjAwNiAyNDEuMTA5IDEwNy4xOTMgMjUwLjU2MyAxMTkuMzE4IDI1NC4xMjVMMTIzLjY0NiAyNTUuMzc1QzE0NC43NzEgMjYxLjQwNiAxNDQuNDQzIDI2My4yOTcgMTQzLjg5NiAyNjYuNDUzQzE0My4xMTUgMjcwLjk2OSAxMzMuNjkzIDI3My4xNDEgMTIyLjI4NyAyNzEuMzU5QzExNi42MTUgMjcwLjUxNiAxMTAuNDEyIDI2OC4xNTYgMTA0Ljc4NyAyNjYuMTI1TDEwMS40MTIgMjY0LjkyMkM5My4wMjEgMjYxLjkyMiA4My45MjggMjY2LjM0NCA4MC45OSAyNzQuNjU2Qzc4LjAzNyAyODMgODIuMzk2IDI5Mi4xNDEgOTAuNzI0IDI5NS4wNzhMOTMuOTI4IDI5Ni4yMzRDMTAxLjE0NiAyOTguODI4IDEwOS4zMTggMzAxLjc2NiAxMTcuNDQzIDMwM0MxMjEuODAzIDMwMy42NzIgMTI2LjAyMSAzMDQuMDE2IDEzMC4wNTMgMzA0LjAxNkMxNTQuMzM0IDMwNC4wMTYgMTcxLjk1OSAyOTEuOTUzIDE3NS40MjggMjcxLjkwNkMxODEuMjA5IDIzOC41NDcgMTQ5LjQ5IDIyOS40NjkgMTMyLjQ0MyAyMjQuNjA5Wk0zODguNDQzIDIyNC42MDlMMzg0LjMzNCAyMjMuNDIyQzM2Ny4zOTYgMjE4LjQzOCAzNjcuNzcxIDIxNi4yODEgMzY4LjI0IDIxMy41NDdDMzY5LjAyMSAyMDkuMDE2IDM3OC41MzcgMjA2Ljg1OSAzODkuNzI0IDIwOC42MDlDMzkzLjg5NiAyMDkuMjgxIDM5OC40OSAyMTAuNzE5IDQwMi44NjUgMjEyLjIxOUM0MTEuMTc3IDIxNS4xMDkgNDIwLjMxOCAyMTAuNjQxIDQyMy4xOTMgMjAyLjI5N0M0MjYuMDY4IDE5My45NTMgNDIxLjYzMSAxODQuODQ0IDQxMy4yNzEgMTgxLjk2OUM0MDcuMTE1IDE3OS44NDQgNDAwLjYxNSAxNzcuOTM3IDM5NC42OTMgMTc3QzM2NC4wNjggMTcyLjM0NCAzNDAuNzU2IDE4NC43MTkgMzM2LjcwOSAyMDguMTA5QzMzMS4wMDYgMjQxLjEwOSAzNjMuMTkzIDI1MC41NjMgMzc1LjMxOCAyNTQuMTI1TDM3OS42NDYgMjU1LjM3NUM0MDAuNzcxIDI2MS40MDYgNDAwLjQ0MyAyNjMuMjk3IDM5OS44OTYgMjY2LjQ1M0MzOTkuMTMxIDI3MC45NjkgMzg5LjY2MiAyNzMuMTQxIDM3OC4yODcgMjcxLjM1OUMzNzIuNjE1IDI3MC41MTYgMzY2LjQxMiAyNjguMTU2IDM2MC43ODcgMjY2LjEyNUwzNTcuNDEyIDI2NC45MjJDMzQ5LjA1MiAyNjEuOTIyIDMzOS45MTIgMjY2LjM0NCAzMzYuOTkgMjc0LjY1NkMzMzQuMDM3IDI4MyAzMzguMzk2IDI5Mi4xNDEgMzQ2LjcyNCAyOTUuMDc4TDM0OS45MjcgMjk2LjIzNEMzNTcuMTQ2IDI5OC44MjggMzY1LjMxOCAzMDEuNzY2IDM3My40NDMgMzAzQzM3Ny44MDIgMzAzLjY3MiAzODIuMDIxIDMwNC4wMTYgMzg2LjA1MiAzMDQuMDE2QzQxMC4zMzQgMzA0LjAxNiA0MjcuOTU5IDI5MS45NTMgNDMxLjQyOCAyNzEuOTA2QzQzNy4yMDkgMjM4LjU0NyA0MDUuNDkgMjI5LjQ2OSAzODguNDQzIDIyNC42MDlaTTMwOS4xMzEgMTc2LjgyOEMzMDIuNTY4IDE3NC42MjUgMjk1LjQxMiAxNzYuODkxIDI5MS4yNzEgMTgyLjQwNkwyNTYuMDY4IDIyOS4zMjhMMjIwLjg2NSAxODIuNDA2QzIxNi43MjQgMTc2Ljg5MSAyMDkuNTUyIDE3NC42MDkgMjAzLjAwNiAxNzYuODI4QzE5Ni40NzQgMTc5IDE5Mi4wNjggMTg1LjEwOSAxOTIuMDY4IDE5MlYyODhDMTkyLjA2OCAyOTYuODQ0IDE5OS4yMjQgMzA0IDIwOC4wNjggMzA0UzIyNC4wNjggMjk2Ljg0NCAyMjQuMDY4IDI4OFYyNDBMMjQzLjI3MSAyNjUuNTk0QzI0OS4zMDMgMjczLjY1NiAyNjIuODM0IDI3My42NTYgMjY4Ljg2NSAyNjUuNTk0TDI4OC4wNjggMjQwVjI4OEMyODguMDY4IDI5Ni44NDQgMjk1LjIyNCAzMDQgMzA0LjA2OCAzMDRTMzIwLjA2OCAyOTYuODQ0IDMyMC4wNjggMjg4VjE5MkMzMjAuMDY4IDE4NS4xMDkgMzE1LjY2MiAxNzkgMzA5LjEzMSAxNzYuODI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentSms(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.068 32C114.693 32 0.068 125.125 0.068 240C0.068 287.625 19.943 331.25 52.943 366.25C38.068 405.75 7.068 439.125 6.568 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.818 474.25 14.318 480 23.943 480C85.443 480 133.943 454.25 163.068 433.75C192.068 442.75 223.318 448 256.068 448C397.443 448 512.068 354.875 512.068 240S397.443 32 256.068 32ZM256.068 416C227.818 416 199.818 411.75 172.818 403.25L157.693 398.375L144.693 407.625C121.693 423.875 86.193 442.875 42.068 447.25C54.068 432.125 71.818 406.75 82.818 377.625L89.943 358.875L76.318 344.25C47.443 313.75 32.193 277.625 32.193 240C32.193 143 132.693 64 256.193 64S480.193 143 480.193 240S379.568 416 256.068 416ZM132.443 224.609L128.334 223.422C111.396 218.438 111.771 216.281 112.24 213.547C113.021 209.016 122.506 206.859 133.724 208.609C137.896 209.281 142.49 210.719 146.865 212.219C155.224 215.109 164.334 210.641 167.193 202.297C170.068 193.953 165.631 184.844 157.271 181.969C151.115 179.844 144.615 177.938 138.693 177C108.146 172.344 84.756 184.719 80.709 208.109C75.006 241.109 107.193 250.563 119.318 254.125L123.646 255.375C144.771 261.406 144.443 263.297 143.896 266.453C143.115 270.969 133.693 273.141 122.287 271.359C116.615 270.516 110.412 268.156 104.787 266.125L101.412 264.922C93.021 261.922 83.928 266.344 80.99 274.656C78.037 283 82.396 292.141 90.724 295.078L93.928 296.234C101.146 298.828 109.318 301.766 117.443 303C121.803 303.672 126.021 304.016 130.053 304.016C154.334 304.016 171.959 291.953 175.428 271.906C181.209 238.547 149.49 229.469 132.443 224.609ZM388.443 224.609L384.334 223.422C367.396 218.438 367.771 216.281 368.24 213.547C369.021 209.016 378.537 206.859 389.724 208.609C393.896 209.281 398.49 210.719 402.865 212.219C411.177 215.109 420.318 210.641 423.193 202.297C426.068 193.953 421.631 184.844 413.271 181.969C407.115 179.844 400.615 177.937 394.693 177C364.068 172.344 340.756 184.719 336.709 208.109C331.006 241.109 363.193 250.563 375.318 254.125L379.646 255.375C400.771 261.406 400.443 263.297 399.896 266.453C399.131 270.969 389.662 273.141 378.287 271.359C372.615 270.516 366.412 268.156 360.787 266.125L357.412 264.922C349.052 261.922 339.912 266.344 336.99 274.656C334.037 283 338.396 292.141 346.724 295.078L349.927 296.234C357.146 298.828 365.318 301.766 373.443 303C377.802 303.672 382.021 304.016 386.052 304.016C410.334 304.016 427.959 291.953 431.428 271.906C437.209 238.547 405.49 229.469 388.443 224.609ZM309.131 176.828C302.568 174.625 295.412 176.891 291.271 182.406L256.068 229.328L220.865 182.406C216.724 176.891 209.552 174.609 203.006 176.828C196.474 179 192.068 185.109 192.068 192V288C192.068 296.844 199.224 304 208.068 304S224.068 296.844 224.068 288V240L243.271 265.594C249.303 273.656 262.834 273.656 268.865 265.594L288.068 240V288C288.068 296.844 295.224 304 304.068 304S320.068 296.844 320.068 288V192C320.068 185.109 315.662 179 309.131 176.828Z" />
        </Icon>
    </>
}