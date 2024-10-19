
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scythe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=duotone scythe}
 * @preview ![scythe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3OS4zYzAgNyA1LjcgMTIuNyAxMi43IDEyLjdMNTQxIDE5MmM5LjMtNDMuNiAxOC43LTg3LjEgMjgtMTMwLjdjMi42LTEyIDUuMS0yNCA3LjctMzZjMS44LTguNCAzLjYtMTYuOSA1LjQtMjUuM0M1MDUuNCAwIDQyOC43IDAgMzUyIDBDMTE0LjggMCAxNSAxNTEuMSAxLjYgMTczLjNjLTEuMSAxLjgtMS42IDMuOC0xLjYgNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTYzOSAyNC4xQzYzNi4xIDEyLjcgNjI3IDMuMyA2MTQuNyAuN2MtMi4yLS41LTQuNS0uNy02LjctLjdMNTgyLjEgMGwtNS40IDI1LjNzMCAwIDAgMGwtNy43IDM2TDUyMC40IDI4OCA0MTYgMjg4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDkwLjcgMC0yNiAxMjEuM2MtMy43IDE3LjMgNy4zIDM0LjMgMjQuNiAzOHMzNC4zLTcuMyAzOC0yNC42bDM0LjMtMTYwTDYzNC40IDYxLjNsNC44LTIyLjZzMCAwIDAgMGMxLjEtNSAuOS0xMC0uMy0xNC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 179.3c0 7 5.7 12.7 12.7 12.7L541 192c9.3-43.6 18.7-87.1 28-130.7c2.6-12 5.1-24 7.7-36c1.8-8.4 3.6-16.9 5.4-25.3C505.4 0 428.7 0 352 0C114.8 0 15 151.1 1.6 173.3c-1.1 1.8-1.6 3.8-1.6 6z" />
            <path d="M639 24.1C636.1 12.7 627 3.3 614.7 .7c-2.2-.5-4.5-.7-6.7-.7L582.1 0l-5.4 25.3s0 0 0 0l-7.7 36L520.4 288 416 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l90.7 0-26 121.3c-3.7 17.3 7.3 34.3 24.6 38s34.3-7.3 38-24.6l34.3-160L634.4 61.3l4.8-22.6s0 0 0 0c1.1-5 .9-10-.3-14.6z" />
    </Icon>
);

export default Scythe;