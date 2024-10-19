
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple?s=sharp-duotone-solid chart-simple}
 * @preview ![chart-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMTI4IDAgMCA0NDgtMTI4IDAgMC00NDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggOTZMMzIwIDk2bDAgMzg0IDEyOCAwIDAtMzg0ek0xMjggMjI0TDAgMjI0IDAgNDgwbDEyOCAwIDAtMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32l128 0 0 448-128 0 0-448z" />
            <path d="M448 96L320 96l0 384 128 0 0-384zM128 224L0 224 0 480l128 0 0-256z" />
    </Icon>
);

export default ChartSimple;