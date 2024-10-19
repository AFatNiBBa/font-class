
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally-2?s=sharp-duotone-solid tally-2}
 * @preview ![tally-2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDMyIDAgMzg0IDAgMzIgNjQgMCAwLTMyIDAtMzg0IDAtMzJMOTYgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzJsMCAzMiAwIDM4NCAwIDMyLTY0IDAgMC0zMiAwLTM4NCAwLTMyIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tally_2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 32 0 384 0 32 64 0 0-32 0-384 0-32L96 32z" />
            <path d="M288 32l0 32 0 384 0 32-64 0 0-32 0-384 0-32 64 0z" />
    </Icon>
);

export default Tally_2;