
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=sharp-duotone-solid alt}
 * @preview ![alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgMzg0bDMyIDAgMTYwIDAgMzIgMCAwIDY0LTMyIDAtMTYwIDAtMzIgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDMyLjYgNjRMNDQ4IDY0bDE2MCAwIDMyIDAgMCA2NC0zMiAwLTE0NC42IDBMMjE3IDQzNmwtOS42IDEyTDE5MiA0NDggMzIgNDQ4IDAgNDQ4bDAtNjQgMzIgMCAxNDQuNiAwTDQyMyA3Nmw5LjYtMTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 384l32 0 160 0 32 0 0 64-32 0-160 0-32 0 0-64z" />
            <path d="M432.6 64L448 64l160 0 32 0 0 64-32 0-144.6 0L217 436l-9.6 12L192 448 32 448 0 448l0-64 32 0 144.6 0L423 76l9.6-12z" />
    </Icon>
);

export default Alt;