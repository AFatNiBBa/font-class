
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=duotone circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMEMzOTcuNCAwIDUxMiAxMTQuNiA1MTIgMjU2bC02NCAwYzAtMTA2LTg2LTE5Mi0xOTItMTkybDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMEMxMTQuNiAwIDAgMTE0LjYgMCAyNTZTMTE0LjYgNTEyIDI1NiA1MTJzMjU2LTExNC42IDI1Ni0yNTZIMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0C397.4 0 512 114.6 512 256l-64 0c0-106-86-192-192-192l0-64z" />
            <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256H288c-17.7 0-32-14.3-32-32V0z" />
    </Icon>
);

export default CircleThreeQuartersStroke;