
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-scoop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoop?s=sharp-duotone-solid bowl-scoop}
 * @preview ![bowl-scoop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyMjRjMCAxMC45IC45IDIxLjYgMi43IDMybDM3OC43IDBjMS43LTEwLjQgMi43LTIxLjEgMi43LTMyYzAtMTA2LTg2LTE5Mi0xOTItMTkyUzMyIDExOCAzMiAyMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMjU2TDAgMjU2bDQuNSA0NC43QzExIDM2Ni4yIDY2LjEgNDE2IDEzMS44IDQxNmw2MC4yIDAtODAgNzIgMCAyNCAyMjQgMCAwLTI0LTgwLTcyIDYwLjIgMGM2NS44IDAgMTIwLjgtNDkuOCAxMjcuNC0xMTUuM0w0NDggMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BowlScoop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 224c0 10.9 .9 21.6 2.7 32l378.7 0c1.7-10.4 2.7-21.1 2.7-32c0-106-86-192-192-192S32 118 32 224z" />
            <path d="M448 256L0 256l4.5 44.7C11 366.2 66.1 416 131.8 416l60.2 0-80 72 0 24 224 0 0-24-80-72 60.2 0c65.8 0 120.8-49.8 127.4-115.3L448 256z" />
    </Icon>
);

export default BowlScoop;