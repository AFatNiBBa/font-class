
import { Icon, generic } from "../../index";

/**
 * A component that renders the `z` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=duotone z}
 * @preview ![z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgNDYuMyAxNC4zIDMyIDMyIDMybDMyMCAwYzEyLjQgMCAyMy43IDcuMiAyOSAxOC40czMuNiAyNC41LTQuNCAzNC4xTDEwMC4zIDQxNiAzNTIgNDE2YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDMyIDQ4MGMtMTIuNCAwLTIzLjctNy4yLTI5LTE4LjRzLTMuNi0yNC41IDQuNC0zNC4xTDI4My43IDk2IDMyIDk2QzE0LjMgOTYgMCA4MS43IDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l320 0c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416 352 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96 32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default Z;