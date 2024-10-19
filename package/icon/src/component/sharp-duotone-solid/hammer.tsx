
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hammer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=sharp-duotone-solid hammer}
 * @preview ![hammer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmw5NiA5NkwzNTIgMjI0bC02NC02NEwwIDQxNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiA0OGw0OS42LTI5LjhDMjQ1LjUgNi4zIDI2OC4zIDAgMjkxLjUgMEwzMTUgMGMzMy45IDAgNjYuNSAxMy41IDkwLjUgMzcuNUw1MDQgMTM2bC0yNCAyNCAyNCAyNCAyNC0yNCA0OCA0OEw0NTYgMzI4bC00OC00OCAyNC0yNC0yNC0yNC0yNCAyNEwyNzIgMTQ0bDAtNDhMMTc2IDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hammer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l96 96L352 224l-64-64L0 416z" />
            <path d="M176 48l49.6-29.8C245.5 6.3 268.3 0 291.5 0L315 0c33.9 0 66.5 13.5 90.5 37.5L504 136l-24 24 24 24 24-24 48 48L456 328l-48-48 24-24-24-24-24 24L272 144l0-48L176 48z" />
    </Icon>
);

export default Hammer;