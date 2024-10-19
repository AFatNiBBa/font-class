
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=duotone arrow-turn-down}
 * @preview ![arrow-turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyQzAgNDkuNyAxNC4zIDY0IDMyIDY0bDk2IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzMDYuN2MxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyYzEwLjctMTAuNyAyMS4zLTIxLjMgMzItMzJMMjI0IDk2YzAtNTMtNDMtOTYtOTYtOTZMMzIgMEMxNC4zIDAgMCAxNC4zIDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MS40IDMyOS40Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM2wxMjggMTI4YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDEyOC0xMjhjMTIuNS0xMi41IDEyLjUtMzIuOCAwLTQ1LjNzLTMyLjgtMTIuNS00NS4zIDBMMTkyIDQzNC43IDg2LjYgMzI5LjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32C0 49.7 14.3 64 32 64l96 0c17.7 0 32 14.3 32 32l0 306.7c10.7 10.7 21.3 21.3 32 32c10.7-10.7 21.3-21.3 32-32L224 96c0-53-43-96-96-96L32 0C14.3 0 0 14.3 0 32z" />
            <path d="M41.4 329.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 434.7 86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0z" />
    </Icon>
);

export default ArrowTurnDown;