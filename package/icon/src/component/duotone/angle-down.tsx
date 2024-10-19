
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=duotone angle-down}
 * @preview ![angle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3MS41MTUgMjI5LjA1NUwyMTkuNTE2IDM3My4wMzNDMjExLjc5NyAzODAuMzQ0IDIwMS44OTEgMzg0IDE5MiAzODRTMTcyLjIwMyAzODAuMzQ0IDE2NC40ODQgMzczLjAzM0wxMi40ODUgMjI5LjA1NUMtMy41NDYgMjEzLjg3IC00LjIzMyAxODguNTYxIDEwLjk3IDE3Mi41MzJDMjYuMTU3IDE1Ni40NzIgNTEuNDg1IDE1NS43ODUgNjcuNTE2IDE3MS4wMDFMMTkyIDI4OC45MjFMMzE2LjQ4NCAxNzEuMDAxQzMzMi40OTkgMTU1Ljc1NCAzNTcuODI3IDE1Ni40NDEgMzczLjAzIDE3Mi41MzJDMzg4LjIzMyAxODguNTYxIDM4Ny41NDYgMjEzLjg3IDM3MS41MTUgMjI5LjA1NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M371.515 229.055L219.516 373.033C211.797 380.344 201.891 384 192 384S172.203 380.344 164.484 373.033L12.485 229.055C-3.546 213.87 -4.233 188.561 10.97 172.532C26.157 156.472 51.485 155.785 67.516 171.001L192 288.921L316.484 171.001C332.499 155.754 357.827 156.441 373.03 172.532C388.233 188.561 387.546 213.87 371.515 229.055Z" />
        </Icon>
    </>
}