
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-duotone-solid sign-post}
 * @preview ![sign-post](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMGwwIDY0IDY0IDAgMC02NEwyMjQgMHptMCAyNTZsMCAyNTYgNjQgMCAwLTI1Ni02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyIDY0bDgwIDk2LTgwIDk2SDMyVjY0SDQzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l0 64 64 0 0-64L224 0zm0 256l0 256 64 0 0-256-64 0z" />
            <path d="M432 64l80 96-80 96H32V64H432z" />
    </Icon>
);

export default SignPost;