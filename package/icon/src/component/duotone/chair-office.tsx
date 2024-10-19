
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chair-office` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chair-office?s=duotone chair-office}
 * @preview ![chair-office](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiA0NTEuMzc1VjM4NEgxOTJWNDUxLjM3NUMxNjMuNzUgNDU3LjM3NSAxNDEgNDcxIDEzMC4xMjUgNDg4LjYyNUMxMjMuNzUgNDk4Ljg3NSAxMzIuNSA1MTIgMTQ1LjEyNSA1MTJIMzAyLjg3NUMzMTUuNSA1MTIgMzI0LjI1IDQ5OC44NzUgMzE3Ljg3NSA0ODguNjI1QzMwNyA0NzEgMjg0LjI1IDQ1Ny4zNzUgMjU2IDQ1MS4zNzVaTTI4OCAwSDE2MEMxMjQuNjI1IDAgOTYgMjguNjI1IDk2IDY0VjI4OEgzNTJWNjRDMzUyIDI4LjYyNSAzMjMuMzc1IDAgMjg4IDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQwMy42MjUgMzA5Ljg3NUMzOTkuMzc1IDI5Ni43NSAzODcuMTI1IDI4OCAzNzMuMjUgMjg4SDc0Ljc1QzYwLjg3NSAyODggNDguNzUgMjk2Ljc1IDQ0LjM3NSAzMDkuODc1TDMzLjYyNSAzNDEuODc1QzI2Ljc1IDM2Mi42MjUgNDIuMTI1IDM4NCA2NCAzODRIMzg0QzQwNS43NSAzODQgNDIxLjI1IDM2Mi42MjUgNDE0LjM3NSAzNDEuODc1TDQwMy42MjUgMzA5Ljg3NVpNNjQgMjI0VjE2MEM2NCAxNDIuMzc1IDQ5LjYyNSAxMjggMzIgMTI4UzAgMTQyLjM3NSAwIDE2MFYyMjRDMCAyNDEuNjI1IDE0LjM3NSAyNTYgMzIgMjU2UzY0IDI0MS42MjUgNjQgMjI0Wk00MTYgMTI4QzM5OC4zNzUgMTI4IDM4NCAxNDIuMzc1IDM4NCAxNjBWMjI0QzM4NCAyNDEuNjI1IDM5OC4zNzUgMjU2IDQxNiAyNTZTNDQ4IDI0MS42MjUgNDQ4IDIyNFYxNjBDNDQ4IDE0Mi4zNzUgNDMzLjYyNSAxMjggNDE2IDEyOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ChairOffice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M256 451.375V384H192V451.375C163.75 457.375 141 471 130.125 488.625C123.75 498.875 132.5 512 145.125 512H302.875C315.5 512 324.25 498.875 317.875 488.625C307 471 284.25 457.375 256 451.375ZM288 0H160C124.625 0 96 28.625 96 64V288H352V64C352 28.625 323.375 0 288 0Z" />
            <path d="M403.625 309.875C399.375 296.75 387.125 288 373.25 288H74.75C60.875 288 48.75 296.75 44.375 309.875L33.625 341.875C26.75 362.625 42.125 384 64 384H384C405.75 384 421.25 362.625 414.375 341.875L403.625 309.875ZM64 224V160C64 142.375 49.625 128 32 128S0 142.375 0 160V224C0 241.625 14.375 256 32 256S64 241.625 64 224ZM416 128C398.375 128 384 142.375 384 160V224C384 241.625 398.375 256 416 256S448 241.625 448 224V160C448 142.375 433.625 128 416 128Z" />
        </Icon>
    </>
}