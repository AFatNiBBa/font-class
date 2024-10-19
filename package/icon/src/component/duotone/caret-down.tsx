
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=duotone caret-down}
 * @preview ![caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxMC42MjUgMjQ2LjYyNUwxODIuNjI1IDM3NC42MjVDMTc2LjM3NSAzODAuODc1IDE2OC4xODggMzg0IDE2MCAzODRTMTQzLjYyNSAzODAuODc1IDEzNy4zNzUgMzc0LjYyNUw5LjM3NSAyNDYuNjI1QzAuMjE5IDIzNy40NjkgLTIuNTE2IDIyMy43MTkgMi40MzggMjExLjc1UzE5LjA2MyAxOTIgMzIgMTkySDI4OEMzMDAuOTM4IDE5MiAzMTIuNjA5IDE5OS43ODEgMzE3LjU2MyAyMTEuNzVTMzE5Ljc4MSAyMzcuNDY5IDMxMC42MjUgMjQ2LjYyNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M310.625 246.625L182.625 374.625C176.375 380.875 168.188 384 160 384S143.625 380.875 137.375 374.625L9.375 246.625C0.219 237.469 -2.516 223.719 2.438 211.75S19.063 192 32 192H288C300.938 192 312.609 199.781 317.563 211.75S319.781 237.469 310.625 246.625Z" />
    </Icon>
);

export default CaretDown;