
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d10` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=regular dice-d10}
 * @preview ![dice-d10](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjgyLjU5NUM1MTIgMjc1LjAwNSA1MDkuMzIgMjY3LjM3OSA1MDMuODg1IDI2MS4yNUwyNzkuNzc0IDEwLjYyNUMyNzMuNTI0IDMuNSAyNjQuNzc1IDAgMjU2LjAyNSAwUzIzOC41MjYgMy41IDIzMi4yNzYgMTAuNjI1TDguMTY1IDI2MS4yNUMyLjY4NSAyNjcuMzY1IDAgMjc0Ljk3MSAwIDI4Mi41NDRDMCAyOTEuMzgxIDMuNjU1IDMwMC4xNzMgMTAuNzkgMzA2LjVMMjM0LjkwMSA1MDRDMjQwLjkwMSA1MDkuMzc1IDI0OC41MjYgNTEyIDI1Ni4wMjUgNTEyQzI2My41MjUgNTEyIDI3MS4xNDkgNTA5LjM3NSAyNzcuMTQ5IDUwNEw1MDEuMjYgMzA2LjVDNTA4LjM4MSAzMDAuMTg1IDUxMiAyOTEuNDE0IDUxMiAyODIuNTk1Wk0yNTYuMDI1IDI4Ny44NzVMMTg5LjkwNCAyNDMuNzVMMjU2LjAyNSA4OS42MjVMMzIyLjE0NiAyNDMuNzVMMjU2LjAyNSAyODcuODc1Wk0xNDIuNjU3IDIzMi4yNUw4NS43ODUgMjQ2LjVMMTgzLjI3OSAxMzcuMzc1TDE0Mi42NTcgMjMyLjI1Wk0xNTUuNTMxIDI3OC41TDIzMi4wMjcgMzI5LjVWNDM3LjVMNzQuNjYxIDI5OC43NUwxNTUuNTMxIDI3OC41Wk0yODAuMDI0IDMyOS41TDM1Ni41MTkgMjc4LjVMNDM3LjM4OSAyOTguNzVMMjgwLjAyNCA0MzcuNVYzMjkuNVpNMzY5LjM5MyAyMzIuMjVMMzI4Ljc3MSAxMzcuMzc1TDQyNi4yNjUgMjQ2LjVMMzY5LjM5MyAyMzIuMjVaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiceD10(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 282.595C512 275.005 509.32 267.379 503.885 261.25L279.774 10.625C273.524 3.5 264.775 0 256.025 0S238.526 3.5 232.276 10.625L8.165 261.25C2.685 267.365 0 274.971 0 282.544C0 291.381 3.655 300.173 10.79 306.5L234.901 504C240.901 509.375 248.526 512 256.025 512C263.525 512 271.149 509.375 277.149 504L501.26 306.5C508.381 300.185 512 291.414 512 282.595ZM256.025 287.875L189.904 243.75L256.025 89.625L322.146 243.75L256.025 287.875ZM142.657 232.25L85.785 246.5L183.279 137.375L142.657 232.25ZM155.531 278.5L232.027 329.5V437.5L74.661 298.75L155.531 278.5ZM280.024 329.5L356.519 278.5L437.389 298.75L280.024 437.5V329.5ZM369.393 232.25L328.771 137.375L426.265 246.5L369.393 232.25Z " />
        </Icon>
    </>
}