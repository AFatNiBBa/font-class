
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timer?s=duotone timer}
 * @preview ![timer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTI5LjNDMzc4LjggODEuOSA0NDggMTYwLjkgNDQ4IDI1NmMwIDEwNi04NiAxOTItMTkyIDE5MlM2NCAzNjIgNjQgMjU2YzAtNTMuNyAyMi0xMDIuMyA1Ny42LTEzNy4xYzEyLjYtMTIuNCAxMi44LTMyLjYgLjUtNDUuM1M4OS41IDYwLjggNzYuOCA3My4xQzI5LjUgMTE5LjYgMCAxODQuNCAwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE1OSAxNTljOS40LTkuNCAyNC42LTkuNCAzMy45IDBsODAgODBjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlzLTI0LjYgOS40LTMzLjkgMGwtODAtODBjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Timer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-29.3C378.8 81.9 448 160.9 448 256c0 106-86 192-192 192S64 362 64 256c0-53.7 22-102.3 57.6-137.1c12.6-12.4 12.8-32.6 .5-45.3S89.5 60.8 76.8 73.1C29.5 119.6 0 184.4 0 256z" />
            <path d="M159 159c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default Timer;