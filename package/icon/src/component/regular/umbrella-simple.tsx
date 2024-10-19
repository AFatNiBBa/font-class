
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella-simple?s=regular umbrella-simple}
 * @preview ![umbrella-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIuMDAxIDQ0MEMyMzIuMDAxIDQ1My4yMTkgMjIxLjIxOSA0NjQgMjA4LjAwMSA0NjRTMTg0LjAwMSA0NTMuMjE5IDE4NC4wMDEgNDQwQzE4NC4wMDEgNDI2Ljc1IDE3My4yNTEgNDE2IDE2MC4wMDEgNDE2UzEzNi4wMDEgNDI2Ljc1IDEzNi4wMDEgNDQwQzEzNi4wMDEgNDc5LjY4OCAxNjguMzEzIDUxMiAyMDguMDAxIDUxMlMyODAuMDAxIDQ3OS42ODggMjgwLjAwMSA0NDBWMzIwSDIzMi4wMDFWNDQwWk0yODAuMDAxIDMzLjA5NlYyMy42NjJDMjgwLjAwMSAxMC41OTQgMjY5LjQwNyAwIDI1Ni4zMzcgMEgyNTUuNjY1QzI0Mi41OTQgMCAyMzIuMDAxIDEwLjU5NCAyMzIuMDAxIDIzLjY2MlYzMy4wOTZDMTEyLjc4IDQzLjk4NCAxNy4wMyAxMzUuMTg4IDAuMzE5IDI1MS42MjVDLTIuNDM1IDI3MC44MTIgMTMuMDAzIDI4OCAzMi41NTUgMjg4SDQ3OS40NDZDNDk4Ljk5OSAyODggNTE0LjQzNiAyNzAuODEyIDUxMS42ODIgMjUxLjYyNUM0OTQuOTcxIDEzNS4xODggMzk5LjIyMSA0My45ODQgMjgwLjAwMSAzMy4wOTZaTTUxLjM1NCAyNDBDNzMuNDc3IDE0Ny41ODIgMTU4LjMxNSA4MCAyNTYuMDAxIDgwUzQzOC41MjQgMTQ3LjU4MiA0NjAuNjQ3IDI0MEg1MS4zNTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UmbrellaSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M232.001 440C232.001 453.219 221.219 464 208.001 464S184.001 453.219 184.001 440C184.001 426.75 173.251 416 160.001 416S136.001 426.75 136.001 440C136.001 479.688 168.313 512 208.001 512S280.001 479.688 280.001 440V320H232.001V440ZM280.001 33.096V23.662C280.001 10.594 269.407 0 256.337 0H255.665C242.594 0 232.001 10.594 232.001 23.662V33.096C112.78 43.984 17.03 135.188 0.319 251.625C-2.435 270.812 13.003 288 32.555 288H479.446C498.999 288 514.436 270.812 511.682 251.625C494.971 135.188 399.221 43.984 280.001 33.096ZM51.354 240C73.477 147.582 158.315 80 256.001 80S438.524 147.582 460.647 240H51.354Z" />
        </Icon>
    </>
}