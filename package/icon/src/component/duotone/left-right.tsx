
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=duotone left-right}
 * @preview ![left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjA4YzAgMzIgMCA2NCAwIDk2bDk2IDAgMCA1NmMwIDkuNSA1LjcgMTguMiAxNC40IDIyYzMuMSAxLjMgNi4zIDIgOS42IDJjNS45IDAgMTEuOC0yLjIgMTYuMy02LjRsMTEyLTEwNGM0LjktNC41IDcuNy0xMC45IDcuNy0xNy42cy0yLjgtMTMtNy43LTE3LjZsLTExMi0xMDRjLTctNi41LTE3LjItOC4yLTI1LjktNC40cy0xNC40IDEyLjUtMTQuNCAyMmwwIDU2LTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI1NmMwLTYuNyAyLjgtMTMgNy43LTE3LjZsMTEyLTEwNGM3LTYuNSAxNy4yLTguMiAyNS45LTQuNHMxNC40IDEyLjUgMTQuNCAyMmwwIDU2IDk2IDAgMCA5Ni05NiAwIDAgNTZjMCA5LjUtNS43IDE4LjItMTQuNCAyMnMtMTguOSAyLjEtMjUuOS00LjRsLTExMi0xMDRDMi44IDI2OSAwIDI2Mi43IDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 208c0 32 0 64 0 96l96 0 0 56c0 9.5 5.7 18.2 14.4 22c3.1 1.3 6.3 2 9.6 2c5.9 0 11.8-2.2 16.3-6.4l112-104c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 56-96 0z" />
            <path d="M0 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 56 96 0 0 96-96 0 0 56c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104C2.8 269 0 262.7 0 256z" />
    </Icon>
);

export default LeftRight;