
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paw-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw-simple?s=sharp-duotone-solid paw-simple}
 * @preview ![paw-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmE0OCA0OCAwIDEgMCA5NiAwQTQ4IDQ4IDAgMSAwIDAgMTkyek05NiA4MGE0OCA0OCAwIDEgMCA5NiAwQTQ4IDQ4IDAgMSAwIDk2IDgwem0xNjAgMGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwIC05NiAwem05NiAxMTJhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAxNjBMMTA3LjcgMjgzQzY0LjIgMjkzLjggMzIgMzMzLjIgMzIgMzgwYzAgNTUuMiA0NC44IDEwMCAxMDAgMTAwYzI0LjggMCA0Ny41LTkgNjUtMjRsNTQgMGMxNy41IDE1IDQwLjIgMjQgNjUgMjRjNTUuMiAwIDEwMC00NC44IDEwMC0xMDBjMC00Ni44LTMyLjItODYuMi03NS43LTk3TDI3MiAxNjBsLTk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PawSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192a48 48 0 1 0 96 0A48 48 0 1 0 0 192zM96 80a48 48 0 1 0 96 0A48 48 0 1 0 96 80zm160 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm96 112a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M176 160L107.7 283C64.2 293.8 32 333.2 32 380c0 55.2 44.8 100 100 100c24.8 0 47.5-9 65-24l54 0c17.5 15 40.2 24 65 24c55.2 0 100-44.8 100-100c0-46.8-32.2-86.2-75.7-97L272 160l-96 0z" />
    </Icon>
);

export default PawSimple;