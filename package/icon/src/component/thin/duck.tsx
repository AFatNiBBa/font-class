
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `duck` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/duck?s=thin duck}
 * @preview ![duck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuOTk4IDIzMkM0OTcuMzQyIDIzMiA1NDMuOTk4IDE4NS4zNDQgNTQzLjk5OCAxMjhDNTQzLjk5OCAxMjMuNTk0IDU0MC40MDUgMTIwIDUzNS45OTggMTIwSDQ3OS42ODZDNDc1LjU5MiA2Ni4zNzUgNDMwLjY1NSAyNCAzNzUuOTk4IDI0QzMxOC42NTUgMjQgMjcyLjAzIDcwLjY1NiAyNzIuMDMgMTI4QzI3Mi4wMyAxNTIuMTg4IDI4MC4zMTEgMTc0LjkwNiAyOTUuOTk4IDE5My43NUMzMDEuMjQ4IDIwMC4wMzEgMzA0LjAzIDIwNy40MzggMzA0LjAzIDIxNS4xMjVDMzA0LjAzIDIzMy4yNSAyODkuMjggMjQ4IDI3MS4xNTUgMjQ4SDI0MS40MDVDMjEwLjM3MyAyNDggMTY0LjQ2NyAyMzQuNDM4IDE0NS42MjMgMjE0LjMxM0MxMzguODczIDIwNy4wMzEgMTI4LjQ5OCAyMDQuNjI1IDExOS4yNDggMjA4LjI1QzEwOS45OTggMjExLjkwNiAxMDQuMDMgMjIwLjY4OCAxMDQuMDMgMjMwLjYyNUMxMDQuMDMgMzE5LjU5NCAxNzYuNDM2IDM5MiAyNjUuNDA1IDM5MkMyNjkuODExIDM5MiAyNzMuNDA1IDM4OC40MDYgMjczLjQwNSAzODRTMjY5LjgxMSAzNzYgMjY1LjQwNSAzNzZDMTg1LjI0OCAzNzYgMTIwLjAzIDMxMC43ODEgMTIwLjAzIDIzMC42MjVDMTIwLjAzIDIyNS41MzEgMTIzLjkzNiAyMjMuNjI1IDEyNS4xMjMgMjIzLjE1NkMxMjYuMzExIDIyMi42NTYgMTMwLjQwNSAyMjEuNDA2IDEzMy45MzYgMjI1LjIxOUMxNTYuNjIzIDI0OS41IDIwNi40MDUgMjY0IDI0MS40MDUgMjY0SDI3MS4xNTVDMjk4LjA5MiAyNjQgMzIwLjAzIDI0Mi4wNjIgMzIwLjAzIDIxNS4xMjVDMzIwLjAzIDIwMy44MTIgMzE1Ljg3MyAxOTIuNTk0IDMwOC4zMTEgMTgzLjVDMjk1LjAzIDE2Ny41OTQgMjg4LjAzIDE0OC40MDYgMjg4LjAzIDEyOEMyODguMDMgNzkuNDY5IDMyNy40OTggNDAgMzc1Ljk5OCA0MEM0MjQuNTMgNDAgNDYzLjk5OCA3OS40NjkgNDYzLjk5OCAxMjhDNDYzLjk5OCAxMzguMDYyIDQ2Mi4zMTEgMTQ3LjkwNiA0NTguOTk4IDE1Ny4zNDRDNDU1LjQ1MSAxNjcuMzgyIDQ3MC41NDcgMTcyLjYyOCA0NzQuMDYxIDE2Mi42NTZDNDc3LjEwNCAxNTQuMDU5IDQ3OC42MiAxNDUuMDkgNDc5LjMxOSAxMzZINTI3LjYyM0M1MjMuNTkyIDE4MC43ODEgNDg1Ljg0MiAyMTYgNDM5Ljk5OCAyMTZINDEzLjM3M0M0MTAuNDk4IDIxNiA0MDcuODExIDIxNy41NjIgNDA2LjQwNSAyMjAuMDYyQzQwMi4xNTUgMjI3LjYyNSAzOTkuOTk4IDIzNS41OTQgMzk5Ljk5OCAyNDMuNzVDMzk5Ljk5OCAyNTkuNTk0IDQwNy42ODYgMjc0LjU2MiA0MjAuNTkyIDI4My44NzVDNDUxLjQwNSAzMDUuOTY5IDQ2Ny40MzYgMzQxLjY4NyA0NjMuNDM2IDM3OS4zNzVDNDU4LjA2MSA0MjguNzE5IDQwNy4yMTcgNDcyIDM1NC42MjMgNDcySDI2My40MDVDMTUwLjk2NyA0NzIgNTYuMzQyIDM4NC4yMTkgNDcuOTk4IDI3Mi4yMTlDNDcuNjE1IDI2NS45ODkgNTMuODA4IDI2NCA1Ni4xNTUgMjY0SDcxLjk5OEM3Ni40MDUgMjY0IDc5Ljk5OCAyNjAuNDA2IDc5Ljk5OCAyNTZTNzYuNDA1IDI0OCA3MS45OTggMjQ4SDU2LjE1NUM0OS40MzYgMjQ4IDQyLjkzNiAyNTAuODEyIDM4LjM0MiAyNTUuNzVDMzMuODQyIDI2MC41NjIgMzEuNTkyIDI2Ni44MTIgMzIuMDYxIDI3My4zNDRDNDAuOTk4IDM5My43MTkgMTQyLjYyMyA0ODggMjYzLjQwNSA0ODhIMzU0LjYyM0M0MTUuOTM2IDQ4OCA0NzMuMDMgNDM5LjA2MiA0NzkuMzQyIDM4MS4wOTRDNDgzLjkzNiAzMzcuNTk0IDQ2NS40NjcgMjk2LjM3NSA0MjkuOTM2IDI3MC44NzVDNDIxLjIxNyAyNjQuNTk0IDQxNS45OTggMjU0LjQ2OSA0MTUuOTk4IDI0My43NUM0MTUuOTk4IDIzOS43ODEgNDE2Ljc4IDIzNS44NDQgNDE4LjM3MyAyMzJINDM5Ljk5OFpNNDAwLjAwNiAxMjhDNDAwLjAwNiAxMTkuMTI1IDM5Mi44ODEgMTEyIDM4NC4wMSAxMTJDMzc1LjEzNSAxMTIgMzY4LjAxIDExOS4xMjUgMzY4LjAxIDEyOFMzNzUuMTM1IDE0NCAzODQuMDEgMTQ0QzM5Mi44ODEgMTQ0IDQwMC4wMDYgMTM2Ljg3NSA0MDAuMDA2IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Duck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M439.998 232C497.342 232 543.998 185.344 543.998 128C543.998 123.594 540.405 120 535.998 120H479.686C475.592 66.375 430.655 24 375.998 24C318.655 24 272.03 70.656 272.03 128C272.03 152.188 280.311 174.906 295.998 193.75C301.248 200.031 304.03 207.438 304.03 215.125C304.03 233.25 289.28 248 271.155 248H241.405C210.373 248 164.467 234.438 145.623 214.313C138.873 207.031 128.498 204.625 119.248 208.25C109.998 211.906 104.03 220.688 104.03 230.625C104.03 319.594 176.436 392 265.405 392C269.811 392 273.405 388.406 273.405 384S269.811 376 265.405 376C185.248 376 120.03 310.781 120.03 230.625C120.03 225.531 123.936 223.625 125.123 223.156C126.311 222.656 130.405 221.406 133.936 225.219C156.623 249.5 206.405 264 241.405 264H271.155C298.092 264 320.03 242.062 320.03 215.125C320.03 203.812 315.873 192.594 308.311 183.5C295.03 167.594 288.03 148.406 288.03 128C288.03 79.469 327.498 40 375.998 40C424.53 40 463.998 79.469 463.998 128C463.998 138.062 462.311 147.906 458.998 157.344C455.451 167.382 470.547 172.628 474.061 162.656C477.104 154.059 478.62 145.09 479.319 136H527.623C523.592 180.781 485.842 216 439.998 216H413.373C410.498 216 407.811 217.562 406.405 220.062C402.155 227.625 399.998 235.594 399.998 243.75C399.998 259.594 407.686 274.562 420.592 283.875C451.405 305.969 467.436 341.687 463.436 379.375C458.061 428.719 407.217 472 354.623 472H263.405C150.967 472 56.342 384.219 47.998 272.219C47.615 265.989 53.808 264 56.155 264H71.998C76.405 264 79.998 260.406 79.998 256S76.405 248 71.998 248H56.155C49.436 248 42.936 250.812 38.342 255.75C33.842 260.562 31.592 266.812 32.061 273.344C40.998 393.719 142.623 488 263.405 488H354.623C415.936 488 473.03 439.062 479.342 381.094C483.936 337.594 465.467 296.375 429.936 270.875C421.217 264.594 415.998 254.469 415.998 243.75C415.998 239.781 416.78 235.844 418.373 232H439.998ZM400.006 128C400.006 119.125 392.881 112 384.01 112C375.135 112 368.01 119.125 368.01 128S375.135 144 384.01 144C392.881 144 400.006 136.875 400.006 128Z" />
        </Icon>
    </>
}