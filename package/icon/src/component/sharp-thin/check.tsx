
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-thin check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQzLjMgMTEybC01LjcgNS43LTI3MiAyNzItNS43IDUuNy01LjctNS43LTE0NC0xNDRMNC43IDI0MCAxNiAyMjguN2w1LjcgNS43TDE2MCAzNzIuNyA0MjYuMyAxMDYuM2w1LjctNS43TDQ0My4zIDExMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M443.3 112l-5.7 5.7-272 272-5.7 5.7-5.7-5.7-144-144L4.7 240 16 228.7l5.7 5.7L160 372.7 426.3 106.3l5.7-5.7L443.3 112z" />
    </Icon>
);

export default Check;