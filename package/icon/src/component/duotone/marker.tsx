
import { Icon, generic } from "../../index";

/**
 * A component that renders the `marker` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=duotone marker}
 * @preview ![marker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OGMwIDYuMyAyLjUgMTIuNCA3IDE3czEwLjcgNyAxNyA3YzEuNiAwIDMuMS0uMiA0LjctLjVsMjUtNWM2Ni42LTEzLjMgMTI3LjgtNDYuMSAxNzUuOC05NC4xTDMwNSAzMzdDMjYxLjcgMjkzLjcgMjE4LjQgMjUwLjQgMTc1IDIwN0w5OS41IDI4Mi41Yy00OCA0OC04MC44IDEwOS4yLTk0LjEgMTc1LjhsLTUgMjVjLS4zIDEuNi0uNSAzLjEtLjUgNC43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDgxIDMxQzQ0NS4xLTQuOCAzODYuOS00LjggMzUxIDMxbC0xNSAxNUwzMjIuOSAzM0MyOTQuOCA0LjkgMjQ5LjIgNC45IDIyMS4xIDMzTDEzNSAxMTljLTkuNCA5LjQtOS40IDI0LjYgMCAzMy45czI0LjYgOS40IDMzLjkgMEwyNTUgNjYuOWM5LjQtOS40IDI0LjYtOS40IDMzLjkgMEwzMDIuMSA4MCAxNzUgMjA3IDMwNSAzMzcgNDgxIDE2MWMzNS45LTM1LjkgMzUuOS05NC4xIDAtMTI5Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 6.3 2.5 12.4 7 17s10.7 7 17 7c1.6 0 3.1-.2 4.7-.5l25-5c66.6-13.3 127.8-46.1 175.8-94.1L305 337C261.7 293.7 218.4 250.4 175 207L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-.3 1.6-.5 3.1-.5 4.7z" />
            <path d="M481 31C445.1-4.8 386.9-4.8 351 31l-15 15L322.9 33C294.8 4.9 249.2 4.9 221.1 33L135 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L255 66.9c9.4-9.4 24.6-9.4 33.9 0L302.1 80 175 207 305 337 481 161c35.9-35.9 35.9-94.1 0-129.9z" />
    </Icon>
);

export default Marker;