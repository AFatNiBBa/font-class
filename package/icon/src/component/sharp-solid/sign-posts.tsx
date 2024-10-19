
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts?s=sharp-solid sign-posts}
 * @preview ![sign-posts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMGwwIDMyTDAgMzIgMCA0MTZsNTc2IDAgMC0zODQtNjQgMCAwLTMyTDQ0OCAwbDAgMzJMMTI4IDMybDAtMzJMNjQgMHptNjQgNDQ4bC02NCAwIDAgNjQgNjQgMCAwLTY0em0zMjAgMGwwIDY0IDY0IDAgMC02NC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignPosts: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0l0 32L0 32 0 416l576 0 0-384-64 0 0-32L448 0l0 32L128 32l0-32L64 0zm64 448l-64 0 0 64 64 0 0-64zm320 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default SignPosts;