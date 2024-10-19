
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bills-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills-simple?s=sharp-duotone-solid money-bills-simple}
 * @preview ![money-bills-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgMjRMMCA0NTZsMCAyNCAyNCAwIDQ5NiAwIDI0IDAgMC00OC0yNCAwTDQ4IDQzMmwwLTMxMiAwLTI0TDAgOTZ6TTI4OCAyMDhhODAgODAgMCAxIDAgMTYwIDAgODAgODAgMCAxIDAgLTE2MCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQwIDMyTDk2IDMybDAgMzUyIDU0NCAwIDAtMzUyek0zNjggMTI4YTgwIDgwIDAgMSAxIDAgMTYwIDgwIDgwIDAgMSAxIDAtMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MoneyBillsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96zM288 208a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
            <path d="M640 32L96 32l0 352 544 0 0-352zM368 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default MoneyBillsSimple;