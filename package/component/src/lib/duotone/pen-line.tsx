
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=duotone pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 488c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-304 0c-13.3 0-24 10.7-24 24zM303 79C346.4 122.4 389.7 165.7 433 209c19.9-19.9 39.8-39.8 59.7-59.7c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0L303 79z" />
        <path d="M433 209L303 79 52.8 329.3c-6.6 6.6-11.5 14.8-14.1 23.8L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1L433 209z" />
    </Icon>
);

export default PenLine;