
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=regular mask}
 * @preview ![mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNjRDMzkuNTIgNjQgMCAxODIuMDk2IDAgMjczLjQ1NUMwIDM3OS40OTIgNzguNzk5IDQ0OCAxNzYgNDQ4QzIwMy4zMjggNDQ4IDIyNy4yMDcgNDQxLjQ4NCAyNDIuMTA3IDQxMS4yMDVMMjYyLjAzMyAzNzAuNzA5QzI2OC4yOTkgMzU4LjU3NiAyNzguMSAzNTIuNDQ3IDI4OCAzNTIuMDc2QzI5Ny45IDM1Mi40NDcgMzA3LjcwMSAzNTguNTc2IDMxMy45NjcgMzcwLjcwOUwzMzMuODkzIDQxMS4yMDVDMzQ4Ljc5NSA0NDEuNDg0IDM3Mi42NzQgNDQ4IDQwMCA0NDhDNDk3LjIwMSA0NDggNTc2IDM3OS40OTIgNTc2IDI3My40NTVDNTc2IDE4Mi4wOTYgNTM2LjQ4IDY0IDI4OCA2NFpNNDAwIDQwMEMzODEuODc3IDQwMCAzODAuNDM4IDM5Ny4wNzYgMzc2Ljk2MSAzOTAuMDE0TDM1Ni42MTUgMzQ4LjY4NEMzNDIuNzQ0IDMyMS44MjIgMzE3Ljc2NiAzMDUuMTU4IDI4OS43OTkgMzA0LjEwOUwyODggMzA0LjA0M0wyODYuMjAxIDMwNC4xMDlDMjU4LjIzNiAzMDUuMTU4IDIzMy4yNTggMzIxLjgyMiAyMTguOTY1IDM0OS41MThMMTk5LjAzOSAzOTAuMDEyQzE5NS41NjQgMzk3LjA3NiAxOTQuMTI1IDQwMCAxNzYgNDAwQzEwMC42MzcgNDAwIDQ4IDM0Ny45NjMgNDggMjczLjQ1NUM0OCAyMjkuMjk3IDQ4IDExMiAyODggMTEyUzUyOCAyMjkuMjk3IDUyOCAyNzMuNDU1QzUyOCAzNDcuOTYzIDQ3NS4zNjUgNDAwIDQwMCA0MDBaTTE2MCAxOTJDMTI0LjY1NCAxOTIgOTYgMjIwLjY1NCA5NiAyNTZTMTI0LjY1NCAzMjAgMTYwIDMyMEMxOTUuMzQ4IDMyMCAyMjQgMjkxLjM0NiAyMjQgMjU2UzE5NS4zNDggMTkyIDE2MCAxOTJaTTQxNiAxOTJDMzgwLjY1NCAxOTIgMzUyIDIyMC42NTQgMzUyIDI1NlMzODAuNjU0IDMyMCA0MTYgMzIwQzQ1MS4zNDggMzIwIDQ4MCAyOTEuMzQ2IDQ4MCAyNTZTNDUxLjM0OCAxOTIgNDE2IDE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 64C39.52 64 0 182.096 0 273.455C0 379.492 78.799 448 176 448C203.328 448 227.207 441.484 242.107 411.205L262.033 370.709C268.299 358.576 278.1 352.447 288 352.076C297.9 352.447 307.701 358.576 313.967 370.709L333.893 411.205C348.795 441.484 372.674 448 400 448C497.201 448 576 379.492 576 273.455C576 182.096 536.48 64 288 64ZM400 400C381.877 400 380.438 397.076 376.961 390.014L356.615 348.684C342.744 321.822 317.766 305.158 289.799 304.109L288 304.043L286.201 304.109C258.236 305.158 233.258 321.822 218.965 349.518L199.039 390.012C195.564 397.076 194.125 400 176 400C100.637 400 48 347.963 48 273.455C48 229.297 48 112 288 112S528 229.297 528 273.455C528 347.963 475.365 400 400 400ZM160 192C124.654 192 96 220.654 96 256S124.654 320 160 320C195.348 320 224 291.346 224 256S195.348 192 160 192ZM416 192C380.654 192 352 220.654 352 256S380.654 320 416 320C451.348 320 480 291.346 480 256S451.348 192 416 192Z" />
        </Icon>
    </>
}