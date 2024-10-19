
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eraser` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=duotone eraser}
 * @preview ![eraser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zOC42IDMzNmMwIDE2LjQgNi4yIDMyLjggMTguNyA0NS4zbDgwIDgwYzEyIDEyIDI4LjMgMTguNyA0NS4zIDE4LjdMMjg4IDQ4MGw5LjQgMEw1MTIgNDgwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC0xMjQuMSAwYzcuNC03LjQgMTQuNy0xNC43IDIyLjEtMjIuMWMtMTUuMS0xNS4xLTMwLjItMzAuMi00NS4zLTQ1LjNMMjk3LjQgNDE2bC05LjQgMC0xMDUuNCAwLTgwLTgwTDIyNy4zIDIxMS4zbC00NS4zLTQ1LjNMNTcuNCAyOTAuN0M0NC45IDMwMy4yIDM4LjYgMzE5LjYgMzguNiAzMzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MDkuOSAzOTMuOUw1MTguNiAyODUuM2MyNS0yNSAyNS02NS41IDAtOTAuNUwzODEuMyA1Ny40Yy0yNS0yNS02NS41LTI1LTkwLjUgMEwxODIuMSAxNjYuMWw0NS4zIDQ1LjNMMzY0LjcgMzQ4LjdsNDUuMyA0NS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M38.6 336c0 16.4 6.2 32.8 18.7 45.3l80 80c12 12 28.3 18.7 45.3 18.7L288 480l9.4 0L512 480c17.7 0 32-14.3 32-32s-14.3-32-32-32l-124.1 0c7.4-7.4 14.7-14.7 22.1-22.1c-15.1-15.1-30.2-30.2-45.3-45.3L297.4 416l-9.4 0-105.4 0-80-80L227.3 211.3l-45.3-45.3L57.4 290.7C44.9 303.2 38.6 319.6 38.6 336z" />
            <path d="M409.9 393.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0L182.1 166.1l45.3 45.3L364.7 348.7l45.3 45.3z" />
    </Icon>
);

export default Eraser;