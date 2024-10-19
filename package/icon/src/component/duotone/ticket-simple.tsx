
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=duotone ticket-simple}
 * @preview ![ticket-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEMwIDkyLjcgMjguNyA2NCA2NCA2NGw0NDggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDY0YzAgOC44LTcuNCAxNS43LTE1LjcgMTguNkM1NDEuNSAyMTcuMSA1MjggMjM1IDUyOCAyNTZzMTMuNSAzOC45IDMyLjMgNDUuNGM4LjMgMi45IDE1LjcgOS44IDE1LjcgMTguNmwwIDY0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ0OGMtMzUuMyAwLTY0LTI4LjctNjQtNjRsMC02NGMwLTguOCA3LjQtMTUuNyAxNS43LTE4LjZDMzQuNSAyOTQuOSA0OCAyNzcgNDggMjU2cy0xMy41LTM4LjktMzIuMy00NS40QzcuNCAyMDcuNyAwIDIwMC44IDAgMTkybDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 64c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192l0-64z" />
    </Icon>
);

export default TicketSimple;