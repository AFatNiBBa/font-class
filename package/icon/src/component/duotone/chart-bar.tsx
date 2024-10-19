
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=duotone chart-bar}
 * @preview ![chart-bar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCA0MTZINjRWNjRDNjQgNDYuMzI3IDQ5LjY3MyAzMiAzMiAzMkgzMkMxNC4zMjcgMzIgMCA0Ni4zMjcgMCA2NFY0NDhDMCA0NjUuNiAxNC40IDQ4MCAzMiA0ODBINDgwQzQ5Ny42NzMgNDgwIDUxMiA0NjUuNjczIDUxMiA0NDhWNDQ4QzUxMiA0MzAuMzI3IDQ5Ny42NzMgNDE2IDQ4MCA0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE0MC43NSAxNjBIMzcxLjI1QzM3Ny42MjUgMTYwIDM4NCAxNTMuNjI1IDM4NCAxNDcuMjVWMTA4Ljc1QzM4NCAxMDIuMzc1IDM3Ny42MjUgOTYgMzcxLjI1IDk2SDE0MC43NUMxMzQuMzc1IDk2IDEyOCAxMDIuMzc1IDEyOCAxMDguNzVWMTQ3LjI1QzEyOCAxNTMuNjI1IDEzNC4zNzUgMTYwIDE0MC43NSAxNjBaTTE0MC43NSAyNTZIMzA3LjI1QzMxMy42MjUgMjU2IDMyMCAyNDkuNjI1IDMyMCAyNDMuMjVWMjA0Ljc1QzMyMCAxOTguMzc1IDMxMy42MjUgMTkyIDMwNy4yNSAxOTJIMTQwLjc1QzEzNC4zNzUgMTkyIDEyOCAxOTguMzc1IDEyOCAyMDQuNzVWMjQzLjI1QzEyOCAyNDkuNjI1IDEzNC4zNzUgMjU2IDE0MC43NSAyNTZaTTE0MC43NSAzNTJINDM1LjI1QzQ0MS42MjUgMzUyIDQ0OCAzNDUuNjI1IDQ0OCAzMzkuMjVWMzAwLjc1QzQ0OCAyOTQuMzc1IDQ0MS42MjUgMjg4IDQzNS4yNSAyODhIMTQwLjc1QzEzNC4zNzUgMjg4IDEyOCAyOTQuMzc1IDEyOCAzMDAuNzVWMzM5LjI1QzEyOCAzNDUuNjI1IDEzNC4zNzUgMzUyIDE0MC43NSAzNTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartBar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M480 416H64V64C64 46.327 49.673 32 32 32H32C14.327 32 0 46.327 0 64V448C0 465.6 14.4 480 32 480H480C497.673 480 512 465.673 512 448V448C512 430.327 497.673 416 480 416Z" />
            <path d="M140.75 160H371.25C377.625 160 384 153.625 384 147.25V108.75C384 102.375 377.625 96 371.25 96H140.75C134.375 96 128 102.375 128 108.75V147.25C128 153.625 134.375 160 140.75 160ZM140.75 256H307.25C313.625 256 320 249.625 320 243.25V204.75C320 198.375 313.625 192 307.25 192H140.75C134.375 192 128 198.375 128 204.75V243.25C128 249.625 134.375 256 140.75 256ZM140.75 352H435.25C441.625 352 448 345.625 448 339.25V300.75C448 294.375 441.625 288 435.25 288H140.75C134.375 288 128 294.375 128 300.75V339.25C128 345.625 134.375 352 140.75 352Z" />
        </Icon>
    </>
}