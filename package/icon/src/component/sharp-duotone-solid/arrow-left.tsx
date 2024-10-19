
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=sharp-duotone-solid arrow-left}
 * @preview ![arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05My4zIDI1NmMxMC43LTEwLjcgMjEuMy0yMS4zIDMyLTMyTDQxNiAyMjRsMzIgMCAwIDY0LTMyIDAtMjkwLjcgMGMtMTAuNy0xMC43LTIxLjMtMjEuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIuNyAyNTZsMjIuNi0yMi42IDE0NC0xNDRMMTkyIDY2LjcgMjM3LjMgMTEybC0yMi42IDIyLjZMOTMuMyAyNTYgMjE0LjYgMzc3LjQgMjM3LjMgNDAwIDE5MiA0NDUuM2wtMjIuNi0yMi42LTE0NC0xNDRMMi43IDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M93.3 256c10.7-10.7 21.3-21.3 32-32L416 224l32 0 0 64-32 0-290.7 0c-10.7-10.7-21.3-21.3-32-32z" />
            <path d="M2.7 256l22.6-22.6 144-144L192 66.7 237.3 112l-22.6 22.6L93.3 256 214.6 377.4 237.3 400 192 445.3l-22.6-22.6-144-144L2.7 256z" />
    </Icon>
);

export default ArrowLeft;