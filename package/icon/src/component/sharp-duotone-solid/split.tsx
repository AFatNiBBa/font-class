
import { Icon, generic } from "../../index";

/**
 * A component that renders the `split` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=sharp-duotone-solid split}
 * @preview ![split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNzguNyAyODhMMjk3LjQgNDA2LjZsOS40IDkuNCAxMy4zIDAgNjQgMCAwIDY0IDMyIDAgOTYtOTYtOTYtOTYtMzIgMCAwIDY0LTUwLjcgMC05Ni05Ni0yMi42IDIyLjZjLTMuMSAzLjEtNi4yIDYuMi05LjQgOS40TDE5MiAyODhsLTEzLjMgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAxMjhMNDE2IDMybC0zMiAwIDAgNjQtNjQgMC0xMy4zIDAtOS40IDkuNEwxNzguNyAyMjQgMzIgMjI0IDAgMjI0bDAgNjQgMzIgMCAxNjAgMCAxMy4zIDAgOS40LTkuNEwzMzMuMyAxNjBsNTAuNyAwIDAgNjQgMzIgMCA5Ni05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Split: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M178.7 288L297.4 406.6l9.4 9.4 13.3 0 64 0 0 64 32 0 96-96-96-96-32 0 0 64-50.7 0-96-96-22.6 22.6c-3.1 3.1-6.2 6.2-9.4 9.4L192 288l-13.3 0z" />
            <path d="M512 128L416 32l-32 0 0 64-64 0-13.3 0-9.4 9.4L178.7 224 32 224 0 224l0 64 32 0 160 0 13.3 0 9.4-9.4L333.3 160l50.7 0 0 64 32 0 96-96z" />
    </Icon>
);

export default Split;