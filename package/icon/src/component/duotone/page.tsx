
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=duotone page}
 * @preview ![page](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA1MTJIMzIwYzM1LjMgMCA2NC0yOC43IDY0LTY0VjEzOC41YzAtMTctNi43LTMzLjMtMTguNy00NS4zTDI5MC43IDE4LjdDMjc4LjcgNi43IDI2Mi41IDAgMjQ1LjUgMEg2NEMyOC43IDAgMCAyOC43IDAgNjRWNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 512H320c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Page;