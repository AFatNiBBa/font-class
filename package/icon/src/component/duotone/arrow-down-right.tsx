
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=duotone arrow-down-right}
 * @preview ![arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIzMS40MzggMzUxLjk4MUwyNy43MTkgMTQ4LjI2M0MxMi4wOTQgMTMyLjYzOCAxMi4wOTQgMTA3LjMyNSAyNy43MTkgOTEuN1M2OC42NTYgNzYuMDc1IDg0LjI4MSA5MS43TDI4OCAyOTUuNDE5VjM1MS45ODFIMjMxLjQzOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjg4IDM1MlYxODRDMjg4IDE2MS45MDYgMzA1LjkwNiAxNDQgMzI4IDE0NFMzNjggMTYxLjkwNiAzNjggMTg0VjM5MkMzNjggNDE0LjA5NCAzNTAuMDk0IDQzMiAzMjggNDMySDEyMEM5Ny45MDYgNDMyIDgwIDQxNC4wOTQgODAgMzkyUzk3LjkwNiAzNTIgMTIwIDM1MkgyODhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M231.438 351.981L27.719 148.263C12.094 132.638 12.094 107.325 27.719 91.7S68.656 76.075 84.281 91.7L288 295.419V351.981H231.438Z" />
            <path d="M288 352V184C288 161.906 305.906 144 328 144S368 161.906 368 184V392C368 414.094 350.094 432 328 432H120C97.906 432 80 414.094 80 392S97.906 352 120 352H288Z" />
    </Icon>
);

export default ArrowDownRight;