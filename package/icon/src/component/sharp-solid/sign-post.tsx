
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-solid sign-post}
 * @preview ![sign-post](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBsNjQgMCAwIDY0IDE0NCAwIDgwIDk2LTgwIDk2TDMyIDI1NiAzMiA2NGwxOTIgMCAwLTY0em02NCAyODhsMCAyMjQtNjQgMCAwLTIyNCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l64 0 0 64 144 0 80 96-80 96L32 256 32 64l192 0 0-64zm64 288l0 224-64 0 0-224 64 0z" />
    </Icon>
);

export default SignPost;