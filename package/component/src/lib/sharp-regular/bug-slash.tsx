
import { Icon } from "../../index";

/**
 * A component that renders the `bug-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug-slash?s=sharp-regular bug-slash}
 * @preview ![bug-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bug-slash.svg)
 */
const BugSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M477.6 348c1.6-9.1 2.4-18.4 2.4-28l0-8 72 0 24 0 0-48-24 0-72 0 0-56 0-14.1 57-57 17-17L520 86.1l-17 17-57 57L432 160l-196.6 0L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L477.6 348zM297.2 208L432 208l0 104.6L297.2 208zM344 367l-48-37.8 0 100.2c-50.3-11-88-55.8-88-109.4l0-60.1-48-37.8 0 41.9-72 0-24 0 0 48 24 0 72 0 0 8c0 27.2 6.8 52.8 18.8 75.3l-64.6 64.6-17 17 33.9 33.9 17-17 59.7-59.7C236.7 462.5 276.3 480 320 480c43 0 82.1-17 110.8-44.6l-38.2-30.1c-13.7 11.7-30.3 20.1-48.6 24.1l0-62.4zM224 96l0 32 192 0 0-32c0-53-43-96-96-96s-96 43-96 96z" />
    </Icon>
);

export default BugSlash;