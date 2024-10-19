
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=solid chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzUuNjU4IDIyOC45MTNMMjUxLjY1NiA0MDQuOTA3QzI0My45MjIgNDEyLjMxMyAyMzMuOTUzIDQxNiAyMjQgNDE2UzIwNC4wNzggNDEyLjMxMyAxOTYuMzQ0IDQwNC45MDdMMTIuMzQyIDIyOC45MTNDLTMuNjExIDIxMy42MzMgLTQuMTc0IDE4OC4zMjEgMTEuMDkyIDE3Mi4zNTNDMjYuMzczIDE1Ni4zNTQgNTEuNjg2IDE1NS44NTQgNjcuNjU1IDE3MS4xMDNMMjI0IDMyMC42NkwzODAuMzQ1IDE3MS4xMDNDMzk2LjMxNCAxNTUuODIyIDQyMS42MjcgMTU2LjM4NSA0MzYuOTA4IDE3Mi4zNTNDNDUyLjE3NCAxODguMzIxIDQ1MS42MTEgMjEzLjYzMyA0MzUuNjU4IDIyOC45MTNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M435.658 228.913L251.656 404.907C243.922 412.313 233.953 416 224 416S204.078 412.313 196.344 404.907L12.342 228.913C-3.611 213.633 -4.174 188.321 11.092 172.353C26.373 156.354 51.686 155.854 67.655 171.103L224 320.66L380.345 171.103C396.314 155.822 421.627 156.385 436.908 172.353C452.174 188.321 451.611 213.633 435.658 228.913Z" />
        </Icon>
    </>
}