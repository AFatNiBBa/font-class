
import { Icon, generic } from "../../index";

/**
 * A component that renders the `litecoin-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/litecoin-sign?s=sharp-duotone-solid litecoin-sign}
 * @preview ![litecoin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04LjQgMjI5LjRMMjYgMjkxbDMwLjgtOC44IDcuMi0yLjFjMC0yMi4yIDAtNDQuNCAwLTY2LjZsLTI0LjggNy4xTDguNCAyMjkuNHpNMTI4IDE5NS4zbDAgNjYuNiAxMzYuOC0zOS4xIDMwLjgtOC44TDI3OCAxNTIuNGwtMzAuOCA4LjhMMTI4IDE5NS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDMybDAgMzIgMCAzNTIgMjI0IDAgMzIgMCAwIDY0LTMyIDBMOTYgNDgwbC0zMiAwIDAtMzJMNjQgNjRsMC0zMiA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LitecoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M8.4 229.4L26 291l30.8-8.8 7.2-2.1c0-22.2 0-44.4 0-66.6l-24.8 7.1L8.4 229.4zM128 195.3l0 66.6 136.8-39.1 30.8-8.8L278 152.4l-30.8 8.8L128 195.3z" />
            <path d="M128 32l0 32 0 352 224 0 32 0 0 64-32 0L96 480l-32 0 0-32L64 64l0-32 64 0z" />
    </Icon>
);

export default LitecoinSign;