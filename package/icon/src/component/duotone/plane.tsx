
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane?s=duotone plane}
 * @preview ![plane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjUuMiAxNmMwIDEuNSAuMiAyLjkgLjYgNC40bDQ5IDE3MS42IDE1MC45IDBMMjY1LjIgMTYuMUMyNTkuNSA2LjIgMjQ4LjkgMCAyMzcuNCAwTDE4MS4yIDBjLTkuMSAwLTE2IDcuNC0xNiAxNnptMCA0ODAuMWMwIDguNSA2LjkgMTYgMTYgMTZsNTYuMiAwYzExLjUgMCAyMi4xLTYuMiAyNy44LTE2LjFMMzY1LjcgMzIwbC0xNTAuOSAwLTQ5IDE3MS42Yy0uNCAxLjUtLjYgMy0uNiA0LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00ODIuMyAxOTJjMzQuMiAwIDkzLjcgMjkgOTMuNyA2NGMwIDM2LTU5LjUgNjQtOTMuNyA2NEwxMTIgMzIwIDY4LjggMzc3LjZjLTMgNC03LjggNi40LTEyLjggNi40bC00MiAwYy03LjggMC0xNC02LjMtMTQtMTRjMC0xLjMgLjItMi42IC41LTMuOUwzMiAyNTYgLjUgMTQ1LjljLS40LTEuMy0uNS0yLjYtLjUtMy45YzAtNy44IDYuMy0xNCAxNC0xNGw0MiAwYzUgMCA5LjggMi40IDEyLjggNi40TDExMiAxOTJsMzcwLjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Plane: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M165.2 16c0 1.5 .2 2.9 .6 4.4l49 171.6 150.9 0L265.2 16.1C259.5 6.2 248.9 0 237.4 0L181.2 0c-9.1 0-16 7.4-16 16zm0 480.1c0 8.5 6.9 16 16 16l56.2 0c11.5 0 22.1-6.2 27.8-16.1L365.7 320l-150.9 0-49 171.6c-.4 1.5-.6 3-.6 4.4z" />
            <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l370.3 0z" />
    </Icon>
);

export default Plane;