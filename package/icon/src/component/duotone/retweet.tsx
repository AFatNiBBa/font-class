
import { Icon, generic } from "../../index";

/**
 * A component that renders the `retweet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=duotone retweet}
 * @preview ![retweet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNzIgMTI4YzAtMTcuNyAxNC4zLTMyIDMyLTMybDExMiAwYzUzIDAgOTYgNDMgOTYgOTZsMCAxMjggMzIgMGMxMi45IDAgMjQuNiA3LjggMjkuNiAxOS44czIuMiAyNS43LTYuOSAzNC45bC02NCA2NGMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBsLTY0LTY0Yy05LjItOS4yLTExLjktMjIuOS02LjktMzQuOXMxNi42LTE5LjggMjkuNi0xOS44bDMyIDAgMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJsLTExMiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwNCAzODRjMCAxNy43LTE0LjMgMzItMzIgMzJsLTExMiAwYy01MyAwLTk2LTQzLTk2LTk2bDAtMTI4LTMyIDBjLTEyLjkgMC0yNC42LTcuOC0yOS42LTE5LjhzLTIuMi0yNS43IDYuOS0zNC45bDY0LTY0YzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwbDY0IDY0YzkuMiA5LjIgMTEuOSAyMi45IDYuOSAzNC45cy0xNi42IDE5LjgtMjkuNiAxOS44bC0zMiAwIDAgMTI4YzAgMTcuNyAxNC4zIDMyIDMyIDMybDExMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M272 128c0-17.7 14.3-32 32-32l112 0c53 0 96 43 96 96l0 128 32 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l32 0 0-128c0-17.7-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32z" />
            <path d="M304 384c0 17.7-14.3 32-32 32l-112 0c-53 0-96-43-96-96l0-128-32 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-32 0 0 128c0 17.7 14.3 32 32 32l112 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default Retweet;