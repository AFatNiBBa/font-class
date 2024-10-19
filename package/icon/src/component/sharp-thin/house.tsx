
import { Icon } from "../../index";

/**
 * A component that renders the `house` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=sharp-thin house}
 * @preview ![house](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjkzLjIgOS45TDI4OCA1LjVsLTUuMiA0LjUtMjgwIDI0MCAxMC40IDEyLjFMNjQgMjE4LjUgNjQgNTA0bDAgOCA4IDAgNDMyIDAgOCAwIDAtOCAwLTI4NS41IDUwLjggNDMuNSAxMC40LTEyLjEtMjgwLTI0MHpNODAgNDk2bDAtMjkxLjJMMjg4IDI2LjUgNDk2IDIwNC44IDQ5NiA0OTZsLTEyOCAwIDAtMTg0IDAtOC04IDAtMTQ0IDAtOCAwIDAgOCAwIDE4NEw4MCA0OTZ6bTE0NCAwbDAtMTc2IDEyOCAwIDAgMTc2LTEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.2 9.9L288 5.5l-5.2 4.5-280 240 10.4 12.1L64 218.5 64 504l0 8 8 0 432 0 8 0 0-8 0-285.5 50.8 43.5 10.4-12.1-280-240zM80 496l0-291.2L288 26.5 496 204.8 496 496l-128 0 0-184 0-8-8 0-144 0-8 0 0 8 0 184L80 496zm144 0l0-176 128 0 0 176-128 0z" />
    </Icon>
);

export default House;