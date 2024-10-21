
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-paintbrush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-paintbrush?s=duotone pen-paintbrush}
 * @preview ![pen-paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-paintbrush.svg)
 */
const PenPaintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 56C0 41.7 5.5 27.3 16.4 16.4S41.7 0 56 0S84.7 5.5 95.6 16.4L226.3 147.1l-79.2 79.2L16.4 95.6C5.5 84.7 0 70.3 0 56zM290.6 423.9L423.9 290.6c50.3 11 88.1 55.8 88.1 109.4c0 3.9-.2 7.8-.6 11.6c-1.8 17.5 10.2 36.4 27.8 36.4l4.8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53.6 0-98.5-37.7-109.4-88.1z" />
        <path d="M410.7 19.3L354.3 75.7 468.3 189.7l56.4-56.4c25-25 25-65.5 0-90.5L501.3 19.3c-25-25-65.5-25-90.5 0zm-79 79L76.9 353.2c-6.7 6.7-11.6 15.1-14.2 24.2l-29.7 104c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l104-29.7c9.2-2.6 17.5-7.5 24.2-14.2L445.7 212.3 331.7 98.3z" />
    </Icon>
);

export default PenPaintbrush;