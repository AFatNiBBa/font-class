
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=sharp-duotone-solid arrows-cross}
 * @preview ![arrows-cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjcgODBMNDggMzQuNyA3MC42IDU3LjQgMjI0IDIxMC43Yy0xNS4xIDE1LjEtMzAuMiAzMC4yLTQ1LjMgNDUuM0wyNS40IDEwMi42IDIuNyA4MHpNMjI0IDMwMS4zTDI2OS4zIDI1NiAzODQgMzcwLjdsMC01MC43IDAtMzIgNjQgMCAwIDMyIDAgMTI4IDAgMzItMzIgMC0xMjggMC0zMiAwIDAtNjQgMzIgMCA1MC43IDBMMjI0IDMwMS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDMybDMyIDAgMTI4IDAgMzIgMCAwIDMyIDAgMTI4IDAgMzItNjQgMCAwLTMyIDAtNTAuN0w3MC42IDQ1NC42IDQ4IDQ3Ny4zIDIuNyA0MzJsMjIuNi0yMi42TDMzOC43IDk2IDI4OCA5NmwtMzIgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.7 80L48 34.7 70.6 57.4 224 210.7c-15.1 15.1-30.2 30.2-45.3 45.3L25.4 102.6 2.7 80zM224 301.3L269.3 256 384 370.7l0-50.7 0-32 64 0 0 32 0 128 0 32-32 0-128 0-32 0 0-64 32 0 50.7 0L224 301.3z" />
            <path d="M256 32l32 0 128 0 32 0 0 32 0 128 0 32-64 0 0-32 0-50.7L70.6 454.6 48 477.3 2.7 432l22.6-22.6L338.7 96 288 96l-32 0 0-64z" />
    </Icon>
);

export default ArrowsCross;