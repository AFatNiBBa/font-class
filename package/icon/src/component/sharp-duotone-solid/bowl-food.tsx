
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-food` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-food?s=sharp-duotone-solid bowl-food}
 * @preview ![bowl-food](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDExLjcgMy4xIDIyLjYgOC42IDMybDQ5NC45IDBjNS40LTkuNCA4LjYtMjAuMyA4LjYtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjRjLS41IDAtMS4xIDAtMS42IDBDNDM5IDkxLjUgNDA2LjcgNjQgMzY4IDY0Yy0xNSAwLTI5IDQuMS00MC45IDExLjJDMzEzLjggNDkuNiAyODYuOSAzMiAyNTYgMzJzLTU3LjggMTcuNi03MS4xIDQzLjJDMTczIDY4LjEgMTU5IDY0IDE0NCA2NGMtMzguNyAwLTcxIDI3LjUtNzguNCA2NGMtLjUgMC0xLjEgMC0xLjYgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMjU2TDAgMjU2bDAgMjRjMCA2NyAzOS4yIDEyNC45IDk2IDE1MS44TDk2IDQ4MGwzMjAgMCAwLTQ4LjJjNTYuOC0yNyA5Ni04NC44IDk2LTE1MS44bDAtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BowlFood: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0 11.7 3.1 22.6 8.6 32l494.9 0c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64c-.5 0-1.1 0-1.6 0C439 91.5 406.7 64 368 64c-15 0-29 4.1-40.9 11.2C313.8 49.6 286.9 32 256 32s-57.8 17.6-71.1 43.2C173 68.1 159 64 144 64c-38.7 0-71 27.5-78.4 64c-.5 0-1.1 0-1.6 0c-35.3 0-64 28.7-64 64z" />
            <path d="M512 256L0 256l0 24c0 67 39.2 124.9 96 151.8L96 480l320 0 0-48.2c56.8-27 96-84.8 96-151.8l0-24z" />
    </Icon>
);

export default BowlFood;