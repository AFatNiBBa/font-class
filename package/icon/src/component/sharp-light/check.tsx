
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-light check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4LjEgMTE4LjJMNDM3IDEyOS43IDE3My42IDQwNGwtMTEuNSAxMi0xMS41LTEyTDExLjEgMjU4LjggMCAyNDcuMmwyMy4xLTIyLjIgMTEuMSAxMS41TDE2Mi4xIDM2OS44IDQxNCAxMDcuNSA0MjUgOTZsMjMuMSAyMi4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448.1 118.2L437 129.7 173.6 404l-11.5 12-11.5-12L11.1 258.8 0 247.2l23.1-22.2 11.1 11.5L162.1 369.8 414 107.5 425 96l23.1 22.2z" />
    </Icon>
);

export default Check;