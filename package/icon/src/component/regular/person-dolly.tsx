
import { Icon } from "../../index";

/**
 * A component that renders the `person-dolly` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly?s=regular person-dolly}
 * @preview ![person-dolly](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03OS45OTQgOTZDMTA2LjQ5MiA5NiAxMjcuOTkyIDc0LjUgMTI3Ljk5MiA0OFMxMDYuNDkyIDAgNzkuOTk0IDBTMzEuOTk2IDIxLjUgMzEuOTk2IDQ4UzUzLjQ5NiA5NiA3OS45OTQgOTZaTTAgNDg4QzAgNTAxLjI1IDEwLjc1IDUxMiAyNCA1MTJDMzcuMjQ2IDUxMiA0Ny45OTYgNTAxLjI1IDQ3Ljk5NiA0ODhWMzkyLjEyNUMzNS45OTYgMzgyLjYyNSAwLjUgMzU0LjI1IDAgMzUzLjg3NVY0ODhaTTUxMS4xMDkgMzg1LjUzMUM1MDcuNTQ3IDM3Mi43NjYgNDk0LjM1OSAzNjUuMjUgNDgxLjUxNiAzNjguODkxTDMzOC4zODMgNDA4Ljk3M0MzMjguMTYgMzk1Ljc5OSAzMTMuMDIxIDM4Ni44NjMgMjk1LjYyMSAzODQuNzdMMjM5LjE0OCAxNzcuNjg4QzIzNS42OCAxNjQuOTIyIDIyMi42OCAxNTcuMjM0IDIwOS42ODIgMTYwLjg0NEMxOTYuOSAxNjQuMzI4IDE4OS4zMzggMTc3LjUzMSAxOTIuODM4IDE5MC4zMTJMMjA2LjM1NCAyMzkuODc1SDE1OC4yMzhMMTI2LjI0MiAxNjIuMzc1QzExNy40OTIgMTQxLjUgOTcuMjQyIDEyNy44NzUgNzQuNDk2IDEyNy44NzVINTUuOTk2QzI1LjEyNSAxMjcuODc1IDAgMTUzIDAgMTgzLjg3NVYyODYuMjVDMCAyOTMuODc1IDMgMzE1Ljc1IDIxLjI1IDMzMC4yNUw5Ny43NDIgMzkwLjYyNUMxMDMuMzY3IDM5NS4xMjUgMTA3LjM2NyA0MDEuMzc1IDEwOC45OTIgNDA4LjVMMTI4LjYxNyA0OTMuMjVDMTMxLjI0IDUwNC43NSAxNDIuOTkgNTE0LjUgMTU3LjM2MyA1MTEuMjVDMTcwLjIzOCA1MDguMjUgMTc4LjM2MyA0OTUuMzc1IDE3NS4zNjMgNDgyLjVMMTUzLjk5IDM4OS41QzE1MS4xMTUgMzc3LjEyNSAxNDQuMTE1IDM2NiAxMzQuMTE1IDM1OC4xMjVMOTUuOTkyIDMyOC4xMjVWMjE0Ljc1TDExOC4yNDIgMjY4LjI1QzEyMy4yNDIgMjgwLjI1IDEzNC43NCAyODggMTQ3Ljc0IDI4OEgyMTkuNDc3TDI0OS4yOTUgMzk3LjMzNkMyMzQuMDEyIDQwOS4wMzEgMjIzLjk5MiA0MjcuMjcgMjIzLjk5MiA0NDhDMjIzLjk5MiA0ODMuMzQ2IDI1Mi42NDYgNTEyIDI4Ny45OSA1MTJDMzIwLjg2OSA1MTIgMzQ3LjYzOSA0ODcuMTE1IDM1MS4yNjIgNDU1LjIwN0w0OTQuNDUzIDQxNS4xMDlDNTA3LjIzNCA0MTEuNTMxIDUxNC42NzIgMzk4LjI5NyA1MTEuMTA5IDM4NS41MzFaTTI4Ny45OSA0NjRDMjc5LjE3IDQ2NCAyNzEuOTkyIDQ1Ni44MjIgMjcxLjk5MiA0NDhTMjc5LjE3IDQzMiAyODcuOTkgNDMyQzI5Ni44MTIgNDMyIDMwMy45OSA0MzkuMTc4IDMwMy45OSA0NDhTMjk2LjgxMiA0NjQgMjg3Ljk5IDQ2NFpNMzMxLjE5MyAzNjAuNThDMzMzLjQ0MyAzNjkuMDgyIDM0Mi4zMiAzNzQuMjA3IDM1MC44MjIgMzcxLjgzMkw0NjcuODQ4IDM0MC41NzZDNDc2LjM1IDMzOC4zMjQgNDgxLjM1IDMyOS40NDcgNDc5LjEgMzIwLjk0NUw0NDcuNzE5IDIwNC4wNDVDNDQ1LjM0MiAxOTUuNTQzIDQzNi41OSAxOTAuNDE2IDQyOC4wODggMTkyLjc5M0wzMTEuMDY0IDIyNC4wNDlDMzAyLjU2MiAyMjYuMzAxIDI5Ny40MzcgMjM1LjE3OCAyOTkuODEyIDI0My42OEwzMzEuMTkzIDM2MC41OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonDolly: typeof Icon = x => (
    <Icon {...x}>
        <path d="M79.994 96C106.492 96 127.992 74.5 127.992 48S106.492 0 79.994 0S31.996 21.5 31.996 48S53.496 96 79.994 96ZM0 488C0 501.25 10.75 512 24 512C37.246 512 47.996 501.25 47.996 488V392.125C35.996 382.625 0.5 354.25 0 353.875V488ZM511.109 385.531C507.547 372.766 494.359 365.25 481.516 368.891L338.383 408.973C328.16 395.799 313.021 386.863 295.621 384.77L239.148 177.688C235.68 164.922 222.68 157.234 209.682 160.844C196.9 164.328 189.338 177.531 192.838 190.312L206.354 239.875H158.238L126.242 162.375C117.492 141.5 97.242 127.875 74.496 127.875H55.996C25.125 127.875 0 153 0 183.875V286.25C0 293.875 3 315.75 21.25 330.25L97.742 390.625C103.367 395.125 107.367 401.375 108.992 408.5L128.617 493.25C131.24 504.75 142.99 514.5 157.363 511.25C170.238 508.25 178.363 495.375 175.363 482.5L153.99 389.5C151.115 377.125 144.115 366 134.115 358.125L95.992 328.125V214.75L118.242 268.25C123.242 280.25 134.74 288 147.74 288H219.477L249.295 397.336C234.012 409.031 223.992 427.27 223.992 448C223.992 483.346 252.646 512 287.99 512C320.869 512 347.639 487.115 351.262 455.207L494.453 415.109C507.234 411.531 514.672 398.297 511.109 385.531ZM287.99 464C279.17 464 271.992 456.822 271.992 448S279.17 432 287.99 432C296.812 432 303.99 439.178 303.99 448S296.812 464 287.99 464ZM331.193 360.58C333.443 369.082 342.32 374.207 350.822 371.832L467.848 340.576C476.35 338.324 481.35 329.447 479.1 320.945L447.719 204.045C445.342 195.543 436.59 190.416 428.088 192.793L311.064 224.049C302.562 226.301 297.437 235.178 299.812 243.68L331.193 360.58Z" />
    </Icon>
);

export default PersonDolly;