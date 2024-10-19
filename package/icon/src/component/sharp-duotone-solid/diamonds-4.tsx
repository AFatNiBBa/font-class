
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamonds-4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamonds-4?s=sharp-duotone-solid diamonds-4}
 * @preview ![diamonds-4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMzkuMyAxMTYuN0wyNTYgMCAzNzIuNyAxMTYuNyAyNTYgMjMzLjQgMTM5LjMgMTE2Ljd6bTAgMjc4LjZMMjU2IDI3OC42IDM3Mi43IDM5NS4zIDI1NiA1MTIgMTM5LjMgMzk1LjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTYuNyAxMzkuM0wwIDI1NiAxMTYuNyAzNzIuNyAyMzMuNCAyNTYgMTE2LjcgMTM5LjN6bTI3OC42IDBMMjc4LjYgMjU2IDM5NS4zIDM3Mi43IDUxMiAyNTYgMzk1LjMgMTM5LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const Diamonds_4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M139.3 116.7L256 0 372.7 116.7 256 233.4 139.3 116.7zm0 278.6L256 278.6 372.7 395.3 256 512 139.3 395.3z" />
            <path d="M116.7 139.3L0 256 116.7 372.7 233.4 256 116.7 139.3zm278.6 0L278.6 256 395.3 372.7 512 256 395.3 139.3z" />
    </Icon>
);

export default Diamonds_4;