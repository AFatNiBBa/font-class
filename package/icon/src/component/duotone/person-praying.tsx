
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=duotone person-praying}
 * @preview ![person-praying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNjRhNjQgNjQgMCAxIDAgMTI4IDBBNjQgNjQgMCAxIDAgMjI0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTg3LjcgMzU0bDExNi4xIDg1LjhjMTMuOSAxMC4zIDE5LjYgMjguMyAxNC4yIDQ0LjdzLTIwLjcgMjcuNS0zOCAyNy41TDcyIDUxMmMtMjIuMSAwLTQwLTE3LjktNDAtNDBzMTcuOS00MCA0MC00MGw4Ni42IDAtNTMuMi0zOS4zYy0zNC45LTI1LjgtNDUuOC03My4zLTI1LjYtMTExLjhsNDguNy05Mi41QzE0Mi45IDE2MS4xIDE3MS4yIDE0NCAyMDIgMTQ0YzI2LjYgMCA1MS42IDEyLjcgNjcuMiAzNC4ybDI2LjIgMzZMMzUwLjcgMTY5YzE3LjEtMTQgNDIuMy0xMS41IDU2LjMgNS42czExLjUgNDIuMy01LjYgNTYuM2wtODggNzJjLTguNSA3LTE5LjUgMTAuMS0zMC40IDguN3MtMjAuOC03LjItMjcuMi0xNi4xTDIzMi43IDI2NGwtNDUgOTB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 64a64 64 0 1 0 128 0A64 64 0 1 0 224 64z" />
            <path d="M187.7 354l116.1 85.8c13.9 10.3 19.6 28.3 14.2 44.7s-20.7 27.5-38 27.5L72 512c-22.1 0-40-17.9-40-40s17.9-40 40-40l86.6 0-53.2-39.3c-34.9-25.8-45.8-73.3-25.6-111.8l48.7-92.5C142.9 161.1 171.2 144 202 144c26.6 0 51.6 12.7 67.2 34.2l26.2 36L350.7 169c17.1-14 42.3-11.5 56.3 5.6s11.5 42.3-5.6 56.3l-88 72c-8.5 7-19.5 10.1-30.4 8.7s-20.8-7.2-27.2-16.1L232.7 264l-45 90z" />
    </Icon>
);

export default PersonPraying;