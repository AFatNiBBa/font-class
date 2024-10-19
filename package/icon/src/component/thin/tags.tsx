
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=thin tags}
 * @preview ![tags](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTkuNTk4IDIyNS42MDRMMzgyLjQwMiA0OC40MDJDMzczLjM4MSAzOS4zODEgMzU1LjU2MiAzMiAzNDIuODA1IDMySDI4My4yNTZMMjk5LjI1NiA0OEgzNDIuODA1QzM1MS4zMiA0OCAzNjUuMDY2IDUzLjY5MyAzNzEuMDg4IDU5LjcxNUw1NDguMjg1IDIzNi45MThDNTU1Ljg0IDI0NC40NzMgNTYwIDI1NC41MTggNTYwIDI2NS4yMDNDNTYwIDI3NS44ODcgNTU1Ljg0IDI4NS45MzIgNTQ4LjI4MyAyOTMuNDg2TDM4OS40NzMgNDUyLjI4NUMzODEuOTE4IDQ1OS44NCAzNzEuODczIDQ2NCAzNjEuMTg5IDQ2NFMzNDAuNDYxIDQ1OS44MzggMzMyLjkwNiA0NTIuMjgzTDMzMS4xMzMgNDUwLjUxTDMxOS44MTggNDYxLjgyNEwzMjEuNTkyIDQ2My41OThDMzMyLjUyNyA0NzQuNTMzIDM0Ni44NTcgNDgwIDM2MS4xODkgNDgwQzM3NS41MiA0ODAgMzg5Ljg1NCA0NzQuNTMxIDQwMC43ODcgNDYzLjZMNTU5LjU5OCAzMDQuODAxQzU4MS40NjcgMjgyLjkzMiA1ODEuNDY5IDI0Ny40NzUgNTU5LjU5OCAyMjUuNjA0Wk00MzEuNTk4IDIyNS42MDRMMjU0LjQwMiA0OC40MDJDMjQ1LjM4MSAzOS4zODEgMjI3LjU2MiAzMiAyMTQuODA1IDMySDI4QzEyLjUzNyAzMiAwIDQ0LjUzNSAwIDYwVjI0Ni44MDNDMCAyNTkuNTYxIDcuMzgxIDI3Ny4zODEgMTYuNDAyIDI4Ni40MDJMMTkzLjU5MiA0NjMuNTk4QzIwNC41MjcgNDc0LjUzMyAyMTguODU3IDQ4MCAyMzMuMTg5IDQ4MEMyNDcuNTIgNDgwIDI2MS44NTQgNDc0LjUzMSAyNzIuNzg3IDQ2My42TDQzMS41OTggMzA0LjgwMUM0NTMuNDY3IDI4Mi45MzIgNDUzLjQ2OSAyNDcuNDc1IDQzMS41OTggMjI1LjYwNFpNMjYxLjQ3MyA0NTIuMjg1QzI1My45MTggNDU5Ljg0IDI0My44NzMgNDY0IDIzMy4xODkgNDY0UzIxMi40NjEgNDU5LjgzOCAyMDQuOTA2IDQ1Mi4yODNMMjcuNzE3IDI3NS4wODhDMjEuNjkzIDI2OS4wNjYgMTYgMjU1LjMyIDE2IDI0Ni44MDNWNjBDMTYgNTMuMzgzIDIxLjM4MyA0OCAyOCA0OEgyMTQuODA1QzIyMy4zMiA0OCAyMzcuMDY2IDUzLjY5MyAyNDMuMDg4IDU5LjcxNUw0MjAuMjg1IDIzNi45MThDNDI3Ljg0IDI0NC40NzMgNDMyIDI1NC41MTggNDMyIDI2NS4yMDNDNDMyIDI3NS44ODcgNDI3Ljg0IDI4NS45MzIgNDIwLjI4MyAyOTMuNDg2TDI2MS40NzMgNDUyLjI4NVpNMTEyIDEwNEM4OS45MTYgMTA0IDcyIDEyMS45MDIgNzIgMTQ0QzcyIDE2Ni4wOTYgODkuOTE2IDE4NCAxMTIgMTg0UzE1MiAxNjYuMDk2IDE1MiAxNDRDMTUyIDEyMS45MDIgMTM0LjA4NCAxMDQgMTEyIDEwNFpNMTEyIDE2OEM5OC43NjggMTY4IDg4IDE1Ny4yMzIgODggMTQ0Qzg4IDEzMC43NjYgOTguNzY4IDEyMCAxMTIgMTIwQzEyNS4yMzQgMTIwIDEzNiAxMzAuNzY2IDEzNiAxNDRDMTM2IDE1Ny4yMzIgMTI1LjIzNCAxNjggMTEyIDE2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tags: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M559.598 225.604L382.402 48.402C373.381 39.381 355.562 32 342.805 32H283.256L299.256 48H342.805C351.32 48 365.066 53.693 371.088 59.715L548.285 236.918C555.84 244.473 560 254.518 560 265.203C560 275.887 555.84 285.932 548.283 293.486L389.473 452.285C381.918 459.84 371.873 464 361.189 464S340.461 459.838 332.906 452.283L331.133 450.51L319.818 461.824L321.592 463.598C332.527 474.533 346.857 480 361.189 480C375.52 480 389.854 474.531 400.787 463.6L559.598 304.801C581.467 282.932 581.469 247.475 559.598 225.604ZM431.598 225.604L254.402 48.402C245.381 39.381 227.562 32 214.805 32H28C12.537 32 0 44.535 0 60V246.803C0 259.561 7.381 277.381 16.402 286.402L193.592 463.598C204.527 474.533 218.857 480 233.189 480C247.52 480 261.854 474.531 272.787 463.6L431.598 304.801C453.467 282.932 453.469 247.475 431.598 225.604ZM261.473 452.285C253.918 459.84 243.873 464 233.189 464S212.461 459.838 204.906 452.283L27.717 275.088C21.693 269.066 16 255.32 16 246.803V60C16 53.383 21.383 48 28 48H214.805C223.32 48 237.066 53.693 243.088 59.715L420.285 236.918C427.84 244.473 432 254.518 432 265.203C432 275.887 427.84 285.932 420.283 293.486L261.473 452.285ZM112 104C89.916 104 72 121.902 72 144C72 166.096 89.916 184 112 184S152 166.096 152 144C152 121.902 134.084 104 112 104ZM112 168C98.768 168 88 157.232 88 144C88 130.766 98.768 120 112 120C125.234 120 136 130.766 136 144C136 157.232 125.234 168 112 168Z" />
    </Icon>
);

export default Tags;