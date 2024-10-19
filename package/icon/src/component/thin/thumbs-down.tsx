
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=thin thumbs-down}
 * @preview ![thumbs-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjg4VjY0QzEyOCA0Ni4zMjYgMTEzLjY3NCAzMiA5NiAzMkgzMkMxNC4zMjYgMzIgMCA0Ni4zMjYgMCA2NFYyODhDMCAzMDUuNjcyIDE0LjMyNiAzMjAgMzIgMzIwSDk2QzExMy42NzQgMzIwIDEyOCAzMDUuNjcyIDEyOCAyODhaTTExMiAyODhDMTEyIDI5Ni44MjIgMTA0LjgyMiAzMDQgOTYgMzA0SDMyQzIzLjE3OCAzMDQgMTYgMjk2LjgyMiAxNiAyODhWNjRDMTYgNTUuMTc4IDIzLjE3OCA0OCAzMiA0OEg5NkMxMDQuODIyIDQ4IDExMiA1NS4xNzggMTEyIDY0VjI4OFpNNDc1IDIzMS45MzhDNDc5LjIwMyAyMjQuMjE5IDQ4MS40NTMgMjE1LjU3OCA0ODEuNDUzIDIwNi43MzRDNDgxLjQ1MyAxODQuNSA0NjcuNjQxIDE2NC45ODQgNDQ3LjQ1MyAxNTcuMDc4QzQ0OS43MzQgMTUxLjEwOSA0NTAuOTA2IDE0NC44MjggNDUwLjkwNiAxMzguNTMxQzQ1MC45MDYgMTE3LjcxOSA0MzguNzgxIDk5LjE1NiA0MjAuMTA5IDkwLjQwNkM0MjAuMjgxIDg4Ljc1IDQyMC4zNTkgODcuMTA5IDQyMC4zNTkgODUuNDY5QzQyMC4zNTkgNTUuOTg0IDM5Ni4yMTkgMzIgMzY2LjU0NyAzMkgzMTAuNTE2QzI3NiAzMiAyNDEuNzY2IDQzLjMyOCAyMTQuMTI1IDYzLjg5MUwxNjMuNTc4IDk3LjMyOEMxNjEuMjYgOTguODY3IDE2MCAxMDEuNDE1IDE2MCAxMDQuMDEzQzE2MCAxMDguNDM0IDE2My42MDEgMTEyLjAxMyAxNjguMDAzIDExMi4wMTNDMTY5LjUxNyAxMTIuMDEzIDE3MS4wNTIgMTExLjU4MSAxNzIuNDIyIDExMC42NzJMMjIzLjMyOCA3Ni45ODRDMjQ4LjU3OCA1OC4yMDMgMjc5LjQyMiA0OCAzMTAuNTE2IDQ4SDM2Ni41NDdDMzg3LjM5MSA0OCA0MDQuMzU5IDY0LjgxMiA0MDQuMzU5IDg1LjQ2OUM0MDQuMzU5IDkwLjk2OSA0MDMuMTczIDkzLjMwMSA0MDMuMTczIDk1LjQ3NkM0MDMuMTczIDk4Ljg3OSA0MDUuMzUgMTAyIDQwOC43MTkgMTAzLjA3OEM0MjQuMzc1IDEwOC4xMjUgNDM0LjkwNiAxMjIuMzc1IDQzNC45MDYgMTM4LjUzMUM0MzQuOTA2IDE1Mi41NDQgNDI4LjA5NCAxNTYuOTc2IDQyOC4wOTQgMTYyLjEwN0M0MjguMDk0IDE2Ni44MzQgNDMxLjgyIDE2OS40NTkgNDM0LjY0MSAxNjkuOTY5QzQ1Mi41IDE3My4yODEgNDY1LjQ1MyAxODguNzUgNDY1LjQ1MyAyMDYuNzM0QzQ2NS40NTMgMjI2LjIyOSA0NTMuMzA4IDIzMC4xMTUgNDUzLjMwOCAyMzcuMzZDNDUzLjMwOCAyNDEuNTIgNDU2LjUzIDI0NS4wNDMgNDYwLjc2NiAyNDUuMzQ0QzQ4MC41MzEgMjQ2LjY4OCA0OTYgMjYzLjAzMSA0OTYgMjgyLjUzMUM0OTYgMzAzLjE4OCA0NzkuMDMxIDMyMCA0NTguMTg4IDMyMEgzMTQuNjcyQzMxMC40MDYgMzIwIDMwNi42NzUgMzIzLjQzMiAzMDYuNjc1IDMyOC4wMTNDMzA2LjY3NSAzMjkuNTYyIDMwNy4xMjMgMzMxLjEwNCAzMDguMDE2IDMzMi40MzdMMzEzLjM0NCAzNDAuNDM3QzMzNC45NTMgMzc2LjQyMiAzNDQgNDE0LjAxNiAzNDQgNDI2LjA3OEMzNDQgNDQ0LjcxOSAzMjkuMzI4IDQ2NCAzMDQuNzgxIDQ2NEMyNTIuOTY2IDQ2NCAyODUuNDU5IDM5My43MzcgMjA2LjQ2OSAzMzAuNTYyTDE3Mi43NjYgMzA1LjU3OEMxNzEuMzM0IDMwNC41MTIgMTY5LjY2NSAzMDMuOTk5IDE2OC4wMTEgMzAzLjk5OUMxNjUuNDIyIDMwMy45OTkgMTU5Ljk5OSAzMDYuMDQyIDE1OS45OTkgMzExLjk5NEMxNTkuOTk5IDMxNC40NDEgMTYxLjExOSAzMTYuODU3IDE2My4yMzQgMzE4LjQyMkwxOTYuNzAzIDM0My4yMzRDMjcyLjM4NiA0MDMuNzgxIDIzNi45OSA0ODAgMzA0Ljc4MSA0ODBDMzM5LjM0NCA0ODAgMzYwIDQ1Mi41NzggMzYwIDQyNi4wNzhDMzYwIDQxMC45MjIgMzUwLjIxOSAzNzIuNDUzIDMyOS4yODEgMzM2SDQ1OC4xODhDNDg3Ljg1OSAzMzYgNTEyIDMxMi4wMTYgNTEyIDI4Mi41MzFDNTEyIDI1OS4xNzIgNDk2LjU0NyAyMzkgNDc1IDIzMS45MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ThumbsDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 288V64C128 46.326 113.674 32 96 32H32C14.326 32 0 46.326 0 64V288C0 305.672 14.326 320 32 320H96C113.674 320 128 305.672 128 288ZM112 288C112 296.822 104.822 304 96 304H32C23.178 304 16 296.822 16 288V64C16 55.178 23.178 48 32 48H96C104.822 48 112 55.178 112 64V288ZM475 231.938C479.203 224.219 481.453 215.578 481.453 206.734C481.453 184.5 467.641 164.984 447.453 157.078C449.734 151.109 450.906 144.828 450.906 138.531C450.906 117.719 438.781 99.156 420.109 90.406C420.281 88.75 420.359 87.109 420.359 85.469C420.359 55.984 396.219 32 366.547 32H310.516C276 32 241.766 43.328 214.125 63.891L163.578 97.328C161.26 98.867 160 101.415 160 104.013C160 108.434 163.601 112.013 168.003 112.013C169.517 112.013 171.052 111.581 172.422 110.672L223.328 76.984C248.578 58.203 279.422 48 310.516 48H366.547C387.391 48 404.359 64.812 404.359 85.469C404.359 90.969 403.173 93.301 403.173 95.476C403.173 98.879 405.35 102 408.719 103.078C424.375 108.125 434.906 122.375 434.906 138.531C434.906 152.544 428.094 156.976 428.094 162.107C428.094 166.834 431.82 169.459 434.641 169.969C452.5 173.281 465.453 188.75 465.453 206.734C465.453 226.229 453.308 230.115 453.308 237.36C453.308 241.52 456.53 245.043 460.766 245.344C480.531 246.688 496 263.031 496 282.531C496 303.188 479.031 320 458.188 320H314.672C310.406 320 306.675 323.432 306.675 328.013C306.675 329.562 307.123 331.104 308.016 332.437L313.344 340.437C334.953 376.422 344 414.016 344 426.078C344 444.719 329.328 464 304.781 464C252.966 464 285.459 393.737 206.469 330.562L172.766 305.578C171.334 304.512 169.665 303.999 168.011 303.999C165.422 303.999 159.999 306.042 159.999 311.994C159.999 314.441 161.119 316.857 163.234 318.422L196.703 343.234C272.386 403.781 236.99 480 304.781 480C339.344 480 360 452.578 360 426.078C360 410.922 350.219 372.453 329.281 336H458.188C487.859 336 512 312.016 512 282.531C512 259.172 496.547 239 475 231.938Z" />
        </Icon>
    </>
}