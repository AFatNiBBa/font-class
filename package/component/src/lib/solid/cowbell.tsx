
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=solid cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 96l16 0 0-56c0-22.1 17.9-40 40-40L280 0c22.1 0 40 17.9 40 40l0 56 16 0c21.4 0 40.3 14.2 46.2 34.8l64 224c4.1 14.5 1.2 30.1-7.8 42.1s-23.3 19.1-38.3 19.1L48 416c-15.1 0-29.3-7.1-38.3-19.1s-12-27.6-7.8-42.1l64-224C71.7 110.2 90.6 96 112 96zm160 0l0-48-96 0 0 48 96 0zm16 352c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0z" />
    </Icon>
);

export default Cowbell;