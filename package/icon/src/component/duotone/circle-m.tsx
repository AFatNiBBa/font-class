
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=duotone circle-m}
 * @preview ![circle-m](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOCAxNTJjMC0xMC40IDYuNy0xOS42IDE2LjYtMjIuOGMyLjQtLjggNC45LTEuMiA3LjQtMS4yYzcuNiAwIDE0LjkgMy42IDE5LjUgOS45YzI4LjIgMzkgNTYuNCA3OCA4NC41IDExNy4xYzI4LjItMzkgNTYuNC03OCA4NC41LTExNy4xYzQuNi02LjQgMTEuOS0xMCAxOS41LTkuOWMyLjUgMCA0LjkgLjQgNy40IDEuMmM5LjkgMy4yIDE2LjYgMTIuNCAxNi42IDIyLjhsMCAyMDhjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xMzMuOGMtMjAuMiAyNy45LTQwLjQgNTUuOS02MC41IDgzLjhjLTQuNSA2LjItMTEuNyAxMC0xOS41IDkuOXMtMTQuOS0zLjctMTkuNS05LjljLTIwLjItMjcuOS00MC40LTU1LjktNjAuNS04My44TDE3NiAzNjBjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0yMDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQuNiAxMjkuMmM5LjktMy4yIDIwLjcgLjMgMjYuOCA4LjhMMjU2IDI1NWw4NC41LTExNy4xYzYuMS04LjQgMTYuOS0xMiAyNi44LTguOHMxNi42IDEyLjQgMTYuNiAyMi44bDAgMjA4YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0bDAtMTMzLjgtNjAuNSA4My44Yy00LjUgNi4yLTExLjcgOS45LTE5LjUgOS45cy0xNC45LTMuNy0xOS41LTkuOUwxNzYgMjI2LjIgMTc2IDM2MGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTIwOGMwLTEwLjQgNi43LTE5LjYgMTYuNi0yMi44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 152c0-10.4 6.7-19.6 16.6-22.8c2.4-.8 4.9-1.2 7.4-1.2c7.6 0 14.9 3.6 19.5 9.9c28.2 39 56.4 78 84.5 117.1c28.2-39 56.4-78 84.5-117.1c4.6-6.4 11.9-10 19.5-9.9c2.5 0 4.9 .4 7.4 1.2c9.9 3.2 16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8c-20.2 27.9-40.4 55.9-60.5 83.8c-4.5 6.2-11.7 10-19.5 9.9s-14.9-3.7-19.5-9.9c-20.2-27.9-40.4-55.9-60.5-83.8L176 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208z" />
            <path d="M144.6 129.2c9.9-3.2 20.7 .3 26.8 8.8L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8-60.5 83.8c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2 176 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.4 6.7-19.6 16.6-22.8z" />
    </Icon>
);

export default CircleM;