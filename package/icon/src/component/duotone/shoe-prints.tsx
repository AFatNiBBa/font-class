
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=duotone shoe-prints}
 * @preview ![shoe-prints](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMiAwIDAtMTI4LTMyIDBjLTM1LjMgMC02NCAyOC43LTY0IDY0em0xMjgtNjRsMCAxMjhzOTYuMyAzMiAxNjAgMzJjOTYgMCAyMjQtNDggMjI0LTEyOHMtMTE5LjYtOTYtMTc2LTk2Yy00OCAwLTc2IDE2LTEwNCAzMnMtNTYgMzItMTA0IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDMyczk2LjMtMzIgMTYwLTMyYzk2IDAgMjI0IDQ4IDIyNCAxMjhzLTExOS42IDk2LTE3NiA5NmMtNDggMC03Ni0xNi0xMDQtMzJzLTU2LTMyLTEwNC0zMmwwLTEyOHptLTY0IDBsMzIgMCAwIDEyOC0zMiAwYy0zNS4zIDAtNjQtMjguNy02NC02NHMyOC43LTY0IDY0LTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64zm128-64l0 128s96.3 32 160 32c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32z" />
            <path d="M256 32s96.3-32 160-32c96 0 224 48 224 128s-119.6 96-176 96c-48 0-76-16-104-32s-56-32-104-32l0-128zm-64 0l32 0 0 128-32 0c-35.3 0-64-28.7-64-64s28.7-64 64-64z" />
    </Icon>
);

export default ShoePrints;