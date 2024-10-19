
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share-all` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=sharp-duotone-solid share-all}
 * @preview ![share-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMzJsMCA4OCA5NiA4OC05NiA4OCAwIDg4IDMyIDBMNTc2IDIwOCAzODQgMzJsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMjA4TDI1NiAzODRsLTMyIDAgMC05Ni0xNiAwYy02MS45IDAtMTEyIDUwLjEtMTEyIDExMmMwIDQ4IDMyIDgwIDMyIDgwcy0xMjgtNDgtMTI4LTE3NmMwLTk3LjIgNzguOC0xNzYgMTc2LTE3Nmw0OCAwIDAtOTYgMzIgMEw0NDggMjA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M352 32l0 88 96 88-96 88 0 88 32 0L576 208 384 32l-32 0z" />
            <path d="M448 208L256 384l-32 0 0-96-16 0c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176l48 0 0-96 32 0L448 208z" />
    </Icon>
);

export default ShareAll;