
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=duotone caret-up}
 * @preview ![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkuMzc1IDI2NS4zNzVMMTM3LjM3NSAxMzcuMzc1QzE0My42MjUgMTMxLjEyNSAxNTEuODEzIDEyOCAxNjAgMTI4UzE3Ni4zNzUgMTMxLjEyNSAxODIuNjI1IDEzNy4zNzVMMzEwLjYyNSAyNjUuMzc1QzMxOS43ODEgMjc0LjUzMSAzMjIuNTE2IDI4OC4yODEgMzE3LjU2MyAzMDAuMjVTMzAwLjkzOCAzMjAgMjg4IDMyMEgzMkMxOS4wNjMgMzIwIDcuMzkxIDMxMi4yMTkgMi40MzggMzAwLjI1UzAuMjE5IDI3NC41MzEgOS4zNzUgMjY1LjM3NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M9.375 265.375L137.375 137.375C143.625 131.125 151.813 128 160 128S176.375 131.125 182.625 137.375L310.625 265.375C319.781 274.531 322.516 288.281 317.563 300.25S300.938 320 288 320H32C19.063 320 7.391 312.219 2.438 300.25S0.219 274.531 9.375 265.375Z" />
    </Icon>
);

export default CaretUp;