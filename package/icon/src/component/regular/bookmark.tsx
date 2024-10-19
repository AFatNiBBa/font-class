
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=regular bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0OEMwIDIxLjUgMjEuNSAwIDQ4IDBsMCA0OCAwIDM5My40IDEzMC4xLTkyLjljOC4zLTYgMTkuNi02IDI3LjkgMEwzMzYgNDQxLjQgMzM2IDQ4IDQ4IDQ4IDQ4IDAgMzM2IDBjMjYuNSAwIDQ4IDIxLjUgNDggNDhsMCA0NDBjMCA5LTUgMTcuMi0xMyAyMS4zcy0xNy42IDMuNC0yNC45LTEuOEwxOTIgMzk3LjUgMzcuOSA1MDcuNWMtNy4zIDUuMi0xNi45IDUuOS0yNC45IDEuOFMwIDQ5NyAwIDQ4OEwwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" />
    </Icon>
);

export default Bookmark;