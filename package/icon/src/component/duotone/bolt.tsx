
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=duotone bolt}
 * @preview ![bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNDkuNCA0NC42YzUuOS0xMy43IDEuNS0yOS43LTEwLjYtMzguNXMtMjguNi04LTM5LjkgMS44bC0yNTYgMjI0Yy0xMCA4LjgtMTMuNiAyMi45LTguOSAzNS4zUzUwLjcgMjg4IDY0IDI4OGwxMTEuNSAwTDk4LjYgNDY3LjRjLTUuOSAxMy43LTEuNSAyOS43IDEwLjYgMzguNXMyOC42IDggMzkuOS0xLjhsMjU2LTIyNGMxMC04LjggMTMuNi0yMi45IDguOS0zNS4zcy0xNi42LTIwLjctMzAtMjAuN2wtMTExLjUgMEwzNDkuNCA0NC42eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z" />
    </Icon>
);

export default Bolt;