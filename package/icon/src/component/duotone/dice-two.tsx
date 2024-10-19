
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-two` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-two?s=duotone dice-two}
 * @preview ![dice-two](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDMyMCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzIwYzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA5NnptOTYgNjRhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHpNMjg4IDM1MmEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE5MmEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6TTMyMCAzODRhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DiceTwo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM288 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DiceTwo;