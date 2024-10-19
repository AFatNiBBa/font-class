
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `alien` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=thin alien}
 * @preview ![alien](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTcuOTk5IDIxMS45ODdIODEuOTk5QzcyLjAxNiAyMTEuOTg3IDY0IDIyMC4wMDMgNjQgMjI5Ljk4N0M2NCAyNzkuNjI0IDEwNC4zNTkgMzE5Ljk4MSAxNTMuOTk5IDMxOS45ODFIMTg5Ljk5OUMxOTkuOTg0IDMxOS45ODEgMjA4IDMxMS45NjYgMjA4IDMwMS45ODFDMjA4IDI1Mi4zNDQgMTY3LjY0MSAyMTEuOTg3IDExNy45OTkgMjExLjk4N1pNMTg5Ljk5OSAzMDMuOTgxSDE1My45OTlDMTEzLjE5NSAzMDMuOTgxIDgwIDI3MC43ODggODAgMjI5Ljk4N0M4MCAyMjguODQ2IDgwLjg1OSAyMjcuOTg3IDgxLjk5OSAyMjcuOTg3SDExNy45OTlDMTU4LjgwNSAyMjcuOTg3IDE5MiAyNjEuMTggMTkyIDMwMS45ODFDMTkyIDMwMy4xMjIgMTkxLjE0MSAzMDMuOTgxIDE4OS45OTkgMzAzLjk4MVpNMzY1Ljk5OSAyMTEuOTg3SDMyOS45OTlDMjgwLjM1OSAyMTEuOTg3IDI0MCAyNTIuMzQ0IDI0MCAzMDEuOTgxQzI0MCAzMTEuOTY2IDI0OC4wMTYgMzE5Ljk4MSAyNTcuOTk5IDMxOS45ODFIMjkzLjk5OUMzNDMuNjQxIDMxOS45ODEgMzg0IDI3OS42MjQgMzg0IDIyOS45ODdDMzg0IDIyMC4wMDMgMzc1Ljk4NCAyMTEuOTg3IDM2NS45OTkgMjExLjk4N1pNMjkzLjk5OSAzMDMuOTgxSDI1Ny45OTlDMjU2Ljg1OSAzMDMuOTgxIDI1NiAzMDMuMTIyIDI1NiAzMDEuOTgxQzI1NiAyNjEuMTggMjg5LjE5NSAyMjcuOTg3IDMyOS45OTkgMjI3Ljk4N0gzNjUuOTk5QzM2Ny4xNDEgMjI3Ljk4NyAzNjggMjI4Ljg0NiAzNjggMjI5Ljk4N0MzNjggMjcwLjc4OCAzMzQuODA1IDMwMy45ODEgMjkzLjk5OSAzMDMuOTgxWk0yMjQgMC4wMDFDMTAwLjI1IDAuMDAxIDAgODcuOTk1IDAgMjMyLjQ4NUMwIDM0NC4yMjkgMTM0LjI1IDQ1Ni45NzEgMTk0Ljg3NSA1MDIuMzQ0QzIwMy41IDUwOC43ODIgMjEzLjc1IDUxMi4wMDEgMjI0IDUxMi4wMDFTMjQ0LjUgNTA4Ljc4MiAyNTMuMTI1IDUwMi4zNDRDMzEzLjc1IDQ1Ni45NzEgNDQ4IDM0NC4yMjkgNDQ4IDIzMi40ODVDNDQ4IDg3Ljk5NSAzNDcuNzUgMC4wMDEgMjI0IDAuMDAxWk0yNDMuNTU1IDQ4OS41MjJDMjM3Ljg3NyA0OTMuNzYgMjMxLjExNSA0OTYuMDAxIDIyNCA0OTYuMDAxUzIxMC4xMjMgNDkzLjc2IDIwNC40NjMgNDg5LjUzNkMxNDcuNzk3IDQ0Ny4xMjYgMTYgMzM3LjE4MiAxNiAyMzIuNDg1QzE2IDEwNS4wMjIgMTAxLjUzMyAxNi4wMDEgMjI0IDE2LjAwMVM0MzIgMTA1LjAyMiA0MzIgMjMyLjQ4NUM0MzIgMzM3LjE4MiAzMDAuMjAzIDQ0Ny4xMjYgMjQzLjU1NSA0ODkuNTIyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Alien(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M117.999 211.987H81.999C72.016 211.987 64 220.003 64 229.987C64 279.624 104.359 319.981 153.999 319.981H189.999C199.984 319.981 208 311.966 208 301.981C208 252.344 167.641 211.987 117.999 211.987ZM189.999 303.981H153.999C113.195 303.981 80 270.788 80 229.987C80 228.846 80.859 227.987 81.999 227.987H117.999C158.805 227.987 192 261.18 192 301.981C192 303.122 191.141 303.981 189.999 303.981ZM365.999 211.987H329.999C280.359 211.987 240 252.344 240 301.981C240 311.966 248.016 319.981 257.999 319.981H293.999C343.641 319.981 384 279.624 384 229.987C384 220.003 375.984 211.987 365.999 211.987ZM293.999 303.981H257.999C256.859 303.981 256 303.122 256 301.981C256 261.18 289.195 227.987 329.999 227.987H365.999C367.141 227.987 368 228.846 368 229.987C368 270.788 334.805 303.981 293.999 303.981ZM224 0.001C100.25 0.001 0 87.995 0 232.485C0 344.229 134.25 456.971 194.875 502.344C203.5 508.782 213.75 512.001 224 512.001S244.5 508.782 253.125 502.344C313.75 456.971 448 344.229 448 232.485C448 87.995 347.75 0.001 224 0.001ZM243.555 489.522C237.877 493.76 231.115 496.001 224 496.001S210.123 493.76 204.463 489.536C147.797 447.126 16 337.182 16 232.485C16 105.022 101.533 16.001 224 16.001S432 105.022 432 232.485C432 337.182 300.203 447.126 243.555 489.522Z" />
        </Icon>
    </>
}