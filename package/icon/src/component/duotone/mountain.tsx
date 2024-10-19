
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=duotone mountain}
 * @preview ![mountain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMzUuNyAxOTEuN2w1OS41IDc5LjNjLjQgLjUgLjggMSAxLjMgMS41cy45IC45IDEuNCAxLjNjMSAuOCAyIDEuNSAzLjEgMmMuNiAuMyAxLjEgLjUgMS43IC43czEuMiAuNCAxLjcgLjVjMS4yIC4zIDIuNCAuNCAzLjYgLjRjNC44IDAgOS42LTIuMSAxMi44LTYuNGM4LjUtMTEuNCAxNy4xLTIyLjggMjUuNi0zNC4xYzYtOC4xIDE1LjUtMTIuOCAyNS42LTEyLjhsMTI0LjYgMEwyODYuOCA0OWMtNi42LTEwLjYtMTguMy0xNy0zMC44LTE3cy0yNC4xIDYuNC0zMC44IDE3TDEzNS43IDE5MS43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzk2LjYgMjI0TDI3MiAyMjRjLTEwLjEgMC0xOS42IDQuNy0yNS42IDEyLjhsLTI1LjYgMzQuMWMtNi40IDguNS0xOS4yIDguNS0yNS42IDBsLTU5LjUtNzkuM0w4LjYgMzk0LjRDMyA0MDMuMyAwIDQxMy42IDAgNDI0LjFDMCA0NTUgMjUgNDgwIDU1LjkgNDgwbDQwMC4yIDBjMzAuOSAwIDU1LjktMjUgNTUuOS01NS45YzAtMTAuNS0zLTIwLjgtOC42LTI5LjdMMzk2LjYgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Mountain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M135.7 191.7l59.5 79.3c.4 .5 .8 1 1.3 1.5s.9 .9 1.4 1.3c1 .8 2 1.5 3.1 2c.6 .3 1.1 .5 1.7 .7s1.2 .4 1.7 .5c1.2 .3 2.4 .4 3.6 .4c4.8 0 9.6-2.1 12.8-6.4c8.5-11.4 17.1-22.8 25.6-34.1c6-8.1 15.5-12.8 25.6-12.8l124.6 0L286.8 49c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L135.7 191.7z" />
            <path d="M396.6 224L272 224c-10.1 0-19.6 4.7-25.6 12.8l-25.6 34.1c-6.4 8.5-19.2 8.5-25.6 0l-59.5-79.3L8.6 394.4C3 403.3 0 413.6 0 424.1C0 455 25 480 55.9 480l400.2 0c30.9 0 55.9-25 55.9-55.9c0-10.5-3-20.8-8.6-29.7L396.6 224z" />
    </Icon>
);

export default Mountain;