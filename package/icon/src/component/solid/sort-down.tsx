
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=solid sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTEuODgxIDMzNS4xMjFMMTc5LjU1MyA0NzEuODkxQzE3NC4xNDYgNDc3LjI5NyAxNjcuMDggNDgwIDE2MC4wMjcgNDgwQzE1Mi45NzMgNDgwIDE0NS45MzQgNDc3LjI5NyAxNDAuNTgyIDQ3MS44OTFMOC4xMTkgMzM1LjEyMUMtOS4yMjkgMzE3Ljc3MyAzLjA1NSAyODggMjcuNjU4IDI4OEgyOTIuMzQyQzMxNi45NDUgMjg4IDMyOS4yMjkgMzE3Ljc3MyAzMTEuODgxIDMzNS4xMjFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SortDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M311.881 335.121L179.553 471.891C174.146 477.297 167.08 480 160.027 480C152.973 480 145.934 477.297 140.582 471.891L8.119 335.121C-9.229 317.773 3.055 288 27.658 288H292.342C316.945 288 329.229 317.773 311.881 335.121Z" />
        </Icon>
    </>
}