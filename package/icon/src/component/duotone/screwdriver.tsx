
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `screwdriver` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=duotone screwdriver}
 * @preview ![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS42MTUgNjRMNDE1LjYxNSAxOTJIMzUzLjYxNUwyNDYuOTE2IDI5OC42MTVDMjQzLjM5MyAyOTEuNDQxIDIzOC45NjEgMjg0LjU5NiAyMzIuOTkgMjc4LjYyNVMyMjAuMTc0IDI2OC4yMjMgMjEzIDI2NC42OTlMMzE5LjYxNSAxNThWOTZMNDQ3LjYxNSAwTDUxMS42MTUgNjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyOCAyNzguNjI1TDEwLjg3NSAzOTUuNjI1Qy0zLjYyNSA0MTAuMjUgLTMuNjI1IDQzMy44NzUgMTAuODc1IDQ0OC4zNzVMNjMuNjI1IDUwMS4xMjVDNzguMTI1IDUxNS42MjUgMTAxLjc1IDUxNS42MjUgMTE2LjM3NSA1MDEuMTI1TDIzMy4zNzUgMzg0QzI2Mi41IDM1NC44NzUgMjYyLjUgMzA3Ljc1IDIzMy4zNzUgMjc4LjYyNVMxNTcuMTI1IDI0OS41IDEyOCAyNzguNjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Screwdriver(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M511.615 64L415.615 192H353.615L246.916 298.615C243.393 291.441 238.961 284.596 232.99 278.625S220.174 268.223 213 264.699L319.615 158V96L447.615 0L511.615 64Z" />
            <path d="M128 278.625L10.875 395.625C-3.625 410.25 -3.625 433.875 10.875 448.375L63.625 501.125C78.125 515.625 101.75 515.625 116.375 501.125L233.375 384C262.5 354.875 262.5 307.75 233.375 278.625S157.125 249.5 128 278.625Z" />
        </Icon>
    </>
}