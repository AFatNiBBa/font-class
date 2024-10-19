
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-simple-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-simple-from-bracket?s=sharp-duotone-solid money-simple-from-bracket}
 * @preview ![money-simple-from-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggOTZsMCA0MTYgMzg0IDAgMC00MTZMMTI4IDk2em05NiAxNzZjMC00NC4yIDQzLTgwIDk2LTgwczk2IDM1LjggOTYgODBzLTQzIDgwLTk2IDgwcy05Ni0zNS44LTk2LTgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAwTDMyIDAgNjA4IDBsMzIgMCAwIDMyIDAgMTI4IDAgMzItNjQgMCAwLTMyIDAtOTZMNjQgNjRsMCA5NiAwIDMyTDAgMTkybDAtMzJMMCAzMiAwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MoneySimpleFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 96l0 416 384 0 0-416L128 96zm96 176c0-44.2 43-80 96-80s96 35.8 96 80s-43 80-96 80s-96-35.8-96-80z" />
            <path d="M0 0L32 0 608 0l32 0 0 32 0 128 0 32-64 0 0-32 0-96L64 64l0 96 0 32L0 192l0-32L0 32 0 0z" />
    </Icon>
);

export default MoneySimpleFromBracket;