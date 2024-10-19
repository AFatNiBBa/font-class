
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=solid shelves-empty}
 * @preview ![shelves-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMEg2MDhDNTkwLjQgMCA1NzYgMTQuNCA1NzYgMzJWMTYwSDY0VjMyQzY0IDE0LjQgNDkuNiAwIDMyIDBIMzJDMTQuNCAwIDAgMTQuNCAwIDMyVjUxMkg2NFY0ODBINTc2VjUxMkg2NDBWMzJDNjQwIDE0LjQgNjI1LjYgMCA2MDggMFpNNTc2IDQxNkg2NFYyMjRINTc2VjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShelvesEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 0H608C590.4 0 576 14.4 576 32V160H64V32C64 14.4 49.6 0 32 0H32C14.4 0 0 14.4 0 32V512H64V480H576V512H640V32C640 14.4 625.6 0 608 0ZM576 416H64V224H576V416Z" />
        </Icon>
    </>
}