
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=duotone filter-slash}
 * @preview ![filter-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MS43IDM4LjhMNDA2LjYgMjkzLjQgNTY3IDk3LjNjOS44LTEyIDExLjgtMjguNSA1LjItNDIuNVM1NTEuNSAzMiA1MzYgMzJMMTA0IDMyYy04LjEgMC0xNS44IDIuNC0yMi4zIDYuOHpNMjAyLjUgMjU1LjVMMjU2IDMyMC45bDAgNzkuMWMwIDEwLjEgNC43IDE5LjYgMTIuOCAyNS42bDY0IDQ4YzkuNyA3LjMgMjIuNyA4LjQgMzMuNSAzczE3LjctMTYuNSAxNy43LTI4LjZsMC00OS41LTE4MS41LTE0M3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUuMSA5LjJDMTMuMy0xLjIgMjguNC0zLjEgMzguOCA1LjFsNTkyIDQ2NGMxMC40IDguMiAxMi4zIDIzLjMgNC4xIDMzLjdzLTIzLjMgMTIuMy0zMy43IDQuMUw5LjIgNDIuOUMtMS4yIDM0LjctMy4xIDE5LjYgNS4xIDkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M81.7 38.8L406.6 293.4 567 97.3c9.8-12 11.8-28.5 5.2-42.5S551.5 32 536 32L104 32c-8.1 0-15.8 2.4-22.3 6.8zM202.5 255.5L256 320.9l0 79.1c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-49.5-181.5-143z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default FilterSlash;