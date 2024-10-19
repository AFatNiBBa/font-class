
import { Icon, generic } from "../../index";

/**
 * A component that renders the `panel-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panel-fire?s=sharp-duotone-solid panel-fire}
 * @preview ![panel-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDMzNyAwYy0zMC41LTM0LTQ5LTc4LjktNDktMTI4LjJjMC0yLjYgLjEtNS4yIC4yLTcuOEwyNjQgMzQ0bDAtNDggMzIuOCAwYzguNC0yNi44IDIyLTUxIDM3LjItNzJMNjQgMjI0IDY0IDk2bDMyMCAwIDAgNzIuOGMxNy4xLTE1LjUgMzMuNy0yNy44IDQ3LTM2LjFsMTctMTAuNkw0NDggMzIgMCAzMnpNNzIgMjk2bDQ4IDAgMCA0OC00OCAwIDAtNDh6bTk2IDBsNDggMCAwIDQ4LTQ4IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAzNTJjMC04OS42IDg1LjMtMTY1LjMgMTI4LTE5Mmw2NCA2NCAzMi0zMmM3Ni44IDY0IDk2IDEzMy4zIDk2IDE2MGMwIDg4LjQtNzEuNiAxNjAtMTYwIDE2MHMtMTYwLTcxLjYtMTYwLTE2MHpNNDgwIDQ2NC4yYzM1LjMgMCA2NC0yOC43IDY0LTY0YzAtNDgtNjQtOTYtNjQtOTZzLTY0IDQ4LTY0IDk2YzAgMzUuMyAyOC43IDY0IDY0IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PanelFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l337 0c-30.5-34-49-78.9-49-128.2c0-2.6 .1-5.2 .2-7.8L264 344l0-48 32.8 0c8.4-26.8 22-51 37.2-72L64 224 64 96l320 0 0 72.8c17.1-15.5 33.7-27.8 47-36.1l17-10.6L448 32 0 32zM72 296l48 0 0 48-48 0 0-48zm96 0l48 0 0 48-48 0 0-48z" />
            <path d="M320 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default PanelFire;