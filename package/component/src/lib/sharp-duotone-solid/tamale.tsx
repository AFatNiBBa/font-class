
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tamale` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tamale?s=sharp-duotone-solid tamale}
 * @preview ![tamale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tamale.svg)
 */
const Tamale: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 48L29.5 240l57 0L72 72.7l-.7-8 15.9-1.4 .7 8L102.6 240l49.4 0 0-176 0-8 16 0 0 8 0 176 49.4 0L232 71.3l.7-8 15.9 1.4-.7 8L233.4 240l57 0L320 48s-48-48-160-48S0 48 0 48zM0 464s48 48 160 48s160-48 160-48L290.5 272l-57 0L248 439.3l.7 8-15.9 1.4-.7-8-9.7-111.4-17.5 13.2-9.6-12.8L168 293.3 168 448l0 8-16 0 0-8 0-154.7c-9.1 12.1-18.1 24.2-27.2 36.3l-9.6 12.8L97.7 329.2 88 440.7l-.7 8-15.9-1.4 .7-8L86.6 272l-57 0L0 464zM99.3 310.2c9.6-12.8 19.1-25.5 28.7-38.2l-25.4 0-3.3 38.2zM192 272c9.6 12.8 19.1 25.5 28.8 38.4c-1.2-12.9-2.3-25.6-3.4-38.4L192 272z" />
        <path d="M8 240l16 0 136 0 136 0 16 0 0 32-16 0-104 0 28.8 38.4 9.6 12.8-25.6 19.2-9.6-12.8L160 282.7l-35.2 46.9-9.6 12.8L89.6 323.2l9.6-12.8L128 272 24 272 8 272l0-32z" />
    </Icon>
);

export default Tamale;