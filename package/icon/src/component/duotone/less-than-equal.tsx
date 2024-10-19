
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=duotone less-than-equal}
 * @preview ![less-than-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJjMCAxMy4xIDggMjQuOSAyMC4xIDI5LjdsMzIwIDEyOGMxNi40IDYuNiAzNS0xLjQgNDEuNi0xNy44YzEuNi0zLjkgMi4zLTcuOSAyLjMtMTEuOWMwLTEyLjctNy42LTI0LjctMjAuMS0yOS43TDE1MC4yIDE5MiAzOTUuOSA5My43YzEyLjUtNSAyMC4xLTE3IDIwLjEtMjkuN2MwLTQtLjctOC0yLjMtMTEuOWMtNi42LTE2LjQtMjUuMi0yNC40LTQxLjYtMTcuOGwtMzIwIDEyOEM0MCAxNjcuMSAzMiAxNzguOSAzMiAxOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDQ0OGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzODQgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192c0 13.1 8 24.9 20.1 29.7l320 128c16.4 6.6 35-1.4 41.6-17.8c1.6-3.9 2.3-7.9 2.3-11.9c0-12.7-7.6-24.7-20.1-29.7L150.2 192 395.9 93.7c12.5-5 20.1-17 20.1-29.7c0-4-.7-8-2.3-11.9c-6.6-16.4-25.2-24.4-41.6-17.8l-320 128C40 167.1 32 178.9 32 192z" />
            <path d="M0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default LessThanEqual;