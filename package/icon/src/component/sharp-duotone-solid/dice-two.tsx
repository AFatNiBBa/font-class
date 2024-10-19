
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-two` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-two?s=sharp-duotone-solid dice-two}
 * @preview ![dice-two](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6TTk2IDE2MGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwek0yODggMzUyYTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMTkyYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHpNMzIwIDM4NGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiceTwo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM96 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM288 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DiceTwo;