
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=duotone helmet-safety}
 * @preview ![helmet-safety](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwMC42YzAgNC43IDIgOS4yIDUuOCAxMS45QzI3LjUgNDI4LjQgMTExLjggNDgwIDI4OCA0ODBzMjYwLjUtNTEuNiAyODIuMi02Ny41YzMuOC0yLjggNS44LTcuMiA1LjgtMTEuOWMwLTkuMi03LjQtMTYuNi0xNi42LTE2LjZMNTQ0IDM4NCAzMiAzODRsLTE1LjQgMEM3LjQgMzg0IDAgMzkxLjQgMCA0MDAuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA2NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmw2NCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMi4zIDAgOTkuNmMwIDUuNiA0LjUgMTAuMSAxMC4xIDEwLjFjMy42IDAgNy0xLjkgOC44LTUuMWw0OC04My45QzQ5Mi4zIDEyMy4xIDU0My4xIDE5OC40IDU0NCAyODUuNmwwIDk4LjRMMzIgMzg0bDAtOTZjMC04OC4yIDUxLTE2NC41IDEyNS4xLTIwMWw0OCA4My45YzEuOCAzLjIgNS4yIDUuMSA4LjggNS4xYzUuNiAwIDEwLjEtNC41IDEwLjEtMTAuMWwwLTk5LjYgMC0yLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6L544 384 32 384l-15.4 0C7.4 384 0 391.4 0 400.6z" />
            <path d="M224 64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 2.3 0 99.6c0 5.6 4.5 10.1 10.1 10.1c3.6 0 7-1.9 8.8-5.1l48-83.9C492.3 123.1 543.1 198.4 544 285.6l0 98.4L32 384l0-96c0-88.2 51-164.5 125.1-201l48 83.9c1.8 3.2 5.2 5.1 8.8 5.1c5.6 0 10.1-4.5 10.1-10.1l0-99.6 0-2.3z" />
    </Icon>
);

export default HelmetSafety;