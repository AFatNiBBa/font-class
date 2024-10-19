
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=duotone bed}
 * @preview ![bed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjA4QTgwIDgwIDAgMSAxIDk2IDIwOGE4MCA4MCAwIDEgMSAxNjAgMHptMzItNDhjMC0xNy43IDE0LjMtMzIgMzItMzJsMjI0IDBjNTMgMCA5NiA0MyA5NiA5NmwwIDY0IDAgMzItMzIgMC0yODggMC0zMiAwIDAtMzIgMC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzMmMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDI1NiA1NDQgMCAzMiAwIDAgMzIgMCA5NmMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTMyTDY0IDQxNmwwIDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyTDAgNjRDMCA0Ni4zIDE0LjMgMzIgMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 208A80 80 0 1 1 96 208a80 80 0 1 1 160 0zm32-48c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 64 0 32-32 0-288 0-32 0 0-32 0-128z" />
            <path d="M32 32c17.7 0 32 14.3 32 32l0 256 544 0 32 0 0 32 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default Bed;