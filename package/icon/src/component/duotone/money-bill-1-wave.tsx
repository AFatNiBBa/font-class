
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bill-1-wave` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-1-wave?s=duotone money-bill-1-wave}
 * @preview ![money-bill-1-wave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3MiA4OEM0NzIgODUuODA1IDQ3Mi40MTggODMuNzI5IDQ3Mi42NDMgODEuNTk0QzQ2Ni41MTYgODEuMDg2IDQ2MC42NjQgODAgNDU0LjI3NSA4MEM0MDUuNDkyIDgwIDM1NC43MzQgOTQuMjc3IDMwMC45OTggMTA5LjM5NUMyNDMuMzU3IDEyNS42MDkgMTgzLjc1NCAxNDIuMzc1IDEyMS43MjUgMTQyLjM3NUMxMTcuODYxIDE0Mi4zNzUgMTE0LjI0MiAxNDEuODUgMTEwLjQ0MyAxNDEuNzIxQzEwNC4xNSAxNzAuNDU5IDc4LjYyNSAxOTIgNDggMTkyVjM2MC44MDdDNzkuNTI3IDM2NC43ODMgMTA0IDM5MS4zOTUgMTA0IDQyNEMxMDQgNDI2LjE5NSAxMDMuNTgyIDQyOC4yNzEgMTAzLjM1NyA0MzAuNDA2QzEwOS40ODQgNDMwLjkxNCAxMTUuMzM2IDQzMiAxMjEuNzI1IDQzMkMxNzAuNTA4IDQzMiAyMjEuMjY2IDQxNy43MjMgMjc1LjAwMiA0MDIuNjA1QzMzMi42NDMgMzg2LjM5MSAzOTIuMjQ2IDM2OS42MjUgNDU0LjI3NSAzNjkuNjI1QzQ1OC4xMzcgMzY5LjYyNSA0NjEuNzU4IDM3MC4xNSA0NjUuNTU3IDM3MC4yNzlDNDcxLjg1IDM0MS41NDEgNDk3LjM3NSAzMjAgNTI4IDMyMFYxNTEuMTkzQzQ5Ni40NzMgMTQ3LjIxNyA0NzIgMTIwLjYwNSA0NzIgODhaTTI4OCAzNzEuMTk5QzIzNC45OCAzNzEuMTk5IDE5MiAzMTkuNjIxIDE5MiAyNTZDMTkyIDE5Mi4zNzcgMjM0Ljk4IDE0MC44MDEgMjg4IDE0MC44MDFDMzQxLjAyMSAxNDAuODAxIDM4NCAxOTIuMzc3IDM4NCAyNTZDMzg0IDMxOS42MjEgMzQxLjAyMSAzNzEuMTk5IDI4OCAzNzEuMTk5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTYuNDQzIDI4MS42SDMwNy4yMDFWMjAxLjk1N0MzMDcuMjAxIDE5Ni41MTIgMzAyLjY4OCAxOTIgMjk3LjI0NCAxOTJIMjY4LjgwMUMyNjUuMDY4IDE5MiAyNjIuMzI2IDE5NC4xNzggMjYwLjYxNSAxOTcuNDQzTDI1MC42NjIgMjE1LjkzNEMyNDkuMTA3IDIxOS4wNDMgMjQ5LjI2NCAyMjIuNzc3IDI1MS4xMjUgMjI1LjczNEMyNTIuODM4IDIyOC41MzUgMjU2LjEwNyAyMzAuNCAyNTkuNTI1IDIzMC40SDI2OC44MDFWMjgxLjZIMjU5LjU1N0MyNTQuMTEzIDI4MS42IDI0OS42IDI4Ni4xMTMgMjQ5LjYgMjkxLjU1N1YzMTAuMDQzQzI0OS42IDMxNS40ODggMjU0LjExMyAzMjAgMjU5LjU1NyAzMjBIMzE2LjQ0M0MzMjEuODg5IDMyMCAzMjYuNCAzMTUuNDg4IDMyNi40IDMxMC4wNDNWMjkxLjU1N0MzMjYuNCAyODYuMTEzIDMyMS44ODkgMjgxLjYgMzE2LjQ0MyAyODEuNlpNNTU5LjAxMiA1NC41QzUyNC4xMzcgMzguMjUgNDg5LjE1IDMyIDQ1NC4yNzUgMzJDMzQzLjQ2MyAzMiAyMzIuNTM3IDk0LjM3NSAxMjEuNzI1IDk0LjM3NUM5My45MzcgOTQuMzc1IDY2LjE1IDkwLjM3NSAzOC4zNjMgODAuNjI1QzM1LjIxMyA3OS41IDMyLjA2MiA3OSAyOS4wMjUgNzlDMTMuNSA3OSAwIDkyLjM3NSAwIDExMC43NVY0MjguMTI1QzAgNDQwLjc1IDYuNTI1IDQ1Mi42MjUgMTYuOTg4IDQ1Ny41QzUxLjg2MyA0NzMuNzUgODYuODUgNDgwIDEyMS43MjUgNDgwQzIzMi41MzcgNDgwIDM0My40NjMgNDE3LjYyNSA0NTQuMjc1IDQxNy42MjVDNDgyLjA2MiA0MTcuNjI1IDUwOS44NSA0MjEuNjI1IDUzNy42MzcgNDMxLjM3NUM1NDAuNzg3IDQzMi41IDU0My45MzcgNDMzIDU0Ni45NzUgNDMzQzU2Mi41IDQzMyA1NzYgNDE5LjYyNSA1NzYgNDAxLjEyNVY4My44NzVDNTc2IDcxLjI1IDU2OS40NzUgNTkuMzc1IDU1OS4wMTIgNTQuNVpNNTI4IDMyMEM0OTcuMzc1IDMyMCA0NzEuODUgMzQxLjU0MSA0NjUuNTU3IDM3MC4yNzlDNDYxLjc1OCAzNzAuMTUgNDU4LjEzNyAzNjkuNjI1IDQ1NC4yNzUgMzY5LjYyNUMzOTIuMjQ2IDM2OS42MjUgMzMyLjY0MyAzODYuMzkxIDI3NS4wMDIgNDAyLjYwNUMyMjEuMjY2IDQxNy43MjMgMTcwLjUwOCA0MzIgMTIxLjcyNSA0MzJDMTE1LjMzNiA0MzIgMTA5LjQ4NCA0MzAuOTE0IDEwMy4zNTcgNDMwLjQwNkMxMDMuNTgyIDQyOC4yNzEgMTA0IDQyNi4xOTUgMTA0IDQyNEMxMDQgMzkxLjM5NSA3OS41MjcgMzY0Ljc4MyA0OCAzNjAuODA3VjE5MkM3OC42MjUgMTkyIDEwNC4xNSAxNzAuNDU5IDExMC40NDMgMTQxLjcyMUMxMTQuMjQyIDE0MS44NSAxMTcuODYxIDE0Mi4zNzUgMTIxLjcyNSAxNDIuMzc1QzE4My43NTQgMTQyLjM3NSAyNDMuMzU3IDEyNS42MDkgMzAwLjk5OCAxMDkuMzk1QzM1NC43MzQgOTQuMjc3IDQwNS40OTIgODAgNDU0LjI3NSA4MEM0NjAuNjY0IDgwIDQ2Ni41MTYgODEuMDg2IDQ3Mi42NDMgODEuNTk0QzQ3Mi40MTggODMuNzI5IDQ3MiA4NS44MDUgNDcyIDg4QzQ3MiAxMjAuNjA1IDQ5Ni40NzMgMTQ3LjIxNyA1MjggMTUxLjE5M1YzMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoneyBill_1Wave(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M472 88C472 85.805 472.418 83.729 472.643 81.594C466.516 81.086 460.664 80 454.275 80C405.492 80 354.734 94.277 300.998 109.395C243.357 125.609 183.754 142.375 121.725 142.375C117.861 142.375 114.242 141.85 110.443 141.721C104.15 170.459 78.625 192 48 192V360.807C79.527 364.783 104 391.395 104 424C104 426.195 103.582 428.271 103.357 430.406C109.484 430.914 115.336 432 121.725 432C170.508 432 221.266 417.723 275.002 402.605C332.643 386.391 392.246 369.625 454.275 369.625C458.137 369.625 461.758 370.15 465.557 370.279C471.85 341.541 497.375 320 528 320V151.193C496.473 147.217 472 120.605 472 88ZM288 371.199C234.98 371.199 192 319.621 192 256C192 192.377 234.98 140.801 288 140.801C341.021 140.801 384 192.377 384 256C384 319.621 341.021 371.199 288 371.199Z" />
            <path d="M316.443 281.6H307.201V201.957C307.201 196.512 302.688 192 297.244 192H268.801C265.068 192 262.326 194.178 260.615 197.443L250.662 215.934C249.107 219.043 249.264 222.777 251.125 225.734C252.838 228.535 256.107 230.4 259.525 230.4H268.801V281.6H259.557C254.113 281.6 249.6 286.113 249.6 291.557V310.043C249.6 315.488 254.113 320 259.557 320H316.443C321.889 320 326.4 315.488 326.4 310.043V291.557C326.4 286.113 321.889 281.6 316.443 281.6ZM559.012 54.5C524.137 38.25 489.15 32 454.275 32C343.463 32 232.537 94.375 121.725 94.375C93.937 94.375 66.15 90.375 38.363 80.625C35.213 79.5 32.062 79 29.025 79C13.5 79 0 92.375 0 110.75V428.125C0 440.75 6.525 452.625 16.988 457.5C51.863 473.75 86.85 480 121.725 480C232.537 480 343.463 417.625 454.275 417.625C482.062 417.625 509.85 421.625 537.637 431.375C540.787 432.5 543.937 433 546.975 433C562.5 433 576 419.625 576 401.125V83.875C576 71.25 569.475 59.375 559.012 54.5ZM528 320C497.375 320 471.85 341.541 465.557 370.279C461.758 370.15 458.137 369.625 454.275 369.625C392.246 369.625 332.643 386.391 275.002 402.605C221.266 417.723 170.508 432 121.725 432C115.336 432 109.484 430.914 103.357 430.406C103.582 428.271 104 426.195 104 424C104 391.395 79.527 364.783 48 360.807V192C78.625 192 104.15 170.459 110.443 141.721C114.242 141.85 117.861 142.375 121.725 142.375C183.754 142.375 243.357 125.609 300.998 109.395C354.734 94.277 405.492 80 454.275 80C460.664 80 466.516 81.086 472.643 81.594C472.418 83.729 472 85.805 472 88C472 120.605 496.473 147.217 528 151.193V320Z" />
        </Icon>
    </>
}