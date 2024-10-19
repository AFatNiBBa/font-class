
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=duotone star}
 * @preview ![star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMTYuOSAxOEMzMTEuNiA3IDMwMC40IDAgMjg4LjEgMHMtMjMuNCA3LTI4LjggMThMMTk1IDE1MC4zIDUxLjQgMTcxLjVjLTEyIDEuOC0yMiAxMC4yLTI1LjcgMjEuN3MtLjcgMjQuMiA3LjkgMzIuN0wxMzcuOCAzMjkgMTEzLjIgNDc0LjdjLTIgMTIgMyAyNC4yIDEyLjkgMzEuM3MyMyA4IDMzLjggMi4zbDEyOC4zLTY4LjUgMTI4LjMgNjguNWMxMC44IDUuNyAyMy45IDQuOSAzMy44LTIuM3MxNC45LTE5LjMgMTIuOS0zMS4zTDQzOC41IDMyOSA1NDIuNyAyMjUuOWM4LjYtOC41IDExLjctMjEuMiA3LjktMzIuN3MtMTMuNy0xOS45LTI1LjctMjEuN0wzODEuMiAxNTAuMyAzMTYuOSAxOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Star: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </Icon>
);

export default Star;