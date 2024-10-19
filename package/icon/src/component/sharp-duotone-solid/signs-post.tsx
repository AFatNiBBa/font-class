
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=sharp-duotone-solid signs-post}
 * @preview ![signs-post](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMGw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDE5Mmw2NCAwIDAgMzItNjQgMCAwLTMyem0wIDE2MGw2NCAwIDAgMTYwLTY0IDAgMC0xNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggNjRMMzIgNjRsMCAxMjggNDE2IDAgNjQtNjRMNDQ4IDY0ek02NCAyMjRMMCAyODhsNjQgNjQgNDE2IDAgMC0xMjhMNjQgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l64 0 0 64-64 0 0-64zm0 192l64 0 0 32-64 0 0-32zm0 160l64 0 0 160-64 0 0-160z" />
            <path d="M448 64L32 64l0 128 416 0 64-64L448 64zM64 224L0 288l64 64 416 0 0-128L64 224z" />
    </Icon>
);

export default SignsPost;