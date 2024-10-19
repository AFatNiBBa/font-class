
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-thin union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJsMCA4IDAgMjY0YzAgODguNCA3MS42IDE2MCAxNjAgMTYwczE2MC03MS42IDE2MC0xNjBsMC0yNjQgMC04IDE2IDAgMCA4IDAgMjY0YzAgOTcuMi03OC44IDE3Ni0xNzYgMTc2UzE2IDQwMS4yIDE2IDMwNEwxNiA0MGwwLTggMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 8 0 264c0 88.4 71.6 160 160 160s160-71.6 160-160l0-264 0-8 16 0 0 8 0 264c0 97.2-78.8 176-176 176S16 401.2 16 304L16 40l0-8 16 0z" />
    </Icon>
);

export default Union;