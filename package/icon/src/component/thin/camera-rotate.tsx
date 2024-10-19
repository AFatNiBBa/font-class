
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera-rotate` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-rotate?s=thin camera-rotate}
 * @preview ![camera-rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMzc2TDM2My42MjUgNjMuMTI1QzM1Ni42MjUgNDQuMzc1IDMzOC43NSAzMiAzMTguNzUgMzJIMTkzLjI1QzE3My4yNSAzMiAxNTUuMjUgNDQuMzc1IDE0OC4yNSA2My4xMjVMMTM2IDk2SDQ4QzIxLjUgOTYgMCAxMTcuNSAwIDE0NFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINDY0QzQ5MC41IDQ4MCA1MTIgNDU4LjUgNTEyIDQzMlYxNDRDNTEyIDExNy41IDQ5MC41IDk2IDQ2NCA5NlpNNDk2IDQzMkM0OTYgNDQ5LjY0NSA0ODEuNjQ1IDQ2NCA0NjQgNDY0SDQ4QzMwLjM1NSA0NjQgMTYgNDQ5LjY0NSAxNiA0MzJWMTQ0QzE2IDEyNi4zNTUgMzAuMzU1IDExMiA0OCAxMTJIMTQ3LjExM0wxNjMuMjM4IDY4LjcyMUMxNjcuODY3IDU2LjMyNiAxNzkuOTI2IDQ4IDE5My4yNSA0OEgzMTguNzVDMzMyIDQ4IDM0NC4wMDggNTYuMzI2IDM0OC42NTIgNjguNzYyTDM2NC45MjYgMTEySDQ2NEM0ODEuNjQ1IDExMiA0OTYgMTI2LjM1NSA0OTYgMTQ0VjQzMlpNMzUyIDE4NEMzNDcuNTc4IDE4NCAzNDQgMTg3LjU3OCAzNDQgMTkyVjIzMC4yNzlDMzI0LjE0OCAyMDEuOTc1IDI5MS40MzYgMTg0IDI1NiAxODRDMjExLjcxOSAxODQgMTcxLjMyOCAyMTEuNzgxIDE1NS41MTYgMjUzLjE0MUMxNTMuOTM4IDI1Ny4yNjYgMTU2IDI2MS44OTEgMTYwLjEyNSAyNjMuNDY5QzE2NC4yNSAyNjUuMDMxIDE2OC44NzUgMjYyLjk4NCAxNzAuNDUzIDI1OC44NTlDMTgzLjkyMiAyMjMuNjU2IDIxOC4yOTcgMjAwIDI1NiAyMDBDMjg5LjY1MiAyMDAgMzIwLjU0NSAyMTguOTE4IDMzNi4zOTUgMjQ4SDI4OEMyODMuNTc4IDI0OCAyODAgMjUxLjU3OCAyODAgMjU2UzI4My41NzggMjY0IDI4OCAyNjRIMzUyQzM1Ni40MjIgMjY0IDM2MCAyNjAuNDIyIDM2MCAyNTZWMTkyQzM2MCAxODcuNTc4IDM1Ni40MjIgMTg0IDM1MiAxODRaTTM1MS44NzUgMzEyLjUzMUMzNDcuODEzIDMxMSAzNDMuMTQxIDMxMy4wMTYgMzQxLjU0NyAzMTcuMTQxQzMyOC4wNzggMzUyLjM0NCAyOTMuNzAzIDM3NiAyNTYgMzc2QzIyMi4zNDggMzc2IDE5MS40NTUgMzU3LjA4MiAxNzUuNjA1IDMyOEgyMjRDMjI4LjQyMiAzMjggMjMyIDMyNC40MjIgMjMyIDMyMFMyMjguNDIyIDMxMiAyMjQgMzEySDE2MEMxNTUuNTc4IDMxMiAxNTIgMzE1LjU3OCAxNTIgMzIwVjM4NEMxNTIgMzg4LjQyMiAxNTUuNTc4IDM5MiAxNjAgMzkyUzE2OCAzODguNDIyIDE2OCAzODRWMzQ1LjcyMUMxODcuODUyIDM3NC4wMjUgMjIwLjU2NCAzOTIgMjU2IDM5MkMzMDAuMjgxIDM5MiAzNDAuNjcyIDM2NC4yMTkgMzU2LjQ4NCAzMjIuODU5QzM1OC4wNjIgMzE4LjczNCAzNTYgMzE0LjEwOSAzNTEuODc1IDMxMi41MzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CameraRotate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144C16 126.355 30.355 112 48 112H147.113L163.238 68.721C167.867 56.326 179.926 48 193.25 48H318.75C332 48 344.008 56.326 348.652 68.762L364.926 112H464C481.645 112 496 126.355 496 144V432ZM352 184C347.578 184 344 187.578 344 192V230.279C324.148 201.975 291.436 184 256 184C211.719 184 171.328 211.781 155.516 253.141C153.938 257.266 156 261.891 160.125 263.469C164.25 265.031 168.875 262.984 170.453 258.859C183.922 223.656 218.297 200 256 200C289.652 200 320.545 218.918 336.395 248H288C283.578 248 280 251.578 280 256S283.578 264 288 264H352C356.422 264 360 260.422 360 256V192C360 187.578 356.422 184 352 184ZM351.875 312.531C347.813 311 343.141 313.016 341.547 317.141C328.078 352.344 293.703 376 256 376C222.348 376 191.455 357.082 175.605 328H224C228.422 328 232 324.422 232 320S228.422 312 224 312H160C155.578 312 152 315.578 152 320V384C152 388.422 155.578 392 160 392S168 388.422 168 384V345.721C187.852 374.025 220.564 392 256 392C300.281 392 340.672 364.219 356.484 322.859C358.062 318.734 356 314.109 351.875 312.531Z" />
        </Icon>
    </>
}