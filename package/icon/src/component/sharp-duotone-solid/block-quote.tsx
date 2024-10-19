
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-quote` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=sharp-duotone-solid block-quote}
 * @preview ![block-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDQ0OCAwIDAgNjRMMCAxMjggMCA2NHpNMTI4IDIyNGwzMjAgMCAwIDY0LTMyMCAwIDAtNjR6bTAgMTYwbDMyMCAwIDAgNjQtMzIwIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjI0SDY0VjQ0OEgwVjIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BlockQuote: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64l448 0 0 64L0 128 0 64zM128 224l320 0 0 64-320 0 0-64zm0 160l320 0 0 64-320 0 0-64z" />
            <path d="M0 224H64V448H0V224z" />
    </Icon>
);

export default BlockQuote;