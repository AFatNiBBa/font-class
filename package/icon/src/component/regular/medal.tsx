
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `medal` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=regular medal}
 * @preview ![medal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDIuMTE1IDI4OS42MjVMMjg5Ljc0IDI4MkwyNjYuMjQgMjM0LjVDMjY0LjI0IDIzMC4yNSAyNjAuMTE1IDIyOC4xMjUgMjU1Ljk5IDIyOC4xMjVTMjQ3Ljg2NSAyMzAuMjUgMjQ1Ljc0IDIzNC41TDIyMi4yNCAyODJMMTY5Ljg2NiAyODkuNjI1QzE2MC40OTEgMjkxIDE1Ni42MTYgMzAyLjYyNSAxNjMuNDkxIDMwOS4yNUwyMDEuMzY1IDM0Ni4yNUwxOTIuNDkgMzk4LjVDMTkxLjExNSA0MDUuODc1IDE5Ny4xMTUgNDExLjg3NSAyMDMuNzQgNDExLjg3NUMyMDUuNDkgNDExLjg3NSAyMDcuMzY1IDQxMS41IDIwOS4xMTUgNDEwLjVMMjU1Ljk5IDM4NS44NzVMMzAyLjg2NSA0MTAuNUMzMDQuNjE1IDQxMS41IDMwNi40OSA0MTEuODc1IDMwOC4yNCA0MTEuODc1QzMxNC44NjUgNDExLjg3NSAzMjAuODY1IDQwNS44NzUgMzE5LjQ5IDM5OC4zNzVMMzEwLjYxNSAzNDYuMjVMMzQ4LjQ5IDMwOS4yNUMzNTUuMzY1IDMwMi42MjUgMzUxLjYxNSAyOTEgMzQyLjExNSAyODkuNjI1Wk0yNTYgMTQ0QzE1NC4zNzkgMTQ0IDcyLjAwMSAyMjYuMzc5IDcyLjAwMSAzMjhTMTU0LjM3OSA1MTIgMjU2IDUxMlM0MzkuOTk5IDQyOS42MjEgNDM5Ljk5OSAzMjhTMzU3LjYyMSAxNDQgMjU2IDE0NFpNMjU2IDQ2NEMxODEuMDEgNDY0IDEyMCA0MDIuOTkyIDEyMCAzMjhTMTgxLjAxIDE5MiAyNTYgMTkyUzM5MiAyNTMuMDA4IDM5MiAzMjhTMzMwLjk5IDQ2NCAyNTYgNDY0Wk0xMzUuODUyIDE0OC41MTJMNjguODQ0IDQ4SDEzOC4wNjNMMTgyLjE5IDEyNS4yMTlDMTk3LjY4IDExOS41NzggMjEzLjkyNCAxMTUuNTQ3IDIzMC44MzggMTEzLjU4NkwxNzIuODQ0IDEyLjA5NEMxNjguNTYzIDQuNjI1IDE2MC42MjUgMCAxNTIgMEgyNC4wMDFDMTUuMTU3IDAgNy4wMzIgNC44NzUgMi44NDUgMTIuNjg4Qy0xLjM0MyAyMC40NjkgLTAuODc0IDI5LjkzOCA0LjAzMiAzNy4zMTJMOTkuMDc1IDE3OS44NzVDMTEwLjE1NSAxNjguMTQxIDEyMi40MDEgMTU3LjUzMSAxMzUuODUyIDE0OC41MTJaTTUwOS4xNTUgMTIuNjg4QzUwNC45NjggNC44NzUgNDk2Ljg0MyAwIDQ4Ny45OTkgMEgzNjBDMzUxLjM3NSAwIDM0My40MzcgNC42MjUgMzM5LjE1NiAxMi4wOTRMMjgxLjE2MiAxMTMuNTg2QzI5OC4wNzYgMTE1LjU0NyAzMTQuMzIgMTE5LjU3OCAzMjkuODEgMTI1LjIxOUwzNzMuOTM3IDQ4SDQ0My4xNTZMMzc2LjE0OCAxNDguNTEyQzM4OS41OTkgMTU3LjUzMSA0MDEuODQ1IDE2OC4xNDEgNDEyLjkyNSAxNzkuODc1TDUwNy45NjggMzcuMzEyQzUxMi44NzQgMjkuOTM4IDUxMy4zNDMgMjAuNDY5IDUwOS4xNTUgMTIuNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Medal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M342.115 289.625L289.74 282L266.24 234.5C264.24 230.25 260.115 228.125 255.99 228.125S247.865 230.25 245.74 234.5L222.24 282L169.866 289.625C160.491 291 156.616 302.625 163.491 309.25L201.365 346.25L192.49 398.5C191.115 405.875 197.115 411.875 203.74 411.875C205.49 411.875 207.365 411.5 209.115 410.5L255.99 385.875L302.865 410.5C304.615 411.5 306.49 411.875 308.24 411.875C314.865 411.875 320.865 405.875 319.49 398.375L310.615 346.25L348.49 309.25C355.365 302.625 351.615 291 342.115 289.625ZM256 144C154.379 144 72.001 226.379 72.001 328S154.379 512 256 512S439.999 429.621 439.999 328S357.621 144 256 144ZM256 464C181.01 464 120 402.992 120 328S181.01 192 256 192S392 253.008 392 328S330.99 464 256 464ZM135.852 148.512L68.844 48H138.063L182.19 125.219C197.68 119.578 213.924 115.547 230.838 113.586L172.844 12.094C168.563 4.625 160.625 0 152 0H24.001C15.157 0 7.032 4.875 2.845 12.688C-1.343 20.469 -0.874 29.938 4.032 37.312L99.075 179.875C110.155 168.141 122.401 157.531 135.852 148.512ZM509.155 12.688C504.968 4.875 496.843 0 487.999 0H360C351.375 0 343.437 4.625 339.156 12.094L281.162 113.586C298.076 115.547 314.32 119.578 329.81 125.219L373.937 48H443.156L376.148 148.512C389.599 157.531 401.845 168.141 412.925 179.875L507.968 37.312C512.874 29.938 513.343 20.469 509.155 12.688Z" />
        </Icon>
    </>
}