
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=duotone circle-play}
 * @preview ![circle-play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE3Ni04OGMwLTguNyA0LjctMTYuNyAxMi4zLTIwLjljMy43LTIgNy43LTMuMSAxMS43LTMuMWM0LjMgMCA4LjcgMS4yIDEyLjUgMy41bDE0NCA4OGM3LjEgNC40IDExLjUgMTIuMSAxMS41IDIwLjVzLTQuNCAxNi4xLTExLjUgMjAuNWwtMTQ0IDg4Yy03LjQgNC41LTE2LjcgNC43LTI0LjMgLjVzLTEyLjMtMTIuMi0xMi4zLTIwLjlsMC0xNzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMTIuNSAxNDcuNWMtNy40LTQuNS0xNi43LTQuNy0yNC4zLS41cy0xMi4zIDEyLjMtMTIuMyAyMC45bDAgMTc2YzAgOC43IDQuNyAxNi43IDEyLjMgMjAuOXMxNi44IDQuMSAyNC4zLS41bDE0NC04OGM3LjEtNC40IDExLjUtMTIuMSAxMS41LTIwLjVzLTQuNC0xNi4xLTExLjUtMjAuNWwtMTQ0LTg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm176-88c0-8.7 4.7-16.7 12.3-20.9c3.7-2 7.7-3.1 11.7-3.1c4.3 0 8.7 1.2 12.5 3.5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176z" />
            <path d="M212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5s-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88z" />
    </Icon>
);

export default CirclePlay;