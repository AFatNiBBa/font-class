
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=duotone clock-eleven}
 * @preview ![clock-eleven](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2OC05NmMwLTcuOCAzLjgtMTUuNCAxMC43LTIwYzExLTcuNCAyNS45LTQuNCAzMy4zIDYuN2wyMCAzMCAwLTU2LjdjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDEzNmMwIDEwLjYtNi45IDE5LjktMTcgMjNzLTIxLjEtLjktMjYuOS05LjdsLTY0LTk2Yy0yLjctNC4xLTQtOC43LTQtMTMuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA5NmMtMTMuMyAwLTI0IDEwLjctMjQgMjRsMCA1Ni43LTIwLTMwYy03LjQtMTEtMjIuMy0xNC0zMy4zLTYuN3MtMTQgMjIuMy02LjcgMzMuM2w2NCA5NmM1LjkgOC44IDE2LjggMTIuNyAyNi45IDkuN3MxNy0xMi40IDE3LTIzbDAtMTM2YzAtMTMuMy0xMC43LTI0LTI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm168-96c0-7.8 3.8-15.4 10.7-20c11-7.4 25.9-4.4 33.3 6.7l20 30 0-56.7c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 10.6-6.9 19.9-17 23s-21.1-.9-26.9-9.7l-64-96c-2.7-4.1-4-8.7-4-13.3z" />
            <path d="M256 96c-13.3 0-24 10.7-24 24l0 56.7-20-30c-7.4-11-22.3-14-33.3-6.7s-14 22.3-6.7 33.3l64 96c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23l0-136c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default ClockEleven;