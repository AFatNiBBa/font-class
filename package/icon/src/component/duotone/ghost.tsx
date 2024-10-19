
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ghost` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=duotone ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDQ2Mi4yQzAgNDcyIDggNDgwIDE3LjggNDgwYzQgMCA3LjktMS40IDExLjEtMy45bDExLjItOWMxMy40LTEwLjcgMzIuOC05IDQ0LjEgMy45TDExNC43IDUwNmMzLjMgMy44IDguMiA2IDEzLjMgNnM5LjktMi4yIDEzLjMtNmwyNi42LTMwLjVjMTIuNy0xNC42IDM1LjQtMTQuNiA0OC4yIDBMMjQyLjcgNTA2YzMuMyAzLjggOC4yIDYgMTMuMyA2czkuOS0yLjIgMTMuMy02TDI5OS44IDQ3MWMxMS4zLTEyLjkgMzAuNy0xNC42IDQ0LjEtMy45bDExLjIgOWMzLjIgMi41IDcuMSAzLjkgMTEuMSAzLjljOS44IDAgMTcuOC04IDE3LjgtMTcuOEwzODQgMTkyQzM4NCA4NiAyOTggMCAxOTIgMFMwIDg2IDAgMTkyem0xNjAgMGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem0xMjggMGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDIyNGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6bTEyOCAwYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 462.2C0 472 8 480 17.8 480c4 0 7.9-1.4 11.1-3.9l11.2-9c13.4-10.7 32.8-9 44.1 3.9L114.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6l26.6-30.5c12.7-14.6 35.4-14.6 48.2 0L242.7 506c3.3 3.8 8.2 6 13.3 6s9.9-2.2 13.3-6L299.8 471c11.3-12.9 30.7-14.6 44.1-3.9l11.2 9c3.2 2.5 7.1 3.9 11.1 3.9c9.8 0 17.8-8 17.8-17.8L384 192C384 86 298 0 192 0S0 86 0 192zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M128 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Ghost;