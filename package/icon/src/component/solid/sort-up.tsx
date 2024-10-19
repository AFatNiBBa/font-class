
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=solid sort-up}
 * @preview ![sort-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNy42NTggMjI0SDI5Mi4zNDJDMzE2Ljk0NSAyMjQgMzI5LjIyOSAxOTQuMjI1IDMxMS44ODEgMTc2Ljg3N0wxNzkuNTUzIDQwLjEwN0MxNzQuMTQ2IDM0LjcwMSAxNjcuMDggMzIgMTYwLjAyNyAzMkMxNTIuOTczIDMyIDE0NS45MzQgMzQuNzAxIDE0MC41ODIgNDAuMTA3TDguMTE5IDE3Ni44NzdDLTkuMjI5IDE5NC4yMjUgMy4wNTUgMjI0IDI3LjY1OCAyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SortUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M27.658 224H292.342C316.945 224 329.229 194.225 311.881 176.877L179.553 40.107C174.146 34.701 167.08 32 160.027 32C152.973 32 145.934 34.701 140.582 40.107L8.119 176.877C-9.229 194.225 3.055 224 27.658 224Z" />
        </Icon>
    </>
}