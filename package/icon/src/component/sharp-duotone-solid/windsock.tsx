
import { Icon, generic } from "../../index";

/**
 * A component that renders the `windsock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=sharp-duotone-solid windsock}
 * @preview ![windsock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5NmwwIDQ4IDY0IDAgMCAxMjgtNjQgMCAwIDQ4IDY0IDAgMCA0OCA4MC0xNi43IDAtMjg2LjdjLTI2LjctNS42LTUzLjMtMTEuMS04MC0xNi43bDAgNDhMNjQgOTZ6TTI3MiA3OGwwIDI2MGMzMi02LjcgNjQtMTMuMyA5Ni0yMGwwLTIyMGMtMzItNi43LTY0LTEzLjMtOTYtMjB6bTE2MCAzMy4zbDAgMTkzLjNjMjYuNy01LjYgNTMuMy0xMS4xIDgwLTE2LjdsMC0xNjBjLTI2LjctNS42LTUzLjMtMTEuMS04MC0xNi43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJMNjQgMCAwIDAgMCAzMiAwIDQ4MGwwIDMyIDY0IDAgMC0zMkw2NCAzMnpNMjA4IDY0LjdsMCAyODYuN0wyNzIgMzM4bDAtMjYwTDIwOCA2NC43ek0zNjggMzE4bDY0LTEzLjMgMC0xOTMuM0wzNjggOThsMCAyMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 96l0 48 64 0 0 128-64 0 0 48 64 0 0 48 80-16.7 0-286.7c-26.7-5.6-53.3-11.1-80-16.7l0 48L64 96zM272 78l0 260c32-6.7 64-13.3 96-20l0-220c-32-6.7-64-13.3-96-20zm160 33.3l0 193.3c26.7-5.6 53.3-11.1 80-16.7l0-160c-26.7-5.6-53.3-11.1-80-16.7z" />
            <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32L64 32zM208 64.7l0 286.7L272 338l0-260L208 64.7zM368 318l64-13.3 0-193.3L368 98l0 220z" />
    </Icon>
);

export default Windsock;