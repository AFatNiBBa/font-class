
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-seven` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven?s=duotone clock-seven}
 * @preview ![clock-seven](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE3MiA4Mi43bDYwLTkwTDIzMiAxMjBjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDEzNmMwIDQuNy0xLjQgOS40LTQgMTMuM2wtNjQgOTZjLTQuNiA2LjktMTIuMiAxMC43LTIwIDEwLjdjLTQuNiAwLTkuMi0xLjMtMTMuMy00Yy0xMS03LjQtMTQtMjIuMy02LjctMzMuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA5NmMtMTMuMyAwLTI0IDEwLjctMjQgMjRsMCAxMjguNy02MCA5MGMtNy40IDExLTQuNCAyNS45IDYuNyAzMy4zczI1LjkgNC40IDMzLjMtNi43bDY0LTk2YzIuNi0zLjkgNC04LjYgNC0xMy4zbDAtMTM2YzAtMTMuMy0xMC43LTI0LTI0LTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ClockSeven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm172 82.7l60-90L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 4.7-1.4 9.4-4 13.3l-64 96c-4.6 6.9-12.2 10.7-20 10.7c-4.6 0-9.2-1.3-13.3-4c-11-7.4-14-22.3-6.7-33.3z" />
            <path d="M256 96c-13.3 0-24 10.7-24 24l0 128.7-60 90c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l64-96c2.6-3.9 4-8.6 4-13.3l0-136c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default ClockSeven;