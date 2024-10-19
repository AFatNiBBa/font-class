
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=duotone filter}
 * @preview ![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNC42MjUgODQuMTg2TDMyMCAzMDYuODIyVjQ1NS45ODRDMzIwIDQ3NS41IDI5OC4wMzEgNDg2LjY4OCAyODIuMjUgNDc1LjY0MUwyMDIuMjUgNDE5LjY1NkMxOTUuODEzIDQxNS4xNzIgMTkyIDQwNy44MjggMTkyIDQwMFYzMDYuODIyTDcuMzc1IDg0LjE4NkMtOS45NjUgNjMuMjc1IDUuMjEzIDMyIDMyLjcwMSAzMkg0NzkuMjk5QzUwNi43ODcgMzIgNTIxLjk2NSA2My4yNzUgNTA0LjYyNSA4NC4xODZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M504.625 84.186L320 306.822V455.984C320 475.5 298.031 486.688 282.25 475.641L202.25 419.656C195.813 415.172 192 407.828 192 400V306.822L7.375 84.186C-9.965 63.275 5.213 32 32.701 32H479.299C506.787 32 521.965 63.275 504.625 84.186Z" />
    </Icon>
);

export default Filter;