
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=sharp-duotone-solid hand-love}
 * @preview ![hand-love](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0tLjYgMzI4LjVsMjkgMjcuNkwxMjQuOCA0NDhjNDMuMSA0MS4xIDEwMC40IDY0IDE2MCA2NGwxOS4yIDBjOTcuMiAwIDE3Ni03OC44IDE3Ni0xNzZsMC0yNDAgMC0zMi02NCAwIDAgMzIgMCAxNjAgMCA5Ni05NiAwLTMyIDAtOTYgMCAwLTIyNCAwLTk2IDAtMzJMMTI4IDBsMCAzMiAwIDMwNGMwIDEuNSAwIDMuMSAuMSA0LjZMODMuNSAyOTguMmwtMjktMjcuNkwtLjYgMzI4LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMTYwbC02NCAwIDAgMTYwIDY0IDAgMC0xNjB6bTk2IDMybC02NCAwIDAgMTI4IDY0IDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-.6 328.5l29 27.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-240 0-32-64 0 0 32 0 160 0 96-96 0-32 0-96 0 0-224 0-96 0-32L128 0l0 32 0 304c0 1.5 0 3.1 .1 4.6L83.5 298.2l-29-27.6L-.6 328.5z" />
            <path d="M288 160l-64 0 0 160 64 0 0-160zm96 32l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandLove;