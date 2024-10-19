
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=regular cloud}
 * @preview ![cloud](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDMuMzQ4IDIxNC40NjlDNTQzLjQ3NSAyMTIuMjg1IDU0NCAyMTAuMjE3IDU0NCAyMDhDNTQ0IDE0Ni4xNDUgNDkzLjg1NSA5NiA0MzIgOTZDNDIwLjU5NCA5NiA0MDkuODA3IDk4LjIwNyAzOTkuNDM4IDEwMS4zNzdDMzY4Ljg4NSA1OS41MDYgMzE5LjgwMSAzMiAyNjQgMzJDMTcwLjgwMSAzMiA5NS40MTIgMTA3LjkyOCA5Ni4wOCAyMDAuNzkzQzQwLjIzNiAyMjAuNjA3IDAgMjczLjM2MyAwIDMzNkMwIDQxNS41MjkgNjQuNDcxIDQ4MCAxNDQgNDgwSDUwNEM1NzkuMTExIDQ4MCA2NDAgNDE5LjEwOSA2NDAgMzQ0QzY0MCAyODIuNjY4IDU5OS4xMzUgMjMxLjQyOCA1NDMuMzQ4IDIxNC40NjlaTTUwNCA0MzJIMTQ0QzkxLjA2NCA0MzIgNDggMzg4LjkzNCA0OCAzMzZDNDggMjk1Ljc5NyA3My43NzEgMjU5LjY0MSAxMTIuMTMxIDI0Ni4wMjlMMTQ0LjMyIDIzNC42MDdDMTQ0LjA0NyAxOTUuOTg0IDE0NC4wOTYgMjAxLjQ2MSAxNDQuMDI3IDE5Ny40MzZDMTQ1LjM5NSAxMzIuNDQ1IDE5OC42ODggODAgMjY0IDgwQzMwMi4zOTYgODAgMzM3LjYyOSA5OC4xMDQgMzYwLjY2MiAxMjkuNjdMMzgwLjc5OSAxNTcuMjY4TDQxMy40NzEgMTQ3LjI3OUM0NjIuMzM0IDEzMi4zMzggNDk3LjY5NyAxNzIuODM4IDQ5NS40MjggMjExLjY4TDQ5My4yMzQgMjQ5LjQwMkw1MjkuMzg3IDI2MC4zOTNDNTY2LjgzOCAyNzEuNzc3IDU5MiAzMDUuMzc3IDU5MiAzNDRDNTkyIDM5Mi41MjMgNTUyLjUyMyA0MzIgNTA0IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cloud(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M543.348 214.469C543.475 212.285 544 210.217 544 208C544 146.145 493.855 96 432 96C420.594 96 409.807 98.207 399.438 101.377C368.885 59.506 319.801 32 264 32C170.801 32 95.412 107.928 96.08 200.793C40.236 220.607 0 273.363 0 336C0 415.529 64.471 480 144 480H504C579.111 480 640 419.109 640 344C640 282.668 599.135 231.428 543.348 214.469ZM504 432H144C91.064 432 48 388.934 48 336C48 295.797 73.771 259.641 112.131 246.029L144.32 234.607C144.047 195.984 144.096 201.461 144.027 197.436C145.395 132.445 198.688 80 264 80C302.396 80 337.629 98.104 360.662 129.67L380.799 157.268L413.471 147.279C462.334 132.338 497.697 172.838 495.428 211.68L493.234 249.402L529.387 260.393C566.838 271.777 592 305.377 592 344C592 392.523 552.523 432 504 432Z" />
        </Icon>
    </>
}