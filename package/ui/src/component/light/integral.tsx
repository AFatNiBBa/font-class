
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=light integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M216 32c-22.1 0-40 17.9-40 40l0 368c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-24c0-8.8 7.2-16 16-16s16 7.2 16 16l0 24c0 22.1 17.9 40 40 40s40-17.9 40-40l0-368c0-39.8 32.2-72 72-72s72 32.2 72 72l0 24c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24c0-22.1-17.9-40-40-40z" />
    </Icon>
);

export default Integral;