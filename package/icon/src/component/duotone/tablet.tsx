
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=duotone tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtNjRMMCAzODR6bTE2MCA2NGMwLTguOCA3LjItMTYgMTYtMTZsOTYgMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmwtOTYgMGMtOC44IDAtMTYtNy4yLTE2LTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBIMzg0YzM1LjMgMCA2NCAyOC43IDY0IDY0VjM4NEgwVjY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tablet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64L0 384zm160 64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
            <path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V384H0V64z" />
    </Icon>
);

export default Tablet;