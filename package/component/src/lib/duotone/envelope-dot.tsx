
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=duotone envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L481.7 158.7C444.3 152 416 119.3 416 80c0-1.4 0-2.7 .1-4.1s.2-2.7 .3-4c.3-2.7 .7-5.3 1.2-7.9L48 64C21.5 64 0 85.5 0 112zm0 64L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        <path d="M416 80a80 80 0 1 1 160 0A80 80 0 1 1 416 80z" />
    </Icon>
);

export default EnvelopeDot;