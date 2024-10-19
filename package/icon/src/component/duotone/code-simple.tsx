
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-simple?s=duotone code-simple}
 * @preview ![code-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgOTZjMCA4LjIgMy4xIDE2LjQgOS40IDIyLjZMNDk4LjcgMjU2IDM2MS40IDM5My40Yy02LjIgNi4yLTkuNCAxNC40LTkuNCAyMi42czMuMSAxNi40IDkuNCAyMi42czE0LjQgOS40IDIyLjYgOS40czE2LjQtMy4xIDIyLjYtOS40bDE2MC0xNjBjNi4yLTYuMiA5LjQtMTQuNCA5LjQtMjIuNnMtMy4xLTE2LjQtOS40LTIyLjZsLTE2MC0xNjBDNDAwLjQgNjcuMSAzOTIuMiA2NCAzODQgNjRzLTE2LjQgMy4xLTIyLjYgOS40UzM1MiA4Ny44IDM1MiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIxNC42IDczLjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNMNzcuMyAyNTYgMjE0LjYgMzkzLjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNzLTMyLjggMTIuNS00NS4zIDBsLTE2MC0xNjBjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zbDE2MC0xNjBjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CodeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M352 96c0 8.2 3.1 16.4 9.4 22.6L498.7 256 361.4 393.4c-6.2 6.2-9.4 14.4-9.4 22.6s3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l160-160c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-160-160C400.4 67.1 392.2 64 384 64s-16.4 3.1-22.6 9.4S352 87.8 352 96z" />
            <path d="M214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L77.3 256 214.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default CodeSimple;