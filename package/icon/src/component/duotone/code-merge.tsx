
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=duotone code-merge}
 * @preview ![code-merge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxNTMuM2M0LjkgMi4xIDEwLjEgMy44IDE1LjQgNC45YzIuNyAuNiA1LjQgMSA4LjIgMS4zYzEuNCAuMSAyLjggLjMgNC4yIC4zYzEuNCAuMSAyLjggLjEgNC4yIC4xYzExLjUgMCAyMi41LTIuNCAzMi40LTYuOEMxMTcgMjAxLjkgMTU4LjEgMjQwIDIwOCAyNDBsODYuNyAwYy0yLjEgNC45LTMuOCAxMC4xLTQuOSAxNS40Yy0uNiAyLjctMSA1LjQtMS4zIDguMmMtLjEgMS40LS4zIDIuOC0uMyA0LjJzLS4xIDIuOC0uMSA0LjJjMCAxMS40IDIuNCAyMi4yIDYuNyAzMkwyMDggMzA0Yy0zNiAwLTY5LjMtMTEuOS05Ni0zMmwwIDg2LjZjLTQuOS0yLjEtMTAuMS0zLjgtMTUuNC00LjljLTIuNy0uNi01LjQtMS04LjItMS4zYy0xLjQtLjEtMi44LS4zLTQuMi0uM3MtMi44LS4xLTQuMi0uMWMtMTEuNCAwLTIyLjIgMi40LTMyIDYuN2wwLTIwNS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgNTZhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4em0wIDEwNEE4MCA4MCAwIDEgMCA4MCAwYTgwIDgwIDAgMSAwIDAgMTYwem0wIDI0OGEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6bTAgMTA0YTgwIDgwIDAgMSAwIDAtMTYwIDgwIDgwIDAgMSAwIDAgMTYwek0zNDQgMjcyYTI0IDI0IDAgMSAxIDQ4IDAgMjQgMjQgMCAxIDEgLTQ4IDB6bTEwNCAwYTgwIDgwIDAgMSAwIC0xNjAgMCA4MCA4MCAwIDEgMCAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CodeMerge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 153.3c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3c1.4 .1 2.8 .1 4.2 .1c11.5 0 22.5-2.4 32.4-6.8C117 201.9 158.1 240 208 240l86.7 0c-2.1 4.9-3.8 10.1-4.9 15.4c-.6 2.7-1 5.4-1.3 8.2c-.1 1.4-.3 2.8-.3 4.2s-.1 2.8-.1 4.2c0 11.4 2.4 22.2 6.7 32L208 304c-36 0-69.3-11.9-96-32l0 86.6c-4.9-2.1-10.1-3.8-15.4-4.9c-2.7-.6-5.4-1-8.2-1.3c-1.4-.1-2.8-.3-4.2-.3s-2.8-.1-4.2-.1c-11.4 0-22.2 2.4-32 6.7l0-205.3z" />
            <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160zm0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CodeMerge;