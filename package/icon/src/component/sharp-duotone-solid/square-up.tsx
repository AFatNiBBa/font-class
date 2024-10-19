
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up?s=sharp-duotone-solid square-up}
 * @preview ![square-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDIyNEwyMjQgOTYgMzUyIDIyNGwwIDMyLTgwIDBjMCA0Mi43IDAgODUuMyAwIDEyOGwtOTYgMCAwLTEyOC04MCAwIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNzIgMjU2bDgwIDAgMC0zMkwyMjQgOTYgOTYgMjI0bDAgMzIgODAgMCAwIDEyOCA5NiAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 224L224 96 352 224l0 32-80 0c0 42.7 0 85.3 0 128l-96 0 0-128-80 0 0-32z" />
            <path d="M272 256l80 0 0-32L224 96 96 224l0 32 80 0 0 128 96 0 0-128z" />
    </Icon>
);

export default SquareUp;