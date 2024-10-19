
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=sharp-duotone-solid person-praying}
 * @preview ![person-praying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNjRhNjQgNjQgMCAxIDAgMTI4IDBBNjQgNjQgMCAxIDAgMjI0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTc2IDE0NGwtMjQuMSAwLTExLjIgMjEuNEw3OS44IDI4MC45Yy0yMC4yIDM4LjUtOS40IDg1LjkgMjUuNiAxMTEuOEwxNTguNiA0MzIgNzIgNDMybC00MCAwIDAgODAgNDAgMCAyMDggMCAyMy44LTcyLjJMMTg3LjcgMzU0bDQ1LTkwIDIyLjkgMzEuNSAyNC45IDM0LjJMMzEzLjMgMzAzbDcyLjEtNTkgMzEtMjUuMy01MC43LTYxLjktMzEgMjUuMy0zOS40IDMyLjItMzkuMS01My44LTEyLTE2LjVMMjI0IDE0NGwtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 64a64 64 0 1 0 128 0A64 64 0 1 0 224 64z" />
            <path d="M176 144l-24.1 0-11.2 21.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432 72 432l-40 0 0 80 40 0 208 0 23.8-72.2L187.7 354l45-90 22.9 31.5 24.9 34.2L313.3 303l72.1-59 31-25.3-50.7-61.9-31 25.3-39.4 32.2-39.1-53.8-12-16.5L224 144l-48 0z" />
    </Icon>
);

export default PersonPraying;