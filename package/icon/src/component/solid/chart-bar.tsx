
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-bar` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=solid chart-bar}
 * @preview ![chart-bar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDAuNzUgMTYwSDM3MS4yNUMzNzcuNjI1IDE2MCAzODQgMTUzLjYyNSAzODQgMTQ3LjI1VjEwOC43NUMzODQgMTAyLjM3NSAzNzcuNjI1IDk2IDM3MS4yNSA5NkgxNDAuNzVDMTM0LjM3NSA5NiAxMjggMTAyLjM3NSAxMjggMTA4Ljc1VjE0Ny4yNUMxMjggMTUzLjYyNSAxMzQuMzc1IDE2MCAxNDAuNzUgMTYwWk0xNDAuNzUgMjU2SDMwNy4yNUMzMTMuNjI1IDI1NiAzMjAgMjQ5LjYyNSAzMjAgMjQzLjI1VjIwNC43NUMzMjAgMTk4LjM3NSAzMTMuNjI1IDE5MiAzMDcuMjUgMTkySDE0MC43NUMxMzQuMzc1IDE5MiAxMjggMTk4LjM3NSAxMjggMjA0Ljc1VjI0My4yNUMxMjggMjQ5LjYyNSAxMzQuMzc1IDI1NiAxNDAuNzUgMjU2Wk0xNDAuNzUgMzUySDQzNS4yNUM0NDEuNjI1IDM1MiA0NDggMzQ1LjYyNSA0NDggMzM5LjI1VjMwMC43NUM0NDggMjk0LjM3NSA0NDEuNjI1IDI4OCA0MzUuMjUgMjg4SDE0MC43NUMxMzQuMzc1IDI4OCAxMjggMjk0LjM3NSAxMjggMzAwLjc1VjMzOS4yNUMxMjggMzQ1LjYyNSAxMzQuMzc1IDM1MiAxNDAuNzUgMzUyWk00ODAgNDE2SDY0VjY0QzY0IDQ2LjMyNyA0OS42NzMgMzIgMzIgMzJIMzJDMTQuMzI3IDMyIDAgNDYuMzI3IDAgNjRWNDQ4QzAgNDY1LjYgMTQuNCA0ODAgMzIgNDgwSDQ4MEM0OTcuNjczIDQ4MCA1MTIgNDY1LjY3MyA1MTIgNDQ4VjQ0OEM1MTIgNDMwLjMyNyA0OTcuNjczIDQxNiA0ODAgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartBar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M140.75 160H371.25C377.625 160 384 153.625 384 147.25V108.75C384 102.375 377.625 96 371.25 96H140.75C134.375 96 128 102.375 128 108.75V147.25C128 153.625 134.375 160 140.75 160ZM140.75 256H307.25C313.625 256 320 249.625 320 243.25V204.75C320 198.375 313.625 192 307.25 192H140.75C134.375 192 128 198.375 128 204.75V243.25C128 249.625 134.375 256 140.75 256ZM140.75 352H435.25C441.625 352 448 345.625 448 339.25V300.75C448 294.375 441.625 288 435.25 288H140.75C134.375 288 128 294.375 128 300.75V339.25C128 345.625 134.375 352 140.75 352ZM480 416H64V64C64 46.327 49.673 32 32 32H32C14.327 32 0 46.327 0 64V448C0 465.6 14.4 480 32 480H480C497.673 480 512 465.673 512 448V448C512 430.327 497.673 416 480 416Z" />
        </Icon>
    </>
}