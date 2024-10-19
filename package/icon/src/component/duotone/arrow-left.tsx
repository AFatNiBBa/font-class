
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=duotone arrow-left}
 * @preview ![arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03Ny4zIDI1NmwzMi0zMkw0MTYgMjI0YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0zMDYuNyAwYy0xMC43LTEwLjctMjEuMy0yMS4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOS40IDI3OC42Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM2wxNjAtMTYwYzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwczEyLjUgMzIuOCAwIDQ1LjNMNzcuMyAyNTYgMjE0LjYgMzkzLjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNzLTMyLjggMTIuNS00NS4zIDBsLTE2MC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M77.3 256l32-32L416 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-306.7 0c-10.7-10.7-21.3-21.3-32-32z" />
            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256 214.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160z" />
    </Icon>
);

export default ArrowLeft;