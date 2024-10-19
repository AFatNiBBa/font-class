
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-heart?s=duotone shield-heart}
 * @preview ![shield-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxMzkuN2MuNSA5OS41IDQxLjMgMjgxIDIxMy42IDM2My41YzE2LjcgOCAzNi4xIDggNTIuOCAwQzQ1NC43IDQyMC43IDQ5NS41IDIzOS4yIDQ5NiAxNDBjMC0yNi40LTE2LjQtNDcuOS0zOC4zLTU3LjJMMjY5LjQgMi45QzI2NS4yIDEgMjYwLjcgMCAyNTYgMHMtOS4yIDEtMTMuNCAyLjlMNTQuMyA4Mi44QzMyLjQgOTIuMSAxNiAxMTMuNiAxNiAxMzkuN3ptMzUyIDgxLjhjMC0uNCAwLS4zIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwNS4zIDE2MGMtMzMuOCAwLTYxLjMgMjcuNC02MS4zIDYxLjNjMCAxNi4yIDYuNSAzMS44IDE3LjkgNDMuM2w4Mi43IDgyLjdjNi4yIDYuMiAxNi40IDYuMiAyMi42IDBsODIuNy04Mi43YzExLjUtMTEuNSAxNy45LTI3LjEgMTcuOS00My4zYzAtMzMuOC0yNy40LTYxLjMtNjEuMy02MS4zYy0xNi4yIDAtMzEuOCA2LjUtNDMuMyAxNy45bC03LjQgNy40LTcuNC03LjRjLTExLjUtMTEuNS0yNy4xLTE3LjktNDMuMy0xNy45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ShieldHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zm352 81.8c0-.4 0-.3 0 0z" />
            <path d="M205.3 160c-33.8 0-61.3 27.4-61.3 61.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default ShieldHeart;