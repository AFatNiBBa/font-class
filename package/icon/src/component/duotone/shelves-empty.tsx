
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=duotone shelves-empty}
 * @preview ![shelves-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwOCAwQzU5MC40IDAgNTc2IDE0LjM5OCA1NzYgMzJWMTYwSDY0VjMyQzY0IDE0LjM5OCA0OS42IDAgMzIgMFMwIDE0LjM5OCAwIDMyVjUxMkg2NFY0ODBINTc2VjUxMkg2NDBWMzJDNjQwIDE0LjM5OCA2MjUuNiAwIDYwOCAwWk01NzYgNDE2SDY0VjIyNEg1NzZWNDE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShelvesEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M608 0C590.4 0 576 14.398 576 32V160H64V32C64 14.398 49.6 0 32 0S0 14.398 0 32V512H64V480H576V512H640V32C640 14.398 625.6 0 608 0ZM576 416H64V224H576V416Z" />
        </Icon>
    </>
}