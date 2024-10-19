
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=sharp-duotone-solid lock-a}
 * @preview ![lock-a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDUxMmw0NDggMCAwLTMyMC04MCAwIDAtNDhDMzY4IDY0LjUgMzAzLjUgMCAyMjQgMFM4MCA2NC41IDgwIDE0NGwwIDQ4TDAgMTkyek0xMjggNDQ4bDgwLTE5MiAzMiAwIDgwIDE5Mi0zNC43IDAtMTYuNy00MC04OS4zIDAtMTYuNyA0MEwxMjggNDQ4em0xNi0zMDRjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4LTE2MCAwIDAtNDh6bTQ4LjcgMjMybDYyLjcgMEwyMjQgMzAwLjggMTkyLjcgMzc2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjY4LjcgNDA4bDE2LjcgNDAgMzQuNyAwTDI0MCAyNTZsLTMyIDBMMTI4IDQ0OGwzNC43IDAgMTYuNy00MCA4OS4zIDB6bS0xMy4zLTMybC02Mi43IDBMMjI0IDMwMC44IDI1NS4zIDM3NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320-80 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144l0 48L0 192zM128 448l80-192 32 0 80 192-34.7 0-16.7-40-89.3 0-16.7 40L128 448zm16-304c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48-160 0 0-48zm48.7 232l62.7 0L224 300.8 192.7 376z" />
            <path d="M268.7 408l16.7 40 34.7 0L240 256l-32 0L128 448l34.7 0 16.7-40 89.3 0zm-13.3-32l-62.7 0L224 300.8 255.3 376z" />
    </Icon>
);

export default LockA;