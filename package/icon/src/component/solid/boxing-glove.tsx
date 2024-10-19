
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `boxing-glove` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/boxing-glove?s=solid boxing-glove}
 * @preview ![boxing-glove](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuOTYxIDIyNEM0NzkuOTYxIDE4OC43NSA0NTEuMjExIDE2MCA0MTUuOTY5IDE2MEgzODcuNjk1QzM2Mi4yNzMgMTYwIDMzOC43MDcgMTc4LjE0NSAzMzYuMzEyIDIwMy40NTVDMzMzLjgyNCAyMjkuNjg4IDM1Mi41NjIgMjUyLjA5IDM3Ny4yMTkgMjU1LjVDMzgxLjIxOSAyNTYuMTI1IDM4NC4wOTQgMjU5LjYyNSAzODQuMDk0IDI2My42MjVWMjc5LjYyNUMzODQuMDk0IDI4NC4yNSAzNzkuOTY5IDI4OC4xMjUgMzc1LjIxOSAyODcuNjI1QzMzNS4yMjMgMjgzLjI1IDMwNC4xMDIgMjQ5LjI1IDMwNC4xMDIgMjA4LjEyNUMzMDQuMTAyIDIwMi42MjUgMzA0LjcyNyAxOTcuMjUgMzA1LjcyNyAxOTIuMTI1SDE3My4yMzhDMTQyLjYxNyAxOTIuMTI1IDExMy43NDIgMTgxLjI1IDkwLjg2NyAxNjEuMjVDODcuMzY3IDE1OC4yNSA4Ny4yNDIgMTUyLjg3NSA5MC40OTIgMTQ5LjYyNUwxMDEuNzQyIDEzOC4yNUMxMDQuNzQyIDEzNS4yNSAxMDkuNDkyIDEzNS4yNSAxMTIuNzQyIDEzNy44NzVDMTI5LjYxNyAxNTIuMjUgMTUwLjc0MiAxNjAuMjUgMTczLjIzOCAxNjAuMjVIMzE5Ljk3N1YxNjAuNzVDMzQ4LjM0OCAxMjIuNjI1IDM4Ni44NDQgMTI4LjI1IDQxNS45NjkgMTI4LjI1Vjk2QzQxNS45NjkgNDIuOTggMzcyLjk4NCAwIDMxOS45NjkgMEgxMjcuOTkyQzc1Ljc2MiAwIDMyLjA4NiA0MS43NTQgMzIgOTMuOTgyQzMyIDk0LjY1NCAzMi4wMzkgOTUuMzI4IDMyLjAzOSA5NkgzMlYyODhDMzIgMzE2LjMyIDQ0LjQ5MiAzNDEuNTE0IDY0IDM1OS4wODZWNDY0QzY0IDQ5MC41MSA4NS40OTIgNTEyIDExMiA1MTJIMzM1Ljk2OUMzNjIuNDc3IDUxMiAzODMuOTY5IDQ5MC41MSAzODMuOTY5IDQ2NFYzODRMNDQyLjQ2MSAzMjUuNUM0ODIuNzExIDI4NS4xMjUgNDc5Ljk2MSAyMzcuNzUgNDc5Ljk2MSAyMjRaTTI4MC44NzUgNDE4LjY4OEMyODguMjE5IDQyMy41OTQgMjkwLjIxOSA0MzMuNTE2IDI4NS4zMTMgNDQwLjg3NUMyODIuMjE5IDQ0NS41IDI3Ny4xNTYgNDQ4IDI3MiA0NDhDMjY4LjkzOCA0NDggMjY1Ljg0NCA0NDcuMTI1IDI2My4xMjUgNDQ1LjMxMkwyMjQgNDE5LjIyOUwxODQuODc1IDQ0NS4zMTJDMTgyLjE1NiA0NDcuMTI1IDE3OS4wNjIgNDQ4IDE3NiA0NDhDMTcwLjg0NCA0NDggMTY1Ljc4MSA0NDUuNSAxNjIuNjg4IDQ0MC44NzVDMTU3Ljc4MSA0MzMuNTE2IDE1OS43ODEgNDIzLjU5NCAxNjcuMTI1IDQxOC42ODhMMTk1LjE1NiA0MDBMMTY3LjEyNSAzODEuMzEyQzE1OS43ODEgMzc2LjQwNiAxNTcuNzgxIDM2Ni40ODQgMTYyLjY4NyAzNTkuMTI1QzE2Ny42MjUgMzUxLjc1IDE3Ny41OTQgMzQ5LjgyOCAxODQuODc1IDM1NC42ODdMMjI0IDM4MC43NzFMMjYzLjEyNSAzNTQuNjg4QzI3MC40MDYgMzQ5LjgxMiAyODAuMzc1IDM1MS43NSAyODUuMzEyIDM1OS4xMjVDMjkwLjIxOSAzNjYuNDg0IDI4OC4yMTkgMzc2LjQwNiAyODAuODc1IDM4MS4zMTNMMjUyLjg0NCA0MDBMMjgwLjg3NSA0MTguNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoxingGlove(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M479.961 224C479.961 188.75 451.211 160 415.969 160H387.695C362.273 160 338.707 178.145 336.312 203.455C333.824 229.688 352.562 252.09 377.219 255.5C381.219 256.125 384.094 259.625 384.094 263.625V279.625C384.094 284.25 379.969 288.125 375.219 287.625C335.223 283.25 304.102 249.25 304.102 208.125C304.102 202.625 304.727 197.25 305.727 192.125H173.238C142.617 192.125 113.742 181.25 90.867 161.25C87.367 158.25 87.242 152.875 90.492 149.625L101.742 138.25C104.742 135.25 109.492 135.25 112.742 137.875C129.617 152.25 150.742 160.25 173.238 160.25H319.977V160.75C348.348 122.625 386.844 128.25 415.969 128.25V96C415.969 42.98 372.984 0 319.969 0H127.992C75.762 0 32.086 41.754 32 93.982C32 94.654 32.039 95.328 32.039 96H32V288C32 316.32 44.492 341.514 64 359.086V464C64 490.51 85.492 512 112 512H335.969C362.477 512 383.969 490.51 383.969 464V384L442.461 325.5C482.711 285.125 479.961 237.75 479.961 224ZM280.875 418.688C288.219 423.594 290.219 433.516 285.313 440.875C282.219 445.5 277.156 448 272 448C268.938 448 265.844 447.125 263.125 445.312L224 419.229L184.875 445.312C182.156 447.125 179.062 448 176 448C170.844 448 165.781 445.5 162.688 440.875C157.781 433.516 159.781 423.594 167.125 418.688L195.156 400L167.125 381.312C159.781 376.406 157.781 366.484 162.687 359.125C167.625 351.75 177.594 349.828 184.875 354.687L224 380.771L263.125 354.688C270.406 349.812 280.375 351.75 285.312 359.125C290.219 366.484 288.219 376.406 280.875 381.313L252.844 400L280.875 418.688Z" />
        </Icon>
    </>
}