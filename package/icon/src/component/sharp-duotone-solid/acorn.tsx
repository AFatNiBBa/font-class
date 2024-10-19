
import { Icon, generic } from "../../index";

/**
 * A component that renders the `acorn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=sharp-duotone-solid acorn}
 * @preview ![acorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxOTJsMCAzMmMwIDgwIDMyIDIwOCAxNzYgMjU2YzE0NC00OCAxNzYtMTc2IDE3Ni0yNTZsMC0zMmMtMTE3LjQgMC0yMzQuNyAwLTM1MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU5LjcgNDguNGwxMy43LTE5LjdMMjMzLjkgMS40IDIyMC4zIDIxLjFjLTkgMTIuOS0xNS4xIDI3LjYtMTguMSA0Mi45TDk2IDY0QzQzIDY0IDAgMTA3IDAgMTYwbDAgMzIgNDQ4IDAgMC0zMmMwLTUzLTQzLTk2LTk2LTk2TDI1MS44IDY0YzEuOS01LjUgNC42LTEwLjcgOC0xNS42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 192l0 32c0 80 32 208 176 256c144-48 176-176 176-256l0-32c-117.4 0-234.7 0-352 0z" />
            <path d="M259.7 48.4l13.7-19.7L233.9 1.4 220.3 21.1c-9 12.9-15.1 27.6-18.1 42.9L96 64C43 64 0 107 0 160l0 32 448 0 0-32c0-53-43-96-96-96L251.8 64c1.9-5.5 4.6-10.7 8-15.6z" />
    </Icon>
);

export default Acorn;