
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tick` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=duotone tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5OC4zVjk2YzAtMzUuMyAyOC43LTY0IDY0LTY0czY0IDI4LjcgNjQgNjR2Mi4zYzAgMy44LS4zIDcuNi0xIDExLjRMMTMzLjUgMjU2LjVjLTMuMiAxOC4yLTE5IDMxLjUtMzcuNSAzMS41cy0zNC4zLTEzLjMtMzcuNS0zMS41TDMzIDEwOS42Yy0uNy0zLjgtMS03LjUtMS0xMS40eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M32 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4L133.5 256.5c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L33 109.6c-.7-3.8-1-7.5-1-11.4z" />
    </Icon>
);

export default Tick;