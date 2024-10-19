
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=duotone ranking-star}
 * @preview ![ranking-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDEyOGMwIDE3LjctMTQuMyAzMi0zMiAzMkwzMiA1MTJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyTDAgMzUyem0yMjQtNjRjMC0xNy43IDE0LjMtMzIgMzItMzJsMTI4IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxOTJjMCAxNy43LTE0LjMgMzItMzIgMzJsLTEyOCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTE5MnpNNDQ4IDQxNmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0YzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xMjggMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzMC4yIDYuM2wyMy42IDQ3LjggNTIuMyA3LjVjOS4zIDEuNCAxMy4yIDEyLjkgNi40IDE5LjhsLTM4IDM2LjYgOSA1Mi4xYzEuNCA5LjMtOC4yIDE2LjUtMTYuOCAxMi4ybC00Ni42LTI0LjQtNDYuOSAyNC44Yy04LjYgNC4zLTE4LjMtMi45LTE2LjgtMTIuMmw5LTUyLjEtMzgtMzdjLTYuOC02LjgtMi45LTE4LjMgNi40LTE5LjhsNTIuMy03LjVMMzA5LjggNi4zYzQuMy04LjYgMTYuNS04LjMgMjAuNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32L0 352zm224-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-192zM448 416c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-64z" />
            <path d="M330.2 6.3l23.6 47.8 52.3 7.5c9.3 1.4 13.2 12.9 6.4 19.8l-38 36.6 9 52.1c1.4 9.3-8.2 16.5-16.8 12.2l-46.6-24.4-46.9 24.8c-8.6 4.3-18.3-2.9-16.8-12.2l9-52.1-38-37c-6.8-6.8-2.9-18.3 6.4-19.8l52.3-7.5L309.8 6.3c4.3-8.6 16.5-8.3 20.4 0z" />
    </Icon>
);

export default RankingStar;