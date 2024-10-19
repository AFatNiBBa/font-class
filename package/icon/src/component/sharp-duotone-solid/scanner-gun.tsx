
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-gun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=sharp-duotone-solid scanner-gun}
 * @preview ![scanner-gun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NGMwIDUwLjkgMzMuOSA5My44IDgwLjMgMTA3LjVMMCAzOTJsMTM2IDgwTDI2MS40IDI1Nmw5MC42IDAgMC0yMjRMMTEyIDMyQzUwLjEgMzIgMCA4Mi4xIDAgMTQ0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDE2IDMyaDE2MHY2NEg0MTZWMzJ6bTAgMTYwaDE2MHY2NEg0MTZ2LTY0em0wIDIyNGgxNjB2NjRINDE2di02NHptMC0yODhoMTYwdjMySDQxNnYtMzJ6bTAgMTYwaDE2MHYzMkg0MTZ2LTMyem0wIDY0aDE2MHYzMkg0MTZ2LTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ScannerGun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144c0 50.9 33.9 93.8 80.3 107.5L0 392l136 80L261.4 256l90.6 0 0-224L112 32C50.1 32 0 82.1 0 144z" />
            <path d="M416 32h160v64H416V32zm0 160h160v64H416v-64zm0 224h160v64H416v-64zm0-288h160v32H416v-32zm0 160h160v32H416v-32zm0 64h160v32H416v-32z" />
    </Icon>
);

export default ScannerGun;