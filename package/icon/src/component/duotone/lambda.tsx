
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lambda` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=duotone lambda}
 * @preview ![lambda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZsMTA4LjIgMCAxNi40IDMyLjdMMTguOCA0MzQuOWMtNy4zIDE2LjEtLjEgMzUuMSAxNiA0Mi4zczM1LjEgLjEgNDIuMy0xNkwxOTMuNSAyMDIuNmwxMjEgMjQyYzEwLjggMjEuNyAzMyAzNS40IDU3LjIgMzUuNGw0NC4yIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTQ0LjIgMEwxOTcuNSA2Ny40QzE4Ni42IDQ1LjcgMTY0LjUgMzIgMTQwLjIgMzJMMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l108.2 0 16.4 32.7L18.8 434.9c-7.3 16.1-.1 35.1 16 42.3s35.1 .1 42.3-16L193.5 202.6l121 242c10.8 21.7 33 35.4 57.2 35.4l44.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-44.2 0L197.5 67.4C186.6 45.7 164.5 32 140.2 32L32 32z" />
    </Icon>
);

export default Lambda;