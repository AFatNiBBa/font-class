
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dagger` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=duotone dagger}
 * @preview ![dagger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTkybDAgMjQgMCAxOTguOGMwIDEwLjUgMi45IDIwLjggOC41IDI5LjdsMzUuMSA1Ni4yYzQuNCA3IDEyLjEgMTEuMyAyMC40IDExLjNzMTYtNC4zIDIwLjQtMTEuM2wzNS4xLTU2LjJjNS42LTguOSA4LjUtMTkuMiA4LjUtMjkuN0wyNTYgMjE2bDAtMjQtMjQgMC00MCAwLTQwIDAtMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDk2TDQ4IDEyOGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhzMjEuNSA0OCA0OCA0OGMyMC45IDAgMzguNy0xMy40IDQ1LjMtMzJsOTguNyAwIDk4LjcgMGM2LjYgMTguNiAyNC40IDMyIDQ1LjMgMzJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDhsLTExMiAwIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 192l0 24 0 198.8c0 10.5 2.9 20.8 8.5 29.7l35.1 56.2c4.4 7 12.1 11.3 20.4 11.3s16-4.3 20.4-11.3l35.1-56.2c5.6-8.9 8.5-19.2 8.5-29.7L256 216l0-24-24 0-40 0-40 0-24 0z" />
            <path d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96L48 128c-26.5 0-48 21.5-48 48s21.5 48 48 48c20.9 0 38.7-13.4 45.3-32l98.7 0 98.7 0c6.6 18.6 24.4 32 45.3 32c26.5 0 48-21.5 48-48s-21.5-48-48-48l-112 0 0-96z" />
    </Icon>
);

export default Dagger;