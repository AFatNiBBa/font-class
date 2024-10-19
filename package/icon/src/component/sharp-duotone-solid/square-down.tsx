
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-duotone-solid square-down}
 * @preview ![square-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk2IDI1Nmw4MCAwIDAtMTI4IDk2IDBjMCA0Mi43IDAgODUuMyAwIDEyOGw4MCAwIDAgMzJMMjI0IDQxNiA5NiAyODhsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3MiAyNTZsODAgMCAwIDMyTDIyNCA0MTYgOTYgMjg4bDAtMzIgODAgMCAwLTEyOCA5NiAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 256l80 0 0-128 96 0c0 42.7 0 85.3 0 128l80 0 0 32L224 416 96 288l0-32z" />
            <path d="M272 256l80 0 0 32L224 416 96 288l0-32 80 0 0-128 96 0 0 128z" />
    </Icon>
);

export default SquareDown;