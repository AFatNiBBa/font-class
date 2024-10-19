
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-heart?s=sharp-duotone-solid folder-heart}
 * @preview ![folder-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNMTQ0IDI1MS4yYzAtMzIuNyAyNi41LTU5LjIgNTkuMi01OS4ybDIuNCAwYzE1LjkgMCAzMS4yIDYuMiA0Mi43IDE3LjJsNy43IDcuNCA3LjctNy40YzExLjUtMTEgMjYuOC0xNy4yIDQyLjctMTcuMmwyLjQgMGMzMi43IDAgNTkuMiAyNi41IDU5LjIgNTkuMmMwIDE2LjEtNi42IDMxLjUtMTguMiA0Mi43bC04Mi44IDc5LjZMMjU2IDM4NC4xbC0xMS4xLTEwLjctODIuOC03OS42Yy0xMS42LTExLjItMTguMi0yNi42LTE4LjItNDIuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwMy4yIDE5MmMtMzIuNyAwLTU5LjIgMjYuNS01OS4yIDU5LjJjMCAxNi4xIDYuNiAzMS41IDE4LjIgNDIuN2w4Mi44IDc5LjZMMjU2IDM4NC4xbDExLjEtMTAuNyA4Mi44LTc5LjZjMTEuNi0xMS4yIDE4LjItMjYuNiAxOC4yLTQyLjdjMC0zMi43LTI2LjUtNTkuMi01OS4yLTU5LjJsLTIuNCAwYy0xNS45IDAtMzEuMiA2LjItNDIuNyAxNy4ybC03LjcgNy40LTcuNy03LjRjLTExLjUtMTEtMjYuOC0xNy4yLTQyLjctMTcuMmwtMi40IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM144 251.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L256 384.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7z" />
            <path d="M203.2 192c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L256 384.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0z" />
    </Icon>
);

export default FolderHeart;