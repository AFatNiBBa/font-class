
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=duotone wand-magic}
 * @preview ![wand-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODQuNyAxMjQuN2wzOS42IDM5LjYgMTA1LTEwNSAyMy4zIDIzLjMtMTA1IDEwNWMxMy4yIDEzLjIgMjYuNCAyNi40IDM5LjYgMzkuNmMzNi45LTM2LjkgNzMuOC03My44IDExMC43LTExMC43YzE4LjctMTguNyAxOC43LTQ5LjEgMC02Ny45TDQ2My4zIDE0LjFDNDUzLjkgNC43IDQ0MS43IDAgNDI5LjQgMHMtMjQuNiA0LjctMzMuOSAxNC4xTDI4NC43IDEyNC43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg3LjIgMjI3LjJMMjg0LjcgMTI0LjcgMTQuMSAzOTUuNGMtMTguNyAxOC43LTE4LjcgNDkuMSAwIDY3LjlsMzQuNiAzNC42YzE4LjcgMTguNyA0OS4xIDE4LjcgNjcuOSAwTDM4Ny4yIDIyNy4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M284.7 124.7l39.6 39.6 105-105 23.3 23.3-105 105c13.2 13.2 26.4 26.4 39.6 39.6c36.9-36.9 73.8-73.8 110.7-110.7c18.7-18.7 18.7-49.1 0-67.9L463.3 14.1C453.9 4.7 441.7 0 429.4 0s-24.6 4.7-33.9 14.1L284.7 124.7z" />
            <path d="M387.2 227.2L284.7 124.7 14.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L387.2 227.2z" />
    </Icon>
);

export default WandMagic;