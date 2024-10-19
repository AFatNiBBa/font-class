
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-sms` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-sms?s=solid message-sms}
 * @preview ![message-sms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MkMwIDM4Ny4yNDYgMjguNzUgNDE1Ljk5NCA2NCA0MTUuOTk0SDE2MFY0OTkuOTU5QzE2MCA1MDkuNzA5IDE3MS4yNSA1MTUuNDU5IDE3OS4xMjUgNTA5LjcwOUwzMDQgNDE1Ljk5NEg0NDhDNDgzLjI1IDQxNS45OTQgNTEyIDM4Ny4yNDYgNTEyIDM1MlY2My45OTRDNTEyIDI4Ljc0OCA0ODMuMjUgMCA0NDggMFpNMTY3LjM0NCAyMzkuODc1QzE2My45MDYgMjU5Ljk2OSAxNDYuMjUgMjcyIDEyMS45NjkgMjcyQzExNy45MzcgMjcyIDExMy43MTkgMjcxLjY4OCAxMDkuMzc1IDI3MUMxMDEuMTI1IDI2OS43NSA5Mi44MTIgMjY2Ljc1IDg1LjUgMjY0LjA5NEM3Ny4xODggMjYxLjA5NCA3MS40MzggMjUxLjQzOCA3NC40MDYgMjQzLjEyNVM4NSAyMjkuOTY5IDkzLjM3NSAyMzIuOTM4QzEwMC4zNTQgMjM1LjQzNiAxMDcuOTA4IDIzOC4zODcgMTE0LjI1IDIzOS4zNzVDMTI1LjY1NiAyNDEuMDk0IDEzNS4wMzEgMjM5IDEzNS44MTIgMjM0LjQzOEMxMzYuODY1IDIyOC41MjUgMTI0Ljk2OSAyMjYuMDQxIDExMS4yNSAyMjIuMDk0Qzk5LjEyNSAyMTguNTYyIDY2Ljk2OSAyMDkuMTI1IDcyLjYyNSAxNzYuMDk0Qzc2LjY4OCAxNTIuNzE5IDk5LjkzOCAxNDAuMTg4IDEzMC42MjUgMTQ1QzEzNi41MzEgMTQ1LjkwNiAxNDMuMDYzIDE0Ny44NDQgMTQ5LjIxOSAxNDkuOTY5QzE1Ny41NjMgMTUyLjg0NCAxNjIgMTYxLjk2OSAxNTkuMTI1IDE3MC4zMTJTMTQ3LjE1NiAxODMuMTI1IDEzOC43ODEgMTgwLjIxOUMxMzQuNDM4IDE3OC43MTkgMTI5Ljg0NCAxNzcuMjgxIDEyNS42ODggMTc2LjYyNUMxMTQuNDY5IDE3NC45NjkgMTA0Ljk2OSAxNzcuMDMxIDEwNC4xODggMTgxLjUzMUMxMDMuMTY0IDE4Ny4xNjQgMTEzLjYxMSAxODkuNTEgMTI0LjQwNiAxOTIuNTk0QzE0MS40MzggMTk3LjQ2OSAxNzMuMTI1IDIwNi41MzEgMTY3LjM0NCAyMzkuODc1Wk0zMjAgMjU2QzMyMCAyNjQuODQ0IDMxMi44NDQgMjcyIDMwNCAyNzJTMjg4IDI2NC44NDQgMjg4IDI1NlYyMDhMMjY4LjgxMiAyMzMuNTk0QzI2Mi43NSAyNDEuNjU2IDI0OS4yNSAyNDEuNjU2IDI0My4xODggMjMzLjU5NEwyMjQgMjA4VjI1NkMyMjQgMjY0Ljg0NCAyMTYuODQ0IDI3MiAyMDggMjcyUzE5MiAyNjQuODQ0IDE5MiAyNTZWMTYwQzE5MiAxNTMuMTI1IDE5Ni40MDYgMTQ3IDIwMi45MzggMTQ0LjgxMkMyMDkuNDM4IDE0Mi43MTkgMjE2LjY1NiAxNDQuODc1IDIyMC44MTMgMTUwLjQwNkwyNTYgMTk3LjM0NEwyOTEuMTg4IDE1MC40MDZDMjk1LjM0NCAxNDQuODc1IDMwMi41OTQgMTQyLjc1IDMwOS4wNjMgMTQ0LjgxMkMzMTUuNTk0IDE0NyAzMjAgMTUzLjEyNSAzMjAgMTYwVjI1NlpNNDM5LjM0NCAyMzkuODc1QzQzNS45MDYgMjU5Ljk2OSA0MTguMjUgMjcyIDM5My45NjkgMjcyQzM4OS45MzcgMjcyIDM4NS43MTkgMjcxLjY4OCAzODEuMzc1IDI3MUMzNzMuMTI1IDI2OS43NSAzNjQuODEyIDI2Ni43NSAzNTcuNSAyNjQuMDk0QzM0OS4xODcgMjYxLjA5NCAzNDMuNDM3IDI1MS40MzggMzQ2LjQwNiAyNDMuMTI1UzM1NyAyMjkuOTY5IDM2NS4zNzUgMjMyLjkzOEMzNzIuMzU0IDIzNS40MzYgMzc5LjkwOCAyMzguMzg3IDM4Ni4yNSAyMzkuMzc1QzM5Ny42ODcgMjQxLjA5NCA0MDcuMDMxIDIzOSA0MDcuODEyIDIzNC40MzhDNDA4Ljg2NSAyMjguNTI1IDM5Ni45NjkgMjI2LjA0MSAzODMuMjUgMjIyLjA5NEMzNzEuMTI1IDIxOC41NjIgMzM4Ljk2OSAyMDkuMTI1IDM0NC42MjUgMTc2LjA5NEMzNDguNjU2IDE1Mi43MTkgMzcxLjg3NSAxNDAuMTg4IDQwMi42MjUgMTQ1QzQwOC41MzEgMTQ1LjkwNiA0MTUuMDYyIDE0Ny44NDQgNDIxLjIxOSAxNDkuOTY5QzQyOS41NjIgMTUyLjg0NCA0MzQgMTYxLjk2OSA0MzEuMTI1IDE3MC4zMTJTNDE5LjE4NyAxODMuMTI1IDQxMC43ODEgMTgwLjIxOUM0MDYuNDM3IDE3OC43MTkgNDAxLjg0NCAxNzcuMjgxIDM5Ny42ODcgMTc2LjYyNUMzODYuNSAxNzQuOTY5IDM3Ni45NjkgMTc3LjAzMSAzNzYuMTg3IDE4MS41MzFDMzc1LjE2NCAxODcuMTY0IDM4NS42MTEgMTg5LjUxIDM5Ni40MDYgMTkyLjU5NEM0MTMuNDM4IDE5Ny40NjkgNDQ1LjEyNSAyMDYuNTMxIDQzOS4zNDQgMjM5Ljg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageSms(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.246 28.75 415.994 64 415.994H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.994H448C483.25 415.994 512 387.246 512 352V63.994C512 28.748 483.25 0 448 0ZM167.344 239.875C163.906 259.969 146.25 272 121.969 272C117.937 272 113.719 271.688 109.375 271C101.125 269.75 92.812 266.75 85.5 264.094C77.188 261.094 71.438 251.438 74.406 243.125S85 229.969 93.375 232.938C100.354 235.436 107.908 238.387 114.25 239.375C125.656 241.094 135.031 239 135.812 234.438C136.865 228.525 124.969 226.041 111.25 222.094C99.125 218.562 66.969 209.125 72.625 176.094C76.688 152.719 99.938 140.188 130.625 145C136.531 145.906 143.063 147.844 149.219 149.969C157.563 152.844 162 161.969 159.125 170.312S147.156 183.125 138.781 180.219C134.438 178.719 129.844 177.281 125.688 176.625C114.469 174.969 104.969 177.031 104.188 181.531C103.164 187.164 113.611 189.51 124.406 192.594C141.438 197.469 173.125 206.531 167.344 239.875ZM320 256C320 264.844 312.844 272 304 272S288 264.844 288 256V208L268.812 233.594C262.75 241.656 249.25 241.656 243.188 233.594L224 208V256C224 264.844 216.844 272 208 272S192 264.844 192 256V160C192 153.125 196.406 147 202.938 144.812C209.438 142.719 216.656 144.875 220.813 150.406L256 197.344L291.188 150.406C295.344 144.875 302.594 142.75 309.063 144.812C315.594 147 320 153.125 320 160V256ZM439.344 239.875C435.906 259.969 418.25 272 393.969 272C389.937 272 385.719 271.688 381.375 271C373.125 269.75 364.812 266.75 357.5 264.094C349.187 261.094 343.437 251.438 346.406 243.125S357 229.969 365.375 232.938C372.354 235.436 379.908 238.387 386.25 239.375C397.687 241.094 407.031 239 407.812 234.438C408.865 228.525 396.969 226.041 383.25 222.094C371.125 218.562 338.969 209.125 344.625 176.094C348.656 152.719 371.875 140.188 402.625 145C408.531 145.906 415.062 147.844 421.219 149.969C429.562 152.844 434 161.969 431.125 170.312S419.187 183.125 410.781 180.219C406.437 178.719 401.844 177.281 397.687 176.625C386.5 174.969 376.969 177.031 376.187 181.531C375.164 187.164 385.611 189.51 396.406 192.594C413.438 197.469 445.125 206.531 439.344 239.875Z" />
        </Icon>
    </>
}