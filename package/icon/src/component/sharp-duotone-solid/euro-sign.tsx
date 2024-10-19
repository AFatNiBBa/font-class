
import { Icon, generic } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=sharp-duotone-solid euro-sign}
 * @preview ![euro-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3Nmw2MC4zIDBjLTcuMSAyMC4xLTExLjMgNDEuNi0xMi4xIDY0TDAgMjQwbDAtNjR6bTAgOTZsNDguMSAwYy44IDIyLjQgNSA0My45IDEyLjEgNjRMMCAzMzZsMC02NHptMTEyLjItMzJjMS4yLTIzLjEgNy41LTQ0LjggMTcuOS02NEwyODggMTc2bDAgNjQtMTc1LjggMHptMCAzMkwyODggMjcybDAgNjQtMTU3LjkgMGMtMTAuNC0xOS4yLTE2LjctNDAuOS0xNy45LTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDggMjQ4QzQ4IDEyOC43IDE0NC43IDMyIDI2NCAzMmwyNCAwIDMyIDAgMCA2NC0zMiAwLTI0IDBjLTgzLjkgMC0xNTIgNjguMS0xNTIgMTUybDAgMTZjMCA4My45IDY4LjEgMTUyIDE1MiAxNTJsMjQgMCAzMiAwIDAgNjQtMzIgMC0yNCAwQzE0NC43IDQ4MCA0OCAzODMuMyA0OCAyNjRsMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 176l60.3 0c-7.1 20.1-11.3 41.6-12.1 64L0 240l0-64zm0 96l48.1 0c.8 22.4 5 43.9 12.1 64L0 336l0-64zm112.2-32c1.2-23.1 7.5-44.8 17.9-64L288 176l0 64-175.8 0zm0 32L288 272l0 64-157.9 0c-10.4-19.2-16.7-40.9-17.9-64z" />
            <path d="M48 248C48 128.7 144.7 32 264 32l24 0 32 0 0 64-32 0-24 0c-83.9 0-152 68.1-152 152l0 16c0 83.9 68.1 152 152 152l24 0 32 0 0 64-32 0-24 0C144.7 480 48 383.3 48 264l0-16z" />
    </Icon>
);

export default EuroSign;