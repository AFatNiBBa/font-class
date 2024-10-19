
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-plus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-plus?s=regular phone-plus}
 * @preview ![phone-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuMjk5IDMyMC4yNUwzODIuMDk4IDI3OC4xNzJDMzYwLjY5MyAyNjguODkxIDMzNS40NTkgMjc1LjA2MiAzMjAuODk2IDI5My4xMjVMMjkzLjQ2MSAzMjYuNjI1QzI0OC42OCAzMDAuODc1IDIxMS4xNjYgMjYzLjM3NyAxODUuNDE2IDIxOC42MjdMMjE4Ljk2MyAxOTEuMTQzQzIzNi44NjcgMTc2LjUxOCAyNDMuMDU1IDE1MS40MzkgMjMzLjk3NyAxMzAuMDk2TDE5MS43MjkgMzEuNTMzQzE4MS41NzIgOC4zMyAxNTYuMzg3IC00LjMyNiAxMzEuODU1IDEuMzQ2TDQwLjYwNyAyMi40MDhDMTYuNzAzIDI3Ljg2MSAwIDQ4LjgzIDAgNzMuMzkzQzAgMzE1LjI1IDE5Ni43NDQgNTEyIDQzOC41OCA1MTJDNDYzLjE0MyA1MTIgNDg0LjExMSA0OTUuMzEyIDQ4OS41OCA0NzEuNDY5TDUxMC42NDEgMzgwLjEyNUM1MTYuMzU5IDM1NS40NjkgNTAzLjYwOSAzMzAuMzEyIDQ4MC4yOTkgMzIwLjI1Wk00NjMuODc3IDM2OS4zMTJMNDQyLjc5OSA0NjAuNzE5QzQ0Mi4zMyA0NjIuNzE5IDQ0MC42ODkgNDY0IDQzOC41OCA0NjRDMjIzLjIxMyA0NjQgNDcuOTk4IDI4OC43ODEgNDcuOTk4IDczLjM5M0M0Ny45OTggNzEuMjk5IDQ5LjI5NSA2OS42NTggNTEuMzQyIDY5LjE4OUwxNDIuNjg0IDQ4LjExMUMxNDIuOTk2IDQ4LjAzMyAxNDMuMzI0IDQ4LjAwMiAxNDMuNjM3IDQ4LjAwMkMxNDUuMzcxIDQ4LjAwMiAxNDYuOTk2IDQ5LjA0OSAxNDcuNjg0IDUwLjYxMUwxODkuODIyIDE0OC45MzlDMTkwLjU3MiAxNTAuNzA1IDE5MC4wNzIgMTUyLjc2OCAxODguNTcyIDE1NC4wMDJMMTM5Ljc5MyAxOTMuOTcxQzEzMS4xNjggMjAxLjAzMyAxMjguNTQzIDIxMy4xMTEgMTMzLjQ0OSAyMjMuMTExQzE2Ni40NjMgMjkwLjM0NCAyMjEuNzEzIDM0NS41NjIgMjg4Ljk5MiAzNzguNTk0QzI5OC45OSAzODMuNSAzMTEuMDg0IDM4MC44NzUgMzE4LjE0NiAzNzIuMjVMMzU4LjE2MiAzMjMuMzc1QzM1OS4yNzEgMzIxLjk2OSAzNjEuMzQ4IDMyMS40MzcgMzYzLjA4MiAzMjIuMjVMNDYxLjM0NiAzNjQuMzQ0QzQ2My4yMjEgMzY1LjE1NiA0NjQuMzQ2IDM2Ny4zNDQgNDYzLjg5MyAzNjkuMzEySDQ2My44NzdaTTM0NCAxMjBIMzkyVjE2OEMzOTIgMTgxLjI1IDQwMi43NSAxOTIgNDE2IDE5MlM0NDAgMTgxLjI1IDQ0MCAxNjhWMTIwSDQ4OEM1MDEuMjUgMTIwIDUxMiAxMDkuMjUgNTEyIDk2UzUwMS4yNSA3MiA0ODggNzJINDQwVjI0QzQ0MCAxMC43NSA0MjkuMjUgMCA0MTYgMFMzOTIgMTAuNzUgMzkyIDI0VjcySDM0NEMzMzAuNzUgNzIgMzIwIDgyLjc1IDMyMCA5NlMzMzAuNzUgMTIwIDM0NCAxMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PhonePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480.299 320.25L382.098 278.172C360.693 268.891 335.459 275.062 320.896 293.125L293.461 326.625C248.68 300.875 211.166 263.377 185.416 218.627L218.963 191.143C236.867 176.518 243.055 151.439 233.977 130.096L191.729 31.533C181.572 8.33 156.387 -4.326 131.855 1.346L40.607 22.408C16.703 27.861 0 48.83 0 73.393C0 315.25 196.744 512 438.58 512C463.143 512 484.111 495.312 489.58 471.469L510.641 380.125C516.359 355.469 503.609 330.312 480.299 320.25ZM463.877 369.312L442.799 460.719C442.33 462.719 440.689 464 438.58 464C223.213 464 47.998 288.781 47.998 73.393C47.998 71.299 49.295 69.658 51.342 69.189L142.684 48.111C142.996 48.033 143.324 48.002 143.637 48.002C145.371 48.002 146.996 49.049 147.684 50.611L189.822 148.939C190.572 150.705 190.072 152.768 188.572 154.002L139.793 193.971C131.168 201.033 128.543 213.111 133.449 223.111C166.463 290.344 221.713 345.562 288.992 378.594C298.99 383.5 311.084 380.875 318.146 372.25L358.162 323.375C359.271 321.969 361.348 321.437 363.082 322.25L461.346 364.344C463.221 365.156 464.346 367.344 463.893 369.312H463.877ZM344 120H392V168C392 181.25 402.75 192 416 192S440 181.25 440 168V120H488C501.25 120 512 109.25 512 96S501.25 72 488 72H440V24C440 10.75 429.25 0 416 0S392 10.75 392 24V72H344C330.75 72 320 82.75 320 96S330.75 120 344 120Z" />
        </Icon>
    </>
}