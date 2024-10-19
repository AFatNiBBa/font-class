
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=duotone share}
 * @preview ![share](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwNEMwIDQxNy4zIDgxLjUgNDY3LjkgMTAwLjIgNDc4LjFjMi41IDEuNCA1LjMgMS45IDguMSAxLjljMTAuOSAwIDE5LjctOC45IDE5LjctMTkuN2MwLTcuNS00LjMtMTQuNC05LjgtMTkuNUMxMDguOCA0MzEuOSA5NiA0MTQuNCA5NiAzODRjMC01MyA0My05NiA5Ni05Nmw5NiAwIDAtMTYwLTExMiAwQzc4LjggMTI4IDAgMjA2LjggMCAzMDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggNjRjMC0xMi42IDcuNC0yNC4xIDE5LTI5LjJzMjUtMyAzNC40IDUuNGwxNjAgMTQ0YzYuNyA2LjEgMTAuNiAxNC43IDEwLjYgMjMuOHMtMy44IDE3LjctMTAuNiAyMy44bC0xNjAgMTQ0Yy05LjQgOC41LTIyLjkgMTAuNi0zNC40IDUuNHMtMTktMTYuNi0xOS0yOS4ybDAtMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0-160-112 0C78.8 128 0 206.8 0 304z" />
            <path d="M288 64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2l0-288z" />
    </Icon>
);

export default Share;