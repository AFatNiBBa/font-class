
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=duotone trash-can}
 * @preview ![trash-can](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwwIDM1MmMwIDM1LjMgMjguNyA2NCA2NCA2NGwyNTYgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTM1MkwzMiA5NnptODAgODBjMC04LjggNy4yLTE2IDE2LTE2czE2IDcuMiAxNiAxNmwwIDIyNGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTIyNHptOTYgMGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgMjI0YzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtMjI0em05NiAwYzAtOC44IDcuMi0xNiAxNi0xNnMxNiA3LjIgMTYgMTZsMCAyMjRjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC0yMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjMuOCAwYy0xMi4xIDAtMjMuMiA2LjgtMjguNiAxNy43TDEyOCAzMiAzMiAzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZsMzg0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTk2IDAtNy4yLTE0LjNDMzA3LjQgNi44IDI5Ni4zIDAgMjg0LjIgMEwxNjMuOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 352c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352L32 96zm80 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm96 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm96 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224z" />
            <path d="M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0z" />
    </Icon>
);

export default TrashCan;