
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=duotone display}
 * @preview ![display](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMzUyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDE3NiAwIDk2IDAgMTc2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yODhjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMEMyOC43IDAgMCAyOC43IDAgNjR6bTY0IDBsNDQ4IDAgMCAyODhMNjQgMzUyIDY0IDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDY0TDY0IDY0bDAgMjg4IDQ0OCAwIDAtMjg4ek00MTYgNDQ4bC02OS4zIDBMMzM2IDQxNmwtOTYgMC0xMC43IDMyTDE2MCA0NDhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMjU2IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 352c0 35.3 28.7 64 64 64l176 0 96 0 176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm64 0l448 0 0 288L64 352 64 64z" />
            <path d="M512 64L64 64l0 288 448 0 0-288zM416 448l-69.3 0L336 416l-96 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
    </Icon>
);

export default Display;