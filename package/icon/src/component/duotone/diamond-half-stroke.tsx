
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=duotone diamond-half-stroke}
 * @preview ![diamond-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGwwIDc4LjVMNDMzLjUgMjU2IDI1NiA0MzMuNWwwIDc4LjVjMTAuMiAwIDIwLjUtMy45IDI4LjMtMTEuN2wyMTYtMjE2YzcuOC03LjggMTEuNy0xOCAxMS43LTI4LjNzLTMuOS0yMC41LTExLjctMjguM2wtMjE2LTIxNkMyNzYuNSAzLjkgMjY2LjIgMCAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwYy0xMC4yIDAtMjAuNSAzLjktMjguMyAxMS43bC0yMTYgMjE2Yy0xNS42IDE1LjYtMTUuNiA0MC45IDAgNTYuNmwyMTYgMjE2YzcuOCA3LjggMTggMTEuNyAyOC4zIDExLjdMMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 78.5L433.5 256 256 433.5l0 78.5c10.2 0 20.5-3.9 28.3-11.7l216-216c7.8-7.8 11.7-18 11.7-28.3s-3.9-20.5-11.7-28.3l-216-216C276.5 3.9 266.2 0 256 0z" />
            <path d="M256 0c-10.2 0-20.5 3.9-28.3 11.7l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c7.8 7.8 18 11.7 28.3 11.7L256 0z" />
    </Icon>
);

export default DiamondHalfStroke;