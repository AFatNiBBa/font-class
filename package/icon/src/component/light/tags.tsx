
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=light tags}
 * @preview ![tags](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMTIwQzk4Ljc1IDEyMCA4OCAxMzAuNzQyIDg4IDE0NEM4OCAxNTcuMjU2IDk4Ljc1IDE2OCAxMTIgMTY4UzEzNiAxNTcuMjU2IDEzNiAxNDRDMTM2IDEzMC43NDIgMTI1LjI1IDEyMCAxMTIgMTIwWk00MzEuNTk4IDIyNS42MDRMMjU0LjQwMiA0OC40MDJDMjQ1LjM4MSAzOS4zODEgMjI3LjU2MiAzMiAyMTQuODA1IDMySDI4QzEyLjUzNSAzMiAwIDQ0LjUzNSAwIDYwVjI0Ni44MDNDMCAyNTkuNTYxIDcuMzgxIDI3Ny4zODEgMTYuNDAyIDI4Ni40MDJMMTkzLjU5MiA0NjMuNTk4QzIwNC41MjcgNDc0LjUzMSAyMTguODU5IDQ4MCAyMzMuMTg5IDQ4MEMyNDcuNTIxIDQ4MCAyNjEuODUyIDQ3NC41MzMgMjcyLjc4NyA0NjMuNkw0MzEuNTk2IDMwNC44MDFDNDUzLjQ2NyAyODIuOTMyIDQ1My40NjkgMjQ3LjQ3MyA0MzEuNTk4IDIyNS42MDRaTTQwOC45NjkgMjgyLjE3MkwyNTAuMTYyIDQ0MC45NjlDMjQ1LjYyOSA0NDUuNTAyIDIzOS42MDIgNDQ4IDIzMy4xODkgNDQ4QzIyNi43NzkgNDQ4IDIyMC43NTIgNDQ1LjUwMiAyMTYuMjIxIDQ0MC45NzFMMzkuMDI5IDI2My43NzNDMzYuMDA4IDI2MC43NTIgMzIgMjUxLjA3NiAzMiAyNDYuODAzVjY0SDIxNC44MDVDMjE5LjA3OCA2NCAyMjguNzUyIDY4LjAwOCAyMzEuNzc1IDcxLjAyOUw0MDguOTcxIDI0OC4yMzJDNDEzLjUwNCAyNTIuNzY0IDQxNiAyNTguNzkxIDQxNiAyNjUuMjAxUzQxMy41MDQgMjc3LjYzOSA0MDguOTY5IDI4Mi4xNzJaTTU1OS41OTggMjI1LjYwNEwzODIuNDAyIDQ4LjQwMkMzNzMuMzgzIDM5LjM4MSAzNTUuNTYyIDMyIDM0Mi44MDUgMzJIMzM2QzMyNy4xNjQgMzIgMzIwIDM5LjE2MiAzMjAgNDhDMzIwIDU2LjgzNiAzMjcuMTY0IDY0IDMzNiA2NEgzNDIuODA3QzM0OC4yNzMgNjQgMzU1LjkxIDY3LjE2MiAzNTkuNzc1IDcxLjAyOUw1MzYuOTcxIDI0OC4yMzJDNTQxLjUwNCAyNTIuNzY0IDU0NCAyNTguNzkxIDU0NCAyNjUuMjAxUzU0MS41MDQgMjc3LjYzOSA1MzYuOTY5IDI4Mi4xNzJMMzY2LjQ2NyA0NTIuNjg2QzM2MC4yMTkgNDU4LjkzNCAzNjAuMjE5IDQ2OS4wNjIgMzY2LjQ2NSA0NzUuMzEyQzM3Mi43MTUgNDgxLjU2MSAzODIuODQ2IDQ4MS41NjIgMzg5LjA5NiA0NzUuMzEyTDU1OS41OTYgMzA0LjgwMUM1ODEuNDY3IDI4Mi45MzIgNTgxLjQ2OSAyNDcuNDczIDU1OS41OTggMjI1LjYwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Tags: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 120C98.75 120 88 130.742 88 144C88 157.256 98.75 168 112 168S136 157.256 136 144C136 130.742 125.25 120 112 120ZM431.598 225.604L254.402 48.402C245.381 39.381 227.562 32 214.805 32H28C12.535 32 0 44.535 0 60V246.803C0 259.561 7.381 277.381 16.402 286.402L193.592 463.598C204.527 474.531 218.859 480 233.189 480C247.521 480 261.852 474.533 272.787 463.6L431.596 304.801C453.467 282.932 453.469 247.473 431.598 225.604ZM408.969 282.172L250.162 440.969C245.629 445.502 239.602 448 233.189 448C226.779 448 220.752 445.502 216.221 440.971L39.029 263.773C36.008 260.752 32 251.076 32 246.803V64H214.805C219.078 64 228.752 68.008 231.775 71.029L408.971 248.232C413.504 252.764 416 258.791 416 265.201S413.504 277.639 408.969 282.172ZM559.598 225.604L382.402 48.402C373.383 39.381 355.562 32 342.805 32H336C327.164 32 320 39.162 320 48C320 56.836 327.164 64 336 64H342.807C348.273 64 355.91 67.162 359.775 71.029L536.971 248.232C541.504 252.764 544 258.791 544 265.201S541.504 277.639 536.969 282.172L366.467 452.686C360.219 458.934 360.219 469.062 366.465 475.312C372.715 481.561 382.846 481.562 389.096 475.312L559.596 304.801C581.467 282.932 581.469 247.473 559.598 225.604Z" />
    </Icon>
);

export default Tags;