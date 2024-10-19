
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds?s=sharp-duotone-solid clouds}
 * @preview ![clouds](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmwwIDk2IDk2IDAgNjQuOSAwYzgtNzIgNjktMTI4IDE0My4xLTEyOGM0MS43IDAgNzkuMyAxNy44IDEwNS42IDQ2LjFjMTEuNy02LjUgMjQuNi0xMSAzOC40LTEzbDAtMzMuMWMwLTUzLTQzLTk2LTk2LTk2Yy0xNCAwLTI3LjIgMy0zOS4yIDguNEMyOTYuOCAzMC4xIDI1NS45IDAgMjA4IDBDMTUxLjYgMCAxMDQuOSA0MS43IDk3LjEgOTZMOTYgOTZDNDMgOTYgMCAxMzkgMCAxOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggNTEybDk2IDAgMzIwIDAgOTYgMCAwLTk2YzAtNTMtNDMtOTYtOTYtOTZsMC0xNmMwLTQ0LjItMzUuOC04MC04MC04MGMtMjQuMyAwLTQ2LjEgMTAuOS02MC44IDI4Yy0xOC43LTM1LjctNTYuMS02MC05OS4yLTYwYy02MS45IDAtMTEyIDUwLjEtMTEyIDExMmwwIDIxLjVjLTM3LjMgMTMuMi02NCA0OC43LTY0IDkwLjVsMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192l0 96 96 0 64.9 0c8-72 69-128 143.1-128c41.7 0 79.3 17.8 105.6 46.1c11.7-6.5 24.6-11 38.4-13l0-33.1c0-53-43-96-96-96c-14 0-27.2 3-39.2 8.4C296.8 30.1 255.9 0 208 0C151.6 0 104.9 41.7 97.1 96L96 96C43 96 0 139 0 192z" />
            <path d="M128 512l96 0 320 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28c-18.7-35.7-56.1-60-99.2-60c-61.9 0-112 50.1-112 112l0 21.5c-37.3 13.2-64 48.7-64 90.5l0 96z" />
    </Icon>
);

export default Clouds;