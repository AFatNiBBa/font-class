
import { Icon } from "../../index";

/**
 * A component that renders the `square-z` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=regular square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm136 32l176 0c9.3 0 17.8 5.4 21.8 13.9s2.6 18.5-3.5 25.6L187.7 336 312 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L260.3 176 136 176c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default SquareZ;