
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `earth-europa` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/earth-europa?s=regular earth-europa}
 * @preview ![earth-europa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQyMS43MTcgMzUyLjM3NUg0MTcuNjZDNDEyLjgxNiAzNTIuMzc1IDQwOC4wOTQgMzUwLjUgNDA0LjcwMyAzNDcuMTI1TDM4Ny4zODcgMzI5Ljc1QzM4MS40NTMgMzIzLjc1IDM3My4zNCAzMjAuMzc1IDM2NC43NDIgMzIwLjM3NUgzNDYuNDU3TDMwMy4zNDggMjgzLjI1QzI5NS4xMTMgMjc2LjI1IDI4NC41NzggMjcyLjM3NSAyNzMuNjggMjcyLjM3NUgyNDIuNTU5QzIzNC4zMjQgMjcyLjM3NSAyMjYuMjExIDI3NC43NSAyMTkuMDY2IDI3OC44NzVMMTc2LjE5OSAzMDQuNjI1QzE2Mi41MTYgMzEyLjc1IDE1NC4xNiAzMjcuNjI1IDE1NC4xNiAzNDMuNjI1VjM2Ny41QzE1NC4xNiAzODEuNzUgMTYwLjgyIDM5NS4yNSAxNzIuMzI0IDQwMy44NzVMMTk0LjQ4NCA0MjAuNjI1QzIwMy4yMDMgNDI3LjEyNSAyMTkuMDY2IDQzMi4zNzUgMjI5Ljg0NCA0MzIuMzc1SDI1MC4wNjZDMjU4LjUyIDQzMi4zNzUgMjY1LjI0IDQzOS4wNjMgMjY1LjgyMiA0NDcuMjk1QzI2Mi41MjkgNDQ3LjQ2NyAyNTkuMzM2IDQ0OCAyNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2QzY0IDE1NS45OTIgMTQwLjg4MSA3My42OTcgMjM4LjYzMyA2NC44NzlMMjIxLjI0NiA3OEMyMTkuMTg4IDc5LjUgMjE3Ljk3NyA4MS44NzUgMjE3Ljk3NyA4NC4zNzVWMTA0LjM3NUMyMTcuOTc3IDEwOC43NSAyMjEuNjA5IDExMi4zNzUgMjI1Ljk2OSAxMTIuMzc1SDI0MS45NTNDMjQ2LjQzNCAxMTIuMzc1IDI0OS45NDUgMTA4Ljc1IDI0OS45NDUgMTA0LjM3NVY5Ni4zNzVMMjY2LjA1MSA4MC4zNzVIMjg2Ljc1OEMyOTIuOTM0IDgwLjM3NSAyOTguMDIgODUuNSAyOTguMDIgOTEuNzVDMjk4LjAyIDk0Ljc1IDI5Ni44MDkgOTcuNjI1IDI5NC43NSA5OS43NUwyNjcuODY3IDEyNi41QzI2Ni42NTYgMTI3Ljc1IDI2NS4yMDMgMTI4LjYyNSAyNjMuNTA4IDEyOS4yNUwyMjMuNTQ3IDE0Mi41QzIyMC4xNTYgMTQzLjYyNSAyMTcuOTc3IDE0Ni43NSAyMTcuOTc3IDE1MC4xMjVDMjE3Ljk3NyAxNTYuNzUgMjE1LjQzNCAxNjMgMjEwLjgzMiAxNjcuNjI1TDE5MC43MyAxODcuNzVDMTg3LjcwMyAxOTAuNzUgMTg2LjAwOCAxOTQuNzUgMTg2LjAwOCAxOTlWMjI0LjI1QzE4Ni4wMDggMjMzLjEyNSAxOTMuMTUyIDI0MC4yNSAyMDEuOTkyIDI0MC4yNUgyMjQuMTUyQzIzMC4yMDcgMjQwLjI1IDIzNS42NTYgMjM2Ljg3NSAyMzguNDQxIDIzMS41TDI0Ny43NjYgMjEyLjc1QzI0OS4yMTkgMjEwLjEyNSAyNTIuMDA0IDIwOC4zNzUgMjU1LjAzMSAyMDguMzc1SDI1OC4wNTlDMjYyLjUzOSAyMDguMzc1IDI2Ni4wNTEgMjEyIDI2Ni4wNTEgMjE2LjM3NVMyNjkuNjg0IDIyNC4zNzUgMjc0LjA0MyAyMjQuMzc1SDI5MC4xNDhDMjk0LjUwOCAyMjQuMzc1IDI5OC4xNDEgMjIwLjc1IDI5OC4xNDEgMjE2LjM3NVYyMTQuMjVDMjk4LjE0MSAyMTAuNzUgMzAwLjMyIDIwNy43NSAzMDMuNTkgMjA2LjYyNUwzMzUuMTk1IDE5Ni4xMjVDMzQxLjczNCAxOTMuODc1IDM0Ni4wOTQgMTg3Ljc1IDM0Ni4wOTQgMTgwLjg3NVYxNzYuMzc1QzM0Ni4wOTQgMTY3LjYyNSAzNTMuMzU5IDE2MC4zNzUgMzYyLjA3OCAxNjAuMzc1SDM5OC43N0M0MDQuOTQ1IDE2MC4zNzUgNDEwLjE1MiAxNjUuNSA0MTAuMTUyIDE3MS43NVYxODEuMTI1QzQxMC4xNTIgMTg3LjI1IDQwNC45NDUgMTkyLjM3NSAzOTguNzcgMTkyLjM3NUgzNjYuODAxQzM2My43NzMgMTkyLjM3NSAzNjAuODY3IDE5My42MjUgMzU4LjgwOSAxOTUuNzVMMzQ5LjM2MyAyMDUuMTI1QzM0Ny4zMDUgMjA3LjI1IDM0Ni4wOTQgMjEwLjEyNSAzNDYuMDk0IDIxMy4xMjVDMzQ2LjA5NCAyMTkuMjUgMzUxLjE4IDIyNC4zNzUgMzU3LjM1NSAyMjQuMzc1SDM3My4zNEMzNzYuMzY3IDIyNC4zNzUgMzc5LjI3MyAyMjUuNjI1IDM4MS40NTMgMjI3Ljc1TDM5MC43NzcgMjM3LjEyNUMzOTIuOTU3IDIzOS4yNSAzOTQuMDQ3IDI0Mi4xMjUgMzk0LjA0NyAyNDUuMTI1VjI1My43NUwzODEuNTc0IDI2Ni4yNUMzNzYuOTczIDI3MC44NzUgMzc2Ljk3MyAyNzguMzc1IDM4MS40NTMgMjgzTDQxMy41NDMgMzE1LjYyNUM0MTYuNDQ5IDMxOC43NSA0MjAuNTY2IDMyMC4zNzUgNDI0LjkyNiAzMjAuMzc1SDQzNi4zNTlDNDMyLjM2MyAzMzEuNTE0IDQyNy42MTEgMzQyLjI5MyA0MjEuNzE3IDM1Mi4zNzVaTTE4Ni4xMjkgMTIzLjc1QzE4Ni4xMjkgMTE3LjUgMTgxLjA0MyAxMTIuMzc1IDE3NC43NDYgMTEyLjM3NUMxNzEuODQgMTEyLjM3NSAxNjguOTM0IDExMy42MjUgMTY2Ljc1NCAxMTUuNzVMMTQxLjQ0NSAxNDEuMTI1QzEzOS4yNjYgMTQzLjI1IDEzOC4wNTUgMTQ2LjEyNSAxMzguMDU1IDE0OS4xMjVDMTM4LjA1NSAxNTUuMjUgMTQzLjE0MSAxNjAuMzc1IDE0OS40MzggMTYwLjM3NUgxNjUuNDIyQzE2OC40NDkgMTYwLjM3NSAxNzEuMzU1IDE1OS4yNSAxNzMuNDE0IDE1Ny4xMjVMMTgyLjg1OSAxNDcuNzVDMTg0LjkxOCAxNDUuNjI1IDE4Ni4xMjkgMTQyLjc1IDE4Ni4xMjkgMTM5Ljc1VjEyMy43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function EarthEuropa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM421.717 352.375H417.66C412.816 352.375 408.094 350.5 404.703 347.125L387.387 329.75C381.453 323.75 373.34 320.375 364.742 320.375H346.457L303.348 283.25C295.113 276.25 284.578 272.375 273.68 272.375H242.559C234.324 272.375 226.211 274.75 219.066 278.875L176.199 304.625C162.516 312.75 154.16 327.625 154.16 343.625V367.5C154.16 381.75 160.82 395.25 172.324 403.875L194.484 420.625C203.203 427.125 219.066 432.375 229.844 432.375H250.066C258.52 432.375 265.24 439.063 265.822 447.295C262.529 447.467 259.336 448 256 448C150.131 448 64 361.869 64 256C64 155.992 140.881 73.697 238.633 64.879L221.246 78C219.188 79.5 217.977 81.875 217.977 84.375V104.375C217.977 108.75 221.609 112.375 225.969 112.375H241.953C246.434 112.375 249.945 108.75 249.945 104.375V96.375L266.051 80.375H286.758C292.934 80.375 298.02 85.5 298.02 91.75C298.02 94.75 296.809 97.625 294.75 99.75L267.867 126.5C266.656 127.75 265.203 128.625 263.508 129.25L223.547 142.5C220.156 143.625 217.977 146.75 217.977 150.125C217.977 156.75 215.434 163 210.832 167.625L190.73 187.75C187.703 190.75 186.008 194.75 186.008 199V224.25C186.008 233.125 193.152 240.25 201.992 240.25H224.152C230.207 240.25 235.656 236.875 238.441 231.5L247.766 212.75C249.219 210.125 252.004 208.375 255.031 208.375H258.059C262.539 208.375 266.051 212 266.051 216.375S269.684 224.375 274.043 224.375H290.148C294.508 224.375 298.141 220.75 298.141 216.375V214.25C298.141 210.75 300.32 207.75 303.59 206.625L335.195 196.125C341.734 193.875 346.094 187.75 346.094 180.875V176.375C346.094 167.625 353.359 160.375 362.078 160.375H398.77C404.945 160.375 410.152 165.5 410.152 171.75V181.125C410.152 187.25 404.945 192.375 398.77 192.375H366.801C363.773 192.375 360.867 193.625 358.809 195.75L349.363 205.125C347.305 207.25 346.094 210.125 346.094 213.125C346.094 219.25 351.18 224.375 357.355 224.375H373.34C376.367 224.375 379.273 225.625 381.453 227.75L390.777 237.125C392.957 239.25 394.047 242.125 394.047 245.125V253.75L381.574 266.25C376.973 270.875 376.973 278.375 381.453 283L413.543 315.625C416.449 318.75 420.566 320.375 424.926 320.375H436.359C432.363 331.514 427.611 342.293 421.717 352.375ZM186.129 123.75C186.129 117.5 181.043 112.375 174.746 112.375C171.84 112.375 168.934 113.625 166.754 115.75L141.445 141.125C139.266 143.25 138.055 146.125 138.055 149.125C138.055 155.25 143.141 160.375 149.438 160.375H165.422C168.449 160.375 171.355 159.25 173.414 157.125L182.859 147.75C184.918 145.625 186.129 142.75 186.129 139.75V123.75Z" />
        </Icon>
    </>
}