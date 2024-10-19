
import { Icon, generic } from "../../index";

/**
 * A component that renders the `x` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x?s=sharp-duotone-solid x}
 * @preview ![x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDYuMiAzMmw3Ny41IDAtMS40IDJMMjMwLjcgMjU2IDM4Mi4zIDQ3OGwxLjQgMi03Ny41IDBMMTkyIDMxMi44IDc3LjggNDgwIC4zIDQ4MGwxLjQtMkwxNTMuMyAyNTYgMS43IDM0IC4zIDMybDc3LjUgMEwxOTIgMTk5LjIgMzA2LjIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const X: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M306.2 32l77.5 0-1.4 2L230.7 256 382.3 478l1.4 2-77.5 0L192 312.8 77.8 480 .3 480l1.4-2L153.3 256 1.7 34 .3 32l77.5 0L192 199.2 306.2 32z" />
    </Icon>
);

export default X;