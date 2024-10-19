
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=duotone person-praying}
 * @preview ![person-praying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhDMjkxLjM3NSAxMjggMzIwIDk5LjM3NSAzMjAgNjRTMjkxLjM3NSAwIDI1NiAwUzE5MiAyOC42MjUgMTkyIDY0UzIyMC42MjUgMTI4IDI1NiAxMjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIyNS4zOTUgMjk3Ljc1QzIzOS4zOTYgMzE0LjUgMjY0LjM5OCAzMTYuODc1IDI4MS40IDMwM0wzNjkuNDA4IDIzMUMzODYuNDEgMjE3IDM4OC45MSAxOTEuNzUgMzc1LjAzMyAxNzQuNjI1QzM2MS4wMzMgMTU3LjUgMzM1Ljc3OSAxNTUuMTI1IDMxOC42NTQgMTY5TDI2MS4yNzMgMjE2TDIyMi4yNyAxNjkuNzVDMjA2Ljg5NSAxNTEuMzc1IDE4My4xNDEgMTQxLjg3NSAxNTguMjY0IDE0NC4zNzVDMTM0LjEzNyAxNDYuODc1IDExMy4wMSAxNjAuNjI1IDEwMS44ODUgMTgxLjM3NUw1Mi41MDQgMjczLjM3NUMyOS4xMjcgMzE3IDQzLjg3OSAzNjkuNzUgODYuNzU4IDM5Ny4xMjVMMTMxLjUxMiA0MzJINDAuMDA0QzE3Ljg3NyA0MzIgMCA0NDkuODc1IDAgNDcyUzE3Ljg3NyA1MTIgNDAuMDA0IDUxMkgyNDguMDIxQzI4Mi4xNSA1MTIgMzAxLjc3NyA0NjkuMjUgMjc2LjI3NSA0NDMuNzVMMTY2LjM5MSAzMzMuODc1TDIwMS4yNjggMjY5TDIyNS4zOTUgMjk3Ljc1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M256 128C291.375 128 320 99.375 320 64S291.375 0 256 0S192 28.625 192 64S220.625 128 256 128Z" />
            <path d="M225.395 297.75C239.396 314.5 264.398 316.875 281.4 303L369.408 231C386.41 217 388.91 191.75 375.033 174.625C361.033 157.5 335.779 155.125 318.654 169L261.273 216L222.27 169.75C206.895 151.375 183.141 141.875 158.264 144.375C134.137 146.875 113.01 160.625 101.885 181.375L52.504 273.375C29.127 317 43.879 369.75 86.758 397.125L131.512 432H40.004C17.877 432 0 449.875 0 472S17.877 512 40.004 512H248.021C282.15 512 301.777 469.25 276.275 443.75L166.391 333.875L201.268 269L225.395 297.75Z" />
    </Icon>
);

export default PersonPraying;