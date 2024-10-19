
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-duotone-solid sign-posts}
 * @preview ![sign-posts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDY0IDAgMCAzMkw2NCAzMiA2NCAwem0wIDQxNmw2NCAwIDAgOTYtNjQgMCAwLTk2ek00NDggMGw2NCAwIDAgMzJjLTIxLjMgMC00Mi43IDAtNjQgMGwwLTMyem0wIDQxNmMyMS4zIDAgNDIuNyAwIDY0IDBsMCA5Ni02NCAwIDAtOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMySDU3NlY0MTZIMFYzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 0l64 0 0 32L64 32 64 0zm0 416l64 0 0 96-64 0 0-96zM448 0l64 0 0 32c-21.3 0-42.7 0-64 0l0-32zm0 416c21.3 0 42.7 0 64 0l0 96-64 0 0-96z" />
            <path d="M0 32H576V416H0V32z" />
    </Icon>
);

export default SignPosts;