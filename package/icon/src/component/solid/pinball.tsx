
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=solid pinball}
 * @preview ![pinball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDUuNDA0IDIxMS42MDlDMTM3LjQ5MiAyMDUuMzA5IDEyOC4xNDggMjAwLjAyMSAxMTguMTA5IDE5Ni42MzFDNzAuODE2IDE4MC42NiAxOS45NDMgMjA3LjMxOCA0LjQ4NCAyNTYuMTcyQy0xMC45NzcgMzA1LjAyMyAxNC44MyAzNTcuNTc0IDYyLjEyMyAzNzMuNTQzTDM3Mi40MTYgNDc4LjMyMkMzODUuMzU5IDQ4Mi42NjQgNDAwLjE2NiA0NzguNDk0IDQwOS4wMDIgNDY2Ljc1NEM0MjAuMjY5IDQ1MS43NzUgNDE3LjY1MiA0MzAuMTk1IDQwMy4xNTIgNDE4LjU1NUwxNDUuNDA0IDIxMS42MDlaTTk2LjE2NiAzMTkuNjY2Qzc4LjU4NiAzMTkuNjY2IDY0LjMzNCAzMDUuNDE0IDY0LjMzNCAyODcuODMyQzY0LjMzNCAyNzAuMjUyIDc4LjU4NiAyNTYgOTYuMTY2IDI1NkMxMTMuNzQ4IDI1NiAxMjggMjcwLjI1MiAxMjggMjg3LjgzMkMxMjggMzA1LjQxNCAxMTMuNzQ4IDMxOS42NjYgOTYuMTY2IDMxOS42NjZaTTM1MiAzMkMyOTguOTggMzIgMjU2IDc0Ljk4IDI1NiAxMjhTMjk4Ljk4IDIyNCAzNTIgMjI0UzQ0OCAxODEuMDIgNDQ4IDEyOFM0MDUuMDE5IDMyIDM1MiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Pinball(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M145.404 211.609C137.492 205.309 128.148 200.021 118.109 196.631C70.816 180.66 19.943 207.318 4.484 256.172C-10.977 305.023 14.83 357.574 62.123 373.543L372.416 478.322C385.359 482.664 400.166 478.494 409.002 466.754C420.269 451.775 417.652 430.195 403.152 418.555L145.404 211.609ZM96.166 319.666C78.586 319.666 64.334 305.414 64.334 287.832C64.334 270.252 78.586 256 96.166 256C113.748 256 128 270.252 128 287.832C128 305.414 113.748 319.666 96.166 319.666ZM352 32C298.98 32 256 74.98 256 128S298.98 224 352 224S448 181.02 448 128S405.019 32 352 32Z" />
        </Icon>
    </>
}