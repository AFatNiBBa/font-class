
import { Icon, generic } from "../../index";

/**
 * A component that renders the `superscript` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=sharp-duotone-solid superscript}
 * @preview ![superscript](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDMyIDAgMzIgMCAxNi43IDAgOS42IDEzLjZMMTc2IDIwMC4yIDI2MS44IDc3LjYgMjcxLjMgNjQgMjg4IDY0bDMyIDAgMzIgMCAwIDY0LTMyIDAtMTUuMyAwTDIxNS4xIDI1Nmw4OS42IDEyOCAxNS4zIDAgMzIgMCAwIDY0LTMyIDAtMzIgMC0xNi43IDAtOS42LTEzLjZMMTc2IDMxMS44IDkwLjIgNDM0LjQgODAuNyA0NDggNjQgNDQ4bC0zMiAwTDAgNDQ4bDAtNjQgMzIgMCAxNS4zIDAgODkuNi0xMjhMNDcuMyAxMjggMzIgMTI4IDAgMTI4IDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMEwzODQgMGwwIDY0IDMyIDAgMCA5Ni0zMiAwIDAgNjQgMzIgMCA2NCAwIDMyIDAgMC02NC0zMiAwIDAtMTI4IDAtMzJMNDQ4IDAgNDE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l32 0 32 0 16.7 0 9.6 13.6L176 200.2 261.8 77.6 271.3 64 288 64l32 0 32 0 0 64-32 0-15.3 0L215.1 256l89.6 128 15.3 0 32 0 0 64-32 0-32 0-16.7 0-9.6-13.6L176 311.8 90.2 434.4 80.7 448 64 448l-32 0L0 448l0-64 32 0 15.3 0 89.6-128L47.3 128 32 128 0 128 0 64z" />
            <path d="M416 0L384 0l0 64 32 0 0 96-32 0 0 64 32 0 64 0 32 0 0-64-32 0 0-128 0-32L448 0 416 0z" />
    </Icon>
);

export default Superscript;