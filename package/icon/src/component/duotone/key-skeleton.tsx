
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=duotone key-skeleton}
 * @preview ![key-skeleton](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAyNDIuNzVMOS4zNzUgNDU3LjM3NUMtMy4xMjUgNDY5Ljg3NSAtMy4xMjUgNDkwLjEyNSA5LjM3NSA1MDIuNjI1QzE1LjYyNSA1MDguODc1IDIzLjgxMiA1MTIgMzIgNTEyUzQ4LjM3NSA1MDguODc1IDU0LjYyNSA1MDIuNjI1TDkwLjM0MiA0NjYuOTA4TDExOS40MzIgNDk1Ljk5OUMxMzEuOTI5IDUwOC40OTUgMTUyLjE5IDUwOC40OTYgMTY0LjY4NyA0OTZMMTg3LjMxNCA0NzMuMzczQzE4Ny4zMTYgNDczLjM3MSAxODcuMzE2IDQ3My4zNjkgMTg3LjMxOCA0NzMuMzY3TDIwOCA0NTIuNjg2QzIyMC40OTggNDQwLjE5IDIyMC40OTggNDE5LjkyOCAyMDguMDAxIDQwNy40MzFMMTc4LjkxIDM3OC4zNEwyNjkuMjUgMjg4TDIyNCAyNDIuNzVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNiAwSDMyMEMyNjYuOTggMCAyMjQgNDIuOTggMjI0IDk2VjI0Mi43NUwyNjkuMjUgMjg4SDQxNkM0NjkuMDIgMjg4IDUxMiAyNDUuMDIgNTEyIDE5MlY5NkM1MTIgNDIuOTggNDY5LjAyIDAgNDE2IDBaTTQxNiAxNzIuNzk5QzQxNiAxODMuNDAyIDQwNy40MDQgMTkyIDM5Ni44MDEgMTkySDMzOS4xOTlDMzI4LjU5NiAxOTIgMzIwIDE4My40MDIgMzIwIDE3Mi43OTlWMTE1LjE5OUMzMjAgMTA0LjU5NiAzMjguNTk2IDk2IDMzOS4xOTkgOTZIMzk2LjgwMUM0MDcuNDA0IDk2IDQxNiAxMDQuNTk2IDQxNiAxMTUuMTk5VjE3Mi43OTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 242.75L9.375 457.375C-3.125 469.875 -3.125 490.125 9.375 502.625C15.625 508.875 23.812 512 32 512S48.375 508.875 54.625 502.625L90.342 466.908L119.432 495.999C131.929 508.495 152.19 508.496 164.687 496L187.314 473.373C187.316 473.371 187.316 473.369 187.318 473.367L208 452.686C220.498 440.19 220.498 419.928 208.001 407.431L178.91 378.34L269.25 288L224 242.75Z" />
            <path d="M416 0H320C266.98 0 224 42.98 224 96V242.75L269.25 288H416C469.02 288 512 245.02 512 192V96C512 42.98 469.02 0 416 0ZM416 172.799C416 183.402 407.404 192 396.801 192H339.199C328.596 192 320 183.402 320 172.799V115.199C320 104.596 328.596 96 339.199 96H396.801C407.404 96 416 104.596 416 115.199V172.799Z" />
    </Icon>
);

export default KeySkeleton;